import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Stack, Typography, Box, Button } from '@mui/material';
import Page from '../../../components/Page';
import Lovelist from '../../../components/file/Lovelist';
import DailyForce from './DailyForce';
import Dismissed from './Dismissed';
import TotalForce from './TotalForce';

const Workers = () => {
  //---------------------------------------------------------------------
  const [files, setFiles] = useState([]);
  const [tab, setTab] = useState('daily-force');

  const Navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${userInfo?.access}`,
    },
  };
  // fetch a user from a fake backend API
  const getFiles = async () => {
    if (userInfo) {
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/files/files-by-category/2/`, config);
      setFiles(response.data);
    } else {
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/files/files-by-category/2/`);
      setFiles(response.data);
    }
  };
  useEffect(() => {
    getFiles();
  }, []);
  // -----------------------------------------
  return (
    <Page title="Workers">
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Typography variant="h3" sx={{ color: '#141480db' }}>
          قطاع الأفراد والعاملين
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
                variant="outlined"
                onClick={() => setTab('total-force')}
                sx={{ width: { xs: '22rem', md: '100%', lg: '100%' } }}
              >
                <Typography variant="h6"> قوة القرية</Typography>
              </Button>
            </Box>
            <Box m={2} pt={2} flex={1}>
              <Button
                variant="outlined"
                onClick={() => setTab('dismissed')}
                sx={{ width: { xs: '22rem', md: '100%', lg: '100%' } }}
              >
                <Typography variant="h6"> شطب من القوة</Typography>
              </Button>
            </Box>
            <Box m={2} pt={2} flex={1}>
              <Button
                variant="outlined"
                onClick={() => setTab('daily-force')}
                sx={{ width: { xs: '22rem', md: '100%', lg: '100%' } }}
              >
                <Typography variant="h6"> يومية عددية</Typography>
              </Button>
            </Box>
          </Stack>
        </Box>
        {tab === 'daily-force' ? <DailyForce /> : null}
        {tab === 'dismissed' ? <Dismissed /> : null}
        {tab === 'total-force' ? <TotalForce /> : null}
      </Stack>
    </Page>
  );
};

export default Workers;
