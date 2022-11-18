/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
// Mui
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Button,
  Alert,
  IconButton,
  Collapse,
  FormHelperText,
} from '@mui/material';
//
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import { states } from '../../../components/EgyptStates';
// ----------------------------------------------------------------------
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function UserEditForm({ userData }) {
  const [open, setOpen] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${userInfo?.access}`,
    },
  };
  // ---------------------------------------------------------------------------------------
  const formHandler = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  // ---------------------------------------------------------------------------------------
  const formik = useFormik({
    initialValues: {
      JobTitle: '',
      Company: '',
      workingFrom: '00/00/0000',
      workingTill: '00/00/0000',
      workingExperiance: '',
    },
    validationSchema: Yup.object({
      JobTitle: Yup.string().max(40, 'limit passed').min(1, 'min 1 word'),
      Company: Yup.string().max(40, 'limit passed').min(1, 'min 1 word'),
      workingFrom: Yup.date(),
      workingTill: Yup.date(),
      workingExperiance: Yup.number(),
    }),

    onSubmit: (values) => {
      updateUserData(values);
      formHandler();
    },
  });
  const updateUserData = async (values) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_KEY}/api/v1/accounts/edit-user/${userInfo?.id}/`, values, config);
    } catch (err) {
      console.error(err);
    }
  };
  // ---------------------------------------------------------------------------------------

  return (
    <>
      <form autoComplete="off" {...formik.values}>
        <Card>
          <CardHeader subheader="The information can be edited" title="Last Working Experience" />
          <Divider />
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
              Info Edited Successfully
            </Alert>
          </Collapse>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Please specify your Gob Title"
                  label="Job Title"
                  name="JobTitle"
                  placeholder={userData?.JobTitle ? userData?.JobTitle : 'JobTitle'}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.JobTitle || ''}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Company Name"
                  name="Company"
                  placeholder={userData?.Company ? userData?.Company : 'Company'}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Company || ''}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="working From"
                  name="workingFrom"
                  placeholder={userData?.workingFrom ? userData?.workingFrom : 'workingFrom'}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.workingFrom || ''}
                  type="date"
                  focused
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="working Till"
                  name="workingTill"
                  focused
                  placeholder={userData?.workingTill ? userData?.workingTill : 'workingTill'}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.workingTill || ''}
                  type="date"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Experiance In Years"
                  name="workingExperiance"
                  placeholder={userData?.workingExperiance ? userData?.workingExperiance : 'workingExperiance'}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.workingExperiance || ''}
                  variant="outlined"
                />
                <FormHelperText id="component-helper-text">Example ( 1 year )</FormHelperText>
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              p: 2,
            }}
          >
            <Button onClick={() => formik.handleSubmit} color="primary" variant="contained" type="submit">
              Save
            </Button>
          </Box>
        </Card>
      </form>
    </>
  );
}
