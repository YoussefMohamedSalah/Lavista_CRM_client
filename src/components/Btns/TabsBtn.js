/* eslint-disable react/button-has-type */
import React from 'react';
import './TabsBtn.css';
import { Typography, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const TabsBtn = ({ btnContent }) => (
  <button className="button-30">
    <Typography variant="h6" sx={{ padding: '0px 4px' }}>
      {btnContent}
    </Typography>
  </button>
);

export default TabsBtn;
