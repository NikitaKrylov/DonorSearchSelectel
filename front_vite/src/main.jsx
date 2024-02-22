import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import Home from './pages/Home/Home.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

/* const root = ReactDOM.createRoot(document.getElementById('root'));

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
]);
 */
root.render(<RouterProvider router={routes} />);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>,
  )

