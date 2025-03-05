import React from 'react';

const Footer = () => {

    const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer bg-black py-[10px] text-white">
        <div className="container mx-auto">
            <p>&copy; copyright {currentYear}</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
