import React from 'react';
// ------
import { Typography, Stack, Box, Avatar } from '@mui/material';

const Filesumb = ({ file }) => {
  if (file.owner?.username)
    return (
      <Stack direction="row" alignItems="center">
        <Box sx={{ margin: '5px' }}>
          <a href="">
            {file?.type.map((type) => {
              return (
                <div key={type.code}>
                  <Avatar alt="" src={type.typelogo} />
                </div>
              );
            })}
          </a>
        </Box>
        <Box sx={{ paddingLeft: '1rem', paddingTop: '0.5rem' }}>
          <Typography variant="h6">{file?.title} </Typography>
          <Typography variant="body1">{file?.description} </Typography>
        </Box>
      </Stack>
    );
};

export default Filesumb;
