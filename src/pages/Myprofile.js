/* eslint-disable react/button-has-type */
import { NavLink as RouterLink, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
// MUI
import styled from '@emotion/styled';
import { Stack, Typography, Box, Button, Modal } from '@mui/material';

// icons
import { FaCoins } from 'react-icons/fa';
import { FiEdit3 } from 'react-icons/fi';
import Shape from 'react-clip-path';
import './Myprofile.css';

// components
import UserEditForm from '../components/Form/UserEditForm';
import Page from '../components/Page';
import CreatorBtn from '../components/Btns/CreatorBtn/CreatorBtn';
import ScopeList from '../components/ScopeList';
import ChangeUserImage from '../components/Form/ChangeUserImage';

// --------------------------------------------------------------------------------------------------------------------------------\\
export default function Myprofile() {
  const [openEdit, setOpenEdit] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const Navigate = useNavigate();
  // ----------------------Change Profile Image Modal -----
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // -------------------------------------------

  // Data after sending the token Validation__Authorization
  const [userData, setUserData] = useState({});
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
      setUserData(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  // ---------------------------------------------------------------------------------------
  const updateUserData = async (values) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_KEY}/api/v1/accounts/edit-user/${userInfo?.id}/`, values, config);
    } catch (err) {
      console.error(err);
      console.log(err);
    }
  };
  // ---------------------------------------------------------------------------------------
  // Edit modal handling
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => {
    NotificationManager.success('Edit Success', 'Success message');
    setOpenEdit(false);
  };

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openEdit, show]);

  // -----styled Components---
  const ProfileHeadDiv = styled.div`
    transform: translateY(5.5rem);
  `;
  const MiddleContainerDiv = styled.div`
    &:hover {
      border: 1px solid #006673;
    }
  `;
  const CoverDiv = styled.div`
    background-image: url(https://images.unsplash.com/photo-1530305408560-82d13781b33a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80);
    background-size: cover;
    background-repeat: no-repeat;
  `;
  const RoundDiv = styled.div`
    border-radius: 50%;
    width: 35px;
    height: 35px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  `;

  return (
    <Page title="My-Profile" className="MyProfile_Page" style={{ minHeight: '100vh', overflowX: 'hidden' }}>
      <div className="row py-5 px-4">
        <div className="col-md-5 mx-auto w-100">
          <div className="bg-white shadow rounded overflow-hidden">
            <CoverDiv className="px-4 pt-0 pb-4 cover">
              <ProfileHeadDiv className="media d-flex align-items-end profile-head">
                <Box onClick={() => handleShow()} className="profile mr-3">
                  <img
                    src={
                      userData?.avatarUrl !== '/media/placeholder.png'
                        ? `${process.env.REACT_APP_API_KEY}${userData?.avatarUrl}`
                        : 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80'
                    }
                    alt="photoURL"
                    width="130"
                    className="rounded mb-5 img-thumbnail"
                  />
                </Box>
                <div className="info-section mb-5 ps-3 text-white" style={{ cursor: 'pointer' }}>
                  <Stack direction="row" gap={2}>
                    <Typography variant="h4" as="h5" sx={{ fontWeight: '500' }}>
                      {userData?.first_name} {userData?.last_name}
                    </Typography>
                    <FiEdit3 onClick={() => handleOpenEdit()} color="#dee2e6" />
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Typography variant="body1" sx={{ fontWeight: '500', marginBottom: '1rem' }}>
                      {userData?.company !== 'NA' ? userData?.company : ''}
                    </Typography>
                  </Stack>
                </div>
              </ProfileHeadDiv>
            </CoverDiv>
            <div className="bg-light p-4 d-flex justify-content-end text-center">
              <ul className="list-inline mb-0" style={{ zIndex: '2' }}>
                <li className="list-inline-item">
                  <Box component={RouterLink} to={'/dashboard/profile'} sx={{ color: 'black', textDecoration: 'none' }}>
                    <h5 className="font-weight-bold mb-0 d-block">{userData?.photos}</h5>
                    <small className="text-muted"> Photos</small>
                  </Box>
                </li>
                <li className="list-inline-item">
                  <Box component={RouterLink} to={'/dashboard/Liked'} sx={{ color: 'black', textDecoration: 'none' }}>
                    <h5 className="font-weight-bold mb-0 d-block">{userData?.likes}</h5>
                    <small className="text-muted"> Liked</small>
                  </Box>
                </li>
                <li className="list-inline-item">
                  <Box component={RouterLink} to={'/dashboard/saved'} sx={{ color: 'black', textDecoration: 'none' }}>
                    <h5 className="font-weight-bold mb-0 d-block">{userData?.downloads}</h5>
                    <small className="text-muted"> Downloads</small>
                  </Box>
                </li>
              </ul>
            </div>
            <Stack direction="column" justifyContent="space-between" sx={{ padding: '0.5rem 1.5rem', width: '100%' }}>
              <div className="info-section d-flex w-100" style={{ justifyContent: 'space-between' }}>
                <Button onClick={handleOpenEdit} gap={1}>
                  <Typography variant="h5" sx={{ color: '#212529', padding: '0px 4px' }}>
                    About
                  </Typography>
                  <FiEdit3 color="black" />
                </Button>
                <Box>
                  <CreatorBtn btnContent={'Creator Profile'} path={'/dashboard/creatorprofile'} />
                </Box>
              </div>
              <Box className="p-3 m-1 rounded shadow-sm bg-light">
                {/* ----------------------------------------------------------- */}
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ flexWrap: { lg: 'nowrap', md: 'nowrap', sm: 'wrap', xs: 'wrap' } }}
                >
                  <Box>
                    <Typography className="font-italic mb-0">{userData?.role}</Typography>
                    <Typography className="font-italic mb-0">
                      Lives in {userData?.country !== null ? userData?.country : '...'},{' '}
                      {userData?.city !== null ? userData?.city : null}{' '}
                    </Typography>
                    <Typography className="font-italic mb-0">Photographer</Typography>
                    <Typography className="font-italic mb-0">
                      Working at : {userData?.company !== 'NA' ? userData?.company : ''}
                    </Typography>
                  </Box>
                </Stack>
                {/* ----------------------------------------------------------- */}
              </Box>
              {/* info div */}
              <Stack
                direction="column"
                justifyContent="space-between"
                sx={{ flexWrap: 'wrap' }}
                className="rounded shadow-sm bg-light p-3 m-1"
              >
                {/* --------------------------------- */}
                <Box>
                  <ScopeList />
                </Box>
                {/* --------------------------------- */}
                {/* coins handling section */}
                {/* liked */}
                <Stack
                  justifyContent="space-evenly"
                  alignItems="center"
                  sx={{ flexDirection: { lg: 'row', md: 'row', sm: 'row', xs: 'column' } }}
                >
                  <Box
                    onClick={() => Navigate('/dashboard/history')}
                    sx={{
                      width: { xs: 'max-content' },
                      cursor: 'pointer',
                      margin: { xs: '1rem 0rem', md: '2rem', lg: '2rem' },
                    }}
                  >
                    <MiddleContainerDiv
                      className="middle-container d-flex justify-content-between align-items-center mt-3 p-2"
                      style={{ backgroundColor: '#eee', borderRadius: '12px' }}
                    >
                      <div
                        className="dollar-div px-3"
                        style={{
                          backgroundColor: '#006673',
                          padding: '12px',
                          borderRadius: '10px',
                        }}
                      >
                        <RoundDiv className="round-div">
                          <FaCoins />{' '}
                        </RoundDiv>
                      </div>
                      <div className="d-flex flex-column text-right ms-2">
                        <span
                          className="current-balance"
                          style={{ fontSize: '15px', color: '#272727', fontWeight: 'bold' }}
                        >
                          Current Coins
                        </span>
                        <span className="amount" style={{ color: '#006673', fontSize: '16px', fontWeight: 'bold' }}>
                          {userData?.coins}
                        </span>
                      </div>
                    </MiddleContainerDiv>
                  </Box>
                  <Box
                    sx={{
                      width: { xs: 'max-content' },
                      cursor: 'pointer',
                      margin: { xs: '1rem 0rem', md: '0rem', lg: '0rem' },
                    }}
                  >
                    {/* ---- */}
                    <Box
                      onClick={() => Navigate('/dashboard/wallet')}
                      sx={{
                        width: { xs: 'max-content' },
                        cursor: 'pointer',
                        marginRight: { xs: '2rem', md: '2rem', lg: '2rem' },
                        margiTop: { xs: '2rem', md: '2rem', lg: '2rem' },
                      }}
                    >
                      {/* button for wallet */}
                      <button className="button">
                        <span className="button__text">
                          <span>B</span>
                          <span>u</span>
                          <span>y</span>
                          <span>&nbsp;</span>
                          <span>C</span>
                          <span>O</span>
                          <span>I</span>
                          <span>N</span>
                          <span>S</span>
                        </span>
                        <svg className="button__svg" viewBox="0 0 600 600">
                          <defs>
                            <Shape id="myClip">
                              <rect x="0" y="0" width="100%" height="50%" />
                            </Shape>
                          </defs>
                          <g clipPath="url(#myClip)">
                            <g id="money">
                              <path
                                d="M441.9,116.54h-162c-4.66,0-8.49,4.34-8.62,9.83l.85,278.17,178.37,2V126.37C450.38,120.89,446.56,116.52,441.9,116.54Z"
                                fill="#699e64"
                                stroke="#323c44"
                                strokeMiterlimit="10"
                                strokeWidth="14"
                              />
                              <path
                                d="M424.73,165.49c-10-2.53-17.38-12-17.68-24H316.44c-.09,11.58-7,21.53-16.62,23.94-3.24.92-5.54,4.29-5.62,8.21V376.54H430.1V173.71C430.15,169.83,427.93,166.43,424.73,165.49Z"
                                fill="#699e64"
                                stroke="#323c44"
                                strokeMiterlimit="10"
                                strokeWidth="14"
                              />
                            </g>
                            <g id="creditcard">
                              <path
                                d="M372.12,181.59H210.9c-4.64,0-8.45,4.34-8.58,9.83l.85,278.17,177.49,2V191.42C380.55,185.94,376.75,181.57,372.12,181.59Z"
                                fill="#a76fe2"
                                stroke="#323c44"
                                strokeMiterlimit="10"
                                strokeWidth="14"
                              />
                              <path
                                d="M347.55,261.85H332.22c-3.73,0-6.76-3.58-6.76-8v-35.2c0-4.42,3-8,6.76-8h15.33c3.73,0,6.76,3.58,6.76,8v35.2C354.31,258.27,351.28,261.85,347.55,261.85Z"
                                fill="#ffdc67"
                              />
                              <path d="M249.73,183.76h28.85v274.8H249.73Z" fill="#323c44" />
                            </g>
                          </g>
                          <g id="wallet">
                            <path
                              d="M478,288.23h-337A28.93,28.93,0,0,0,112,317.14V546.2a29,29,0,0,0,28.94,28.95H478a29,29,0,0,0,28.95-28.94h0v-229A29,29,0,0,0,478,288.23Z"
                              fill="#a4bdc1"
                              stroke="#323c44"
                              strokeMiterlimit="10"
                              strokeWidth="14"
                            />
                            <path
                              d="M512.83,382.71H416.71a28.93,28.93,0,0,0-28.95,28.94h0V467.8a29,29,0,0,0,28.95,28.95h96.12a19.31,19.31,0,0,0,19.3-19.3V402a19.3,19.3,0,0,0-19.3-19.3Z"
                              fill="#a4bdc1"
                              stroke="#323c44"
                              strokeMiterlimit="10"
                              strokeWidth="14"
                            />
                            <path
                              d="M451.46,435.79v7.88a14.48,14.48,0,1,1-29,0v-7.9a14.48,14.48,0,0,1,29,0Z"
                              fill="#a4bdc1"
                              stroke="#323c44"
                              strokeMiterlimit="10"
                              strokeWidth="14"
                            />
                            <path
                              d="M147.87,541.93V320.84c-.05-13.2,8.25-21.51,21.62-24.27a42.71,42.71,0,0,1,7.14-1.32l-29.36-.63a67.77,67.77,0,0,0-9.13.45c-13.37,2.75-20.32,12.57-20.27,25.77l.38,221.24c-1.57,15.44,8.15,27.08,25.34,26.1l33-.19c-15.9,0-28.78-10.58-28.76-25.93Z"
                              fill="#7b8f91"
                            />
                            <path
                              d="M148.16,343.22a6,6,0,0,0-6,6v92a6,6,0,0,0,12,0v-92A6,6,0,0,0,148.16,343.22Z"
                              fill="#323c44"
                            />
                          </g>
                        </svg>
                      </button>
                    </Box>
                    {/* ---- */}
                  </Box>
                </Stack>
                {/* coins handling section */}
              </Stack>
            </Stack>
          </div>
        </div>
      </div>
      {/* modal start */}
      <div>
        <Modal
          open={openEdit}
          onClose={handleCloseEdit}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <UserEditForm success={handleCloseEdit} userData={userData} updateUserData={updateUserData} />
        </Modal>
      </div>
      {/* modal end */}
      <NotificationContainer />
      {/* Change Profile Image Modal */}
      <ChangeUserImage handleClose={handleClose} show={show} />
      {/* Change Profile Image Modal */}
    </Page>
  );
}
