import React from 'react';
// library
import { createBrowserRouter } from 'react-router-dom';
// pages
import Home from '../pages/Home'
import About from '../pages/About'
// layout
import Mainlayout from '../layout/Mainlayout';

const AppRoutes = createBrowserRouter([
    {
        path:"/",
        element:<Mainlayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            }
        ]
    }
])

export default AppRoutes
