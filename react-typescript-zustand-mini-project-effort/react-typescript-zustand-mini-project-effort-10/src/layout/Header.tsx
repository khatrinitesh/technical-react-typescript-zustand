import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header bg-black py-[20px] text-white">
        <div className="container mx-auto">
          <ul className="flex gap-[10px]">
            <li>
              {/* Corrected the className logic */}
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `font-bold ${isActive ? 'active text-red-500' : 'inactive'}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              {/* Corrected the className logic */}
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `font-bold ${isActive ? 'active text-red-500' : 'inactive'}`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
