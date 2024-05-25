import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Quiz from './Quiz';
import Profile from './Profile';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/Quiz',
        element: <Quiz />,
    },
    {
        path: '/Profile',
        element: <Profile />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);


