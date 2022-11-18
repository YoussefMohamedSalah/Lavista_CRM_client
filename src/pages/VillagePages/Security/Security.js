import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Stack, Typography, Box, Button } from '@mui/material';
import Page from '../../../components/Page';
import SecurityReports from './SecurityReports';
import SecurityForces from './SecurityForces';

const Security = () => {
  // const [files, setFiles] = useState([]);
  const [tab, setTab] = useState('securityforces');


  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;
  // const config = {
  //   headers: {
  //     'Content-type': 'application/json',
  //     Authorization: `Bearer ${userInfo?.access}`,
  //   },
  // };
  // // fetch a user from a fake backend API
  // const getFiles = async () => {
  //   if (userInfo) {
  //     const response = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/files/files-by-category/4/`, config);
  //     setFiles(response.data);
  //   } else {
  //     const response = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/files/files-by-category/4/`);
  //     setFiles(response.data);
  //   }
  // };
  // useEffect(() => {
  //   getFiles();
  // }, []);
  // -----------------------------------------------------------------------------------
  return (
    <Page title="security">
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Typography variant="h3" sx={{ color: '#141480db' }}>
          قطاع المنظومة الأمنية{' '}
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ flexWrap: { xs: 'wrap', md: 'nowrap', lg: 'nowrap' } }}
          >
            <Box m={2} pt={2} flex={1}>
              <Button
                onClick={() => setTab('securityreports')}
                variant="outlined"
                sx={{ width: { xs: '22rem', md: '100%', lg: '100%' } }}
              >
                <Typography variant="h6"> تقارير امنية</Typography>
              </Button>
            </Box>
            <Box m={2} pt={2} flex={1}>
              <Button
                onClick={() => setTab('securityforces')}
                variant="outlined"
                sx={{ width: { xs: '22rem', md: '100%', lg: '100%' } }}
              >
                <Typography variant="h6"> افراد الامن والنوبتجية</Typography>
              </Button>
            </Box>
          </Stack>
        </Box>
        {tab === 'securityreports' ? <SecurityReports /> : null}
        {tab === 'securityforces' ? <SecurityForces /> : null}
      </Stack>
    </Page>
  );
};

export default Security;
