import { useState, useRef } from 'react';

import {
    Box,
    Menu,
    IconButton,
    Button,
    Typography
} from '@mui/material';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';


function BulkActions({ handleShow }) {
    const [onMenuOpen, menuOpen] = useState(false);
    const moreRef = useRef(null);

    const openMenu = () => {
        menuOpen(true);
    };



    return (
        <>
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box display="flex" alignItems="center">
                    <Typography variant="h5" color="text.secondary">
                        Bulk actions: &nbsp;&nbsp;
                    </Typography>
                    <Button
                        onClick={handleShow}
                        sx={{ mt: { xs: 1, md: 0 } }}
                        variant="contained"
                        startIcon={<AddTwoToneIcon fontSize="small" />}
                    >
                        Pay Now
                    </Button>
                </Box>
                <IconButton
                    color="primary"
                    onClick={openMenu}
                    ref={moreRef}
                    sx={{ ml: 2, p: 1 }}
                >
                    <MoreVertTwoToneIcon />
                </IconButton>
            </Box>
        </>
    );
}

export default BulkActions;
