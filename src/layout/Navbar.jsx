import React from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../Components/ThemeToggle";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[75%]">
      <div
        className="
          h-16 px-6 md:px-10
          flex items-center justify-between
          rounded-full
          border border-white/10
          bg-[var(--bg-main)]/70
          backdrop-blur-xl
          shadow-lg
          transition-all duration-500
        "
      >
        {/* LOGO */}
        <h1 className="text-sm md:text-base font-semibold tracking-wide cursor-pointer">
          PAUL HERE
        </h1>

        {/* NAV LINKS */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
          {links.map((link) => (
            <li key={link.name} className="relative h-6 overflow-hidden group">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block transition-transform duration-500 ease-out
                   ${isActive ? "text-[var(--accent-primary)]" : ""}`
                }
              >
                <span className="block group-hover:-translate-y-full transition-transform duration-500">
                  {link.name}
                </span>
                <span
                  className="block absolute inset-0 translate-y-full
                  group-hover:translate-y-0 transition-transform duration-500
                  text-[var(--accent-primary)]"
                  aria-hidden
                >
                  {link.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
