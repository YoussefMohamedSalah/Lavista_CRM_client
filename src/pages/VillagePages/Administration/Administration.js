import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Stack, Typography, Box, Button } from '@mui/material';
import Page from '../../../components/Page';
import FoodDispensing from './FoodDispensing';
import AgricultureAndIrrigation from './AgricultureAndIrrigation';
import ElecAndGasConsumption from './ElecAndGasConsumption';
import TechnicalAffairs from './TechnicalAffairs';
import MissionsAndFireDuty from './MissionsAndFireDuty';

const Administration = () => {
  // const [files, setFiles] = useState([]);
  const [tab, setTab] = useState('food-dispensing');

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
  //     const response = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/files/files-by-category/3/`, config);
  //     setFiles(response.data);
  //   } else {
  //     const response = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/files/files-by-category/3/`);
  //     setFiles(response.data);
  //   }
  // };
  // useEffect(() => {
  //   getFiles();
  // }, []);
  // -----------------------------------------------------------------------------------
  return (
    <Page title="administration">
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Typography variant="h3" sx={{color:'#141480db'}}>عهدة الشئون الإدارية و الفنية </Typography>
        <Box sx={{ width: '100%' }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ flexWrap: { xs: 'wrap', md: 'nowrap', lg: 'nowrap' } }}
          >
            <Box m={2} pt={2} >
              <Button
                variant="outlined"
                onClick={() => setTab('missionsandfireduty')}
                sx={{ width: { xs: '22rem', md: '100%', lg: '100%' } }}
              >
                <Typography variant="h6"> عهدة المهمات والحريق</Typography>
              </Button>
            </Box>
            <Box m={2} pt={2} >
              <Button
                variant="outlined"
                onClick={() => setTab('techaffairs')}
                sx={{ width: { xs: '22rem', md: '100%', lg: '100%' } }}
              >
                <Typography variant="h6"> عهدة الشئون الفنية</Typography>
              </Button>
            </Box>
            <Box m={2} pt={2} >
              <Button
                variant="outlined"
                onClick={() => setTab('elec-gas-consumption')}
                sx={{ width: { xs: '22rem', md: '100%', lg: '100%' } }}
              >
                <Typography variant="h6"> عدادات الكهرباء والمياة معدل الاستهلاك والفواتير</Typography>
              </Button>
            </Box>
            <Box m={2} pt={2} >
              <Button
                variant="outlined"
                onClick={() => setTab('agriculture-irrigation')}
                sx={{ width: { xs: '22rem', md: '100%', lg: '100%' } }}
              >
                <Typography variant="h6"> عهدة الزراعة والري</Typography>
              </Button>
            </Box>
            <Box m={2} pt={2} >
              <Button
                variant="outlined"
                onClick={() => setTab('food-dispensing')}
                sx={{ width: { xs: '22rem', md: '100%', lg: '100%' } }}
              >
                <Typography variant="h6"> عهدة التعينات</Typography>
              </Button>
            </Box>
          </Stack>
        </Box>
        {tab === 'food-dispensing' ? <FoodDispensing /> : null}
        {tab === 'agriculture-irrigation' ? <AgricultureAndIrrigation /> : null}
        {tab === 'elec-gas-consumption' ? <ElecAndGasConsumption /> : null}
        {tab === 'techaffairs' ? <TechnicalAffairs /> : null}
        {tab === 'missionsandfireduty' ? <MissionsAndFireDuty /> : null}

      </Stack>
    </Page>
  );
};

export default Administration;
