/* eslint-disable no-else-return */
/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
// components
import { Grid, TextField, Typography, Stack, Autocomplete, Box, Chip } from '@mui/material';
import QRCode from 'qrcode';
import React, { useState } from 'react';
import CustomBtn from '../../../components/Btns/CustomBtn';
import {
  MainCategoryValues,
  poolsOptions,
  MechanicsOptions,
  ElectricityOptions,
  AgriculturalOptions,
  NetworksOptions,
  CamerasOptions,
} from './QrCodeData';
import PrintQrCodeSheet from './PrintQrCodeSheet';

export default function QrCodeGenerator({ GroupTitle, StatusArray }) {
  //
  const Village = 'Ray';
  //
  const [value, setValue] = useState(MainCategoryValues[0]);
  //
  const [inputValue, setInputValue] = useState('');
  //
  const [inputValueForSubCategory, setInputValueSubCategory] = useState('');
  //
  const [text, setText] = useState('');
  // -------------------------------------------------------------------------------------------------
  const determanSubCategory = () => {
    if (value === 'Mec') {
      return MechanicsOptions;
    } else if (value === 'Elc') {
      return ElectricityOptions;
    } else if (value === 'Ls') {
      return AgriculturalOptions;
    } else if (value === 'Net') {
      return NetworksOptions;
    } else if (value === 'Cam') {
      return CamerasOptions;
    } else if (value === 'Pool') {
      return poolsOptions;
    } else {
      return [];
    }
  };
  // --------------------------
  const [qrcodeList, setQrcodeList] = useState([]);
  console.log(qrcodeList)

  const generateQrCode = async () => {
    const finalText = `${Village}/${inputValue}/${inputValueForSubCategory}/${text}`;
    const date = new Date();
    const uniqId = date.getTime();

    if (value) {
      try {
        const response = await QRCode.toDataURL(finalText);
        setQrcodeList((oldArray) => [...oldArray, { Url: response, Title: finalText, id: uniqId }]);
      } catch (error) {
        console.log(error);
      }
    } else {
      // eslint-disable-next-line no-alert
      alert('please Choose Section');
    }
  };

  // ----------------------------------
  // deleting chips and Qrcode Data before Printing
  const handleDelete = (chipToDelete) => () => {
    setQrcodeList((chips) => chips.filter((chip) => chip.id !== chipToDelete.id));
  };

  return (
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
          {`Generate Qr Code For : ${inputValue} | ${inputValueForSubCategory}`}
        </Typography>
        <div className="projects-section-line">
          <Grid container spacing={2}>
            {/* Choose Type Section */}
            <Grid item xl={4} lg={6} md={4} sm={12} xs={12}>
              <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                  setInputValueSubCategory('');
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={MainCategoryValues}
                sx={{ width: '100%' }}
                renderInput={(params) => <TextField {...params} label="قسم الصيانة" />}
              />
            </Grid>
            {/* ------------- Choose Sub Item Based On Section --------------- */}
            <Grid item xl={4} lg={6} md={4} sm={12} xs={12}>
              <Autocomplete
                id="country-select-demo"
                sx={{ width: '100%' }}
                options={determanSubCategory()}
                inputValue={inputValueForSubCategory}
                onInputChange={(event, newInputValue) => {
                  setInputValueSubCategory(newInputValue);
                }}
                autoHighlight
                getOptionLabel={(option) => option.code}
                renderOption={(props, option) => (
                  <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    ({option.code}) &nbsp;-&nbsp; {option.label}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="اختر الكود التعريفي"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                  />
                )}
              />
            </Grid>
            {/* --------------------------------------------- */}
            <Grid item xl={4} lg={6} md={4} sm={12} xs={12}>
              <Stack direction="row">
                <TextField
                  label="Enter Text Here"
                  style={{ width: '100%' }}
                  onChange={(e) => setText(e.target.value)}
                />
                <Box
                  style={{
                    marginLeft: '0.5rem',
                    width: '7rem',
                    alignSelf: 'center',
                  }}
                  onClick={() => generateQrCode()}
                >
                  <CustomBtn btnContent={'Generate'} />
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </div>
      </div>

      <Box>
        <Stack direction="row" sx={{ flexWrap: 'wrap' }} spacing={0.3} gap={0.4}>
          {qrcodeList?.map((obj, index) => (
            <Box key={index}>
              <Chip
                color="warning"
                label={obj.Title}
                onDelete={obj.Title === 'React' ? undefined : handleDelete(obj)}
              />
            </Box>
          ))}
        </Stack>
      </Box>
      <Box >
        <PrintQrCodeSheet MainSection={value} SheetArray={qrcodeList} />
      </Box>
    </>
  );
}
