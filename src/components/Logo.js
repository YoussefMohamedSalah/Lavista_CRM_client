import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
 // @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import logo2 from './logo2.png'

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const theme = useTheme();




  // OR
  const logo = <Box component="img" src={logo2} sx={{ width: 190, height: 30, ...sx }} />

 

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/Home">{logo}</RouterLink>;
}
