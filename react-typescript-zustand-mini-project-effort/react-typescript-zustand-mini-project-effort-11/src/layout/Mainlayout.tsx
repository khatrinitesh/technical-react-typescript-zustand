import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <>
      <div className="appLayout">
        <Header />
        <div className="mainContent h-full bg-gray-300">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Mainlayout;
