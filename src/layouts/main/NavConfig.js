// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;
// state:'disabled' for disabled link
// state:'block' for visable & clickable link

const navConfig = [
  // all open pages for Unsigned User
  {
    title: 'Home Page',
    path: '/home',
    icon: getIcon('eva:home-outline'),
    state: 'block',
  },
  {
    title: 'Notifications',
    path: '/open/main_notifications',
    icon: getIcon('ant-design:notification-twotone'),
    state: 'block',
  },
  {
    title: 'About La Vista',
    path: '/open/about_la_vista',
    icon: getIcon('ic:sharp-roundabout-right'),
    state: 'block',
  },
  {
    title: 'About Us',
    path: '/open/about_us',
    icon: getIcon('ic:sharp-roundabout-right'),
    state: 'block',
  },
];

export default navConfig;
