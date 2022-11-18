/* eslint-disable react/prop-types */
import * as React from 'react';
import { Stack, Typography, AvatarGroup, Avatar } from '@mui/material';

export default function CreatorGroupBtn({ userData }) {
  return (
    <Stack sx={{ padding: '1rem', alignSelf: 'center', cursor:'pointer' }} justifyContent="center" alignItems="center">
      <Typography variant="h6">Creators</Typography>
      <AvatarGroup max={4}>
        <Avatar alt="Remy Sharp" src={`${process.env.REACT_APP_API_KEY}${userData?.avatarUrl}`} />
        <Avatar alt="Travis Howard" src={`${process.env.REACT_APP_API_KEY}${userData?.avatarUrl}`} />
        <Avatar alt="Cindy Baker" src={`${process.env.REACT_APP_API_KEY}${userData?.avatarUrl}`} />
        <Avatar alt="Agnes Walker" src={`${process.env.REACT_APP_API_KEY}${userData?.avatarUrl}`} />
        <Avatar alt="Trevor Henderson" src={`${process.env.REACT_APP_API_KEY}${userData?.avatarUrl}`} />
        <Avatar alt="Trevor Henderson" src={`${process.env.REACT_APP_API_KEY}${userData?.avatarUrl}`} />
      </AvatarGroup>
    </Stack>
  );
}
