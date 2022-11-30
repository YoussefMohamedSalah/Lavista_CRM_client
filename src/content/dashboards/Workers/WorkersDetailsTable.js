
import React, { useEffect, useState } from 'react';
import '../styles.css';
import Button from 'rsuite/Button';
import { Table, Pagination } from 'rsuite';
import { useSelector } from 'react-redux';
import axios from 'axios';
import AddNewWorkerModal from './AddNewWorkerModal';

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
                }}
            >
                {rowData.status === 'EDIT' ? 'Save' : 'Edit'}
            </Button>
        </Cell>
    );
};

const WorkersDetailsTable = ({ show, handleClose }) => {
    const [workersData, setWorkersData] = useState([])
    const [selectedWorkerData, setSelectedWorkerData] = useState()
    const [dataSaved, setDataSaved] = useState(false)
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    // ----
    const handleChangeLimit = dataKey => {
        setPage(1);
        setLimit(dataKey);
    };

    const data = workersData.filter((v, i) => {
        const start = limit * (page - 1);
        const end = start + limit;
        return i >= start && i < end;
    });




    const handleChange = (id, key, value) => {
        const nextData = Object.assign([], workersData);
        nextData.find(item => item.id === id)[key] = value;
        // console.log(nextData)
        setWorkersData(nextData);
    };
    const handleEditState = id => {
        const nextData = Object.assign([], workersData);
        const activeItem = nextData.find(item => item.id === id);
        activeItem.status = activeItem.status ? null : 'EDIT';
        setWorkersData(nextData);
        setSelectedWorkerData(nextData)
        // createNewOwner(nextData)
        console.log(activeItem.status)
        setDataSaved(true)
        if (activeItem.status === null && dataSaved === true) {
            EditWorkerData(nextData)
            console.log('this sholud tregger the post request')
        }
        else {
            console.log('this shold do nothing')
        }

    };

    // getteing all Owners Data
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const config = {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${userInfo?.access}`,
        },
    };

    //  getting workersData 
    const getWorkersData = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_KEY}/api/${userInfo.village_Id}/get_workers/`, config);
            // console.log(response)
            // const workersArray = response.data.map((village) => village.workers)
            setWorkersData(response.data.workers);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        getWorkersData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show]);
    useEffect(() => {
        getWorkersData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // editing Selected Owner 
    const EditWorkerData = async () => {
        try {
            console.log(selectedWorkerData.id)
            await axios.post(`${process.env.REACT_APP_API_KEY}/api/edit_worker/${selectedWorkerData?.id}`, selectedWorkerData, config);
            console.log(selectedWorkerData)
            console.log('editing success')
        } catch (err) {
            console.log('error')
            console.error(err);
        }
    };


    return (
        <>
            <Table
                height={400}
                data={data}
                onRowClick={rowData => {
                    setSelectedWorkerData(rowData)
                }}
            >

                <Column width={140}>
                    <HeaderCell>First Name</HeaderCell>
                    <EditableCell onChange={handleChange} dataKey="first_name" />
                </Column>

                <Column width={140}>
                    <HeaderCell>Last Name</HeaderCell>
                    <EditableCell onChange={handleChange} dataKey="last_name" />
                </Column>

                <Column width={150}>
                    <HeaderCell>Phone Number</HeaderCell>
                    <EditableCell onChange={handleChange} dataKey="phone_number" />
                </Column>

                <Column width={200}>
                    <HeaderCell>Id Number</HeaderCell>
                    <EditableCell onChange={handleChange} dataKey="id_number" />
                </Column>

                <Column width={150}>
                    <HeaderCell>Working Section</HeaderCell>
                    <EditableCell onChange={handleChange} dataKey="working_section" />
                </Column>

                <Column width={150}>
                    <HeaderCell>Start At</HeaderCell>
                    <EditableCell onChange={handleChange} dataKey="start_working_data" />
                </Column>
                <Column width={150}>
                    <HeaderCell>Left At</HeaderCell>
                    <EditableCell onChange={handleChange} dataKey="finish_working_data" />
                </Column>

                {/* <Column width={150}>
                    <HeaderCell>Car Plate</HeaderCell>
                    <EditableCell onChange={handleChange} dataKey="reason_to_leave" />
                </Column>       
              */}

                <Column width={80} fixed="right">
                    <HeaderCell>Action</HeaderCell>
                    <ActionCell dataKey="id" onClick={handleEditState} />
                </Column>
            </Table>
            <div style={{ padding: 20 }}>
                <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    maxButtons={5}
                    size="xs"
                    layout={['total', '-', 'limit', '|', 'pager', 'skip']}
                    total={workersData.length}
                    limitOptions={[10, 30, 50]}
                    limit={limit}
                    activePage={page}
                    onChangePage={setPage}
                    onChangeLimit={handleChangeLimit}
                />
            </div>
            <AddNewWorkerModal handleClose={handleClose} show={show} />
        </>
    );
};

export default WorkersDetailsTable
