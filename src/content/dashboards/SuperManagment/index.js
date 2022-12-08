import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import {
  Grid,
  Container,
  Box,
  Button,
  useTheme,
  Typography,
  IconButton
} from '@mui/material';
import Footer from 'src/components/Footer';
// import Main from './Main'

// import AccountBalance from './AccountBalance';
// import Permissions from './Permissions';
// import AccountSecurity from './AccountSecurity';
// import WatchList from './WatchList';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { mockTransactions } from './mockTransactions';

import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
// import LineChart from "./LineChart";
import StatBox from './stateBox';
// import Dashboard from './Main';

function DashboardCrypto() {
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  // -------------------------------------------
  const CheckUserType = () => {
    // -------------------------------
    if (userInfo.user_type === 'qr_code_manager') {
      navigate('/dashboard/qr_code', { replace: true });
    } else if (userInfo.user_type === 'village_manager') {
      navigate('/dashboard/statistics', { replace: true });
    } else if (userInfo.user_type === 'gate_manager') {
      navigate('/dashboard/gate', { replace: true });
    } else if (userInfo.user_type === 'workers_manager') {
      navigate('/dashboard/workers', { replace: true });
    } else if (userInfo.user_type === 'owners_manager') {
      navigate('/dashboard/owners', { replace: true });
    }
  };

  useEffect(() => {
    CheckUserType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>Village Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      {/* new Content */}

      <Box m="20px">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Button
              sx={{
                color: 'red',
                fontSize: '14px',
                fontWeight: 'bold',
                padding: '10px 20px'
              }}
            >
              <DownloadOutlinedIcon sx={{ mr: '10px' }} />
              Download Reports
            </Button>
          </Box>
        </Box>

        {/* GRID & CHARTS */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          {/* ROW 1 */}
          <Box
            gridColumn="span 3"
            sx={{ backgroundColor: '#1F2A40' }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="12,361"
              subtitle="Emails Sent"
              progress="0.75"
              increase="+14%"
              icon={
                <EmailIcon
                  sx={{
                    color: '#4cceac',
                    fontSize: '26px'
                  }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            sx={{ backgroundColor: '#1F2A40' }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="431,225"
              subtitle="Sales Obtained"
              progress="0.50"
              increase="+21%"
              icon={
                <PointOfSaleIcon
                  sx={{
                    color: '#4cceac',
                    fontSize: '26px'
                  }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            sx={{ backgroundColor: '#1F2A40' }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="32,441"
              subtitle="New Clients"
              progress="0.30"
              increase="+5%"
              icon={
                <PersonAddIcon
                  sx={{
                    color: '#4cceac',
                    fontSize: '26px'
                  }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            sx={{ backgroundColor: '#1F2A40' }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="1,325,134"
              subtitle="Traffic Received"
              progress="0.80"
              increase="+43%"
              icon={
                <TrafficIcon
                  sx={{
                    color: '#4cceac',
                    fontSize: '26px'
                  }}
                />
              }
            />
          </Box>

          {/* ROW 2 */}
          <Box gridColumn="span 8" gridRow="span 2">
            <Box
              mt="25px"
              p="0 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography variant="h5" fontWeight="600">
                  Revenue Generated
                </Typography>
                <Typography variant="h3" fontWeight="bold">
                  $59,342.32
                </Typography>
              </Box>
              <Box>
                <IconButton>
                  <DownloadOutlinedIcon
                    sx={{
                      fontSize: '26px',
                      color: 'red'
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
            <Box height="250px" m="-20px 0 0 0">
              {/* <LineChart isDashboard={true} /> */}
            </Box>
          </Box>
          <Box gridColumn="span 4" gridRow="span 2" overflow="auto">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid #ffffff`}
              p="15px"
              sx={{
                backgroundColor: '#1F2A40'
              }}
            >
              <Typography variant="h5" fontWeight="600" sx={{ color: 'wheat' }}>
                Recent Transactions
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid #ffffff`}
                p="15px"
                sx={{
                  backgroundColor: '#1F2A40'
                }}
              >
                <Box>
                  <Typography
                    sx={{ color: '#4cceac' }}
                    variant="h5"
                    fontWeight="600"
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography sx={{ color: 'wheat' }}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box sx={{ color: 'wheat' }}>{transaction.date}</Box>
                <Box
                  sx={{ backgroundColor: '#4cceac', color: 'wheat' }}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  ${transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>

          {/* ROW 3
                            <Box
                              gridColumn="span 4"
                              gridRow="span 2"
                              primary[400]}
                              p="30px"
                            >
                                <Typography variant="h5" fontWeight="600">
                                  Campaign
                                </Typography>
                                  <Box
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    mt="25px"
                                  >
                                    <ProgressCircle size="125" />
                                          <Typography
                                            variant="h5"
                                            .#4cceacAccent[500]}
                                            sx={{ mt: "15px" }}
                                          >
                                            $48,352 revenue generated
                                          </Typography>
                                    <Typography>Includes extra misc expenditures and costs</Typography>
                                  </Box>
                            </Box>
                  <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    primary[400]}
                  >
                    <Typography
                      variant="h5"
                      fontWeight="600"
                      sx={{ padding: "30px 30px 0 30px" }}
                    >
                      Sales Quantity
                    </Typography>
                    <Box height="250px" mt="-20px">
                      <BarChart isDashboard={true} />
                    </Box>
                  </Box>
                              <Box
                                gridColumn="span 4"
                                gridRow="span 2"
                                primary[400]}
                                padding="30px"
                              >
                                  <Typography
                                    variant="h5"
                                    fontWeight="600"
                                    sx={{ marginBottom: "15px" }}
                                  >
                                    Geography Based Traffic
                                  </Typography>
                                              <Box height="200px">
                                                <GeographyChart isDashboard={true} />
                                              </Box>
                              </Box> */}
        </Box>
      </Box>

      {/* <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12}>
            <AccountBalance />
          </Grid>
          <Grid item lg={8} xs={12}>
            <Permissions />
          </Grid>
          <Grid item lg={4} xs={12}>
            <AccountSecurity />
          </Grid>
          <Grid item xs={12}>
            <WatchList />
          </Grid>
        </Grid>
      </Container> */}
      {/* <Main /> */}
      <Footer />
    </>
  );
}

export default DashboardCrypto;
