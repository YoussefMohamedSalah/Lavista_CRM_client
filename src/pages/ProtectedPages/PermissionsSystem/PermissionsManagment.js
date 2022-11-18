import { Grid, Container, Typography, Card, CardContent, Box, CardActions, Link } from '@mui/material';
// components
// import Page from '../components/Page';
import React, { useEffect, useState } from 'react';
// bootsrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import UploadImage from '../../../components/Form/UploadImage';
import Page from '../../../components/Page';
// ----------------------------------------------------------------------

export default function PermissionsManagment() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // const userFullName = userInfo.name;
  // const userFirstName = userFullName.split(' ');

  // Data after sending the token Validation__Authorization
  const [userData, setUserData] = useState({});
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${userInfo.access}`,
    },
  };

  const formik = useFormik({
    initialValues: {
      first_name: userData?.first_name,
      last_name: userData?.last_name,
      email: userData?.email,
      mobile_number: userData?.mobile_number,
      address: userData?.address,
      city: userData?.city,
      post_code: userData?.post_code,
      country: userData?.country,
      state: userData?.state,
      company: userData?.company,
    },
    validationSchema: Yup.object({
      first_name: Yup.string().max(40, 'limit passed').min(1, 'min 1 word'),
      last_name: Yup.string().max(40, 'limit passed').min(1, 'min 1 word'),
      email: Yup.string().email(),
      mobile_number: Yup.string().max(11, 'Min 11 number').min(11, 'Maximum 11 number'),
      country: Yup.string(),
      city: Yup.string(),
      company: Yup.string(),
    }),

    onSubmit: (values) => {},
  });

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          {/* Hi, Welcome {userFirstName[0]} 👋 */}
          <br />
          Manage Your Account Here.
        </Typography>
        {/* <Box>
          <Row>
            <UploadImage />
          </Row>
        </Box> */}
      </Container>
    </Page>
  );
}
