import React from 'react';

const Footer = () => {

    const currentFullYear = new Date().getFullYear();
  return (
    <footer className='bg-black py-[20px] footer'>
      <div className="container mx-auto">
        <p className='text-white'>&copy; copyright {currentFullYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
