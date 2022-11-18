import React from 'react';

import FD from './FOD/FD';
import OD from './FOD/OD';
import Page from '../Page';

function FODetails({file}) {
  return (
      <Page title="FODetails">
        <FD />
        <OD file={file} />
      </Page>
  );
}

export default FODetails;
