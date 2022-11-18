import React from 'react';
import ImageUploading from 'react-images-uploading';
import { Stack, Box, Container, Typography } from '@mui/material';
import CreatorFileUploadForm from './CreatorFileUploadForm';

export default function CreatorFilesUpload() {
  const [images, setImages] = React.useState([]);
  console.log(images);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <Container className="App" sx={{ width: '100%', minHeight: '68vh' }}>
      <ImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url">
        {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
          // write your building UI
          <Stack
            direction="column"
            alignItems="center"
            sx={{ width: '100%', height: '100%', flexWrap: 'wrap' }}
            className="upload__image-wrapper"
            gap={5}
          >
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{
                background: '#e8eef7',
                borderRadius: '25px',
                height: '30vh',
                width:'100%'
              }}
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </Stack>
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}

            {/* -------------------------------- */}
            <Stack direction="row" justifyContent="space-between" sx={{flexWrap:'wrap',width: '100%'}}>
              <Stack >
                <CreatorFileUploadForm name={'name'} Options={[1, 2, 3]} />
                <CreatorFileUploadForm name={'name'} Options={[1, 2, 3]} />
                <CreatorFileUploadForm name={'name'} Options={[1, 2, 3]} />
              </Stack>
              <Stack direction="row" justifyContent="end" alignItems="center" flex={3}>
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <Box component="img" src={image.data_url} alt="" style={{ maxWidth: '10rem' }} />
                    <div className="image-item__btn-wrapper">
                      <button onClick={() => onImageUpdate(index)}>Update</button>
                      <button onClick={() => onImageRemove(index)}>Remove</button>
                    </div>
                  </div>
                ))}
              </Stack>
            </Stack>
          </Stack>
        )}
      </ImageUploading>
    </Container>
  );
}
