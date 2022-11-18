import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { FaCoins } from 'react-icons/fa';
import { styled } from '@mui/material/styles';

// -------------------------------------------
const DownloadButton = styled('button')({
  backgroundColor: '#13aa52',
  border: '1px solid #13aa52',
  borderRadius: '4px',
  boxShadow: 'rgba(0, 0, 0, .1) 0 2px 4px 0',
  boxSizing: 'border-box',
  color: '#fff',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: '400',
  outline: 'none',
  padding: '7px 25px',
  textAlign: 'center',
  transform: 'translateY(0)',
  transition: 'transform 150ms, box-shadow 150ms',
  userSelect: 'none',
  touchaction: 'manipulation',
  '&:hover': {
    boxShadow: 'rgba(0, 0, 0, .15) 0 3px 9px 0',
    transform: 'translateY(-2px)',
  },
  '&:focus': {
    boxShadow: 'rgba(0, 0, 0, .15) 0 3px 9px 0',
    transform: 'translateY(-2px)',
  },
});
// -------------------------------------------

export default function PurchaseConfirmationModal({ handleClose, show, fileId, fileTitle, filePrice, userCoins }) {
  const Navigate = useNavigate();
  // ----------------------------------------------------
  const [balanceColor, setbalanceColor] = useState('yellowgreen');
  // -----------------------------------------------------
  const [downloadButton, setDownloadButton] = useState();
  // -----------------------------------------------------
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${userInfo?.access}`,
    },
  };
  // ------------Geting File Source -----------
  const getFile = async () => {
    CheckBalance();
    try {
      const data = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/files/download-file/${fileId}`, config);
      const fileSource = data.data.map((file) => file.source);
      setTimeout(() => {
        window.location.replace(`${process.env.REACT_APP_API_KEY}${fileSource}`);
      }, 500);
    } catch (err) {
      console.error(err);
    }
  };
  // --------if no Balance -----------------
  const CheckBalance = () => {
    if (filePrice < userCoins) {
      setDownloadButton(true);
      setbalanceColor('green');
    } else {
      setDownloadButton(false);
      setbalanceColor('red');
    }
  };
  // ----------------------------------------
  // balanceAfter
  const balanceAfter = userCoins - filePrice
  // ----------------------------------------
  useEffect(() => {
    CheckBalance();
  });


  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title sx={{ fontWeight: 'bold' }}>Purchase Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Typography variant="h6">Are You Sure You Want To Download</Typography>
          <Typography variant="body1">{fileTitle}</Typography>
          <Typography variant="body1">
            File Price <span style={{ color: 'green', fontWeight: 'bold' }}> {filePrice}</span>{' '}
            <FaCoins style={{ color: 'green' }} />
            <br />
            You Have
            <span style={{ color: balanceColor, fontWeight: 'bold' }}> {userCoins}</span>{' '}
            <FaCoins style={{ color: balanceColor }} />{' '}
          </Typography>
          {downloadButton ? (
            <Typography variant="body1">
              Balance After Purchaseing <span style={{ color: 'green', fontWeight: 'bold' }}>{balanceAfter}</span>{' '}
              <FaCoins style={{ color: 'yellowgreen' }} />
            </Typography>
          ) : (
            ''
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {downloadButton ? (
            <DownloadButton onClick={() => getFile()}>Buy Now</DownloadButton>
          ) : (
            <DownloadButton onClick={() => Navigate('/dashboard/wallet')}>Re Cahrge</DownloadButton>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
