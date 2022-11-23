// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;
// state:'disabled' for disabled link
// state:'block' for visable & clickable link

// const navConfig = [
//   // all open pages for Unsigned User
//   {
//     title: 'Home Page',
//     path: '/home',
//     icon: getIcon('eva:home-outline'),
//     state: 'block',
//   },
//   {
//     title: 'Notifications',
//     path: '/open/main_notifications',
//     icon: getIcon('ant-design:notification-twotone'),
//     state: 'block',
//   },
//   {
//     title: 'About La Vista',
//     path: '/open/about_la_vista',
//     icon: getIcon('ic:sharp-roundabout-right'),
//     state: 'block',
//   },
//   {
//     title: 'About Us',
//     path: '/open/about_us',
//     icon: getIcon('ic:sharp-roundabout-right'),
//     state: 'block',
//   },
// ];

const navConfig = [
  {
    title: 'Main Wall',
    path: '/dashboard/app',
    icon: getIcon('eva:activity-outline'),
    state: 'block',
  },
  {
    // mentanace === QrCode Managment $
    title: 'QrCode Managment',
    path: '/dashboard/qr_managment',
    icon: getIcon('bi:qr-code'),
    state: 'block',
  },
  {
    // demand-and-needs === Needs Managment $
    title: 'Needs Managment',
    path: '/dashboard/needs_managment',
    icon: getIcon('grommet-icons:resources'),
    state: 'block',
  },
  {
    // mentanace-and-accounts === Financials Managment $
    title: 'Owners Managment',
    path: '/dashboard/owners_managment',
    icon: getIcon('material-symbols:location-home'),
    state: 'block',
  },
  {
    // Liked === Workers Managment $
    title: 'Workers Managment',
    path: '/dashboard/workers_managment',
    icon: getIcon('eva:people-outline'),
    state: 'block',
  },
  {
    // mybord === Permissions Managment $
    title: 'Permissions Managment',
    path: '/dashboard/permissions_managment',
    icon: getIcon('eva:settings-2-outline'),
    state: 'block',
  }
];

export default navConfig;
