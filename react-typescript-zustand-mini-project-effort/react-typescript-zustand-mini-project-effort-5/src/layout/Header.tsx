import React from 'react';
import { NavLink } from 'react-router-dom';
import { topNavData } from '../constants/topNav';

const Header:React.FC = () => {
  return (
    <>
      <header className='header bg-black py-[20px]'>
        <div className="container mx-auto">
            <ul className='flex gap-[10px]'>
            {topNavData.map((val, index) => (
            <li key={index}>
              <NavLink 
                className={({ isActive }) => 
                  isActive 
                    ? "text-white bg-red-500 font-bold p-[5px]" 
                    : "text-white font-bold"
                } 
                to={val.url}
              >
                {val.title}
              </NavLink>
            </li>
          ))}
               
            </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
