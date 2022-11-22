import { useState } from 'react';
import { format } from 'date-fns';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import {
  Tooltip,
  Divider,
  Box,
  FormControl,
  InputLabel,
  Card,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Select,
  MenuItem,
  Typography,
  useTheme,
  CardHeader
} from '@mui/material';

import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import BulkActions from './BulkActions';
import Label from 'src/components/Label';
import PayMaintenanceFeesFormModal from './PayMaintenanceFeesFormModal';


const applyFilters = (ownerOrders, filters) => {
  return ownerOrders.filter((ownerOrder) => {
    let matches = true;

    if (filters.status && ownerOrder.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (ownerOrders, page, limit) => {
  return ownerOrders.slice(page * limit, page * limit + limit);
};

const RecentOrdersTable = ({ OwnersList, show, setShow }) => {
  // const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // setting The Label State 
  // const getStatusLabel = (maintenanceFees) => {
  //   if (maintenanceFees <= 1000) {
  //     const color = 'success'
  //     const text = 'Good'
  //     return <Label color={color}>{text}</Label>
  //   } else if (maintenanceFees > 1000 && maintenanceFees < 5000) {
  //     const color = 'warning'
  //     const text = 'Need To Pay'
  //     return <Label color={color}>{text}</Label>
  //   } else if (maintenanceFees >= 5000) {
  //     const color = 'error'
  //     const text = 'Must Pay'
  //     return <Label color={color}>{text}</Label>
  //   }
  // }
  const getStatusLabel = (status) => {
    if (status === 'good') {
      const color = 'success'
      const text = 'Good'
      return <Label color={color}>{text}</Label>
    } else if (status === 'normal') {
      const color = 'warning'
      const text = 'Normal'
      return <Label color={color}>{text}</Label>
    } else if (status === 'urgent') {
      const color = 'error'
      const text = 'Must Pay'
      return <Label color={color}>{text}</Label>
    }
  }


  const [selectedOwnerOrders, setSelectedOwnerOrders] = useState([]);
  // this is selected owner Data
  const [ownerData, setOwnerData] = useState({})
  const selectedBulkActions = selectedOwnerOrders.length > 0;
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [filters, setFilters] = useState({
    status: null
  });
  console.log(filters)


  const statusOptions = [
    {
      id: 'all',
      name: 'All'
    },
    {
      id: 'good',
      name: 'Good'
    },
    {
      id: 'normal',
      name: 'Normal'
    },
    {
      id: 'urgent',
      name: 'Must Pay'
    }
  ];

  const handleStatusChange = (e) => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value
    }));
  };

  const handleSelectAllOwnerOrders = (event) => {
    setSelectedOwnerOrders(
      event.target.checked
        ? OwnersList.map((ownerOrder) => ownerOrder.id)
        : []
    );
  };
  // ------------------


  const handleSelectOneOwnerOrder = (event, ownerOrderId) => {
    if (!selectedOwnerOrders.includes(ownerOrderId)) {
      setSelectedOwnerOrders((prevSelected) => [
        ...prevSelected,
        ownerOrderId
      ]);
    } else {
      setSelectedOwnerOrders((prevSelected) =>
        prevSelected.filter((id) => id !== ownerOrderId)
      );
    }
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value));
  };

  const filteredOwnerOrders = applyFilters(OwnersList, filters);
  const paginatedOwnerOrders = applyPagination(
    filteredOwnerOrders,
    page,
    limit
  );
  const selectedSomeOwnersOrders =
    selectedOwnerOrders.length > 0 &&
    selectedOwnerOrders.length < OwnersList.length;
  const selectedAllOwnersOrders =
    selectedOwnerOrders.length === OwnersList.length;
  const theme = useTheme();




  // -----*-----*------*------*-----*-----*-----*-----*-----*-----

  return (
    <Card sx={{ width: '100%' }}>
      {selectedBulkActions && (
        <Box flex={1} p={2}>
          <BulkActions handleShow={handleShow} />
        </Box>
      )}
      {!selectedBulkActions && (
        <CardHeader
          action={
            <Box width={200}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Status</InputLabel>
                <Select
                  value={filters.status || 'all'}
                  onChange={handleStatusChange}
                  label="Status"
                  autoWidth
                >
                  {statusOptions.map((statusOption) => (
                    <MenuItem key={statusOption.id} value={statusOption.id}>
                      {statusOption.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          }
          title="Recent Orders"
        />
      )}
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={selectedAllOwnersOrders}
                  indeterminate={selectedSomeOwnersOrders}
                  onChange={handleSelectAllOwnerOrders}
                />
              </TableCell>
              <TableCell>Owner Name</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Unit Number</TableCell>
              <TableCell>Total To Pay</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedOwnerOrders.map((ownerOrder) => {
              const isownerOrderSelected = selectedOwnerOrders.includes(
                ownerOrder.id
              );
              return (
                <TableRow
                  hover
                  key={ownerOrder.id}
                  selected={isownerOrderSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isownerOrderSelected}
                      onChange={(event) => {
                        handleSelectOneOwnerOrder(event, ownerOrder.id);
                        setOwnerData(ownerOrder);
                      }

                      }
                      value={isownerOrderSelected}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {ownerOrder.first_name} {ownerOrder.last_name}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary" noWrap>
                      {format(ownerOrder.orderDate, 'MMMM dd yyyy')}
                    </Typography> */}
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {ownerOrder.phone_number}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {ownerOrder.owner_of}
                    </Typography>

                  </TableCell>

                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {ownerOrder.maintenance_fees}
                    </Typography>

                  </TableCell>

                  <TableCell align="right">
                    {getStatusLabel(ownerOrder.status)}
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="Edit Order" arrow>
                      <IconButton
                        sx={{
                          '&:hover': {
                            background: theme.palette.primary.lighter
                          },
                          color: theme.palette.primary.main
                        }}
                        color="inherit"
                        size="small"
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Order" arrow>
                      <IconButton
                        sx={{
                          '&:hover': { background: theme.palette.error.lighter },
                          color: theme.palette.error.main
                        }}
                        color="inherit"
                        size="small"
                      >
                        <DeleteTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          count={filteredOwnerOrders.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box>
      <PayMaintenanceFeesFormModal handleClose={handleClose} show={show} ownerData={ownerData} />
    </Card>

  );
};

RecentOrdersTable.propTypes = {
  ownerOrders: PropTypes.array.isRequired
};

RecentOrdersTable.defaultProps = {
  ownerOrders: []
};

export default RecentOrdersTable;
