import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Root = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] transition-all duration-300">
      {/* NAVBAR FIXED */}
      <div className="absolute top-0 w-full">
        <Navbar />
      </div>

      {/* MAIN CONTENT */}
      <div className="pt-25 flex justify-center items-center">
        <Outlet />
      </div>

      {/* FOOTER FIXED */}
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Root;
