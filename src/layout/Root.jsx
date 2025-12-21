import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import ScrollToTop from "../Components/ScrollToTop";
import LoadingBar from "../Components/LoadingBar";

const Root = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] transition-all duration-300">
      <LoadingBar/>
      <Navbar />
      <ScrollToTop/>
      <div className="pt-25">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Root;
