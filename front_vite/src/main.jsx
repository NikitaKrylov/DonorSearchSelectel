import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import Home from './pages/Home/Home.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={routes} />
    </React.StrictMode>,
  )
