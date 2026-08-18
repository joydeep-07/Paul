import React from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

const SignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear the authentication flag
    localStorage.removeItem("adminAuthenticated");

    // Redirect to home page
    navigate("/", { replace: true });
  };

  return (
    <button
      type="button"
      onClick={handleSignOut}
      aria-label="Sign Out"
      className="group cursor-pointer flex items-center justify-center gap-2 rounded-sm border border-[var(--border-light)] px-3 py-2.5 text-[var(--text-main)] transition-all duration-300 hover:border-red-500/40 hover:text-red-500"
    >
      <LogOut
        size={12}
        className="transition-transform duration-300 group-hover:-translate-x-0.5"
      />

      <span className="text-[9px] font-medium uppercase tracking-[0.12em]">
        Sign Out
      </span>
    </button>
  );
};

export default SignOut;
