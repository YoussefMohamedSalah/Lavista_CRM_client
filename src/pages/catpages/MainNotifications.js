import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
// material
import { Grid, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../../components/Page';
import CategoryPagesCard from './CategoryPagesCard';
// ----------------------------------------------------------------------
export default function MainNotifications() {
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
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/files/files-by-category/2/`, config);
      setFiles(response.data);
    } else {
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/files/files-by-category/2/`);
      setFiles(response.data);
    }
  };
  // -----*-----*------*------*-----*-----*-----*-----*-----*-----
  useEffect(() => {
    getFiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Page title="Designer-Bag">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Designer Bag Gallery
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {files.map((file) => (
            <CategoryPagesCard key={file.id} file={file} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
