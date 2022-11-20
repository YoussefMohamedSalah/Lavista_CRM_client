import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import Chip from '@mui/material/Chip';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import axios from 'axios';

const Widget = ({ Date, MainTitle, SubTitle, BgColor, Color, Progress, PendingItems, DoneItems }) => {





  return (
    <>
      <div className="project-box-wrapper">
        <div className="project-box" style={{ backgroundColor: BgColor }}>
          <div className="project-box-header">
            <span>{Date}</span>
            <div className="more-wrapper">
              <button className="project-btn-more">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-more-vertical"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </button>
            </div>
          </div>
          <div className="project-box-content-header">
            <p className="box-content-header">{MainTitle}</p>
            <p className="box-content-subheader">
              {SubTitle} {SubTitle === 'All Good' && <CheckCircleOutlineIcon sx={{ color: '#34c471' }} />}
              {SubTitle === 'Under Repair' && <BuildCircleIcon sx={{ color: '#c12b2b' }} />}
            </p>
          </div>
          <div className="box-progress-wrapper">
            <p className="box-progress-header">State</p>
            <div className="box-progress-bar">
              <span className="box-progress" style={{ width: Progress, backgroundColor: Color }} />
            </div>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '0px 3px 3px 3px' }}>
              <p className="box-progress-percentage">{DoneItems}</p>
              <p className="box-progress-percentage">{Progress}</p>
              <p className="box-progress-percentage">{PendingItems}</p>
            </Box>
          </div>
          <div className="project-box-footer">
            <div className="participants">
              <p className="box-progress-percentage">{Progress}</p>
            </div>
            <Box className="days-left" style={{ color: Color, cursor: 'pointer' }}>
              {/* 2 Days Left */}
              More Details
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default Widget;
