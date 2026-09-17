import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { AiFillSound } from "react-icons/ai";

const NavBar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("signed out user");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 border-b-2 border-blue-600 pb-1"
              : "text-gray-700"
          }
        >
          Home
        </NavLink>
      </li>

      {/* for applicant links. check roles as well  */}
      {user && (
        <>
          <li>
            <NavLink
              to="/myApplications"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-700"
              }
            >
              My Applications
            </NavLink>
          </li>
        </>
      )}
      {/* for recruiter. check roles as well. */}
      {user && (
        <>
          <li>
            <NavLink
              to="/addJob"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-700"
              }
            >
              Add Job
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myPostedJobs"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-700"
              }
            >
              My Posted Jobs
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="flex items-center gap-1.5 text-2xl">
          {" "}
          <AiFillSound></AiFillSound>{" "}
          <span className="text-xl font-bold text-green-600">JobBox</span>{" "}
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={handleSignOut} className="btn">
            Sign Out
          </button>
        ) : (
          <>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1 transition-all duration-300"
                  : "text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:pb-1 transition-all duration-300"
              }
            >
              Register
            </NavLink>
            <NavLink
              to="/signIn"
              className={({ isActive }) =>
                `btn ml-4 transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                    : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-blue-500 hover:text-white hover:border-blue-500"
                }`
              }
            >
              SignIn
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
