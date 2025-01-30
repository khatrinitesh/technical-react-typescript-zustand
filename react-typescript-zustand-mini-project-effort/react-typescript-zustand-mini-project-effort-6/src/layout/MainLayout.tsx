import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from './Header';

const MainLayout = () => {
  return (
    <>
      <div className="appLayout">
        <Header/>
        <div className="mainContent bg-gray-500 ">
          <Outlet />
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default MainLayout;
