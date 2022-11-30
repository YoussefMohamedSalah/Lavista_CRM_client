/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable arrow-body-style */
/* eslint-disable react/button-has-type */
// components
import { Button, Grid, Stack, Typography, Card } from '@mui/material';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import OwnersMaintenanceTable from './OwnerMaintenanceTable';
import '../NeedsManagment.scss'



function OwnersFinance() {
    // to the child component
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // ---------------------------------------------
    const [ownersData, setOwnersData] = useState([])

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const config = {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${userInfo?.access}`,
        },
    };

    //  getting OwnersData 
    const getOwnersData = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_KEY}/api/${userInfo?.village_Id}/get_owners/`, config);
            const ownersArray = response.data.map((village) => village.owners)
            setOwnersData(ownersArray[0]);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        getOwnersData();
    }, [show]);

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
                                    Owners Maintenance
                                </Typography>
                                <Typography variant="subtitle2">
                                    Here All About Owners Maintenance Fees
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button
                                    sx={{ mt: { xs: 2, md: 0 } }}
                                    variant="contained"
                                    startIcon={<AddTwoToneIcon fontSize="small" />}
                                >
                                    Pay Owner Fees
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </PageTitleWrapper>
            <Card sx={{ width: '100%' }}>
                <OwnersMaintenanceTable OwnersList={ownersData} show={show} handleClose={handleClose} handleShow={handleShow} />
            </Card>
        </Stack>
    );
};
export default OwnersFinance;
