import React from 'react';
import { Link } from 'react-router-dom';

const Admin:React.FC = () => {
  return (
    <>
      Admin
      <Link to="/dashboard">Click</Link>
    </>
  );
}

export default Admin;
