import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'rsuite';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Box, Stack } from '@mui/material';




const TransactionsHistoryModal = ({ open, handleClose }) => {
    const [expanded, setExpanded] = useState(false);
    const [dataTransactions, setDataTransactions] = useState([])

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    // /api/maintenance/5f73cf37-42e3-454e-80f0-bfd08febc994/get_transactions
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const config = {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${userInfo?.access}`,
        },
    };
    // -----*-----*------*------Get Category Data*-----*-----*-----*-----*-----

    const getAllTransactions = async () => {
        try {
            const data = await axios.get(`${process.env.REACT_APP_API_KEY}/api/maintenance/${userInfo?.village_Id}/get_transactions`, config);
            setDataTransactions(data.data.maintenanceTransactions)
        } catch (err) {
            console.error(err);
        }
    };
    // -----*-----*------*------*-----*-----*-----*-----*-----*-----

    useEffect(() => {
        getAllTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // -----*-----*------*------*-----*-----*-----*-----*-----*-----

    console.log(dataTransactions)
    return (
        <>
            <Modal overflow={true} open={open} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>Maintenance Fees Transactions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <Placeholder.Paragraph rows={80} /> */}
                    {/* ----------------------------------------- */}
                    {dataTransactions.map((transaction) => {
                        return (
                            <Accordion key={transaction.id} expanded={expanded === transaction.id} onChange={handleChange(transaction.id)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        {transaction.owner_name}
                                    </Typography>
                                    <Typography >{transaction.amount}&nbsp; </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>-&nbsp;{transaction.worker_name}</Typography>
                                    <Typography sx={{ paddingLeft: '1rem' }}>
                                        {transaction.created_at.split('T')[0]}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Stack direction='row' justifyContent='space-between'>
                                        <Typography>
                                            Before Transaction : {transaction.maintenance_before_transaction}
                                        </Typography>
                                        <Typography>
                                            Transaction Amount : {transaction.amount}
                                        </Typography>
                                    </Stack>
                                    <Stack direction='column' pt={1}>

                                        <Typography sx={{ alignSelf: 'center' }}>
                                            After Transaction :  {transaction.maintenance_after_transaction}
                                        </Typography>

                                        <Box pt={1}>
                                            <Typography>
                                                Worker Responsble : {transaction.worker_name}
                                            </Typography>

                                            <Typography>
                                                Payment Method : {transaction.type}
                                            </Typography>
                                        </Box>
                                    </Stack>


                                </AccordionDetails>
                            </Accordion>
                        )
                    })}
                    {/* ----------------------------------------- */}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} appearance="primary">
                        Ok
                    </Button>
                    <Button onClick={handleClose} appearance="subtle">
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default TransactionsHistoryModal