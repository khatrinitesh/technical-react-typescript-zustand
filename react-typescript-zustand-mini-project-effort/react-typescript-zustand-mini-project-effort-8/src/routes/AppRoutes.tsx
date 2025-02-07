import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Otp from '../pages/Otp';
import Service from './../pages/Service';
import DashboardLayout from '../admin/layout/DashboardLayout';
import Admin from '../admin/pages/Admin';
import Dashboard from '../admin/pages/Dashboard';
import DetailedReport from '../admin/pages/DetailedReport';

const AppRoutes = () => {
  return createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Login/>
            },
            {
                path:"register",
                element:<Register/>
            },
            {
                path:"/",
                element:<Home/>
            },
            
            
            
            {
                path:"otp",
                element:<Otp/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"service",
                element:<Service/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"*",
                element:<Navigate to="/"/>
            },
        ]
    },
    {
        path:'/admin',
        element:<Admin/>
    },
    {
        path:'/',
        element:<DashboardLayout/>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard/>
            },
            {
                path:'/detailed-report',
                element:<DetailedReport/>
            },
        ]
    }
  ])
}

export default AppRoutes;
