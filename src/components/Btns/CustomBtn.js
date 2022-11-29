/* eslint-disable react/button-has-type */
import React from 'react';
import './CustomBtn.css';
import { Typography } from '@mui/material';

const CustomBtn = ({ btnContent }) => (
  <button className="button-89">
    <Typography variant="h6" sx={{ padding: '0px 4px' }}>
      {btnContent}
    </Typography>
  </button>
);

export default CustomBtn;
