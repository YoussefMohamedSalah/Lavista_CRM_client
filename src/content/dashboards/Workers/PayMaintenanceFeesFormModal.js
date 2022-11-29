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
import { useFormik } from 'formik';
import * as Yup from 'yup';


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
    // -------------------------------------------------------------------------------------------------------------------------------
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
    const payOwnerMaintenanceFees = async (values) => {
        try {
            await axios.post(`${process.env.REACT_APP_API_KEY}/api/maintenance/${ownerData?.id}/transaction`, values, config);
            console.log(values)
        } catch (err) {
            console.log('error')
            console.error(err);
        }
    };
    //  -------------------------------------------------------------------------
    const paymentMethod = [
        {
            value: 'cash',
            label: 'Cash',
        },
        {
            value: 'visa',
            label: 'Visa',
        },
        {
            value: 'check',
            label: 'Check',
        },
    ]

    // ---------------------------------------------------------------------------
    const formik = useFormik({
        initialValues:
        {
            payment_method: 'cash',
            amount: '',
        }
        ,
        validationSchema: Yup.object({
            payment_method: Yup.string().required(),
            amount: Yup.number().required()
        }),

        onSubmit: (values) => {
            payOwnerMaintenanceFees(values);
            formHandler()
        },
    });






    return (
        <>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
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
                                            onChange={formik.handleChange}
                                            required
                                            autoComplete='off'
                                            placeholder={formik.values.amount || "0"}
                                            value={formik.values.amount}
                                            onBlur={formik.handleBlur}
                                            variant="outlined"
                                        />
                                        {formik.touched.amount && formik.errors.amount && <p>{formik.errors.amount}</p>}

                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="payment Method"
                                            name="payment_method"
                                            onChange={formik.handleChange}
                                            required
                                            select
                                            SelectProps={{ native: true }}
                                            value={formik.values.payment_method || ""}
                                            onBlur={formik.handleBlur}
                                            variant="outlined"
                                        >
                                            {paymentMethod.map((option) => (
                                                <option key={option.value} value={option.value || ''}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>
                                        {formik.touched.payment_method && formik.errors.payment_method && <p>{formik.errors.payment_method}</p>}

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
                        <Button onClick={() => formik.handleSubmit()} variant="contained" type="submit">
                            👉 Pay Now
                        </Button>
                    </Modal.Footer>
                </Modal>
            </form>
        </>
    );
}
