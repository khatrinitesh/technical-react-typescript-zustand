import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard:React.FC = () => {
  return (
    <>
      Dashboard

      <br/>
      <Link to="/detailed-report">Click</Link>
    </>
  );
}

export default Dashboard;
