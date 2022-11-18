import React from 'react';
import Filesumb from './Filesumb';

const FileDetail = ({file}) => {

  return (
    <>
      <img src={file.image} style={{ width: '100%' }} alt={file.title} />
      <Filesumb file={file} />
      <br />
    </>
  );
};

export default FileDetail;
