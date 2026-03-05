import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";

const Root = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] transition-all duration-300">
      <Navbar />
      <ScrollToTop />
      <div className="pt-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
