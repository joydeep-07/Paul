import React from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../Components/ThemeToggle";

const Navbar = () => {
  return (
    <nav
      className="h-14 w-full bg-[var(--bg-main)] text-[var(--text-main)] 
    flex items-center justify-between px-6 shadow-sm transition-all duration-500"
    >
      {/* LOGO */}
      <h1 className="text-lg font-bold">PAUL HERE</h1>

      {/* NAV LINKS */}
      <div className="flex gap-6 text-sm font-medium items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:opacity-70 transition ${
              isActive ? "opacity-100" : "opacity-80"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:opacity-70 transition ${
              isActive ? "opacity-100" : "opacity-80"
            }`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `hover:opacity-70 transition ${
              isActive ? "opacity-100" : "opacity-80"
            }`
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `hover:opacity-70 transition ${
              isActive ? "opacity-100" : "opacity-80"
            }`
          }
        >
          Project
        </NavLink>

        {/* THEME TOGGLE COMPONENT */}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
