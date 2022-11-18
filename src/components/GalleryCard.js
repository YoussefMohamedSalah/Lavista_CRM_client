import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import PropTypes from 'prop-types';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Link, Card, Grid, Avatar, Typography, CardContent, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import Lovelist from './file/Lovelist';
// utils
// import { fDate } from '../utils/formatTime';
import { fShortenNumber } from '../utils/formatNumber';
//
import SvgIconStyle from './SvgIconStyle';
import Iconify from './Iconify';
import UserRegesterModal from './Form/UserRegesterModal';
// ----------------------------------------------------------------------

const CardMediaStyle = styled('div')({
  position: 'relative',
  // paddingTop: 'calc(100% * 4.5 / 6)',
});

const TitleStyle = styled(Link)({
  height: 44,
  overflow: 'hidden',
  WebkitLineClamp: 3,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
});

const AvatarStyle = styled(Avatar)(({ theme }) => ({
  zIndex: 9,
  width: 42,
  height: 42,
  position: 'absolute',
  left: theme.spacing(3),
  bottom: theme.spacing(-10),
}));

const InfoStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginTop: theme.spacing(1),
  color: theme.palette.text.disabled,
}));

const CoverImgStyle = styled('img')({
  top: 0,
  width: '100%',
  // height: '130%',
  objectFit: 'cover',
  // position: 'absolute',
});

const ChipDiv = styled('div')({
  top: '0',
  backgroundColor: '#FB2576',
  borderRadius: '22px',
  boxSizing: 'border-box',
  color: '#fff',
  fontSize: '13px',
  fontWeight: '400',
  outline: 'none',
  padding: '0px 13px',
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

// ----------------------------------------------------------------------

GalleryCard.propTypes = {
  file: PropTypes.object.isRequired,
};

export default function GalleryCard({ file }) {
  const [likesCount, setLikesCount] = useState(file.likes);
  const [love, setLove] = useState(file.user_make_like);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Navigate = useNavigate();

  const latestFileLarge = '';
  const latestFile = '';

  const FILE_INFO = [
    { number: file.coins, icon: 'ph:coins-fill' },
    { number: file.views, icon: 'eva:eye-fill' },
    { number: likesCount, icon: 'eva:heart-fill' },
  ];

  // -----*-----*------*------*Here The Love Action Start*-----*-----*-----*-----*-----

  const handleCount = () => {
    if (file.user_make_like === true && love === true) {
      setLikesCount(file.likes);
    } else if (file.user_make_like === false && love === false) {
      setLikesCount(file.likes);
    } else if (file.user_make_like === false && love === true) {
      setLikesCount(file.likes + 1);
    } else if (file.user_make_like === true && love === false) {
      setLikesCount(file.likes - 1);
    }
  };

  // -----*-----*------*------*Main User Data*-----*-----*-----*-----*-----

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${userInfo?.access}`,
    },
  };

  // -----*-----*------*------*Check If User Is Regesterd*-----*-----*-----*-----*-----
  const CheckRegesterd = () => {
    if (userInfo) {
      handleLove();
      setLove(!love);
    } else {
      handleShow();
    }
  };

  // -----*-----*------*------*Send Love Action*-----*-----*-----*-----*-----

  const handleLove = async () => {
    const likePayload = { like: true };
    try {
      await axios.post(`${process.env.REACT_APP_API_KEY}/api/v1/files/file-actions/${file.id}/`, likePayload, config);
    } catch (err) {
      console.error(err);
    }
  };

  // -----*-----*------*------*-----*-----*-----*-----*-----*-----

  useEffect(() => {
    handleCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CheckRegesterd]);

  // -----*-----*------*------*-----*-----*-----*-----*-----*-----

  const ModalContent = {
    title: '⭕ Login Is Needed',
    body: 'Please Login To Like & Download Files You Desire',
    mainButtonName: '👉 Login Now',
    path: '/login',
  };

  return (
    <Grid
      item
      xs={12}
      sm={latestFileLarge ? 12 : 6}
      md={latestFileLarge ? 6 : 3}
      style={{ paddingBottom: '1rem!importnat' }}
    >
      <div className="Maingallery">
        <div className="pics" style={{ marginBottom: '10px' }}>
          <div key={file.id}>
            {file.coins === 0 && (
              <div style={{ position: 'absolute', padding: '14px 5px' }}>
                <ChipDiv>Free</ChipDiv>
              </div>
            )}
            <motion.div onClick={() => Navigate(`/file/${file.id}`)}>
              <img src={`${process.env.REACT_APP_API_KEY}${file.image}`} style={{ width: '100%' }} alt={file.title} />
            </motion.div>
            <div className="Filesumb">
              <div className="imgc">
                <a href="">
                  <Avatar
                    src={`${process.env.REACT_APP_API_KEY}${file.owner.profileimage}`}
                    alt=""
                    style={{ marginLeft: '5px', marginTop: '10px' }}
                  />
                </a>
              </div>
              <div
                className="title"
                style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis!important',
                  width: '100%',
                }}
              >
                <Typography variant="body2" as="overline" style={{ textTransform: 'capitalize' }}>
                  {file.title}
                </Typography>
                <Typography variant="subtitle2" style={{ textTransform: 'capitalize' }}>
                  By {file.owner.username}, In {file.date}{' '}
                </Typography>
              </div>
            </div>
          </div>
          <Lovelist fileId={file.id} loveState={file.user_make_like} fileLikes={file.likes} price={file.coins} />
        </div>
      </div>
      <UserRegesterModal handleClose={handleClose} show={show} ModalContent={ModalContent} />
    </Grid>
  );
}
