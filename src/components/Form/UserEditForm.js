/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
//
import { Box } from '@mui/material';
// bootsrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import axios from 'axios';
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

export default function UserEditForm({ success, userData, updateUserData }) {
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

    onSubmit: (values) => {
      updateUserData(values);
      success();
    },
  });

  // --------Image Upload Proccess--------------------------
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [image, setImage] = useState('');
  const [imagePanel, setImagePanel] = useState('');
  const [loading, setLoading] = useState(false);
  // ---*---*---*---*---*---*---
  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };
  // ---*---*---*---*---*---*---
  const handleApi = async () => {
    // call the api
    const url = `${process.env.REACT_APP_API_KEY}/api/v1/accounts/edit-user/${userInfo.id}/`;

    const formData = new FormData();
    formData.append('avatarUrl', image);
    setLoading(true);

    const config = {
      headers: {
        'Content-type': 'multipart/form-data',
        Authorization: `Bearer ${userInfo.access}`,
      },
    };
    axios
      .post(url, formData, config)
      .then((result) => {
        const imageUrl = result.data.avatarUrl;
        setImagePanel(`${process.env.REACT_APP_API_KEY}${imageUrl}`);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(true);
  };
  // --------Image Upload Proccess--------------------------
  return (
    <>
      <Box sx={style}>
        <Form autoComplete="off" onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Label>Name</Form.Label>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder={userData?.first_name ? userData?.first_name : 'First Name'}
                  name="first_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.first_name}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder={userData?.last_name ? userData?.last_name : 'Last Name'}
                  name="last_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.last_name}
                />
              </Col>
            </Row>
            {formik.touched.first_name && formik.errors.first_name && <p>{formik.errors.first_name}</p>}
            {formik.touched.last_name && formik.errors.last_name && <p>{formik.errors.last_name}</p>}
          </Form.Group>
          <Form.Group className="mb-2 d-flex justify-content-between">
            <Form.Label style={{ paddingTop: '7px' }}>E-Mail :</Form.Label>
            <Form.Control
              style={{ width: '81%' }}
              plaintext
              readOnly
              defaultValue="email@example.com"
              type="email"
              placeholder={userData?.email}
              name="email"
              value={formik.values.email}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder={userData?.mobile_number ? userData?.mobile_number : 'Phone Number'}
              name="mobile_number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mobile_number}
            />
            {formik.touched.mobile_number && formik.errors.mobile_number && <p>{formik.errors.mobile_number}</p>}
          </Form.Group>
          {/* ----------------------------------------- */}
          <Form.Group className="mb-3">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              placeholder={userData?.company ? userData?.company : 'Company Name'}
              name="company"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.company}
            />
            {formik.touched.company && formik.errors.company && <p>{formik.errors.company}</p>}
          </Form.Group>
          {/* ----------------------------- */}
          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder={userData?.country ? userData?.country : 'Country'}
                  name="country"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.country}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder={userData?.city ? userData?.city : 'City'}
                  name="city"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                />
              </Col>
            </Row>
            {formik.touched.country && formik.errors.country && <p>{formik.errors.country}</p>}
            {formik.touched.city && formik.errors.city && <p>{formik.errors.city}</p>}
          </Form.Group>
          <Button onClick={() => formik.handleSubmit} variant="primary" type="submit">
            Edit
          </Button>
        </Form>
      </Box>
    </>
  );
}
