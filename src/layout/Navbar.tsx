import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/service">Service</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
