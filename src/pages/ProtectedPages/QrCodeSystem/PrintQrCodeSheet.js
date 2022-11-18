import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Box, Card, CardMedia, Typography, Button, Stack, Chip } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';

const PrintQrCodeSheet = ({ MainSection, SheetArray }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Stack sx={{ padding: 1 }} gap={1}>
      <Button
        sx={{ alignSelf: 'center', width: '6rem', height: '2.5rem' }}
        variant="contained"
        onClick={handlePrint}
        startIcon={<PrintIcon />}
      >
        Print
      </Button>

      <Box ref={componentRef} className="">
        <Box class=" d-flex justify-content-center align-items-center pt-1">
          <Typography variant="h3">{MainSection}</Typography>
        </Box>
        <hr />
        <Stack
          className="float__infoss"
          direction="row"
          justifyContent="start"
          alignItems="start"
          sx={{ flexWrap: 'wrap' }}
        >
          {SheetArray?.map((obj, index) => (
            <Card sx={{ display: 'flex', padding: '0.5rem 1rem' }} key={obj.id}>
              <CardMedia component="img" sx={{ width: 160, height: 160 }} src={obj.Url} alt={obj.Title} />
            </Card>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};
export default PrintQrCodeSheet;
