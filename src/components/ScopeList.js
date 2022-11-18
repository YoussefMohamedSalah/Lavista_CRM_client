/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { Stack, Typography, Box, Button, Modal } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => console.log('totally custom!'));

  return (
    <button
      type="button"
      style={{ width: '100%', border: 'none', backgroundColor: 'transparent' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const ScopeList = () => {
  const [checked, setChecked] = React.useState();
  const InterestsList = [
    {
      id: '1',
      name: 'Books 🏡',
      checked: true,
    },
    {
      id: '2',
      name: 'Home Decoration 🏡',
      checked: false,
    },
    {
      id: '3',
      name: ' Banners 🎉',
      checked: false,
    },
    {
      id: '4',
      name: 'Inspiration 🌱',
      checked: true,
    },
    {
      id: '5',
      name: 'Nature 🌱',
      checked: true,
    },
    {
      id: '6',
      name: 'Shops 🌱',
      checked: false,
    },
    {
      id: '7',
      name: 'Nature 🐾',
      checked: true,
    },
    {
      id: '8',
      name: 'Shops 💐',
      checked: false,
    },
  ];
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0" >
            <Typography variant="h6">Interests Scope 🍳</Typography>
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              className="sssss"
              sx={{ width: { lg: '75%', md: '100%', xs: '100%' }, margin: 'auto' }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h5">What Is The Main 5 Topics That Interists You ?</Typography>
                <p className="text-muted">It helps to get what you want fast ⚡</p>
              </Box>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                // spacing={2}
                sx={{ flexWrap: 'wrap' }}
              >
                {InterestsList.map((Interist) => (
                  <Button
                    onClick={() => setChecked(!checked)}
                    key={Interist.id}
                    sx={{ width: '12rem!important', marginLeft: '0!important', margin: '5px' }}
                    variant={Interist.checked ? 'outlined' : 'contained'}
                  >
                    {Interist.name}
                  </Button>
                ))}
              </Stack>
              <Stack
                direction="row"
                spacing={1}
                gap={1}
                alignItems="center"
                justifyContent="center"
                sx={{ flexWrap: 'nowrap', paddingTop: '1.5rem' }}
              >
                <Button sx={{ padding: '2px 5px' }} variant="outlined" color="error" endIcon={<CloseIcon />}>
                  Cancel
                </Button>
                <Button sx={{ padding: '4px 7px' }} variant="outlined" color="success" endIcon={<CheckIcon />}>
                  Applay
                </Button>
              </Stack>
            </Stack>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};
export default ScopeList;
