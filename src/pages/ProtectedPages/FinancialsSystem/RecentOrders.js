import { Card } from '@mui/material';
import RecentOrdersTable from './RecentOrdersTable';
import { subDays } from 'date-fns';

function RecentOrders() {
  const ownersList = [
    {
      id: '1',
      first_name: 'Fiat ',
      last_name: 'Deposit',
      phone_number: '01064478365',
      unit_number: '12A',
      to_pay: 56787,
      status: 'failed',

    },
    {
      id: '2',
      first_name: 'Fiat ',
      last_name: 'Deposit',
      phone_number: '01064478365',
      unit_number: '12A',
      to_pay: 56787,
      status: 'failed',

    },
    {
      id: '3',
      first_name: 'Fiat ',
      last_name: 'Deposit',
      phone_number: '01064478365',
      unit_number: '12A',
      to_pay: 56787,
      status: 'failed',

    },
    {
      id: '4',
      first_name: 'Fiat ',
      last_name: 'Deposit',
      phone_number: '01064478365',
      unit_number: '12A',
      to_pay: 56787,
      status: 'failed',

    },
    {
      id: '5',
      first_name: 'Fiat ',
      last_name: 'Deposit',
      phone_number: '01064478365',
      unit_number: '12A',
      to_pay: 56787,
      status: 'failed',

    },
    {
      id: '6',
      first_name: 'Fiat ',
      last_name: 'Deposit',
      phone_number: '01064478365',
      unit_number: '12A',
      to_pay: 56787,
      status: 'failed',

    },
    {
      id: '7',
      first_name: 'Fiat ',
      last_name: 'Deposit',
      phone_number: '01064478365',
      unit_number: '12A',
      to_pay: 0,
      status: 'completed',

    },
    {
      id: '8',
      first_name: 'Fiat ',
      last_name: 'Deposit',
      phone_number: '01064478365',
      unit_number: '12A',
      to_pay: 56787,
      status: 'failed',

    },
    {
      id: '9',
      first_name: 'Fiat ',
      last_name: 'Deposit',
      phone_number: '01064478365',
      unit_number: '12A',
      to_pay: 56787,
      status: 'failed',

    },
    {
      id: '10',
      first_name: 'Fiat ',
      last_name: 'Deposit',
      phone_number: '01064478365',
      unit_number: '12A',
      to_pay: 56787,
      status: 'failed',

    },
    // {
    //   id: '10',
    //   orderDetails: 'Wallet Transfer',
    //   orderDate: subDays(new Date(), 123).getTime(),
    // status: 'failed',
    //   orderID: '17KRZHY8T05M',
    //   sourceName: 'Wallet Transfer',
    //   sourceDesc: "John's Cardano Wallet",
    //   amountCrypto: 765.5695,
    //   amount: 7567,
    //   cryptoCurrency: 'ADA',
    //   currency: '$'
    // }
  ];

  return (
    <Card sx={{ width: '100%' }}>
      <RecentOrdersTable OwnersList={ownersList} />
    </Card>
  );
}

export default RecentOrders;
