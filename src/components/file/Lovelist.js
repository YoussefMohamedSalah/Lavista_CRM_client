import React, { useEffect, useState } from 'react';
import { IconButton, Stack, Tooltip, Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Iconify from '../Iconify';
import UserRegesterModal from '../Form/UserRegesterModal';

function Lovelist({ fileId, loveState, fileLikes, price }) {
  const [likesCount, setLikesCount] = useState(fileLikes);
  // const [likeState, setLikeState] = useState(love);
  const handleCount = () => {
    if (loveState === true && love === true) {
      setLikesCount(fileLikes);
    } else if (loveState === false && love === false) {
      setLikesCount(fileLikes);
    } else if (loveState === false && love === true) {
      setLikesCount(fileLikes + 1);
    } else if (loveState === true && love === false) {
      setLikesCount(fileLikes - 1);
    }
  };

  // -------
  const [love, setLove] = useState(loveState);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // main data from secure api ``{userInfo}``
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${userInfo?.access}`,
    },
  };
  // -----------------------------------------------------------------------------------

  // --------Check if User Regesterd----------------
  const CheckRegesterd = () => {
    if (userInfo) {
      handleLove();
      setLove(!love);
    } else {
      handleShow();
    }
  };
  // -------- change Icons Passed on Login or Not------------
  const ChangeIcon = () => {
    if (userInfo) {
      setLove(love);
    }
  };
  // ---------send data to database------------------
  const handleLove = async () => {
    const likePayload = { like: true };
    try {
      await axios.post(`${process.env.REACT_APP_API_KEY}/api/v1/files/file-actions/${fileId}/`, likePayload, config);
    } catch (err) {
      console.error(err);
    }
  };
  // -------------------
    useEffect(() => {
    handleCount();
  }, [CheckRegesterd]);
  // ----------------------------
  const ModalContent = {
    title: '⭕ Login Is Needed',
    body :'Please Login To Like & Download Files You Desire',
    mainButtonName:'👉 Login Now',
    path: '/login'
  }
  return (
    <>
      <Stack
        direction="column"
        sx={{ paddingTop: '5px', backgroundImage: 'linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.02))', height: '7rem' }}
        className="Lovelist"
      >
        <Stack direction="column" alignItems="center" justifyContent="center">
          <IconButton
            sx={{ padding: '8px 8px 4px 8px' }}
            onClick={() => {
              CheckRegesterd();
            }}
            onAnimationEnd={() => ChangeIcon()}
          >
            {love === true ? (
              <Iconify
                style={{ color: '#FB2576', transform: 'rotate(360deg)', transition: '1s ease', scale: '1.2' }}
                icon="eva:heart-fill"
                width={25}
                height={25}
              />
            ) : (
              <Iconify
                style={{ color: 'white', transition: '1s ease rotate(360deg)' }}
                icon="eva:heart-outline"
                width={25}
                height={25}
              />
            )}
          </IconButton>
          <Typography variant="body2" style={{ color: 'white', lineHeight: '1.3' }}>
            {likesCount}
          </Typography>
        </Stack>
        <Stack direction="column" alignItems="center" justifyContent="center">
          <Iconify style={{ color: 'white' }} icon="ph:coins-light" className="icon" width={25} height={25} />
          <Typography variant="body2" style={{ color: 'white', lineHeight: '1.3' }}>
            {price}
          </Typography>
        </Stack>
      </Stack>
      <UserRegesterModal handleClose={handleClose} show={show} ModalContent={ModalContent} />
    </>
  );
}

export default Lovelist;
