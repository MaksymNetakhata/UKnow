import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './App';
import Quiz from './Quiz';
import Profile from './Profile';
import Tests from "./Tests.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/Quiz',
        element: <Quiz />,
    },
    {
        path: '/Profile',
        element: <Profile />,
    },
    {
        path: '/Tests',
        element: <Tests />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);


