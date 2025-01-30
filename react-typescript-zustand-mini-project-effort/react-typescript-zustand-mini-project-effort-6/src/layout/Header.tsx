import React, { useState } from "react";
// constants
import { topNavData } from "../constants/topNavData";
// library
import { NavLink, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Sidebar overlay for mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={toggleSidebar}><button className="absolute top-[20px] right-[20px] z-[9999]">&times;</button></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-black text-white p-5 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden z-50`}
      >
        
        <ul>
          {topNavData.map((val, index) => (
            <li key={index} className="py-2">
              <NavLink
                to={val.pathurl}
                className={({ isActive }) =>
                  `block text-white text-lg font-bold ${isActive ? "bg-red-500" : ""}`
                }
                onClick={toggleSidebar} // Close sidebar on link click
              >
                {val.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Header */}
      <header className="header bg-black">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="logoBlock">
            {location.pathname === "/" ? (
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/024/553/853/small_2x/colorful-eagle-head-logo-pop-art-style-eagle-face-sticker-pastel-cute-colors-ai-generated-png.png"
                alt="Eagle Logo"
                className="max-w-[8vw]"
              />
            ) : (
              <img
                src="https://i.pinimg.com/736x/6e/a9/d8/6ea9d8d5ac75d9c5d7a2a567c1e2bbdf.jpg"
                alt="Other Logo"
                className="max-w-[8vw]"
              />
            )}
          </div>

          {/* Hamburger Icon (only on mobile) */}
          <button
            className="block md:hidden bg-transparent w-[30px] h-[30px] text-white"
            onClick={toggleSidebar}
          >
            <span className="block w-full relative h-[1px] top-[-5px] bg-white mb-1"></span>
            <span className="block w-full h-[1px] bg-white mb-1"></span>
            <span className="block w-full relative h-[1px] top-[5px] bg-white"></span>
          </button>

          {/* Desktop navigation */}
          <ul className="listNav gap-[5px] hidden md:flex">
            {topNavData.map((val, index) => (
              <li key={index}>
                <NavLink
                  to={val.pathurl}
                  className={({ isActive }) =>
                    `text-white text-[16px] font-bold block !p-[10px] ${isActive ? "bg-red-500" : ""}`
                  }
                >
                  {val.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
