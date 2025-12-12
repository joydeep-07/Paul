import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../slices/themeSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.theme);

  return (
    <nav className="h-14 w-full bg-[var(--bg-main)] text-[var(--text-main)] flex items-center justify-between px-6 shadow-sm transition-all duration-500">
      {/* LOGO / BRAND */}
      <h1 className="text-lg font-bold">PAUL HERE</h1>

      {/* NAV LINKS */}
      <div className="flex gap-6 text-sm font-medium">
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
      </div>

      {/* THEME TOGGLE BUTTON */}
      <button
        onClick={() => dispatch(toggleTheme())}
        className="px-3 py-1 rounded bg-[var(--accent-primary)] text-white text-sm transition-all duration-300 hover:opacity-90"
      >
        {mode === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
