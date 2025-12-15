import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../Components/ThemeToggle";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const navRef = useRef(null);
useEffect(() => {
  if (window.innerWidth < 768) return;

  const ctx = gsap.context(() => {
    gsap.to(navRef.current, {
      width: "75%",
      height: "60px",
      borderRadius: "999px",
      marginTop: "12px",

      // ✅ NO DARK BACKGROUND
      // backgroundColor: "rgba(255,255,255,0.05)",
      backdropFilter: "blur(10px)",

      ease: "power2.out",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=120",
        scrub: true,
      },
    });
  }, navRef);

  return () => ctx.revert();
}, []);


  return (
    <nav
      ref={navRef}
      className="
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        w-[92%]
        transition-all
      "
    >
      <div
        className="
          h-16 px-6 md:px-10
          flex items-center justify-between
          rounded-full
          bg-[var(--bg-main)]/80
          shadow-lg
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

        {/* RIGHT */}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
