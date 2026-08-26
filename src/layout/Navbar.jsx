import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "../Components/ThemeToggle";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector } from "react-redux";

import {
  FiHome,
  FiUser,
  FiGrid,
  FiMail,
  FiSettings,
  FiMessageSquare,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { name: "Home", path: "/", icon: <FiHome /> },
  { name: "About", path: "/about", icon: <FiUser /> },
  { name: "Projects", path: "/projects", icon: <FiGrid /> },
  { name: "Contact", path: "/contact", icon: <FiMail /> },
];

const Navbar = () => {
  const navRef = useRef(null);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [isAdmin, setIsAdmin] = useState(
    isAuthenticated || localStorage.getItem("adminAuthenticated") === "true",
  );

  const adminLinks = [
    {
      name: "Admin",
      path: "/admin/control",
      icon: <FiSettings />,
    },
    {
      name: "Messages",
      path: "/admin/messages",
      icon: <FiMessageSquare />,
    },
  ];

  // Sync Navbar with admin authentication
  useEffect(() => {
    setIsAdmin(
      isAuthenticated || localStorage.getItem("adminAuthenticated") === "true",
    );
  }, [isAuthenticated]);

  // Listen for admin login/logout changes
  useEffect(() => {
    const handleAdminAuthChange = () => {
      setIsAdmin(localStorage.getItem("adminAuthenticated") === "true");
    };

    window.addEventListener("adminAuthChanged", handleAdminAuthChange);

    return () => {
      window.removeEventListener("adminAuthChanged", handleAdminAuthChange);
    };
  }, []);

  // Desktop navbar scroll animation
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      gsap.set(navRef.current, {
        width: "92%",
        height: "auto",
        marginTop: 0,
      });

      gsap.to(navRef.current, {
        width: "65%",
        marginTop: "12px",
        ease: "none",
        immediateRender: false,

        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "+=180",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  const allMobileLinks = isAdmin ? [...links, ...adminLinks] : links;

  return (
    <>
      {/* =====================================================
          TOP NAVBAR
      ===================================================== */}
      <nav
        id="navbar"
        ref={navRef}
        className="
          fixed
          top-3
          left-1/2
          -translate-x-1/2
          z-50

          w-[calc(100%-24px)]

          md:w-[100%]
          md:left-1/2
          md:px-0
        "
      >
        <div
          className="
            h-[48px]
            md:h-[50px]

            flex
            items-center
            justify-between

            px-4
            md:px-10

            rounded-full

            border
            border-[var(--border-light)]

            bg-[var(--bg-main)]/80
            backdrop-blur-xl

            shadow-lg
          "
        >
          {/* LOGO */}
          <Link
            to="/"
            className="
              flex
              items-center
              shrink-0
            "
          >
            <h1
              className="
                text-[12px]
                md:text-base
                font-semibold
                tracking-[0.14em]
                leading-none
              "
            >
              PAUL HERE
            </h1>
          </Link>

          {/* =================================================
              DESKTOP NAV LINKS
          ================================================= */}
          <ul
            className="
              hidden
              md:flex
              items-center
              gap-10
              text-sm
              font-medium
            "
          >
            {links.map((link) => (
              <li
                key={link.name}
                className="
                  relative
                  h-6
                  overflow-hidden
                  group
                "
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `
                    block
                    transition-transform
                    duration-500
                    ease-out
                    ${isActive ? "text-[var(--accent-primary)]" : ""}
                  `
                  }
                >
                  <span
                    className="
                      block
                      group-hover:-translate-y-full
                      transition-transform
                      duration-500
                    "
                  >
                    {link.name}
                  </span>

                  <span
                    className="
                      block
                      absolute
                      inset-0
                      translate-y-full
                      group-hover:translate-y-0
                      transition-transform
                      duration-500
                      text-[var(--accent-primary)]
                    "
                    aria-hidden="true"
                  >
                    {link.name}
                  </span>
                </NavLink>
              </li>
            ))}

            {/* ADMIN LINKS */}
            {isAdmin &&
              adminLinks.map((link) => (
                <li
                  key={link.name}
                  className="
                    relative
                    h-6
                    overflow-hidden
                    group
                  "
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `
                      block
                      transition-transform
                      duration-500
                      ease-out
                      ${isActive ? "text-[var(--accent-primary)]" : ""}
                    `
                    }
                  >
                    <span
                      className="
                        block
                        group-hover:-translate-y-full
                        transition-transform
                        duration-500
                      "
                    >
                      {link.name}
                    </span>

                    <span
                      className="
                        block
                        absolute
                        inset-0
                        translate-y-full
                        group-hover:translate-y-0
                        transition-transform
                        duration-500
                        text-[var(--accent-primary)]
                      "
                      aria-hidden="true"
                    >
                      {link.name}
                    </span>
                  </NavLink>
                </li>
              ))}
          </ul>

          {/* THEME TOGGLE */}
          <div
            className="
              flex
              items-center
              shrink-0
            "
          >
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* =====================================================
          MOBILE BOTTOM NAVBAR
      ===================================================== */}
      <nav
        className="
          fixed
          bottom-0
          left-0
          z-50
          w-full
          md:hidden
        "
      >
        <div
          className="
            h-[62px]
            w-full

            flex
            items-center
            justify-around

            border-t
            border-[var(--border-light)]

            bg-[var(--bg-main)]/90
            backdrop-blur-xl
          "
        >
          {allMobileLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              aria-label={link.name}
              className={({ isActive }) =>
                `
                relative

                h-full
                flex
                flex-1

                items-center
                justify-center

                text-[var(--text-main)]

                transition-colors
                duration-300

                ${isActive ? "text-[var(--accent-primary)]" : "opacity-55"}
              `
              }
            >
              {({ isActive }) => (
                <>
                  {/* ICON */}
                  <span
                    className={`
                      text-[20px]

                      transition-transform
                      duration-300

                      ${isActive ? "text-[var(--accent-primary)]" : "scale-100"}
                    `}
                  >
                    {link.icon}
                  </span>

                 
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
