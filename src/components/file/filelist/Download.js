/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { Box, ButtonGroup, Stack } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import PurchaseConfirmationModal from '../../Form/PurchaseConfirmationModal';
import Iconify from '../../Iconify';
import UserRegesterModal from '../../Form/UserRegesterModal';

const DownloadButton = styled('button')({
  backgroundColor: 'rgb(0, 165, 165)',
  margin: '10px 0px',
  borderRadius: '0px 8px 8px 0px',
  boxShadow: '0px 10px 5px rgb(204, 204, 204)',
  border: '1px solid #000',
  color: 'rgb(255, 255, 255)',
  textAlign: 'center',
});
const SignInButton = styled('button')({
  backgroundColor: 'rgb(0, 165, 165)',
  margin: '10px 0px',
  lineHeight: '44px',
  borderRadius: '8px',
  boxShadow: '0px 10px 5px rgb(204, 204, 204)',
  border: '1px solid #000',
  color: 'rgb(255, 255, 255)',
  textAlign: 'center',
  width: '100%!important',
});
const LoveButton = styled('button')({
  backgroundColor: 'rgb(0, 165, 165)',
  margin: '10px 00px',
  borderRadius: '8px 0px 0px 8px',
  boxShadow: '0px 10px 5px rgb(204, 204, 204)',
  border: '1px solid #000',
  color: '#FB2576',
  textAlign: 'center',
  lineHeight: '44px',
});

const Download = ({ file }) => {
  const { id } = useParams();

  // -----------------------------------
  const [fileDownloadState, setFileDownloadState] = useState(false);
  const [fileByIdArray, setFileByIdArray] = useState([]);
  // Data after sending the token Validation__Authorization
  const [userData, setUserData] = useState({});
  // modal info
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  //-------------------------------------------
  const Navigate = useNavigate();
  //-------------------------------------------
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${userInfo?.access}`,
    },
  };
  // ---------------------------------------
  const getFiles = async () => {
    try {
      const data = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/files/downloads-list/`, config);
      const response = data.data.results;
      const filesArr = response.map((file) => file);
      const filesByIdArr = filesArr.map((file) => file?.file.id);
      setFileByIdArray(filesByIdArr);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getFiles();
  }, []);
  // ---------------- Check if File Is Already Downloaded----------------
  const checkDownloaded = () => {
    if (fileByIdArray.includes(id)) {
      setFileDownloadState(true);
    } else {
      setFileDownloadState(false);
    }
  };
  useEffect(() => {
    checkDownloaded();
  });
  // ------------------------------------------------------------------------------------
  //  getting sub_User_Data Function
  useEffect(() => {
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
    getUserData();
  }, []);
  // ------------------------------------------------------------------------------------
  // if file already downloaded
  const downloadFile = async () => {
    try {
      const data = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/files/download-file/${id}`, config);
      const fileSource = data.data.map((file) => file.source);
      setTimeout(() => {
        window.location.replace(`${process.env.REACT_APP_API_KEY}${fileSource}`);
      }, 500);
    } catch (err) {
      console.error(err);
    }
  };
  // ------------------------------------------------------------------------------------
  const [loveState, setLoveState] = useState();
  const userLike = async () => {
    if (userInfo) {
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/files/file/${id}`, config);
      setLoveState(response.data.user_make_like);
    } else {
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/files/file${id}`);
      setLoveState(response.data.user_make_like);
    }
  };
  // ----------------------------
  useEffect(() => {
    userLike();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  useEffect(() => {
    setLoveState(loveState);
  }, []);
  // --------Check if User Regesterd----------------
  const CheckRegesterd = () => {
    if (userInfo) {
      handleLove();
      setLoveState(!loveState);
    }
  };
  // -------- change Icons Passed on Login or Not------------
  const ChangeIcon = () => {
    if (userInfo) {
      setLoveState(loveState);
    }
  };
  // ------------------------------------------------------------------------------------
  const handleLove = async () => {
    const likePayload = { like: true };
    try {
      await axios.post(`${process.env.REACT_APP_API_KEY}/api/v1/files/file-actions/${id}/`, likePayload, config);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Stack justifyContent="center" alignItems="center">
      {userInfo ? (
        <Box sx={{ width: '90%!important' }}>
          <ButtonGroup
            sx={{ width: '100%!important' }}
            className="button-groupp"
            variant="contained"
            aria-label="split button"
          >
            <LoveButton
              sx={{ width: '20%!important' }}
              size="small"
              onClick={() => {
                CheckRegesterd();
              }}
              onAnimationEnd={() => ChangeIcon()}
            >
              {loveState === true ? (
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
            </LoveButton>
            {fileDownloadState ? (
              <DownloadButton sx={{ width: '80%!important' }} onClick={() => downloadFile()}>
                File Already Downloaded
                <span style={{ paddingLeft: '0.5rem' }}>
                  <CloudDownloadIcon />
                </span>
              </DownloadButton>
            ) : (
              <DownloadButton sx={{ width: '80%!important' }} onClick={() => setShow(true)}>
                Download
                <span style={{ paddingLeft: '0.5rem' }}>
                  <CloudDownloadIcon />
                </span>
              </DownloadButton>
            )}
          </ButtonGroup>
        </Box>
      ) : (
        <Box sx={{ width: '90%!important' }} underline="hover">
          <SignInButton onClick={() => Navigate('/login')}>Signin to download file</SignInButton>
        </Box>
      )}
      <PurchaseConfirmationModal
        fileTitle={file.title}
        filePrice={file.coins}
        fileId={file.id}
        userCoins={userData.coins}
        handleClose={handleClose}
        show={show}
      />
    </Stack>
  );
};

export default Download;
