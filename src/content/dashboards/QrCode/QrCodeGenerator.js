/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-else-return */
/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
// components
import {
  Grid,
  TextField,
  Typography,
  Stack,
  Autocomplete,
  Box,
  Chip
} from '@mui/material';
import QRCode from 'qrcode';
import React, { useEffect, useState } from 'react';
import CustomBtn from '../../../components/Btns/CustomBtn';
import {
  // MainCategoryValues,
  poolsOptions,
  MechanicsOptions,
  ElectricityOptions,
  AgriculturalOptions,
  NetworksOptions,
  CamerasOptions
} from './QrCodeData';
import PrintQrCodeSheet from './PrintQrCodeSheet';
import { currentDate } from '../../../utils/currentDate';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function QrCodeGenerator({
  GroupTitle,
  CategoriesData,
  villageQrcodeList,
  setReGet
}) {

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${userInfo?.access}`
    }
  };
  // 
  const [categoryItems, setCategoryItems] = useState([])
  // category value
  const [categoryValue, setCategoryValue] = useState(null);
  //
  const [itemValue, setItemValue] = useState(null);
  // 
  const [text, setText] = useState('');
  // 
  const [inputValueForSubCategory, setInputValueSubCategory] = useState('');
  //
  console.log(CategoriesData)
  console.log(categoryItems)

  // -------------------------------------------------------------------------------------------------
  useEffect(() => {
    setInputValueSubCategory('');
  }, [categoryValue]);
  // -------------------------------------------------------------------------------------------------
  const [qrcodeList, setQrcodeList] = useState([]);
  // -----------------------------------------------------

  // getting all Items of The Category Chosen
  const getItems = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_KEY}/api/${userInfo?.village_Id}/${categoryValue}/get_items`,
        config
      );
      setCategoryItems(response?.data.items)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getItems()
  }, [categoryValue])

  // -----------------------------------------------------
  // here will send a post request to the db to save all data in backend
  const generateQrCode = async () => {
    const finalText = `${villageQrcodeList.village}/${categoryValue}/${itemValue}/${text}`;
    const date = new Date();
    const uniqId = date.getTime();
    setReGet(date)
    if (categoryValue) {
      try {
        await axios.post(
          `${process.env.REACT_APP_API_KEY}/api/${userInfo?.village_Id}/${categoryValue}/${itemValue}/create_qrcode`,
          {
            serial: text,
            image: 'url_must_be_here'
          },
          config
        );
      } catch (error) {
        console.log(error);
      }
      // ----------------------
      try {
        const response = await QRCode.toDataURL(finalText);
        setQrcodeList((oldArray) => [
          ...oldArray,
          { Url: response, Title: finalText, id: uniqId }
        ]);
      } catch (error) {
        console.log(error);
      }
    } else {
      // eslint-disable-next-line no-alert
      alert('please Choose Section');
    }
  };
  // deleting chips and Qrcode Data before Printing
  const handleDelete = (chipToDelete) => () => {
    setQrcodeList((chips) =>
      chips.filter((chip) => chip.id !== chipToDelete.id)
    );
  };
  // -----------------------------------------------------------------------------
  return (
    <>
      <div className="projects-section">
        <div className="projects-section-header">
          <p>{GroupTitle}</p>
          <p className="time">{currentDate}</p>
        </div>
        <div className="projects-section-line">
          <div className="projects-status">
            <div className="item-status">
              <span className="status-number">
                {villageQrcodeList.allItemsCount}
              </span>
              <span className="status-type">Ganerated</span>
            </div>
          </div>
        </div>
        <Typography
          variant="h4"
          style={{
            paddingBottom: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#4067f9'
          }}
        >
          {`Generate Qr Code For : ${categoryValue} | ${inputValueForSubCategory}`}
        </Typography>
        <div>
          <Grid container spacing={2}>
            {/* Choose Type Section */}
            <Grid item xl={4} lg={6} md={4} sm={12} xs={12}>
              <Autocomplete
                sx={{ width: '100%' }}
                options={CategoriesData.map((option) => option.title)}
                onChange={(event, newValue) => {
                  setCategoryValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} label="قسم الصيانة" />
                )}
              />
            </Grid>
            {/* ------------------------------------------------------------- */}
            <Grid item xl={4} lg={6} md={4} sm={12} xs={12}>
              <Autocomplete
                sx={{ width: '100%' }}
                options={categoryItems.map((option) => option.en_item_name)}
                onChange={(event, newValue) => {
                  setItemValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} label="القسم الفرعي" />
                )}
              />
            </Grid>
            {/* ------------- Choose Sub Item Based On Section --------------- */}
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
                    alignSelf: 'center'
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
        <Stack
          direction="row"
          sx={{ flexWrap: 'wrap' }}
          spacing={0.3}
          gap={0.4}
        >
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
      <Box>
        <PrintQrCodeSheet MainSection={categoryValue} SheetArray={qrcodeList} />
      </Box>
    </>
  );
}
