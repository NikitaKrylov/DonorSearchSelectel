import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import Home from './pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
]);

root.render(<RouterProvider router={routes} />);

