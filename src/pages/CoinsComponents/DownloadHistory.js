/* eslint-disable arrow-body-style */
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
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';

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
export default function DownloadHistory() {
  const [expanded, setExpanded] = React.useState('panel1');
  const [tap, setTap] = React.useState('payment-history');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  // ------------------------------------------------------------------
  // -----*------*------*-------*------*------
  const [downloadHistory, setDownloadHistory] = useState([]);
  console.log(downloadHistory);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${userInfo?.access}`,
    },
  };

  const getFiles = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/api/v1/files/downloads-list/`, config);
      setDownloadHistory(response.data.results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box flex={2}>
        {downloadHistory.map((downloadItem, index) => {
          return (
            <Accordion key={index} onChange={handleChange('panel1')}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>
                  Download Num {index + 1}
                  <span style={{ position: 'absolute', right: '0', paddingRight: '10px' }}>
                    {downloadItem.file.date} <CalendarMonthIcon />
                  </span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack direction="row">
                  <Box flex={4}>
                    <Typography>
                      File Price : <strong> {downloadItem.file.coins}</strong>{' '}
                    </Typography>
                    <Typography>File Title : {downloadItem.file.title}</Typography>
                    <Typography>File Discription : {downloadItem.file.description}</Typography>
                    <Stack direction="row" alignItems="center">
                      <Typography>File Owner : {downloadItem.file.owner.username}</Typography>
                    </Stack>
                  </Box>
                  <Box flex={1}>
                    <img src={downloadItem.file.image} alt="" />
                    <Avatar
                      src={downloadItem.file.owner.profileimage}
                      alt=""
                      style={{
                        marginLeft: '0px',
                        marginTop: '0px',
                        position: 'absolute',
                        top: '49px',
                        right: '0px',
                        margin: '2px 2px',
                      }}
                    />
                  </Box>
                </Stack>
              </AccordionDetails>
              <Stack direction="row" justifyContent="space-evenly" sx={{ paddingBottom: '1rem' }}>
                <Button>
                  <ImageSearchIcon /> Show File
                </Button>
              </Stack>
            </Accordion>
          );
        })}
      </Box>
    </>
  );
}
