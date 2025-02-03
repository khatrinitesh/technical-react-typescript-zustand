import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
  return (
    <>
      <Sidebar/>
      <div className='mainContentAddmin'>
        <Outlet/>
      </div>
    </>
  );
}

export default DashboardLayout;
