import { Grid, Container, Typography, Card, Stack, Box, CardActions, Link } from '@mui/material';
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
import FileTypeChose from './FileTypeChose';

const UploadImageForm = ({ ScopeList, type }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userFullName = userInfo.name;
  const userFirstName = userFullName.split(' ');

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

  // options for intrestes
  const filesCategory = [
    'Psd Templates',
    'Designer Bag',
    'Full Wall Paper',
    'Wall Decoration',
    'Laser Art Cut',
    'Graphic Artists',
  ];
  const filesType = ['PSD', 'XD', 'SVG', 'EPS', 'PDF', 'INDD'];

  return (
    <Box sx={{ height: '100%' }}>
      <Form onSubmit={formik.handleSubmit} style={{ height: '100%' }}>
        <Stack direction="column" justifyContent="space-between" sx={{ height: '100%' }} className="stackkkkkk">
          <Box>
            <Form.Group className="mb-2">
              <Row style={{ marginTop: '1rem' }}>
                <Form.Label>File Title </Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="File Title"
                    name="File Title"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.first_name}
                  />
                </Col>
              </Row>
              {formik.touched.first_name && formik.errors.first_name && <p>{formik.errors.first_name}</p>}
              <Row style={{ marginTop: '1rem' }}>
                <Form.Label> File Description</Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="File Description"
                    name="File Description"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.last_name}
                  />
                </Col>
              </Row>
              {formik.touched.last_name && formik.errors.last_name && <p>{formik.errors.last_name}</p>}
            </Form.Group>
            <FileTypeChose ScopeList={filesCategory} type={'category'} />
            <FileTypeChose ScopeList={filesType} type={'file type'} />
          </Box>
          <Button onClick={() => formik.handleSubmit} variant="primary" type="submit">
            Upload New File
          </Button>
        </Stack>
      </Form>
    </Box>
  );
};

export default UploadImageForm;
