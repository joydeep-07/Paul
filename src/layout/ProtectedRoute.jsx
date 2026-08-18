import React from "react";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("adminAuthenticated") === "true";

  if (!isAuthenticated) {
    toast.error("Authentication required", {
      description: "Please sign in as an admin to access this page.",
    });

    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
