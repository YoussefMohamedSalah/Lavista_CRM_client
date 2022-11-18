import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box, Stack, Container } from '@mui/material';
import { QrReader } from 'react-qr-reader';
import SelectProblemsForm from './SelectProblemsForm';
import Page from '../../../components/Page';

function QrCodeHistory() {
  const [data, setData] = useState('' || null);
  const [scannedSection, setScannedSection] = useState('');
  const [scannedData, setScannedData] = useState('');

  const getDataFromQrCode = () => {
    if (data) {
      const string = data;
      const informationFromScan = string?.split('/');
      setScannedSection(informationFromScan[1]);
      setScannedData(informationFromScan[2]);
      console.log(informationFromScan);
    } else {
      console.log('nothing');
    }
  };

  useEffect(() => {
    getDataFromQrCode();
  }, [data]);

  return (
    <Page style={{ height: '100%' }} title="Scan-Qrcode">
      <Box style={{ marginTop: 10, width: '100%' }}>
        <Card>
          <Typography
            variant="h3"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: '#3f51b5',
              color: '#fff',
              padding: 15,
            }}
          >
            Scan Qr-Code
          </Typography>
          <CardContent sx={{ paddingBottom: '50px!important' }}>
            <Stack
              justifyContent="space-between"
              alignItems="center"
              sx={{ flexDirection: { xl: 'row', xs: 'column', md: 'column' } }}
            >
              <Stack
                sx={{
                  width: '25rem',
                  height: '100%',
                }}
              >
                <QrReader
                  scanDelay={500}
                  onResult={(result, error) => {
                    if (result) {
                      setData(result?.text);
                    }

                    if (error) {
                      console.info(error);
                    }
                  }}
                />
                <Box sx={{ alignSelf: 'center', margin: '0.3rem' }}>
                  <Typography variant="h4">{data || 'No Data'}</Typography>
                </Box>
              </Stack>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  // background: "yellow",
                  height: '20rem',
                }}
              >
                {data ? (
                  <SelectProblemsForm scannedData={scannedData} />
                ) : (
                  <h3 style={{ alignSelf: 'center' }}>Start Scanning Now !!</h3>
                )}
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Page>
  );
}

export default QrCodeHistory;
