/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Stack, Typography, Box, Button } from '@mui/material';
import Page from '../../../components/Page';
import Fawry from './Fawry';
import FinancialKeeping from './FinancialKeeping';
import Salaries from './Salaries';

const Financial = () => {
  // -----------------------------------------------------------------------------------
  const [files, setFiles] = useState([]);
  const [tab, setTab] = useState('salaries');

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
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/files/files-by-category/5/`, config);
      setFiles(response.data);
    } else {
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/files/files-by-category/5/`);
      setFiles(response.data);
    }
  };
  useEffect(() => {
    getFiles();
  }, []);
  // -----------------------------------------------------------------------------------
  return (
    <Page title="financial">
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Typography variant="h3" sx={{ color: '#141480db' }}>
          قطاع الحسابات المالية
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
                onClick={() => setTab('fawry')}
                variant="outlined"
                sx={{ width: { xs: '22rem', md: '100%', lg: '100%' } }}
              >
                <Typography variant="h6"> حساب فوري</Typography>
              </Button>
            </Box>
            <Box m={2} pt={2} flex={1}>
              <Button
                onClick={() => setTab('financialkeeping')}
                variant="outlined"
                sx={{ width: { xs: '22rem', md: '100%', lg: '100%' } }}
              >
                <Typography variant="h6"> العهدة المالية للقرية</Typography>
              </Button>
            </Box>
            <Box m={2} pt={2} flex={1}>
              <Button
                onClick={() => setTab('salaries')}
                variant="outlined"
                sx={{ width: { xs: '22rem', md: '100%', lg: '100%' } }}
              >
                <Typography variant="h6"> المرتبات الشهرية للعاملين</Typography>
              </Button>
            </Box>
          </Stack>
        </Box>
        {tab === 'salaries' ? <Salaries /> : null}
        {tab === 'financialkeeping' ? <FinancialKeeping /> : null}
        {tab === 'fawry' ? <Fawry /> : null}
      </Stack>
    </Page>
  );
};

export default Financial;
