import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';

import { Typography, Stack, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import Page from '../components/Page';

import Maingallery from '../components/Maingallery';
import FileDetail from '../components/file/Filedetail';
import Download from '../components/file/filelist/Download';
import FODetails from '../components/file/FODetails';
// import './Filemore.css';

function FileMore() {
  const { id } = useParams();
  const [file, SetFile] = useState({});
  const [loveState, setLoveState] = useState()

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${userInfo?.access}`,
    },
  };
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/files/file/${id}`);
        SetFile(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
   
  },[id]);

  // ------------------------------------------------------------

  const userLike = async () => {
    if (userInfo) {
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/files/file/${id}`, config);
      setLoveState(response.data.user_make_like)
    } else {
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/files/file${id}`);
      setLoveState(response.data.user_make_like)
    }
  };
  // ----------------------------
  useEffect(() => {
    userLike();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Page title="File&more">
        <Stack
          direction="row"
          gap={1}
          sx={{
            height: '500px',
            width: '100%',
            backgroundColor: 'rgb(245, 245, 245',
            padding: '5px',
            flexWrap: { xs: 'wrap', md: 'wrap', lg: 'nowrap', height: '100%' },
          }}
        >
          <Box
            flex={{ sx: '0', md: '6', lg: '6' }}
            sx={{
              backgroundColor: 'rgb(243, 243, 243)',
              maxHeight: '500px',
              overflowY: 'auto',
              overflowX: 'auto',
              display: 'inline-block',
            }}
          >
            <FileDetail file={file} />
          </Box>
          <Box flex={{ md: '3', lg: '3' }} sx={{ width: '100%' }}>
            <Stack direction="column" justifyContent="center">
              <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                  backgroundColor: 'black',
                  height: { xs: '30vh!important', md: '30vh!important', lg: '40vh!important' },
                }}
              >
                <Typography variant="overline" sx={{ color: 'white' }}>
                  put your ads her
                </Typography>
              </Stack>
              <Box sx={{ width: '100%' }}>
                <Download file={file} loveState={loveState} />
              </Box>
              <Box>
                <FODetails file={file} />
              </Box>
            </Stack>
          </Box>
        </Stack>
        <Box sx={{ marginTop: '20px', backgroundColor: 'rgb(245, 245, 245)' }}>
          <Maingallery />
        </Box>
      </Page>
    </>
  );
}

export default FileMore;
