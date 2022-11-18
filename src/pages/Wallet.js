/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Box, Card, Stack, CardHeader, Divider, Grid, TextField, Button, Typography } from '@mui/material';
// import {states} from '../../components/EgyptStates';
import axios from 'axios';
import CahrgeBundlesCard from '../components/CahrgeBundlesCard';

const Wallet = () => {
  const [bundelsArray, setBundelsArray] = useState([]);
  const getBundelsData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/bundles/bundles-list/`);
      setBundelsArray(response.data.results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBundelsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box>
        <Typography variant="h6" sx={{ padding: '0.5rem' }}>
          Re Charge Your Wallet Now <br />
          <span style={{ color: 'yellowgreen', marginLeft: '10rem' }}>WE AREE ON SALE</span>
        </Typography>
      </Box>
      <Card>
        <CardHeader subheader="Notice, It may Took up to One Hour to confirm The Transaction" title="Charge Bundles" />
        <Divider />
        {/* --------------------------------------------- */}
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ minHeight: '100%', padding: '10px 0px', flexWrap: 'wrap', p: 2 }}
        >
          {bundelsArray.map((bundle) => {
            return (
              <div key={bundle.id}>
                <CahrgeBundlesCard
                  id={bundle.id}
                  title={bundle.title}
                  description={bundle.description}
                  Price={bundle.price}
                  Coins={bundle.coins}
                />
              </div>
            );
          })}
          {/* <CahrgeBundlesCard Price={'10'} Coins={'1000'} />
          <CahrgeBundlesCard Price={'25'} Coins={'2100'} />
          <CahrgeBundlesCard Price={'50'} Coins={'4500'} />
          <CahrgeBundlesCard Price={'100'} Coins={'10000'} /> */}
        </Stack>
        {/* --------------------------------------------- */}
        <Divider />
        <Box
          sx={{
            p: 2,
          }}
        />
      </Card>
    </>
  );
};

export default Wallet;
