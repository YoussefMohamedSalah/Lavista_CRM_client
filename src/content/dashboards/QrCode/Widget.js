/* eslint-disable react/button-has-type */
import { Box } from '@mui/material';
import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import { currentDate } from '../../../utils/currentDate'

const Widget = ({ Category }) => {
  const allItemsCounter = Category.items_count;
  const underRapairItemsCouter = Category.under_repair_items_count;
  const goodItemsCounter = Number(allItemsCounter) - Number(underRapairItemsCouter);
  const percentage = (goodItemsCounter / allItemsCounter) * 100;

  return (
    <>
      <div className="project-box-wrapper">
        <div className="project-box" >
          <div className="project-box-header">
            <span>{currentDate}</span>
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
            <p className="box-content-header">{Category.title}</p>
            <p className="box-content-subheader">
              {Category.under_repair_items_count === 0 ? (
                <>
                  'All Good'{' '}
                  <CheckCircleOutlineIcon sx={{ color: '#34c471' }} />
                </>
              ) : (
                <>
                  Under Repair' <BuildCircleIcon sx={{ color: '#c12b2b' }} />
                </>
              )}
            </p>
          </div>
          <div className="box-progress-wrapper">
            <p className="box-progress-header">State</p>
            <div className="box-progress-bar">
              <span
                className="box-progress"
                style={{ width: `${percentage}`, backgroundColor: '#34c471' }}
              />
            </div>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0px 3px 3px 3px'
              }}
            >
              <p className="box-progress-percentage">{goodItemsCounter}</p>
              <p className="box-progress-percentage">{percentage}</p>
              <p className="box-progress-percentage">
                {Category.under_repair_items_count}
              </p>
            </Box>
          </div>
          <div className="project-box-footer">
            <div className="participants">
              <p className="box-progress-percentage">{percentage.toFixed(1)} %</p>
            </div>
            <Box className="days-left" style={{ color: '', cursor: 'pointer' }}>
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
