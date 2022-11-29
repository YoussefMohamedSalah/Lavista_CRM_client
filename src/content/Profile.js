/* eslint-disable react/button-has-type */
import { NavLink as RouterLink, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
// MUI
import styled from '@emotion/styled';
import { Stack, Typography, Box, Button } from '@mui/material';

// icons
import { FaCoins } from 'react-icons/fa';
import { FiEdit3 } from 'react-icons/fi';
import './Profile.css';

// components
import ChangeUserImage from './ChangeUserImage';

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
    // ---------------------------------------------------------------------------------------
    // Edit modal handling
    const handleOpenEdit = () => setOpenEdit(true);
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
        <div title="My-Profile" className="MyProfile_Page" style={{ minHeight: '100vh', overflowX: 'hidden' }}>
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

            {/* Change Profile Image Modal */}
            <ChangeUserImage handleClose={handleClose} show={show} />
            {/* Change Profile Image Modal */}
        </div>
    );
}