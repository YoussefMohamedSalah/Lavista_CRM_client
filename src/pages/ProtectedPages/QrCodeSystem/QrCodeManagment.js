/* eslint-disable arrow-body-style */
/* eslint-disable react/button-has-type */
// components
import { Box, Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';
// icons
import { Icon } from '@iconify/react';
// import { NavLink as RouterLink } from 'react-router-dom';

import ViewListIcon from '@mui/icons-material/ViewList';

import Page from '../../../components/Page';
import QrCodeGenerator from './QrCodeGenerator';
import QrCodeHistory from './QrCodeHistory';
import QrCodeScanner from './QrCodeScanner';
import NotficationList from '../NeedsSystem/NotficationList';
import WidgetsGroub from '../NeedsSystem/WidgetsGroub';
import { StatusGenerate, StatusLanding, StatusScan, WidgetLandingData } from './QrCodeData';

const QrCodeManagment = () => {
  const [tab, setTab] = useState('qrcode_landing');
  const [view, setView] = useState('list');

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  const [tabOne, setTabOne] = useState(true);
  const [tabTwo, setTabTwo] = useState(false);
  const [tabThree, setTabThree] = useState(false);
  const [tabFour, setTabFour] = useState(false);

  //   <ToggleButton
  //   value="check"
  //   selected={selected}
  //   onChange={() => {
  //     setSelected(!selected);
  //   }}
  // >
  //   <CheckIcon />
  // </ToggleButton>
  return (
    <Page title="Qr Code">
      <div className="app-container" style={{ borderRadius: '15px' }}>
        <div className="app-header">
          <div className="app-header-left">
            <span className="app-icon" />
            <p className="app-name">QR-Code Managment</p>
          </div>

          <div className="app-header-right">
            <button className="mode-switch" title="Switch Theme">
              <svg
                className="moon"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <defs />
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            </button>
            <button className="add-btn" title="Add New Project">
              <svg
                className="btn-icon feather feather-plus"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            <button className="notification-btn">
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
                className="feather feather-bell"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </button>
            <button className="profile-btn">
              <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" alt="ss" />
              <span>Aybüke C.</span>
            </button>
          </div>
          <button className="messages-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-message-circle"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </button>
        </div>
        <div className="app-content">
          {/* --------------------- Side Icons -------------------------------------------------- */}
          <div className="app-sidebar">
            <Box
              component="a"
              to={'#'}
              className={tabOne === true ? 'app-sidebar-link active' : 'app-sidebar-link'}
              onClick={() => {
                setTabOne(true);
                setTab('qrcode_landing');

                setTabTwo(false);
                setTabFour(false);
                setTabThree(false);
              }}
            >
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
                className="feather feather-home"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </Box>
            <Box
              component="a"
              to={'#'}
              className={tabTwo === true ? 'app-sidebar-link active' : 'app-sidebar-link'}
              onClick={() => {
                setTabTwo(true);
                setTab('generate_qrcode');
                setTabFour(false);
                setTabOne(false);
                setTabThree(false);
              }}
            >
              <Icon icon="bi:qr-code-scan" width={22} height={22} />
            </Box>
            <Box
              component="a"
              to={'#'}
              className={tabThree === true ? 'app-sidebar-link active' : 'app-sidebar-link'}
              onClick={() => {
                setTabThree(true);
                setTab('qrcode_scan');

                setTabFour(false);
                setTabOne(false);
                setTabTwo(false);
              }}
            >
              <Icon icon="mdi:magnify-scan" width={22} height={22} />
            </Box>
            <Box
              component="a"
              to={'#'}
              className={tabFour === true ? 'app-sidebar-link active' : 'app-sidebar-link'}
              onClick={() => {
                setTabFour(true);
                setTab('qrcode_history');
                setTabOne(false);
                setTabTwo(false);
                setTabThree(false);
              }}
            >
              <svg
                className="link-icon feather feather-settings"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <defs />
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
              </svg>
            </Box>
            {/* ----------------------- */}
          </div>
          <Grid container>
            <Grid item xl={8} lg={8} md={9} sm={12} xs={12}>
              {tab === 'qrcode_landing' ? (
                <WidgetsGroub GroupTitle={'Statistics'} WidgetData={WidgetLandingData} StatusArray={StatusLanding} />
              ) : null}
              {tab === 'generate_qrcode' ? (
                <QrCodeGenerator GroupTitle={'Generate QR Code'} StatusArray={StatusGenerate} />
              ) : null}
              {tab === 'qrcode_scan' ? <QrCodeScanner GroupTitle={'Scan QR Code'} StatusArray={StatusScan} /> : null}
              {tab === 'qrcode_history' ? <QrCodeHistory /> : null}
            </Grid>
            <Grid item xl={4} lg={4} md={3} sm={12} xs={12}>
              <NotficationList GroupTitle={'Real Time Scanning '} />
            </Grid>
          </Grid>
        </div>
      </div>
    </Page>
  );
};
export default QrCodeManagment;
