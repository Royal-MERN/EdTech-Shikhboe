import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../../Context/AuthProvider";
import SquareBtn from "../Buttons/SquareBtn";
import avatar from "../../../../public/images/logo/avatar.webp";

const NavBar = () => {
  //get user information
  const { user, logOut } = useAuth();
  // console.log("🚀 ~ file: NavBar.jsx:10 ~ NavBar ~ user:", user)
  
  // LogOut
  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => alert(err.message));
  };

  const menu = (
    <>
      <li className='hover:text-primary px-2 lg:px-5 py-2 lg:py-0'>
        <NavLink to='/'>Home</NavLink>
      </li>

      <li className='hover:text-primary px-2 lg:px-5 py-2 lg:py-0'>
        <NavLink to='/'>Academic Program</NavLink>
      </li>
      <li className='hover:text-primary px-2 lg:px-5 py-2 lg:py-0'>
        <NavLink to='/'>Courses</NavLink>
      </li>

      <li className='hover:text-primary px-2 lg:px-5 py-2 lg:py-0'>
        <NavLink to='/'>Affiliate</NavLink>
      </li>
    </>
  );

  const userMenu = (
    <>
      <li>
        <Link to='/my-courses'>My Courses</Link>
      </li>
      <li>
        <Link>Certificate</Link>
      </li>
      <li>
        <Link>Payment History</Link>
      </li>
      <li>
        <Link>Manage Payment</Link>
      </li>
      <li>
        <Link to='/profile'>Account</Link>
      </li>
      <li>
        <Link>Change Password</Link>
      </li>
      <li onClick={() => handelLogOut()}>
        <Link>Logout</Link>
      </li>
    </>
  );
  return (
    <div className='bg-base-100 sticky top-0 z-50'>
      <div className='navbar emaxW'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label
              tabIndex={0}
              className='flex item-center lg:hidden cursor-pointer'>
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
          <Link to='/' className=''>
            <img
              className='w-48'
              src='../../../../public/images/logo/Shikhboe logo-01-01.png'
              alt=''
            />
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu-horizontal px-1'>{menu}</ul>
        </div>
        <div className='navbar-end'>
          {/* conditional login button */}
          {user?.uid ? (
            <div className='dropdown dropdown-end'>
              <div tabIndex={0} className='flex items-center cursor-pointer'>
                <label className='avatar cursor-pointer'>
                  <div className='w-10 rounded-full'>
                    <img src={`${user?.photoURL ? user?.photoURL : avatar}`} />
                  </div>
                </label>
                <p className='ml-1 hidden md:block'>{user?.displayName}</p>
                <svg
                  className='fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'>
                  <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-56'>

                  {/* {user.emailVerified? userMenu : <p className="py-10 pl-5">Please verify Your Email</p>} */}
                  {userMenu }

                
              </ul>
            </div>
          ) : (
            <SquareBtn to='login'>Login</SquareBtn>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
