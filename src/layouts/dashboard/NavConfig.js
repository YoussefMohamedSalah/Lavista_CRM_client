// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;
// state:'disabled' for disabled link
// state:'block' for visable & clickable link

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
    title: 'Financials Managment',
    path: '/dashboard/financials_managment',
    icon: getIcon('flat-color-icons:calculator'),
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
  },
  // {
  //   title: 'My Profile',
  //   path: '/dashboard/profile',
  //   icon: getIcon('eva:file-text-outline'),
  //   state: 'block',
  // },
  //  {
  //   title: 'Downloads',
  //   path: '/dashboard/saved',
  //   icon: getIcon('eva:star-outline'),
  //   state: 'block',
  // },

  // {
  //   title: 'Notifications',
  //   path: '/dashboard/notifications',
  //   icon: getIcon('eva:bell-outline'),
  //   state: 'disabled',
  // },
  // {
  //   title: 'My Portfolio',
  //   path: '/dashboard/portifolio',
  //   icon: getIcon('eva:flag-outline'),
  //   state: 'disabled',
  // },

  /* {
    title: 'user',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill'),
  }, */
];

export default navConfig;
