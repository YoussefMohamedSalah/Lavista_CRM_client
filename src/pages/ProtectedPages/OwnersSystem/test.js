// import React, { useState } from 'react';
// import { useNavigate } from 'react-router';
// import Modal from 'react-bootstrap/Modal';
// import {
//     Box,
//     Card,
//     CardContent,
//     CardHeader,
//     Divider,
//     Grid,
//     TextField,
//     Button,
//     Alert,
//     IconButton,
//     Collapse,
// } from '@mui/material';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
// import CloseIcon from '@mui/icons-material/Close';
// import { states } from '../../../components/EgyptStates';

// export default function PayMaintenanceFeesFormModal({ handleClose, show, userData }) {
//     const navigate = useNavigate()

//     const [open, setOpen] = useState(false);
//     const userLogin = useSelector((state) => state.userLogin);
//     const { userInfo } = userLogin;
//     const config = {
//         headers: {
//             'Content-type': 'application/json',
//             Authorization: `Bearer ${userInfo?.access}`,
//         },
//     };
//     // ---------------------------------------------------------------------------------------
//     const formHandler = () => {
//         setOpen(true);
//         setTimeout(() => {
//             setOpen(false);
//         }, 3000);
//     };
//     // ---------------------------------------------------------------------------------------
//     const formik = useFormik({
//         initialValues: {
//             first_name: userData?.first_name,
//             last_name: userData?.last_name,
//             unit_number: userData?.unit_number,
//             to_pay: '',
//             payment_method: ''
//         },
//         validationSchema: Yup.object({
//             first_name: Yup.string().required().max(40, 'limit passed').min(1, 'min 1 word'),
//             last_name: Yup.string().required().max(40, 'limit passed').min(1, 'min 1 word'),
//             unit_number: Yup.string().required(),
//             to_pay: Yup.number().required(),
//             payment_method: Yup.string().required(),
//         }),

//         onSubmit: (values) => {
//             updateUserData(values);
//             formHandler();
//         },
//     });
//     // ---------------------------------------------------------------------------------------
//     const updateUserData = async (values) => {
//         try {
//             await axios.post(`${process.env.REACT_APP_API_KEY}/api/v1/accounts/edit-user/${userInfo?.id}/`, values, config);
//         } catch (err) {
//             console.error(err);
//         }
//     };
//     // ---------------------------------------------------------------------------------------
//     const Payment_Method = [
//         {
//             value: 'Cash',
//             label: 'Cash',
//         },
//         {
//             value: 'Visa',
//             label: 'Visa',
//         },
//         {
//             value: 'Check',
//             label: 'Check',
//         },
//     ]

//     return (
//         <>
//             <Modal show={show} onHide={handleClose} centered>
//                 <Modal.Header closeButton>
//                     <Modal.Title>⭕ Pay Maintenance Fees</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     {/* ============================ */}
//                     <form autoComplete="off" {...formik.values} onSubmit={formik.handleSubmit}>
//                         <Card>
//                             <CardHeader subheader="Please Make Sure Inputs Are Correct" title="Owner Info" />
//                             <Collapse in={open}>
//                                 <Alert
//                                     action={
//                                         <IconButton
//                                             aria-label="close"
//                                             color="inherit"
//                                             size="small"
//                                             onClick={() => {
//                                                 setOpen(false);
//                                             }}
//                                         >
//                                             <CloseIcon fontSize="inherit" />
//                                         </IconButton>
//                                     }
//                                     sx={{ mb: 2 }}
//                                 >
//                                     Info Edited Successfully
//                                 </Alert>
//                             </Collapse>
//                             <Divider />
//                             <CardContent>
//                                 <Grid container spacing={3}>
//                                     <Grid item md={12} xs={12}>
//                                         <TextField
//                                             fullWidth
//                                             helperText="Please specify the first name"
//                                             label="First name"
//                                             placeholder={userData?.first_name ? userData?.first_name : 'First Name'}
//                                             name="first_name"
//                                             onChange={formik.handleChange}
//                                             onBlur={formik.handleBlur}
//                                             value={formik.values.first_name}
//                                             variant="outlined"
//                                         />
//                                         {formik.touched.first_name && formik.errors.first_name && <p>{formik.errors.first_name}</p>}
//                                     </Grid>
//                                     <Grid item md={12} xs={12}>
//                                         <TextField
//                                             fullWidth
//                                             label="Last name"
//                                             required
//                                             placeholder={userData?.last_name ? userData?.last_name : 'Last Name'}
//                                             name="last_name"
//                                             onChange={formik.handleChange}
//                                             onBlur={formik.handleBlur}
//                                             value={formik.values.last_name}
//                                             variant="outlined"
//                                         />
//                                         {formik.touched.last_name && formik.errors.last_name && <p>{formik.errors.last_name}</p>}
//                                     </Grid>
//                                     <Grid item md={12} xs={12}>
//                                         <TextField
//                                             fullWidth
//                                             label="Unit Number"
//                                             placeholder={userData?.unit_number ? userData?.unit_number : 'Unit Number'}
//                                             name="unit_number"
//                                             onChange={formik.handleChange}
//                                             onBlur={formik.handleBlur}
//                                             value={formik.values.unit_number || ''}
//                                             variant="outlined"
//                                         />
//                                         {formik.touched.unit_number && formik.errors.unit_number && <p>{formik.errors.unit_number}</p>}
//                                     </Grid>
//                                     <Grid item md={12} xs={12}>
//                                         <TextField
//                                             fullWidth
//                                             label="Payment Method"
//                                             placeholder='Payment Method'
//                                             name="payment_method"
//                                             onChange={formik.handleChange}
//                                             onBlur={formik.handleBlur}
//                                             value={formik.values.payment_method || ''}
//                                             select
//                                             SelectProps={{ native: true }}
//                                             variant="outlined"
//                                         >
//                                             {formik.touched.payment_method && formik.errors.payment_method && <p>{formik.errors.payment_method}</p>}

//                                             {Payment_Method.map((option) => (
//                                                 <option key={option.value} value={option.value || ''}>
//                                                     {option.label}
//                                                 </option>
//                                             ))}
//                                         </TextField>
//                                     </Grid>
//                                 </Grid>
//                             </CardContent>
//                             <Divider />
//                             <Box
//                                 sx={{
//                                     display: 'flex',
//                                     justifyContent: 'flex-end',
//                                     p: 2,
//                                 }}
//                             >
//                                 <Button onClick={() => formik.handleSubmit} color="primary" variant="contained" type="submit">
//                                     Save
//                                 </Button>
//                             </Box>
//                         </Card>
//                     </form>

//                     {/* ============================= */}
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={() => navigate('/login')}>
//                         👉 Pay Now
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// }
