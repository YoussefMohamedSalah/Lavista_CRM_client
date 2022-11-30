
import React, { useEffect, useState } from 'react';
import '../styles.css';
import Button from 'rsuite/Button';
import { Table, Pagination } from 'rsuite';
import { useSelector } from 'react-redux';
import axios from 'axios';
import SelectedWorkerPermissionModal from './SelectedWorkerPermisssionModal';

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

function AllWorkersTable() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
        console.log('cliked')
        console.log(show)
    };
    // ------------------------------
    const [workersData, setWorkersData] = useState([])
    const [selectedWorkerId, setSelectedWorkerId] = useState()
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



    const handleEditState = id => {
        setSelectedWorkerId(id)
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
            console.log(response.data)
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
                    console.log(rowData);
                }}
            >
                <Column width={140}>
                    <HeaderCell>First Name</HeaderCell>
                    <Cell dataKey="first_name" />
                </Column>

                <Column width={140}>
                    <HeaderCell>Last Name</HeaderCell>
                    <Cell dataKey="last_name" />
                </Column>

                <Column width={150}>
                    <HeaderCell>Phone Number</HeaderCell>
                    <Cell dataKey="phone_number" />
                </Column>

                <Column width={200}>
                    <HeaderCell>Id Number</HeaderCell>
                    <Cell dataKey="id_number" />
                </Column>

                <Column width={150}>
                    <HeaderCell>Working Section</HeaderCell>
                    <Cell dataKey="working_section" />
                </Column>

                <Column width={150}>
                    <HeaderCell>Start At</HeaderCell>
                    <Cell dataKey="start_working_data" />
                </Column>
                <Column width={150}>
                    <HeaderCell>Left At</HeaderCell>
                    <Cell dataKey="finish_working_data" />
                </Column>

                <Column width={80} fixed="right">
                    <HeaderCell>...</HeaderCell>

                    <Cell>
                        {rowData => (
                            <span>
                                <a onClick={() => handleEditState(rowData.id)}> Edit </a>
                            </span>
                        )}
                    </Cell>
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
            <SelectedWorkerPermissionModal WorkerId={selectedWorkerId} show={show} handleClose={handleClose} />
        </>
    );
};

export default AllWorkersTable
