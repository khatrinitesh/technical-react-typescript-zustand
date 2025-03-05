import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../layout/Mainlayout';
import Home from '../pages/Home';
import Service from './../pages/Service';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ServiceDetail from '../pages/ServiceDetail';
import Otp from '../pages/Otp';

const AppRoutes = createBrowserRouter ([
    {
     path:"/",
     element:<Mainlayout/>,
     children:[
        {
            index:true,
            element:<Home/>
        },  
        {
            path:"/service",
            element:<Service/>
        },
        {
            path:"/service/:id",
            element:<ServiceDetail/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/otp",
            element:<Otp/>
        },
        {
            path:"</register>",
            element:<Register/>
        },
     ]
    }
])

export default AppRoutes;
