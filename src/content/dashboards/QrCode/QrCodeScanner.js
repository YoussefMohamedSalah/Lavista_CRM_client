/* eslint-disable no-unused-vars */
/* eslint-disable no-extra-boolean-cast */
import React, { useEffect, useState } from 'react';
import { Typography, Box, Stack, Grid } from '@mui/material';
import { QrReader } from 'react-qr-reader';
import SelectProblemsForm from './SelectProblemsForm';

function QrCodeScanner({ GroupTitle, StatusArray }) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      <>
        <div className="projects-section">
          <div className="projects-section-header">
            <p>{GroupTitle}</p>
            <p className="time">December, 12</p>
          </div>
          <div className="projects-section-line">
            <div className="projects-status">
              {StatusArray?.map((status) => (
                <>
                  <div className="item-status">
                    <span className="status-number">{status.value}</span>
                    <span className="status-type">{status.title}</span>
                  </div>
                </>
              ))}
            </div>
          </div>
          <Typography
            variant="h4"
            style={{
              paddingBottom: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#4067f9',
            }}
          >
            Scan Qr Code
            {/* {`Generate Qr Code For : ${inputValue} | ${inputValueForSubCategory}`} */}
          </Typography>
          <div className="projects-section-line">
            <Grid container>
              {/* Choose Type Section */}
              <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                <Stack
                  sx={{
                    width: '25rem',
                    height: '100%',
                  }}
                >
                  <QrReader
                    scanDelay={500}
                    onResult={(result, error) => {
                      if (!!result) {
                        setData(result?.text);
                      }

                      if (!!error) {
                        console.log('error');
                      }
                    }}
                  />
                  <Box sx={{ alignSelf: 'center', margin: '0.3rem' }}>
                    <Typography variant="h4">{data || 'No Data'}</Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    // background: "yellow",
                    height: '100%',
                  }}
                >
                  {data ? (
                    <SelectProblemsForm ScannedData={scannedData} />
                  ) : (
                    <h3 style={{ alignSelf: 'center' }}>Start Scanning Now !!</h3>
                  )}
                </Box>
              </Grid>
            </Grid>
          </div>
        </div>
      </>
    </>
  );
}

export default QrCodeScanner;
