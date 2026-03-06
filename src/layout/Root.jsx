import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";
import Scale from "../Components/Scale";

const Root = () => {
  return (
    <div className="min-h-screen flex relative bg-[var(--bg-main)] text-[var(--text-main)] transition-all duration-300">
      <div className="w-full">
        <Navbar />
        <ScrollToTop />
        <div className="pt-0">
          <Outlet />
        </div>
      </div>

      <div className="border-l hidden md:flex border-[var(--border-light)]/50 bg-[var(--bg-main)]/50 w-10 h-screen fixed right-0 top-0 items-center justify-center">
        <Scale />
      </div>
    </div>
  );
};

export default Root;
