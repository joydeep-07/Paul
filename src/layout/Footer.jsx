import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <footer className="bg-[var(--bg-main)] text-[var(--text-main)] flex flex-col items-center justify-center pb-6 sm:pb-4 px-4 xs:px-6 space-y-8 sm:space-y-10">
        <div className="w-full max-w-7xl flex flex-col sm:flex-row items-center justify-between border-t border-[var(--border-light)] pt-4 sm:pt-4">
          <p className="text-xs xs:text-sm text-[var(--text-main)] text-center sm:text-left mb-3 sm:m-1 order-2 sm:order-1">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>

          <ul className="hidden sm:flex gap-4 xs:gap-5 sm:gap-5 text-base xs:text-lg order-1 sm:order-2">
            <li>
              <a
                href="https://www.instagram.com/mr.paul_16"
                target="_blank"
                rel="noopener noreferrer"
                className=" transition-colors duration-300 block p-1"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5 xs:w-6 xs:h-6" />
              </a>
            </li>

            <li>
              <a
                href="https://x.com/Paul__here"
                target="_blank"
                rel="noopener noreferrer"
                className=" transition-colors duration-300 block p-1"
                aria-label="Twitter"
              >
                <FaXTwitter className="w-5 h-5 xs:w-6 xs:h-6" />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/joydeep-paul-06b37926a"
                target="_blank"
                rel="noopener noreferrer"
                className=" transition-colors duration-300 block p-1"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5 xs:w-6 xs:h-6" />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/joydeep-07"
                target="_blank"
                rel="noopener noreferrer"
                className=" transition-colors duration-300 block p-1"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5 xs:w-6 xs:h-6" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
