import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const MainLayout:React.FC = () => {
  return (
    <>
      <Header/>
      <div className='mainContent min-h-[calc(100vh-128px)]'>
        <Outlet/>
      </div>
      <Footer/>
    </>
  );
}

export default MainLayout;
