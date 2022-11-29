
import React, { useEffect, useState } from 'react';
import '../styles.css';
import Button from 'rsuite/Button';
import { Table, Pagination } from 'rsuite';
import { useSelector } from 'react-redux';
import axios from 'axios';
// import AddNewUserModal from './AddNewUserModal';
import PayMaintenanceFeesFormModal from './PayMaintenanceFeesFormModal';

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
                {rowData.status === 'Pay' ? 'Pay' : 'Pay'}
            </Button>
        </Cell>
    );
};

const OwnersDetailsTable = ({ show, handleShow, handleClose }) => {
    const [ownersData, setOwnersData] = useState([])
    const [selectedOwnerData, setSelectedOwnerData] = useState()
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    // ----
    const handleChangeLimit = dataKey => {
        setPage(1);
        setLimit(dataKey);
    };

    const data = ownersData.filter((v, i) => {
        const start = limit * (page - 1);
        const end = start + limit;
        return i >= start && i < end;
    });




    const handleChange = (id, key, value) => {
        const nextData = Object.assign([], ownersData);
        nextData.find(item => item.id === id)[key] = value;
        // console.log(nextData)
        setOwnersData(nextData);
    };
    // const handleEditState = id => {
    //     const nextData = Object.assign([], ownersData);
    //     const activeItem = nextData.find(item => item.id === id);
    //     activeItem.status = activeItem.status ? null : 'Pay';
    //     setOwnersData(nextData);
    // };
    // getteing all Owners Data

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const config = {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${userInfo?.access}`,
        },
    };

    //  getting OwnersData 
    const getOwnersData = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_KEY}/api/get_owners/`, config);
            setOwnersData(response.data);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        getOwnersData();
    }, [show]);

    return (
        <>
            <Table
                height={400}
                data={data}
                onRowClick={rowData => {
                    setSelectedOwnerData(rowData)
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

                <Column width={100}>
                    <HeaderCell>Unit Number</HeaderCell>
                    <EditableCell onChange={handleChange} dataKey="owner_of" />
                </Column>

                <Column width={150}>
                    <HeaderCell>Maintenance Fees</HeaderCell>
                    <EditableCell onChange={handleChange} dataKey="maintenance_fees" />
                </Column>

                <Column width={150}>
                    <HeaderCell>Car Plate</HeaderCell>
                    <EditableCell onChange={handleChange} dataKey="car_plate" />
                </Column>

                <Column width={80} fixed="right">
                    <HeaderCell>Action</HeaderCell>
                    <ActionCell dataKey="id" onClick={handleShow} />
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
                    total={ownersData.length}
                    limitOptions={[10, 30, 50]}
                    limit={limit}
                    activePage={page}
                    onChangePage={setPage}
                    onChangeLimit={handleChangeLimit}
                />
            </div>
            <PayMaintenanceFeesFormModal handleClose={handleClose} show={show} ownerData={selectedOwnerData} />

        </>
    );
};

export default OwnersDetailsTable
