import React from "react";
import AdminReviews from "../Admin/AdminReviews";
import Footer from "../layout/Footer";

const AdminControl = () => {
  return (
    <div className="relative min-h-screen bg-[var(--bg-main)]">
      {/* Centered page content */}
      <main className="w-full">
        <AdminReviews />
        <Footer />
      </main>
    </div>
  );
};

export default AdminControl;
