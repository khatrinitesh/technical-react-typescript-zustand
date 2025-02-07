import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

const MainLayout: React.FC = () => {
  return (
    <>
      <div className="appLayout">
        <Header />
        <div className="mainContent bg-orange-50">
          <Outlet />
        </div>
        <Footer />
      </div>
         
      {/* Toaster to display toast notifications */}
      <Toaster />
    </>
  );
};

export default MainLayout;
