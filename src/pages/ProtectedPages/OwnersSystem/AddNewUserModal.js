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


export default function AddNewUserModal({ show, handleShow, handleClose }) {
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
    const createNewOwner = async (values) => {
        try {
            await axios.post(`${process.env.REACT_APP_API_KEY}/api/create_owner`, values, config);
            console.log(values)
        } catch (err) {
            console.log('error')
            console.error(err);
        }
    };
    // ---------------------------------------------------------------------------
    const formik = useFormik({
        initialValues:
        {
            first_name: '',
            last_name: '',
            owner_of: '',
            maintenance_fees: '',
            phone_number: '',
            car_plate: ''
        }
        ,
        validationSchema: Yup.object({
            first_name: Yup.string().required().max(40, 'limit passed').min(1, 'min 1 word'),
            last_name: Yup.string().required().max(40, 'limit passed').min(1, 'min 1 word'),
            owner_of: Yup.string().required(),
            maintenance_fees: Yup.number(),
            phone_number: Yup.number(),
            car_plate: Yup.string(),
        }),

        onSubmit: (values) => {
            createNewOwner(values);
            formHandler()
        },
    });



    return (
        <>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Owner</Modal.Title>
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
                                    Owner Added Successfuly
                                </Alert>
                            </Collapse>
                            <Divider />
                            <CardContent>
                                <Grid container spacing={3}>
                                    <Grid item md={12} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="First Name"
                                            name="first_name"
                                            onChange={formik.handleChange}
                                            required
                                            autoComplete='off'
                                            placeholder={formik.values.first_name || ""}
                                            value={formik.values.first_name}
                                            onBlur={formik.handleBlur}
                                            variant="outlined"
                                        />
                                        {formik.touched.first_name && formik.errors.first_name && <p>{formik.errors.first_name}</p>}

                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Last Name"
                                            name="last_name"
                                            onChange={formik.handleChange}
                                            required
                                            autoComplete='off'
                                            placeholder={formik.values.last_name || "0"}
                                            value={formik.values.last_name}
                                            onBlur={formik.handleBlur}
                                            variant="outlined"
                                        />
                                        {formik.touched.last_name && formik.errors.last_name && <p>{formik.errors.last_name}</p>}

                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Unit Number"
                                            name="owner_of"
                                            onChange={formik.handleChange}
                                            required
                                            autoComplete='off'
                                            placeholder={formik.values.owner_of || "0"}
                                            value={formik.values.owner_of}
                                            onBlur={formik.handleBlur}
                                            variant="outlined"
                                        />
                                        {formik.touched.owner_of && formik.errors.owner_of && <p>{formik.errors.owner_of}</p>}

                                    </Grid>

                                    <Grid item md={12} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Phone Number"
                                            name="phone_number"
                                            onChange={formik.handleChange}
                                            required
                                            autoComplete='off'
                                            placeholder={formik.values.phone_number || "0"}
                                            value={formik.values.phone_number}
                                            onBlur={formik.handleBlur}
                                            variant="outlined"
                                        />
                                        {formik.touched.phone_number && formik.errors.phone_number && <p>{formik.errors.phone_number}</p>}

                                    </Grid>

                                    <Grid item md={12} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Maintenance Fees"
                                            name="maintenance_fees"
                                            onChange={formik.handleChange}
                                            required
                                            autoComplete='off'
                                            placeholder={formik.values.maintenance_fees || "0"}
                                            value={formik.values.maintenance_fees}
                                            onBlur={formik.handleBlur}
                                            variant="outlined"
                                        />
                                        {formik.touched.maintenance_fees && formik.errors.maintenance_fees && <p>{formik.errors.maintenance_fees}</p>}

                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Car Plate"
                                            name="car_plate"
                                            onChange={formik.handleChange}
                                            required
                                            autoComplete='off'
                                            placeholder={formik.values.car_plate || "0"}
                                            value={formik.values.car_plate}
                                            onBlur={formik.handleBlur}
                                            variant="outlined"
                                        />
                                        {formik.touched.car_plate && formik.errors.car_plate && <p>{formik.errors.car_plate}</p>}

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
                            👉 Add New Owner
                        </Button>
                    </Modal.Footer>
                </Modal>
            </form>
        </>
    );
}
