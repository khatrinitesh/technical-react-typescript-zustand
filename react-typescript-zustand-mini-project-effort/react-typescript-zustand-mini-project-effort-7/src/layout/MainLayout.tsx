import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from './Footer';
import { ToastContainer } from "react-toastify";

const MainLayout: React.FC = () => {
  return (
    <>
      <div className="appLayout">
        <Header />
        <div className="mainContent bg-primary-a0 p-[20px]">
          <Outlet />
        </div>
        <Footer />
        <ToastContainer/>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} />
    </>
  );
};

export default MainLayout;
