import {
  Button,
  Card,
  Box,
  Grid,
  Typography,
  useTheme,
  styled,
  Avatar,
  Divider,
  alpha,
  ListItem,
  ListItemText,
  List,
  ListItemAvatar
} from '@mui/material';
import TrendingUp from '@mui/icons-material/TrendingUp';
import Text from 'src/components/Text';
import Chart from 'react-apexcharts';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.main};
      color: ${theme.palette.success.contrastText};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      box-shadow: ${theme.colors.shadows.success};
`
);

const ListItemAvatarWrapper = styled(ListItemAvatar)(
  ({ theme }) => `
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${theme.spacing(1)};
  padding: ${theme.spacing(0.5)};
  border-radius: 60px;
  background: ${theme.palette.mode === 'dark'
      ? theme.colors.alpha.trueWhite[30]
      : alpha(theme.colors.alpha.black[100], 0.07)
    };

  img {
    background: ${theme.colors.alpha.trueWhite[100]};
    padding: ${theme.spacing(0.5)};
    display: block;
    border-radius: inherit;
    height: ${theme.spacing(4.5)};
    width: ${theme.spacing(4.5)};
  }
`
);

function AccountBalance({ handleOpen }) {
  const [data, setData] = useState([])

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(userInfo)
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${userInfo?.access}`,
    },
  };

  // -----*-----*------*------Get Category Data*-----*-----*-----*-----*-----

  const getAllCategories = async () => {
    try {
      const data = await axios.get(`${process.env.REACT_APP_API_KEY}/api/${userInfo.village_Id}/villages_maintenance_fees`, config);
      setData(data.data)
    } catch (err) {
      console.error(err);
    }
  };

  // -----*-----*------*------*-----*-----*-----*-----*-----*-----

  useEffect(() => {
    getAllCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  // -----*-----*------*------*-----*-----*-----*-----*-----*-----
  let sum = 0,
    arr = data,
    i = arr.length;
  while (i--) {
    // include radix otherwise last element gets interpreted as 16
    sum += parseInt(arr[i]) || 0;
  }
  console.log(sum) // sum => 10 as 3.0 and 4\n were successfully parsed
  const theme = useTheme();
  // -----*-----*------*------*-----*-----*-----*-----*-----*-----

  const chartOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '60%'
        }
      }
    },
    colors: ['#ff9900', '#1c81c2', '#333', '#5c6ac0'],
    dataLabels: {
      enabled: true,
      formatter(val) {
        return `${val}%`;
      },
      style: {
        colors: [theme.colors.alpha.trueWhite[100]]
      },
      background: {
        enabled: true,
        foreColor: theme.colors.alpha.trueWhite[100],
        padding: 8,
        borderRadius: 4,
        borderWidth: 0,
        opacity: 0.3,
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 1,
          color: theme.colors.alpha.black[70],
          opacity: 0.5
        }
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        color: theme.colors.alpha.black[50],
        opacity: 0.5
      }
    },
    fill: {
      opacity: 1
    },
    labels: ['Mechanics', 'Electronics', 'Swimming Pools', 'Cameras'],
    legend: {
      labels: {
        colors: theme.colors.alpha.trueWhite[100]
      },
      show: false
    },
    stroke: {
      width: 0
    },
    theme: {
      mode: theme.palette.mode
    }
  };

  const chartSeries = [10, 20, 25, 45];

  return (
    <Card>
      <Grid spacing={0} container>
        <Grid item xs={12} md={6}>
          <Box p={4}>
            <Typography
              sx={{
                pb: 3
              }}
              variant="h4"
            >
              {/* Account Balance */}
              Village Maintenance Fees
            </Typography>
            <Box>
              <Typography variant="h1" gutterBottom>
                EGP {sum.toLocaleString()}
              </Typography>
              <Typography
                variant="h4"
                fontWeight="normal"
                color="text.secondary"
              >
                Owners Maintenance Debts
              </Typography>
              <Box
                display="flex"
                sx={{
                  py: 4
                }}
                alignItems="center"
              >
                <AvatarSuccess
                  sx={{
                    mr: 2
                  }}
                  variant="rounded"
                >
                  <TrendingUp fontSize="large" />
                </AvatarSuccess>
                <Box>
                  <Typography variant="h4">+ EGP 3,594.00</Typography>
                  <Typography variant="subtitle2" noWrap>
                    Collected this month
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Grid container spacing={3}>
              <Grid sm item>
                <Button fullWidth variant="outlined">
                  RESET
                </Button>
              </Grid>
              <Grid sm item>
                <Button fullWidth variant="contained" onClick={() => handleOpen()}>
                  View Transactions
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid
          sx={{
            position: 'relative'
          }}
          display="flex"
          alignItems="center"
          item
          xs={12}
          md={6}
        >
          <Box
            component="span"
            sx={{
              display: { xs: 'none', md: 'inline-block' }
            }}
          >
            <Divider absolute orientation="vertical" />
          </Box>
          <Box pb={4} pr={4} flex={1} className={'padding'}>
            <Grid container spacing={0}>
              <Box p={4} sx={{ width: '100%' }}>
                <Typography
                  sx={{
                    pb: 3
                  }}
                  variant="h4"
                >
                  Village Maintenance Sections (<span style={{ color: '#2e39cb' }}> Items </span>).
                </Typography>
              </Box>
              <Grid
                xs={12}
                sm={5}
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Chart
                  height={250}
                  options={chartOptions}
                  series={chartSeries}
                  type="donut"
                />
              </Grid>
              <Grid xs={12} sm={7} item display="flex" alignItems="center">



                {/* ITEMS LIST START */}
                <List
                  disablePadding
                  sx={{
                    width: '100%'
                  }}
                >
                  {/* BTC */}
                  <ListItem disableGutters>
                    <ListItemAvatarWrapper>
                      <img
                        alt="MECHANICS"
                        src="/static/images/placeholders/logo/bitcoin.png"
                      />
                    </ListItemAvatarWrapper>
                    <ListItemText
                      primary="MEC"
                      primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                      secondary="Mechanics"
                      secondaryTypographyProps={{
                        variant: 'subtitle2',
                        noWrap: true
                      }}
                    />
                    <Box>
                      <Typography align="right" variant="h4" noWrap>
                        20%
                      </Typography>
                      <Text color="success">+2.54%</Text>
                    </Box>
                  </ListItem>

                  {/* XRP */}
                  <ListItem disableGutters>
                    <ListItemAvatarWrapper>
                      <img
                        alt="Elc"
                        src="/static/images/placeholders/logo/ripple.png"
                      />
                    </ListItemAvatarWrapper>
                    <ListItemText
                      primary="ELC"
                      primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                      secondary="Electronics"
                      secondaryTypographyProps={{
                        variant: 'subtitle2',
                        noWrap: true
                      }}
                    />
                    <Box>
                      <Typography align="right" variant="h4" noWrap>
                        10%
                      </Typography>
                      <Text color="error">-1.22%</Text>
                    </Box>
                  </ListItem>

                  {/* ITEM */}
                  <ListItem disableGutters>
                    <ListItemAvatarWrapper>
                      <img
                        alt="POOLS"
                        src="/static/images/placeholders/logo/cardano.png"
                      />
                    </ListItemAvatarWrapper>
                    <ListItemText
                      primary="POOLS"
                      primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                      secondary="Swimming Pools"
                      secondaryTypographyProps={{
                        variant: 'subtitle2',
                        noWrap: true
                      }}
                    />
                    <Box>
                      <Typography align="right" variant="h4" noWrap>
                        40%
                      </Typography>
                      <Text color="success">+10.50%</Text>
                    </Box>
                  </ListItem>


                  {/* ITEM */}
                  <ListItem disableGutters>
                    <ListItemAvatarWrapper>
                      <img
                        alt="CAM"
                        src="/static/images/placeholders/logo/ethereum.png"
                      />
                    </ListItemAvatarWrapper>
                    <ListItemText
                      primary="CAM"
                      primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                      secondary="Cameras"
                      secondaryTypographyProps={{
                        variant: 'subtitle2',
                        noWrap: true
                      }}
                    />
                    <Box>
                      <Typography align="right" variant="h4" noWrap>
                        30%
                      </Typography>
                      <Text color="error">-12.38%</Text>
                    </Box>
                  </ListItem>

                  {/* END ITEMS LIST SECTION */}
                </List>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default AccountBalance;


