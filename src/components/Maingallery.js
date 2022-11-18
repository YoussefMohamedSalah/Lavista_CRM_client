import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
// material
import { Box, Container, Stack, Typography } from '@mui/material';
import './Maingallery.css';
// components
import Page from './Page';
import GalleryCard from './GalleryCard';
// ----------------------------------------------------------------------
export default function MainGallery() {
  const [files, setFiles] = useState([]);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${userInfo?.access}`,
    },
  };
  // -----*-----*------*------*-----*-----*-----*-----*-----*-----
  const getFiles = async () => {
    if (userInfo) {
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/files/files-list/`, config);
      setFiles(response.data.results);
    } else {
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/files/files-list/`);
      setFiles(response.data.results);
    }
  };
  // -----*-----*------*------*-----*-----*-----*-----*-----*-----
  useEffect(() => {
    getFiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Page title="Main-Gallery">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Main Gallery
          </Typography>
        </Stack>
        <Box className="Maingallery">
          {files.map((file, index) => (
            <GalleryCard key={file.id} file={file} index={index} />
          ))}
        </Box>
      </Container>
    </Page>
  );
}
