import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';

import AccountBalance from './AccountBalance';
import Permissions from './Permissions';
import AccountSecurity from './AccountSecurity';
import WatchList from './WatchList';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function DashboardCrypto() {
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  // -------------------------------------------
  const CheckUserType = () => {
    if (userInfo.user_type === 'qr_code_manager') {
      navigate('/dashboard/qr_code', { replace: true });
    } else if (userInfo.user_type === 'owners_manager') {
      navigate('/dashboard/owners', { replace: true });
    } else if (userInfo.user_type === 'gate_manager') {
      navigate('/dashboard/gate', { replace: true });
    } else if (userInfo.user_type === 'workers_manager') {
      navigate('/dashboard/workers', { replace: true });
    }
  }

  useEffect(() => {
    CheckUserType()
  }, [])


  return (
    <>
      <Helmet>
        <title>Village Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
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
      </Container>
      <Footer />
    </>
  );
}

export default DashboardCrypto;
