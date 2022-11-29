
import React, { useState } from 'react';
import '../styles.css';
import { Form, ButtonToolbar, Button, SelectPicker } from 'rsuite';
import { useSelector } from 'react-redux';
import axios from 'axios';


const data = ['qr_code_manager', 'owners_manager', 'workers_manager', 'gate_manager'].map(
    item => ({ label: item, value: item })
);

const AddPermissionsForm = ({ selectedWorkerData, handleClose, handleCloseAndSuccess }) => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const config = {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${userInfo?.access}`,
        },
    };
    // --------------------------------------------
    const [userType, setUserType] = useState(null);
    const [loggin, setLoggin] = useState('')
    const [password, setPassword] = useState('')





    const addNewWorkerPermission = async (selectedWorkerData) => {
        console.log(selectedWorkerData)
        const values = {
            id: selectedWorkerData?.id,
            first_name: selectedWorkerData?.first_name,
            last_name: selectedWorkerData?.last_name,
            loggin: loggin,
            password: password,
            phone_number: selectedWorkerData?.phone_number,
            village_name: "la VIsta 6",
            has_permission: true,
            permission_type: userType
        }
        try {
            await axios.post(`${process.env.REACT_APP_API_KEY}/auth/signup`, values, config);
            console.log(values)
            handleCloseAndSuccess()
        } catch (err) {
            console.log('error')
            console.error(err);
            handleClose()
        }
    };
    // --------------------------------------------
    return (
        <>
            <Form layout="horizontal">

                <Form.Group controlId="name-6">
                    <Form.ControlLabel>loggin</Form.ControlLabel>
                    <Form.Control name="name" value={loggin} onChange={setLoggin} />
                    <Form.HelpText>Required</Form.HelpText>
                </Form.Group>

                <Form.Group controlId="password-6">
                    <Form.ControlLabel>Password</Form.ControlLabel>
                    <Form.Control name="password" type="text" autoComplete="off" value={password} onChange={setPassword} />
                </Form.Group>

                <Form.Group controlId="email-6">
                    <Form.ControlLabel>Email</Form.ControlLabel>
                    <SelectPicker label="Permission" data={data} style={{ width: 300 }} value={userType} onChange={setUserType} />
                    <Form.HelpText tooltip>Required</Form.HelpText>
                </Form.Group>

                <Form.Group>
                    <ButtonToolbar>
                        <Button onClick={() => addNewWorkerPermission(selectedWorkerData)} appearance="primary">Submit</Button>
                        <Button appearance="default" onClick={() => handleClose()}>Cancel</Button>
                    </ButtonToolbar>
                </Form.Group>

            </Form>
        </>
    );
};

export default AddPermissionsForm
