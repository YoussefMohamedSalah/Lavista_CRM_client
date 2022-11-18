import { useRef, useState, useEffect } from 'react';
import { Link, Link as RouterLink, useNavigate } from 'react-router-dom';
// @mui

import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton } from '@mui/material';

import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/authActions';
import { LOGOUT } from '../../redux/types/auth';
// components
import MenuPopover from '../../components/MenuPopover';
import CreatorBtn from '../../components/Btns/CreatorBtn/CreatorBtn';
import WalletIcon from '../../components/Btns/CreatorBtn/WalletIcon';
// mocks_
import account from '../../_mock/account';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Home Page',
    icon: 'eva:home-fill',
    linkTo: '/',
  },
  {
    label: 'My account',
    icon: 'eva:person-fill',
    linkTo: '/dashboard/app',
  },
  {
    label: 'Settings',
    icon: 'eva:settings-2-fill',
    linkTo: '#',
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const anchorRef = useRef(null);

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

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
        `${process.env.REACT_APP_API_KEY}/api/v1/accounts/user-details/${userInfo?.id}`,
        config
      );
      setUserData(response?.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getUserData();
  },[]);
  return (
    <>
      {userInfo ? (
        <Stack direction="row">
          <WalletIcon />
        </Stack>
      ) : (
        <Box sx={{ paddingRight: '1rem' }}>
          <CreatorBtn btnContent={'Login'} path={'/login'} />
        </Box>
      )}
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar
          src={userInfo ? `${process.env.REACT_APP_API_KEY}${userData?.avatarUrl}` : account.photoURL}
          alt="photoURL"
        />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          '& .MuiMenuItem-root': {
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {userInfo ? <>{userInfo.name}</> : 'Unknown vistor'}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {userInfo ? <>{userInfo.email}</> : 'Signin and enjoy'}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} to={option.linkTo} component={RouterLink} onClick={handleClose}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        {userInfo ? (
          <MenuItem onClick={logoutHandler} sx={{ m: 1 }}>
            Logout
          </MenuItem>
        ) : (
          <MenuItem to="/login" component={RouterLink} sx={{ m: 1 }}>
            Login
          </MenuItem>
        )}
      </MenuPopover>
    </>
  );
}
