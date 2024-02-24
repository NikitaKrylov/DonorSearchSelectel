import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import Home from './pages/Home/Home.jsx';
import Account from './pages/Account/Account.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PrivateRoute } from './hoc/PrivateRoute.jsx';
import { AuthProvider } from './hoc/PrivateRoute.jsx';
import CardRequest from './pages/CardRequest/CardRequest.jsx';
import PetPageInfo from './components/PetPageInfo/PetPageInfo.jsx';
import ProfilePet from './pages/ProfilePet/ProfilePet.jsx';
import FindDonor from './pages/FindDonor/FindDonor.jsx';
import BeDonor from './pages/BeDonor/BeDonor.jsx';
import BeDonorOffersPage from './pages/BeDonor/BeDonorOffersPage.jsx';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />, // localhost:5173/ -> <Home />
    },
    {
        path: '/account', // /account
        element: (
            <PrivateRoute>
                <Account />
            </PrivateRoute>
        ),
    },
    {
        path: '/request',
        element: (
            <PrivateRoute>
                <CardRequest />
            </PrivateRoute>
        ),
    },
    {
        path: '/petpage',
        element: (
            <PrivateRoute>
                <ProfilePet />
            </PrivateRoute>
                
        ),
    },
    {
        path: '/finddonor',
        element: (
            <PrivateRoute>
                <FindDonor />
            </PrivateRoute>
                
            
        ),
    },
    {
        path: '/bedonor',
        element: (
            <PrivateRoute>
                <BeDonor />
            </PrivateRoute>
            
        ),
    },
    {
        path: '/offers',
        element: (
            <PrivateRoute>
                <BeDonorOffersPage />
            </PrivateRoute>
                
            
        ),
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={routes} />
        </AuthProvider>
    </React.StrictMode>
);
