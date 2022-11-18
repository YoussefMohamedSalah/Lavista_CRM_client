
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ReportIcon from '@mui/icons-material/Report';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { fDate } from '../../utils/formatTime';

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '&.Mui-expanded': {
      fontWeight: theme.typography.fontWeightRegular,
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: 'var(--tree-view-color)',
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: 'inherit',
      color: 'inherit',
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));

function StyledTreeItem(props) {
  const { bgColor, color, labelIcon: LabelIcon, labelInfo, labelText, ...other } = props;

  return (
    <StyledTreeItemRoot
      label={
        <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
          <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
          <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </Box>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
export default function CoinsHistory() {
  const [expanded, setExpanded] = React.useState('panel1');
  const [tap, setTap] = React.useState('payment-history');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // ------------------------------------------------------------------
  // -----*------*------*-------*------*------
  const [transacionsHistory, setTransactionsHistory] = useState([]);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${userInfo?.access}`,
    },
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/accounts/deposit-list/`, config);
        console.log(data.results);
        setTransactionsHistory(data.results);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  return (
    <>
        <Box flex={2}>
          {transacionsHistory.map((historyItem, index) => {
            return (
              <Accordion key={index} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>
                    Payment Num {index + 1}
                    <span style={{ position: 'absolute', right: '0', paddingRight: '10px' }}>
                      {fDate(historyItem.order_date)} <CalendarMonthIcon />
                    </span>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Order id : {historyItem.merchant_order_id}</Typography>
                  <Typography>
                    Status :
                    {historyItem.status === 'PENDING' ? (
                      <strong>
                        <span style={{ color: '#cd3838' }}> {historyItem.status}</span>
                      </strong>
                    ) : (
                      <strong>
                        <span style={{ color: 'green' }}> {historyItem.status}</span>
                      </strong>
                    )}
                  </Typography>
                  <Typography>
                    Payment Value :{' '}
                    <strong>
                      {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'Usd' }).format(
                        historyItem.amount
                      )}
                    </strong>
                    <br />
                    Coins : <strong>{historyItem.coins}</strong> Coin
                    <br />
                    Date : <strong>{fDate(historyItem.order_date)}</strong>
                  </Typography>
                  <Stack direction="row" justifyContent="space-evenly">
                    <Button>
                      <ReportIcon /> Report A Problem{' '}
                    </Button>
                    <Button>Re-Charge</Button>
                  </Stack>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
    </>
  );
}




