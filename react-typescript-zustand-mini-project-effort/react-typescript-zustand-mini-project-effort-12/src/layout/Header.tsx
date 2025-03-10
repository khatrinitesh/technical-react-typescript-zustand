import React from "react";
import { Link, Links, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const logo = location.pathname === "/about" ? "https://png.pngtree.com/png-clipart/20210128/ourmid/pngtree-target-location-png-image_2814096.jpg" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXn84m0ldNEy4b-doui_GKkeziMRUfEl71g&s"
  
  return (
    <>
      <header className="header bg-black py-[10px] text-white">
        <div className="container mx-auto px-[1rem]">
          <div className="innerHeader flex justify-between items-center">
            <div className="logoBlock">
              <img src={logo} alt="" className="max-w-[50px]" />
            </div>
            <div className="topnav">
              <ul className="flex gap-[10px]">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
