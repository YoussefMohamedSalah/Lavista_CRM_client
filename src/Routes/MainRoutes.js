import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
import MainLayout from '../layouts/main';
import MoreLayout from '../layouts/more';

// Login && Register && 404 Pages
import Login from '../pages/Login';
import NotFound from '../pages/Page404';
import Register from '../pages/Register';

// open pages For UnSigned User
import Home from '../pages/Home';
import AboutUs from '../pages/OpenPages/AboutUs';
import MainNotifications from '../pages/catpages/MainNotifications';
import AboutLaVista from '../pages/OpenPages/AboutLaVista';

// Locked Pages
import DashboardApp from '../pages/ProtectedPages/GeneralPages/DashboardApp';
import QrCodeManagment from '../pages/ProtectedPages/QrCodeSystem/QrCodeManagment';
import FinancialsManagment from '../pages/ProtectedPages/FinancialsSystem';
import NeedsManagment from '../pages/ProtectedPages/NeedsSystem/NeedsManagment';
import PermissionsManagment from '../pages/ProtectedPages/PermissionsSystem/PermissionsManagment';

//
import User from '../pages/User';
import Tablou from '../pages/catpages/Tablou';
import Laser from '../pages/catpages/Laser';
import FileMore from '../pages/FileAndMore';
import Myprofile from '../pages/Myprofile';
import WorkersManagment from '../pages/ProtectedPages/WorkersSystem/WorkersManagment';
import Notifications from '../pages/Notification';
import Savedpage from '../pages/Savedpage';
import Myportifolio from '../pages/Myportifolio';
import Searched from '../pages/Searched';
import CreatorProfile from '../pages/CreatorPages/CreatorProfile';
import CreatorStepper from '../pages/CreatorPages/CreatorStepper';
import Wallet from '../pages/Wallet';
import CoinsIndex from '../pages/CoinsComponents/CoinsIndex';
import AllCreatorsPage from '../pages/CreatorPages/CreatorOpenPages/AllCreatorsPage';
import Test from '../Tests/Test';
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/file',
      element: <MoreLayout />,
      children: [{ path: ':id', element: <FileMore /> }],
    },

    // here i should add Scanning Page To Be Aviliable For Every Scanner
    {
      path: '/open',
      element: <MainLayout />,
      children: [
        { path: 'about_us', element: <AboutUs /> },
        { path: 'main_notifications', element: <MainNotifications /> },
        { path: 'about_la_vista', element: <AboutLaVista /> },
        { path: 'test', element: <Test /> },
      ],
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        // here i should add all internal Pages, That belongs to Owner
        { path: 'app', element: <DashboardApp /> },
        { path: 'qr_managment', element: <QrCodeManagment /> },
        { path: 'financials_managment', element: <FinancialsManagment /> },
        { path: 'needs_managment', element: <NeedsManagment /> },
        { path: 'workers_managment', element: <WorkersManagment /> },
        { path: 'permissions_managment', element: <PermissionsManagment /> },
        // --------------------------------------------
        // --------------------------------------------
        { path: 'portifolio', element: <Myportifolio /> },
        { path: 'saved', element: <Savedpage /> },
        { path: 'notifications', element: <Notifications /> },
        { path: 'profile', element: <Myprofile /> },
        { path: 'user', element: <User /> },
        { path: 'creatorprofile', element: <CreatorProfile /> },
        { path: 'creator-assign', element: <CreatorStepper /> },
        { path: 'searched/:val', element: <Searched /> },
        { path: 'wallet', element: <Wallet /> },
        { path: 'history', element: <CoinsIndex /> },
      ],
    },

    {
      path: '/Home',
      element: <MainLayout />,
      children: [
        { path: '', element: <Home /> },
        { path: 'searched/:val', element: <Searched /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/Home" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
