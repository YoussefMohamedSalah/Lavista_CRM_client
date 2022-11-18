import React, { Component } from 'react';
import { Stack, Box, Container } from '@mui/material';
import { FiUploadCloud } from 'react-icons/fi';
import UploadImageForm from './UploadImageForm';

class UploadImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };

    // if we are using arrow function binding is not required
    //  this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img),
      });
    }
  };

  render() {
    return (
      <Container>
        <Stack
          // direction="row"
          p={2}
          justifyContent="center"
          alignItems="center"
          sx={{ background: '#e8eef7', borderRadius: '25px', flexDirection: { xs: 'column', md: 'row', lg: 'row' } }}
        >
          <Box flex={7} p={2} sx={{ height: '60vh', borderRadius: '25px', border: '1px dashed', width: '100%' }}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ height: { xs: '30vh', md: '100%', lg: '100%' }, position: 'relative' }}
            >
              {this.state.image ? null : <FiUploadCloud style={{ color: '#b4e2e7', width: '3rem', height: '3rem' }} />}
              {this.state.image ? null : 'DRAG FILE HERE'}
              <Box
                component="img"
                src={this.state.image}
                sx={{
                  maxWidth: { xs: '95%!important', md: '425px!important', lg: '425px!important' },
                  position: 'absolute',
                }}
              />
              <Box
                component="input"
                type="file"
                onChange={this.onImageChange}
                sx={{ width: '100%', height: '100%', position: 'absolute' }}
              />
            </Stack>
          </Box>
          <Box flex={2} m={1} sx={{ alignSelf: 'baseline!important', height: '57vh' }}>
            <UploadImageForm />
          </Box>
        </Stack>
      </Container>
    );
  }
}
export default UploadImage;
