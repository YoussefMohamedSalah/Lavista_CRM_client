import React from 'react';

import { Typography, Stack, Box } from '@mui/material';
import Page from '../components/Page';

import Maingallery from '../components/Maingallery';
import FileDetail from '../components/file/Filedetail';
import Download from '../components/file/filelist/Download';
import FODetails from '../components/file/FODetails';
import './Filemore.css';


function FileMore() {
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
            <FileDetail />
          </Box>
          <Box flex={{ md: '3', lg: '3' }} sx={{ width: '100%' }}>
            <Stack direction="column" justifyContent="center">
              <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                  backgroundColor: 'black',
                  height: { xs: '40vh!important', md: '50vh!important', lg: '50vh!important' },
                }}
              >
                <Typography variant="overline" sx={{ color: 'white' }}>
                  put your ads her
                </Typography>
              </Stack>

              <Box sx={{ width: '70%' }}>
                <Download />
              </Box>

              <Box >
                <FODetails />
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
