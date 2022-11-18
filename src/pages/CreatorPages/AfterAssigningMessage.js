import React,{useEffect} from 'react';
import './AfterAssigningMessageCss.css';
import { Box, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

const AfterAssigningMessage = () => {
  const Navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {Navigate('/dashboard/creatorprofile');}, 4000)

   }, []);
  return (
    <NavLink to='/dashboard/creatorprofile' >
      <Box>
        <div id="letter-image">
          <Box
            id="FinalMessage"
            sx={{
              alignSelf: 'center',
              paddingTop: { lg: '7rem', md: '4rem', xs: '2rem' },
              width: { lg: '25rem', md: '25rem', xs: '24rem' },
            }}
          >
            <Typography variant="h6" sx={{color:'black!important'}}>
              ✨ congratulations You Just Won <strong>100</strong> Coin ✨{' '}
            </Typography>
          </Box>
          <div id="animated-mail">
            <div id="back-fold" />
            <div id="letter">
              <div id="letter-border" />
              <div id="letter-title" />
              <div id="letter-context" />
              <div id="letter-stamp">
                <div id="letter-stamp-inner" />
              </div>
            </div>
            <div id="top-fold" />
            <div id="body" />
            <div id="left-fold" />
          </div>
          <div id="shadow" />
        </div>
      </Box>
    </NavLink>
  );
};

export default AfterAssigningMessage;
