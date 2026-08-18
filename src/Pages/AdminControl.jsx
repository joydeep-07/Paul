import React from "react";
import AdminReviews from "../Admin/AdminReviews";
import AdminSubscribers from "../Admin/AdminSubscribers";
import Footer from "../layout/Footer";
import SidePanel from "../admin/SidePanel";

const AdminControl = () => {
  return (
    <div className="relative min-h-screen bg-[var(--bg-main)]">
      {/* Fixed left side panel */}
      <SidePanel />

      {/* Centered page content */}
      <main className="w-full">
        <div className="mx-auto w-full max-w-8xl px-4 sm:px-6 md:px-12">
          <AdminReviews />
          <AdminSubscribers />
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default AdminControl;
