// components
import { Grid, Stack, Typography } from '@mui/material';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
// import AddPermissionsForm from './AddPermissionsForm';
import AllWorkersTable from './AllWorkersTable';



function WorkersDetails() {

    return (
        <Stack direction='column' sx={{ width: '100%' }}>
            <PageTitleWrapper>
                <Grid item xl={12}
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={3}
                >
                    <Grid item xl={12} xs={12}>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Typography variant="h3" component="h3" gutterBottom>
                                    Workers Details
                                </Typography>
                                <Typography variant="subtitle2">
                                    You Can Easly Add Permissions To You'r Workers To Help You Get The Job Done..
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </PageTitleWrapper>
            <AllWorkersTable />
        </Stack>
    );
};
export default WorkersDetails;
