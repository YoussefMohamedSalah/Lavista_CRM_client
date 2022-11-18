import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

import CloseIcon from '@mui/icons-material/Close';
import { Box, Alert, Collapse, IconButton, Container, Typography, Grid, Stack, Button } from '@mui/material';
// components
import Page from '../components/Page';
import Maingallery from '../components/Maingallery';

// ----------------------------------------------------------------------

export default function Home() {
  // -- app State
  const [open, setOpen] = useState(true);
  return (
    <Page title="Home">
      {/* <Maingallery  /> */}
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {/* typewriter effect */}
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  'Now You Can Assign YourSelf As <strong>CONTENT CREATOR</strong> At Osoul World Community 🌍 '
                )
                .typeString(
                  "</br>Hurry Up, It's Totally <span style='color: #27ae60'><strong>Free!</strong></span></br>"
                )
                .typeString("You Can Start Earning Selling You'r Pieces Of Art Right Now !!")

                .callFunction(() => {
                  console.log('String typed out!');
                })
                .callFunction(() => {
                  console.log('All strings were deleted');
                })
                .start();
            }}
          />
        </Alert>
      </Collapse>
      {/* collapse Info */}
      <Box pt={2}>
        <Typography variant="h4">Manage You'r Big Data Safly With Sphinx Co.CRM.</Typography>
        <Button>DashBoard</Button>
        <Stack>
          <Box>hello</Box>
          <Box>hello</Box>
        </Stack>
      </Box>
    </Page>
  );
}
