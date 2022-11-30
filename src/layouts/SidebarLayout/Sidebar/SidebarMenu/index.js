/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';

import {
  ListSubheader,
  alpha,
  Box,
  List,
  styled,
  Button,
  ListItem
} from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import { SidebarContext } from 'src/contexts/SidebarContext';

import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
// import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
// import BeachAccessTwoToneIcon from '@mui/icons-material/BeachAccessTwoTone';
// import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
// import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
// import HowToVoteTwoToneIcon from '@mui/icons-material/HowToVoteTwoTone';
// import LocalPharmacyTwoToneIcon from '@mui/icons-material/LocalPharmacyTwoTone';
// import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';
// import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
// import TrafficTwoToneIcon from '@mui/icons-material/TrafficTwoTone';
// import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';
// import ChromeReaderModeTwoToneIcon from '@mui/icons-material/ChromeReaderModeTwoTone';
// import WorkspacePremiumTwoToneIcon from '@mui/icons-material/WorkspacePremiumTwoTone';
// import CameraFrontTwoToneIcon from '@mui/icons-material/CameraFrontTwoTone';
// import DisplaySettingsTwoToneIcon from '@mui/icons-material/DisplaySettingsTwoTone';
import { useSelector } from 'react-redux';

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.colors.alpha.trueWhite[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {

      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }
    
        .MuiButton-root {
          display: flex;
          color: ${theme.colors.alpha.trueWhite[70]};
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 3)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.alpha.trueWhite[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }
          
          .MuiButton-endIcon {
            color: ${theme.colors.alpha.trueWhite[50]};
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active,
          &:hover {
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.06)};
            color: ${theme.colors.alpha.trueWhite[100]};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.trueWhite[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};

              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.colors.alpha.trueWhite[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
    'transform',
    'opacity'
  ])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);

