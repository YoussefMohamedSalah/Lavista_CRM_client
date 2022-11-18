import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Label from '@mui/icons-material/Label';
import HistoryIcon from '@mui/icons-material/History';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CoinsHistory from './CoinsHistory';
import DownloadHistory from './DownloadHistory';

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

export default function CoinsIndex() {
  const [tap, setTap] = useState('payment-history');
  // -----*------*------*-------*------*------

  return (
    <>
      <Stack sx={{ flexDirection: { lg: 'row', md: 'column', xs: 'column' } }}>
        <Box flex={1}>
          <TreeView
            aria-label="payment-history"
            defaultExpanded={['3']}
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpandIcon={<ArrowRightIcon />}
            defaultEndIcon={<div style={{ width: 24 }} />}
            sx={{ height: 100, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
          >
            <StyledTreeItem
              onClick={() => setTap('payment-history')}
              nodeId="1"
              labelText="Payment History"
              labelIcon={HistoryIcon}
            />
            <StyledTreeItem
              onClick={() => setTap('download-history')}
              nodeId="3"
              labelText="Download History"
              labelIcon={CloudDownloadIcon}
            />
            {/* <StyledTreeItem nodeId="3" labelText="Trash" labelIcon={DeleteIcon}>
              <StyledTreeItem
                nodeId="5"
                labelText="Social"
                labelIcon={SupervisorAccountIcon}
                labelInfo="90"
                color="#1a73e8"
                bgColor="#e8f0fe"
              />
              <StyledTreeItem
                nodeId="6"
                labelText="Updates"
                labelIcon={InfoIcon}
                labelInfo="2,294"
                color="#e3742f"
                bgColor="#fcefe3"
              />
              <StyledTreeItem
                nodeId="7"
                labelText="Forums"
                labelIcon={ForumIcon}
                labelInfo="3,566"
                color="#a250f5"
                bgColor="#f3e8fd"
              />
              <StyledTreeItem
                nodeId="8"
                labelText="Promotions"
                labelIcon={LocalOfferIcon}
                labelInfo="733"
                color="#3c8039"
                bgColor="#e6f4ea"
              />
            </StyledTreeItem> */}
            {/* <StyledTreeItem nodeId="4" labelText="History" labelIcon={Label} /> */}
          </TreeView>
        </Box>
        {/* --------------------------------------- */}
        {tap === 'payment-history' && <CoinsHistory />}
        {tap === 'download-history' && <DownloadHistory />}
      </Stack>
    </>
  );
}
