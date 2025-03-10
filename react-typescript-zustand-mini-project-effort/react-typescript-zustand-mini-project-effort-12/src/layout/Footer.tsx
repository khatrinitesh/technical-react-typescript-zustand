import React from 'react';

const Footer = () => {

    const currentFullYear= new Date().getFullYear();
  return (
    <>
      <footer className="footer bg-black py-[10px] text-white">
        <div className="container mx-auto mx-auto px-[1rem">
            <p>&copy; copyright {currentFullYear}</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
