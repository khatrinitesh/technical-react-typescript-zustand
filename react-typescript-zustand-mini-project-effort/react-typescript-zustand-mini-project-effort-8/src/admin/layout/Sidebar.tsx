import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <div className="sidebar bg-orange-50 p-[10px] h-screen relative">
        <ul>
            <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
                <NavLink to="/setting1">Setting 1</NavLink>
            </li>
            <li>
                <NavLink to="/setting2">Setting 2</NavLink>
            </li>
            <li>
                <NavLink to="/setting3">Setting 3</NavLink>
            </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
