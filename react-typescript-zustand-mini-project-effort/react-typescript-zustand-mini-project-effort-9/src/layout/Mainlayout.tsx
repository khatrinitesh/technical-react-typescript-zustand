import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Mainlayout: React.FC = () => {
  return (
    <>
      <div className='appLayout'>
        <Header />
        <div className='mainContent h-full'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Mainlayout
