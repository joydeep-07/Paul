import React from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";
import Scale from "../Components/Scale";
import CursorFollower from "../cursor/CursorFollower";
import ChatAssistant from "../Components/ChatAssistant";

const Root = () => {
  const location = useLocation();

  const isChatPage = location.pathname === "/aichat";

  return (
    <div className="min-h-screen flex relative bg-[var(--bg-main)] text-[var(--text-main)] transition-all duration-300">
      {/* <CursorFollower /> */}

      <div className="w-full">
        {!isChatPage && <Navbar />}

        <ScrollToTop />

        <div className="pt-0">
          <Outlet />
        </div>

        <div className="fixed md:bottom-6 bottom-20 hidden md:flex right-6">
          <ChatAssistant/>
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
