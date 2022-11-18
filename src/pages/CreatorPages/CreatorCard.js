/* eslint-disable react/prop-types */
import { Avatar, Box, Button, Card, CardActions, CardContent, Divider, Typography } from '@mui/material';

// const user = {
//   avatar: '/static/images/avatars/avatar_6.png',
//   city: 'Los Angeles',
//   country: 'USA',
//   jobTitle: 'Senior Developer',
//   name: 'Katarina Smith',
//   timezone: 'GTM-7'
// };

export const CreatorCard = ({ userData, handleShow }) => (
  <Card {...userData}>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Avatar
          src={`${process.env.REACT_APP_API_KEY}${userData?.avatarUrl}`}
          sx={{
            height: 64,
            mb: 2,
            width: 64,
          }}
        />
        <Typography color="textPrimary" gutterBottom variant="h5">
          {userData?.first_name} {userData?.last_name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {`${userData?.city} ${userData?.country}`}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {userData?.mobile_number}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button onClick={() => handleShow()} color="primary" fullWidth variant="text">
        Upload picture
      </Button>
    </CardActions>
  </Card>
);
