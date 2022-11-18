/* eslint-disable no-unused-vars */
import { Stack, Box, CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './ChargeBundlesCard.css';
import CoinSvg from './coins-svgrepo-com.svg';

const CahrgeBundlesCard = ({ Price, Coins, id, title }) => {
  const [userData, setUserData] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${userInfo?.access}`,
    },
  };

  //  getting sub_User_Data Function
  const getUserData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_KEY}/api/v1/accounts/user-details/${userInfo?.id}`,
        config
      );
      setUserData(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBundelsData = async () => {
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo?.access}`,
      },
    };
    setLoading(true);
    const url = `${process.env.REACT_APP_API_KEY}/api/v1/files/checkout-paymob/${id}/`;
    const Body = {
      first_name: userData?.first_name,
      last_name: userData?.last_name,
      email: userData?.email,
      phone: userData?.mobile_number,
    };
    axios
      .post(url, Body, config)
      .then((result) => {
        const responseUrl = result.data.redirect_iframe_url;
        setLoading(false);
        window.location.replace(responseUrl);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(true);
  };

  return (
    <>
      <Stack direction="row" justifyContent="space-evenly" alignItems="center">
        <div className="container">
          <Box
            className="card"
            sx={{
              width: { lg: '200px!important', md: '200px!important', xs: '267px!important' },
              height: { lg: '300px!important', md: '300px!important', xs: '350px!important' },
            }}
          >
            <div className="imgBx">
              <img src={CoinSvg} alt="show" />
            </div>
            <div className="contentBx">
              <h2>{title}</h2>
              <div className="size">
                <h3>Pay ${Price} Dollars</h3>
                <h3>
                  Get <span style={{ color: '#9bdc28' }}>{Coins}</span> Coins Now
                </h3>
              </div>

              {loading ? (
                  <CircularProgress sx={{width:'1rem', height:'1rem', color:'white'}}/>
              ) : (
                <a className="button" href="#" onClick={() => getBundelsData()}>
                  Buy Now
                </a>
              )}
            </div>
          </Box>
        </div>
      </Stack>
    </>
  );
};

export default CahrgeBundlesCard;
// {loading ? (
//   <CircularProgress sx={{ width: '3rem', height: '3rem' }} />
// ) : (
//   Buy Now
//     }}
//   />
// )}
