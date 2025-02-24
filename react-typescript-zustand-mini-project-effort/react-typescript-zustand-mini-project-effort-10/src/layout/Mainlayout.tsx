import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Mainlayout: React.FC = () => {
  return (
    <>
      <div className="appLayout">
        <Header />
        <div className="mainContent">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Mainlayout;
