import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[var(--bg-main)] text-[var(--text-main)] border-t border-[var(--border-light)] py-10 px-6 transition-all duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold mb-3">YourBrand</h2>
          <p className="text-sm opacity-80">
            Creating smooth experiences with clean design and modern UI.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:opacity-70">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:opacity-70">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:opacity-70">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:opacity-70">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-70">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-70">
                Documentation
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Social</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:opacity-70">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-70">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-70">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 pt-6 border-t border-[var(--border-light)] text-center text-sm opacity-80">
        © {new Date().getFullYear()} YourBrand — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
