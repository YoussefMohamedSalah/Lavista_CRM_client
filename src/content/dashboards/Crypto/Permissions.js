/* eslint-disable no-unused-vars */
import {
  Button,
  Card,
  Grid,
  Box,
  CardContent,
  Typography,
  Avatar,
  alpha,
  Tooltip,
  CardActionArea,
  styled
} from '@mui/material';
import { Notification, Placeholder, Uploader } from 'rsuite';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AddPermissionsModal from '../Permissions/AddPermissionsModal';
// import NotificationMessage from '../../../components/Notification';
import { useToaster } from 'rsuite';

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    margin: ${theme.spacing(2, 0, 1, -0.5)};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing(1)};
    padding: ${theme.spacing(0.5)};
    border-radius: 60px;
    height: ${theme.spacing(5.5)};
    width: ${theme.spacing(5.5)};
    background: ${theme.palette.mode === 'dark'
      ? theme.colors.alpha.trueWhite[30]
      : alpha(theme.colors.alpha.black[100], 0.07)
    };
  
    img {
      background: ${theme.colors.alpha.trueWhite[100]};
      padding: ${theme.spacing(0.5)};
      display: block;
      border-radius: inherit;
      height: ${theme.spacing(4.5)};
      width: ${theme.spacing(4.5)};
    }
`
);

const AvatarAddWrapper = styled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[10]};
        color: ${theme.colors.primary.main};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
`
);

const CardAddAction = styled(Card)(
  ({ theme }) => `
        border: ${theme.colors.primary.main} dashed 1px;
        height: 100%;
        color: ${theme.colors.primary.main};
        transition: ${theme.transitions.create(['all'])};
        
        .MuiCardActionArea-root {
          height: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
        }
        
        .MuiTouchRipple-root {
          opacity: .2;
        }
        
        &:hover {
          border-color: ${theme.colors.alpha.black[70]};
        }
`
);

function Permissions() {
  // for Notification Center
  const [type, setType] = useState('success');
  const toaster = useToaster();
  // ------------------
  const [show, setShow] = useState(false);
  // -------------------------------------
  const placement = 'bottomStart';
  const notificationMessage = (
    <Notification type={type} header={type} closable>
      <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
      <hr />
      <Uploader action="#" />
    </Notification>
  );
  const handleClose = () => setShow(false);
  const handleCloseAndSuccess = () => {
    setShow(false);
    toaster.push(notificationMessage, { placement });
    getWorkersWithPermissions()
  };
  const handleShow = () => setShow(true);
  // ------------------------------------------
  const [workersWithPermissinons, setWorkersWithPermissions] = useState([]);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${userInfo?.access}`
    }
  };

  const getWorkersWithPermissions = async () => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_API_KEY}/api/1/get_workers`,
        config
      );
      const workersArray = data.data.workers;
      const newWithPermissionArray = workersArray?.filter(function (el) {
        return el.has_permission === true;
      });
      setWorkersWithPermissions(newWithPermissionArray);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getWorkersWithPermissions()
  }, [])

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 3
        }}
      >
        <Typography variant="h3">Authorized Workers</Typography>
        <Button
          size="small"
          variant="outlined"
          onClick={() => handleShow()}
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          Add new permission
        </Button>
      </Box>
      <Grid container spacing={3}>
        {workersWithPermissinons?.map((worker, index) => {
          return (
            <Grid xs={12} sm={6} md={4} item key={index}>
              <Card
                sx={{
                  px: 1
                }}
              >
                <CardContent>
                  <AvatarWrapper>
                    <img
                      alt="BTC"
                      src="/static/images/placeholders/logo/bitcoin.png"
                    />
                  </AvatarWrapper>
                  <Typography variant="h5" noWrap>
                    {worker.first_name} {worker.last_name}
                  </Typography>
                  <Typography variant="subtitle1" noWrap>
                    {worker.phone_number}
                  </Typography>
                  <Box
                    sx={{
                      pt: 3
                    }}
                  >
                    <Typography variant="h3" gutterBottom noWrap>
                      {worker.working_section}
                    </Typography>
                    <Typography variant="subtitle2" noWrap>
                      {worker.permission_type}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
        <Grid xs={12} sm={6} md={3} item>
          <Tooltip arrow title="Click to add a new Worker">
            <CardAddAction>
              <CardActionArea
                onClick={() => handleShow()}
                sx={{
                  px: 1
                }}
              >
                <CardContent>
                  <AvatarAddWrapper>
                    <AddTwoToneIcon fontSize="large" />
                  </AvatarAddWrapper>
                </CardContent>
              </CardActionArea>
            </CardAddAction>
          </Tooltip>
        </Grid>
      </Grid>
      <AddPermissionsModal
        show={show}
        handleClose={handleClose}
        handleCloseAndSuccess={handleCloseAndSuccess}
      />
    </>
  );
}

export default Permissions;
