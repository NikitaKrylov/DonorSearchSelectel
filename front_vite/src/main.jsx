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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={routes} />
        </AuthProvider>
    </React.StrictMode>
);
