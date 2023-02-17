import React from "react";
import { Link, NavLink } from "react-router-dom";
import SquareBtn from "../Buttons/SquareBtn";

const NavBar = () => {
  const menu = (
    <>
      <li className="hover:text-primary px-2 lg:px-5 py-2 lg:py-0">
        <NavLink to='/'>Skills</NavLink>
      </li>
      <li className="hover:text-primary px-2 lg:px-5 py-2 lg:py-0">
        <NavLink to='/'>Admission</NavLink>
      </li>
      <li className="hover:text-primary px-2 lg:px-5 py-2 lg:py-0">
        <NavLink to='/'>Jobs</NavLink>
      </li>
      <li className="hover:text-primary px-2 lg:px-5 py-2 lg:py-0">
        <NavLink to='/'>Online Batch</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 sticky top-0 z-50">
      <div className='navbar emaxW'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='flex item-center lg:hidden cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 w-7 m-2'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-64 sm:w-80'>
              {menu}
            </ul>
          </div>
          <Link to='/' className="">
            <img src="../../../../public/images/logo.jpg" alt="" />
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu-horizontal px-1'>
            {menu}
          </ul>
        </div>
        <div className='navbar-end'>
          <SquareBtn to='login'>Login</SquareBtn>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
