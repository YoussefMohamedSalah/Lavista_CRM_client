/* eslint-disable react/prop-types */
import * as React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Alert,
  Collapse,
  IconButton,
  Container,
  Typography,
  Grid,
  Stepper,
  Step,
  StepLabel,
  Button,
  Stack,
} from '@mui/material';

// imports
import { CreatorCard } from './CreatorCard';
import { CreatorAssigningForm } from './CreatorAssigningForm';
import { PaymentMethod } from './PaymentMethod';
import CreatorFilesUpload from './CreatorFilesUpload';
import AfterAssigningMessage from './AfterAssigningMessage';

export default function CreatorStepper() {
  const steps = ['Complete Information', 'Upload Work Examples', 'Choose Payment Method'];
  // stepper state
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  // stepper functionality
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  // -- app State
  const [open, setOpen] = React.useState(true);
  const [userData, setUserData] = React.useState({});
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${userInfo.access}`,
    },
  };
  //  getting sub_User_Data Function
  const getUserData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_KEY}/api/v1/accounts/user-details/${userInfo.id}`,
        config
      );
      setUserData(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  React.useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //   ----

  return (
    <Stack direction="column" sx={{ width: '100%' }}>
      {/* Stepper */}
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption">Optional</Typography>;
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <Stack direction="column">
            {/* <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography> */}
            <Box>
              <AfterAssigningMessage />
            </Box>
            {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box> */}
          </Stack>
        ) : (
          <>
            {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
            {/* --------------------------------------------------------------------------------------------- */}
            {/* steps === 0  */}
            {activeStep === 0 && (
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  py: 8,
                }}
              >
                <Container maxWidth="lg">
                  <Typography sx={{ mb: 3 }} variant="h4">
                    Add You'r Info
                  </Typography>
                  <Grid container spacing={3}>
                    <CreatorAssigningForm userData={userData} />
                  </Grid>
                </Container>
              </Box>
            )}
            {/* steps === 1  */}
            {activeStep === 1 && <CreatorFilesUpload userData={userData} />}
            {/* steps === 2  */}
            {activeStep === 2 && (
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  py: 8,
                }}
              >
                <Container maxWidth="lg">
                  <Typography sx={{ mb: 3 }} variant="h4">
                    Payment Method
                  </Typography>
                  <PaymentMethod />
                </Container>
              </Box>
            )}
            {/* --------------------------------------------------------------------------------------------- */}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}

              <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
            </Box>
          </>
        )}
      </Box>
      {/* Stepper */}
    </Stack>
  );
}
