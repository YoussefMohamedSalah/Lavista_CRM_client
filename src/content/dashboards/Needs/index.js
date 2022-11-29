/* eslint-disable arrow-body-style */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import '../NeedsManagment.scss';
import NotficationList from './NotficationList';
import WidgetsGroub from './WidgetsGroub';
import { Box, Grid, Stack } from '@mui/material';
// icons
import { Icon } from '@iconify/react';



const index = () => {
  const [tab, setTab] = useState('qrcode_landing');
  const [tabOne, setTabOne] = useState(true);
  const [tabTwo, setTabTwo] = useState(false);
  const [tabThree, setTabThree] = useState(false);
  const [tabFour, setTabFour] = useState(false);
  // data for wedget Group,, And for every single widget

  const StatusArray = [
    { title: 'Hello', value: '26' },
    { title: 'world', value: '43' },
    { title: 'good', value: '76' },
  ];
  const WidgetData = [
    {
      id: 1,
      date: 'December 10, 2020',
      mainTitle: 'Web Designing',
      subTitle: 'Prototyping',
      bgColor: '#fee4cb',
      color: '#ff942e',
      progress: '80%',
      doneItems: '123',
      pendingItems: '13',
    },

    {
      id: 2,
      date: 'December 10, 2020',
      mainTitle: 'UI Development',
      subTitle: 'Prototyping',
      bgColor: '#ffd3e2',
      color: '#df3670',
      progress: '20%',
      doneItems: '123',
      pendingItems: '13',
    },

    {
      id: 3,
      date: 'December 10, 2020',
      mainTitle: 'Data Analysis',
      subTitle: 'Prototyping',
      bgColor: '#c8f7dc',
      color: '#34c471',
      progress: '60%',
      doneItems: '123',
      pendingItems: '13',
    },
    {
      id: 4,
      date: 'December 10, 2020',
      mainTitle: 'Testing',
      subTitle: 'Prototyping',
      bgColor: '#e9e7fd',
      color: '#4f3ff0',
      progress: '50%',
      doneItems: '123',
      pendingItems: '13',
    },
    {
      id: 5,
      date: 'December 10, 2020',
      mainTitle: 'Web Designing',
      subTitle: 'Prototyping',
      bgColor: '#fee4cb',
      color: '#ff942e',
      progress: '80%',
      doneItems: '123',
      pendingItems: '13',
    },
    {
      id: 6,
      date: 'December 10, 2020',
      mainTitle: 'Web Designing',
      subTitle: 'Prototyping',
      bgColor: '#d5deff',
      color: '#4067f9',
      progress: '40%',
      doneItems: '123',
      pendingItems: '13',
    },
  ];
  return (
    <div className="app-container" style={{ borderRadius: '15px' }}>
      <Stack flexDirection='column' className="app-header">
        <Box className="app-header-left" sx={{ alignSelf: 'start', padding: '2rem' }}>
          <span className="app-icon" />
          <p className="app-name">Needs Managment</p>
        </Box>
        {/* --------------------- Side Icons -------------------------------------------------- */}
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
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
          </div>
          {/* Main Content */}
          <Grid container>
            <Grid item xl={8} lg={8} md={9} sm={12} xs={12}>
              {tab === 'qrcode_landing' ? (
                <WidgetsGroub GroupTitle={'Statistics'} WidgetData={WidgetData} StatusArray={StatusArray} />
              ) : null}
              {tab === 'generate_qrcode' ? (
                <WidgetsGroub GroupTitle={'Generate QR Code'} StatusArray={StatusArray} />
              ) : null}
              {tab === 'qrcode_scan' ? <WidgetsGroub GroupTitle={'Scan QR Code'} StatusArray={StatusArray} /> : null}
              {tab === 'qrcode_history' ? <WidgetsGroub /> : null}
            </Grid>
            <Grid item xl={4} lg={4} md={3} sm={12} xs={12}>
              <NotficationList GroupTitle={'Real Time Needs '} />
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </div>
  );
};
export default index;
