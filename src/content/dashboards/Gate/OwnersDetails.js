/* eslint-disable arrow-body-style */
/* eslint-disable react/button-has-type */
// components
import { Button, Grid, Stack, Typography, Card } from '@mui/material';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import OwnersDetailsTable from './OwnersDetailsTable';
import { useState } from 'react';
import '../NeedsManagment.scss'



function OwnersFinance() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
                                    Owners Details                                </Typography>
                                <Typography variant="subtitle2">
                                    Here All About Owners Details
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button
                                    sx={{ mt: { xs: 2, md: 0 } }}
                                    variant="contained"
                                    startIcon={<AddTwoToneIcon fontSize="small" />}
                                    onClick={() => handleShow()}
                                >
                                    Add New Owner
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </PageTitleWrapper>
            <Card sx={{ width: '100%' }}>
                <OwnersDetailsTable show={show} handleClose={handleClose} />
            </Card>
        </Stack>
    );
};
export default OwnersFinance;
