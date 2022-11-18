import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Stack, Typography, Box, Button } from '@mui/material';
import Page from '../../../components/Page';
import EquipmentLife from './EquipmentLife';
import MaterialsNeeds from './MaterialsNeeds';
import MaintenanceData from './MaintenanceData';
// -----------------------------------------------------------------------------------
const Maintenance = () => {
  const [files, setFiles] = useState([]);
  const [tab, setTab] = useState('maintenance-data');


  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(files);
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${userInfo?.access}`,
    },
  };
  // fetch a user from a fake backend API
  const getFiles = async () => {
    if (userInfo) {
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/files/files-by-category/1/`, config);
      setFiles(response.data);
    } else {
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/files/files-by-category/1/`);
      setFiles(response.data);
    }
  };
  useEffect(() => {
    getFiles();
  }, []);
  // -----------------------------------------------------------------------------------
  return (
    <Page title="Maintenance">
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Typography variant="h3" sx={{ color: '#141480db' }}>
          قطاع الصيانة والصلاحية الفنية
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
                onClick={() => setTab('maintenance-data')}
                sx={{ width: { xs: '22rem', md: '100%', lg: '100%' } }}
              >
                <Typography variant="h6">بيانات اعمال الصيانة</Typography>
              </Button>
            </Box>
            <Box m={2} pt={2} flex={1}>
              <Button
                variant="outlined"
                onClick={() => setTab('materials-needs')}
                sx={{ width: { xs: '22rem', md: '100%', lg: '100%' } }}
              >
                <Typography variant="h6">مطالب خامات الصيانة</Typography>
              </Button>
            </Box>
            <Box m={2} pt={2} flex={1}>
              <Button
                variant="outlined"
                onClick={() => setTab('equipmentlife')}
                sx={{ width: { xs: '22rem', md: '100%', lg: '100%' } }}
              >
                <Typography variant="h6"> الصلاحية الفنية للمعدات</Typography>
              </Button>
            </Box>
          </Stack>
        </Box>
        {tab === 'maintenance-data' ? <MaintenanceData /> : null}
        {tab === 'materials-needs' ? <MaterialsNeeds /> : null}
        {tab === 'equipmentlife' ? <EquipmentLife /> : null}
      </Stack>
    </Page>
  );
};

export default Maintenance;
