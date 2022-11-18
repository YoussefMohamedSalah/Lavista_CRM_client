import { Grid, Container, Typography, Card, CardContent, Box, Button, CardActions, Link } from '@mui/material';
// components
import Page from '../components/Page';
import  Cat from  '../components/category/Catsumb' ;
// ----------------------------------------------------------------------

export default function Notifications() {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome 👋 Its all for you 
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <Card>
              <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                <Typography variant="p" sx={{ mb: 5 }}>
                  Its A trial run 🚀
                </Typography>
                Let us know what you think about new osoul GS world
                <Typography>
                  Please make sure to{' '}
                  <Link
                    href="#"
                    target="_blank"
                  >
                    Update your profile ,
                  </Link>
                     to let our algorithms Serve you to the fullest
                </Typography>
              </Box>
            </Card>
          </Grid>




          <Grid item xs={12} md={6} lg={8}>
            <Card>
              <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                <Typography variant="p" sx={{ mb: 5 }}>
                  Its A trial run 🚀
                </Typography>
                Let us know what you think about new osoul GS world
                <Typography>
                  Please make sure to{' '}
                  <Link
                    href="#"
                    target="_blank"
                  >
                    Update your profile ,
                  </Link>
                     to let our algorithms Serve you to the fullest
                </Typography>
              </Box>
            </Card>
          </Grid>



          <Grid item xs={12} md={6} lg={8}>
            <Card>
              <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                <Typography variant="p" sx={{ mb: 5 }}>
                  Its A trial run 🚀
                </Typography>
                Let us know what you think about new osoul GS world
                <Typography>
                  Please make sure to{' '}
                  <Link
                    href="#"
                    target="_blank"
                  >
                    Update your profile ,
                  </Link>
                     to let our algorithms Serve you to the fullest
                </Typography>
              </Box>
            </Card>
          </Grid>



          <Grid item xs={12} md={6} lg={8}>
            <Card>
              <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                <Typography variant="p" sx={{ mb: 5 }}>
                  Its A trial run 🚀
                </Typography>
                Let us know what you think about new osoul GS world
                <Typography>
                  Please make sure to{' '}
                  <Link
                    href="#"
                    target="_blank"
                  >
                    Update your profile ,
                  </Link>
                     to let our algorithms Serve you to the fullest
                </Typography>
              </Box>
            </Card>
          </Grid>


          


        </Grid>
      </Container>
    </Page>
  );
}
