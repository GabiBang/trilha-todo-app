import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import { Login } from './components/container/Login';
import { HelloWorld } from './components/container/HelloWorld';


const router = createBrowserRouter([
    {
        path: '/',
        element: <HelloWorld/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/test',
        element: <div>testing</div>
    }
]);

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={router}/>);
