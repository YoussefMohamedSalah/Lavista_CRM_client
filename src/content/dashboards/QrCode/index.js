/* eslint-disable arrow-body-style */
/* eslint-disable react/button-has-type */
import { Box, Grid, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
// icons
import '../NeedsManagment.scss';
import { Icon } from '@iconify/react';
// components
import QrCodeGenerator from './QrCodeGenerator';
import QrCodeHistory from './QrCodeHistory';
import QrCodeScanner from './QrCodeScanner';
// import NotficationList from '../NeedsSystem/NotficationList';
import WidgetsGroub from './WidgetsGroub';
import { StatusGenerate, StatusLanding, StatusScan, WidgetLandingData } from './QrCodeData';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
// import QrCode2Icon from '@mui/icons-material/QrCode2';


const QrCodeManagment = () => {
  const [tab, setTab] = useState('qrcode_landing');
  const [tabOne, setTabOne] = useState(true);
  const [tabTwo, setTabTwo] = useState(false);
  const [tabThree, setTabThree] = useState(false);
  const [tabFour, setTabFour] = useState(false);
  // -------------------------------------------
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  // -------------------------------------------
  const CheckUserType = () => {
    if (userInfo.user_type === 'owners_manager') {
      navigate('/dashboard/owners', { replace: true });
    } else if (userInfo.user_type === 'workers_manager') {
      navigate('/dashboard/workers', { replace: true });
    } else if (userInfo.user_type === 'gate_manager') {
      navigate('/dashboard/gate', { replace: true });
    }
  }

  useEffect(() => {
    CheckUserType()
  }, [])

  return (
    <Box sx={{ minWidth: '100%important' }}>
      <Box className="app-container" sx={{ borderRadius: '15px', minWidth: '100%!important' }} >
        <Stack flexDirection='column' className="app-header" >
          <Box className="app-header-left" sx={{ alignSelf: 'start', padding: '2rem' }} >
            <span className="app-icon" />
            <p className="app-name">QR-Code Managment</p>
          </Box>
          {/* --------------------- Side Icons -------------------------------------------------- */}
          <Box sx={{ display: 'flex', flexDirection: 'row', minWidth: '100%!important' }}>
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
            {/* Main Content */}
            <Grid container>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                {tab === 'qrcode_landing' ? (
                  <WidgetsGroub GroupTitle={'Statistics'} WidgetData={WidgetLandingData} StatusArray={StatusLanding} />
                ) : null}
                {tab === 'generate_qrcode' ? (
                  <QrCodeGenerator GroupTitle={'Generate QR Code'} StatusArray={StatusGenerate} />
                ) : null}
                {tab === 'qrcode_scan' ? <QrCodeScanner GroupTitle={'Scan QR Code'} StatusArray={StatusScan} /> : null}
                {tab === 'qrcode_history' ? <QrCodeHistory /> : null}
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
export default QrCodeManagment;
