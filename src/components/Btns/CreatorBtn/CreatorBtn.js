/* eslint-disable react/button-has-type */
import React from 'react';
import './CreatorBtnCss.css';
import { Typography, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const CreatorBtn = ({ btnContent, path }) => {
  return (
    <Box component={RouterLink} to={path}>
      <button className="button-85">
        <Typography variant="h6" sx={{ padding: '0px 4px' }}>
          {btnContent}
        </Typography>
      </button>
    </Box>
  );
};

export default CreatorBtn;
