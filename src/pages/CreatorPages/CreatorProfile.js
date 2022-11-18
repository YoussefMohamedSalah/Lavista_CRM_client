/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Typewriter from 'typewriter-effect';

import CloseIcon from '@mui/icons-material/Close';
import { Box, Alert, Collapse, IconButton, Container, Typography, Grid, Stack } from '@mui/material';

// imports
import { CreatorCard } from './CreatorCard';
import { CreatorAssigningMessage } from './CreatorAssigningMessage';
import { CreatorProfileInfo } from './CreatorProfileInfo';
import CreatorBtn from '../../components/Btns/CreatorBtn/CreatorBtn';
import ChangeUserImage from '../../components/Form/ChangeUserImage';

export default function CreatorProfile() {
    // ----------------------Change Profile Image Modal -----
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // -------------------------------------------
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
      {/* collapse Info */}
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {/* typewriter effect */}
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  'Now You Can Assign YourSelf As <strong>CONTENT CREATOR</strong> At Osoul World Community 🌍 '
                )
                .typeString(
                  "</br>Hurry Up, It's Totally <span style='color: #27ae60'><strong>Free!</strong></span></br>"
                )
                .typeString("You Can Start Earning Selling You'r Pieces Of Art Right Now !!")

                .callFunction(() => {
                  console.log('String typed out!');
                })
                .callFunction(() => {
                  console.log('All strings were deleted');
                })
                .start();
            }}
          />
        </Alert>
      </Collapse>
      {/* collapse Info */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3 }} variant="h4">
            Account
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <CreatorCard  handleShow={handleShow} userData={userData} />
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
              {userInfo.isVerified ? <CreatorProfileInfo /> : <CreatorAssigningMessage />}
            </Grid>
          </Grid>
        </Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 2,
          }}
        >
          {userInfo.isVerified ? (
            'hello'
          ) : (
            <CreatorBtn btnContent={'Assign as content creator'} path={'/dashboard/creator-assign'} />
          )}
        </Box>
      </Box>
      {/* ----------------- */}
      <ChangeUserImage
        handleClose={handleClose}
        show={show}
      />
    </Stack>
  );
}
