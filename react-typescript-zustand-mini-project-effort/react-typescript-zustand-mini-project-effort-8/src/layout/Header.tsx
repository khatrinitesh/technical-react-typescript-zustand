import React from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "../constants/navItem";

const Header: React.FC = () => {
  return (
    <>
      <header className="header bg-black py-[20px]">
        <div className="container mx-auto">
          <nav>
            <ul className="listNav flex gap-[10px]">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end
                    className={`text-white font-bold ({ isActive }) => (isActive ? "active" : "")`}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
