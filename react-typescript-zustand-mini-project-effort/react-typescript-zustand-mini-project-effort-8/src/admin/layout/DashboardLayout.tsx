import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <>
      <div className="adminLayout flex">
        <Sidebar />
        <div className="dashboardLayoutContent">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
