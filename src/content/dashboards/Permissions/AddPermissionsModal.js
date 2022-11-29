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



const AddPermissionsModal = ({
    show,
    handleClose,
    handleCloseAndSuccess,
    WorkerData,
}) => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const config = {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${userInfo?.access}`
        }
    };
    // -----Selected worker data-------------
    const [selectedWorkerData, setSelectedWorkerData] = useState()
    // -----worker select state--------------
    const [workerSelected, setWorkerSelected] = useState(false)
    // -----All Workers Data-----------------
    const [workersData, setWorkersData] = useState()
    // --------------------------------------
    const data = workersData?.filter((v, i) => {
        const start = 10 * (1 - 1);
        const end = start + 10;
        return i >= start && i < end;
    });
    // --------------------------------------
    const handleChange = (id, key, value) => {
        const nextData = Object.assign([], workersData);
        nextData.find(item => item.id === id)[key] = value;
        // console.log(nextData)
        setWorkersData(nextData);
    };
    useEffect(() => {
        setWorkerSelected(false)
    }, [handleClose])

    console.log(selectedWorkerData)




    const getWorkersWithPermissions = async () => {
        try {
            const data = await axios.get(
                `${process.env.REACT_APP_API_KEY}/api/1/get_workers`,
                config
            );
            const workersArray = data.data.workers;
            const newWithoutPermissionArray = workersArray?.filter(function (el) {
                return el.has_permission === false;
            });
            setWorkersData(newWithoutPermissionArray);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        getWorkersWithPermissions()
    }, [])









    return (
        <>
            {workersData ? (
                <Modal open={show} onClose={handleClose}>
                    <Modal.Header>
                        <Modal.Title>
                            Add Permission To Workers
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {!workerSelected && (
                            <>
                                <Table
                                    height={400}
                                    data={data}
                                    onRowClick={rowData => {
                                        setSelectedWorkerData(rowData)
                                    }}
                                >

                                    <Column width={150}>
                                        <HeaderCell>First Name</HeaderCell>
                                        <EditableCell onChange={handleChange} dataKey="first_name" />
                                    </Column>

                                    <Column width={150}>
                                        <HeaderCell>Last Name</HeaderCell>
                                        <EditableCell onChange={handleChange} dataKey="last_name" />
                                    </Column>

                                    <Column width={150}>
                                        <HeaderCell>Phone Number</HeaderCell>
                                        <EditableCell onChange={handleChange} dataKey="phone_number" />
                                    </Column>

                                    <Column width={80} fixed="right">
                                        <HeaderCell>Action</HeaderCell>
                                        <ActionCell dataKey="id" onClick={() => setWorkerSelected(true)} />
                                    </Column>
                                </Table>
                            </>
                        )}
                        {workerSelected && (
                            <AddPermissionsForm
                                WorkerData={WorkerData}
                                handleClose={handleClose}
                                handleCloseAndSuccess={handleCloseAndSuccess}
                                selectedWorkerData={selectedWorkerData}
                            />
                        )}
                    </Modal.Body>
                </Modal>
            ) : (
                null
            )}
        </>
    );
};

export default AddPermissionsModal;
