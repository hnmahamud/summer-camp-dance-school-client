import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.png";
import DarkModeToggle from "react-dark-mode-toggle";
import { useState } from "react";

const NavBar = () => {
  const user = false;
  const { pathname } = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const navItems = (
    <>
      <NavLink
        className={`${pathname === "/" && "text-blue-600"} hover:text-blue-600`}
      >
        Home
      </NavLink>
      <NavLink
        to="/instructors"
        className={`${
          pathname === "/instructors" && "text-blue-600"
        } hover:text-blue-600`}
      >
        Instructors
      </NavLink>
      <NavLink
        to="/classes"
        className={`${
          pathname === "/classes" && "text-blue-600"
        } hover:text-blue-600`}
      >
        Classes
      </NavLink>
      {user && (
        <>
          <NavLink
            to="/dashboard"
            className={`${
              pathname === "/dashboard" && "text-blue-600"
            } hover:text-blue-600`}
          >
            Dashboard
          </NavLink>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-4 text-base"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-2">
          <img className="h-12 w-12" src={logo} alt="" />
          <span className="text-lg font-semibold">DanceCampX</span>
        </Link>
      </div>

      <div className="navbar-end">
        <div className="hidden lg:flex mr-16">
          <ul className="menu menu-horizontal px-1 space-x-10 text-base">
            {navItems}
          </ul>
        </div>

        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={55}
        />

        {user ? (
          <div
            className="dropdown dropdown-end tooltip tooltip-left ml-8"
            data-tip={user?.displayName}
          >
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-16 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 border rounded-md w-36 space-y-3 text-start text-base"
            >
              <Link className="hover:text-blue-600">Profile</Link>
              <Link className="hover:text-blue-600">Logout</Link>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn btn-outline btn-sm btn-primary ml-8">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
