import React from "react";
import logo from "../assets/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
const Nav = ({ login, setlogin }) => {
  function handlelogout() {
    setlogin(false);
    toast.info("logout successful");
  }
  return (
    <div>
      <nav className="flex justify-evenly items-center flex-wrap gap-3 py-3 ">
        <NavLink to="/">
          <img src={logo} alt=""></img>
        </NavLink>
        <div className="flex justify-between items-center gap-4 text-white font-bold">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="text-white font-bold">
          {!login ? (
            <>
              <Link
                to="/login"
                className="px-3 py-2 bg-transparent border-2 border-gray-600 rounded-lg ml-3"
              >
                <button>LOGIN</button>
              </Link>
              <Link
                to="/signup"
                className="px-3 py-2 bg-transparent border-2 border-gray-600 rounded-lg ml-3"
              >
                <button>SIGNUP</button>
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="px-3 py-2 bg-transparent border-2 border-gray-600 rounded-lg ml-3"
              >
                <button onClick={handlelogout}>LOGOUT</button>
              </Link>
              <Link
                to="/dashboard"
                className="px-3 py-2 bg-transparent border-2 border-gray-600 rounded-lg ml-3"
              >
                <button>DASHBOARD</button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
