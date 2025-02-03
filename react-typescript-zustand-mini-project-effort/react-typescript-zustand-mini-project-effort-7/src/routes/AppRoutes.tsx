import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from './../pages/Home';
import About from './../pages/About';
import Service from './../pages/Service';
import Contact from './../pages/Contact';
import Login from "../pages/Login";
import Register from "../pages/Register";
import Otp from "../pages/Otp";
import Admin from './../admin/pages/Admin';
import DashboardLayout from "../admin/layout/DashboardLayout";
import Dashboard from "../admin/pages/Dashboard";
import DetailedReport from "../admin/pages/DetailedReport";

// admin

const AppRoutes = () => {
  return createBrowserRouter([
    // LANDING PAGE FOR ALL DEVICES
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "otp",
          element: <Otp />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "service",
          element: <Service />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "*",
          element: <Navigate to="/" />,
        },
      ],
    },
    // ADMIN THEME FOR DATABASE
    {
      path:'admin',
      element:<Admin/>,
    },
    {
      path:'/',
      element:<DashboardLayout/>,
      children:[
        {
          path:'dashboard',
          element:<Dashboard/>,
        },
        {
          path: "detailedreport", // ADDLIST PAGE
          element: <DetailedReport />
      }
      ]
    },
  ]);
};

export default AppRoutes;
