import React from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";
import Scale from "../Components/Scale";
import CursorFollower from "../cursor/CursorFollower";

const Root = () => {
  const location = useLocation();

  const isChatPage = location.pathname === "/aichat";

  return (
    <div className="min-h-screen flex relative bg-[var(--bg-main)] text-[var(--text-main)] transition-all duration-300">
      <CursorFollower />

      <div className="w-full">
        {!isChatPage && <Navbar />}

        <ScrollToTop />

        <div className="pt-0">
          <Outlet />
        </div>
      </div>

      {!isChatPage && (
        <div className="hidden md:flex h-screen fixed right-0 top-0 items-center justify-center">
          <Scale />
        </div>
      )}
    </div>
  );
};

export default Root;
