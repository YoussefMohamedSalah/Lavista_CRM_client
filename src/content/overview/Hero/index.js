import { Box, Button, Container, Grid, Typography, styled } from '@mui/material';
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import LavistaLogo from '../../../assets/logo.jpg'

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.colors.success.main};
    color: ${theme.palette.success.contrastText};
    font-weight: bold;
    border-radius: 30px;
    text-transform: uppercase;
    display: inline-block;
    font-size: ${theme.typography.pxToRem(11)};
    padding: ${theme.spacing(0.5)} ${theme.spacing(1.5)};
    margin-bottom: ${theme.spacing(2)};
`
);

const MuiAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #e5f7ff;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 70%;
      height: 70%;
      display: block;
    }
`
);

const JsAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #fef8d8;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 80%;
      height: 80%;
      display: block;
      border-radius : 5px;
    }
`
);



function Hero() {
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const CheckUserLoggin = () => {
    if (userInfo) {
      navigate('/dashboard', { replace: true });
    } else if (!userInfo) {
      navigate('/login', { replace: true });
    }
  }

  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
          <LabelWrapper color="success">Version 1.0.0</LabelWrapper>
          <TypographyH1 sx={{ mb: 2 }} variant="h1">
            La Vista Developments & Sphinx Maintenance
          </TypographyH1>
          <TypographyH2
            sx={{ lineHeight: 1.5, pb: 4 }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            High, Multi Functioning CRM, built with lots of powerful
            Material-UI components across multiple product niches for fast &
            perfect apps development processes
          </TypographyH2>
          <Button
            // component={RouterLink}
            // to="/dashboard/crypto"
            onClick={() => CheckUserLoggin()}
            size="large"
            variant="contained"
          >
            Login Now
          </Button>
          <Button
            sx={{ ml: 2 }}
            component="a"
            target="_blank"
            rel="noopener"
            href="https://www.linkedin.com/in/youssef-salah-7aa783212/"
            size="large"
            variant="text"
          >
            Contact Developer
          </Button>
          <Grid container spacing={3} mt={5}>
            <Grid item md={6}>
              <MuiAvatar>
                <img
                  src="/static/images/logo/material-ui.svg"
                  alt="Material-UI"
                />
              </MuiAvatar>
              <Typography variant="h4">
                <Box sx={{ pb: 2 }}>
                  <b>Powered by Sphinx Co</b>
                </Box>
                <Typography component="span" variant="subtitle2">
                  A strong and customizable CRM to Manage faster,
                  beautiful, And Full of features.
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={6}>
              <JsAvatar>
                <img
                  src={LavistaLogo}
                  alt="lavista"
                />
              </JsAvatar>
              <Typography variant="h4">
                <Box sx={{ pb: 2 }}>
                  <b>Built For La Vista</b>
                </Box>
                <Typography component="span" variant="subtitle2">
                  Tokyo Free React Admin Dashboard features a modern technology
                  stack and is built with React + Javascript.
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
