/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
//
// bootsrap
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
      first_name: userData?.first_name,
      last_name: userData?.last_name,
      email: userData?.email,
      mobile_number: userData?.mobile_number,
      country: userData?.country,
      state: userData?.city,
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required().max(40, 'limit passed').min(1, 'min 1 word'),
      last_name: Yup.string().required().max(40, 'limit passed').min(1, 'min 1 word'),
      email: Yup.string().required().email(),
      mobile_number: Yup.string().required().max(11, 'Min 11 number').min(11, 'Maximum 11 number'),
      country: Yup.string().required(),
      city: Yup.string().required(),
      company: Yup.string().required(),
    }),

    onSubmit: (values) => {
      updateUserData(values);
      formHandler();
    },
  });
  // ---------------------------------------------------------------------------------------
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
      <form autoComplete="off" {...formik.values} onSubmit={formik.handleSubmit}>
        <Card>
          <CardHeader subheader="The information can be edited" title="Basic Info" />
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
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Please specify the first name"
                  label="First name"
                  placeholder={userData?.first_name ? userData?.first_name : 'First Name'}
                  name="first_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.first_name}
                  variant="outlined"
                />
                {formik.touched.first_name && formik.errors.first_name && <p>{formik.errors.first_name}</p>}
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Last name"
                  required
                  placeholder={userData?.last_name ? userData?.last_name : 'Last Name'}
                  name="last_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.last_name}
                  variant="outlined"
                />
                {formik.touched.last_name && formik.errors.last_name && <p>{formik.errors.last_name}</p>}
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  placeholder={userData?.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="email"
                  value={formik.values.email || ''}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  placeholder={userData?.mobile_number ? userData?.mobile_number : 'Phone Number'}
                  name="mobile_number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobile_number || ''}
                  variant="outlined"
                />
                {formik.touched.mobile_number && formik.errors.mobile_number && <p>{formik.errors.mobile_number}</p>}
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Country"
                  placeholder={userData?.country ? userData?.country : 'Country'}
                  name="country"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.country || ''}
                  variant="outlined"
                />
                {formik.touched.country && formik.errors.country && <p>{formik.errors.country}</p>}
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Select State"
                  placeholder={userData?.city ? userData?.city : 'city'}
                  name="city"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city || ''}
                  select
                  SelectProps={{ native: true }}
                  variant="outlined"
                >
                  {formik.touched.city && formik.errors.city && <p>{formik.errors.city}</p>}

                  {states.map((option) => (
                    <option key={option.value} value={option.value || ''}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
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