function SidebarMenu() {
  // eslint-disable-next-line no-unused-vars
  const [superManager, setSuperManager] = useState(false)
  const [villageManager, setVillageManager] = useState(false)
  const [qrCodeManager, setQrCodeManager] = useState(false)
  const [ownersManager, setOwnersManager] = useState(false)
  const [workersManager, setWorkersManager] = useState(false)
  const [gateManager, setGateManager] = useState(false)

  // -----*-----*-----*-----*-----*-----*-----*-----*-----
  const { closeSidebar } = useContext(SidebarContext);
  // -----*-----*-----*-----*-----*-----*-----*-----*-----
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  // -----*-----*-----*-----*-----*-----*-----*-----*-----
  // conditional Rendering to determand navConfig
  useEffect(() => {
    if (userInfo?.user_type === 'super_manager') {
      setSuperManager(true)
    } else if (userInfo?.user_type === 'village_manager') {
      setVillageManager(true)
    } else if (userInfo?.user_type === 'qr_code_manager') {
      setQrCodeManager(true)
    } else if (userInfo?.user_type === 'owners_manager') {
      setOwnersManager(true)
    } else if (userInfo?.user_type === 'workers_manager') {
      setWorkersManager(true)
    } else if (userInfo?.user_type === 'gate_manager') {
      setGateManager(true)
    } else {
      console.log('userType Undefined')
    }
  }, [])

  return (
    <>
      {userInfo ? (
        <MenuWrapper>
          <List component="div">
            <SubMenuWrapper>
              <List component="div">
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    onClick={closeSidebar}
                    to="/overview"
                    startIcon={<DesignServicesTwoToneIcon />}
                  >
                    Overview
                  </Button>
                </ListItem>
                {villageManager && (
                  <ListItem component="div">
                    <Button
                      disableRipple
                      component={RouterLink}
                      onClick={closeSidebar}
                      to="/dashboard/messenger"
                      startIcon={<MmsTwoToneIcon />}
                    >
                      Messenger
                    </Button>
                  </ListItem>
                )}
              </List>
            </SubMenuWrapper>
          </List>

          {/* if Village Manager */}
          {villageManager && (
            <List
              component="div"
              subheader={
                <ListSubheader component="div" disableSticky>
                  Dashboards
                </ListSubheader>
              }
            >
              <SubMenuWrapper>
                <List component="div">
                  <ListItem component="div">
                    <Button
                      disableRipple
                      component={RouterLink}
                      onClick={closeSidebar}
                      to="/dashboard/workers"
                      startIcon={<AccountCircleTwoToneIcon />}
                    >
                      Workers
                    </Button>
                  </ListItem>
                  <ListItem component="div">
                    <Button
                      disableRipple
                      component={RouterLink}
                      onClick={closeSidebar}
                      to="/dashboard/owners"
                      startIcon={<AccountCircleTwoToneIcon />}
                    >
                      Owners
                    </Button>
                  </ListItem>
                  <ListItem component="div">
                    <Button
                      disableRipple
                      component={RouterLink}
                      onClick={closeSidebar}
                      to="/dashboard/resources"
                      startIcon={<AccountCircleTwoToneIcon />}
                    >
                      Resources
                    </Button>
                  </ListItem>
                  <ListItem component="div">
                    <Button
                      disableRipple
                      component={RouterLink}
                      onClick={closeSidebar}
                      to="/dashboard/needs"
                      startIcon={<AccountCircleTwoToneIcon />}
                    >
                      Needs
                    </Button>
                  </ListItem>
                </List>
              </SubMenuWrapper>
            </List>
          )}



          {/* if Owners Manager */}

          {ownersManager && (
            <List
              component="div"
              subheader={
                <ListSubheader component="div" disableSticky>
                  Dashboards
                </ListSubheader>
              }
            >
              <SubMenuWrapper>
                <List component="div">
                  <ListItem component="div">
                    <Button
                      disableRipple
                      component={RouterLink}
                      onClick={closeSidebar}
                      to="/dashboard/owners"
                      startIcon={<AccountCircleTwoToneIcon />}
                    >
                      Owners
                    </Button>
                  </ListItem>
                </List>
              </SubMenuWrapper>
            </List>
          )}
          {/* if Workers Manager */}
          {workersManager && (
            <List
              component="div"
              subheader={
                <ListSubheader component="div" disableSticky>
                  Dashboards
                </ListSubheader>
              }
            >
              <SubMenuWrapper>
                <List component="div">
                  <ListItem component="div">
                    <Button
                      disableRipple
                      component={RouterLink}
                      onClick={closeSidebar}
                      to="/dashboard/workers"
                      startIcon={<AccountCircleTwoToneIcon />}
                    >
                      Workers
                    </Button>
                  </ListItem>
                </List>
              </SubMenuWrapper>
            </List>
          )}
          {/* if Gate Manager */}
          {gateManager && (
            <List
              component="div"
              subheader={
                <ListSubheader component="div" disableSticky>
                  Managment
                </ListSubheader>
              }
            >
              <SubMenuWrapper>
                <List component="div">
                  <ListItem component="div">
                    <Button
                      disableRipple
                      component={RouterLink}
                      onClick={closeSidebar}
                      to="/management/transactions"
                      startIcon={<TableChartTwoToneIcon />}
                    >
                      Gate Managment
                    </Button>
                  </ListItem>
                </List>
              </SubMenuWrapper>
            </List>
          )}
          {/* if Village Manager */}
          {villageManager && (
            <List
              component="div"
              subheader={
                <ListSubheader component="div" disableSticky>
                  Managment
                </ListSubheader>
              }
            >
              <SubMenuWrapper>
                <List component="div">
                  <ListItem component="div">
                    <Button
                      disableRipple
                      component={RouterLink}
                      onClick={closeSidebar}
                      to="/management/transactions"
                      startIcon={<TableChartTwoToneIcon />}
                    >
                      Maintenance Needs
                    </Button>
                  </ListItem>
                </List>
              </SubMenuWrapper>
            </List>
          )}
          {workersManager && (
            <List
              component="div"
              subheader={
                <ListSubheader component="div" disableSticky>
                  Managment
                </ListSubheader>
              }
            >
              <SubMenuWrapper>
                <List component="div">
                  <ListItem component="div">
                    <Button
                      disableRipple
                      component={RouterLink}
                      onClick={closeSidebar}
                      to="/management/profile/detail"
                      startIcon={<AccountCircleTwoToneIcon />}
                    >
                      Workers
                    </Button>
                  </ListItem>
                </List>
              </SubMenuWrapper>
            </List>
          )}
          {/* if Village Manager */}
          {villageManager && (
            <>
              {/* <List
                component="div"
                subheader={
                  <ListSubheader component="div" disableSticky>
                    Accounts
                  </ListSubheader>
                }
              >
                <SubMenuWrapper>
                  <List component="div">
                    <ListItem component="div">
                      <Button
                        disableRipple
                        component={RouterLink}
                        onClick={closeSidebar}
                        to="/management/profile/details"
                        startIcon={<AccountCircleTwoToneIcon />}
                      >
                        User Profile
                      </Button>
                    </ListItem>
                    <ListItem component="div">
                      <Button
                        disableRipple
                        component={RouterLink}
                        onClick={closeSidebar}
                        to="/management/profile/settings"
                        startIcon={<DisplaySettingsTwoToneIcon />}
                      >
                        Manage Accounts
                      </Button>
                    </ListItem>
                  </List>
                </SubMenuWrapper>
              </List> */}
            </>
          )}
          {/* if Village Manager Show Add Permission Taps */}
          {villageManager && (
            <List
              component="div"
              subheader={
                <ListSubheader component="div" disableSticky>
                  Fast Access
                </ListSubheader>
              }
            >
              <SubMenuWrapper>
                <List component="div">
                  <ListItem component="div">
                    <Button
                      disableRipple
                      component={RouterLink}
                      onClick={closeSidebar}
                      to="/dashboard/permissions"
                      startIcon={<MmsTwoToneIcon />}
                    >
                      Add Permission
                    </Button>
                  </ListItem>
                </List>
              </SubMenuWrapper>
            </List>
          )}
          {/* if  Gate Manager */}
          {gateManager && (
            <>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/buttons"
                  startIcon={<BallotTwoToneIcon />}
                >
                  Check Owner
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/buttons"
                  startIcon={<BallotTwoToneIcon />}
                >
                  Add Visitor
                </Button>
              </ListItem>
            </>
          )}
          {/* if Qr Code Manager */}
          {qrCodeManager && (
            <List
              component="div"
              subheader={
                <ListSubheader component="div" disableSticky>
                  Fast Access
                </ListSubheader>
              }
            >
              <SubMenuWrapper>
                <List component="div">
                  <ListItem component="div">
                    <Button
                      disableRipple
                      component={RouterLink}
                      onClick={closeSidebar}
                      to="/dashboard/qr_code"
                      startIcon={<BallotTwoToneIcon />}
                    >
                      QR-Code System
                    </Button>
                  </ListItem>
                </List>
              </SubMenuWrapper>
            </List>
          )}

          {/* if gate Manager Show Add check owners and add visitors */}

          {gateManager && (
            <List
              component="div"
              subheader={
                <ListSubheader component="div" disableSticky>
                  Fast Access
                </ListSubheader>
              }
            >
              <SubMenuWrapper>
                <List component="div">

                  <>
                    <ListItem component="div">
                      <Button
                        disableRipple
                        component={RouterLink}
                        onClick={closeSidebar}
                        to="/components/buttons"
                        startIcon={<BallotTwoToneIcon />}
                      >
                        Check Owner
                      </Button>
                    </ListItem>
                    <ListItem component="div">
                      <Button
                        disableRipple
                        component={RouterLink}
                        onClick={closeSidebar}
                        to="/dashboard/qr_code"
                        startIcon={<BallotTwoToneIcon />}
                      >
                        Add Visitor
                      </Button>
                    </ListItem>
                  </>
                </List>
              </SubMenuWrapper>
            </List>
          )}
        </MenuWrapper >
      ) : null
      }
    </>
  );
}

export default SidebarMenu;
