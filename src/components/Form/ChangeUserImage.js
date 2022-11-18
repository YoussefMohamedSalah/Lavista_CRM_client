/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/jsx-no-comment-textnodes */
// /* eslint-disable no-alert */
// /* eslint-disable react/button-has-type */

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Stack, Box, CircularProgress } from '@mui/material';

function ChangeUserImage({ handleClose, show }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  // --------Image Upload Proccess--------------------------
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');
  const [imagePanel, setImagePanel] = useState();
  // ---*---*---*---*---*---*---*---*---*---*---*---*---*---
  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };
  // ---*---*---*---*---*---*---*---*---*---*---*---*---*---
  const handleApi = async () => {
    const url = `${process.env.REACT_APP_API_KEY}/api/v1/accounts/edit-user/${userInfo?.id}/`;

    const formData = new FormData();
    formData.append('avatarUrl', image);
    setLoading(true);

    const config = {
      headers: {
        'Content-type': 'multipart/form-data',
        Authorization: `Bearer ${userInfo?.access}`,
      },
    };
    axios
      .post(url, formData, config)
      .then((result) => {
        const imageUrl = result.data.avatarUrl;
        setImagePanel(imageUrl);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(true);
  };
  // -----------------------------------------------------------------------
  // Data after sending the token Validation__Authorization
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${userInfo?.access}`,
    },
  };
  //  getting sub_User_Data Function
  const getUserData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_KEY}/api/v1/accounts/user-details/${userInfo?.id}`,
        config
        );
        setImagePanel(response?.data.avatarUrl)
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getUserData();
  },[]);
  // ---------------------------------------------------------------------------------------

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ flexDirection: { xs: 'column', md: 'row', lg: 'row' } }}
          >
            <Box p={2} sx={{ height: '30vh', width: '100%' }}>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ height: { xs: '100%', md: '100%', lg: '100%' }, position: 'relative' }}
              >
                {loading ? (
                  <CircularProgress sx={{ width: '3rem', height: '3rem' }} />
                ) : (
                  <Box
                    component="img"
                    src={`${process.env.REACT_APP_API_KEY}${imagePanel}`}
                    sx={{
                      borderRadius: '50%',
                      maxWidth: {
                        xs: '82%!important',
                        sm: '55%!important',
                        md: '235px!important',
                        lg: '235px!important',
                      },
                      position: 'absolute',
                    }}
                  />
                )}
                <input
                  type="file"
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    color: 'transparent',
                    left: '-29px',
                    top: '-26px',
                  }}
                />
              </Stack>
            </Box>
          </Stack>
          {/* -------- */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleApi}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ChangeUserImage;
