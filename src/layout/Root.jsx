import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Root = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] transition-all duration-300">
      <Navbar />
      <div className="pt-25">
        {" "}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
