// context
import React, { useState } from 'react';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import { FilesContext } from './Contexts/filesContext';
// routes
import Router from './Routes/MainRoutes';
// theme
import MainThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
// CDN's
import 'bootstrap/dist/css/bootstrap.min.css';

// ----------------------------------------------------------------------

export default function App() {
  // the value that will be given to the context
  const [searchInput, setSearchInput] = useState('');
  // ------------------------------------------------


  return (
    <FilesContext.Provider value={{ searchInput, setSearchInput }}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
          <MainThemeProvider>
            <ScrollToTop />
            <Router />
          </MainThemeProvider>
      </StyledEngineProvider>
    </FilesContext.Provider>
  );
}
