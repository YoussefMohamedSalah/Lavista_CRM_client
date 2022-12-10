import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import {
  Box,
  Button,
  Typography,
  IconButton
} from '@mui/material';
import Footer from 'src/components/Footer';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { mockTransactions } from './mockTransactions';

import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import StatBox from './stateBox';

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
      
      <Footer />
    </>
  );
}

export default DashboardCrypto;
