
/* eslint-disable react-hooks/exhaustive-deps */
import { Modal, Table, Button } from 'rsuite';
import React, { useEffect, useState } from 'react';
import AddPermissionsForm from './AddPermissionsForm';
import { useSelector } from 'react-redux';
import axios from 'axios';


const { Column, HeaderCell, Cell } = Table;

const EditableCell = ({ rowData, dataKey, onChange, ...props }) => {
    const editing = rowData.status === 'EDIT';
    return (
        <Cell {...props} className={editing ? 'table-content-editing' : ''}>
            {editing ? (
                <input
                    className="rs-input"
                    defaultValue={rowData[dataKey]}
                    onChange={event => {
                        onChange(rowData.id, dataKey, event.target.value);
                    }}
                />
            ) : (
                <span className="table-content-edit-span">{rowData[dataKey]}</span>
            )}
        </Cell>
    );
};
const ActionCell = ({ rowData, dataKey, onClick, ...props }) => {
    return (
        <Cell {...props} style={{ padding: '6px' }}>
            <Button
                appearance="link"
                onClick={() => {
                    onClick(rowData.id);
                    console.log(rowData)
                }}
            >
                {rowData.status === 'Select' ? 'Select' : 'Select'}
            </Button>
        </Cell>
    );
};



const SelectedWorkerPermissionModal = ({
    show,
    handleClose,
    handleCloseAndSuccess,
    WorkerId,
}) => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    console.log(userInfo?.village_Id)
    const config = {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${userInfo?.access}`
        }
    };
    // -----Selected worker data-------------
    const [workerData, setWorkerData] = useState()

    const getWorkersWithPermissions = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_KEY}/api/get_worker/${WorkerId}`,
                config
            );
            setWorkerData(response);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        getWorkersWithPermissions()
    }, [])









    return (
        <>
            <Modal open={show} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>
                        Add Permission To Workers
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddPermissionsForm
                        workerData={workerData}
                        handleClose={handleClose}
                        handleCloseAndSuccess={handleCloseAndSuccess}
                    />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default SelectedWorkerPermissionModal;
