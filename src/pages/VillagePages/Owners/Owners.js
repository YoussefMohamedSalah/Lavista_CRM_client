import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Stack, Typography, Box, Button } from '@mui/material';
import Page from '../../../components/Page';
import OwnersInfo from './OwnersInfo';
import Residence from './Residence';
import Hospitality from './Hospitality';
import Markting from './Markting';
// -----------------------------------------------------------------------------------
const Owners = () => {
  const [files, setFiles] = useState([]);
  const [tab, setTab] = useState('ownersinfo');

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
    <Page title="Owners">
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Typography variant="h3" sx={{ color: '#141480db' }}>
          قطاع الوحدات والملاك
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
                onClick={() => setTab('markting')}
                variant="outlined"
                sx={{ width: { xs: '22rem', md: '100%', lg: '100%' } }}
              >
                <Typography variant="h6">التسويق</Typography>
              </Button>
            </Box>
            <Box m={2} pt={2} flex={1}>
              <Button
                onClick={() => setTab('hospitality')}
                variant="outlined"
                sx={{ width: { xs: '22rem', md: '100%', lg: '100%' } }}
              >
                <Typography variant="h6">الضيافة</Typography>
              </Button>
            </Box>
            <Box m={2} pt={2} flex={1}>
              <Button
                onClick={() => setTab('residence')}
                variant="outlined"
                sx={{ width: { xs: '22rem', md: '100%', lg: '100%' } }}
              >
                <Typography variant="h6"> الاقامة للملاك</Typography>
              </Button>
            </Box>
            <Box m={2} pt={2} flex={1}>
              <Button
                onClick={() => setTab('ownersinfo')}
                variant="outlined"
                sx={{ width: { xs: '22rem', md: '100%', lg: '100%' } }}
              >
                <Typography variant="h6"> بيانات الملاك</Typography>
              </Button>
            </Box>
          </Stack>
        </Box>
          {tab === 'ownersinfo' ? <OwnersInfo /> : null}
          {tab === 'residence' ? <Residence /> : null}
          {tab === 'hospitality' ? <Hospitality /> : null}
          {tab === 'markting' ? <Markting /> : null}
      </Stack>
    </Page>
  );
};

export default Owners;
