import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// ---
import './Filesumb.css';
import { Typography, Stack, Box, Avatar } from '@mui/material';
import Iconify from '../../Iconify';

const FD = () => {
  const { id } = useParams();
  const [file, SetFile] = useState({});
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/files/file/${id}`);
        SetFile(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  },[id]);

  if (file.owner?.username)
    return (
      <Stack direction="row" alignItems="center" justifyContent="center" sx={{ padding: '0px 5px' }}>
        <Box flex={1} sx={{ paddingRight: { xs: '3px', lg: '0px' } }}>
          <a href="">
            <Avatar alt="" src={file.image} />
          </a>
        </Box>
        <Box
          flex={7}
          sx={{
            paddingLeft: '2px',
            paddingTop: ' 2px',
            color: 'rgb(2, 0, 0)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: '20rem',
          }}
        >
          <Typography variant="h6" as="overline" style={{ textTransform: 'capitalize' }}>
            {file.title}{' '}
          </Typography>
          <Stack direction="row" justifyContent="space-evenly">
            <Typography variant="subtitle1">File</Typography>
            <Typography variant="subtitle2" sx={{ paddingLeft: '0px' }}>
              ||
            </Typography>
            <Iconify icon="eva:done-all-outline" className="icon" width={20} height={20} sx={{ marginTop: '3px' }} />
            <Typography variant="body1">{file.views}</Typography>
            <Typography variant="body1" sx={{ paddingLeft: '0px' }}>
              ||
            </Typography>
            <Iconify icon="eva:heart-outline" className="icon" width={20} height={20} sx={{ marginTop: '3px' }} />
            <Typography variant="body1">{file.likes}</Typography>

            <Typography variant="body1" sx={{ paddingLeft: '0px' }}>
              ||
            </Typography>
            <Iconify
              icon="eva:cloud-download-outline"
              className="icon"
              width={20}
              height={20}
              sx={{ marginTop: '3px' }}
            />
            <Typography variant="body1">{file.downloads}</Typography>
            <Typography variant="body1" sx={{ paddingLeft: '0px' }}>
              ||
            </Typography>
            <Iconify
              icon="ph:coins-light"
              className="icon"
              width={20}
              height={20}
              sx={{ marginTop: '3px' }}
            />
            <Typography variant="body1">{file.coins}</Typography>
          </Stack>
        </Box>
      </Stack>
    );
};

export default FD;
