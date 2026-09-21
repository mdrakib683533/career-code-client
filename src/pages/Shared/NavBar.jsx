import React, { use } from "react";
import { NavLink, Link } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { AiFillSound, AiOutlineMenu } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";

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

  const navLinkClass = ({ isActive }) =>
    `relative rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-300 ${
      isActive
        ? "bg-primary/10 text-primary"
        : "text-base-content/70 hover:bg-primary/5 hover:text-primary"
    }`;

  const links = (
    <>
      <li>
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/myApplications" className={navLinkClass}>
              My Applications
            </NavLink>
          </li>

          <li>
            <NavLink to="/addJob" className={navLinkClass}>
              <span className="flex items-center gap-2">Add Job</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/myPostedJobs" className={navLinkClass}>
              <span className="flex items-center gap-2">My Posted Jobs</span>
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-base-200 bg-base-100/90 shadow-sm backdrop-blur-xl">
      <div className="navbar mx-auto min-h-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Logo + Mobile Menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle lg:hidden"
            >
              <AiOutlineMenu className="text-xl" />
            </div>

            <ul
              tabIndex="-1"
              className="menu dropdown-content z-50 mt-4 w-64 rounded-2xl border border-base-200 bg-base-100 p-3 shadow-xl"
            >
              {links}
            </ul>
          </div>

          {/* Brand Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2 transition-transform duration-300 hover:scale-105"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-xl text-primary-content shadow-md">
              <AiFillSound />
            </div>

            <div className="hidden sm:block">
              <h2 className="text-xl font-extrabold tracking-tight text-base-content">
                Job<span className="text-primary">Box</span>
              </h2>

              <p className="text-[10px] font-medium tracking-wider text-base-content/50">
                FIND YOUR NEXT OPPORTUNITY
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-2 px-1">
            {links}
          </ul>
        </div>

        {/* Right Section */}
        <div className="navbar-end gap-2">
          {user ? (
            <div className="flex items-center gap-2">
              {/* User Avatar */}
              <div
                className="tooltip tooltip-bottom"
                data-tip={user?.displayName || user?.email}
              >
                <img
                  src={user?.photoURL || user?.providerData?.[0]?.photoURL}
                  alt={user?.displayName || "User profile"}
                  referrerPolicy="no-referrer"
                  className="h-10 w-10 rounded-full border-2 border-primary/20 object-cover"
                />
              </div>

              {/* Sign Out */}
              <button
                onClick={handleSignOut}
                className="btn btn-sm rounded-full border border-error/20 bg-error/5 px-4 text-error transition-all duration-300 hover:bg-error hover:text-white"
              >
                <FaSignOutAlt />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <NavLink
                to="/register"
                className="btn btn-ghost btn-sm rounded-full px-4 font-semibold transition-all duration-300 hover:bg-primary/10 hover:text-primary"
              >
                Register
              </NavLink>

              <NavLink
                to="/signIn"
                className="btn btn-primary btn-sm rounded-full px-5 font-semibold shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Sign In
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
