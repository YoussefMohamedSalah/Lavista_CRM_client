import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
// material
import { Typography, Box, Grid, Card, Container } from '@mui/material';
// components
import Maingallery from '../components/Maingallery';
import Page from '../components/Page';
import GalleryCard from '../components/GalleryCard';
// ----------------------------------------------------------------------
export default function Savedpage() {
  const [files, setFiles] = useState([]);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userFullName = userInfo.name;
  const userFirstName = userFullName.split(' ');

  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${userInfo?.access}`,
    },
  };
  // -----*-----*------*------*-----*-----*-----*-----*-----*-----
  const getFiles = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/files/downloads-list/`, config);
      setFiles(response.data.results);
    } catch (err) {
      console.error(err);
    }
  };
  // -----*-----*------*------*-----*-----*-----*-----*-----*-----
  useEffect(() => {
    getFiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page title="Saved-Page">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome {userFirstName[0]} 👋 Its your Downloads Files
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
            <Card>
              {files.length === 0 ? (
                <Box>
                  <Typography variant="h4" sx={{ paddingLeft: { lg: '1rem', xs: '0.5rem' }, paddingTop: '0.5rem' }}>
                    you dont have any downloads yet !!
                  </Typography>
                  <Typography variant="h5" sx={{ paddingLeft: { lg: '1rem', xs: '0.5rem' } }}>
                    Explore More Here
                  </Typography>
                  <Maingallery />
                </Box>
              ) : (
                <Grid container spacing={3}>
                  {files.map((file) => (
                    <GalleryCard key={file.id} file={file.file} />
                  ))}
                </Grid>
              )}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
