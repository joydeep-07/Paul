import React from "react";
import SignOut from "../Components/SignOut";
import AdminReviews from "../Admin/AdminReviews";
import AdminMessages from "../Admin/AdminMessages";
import AdminSubscribers from "../Admin/AdminSubscribers";

const AdminControl = () => {
  return (
    <div className="">
      <AdminReviews/>
      <AdminMessages/>
      <AdminSubscribers/>
      <SignOut />
    </div>
  );
};

export default AdminControl;
