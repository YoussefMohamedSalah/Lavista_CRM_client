
import React from 'react';
import './styles.css';
import Button from 'rsuite/Button';



import { Table } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;

const data = [
    {
        id: 1,
        first_name: 'youssef',
        last_name: 'mohamed',
        phone_number: "01069963165",
        owner_of: 'male',
        maintenance_fees: '12',
        car_plate: '121212',
        email: 'wewe@dwsw.com'
    }, {
        id: 2,
        first_name: 'youssef',
        last_name: 'mohamed',
        phone_number: "01069963165",
        owner_of: 'male',
        maintenance_fees: '12',
        car_plate: '121212',
        email: 'wewe@dwsw.com'
    }, {
        id: 1,
        first_name: 'youssef',
        last_name: 'mohamed',
        phone_number: "01069963165",
        owner_of: 'male',
        maintenance_fees: '12',
        car_plate: '121212',
        email: 'wewe@dwsw.com'
    }, {
        id: 2,
        first_name: 'youssef',
        last_name: 'mohamed',
        phone_number: "01069963165",
        owner_of: 'male',
        maintenance_fees: '12',
        car_plate: '121212',
        email: 'wewe@dwsw.com'
    }, {
        id: 1,
        first_name: 'youssef',
        last_name: 'mohamed',
        phone_number: "01069963165",
        owner_of: 'male',
        maintenance_fees: '12',
        car_plate: '121212',
        email: 'wewe@dwsw.com'
    }, {
        id: 2,
        first_name: 'youssef',
        last_name: 'mohamed',
        phone_number: "01069963165",
        owner_of: 'male',
        maintenance_fees: '12',
        car_plate: '121212',
        email: 'wewe@dwsw.com'
    }, {
        id: 1,
        first_name: 'youssef',
        last_name: 'mohamed',
        phone_number: "01069963165",
        owner_of: 'male',
        maintenance_fees: '12',
        car_plate: '121212',
        email: 'wewe@dwsw.com'
    }, {
        id: 2,
        first_name: 'youssef',
        last_name: 'mohamed',
        phone_number: "01069963165",
        owner_of: 'male',
        maintenance_fees: '12',
        car_plate: '121212',
        email: 'wewe@dwsw.com'
    }, {
        id: 1,
        first_name: 'youssef',
        last_name: 'mohamed',
        phone_number: "01069963165",
        owner_of: 'male',
        maintenance_fees: '12',
        car_plate: '121212',
        email: 'wewe@dwsw.com'
    }, {
        id: 2,
        first_name: 'youssef',
        last_name: 'mohamed',
        phone_number: "01069963165",
        owner_of: 'male',
        maintenance_fees: '12',
        car_plate: '121212',
        email: 'wewe@dwsw.com'
    }, {
        id: 1,
        first_name: 'youssef',
        last_name: 'mohamed',
        phone_number: "01069963165",
        owner_of: 'male',
        maintenance_fees: '12',
        car_plate: '121212',
        email: 'wewe@dwsw.com'
    }, {
        id: '212121w1w32121212',
        first_name: 'youssef',
        last_name: 'mohamed',
        phone_number: "01069963165",
        owner_of: 'male',
        maintenance_fees: '12',
        car_plate: '121212',
        email: 'wewe@dwsw.com'
    }
];

const defaultData = data;

const EditableCell = ({ rowData, dataKey, onChange, ...props }) => {
    const editing = rowData.status === 'EDIT';
    return (
        <Cell {...props} className={editing ? 'table-content-editing' : ''}>
            {editing ? (
                <input
                    className="rs-input"
                    defaultValue={rowData[dataKey]}
                    onChange={event => {
                        onChange && onChange(rowData.id, dataKey, event.target.value);
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

const OwnersDetailsTable = ({ OwnersList }) => {
    const [data, setData] = React.useState(OwnersList);

    const handleChange = (id, key, value) => {
        const nextData = Object.assign([], data);
        nextData.find(item => item.id === id)[key] = value;
        setData(nextData);
    };
    const handleEditState = id => {
        const nextData = Object.assign([], data);
        const activeItem = nextData.find(item => item.id === id);
        activeItem.status = activeItem.status ? null : 'EDIT';
        setData(nextData);
    };

    return (
        <Table
            height={400}
            data={data}
            onRowClick={rowData => {
                console.log(rowData);
            }}
        >
            <Column width={60} align="center" fixed>
                <HeaderCell>Id</HeaderCell>
                <EditableCell onChange={handleChange} dataKey="id" />
            </Column>

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
                <ActionCell dataKey="id" onClick={handleEditState} />
            </Column>
        </Table>
    );
};

export default OwnersDetailsTable