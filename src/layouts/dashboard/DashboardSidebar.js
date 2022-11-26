/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Link, Drawer, Typography, Avatar } from '@mui/material';

import axios from 'axios';
import { useSelector } from 'react-redux';
// import logo from './Advertising_agency.webp';

// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import Logo from '../../components/Logo';
import Scrollbar from '../../components/Scrollbar';
import NavSection from '../../components/NavSection';

import Iconify from '../../components/Iconify';


// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
}));

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  // ----------------------------------------------------------------------------------
  const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;
  const [userData, setUserData] = useState();
  const [userType, setUserType] = useState()
  const BlankPofile = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png';
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const { pathname } = useLocation();
  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const getNavConfigContent = () => {
    if (userType === "super_manager") {
      const content = [
        {
          title: "Main Wall ",
          path: "/dashboard/app",
          icon: getIcon("eva:activity-outline"),
          state: "blok",
        },
        {
          // mentanace === QrCode Managment $
          title: "QrCode Managment",
          path: "/dashboard/qr_managment",
          icon: getIcon("bi:qr-code"),
          state: "block",
        },
        {
          // demand-and-needs === Needs Managment $
          title: "Needs Managment",
          path: "/dashboard/needs_managment",
          icon: getIcon("grommet-icons:resources"),
          state: "block",
        },
        {
          // mentanace-and-accounts === Financials Managment $
          title: "Owners Managment",
          path: "/dashboard/owners_managment",
          icon: getIcon("material-symbols:location-home"),
          state: "block",
        },
        {
          // Liked === Workers Managment $
          title: "Workers Managment",
          path: "/dashboard/workers_managment",
          icon: getIcon("eva:people-outline"),
          state: "block",
        },
        {
          // mybord === Permissions Managment $
          title: "Permissions Managment",
          path: "/dashboard/permissions_managment",
          icon: getIcon("eva:settings-2-outline"),
          state: "block",
        },
      ]
      return <NavSection navConfig={content} />
    }    // if Workers Manager
    else if (userType === "workers_managment") {
      const content = [{
        title: "Workers Managment",
        path: "/dashboard/workers_managment",
        icon: getIcon("eva:people-outline"),
        state: "block",
      }]
      return <NavSection navConfig={content} />
    }
    // if owners Financials Manager
    else if (userType === "owners_managment") {
      const content = [{
        title: "Owners Managment",
        path: "/dashboard/owners_managment",
        icon: getIcon("material-symbols:location-home"),
        state: "block",
      }]
      return <NavSection navConfig={content} />
    }
    // if Qr Code Manager
    else if (userType === "qrcode_managment") {
      const content = [{
        title: "QrCode Managment",
        path: "/dashboard/qr_managment",
        icon: getIcon("bi:qr-code"),
        state: "block",
      }]
      return <NavSection navConfig={content} />
    }
    // if workers Manager
    else if (userType === "workers_managment") {
      const content = [{
        title: "QrCode Managment",
        path: "/dashboard/qr_managment",
        icon: getIcon("bi:qr-code"),
        state: "block",
      }]
      return <NavSection navConfig={content} />
    }
    else if (userType === "user") {
      const content = [{
        title: "Not Authorized yet",
        path: "/home",
        icon: getIcon("bi:home-outline"),
        state: "block",
      }]
      return <NavSection navConfig={content} />
    } else {
      const content = [{
        title: "Not Authorized yet",
        path: "/home",
        icon: getIcon("bi:home-outline"),
        state: "block",
      }]
      return <NavSection navConfig={content} />
    }
  }

  // -----------------------------------
  // Data after sending the token Validation__Authorization
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${userInfo?.access}`,
    },
  };
  //  getting sub_User_Data Function
  const getUserData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_KEY}/api/get_user/${userInfo?.id}`,
        config
      );
      setUserData(response?.data);
      setUserType(response?.data.user_type)
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getUserData();
    getNavConfigContent();
  }, []);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        <Logo />
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none" component={RouterLink} to="#">
          <AccountStyle>
            <Avatar
              src={userInfo ? `${process.env.REACT_APP_API_KEY}${userData?.avatarUrl}` : BlankPofile}
              alt="photoURL"
            />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {userInfo ? <>{userInfo.first_name} {userInfo.last_name}</> : 'John Doe'}
              </Typography>
            </Box>
          </AccountStyle>
        </Link>
      </Box>
      {getNavConfigContent()}
      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <RootStyle>
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
          {/* <CreatorGroupBtn userData={userData} /> */}
        </Drawer>
      )}
    </RootStyle>
  );
}
