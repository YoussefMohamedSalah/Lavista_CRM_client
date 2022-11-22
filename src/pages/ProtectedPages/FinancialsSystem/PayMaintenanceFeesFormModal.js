import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField,
    Button,
    Alert,
    IconButton,
    Collapse,
    Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';

export default function PayMaintenanceFeesFormModal({ handleClose, show, ownerData }) {
    const [open, setOpen] = useState(false);
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const config = {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${userInfo?.access}`,
        },
    };
    // ---------------------------------------------------------------------------------------
    const [values, setValues] = useState({
        payment_method: 'cash',
        amount: ownerData?.amount,
    });
    // ---------------------------------------------------------
    useEffect(() => {
        setOpen(false);
    }, [handleClose])
    const formHandler = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
        }, 3000);
    };
    // ---------------------------------------------------------------------------------------
    const payOwnerMaintenanceFees = async () => {
        try {
            await axios.post(`${process.env.REACT_APP_API_KEY}/api/maintenance/${ownerData?.id}/transaction`, values, config);
            console.log(values)
        } catch (err) {
            console.log('error')
            console.error(err);
        }
    };
    //  -------------------------------------------------------------------------
    const Payment_Method = [
        {
            value: 'Cash',
            label: 'Cash',
        },
        {
            value: 'Visa',
            label: 'Visa',
        },
        {
            value: 'Check',
            label: 'Check',
        },
    ]




    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async () => {
        payOwnerMaintenanceFees()
        formHandler()
    }

    return (
        <>
            <form autoComplete="off" {...ownerData} >
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>⭕ Pay Maintenance Fees</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card>
                            <CardHeader subheader="Please Make Sure Inputs Are Correct" title="Owner Info" />
                            <Collapse in={open}>
                                <Alert
                                    action={
                                        <IconButton
                                            aria-label="close"
                                            color="inherit"
                                            size="small"
                                            onClick={() => {
                                                setOpen(false);
                                            }}
                                        >
                                            <CloseIcon fontSize="inherit" />
                                        </IconButton>
                                    }
                                    sx={{ mb: 2 }}
                                >
                                    Payment Successfully
                                </Alert>
                            </Collapse>
                            <Divider />
                            <CardContent>
                                <Grid container spacing={3}>
                                    <Grid item md={12} xs={12}>
                                        <Grid item md={12} xs={12}>
                                            <Typography>
                                                Owner Name : {ownerData?.first_name} {ownerData?.last_name}
                                            </Typography>
                                        </Grid>
                                        <Grid item md={12} xs={12}>
                                            <Typography>
                                                Unit Number : {ownerData?.owner_of}
                                            </Typography>
                                        </Grid>
                                        <Grid item md={12} xs={12}>
                                            <Typography>
                                                Total To Pay : {ownerData?.maintenance_fees}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Total To Pay"
                                            name="amount"
                                            onChange={handleChange}
                                            required
                                            autoComplete='off'
                                            placeholder={values.amount || "0"}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="payment Method"
                                            name="payment_method"
                                            onChange={handleChange}
                                            required
                                            select
                                            SelectProps={{ native: true }}
                                            value={values.payment_method || ""}
                                            variant="outlined"
                                        >
                                            {Payment_Method.map((option) => (
                                                <option key={option.value} value={option.value || ''}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <Divider />
                        </Card>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button onClick={() => handleSubmit()} variant="contained" type="submit">
                            👉 Pay Now
                        </Button>
                    </Modal.Footer>
                </Modal>
            </form>
        </>
    );
}
