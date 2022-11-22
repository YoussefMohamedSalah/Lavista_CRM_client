import { Card } from '@mui/material';
import RecentOrdersTable from './RecentOrdersTable';
import { subDays } from 'date-fns';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function RecentOrders() {
  // to the child component
  const [show, setShow] = useState(false);
  // ---------------------------------------------
  const [ownersData, setOwnersData] = useState([])

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);



  return (
    <Card sx={{ width: '100%' }}>
      <RecentOrdersTable OwnersList={ownersData} show={show} setShow={setShow} />
    </Card>
  );
}

export default RecentOrders;
