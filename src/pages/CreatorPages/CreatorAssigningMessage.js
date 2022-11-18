/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { Box, Card, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material';

export const CreatorAssigningMessage = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  // ----- User First Name
  const userFullName = userInfo.name;
  const userFirstName = userFullName.split(' ');

  return (
    <>
      <Card>
        <CardHeader title={`Hello ${userFirstName[0]} 👋 `} />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Box sx={{ padding: '1rem' }}>
              <Typography variant="h6">Assign YourSelf As Content Creator In 3 Simple Steps!!</Typography>
              <Divider />
              <Typography variant="subtitle2" style={{ paddingTop: '2px' }}>
                step 1 : Complete Your Profile To be Verified. 👌
                <br />
                step 2 : Upload some Of your Working Samples. 📤
                <br />
                step 3 : Complete Your Desired Payment Method. 💸
              </Typography>
            </Box>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
