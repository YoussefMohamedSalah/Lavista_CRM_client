import { Typography, Avatar, Grid, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';

function PageHeader() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;


  const user = {
    name: '',
    avatar: '/static/images/avatars/3.jpg'
  };
  const theme = useTheme();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Avatar
          sx={{
            mr: 2,
            width: theme.spacing(8),
            height: theme.spacing(8)
          }}
          variant="rounded"
          alt={user.name}
          src={user.avatar}
        />
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Welcome, {userInfo.first_name} {userInfo.last_name}!
        </Typography>
        <Typography variant="subtitle2">
          Today is a good day to start managing <span style={{ color: 'yellowgreen', fontSize: '1rem' }}>{userInfo.manager_of} </span> !
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
