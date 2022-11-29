
import React, { useEffect, useState } from 'react';
import '../styles.css';
import Button from 'rsuite/Button';
import { Table, Pagination } from 'rsuite';
import { useSelector } from 'react-redux';
import axios from 'axios';
import AddPermissionsModal from './AddPermissionsModal'

const { Column, HeaderCell, Cell } = Table;

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

const AllWorkersTable = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // ------------------------------
    const [workersData, setWorkersData] = useState([])
    const [selectedWorkerData, setSelectedWorkerData] = useState()
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
        setWorkersData(nextData);
    };
    const handleEditState = id => {
        const nextData = Object.assign([], workersData);
        const activeItem = nextData.find(item => item.id === id);
        activeItem.status = activeItem.status ? null : 'EDIT';
        setWorkersData(nextData);
        setSelectedWorkerData(nextData)
        handleShow()
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
                `${process.env.REACT_APP_API_KEY}/api/get_workers/`, config);
            setWorkersData(response.data);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        getWorkersData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        getWorkersData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


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
                    <Cell onChange={handleChange} dataKey="first_name" />
                </Column>

                <Column width={140}>
                    <HeaderCell>Last Name</HeaderCell>
                    <Cell onChange={handleChange} dataKey="last_name" />
                </Column>

                <Column width={150}>
                    <HeaderCell>Phone Number</HeaderCell>
                    <Cell onChange={handleChange} dataKey="phone_number" />
                </Column>

                <Column width={200}>
                    <HeaderCell>Id Number</HeaderCell>
                    <Cell onChange={handleChange} dataKey="id_number" />
                </Column>

                <Column width={150}>
                    <HeaderCell>Working Section</HeaderCell>
                    <Cell onChange={handleChange} dataKey="working_section" />
                </Column>

                <Column width={150}>
                    <HeaderCell>Start At</HeaderCell>
                    <Cell onChange={handleChange} dataKey="start_working_data" />
                </Column>
                <Column width={150}>
                    <HeaderCell>Left At</HeaderCell>
                    <Cell onChange={handleChange} dataKey="finish_working_data" />
                </Column>

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
            <AddPermissionsModal WorkerData={selectedWorkerData} show={show} handleClose={handleClose} />
        </>
    );
};

export default AllWorkersTable
