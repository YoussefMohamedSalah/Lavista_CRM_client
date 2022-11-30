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
} from '@mui/material';
import { useSelector } from 'react-redux';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import { useFormik } from 'formik';
import * as Yup from 'yup';


export default function AddNewWorkerModal({ show, handleClose }) {
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
    const createNewWorker = async (values) => {
        try {
            await axios.post(`${process.env.REACT_APP_API_KEY}/api/create_worker`, values, config);
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
            phone_number: '',
            id_number: '',
            working_section: '',
            start_working_data: '',
        }
        ,
        validationSchema: Yup.object({
            first_name: Yup.string().required().max(40, 'limit passed').min(1, 'min 1 word'),
            last_name: Yup.string().required().max(40, 'limit passed').min(1, 'min 1 word'),
            phone_number: Yup.number(),
            id_number: Yup.number(),
            working_section: Yup.string().required(),
            start_working_data: Yup.string(),
        }),

        onSubmit: (values) => {
            createNewWorker(values);
            formHandler()
        },
    });



    return (
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Worker</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card>
                        <CardHeader subheader="Please Make Sure Inputs Are Correct" title="Worker Info" />
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
                                Worker Added Successfuly
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
                                        placeholder={formik.values.last_name || ""}
                                        value={formik.values.last_name}
                                        onBlur={formik.handleBlur}
                                        variant="outlined"
                                    />
                                    {formik.touched.last_name && formik.errors.last_name && <p>{formik.errors.last_name}</p>}

                                </Grid>
                                <Grid item md={12} xs={12}>
                                    <TextField
                                        fullWidth
                                        label="phone Number"
                                        name="phone_number"
                                        onChange={formik.handleChange}
                                        required
                                        autoComplete='off'
                                        placeholder={formik.values.phone_number || ""}
                                        value={formik.values.phone_number}
                                        onBlur={formik.handleBlur}
                                        variant="outlined"
                                    />
                                    {formik.touched.phone_number && formik.errors.phone_number && <p>{formik.errors.phone_number}</p>}

                                </Grid>

                                <Grid item md={12} xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Phone Number"
                                        name="id_number"
                                        onChange={formik.handleChange}
                                        required
                                        autoComplete='off'
                                        placeholder={formik.values.id_number || ""}
                                        value={formik.values.id_number}
                                        onBlur={formik.handleBlur}
                                        variant="outlined"
                                    />
                                    {formik.touched.id_number && formik.errors.id_number && <p>{formik.errors.id_number}</p>}

                                </Grid>

                                <Grid item md={12} xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Working_Section"
                                        name="working_section"
                                        onChange={formik.handleChange}
                                        required
                                        autoComplete='off'
                                        placeholder={formik.values.working_section || ""}
                                        value={formik.values.working_section}
                                        onBlur={formik.handleBlur}
                                        variant="outlined"
                                    />
                                    {formik.touched.working_section && formik.errors.working_section && <p>{formik.errors.working_section}</p>}

                                </Grid>
                                <Grid item md={12} xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Start Working Date"
                                        name="start_working_data"
                                        onChange={formik.handleChange}
                                        required
                                        autoComplete='off'
                                        placeholder={formik.values.start_working_data || "0"}
                                        value={formik.values.start_working_data}
                                        onBlur={formik.handleBlur}
                                        variant="outlined"
                                    />
                                    {formik.touched.start_working_data && formik.errors.start_working_data && <p>{formik.errors.start_working_data}</p>}

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
                        👉 Add New Worker
                    </Button>
                </Modal.Footer>
            </Modal>
        </form>
    );
}
