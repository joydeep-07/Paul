import React from "react";
import { useNavigate } from "react-router-dom";

const WorkBadge = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="flex justify-center p-4 bg-[var(--bg-main)] sm:p-5 md:p-6">
      <div className="bg-[var(--bg-secondary)] w-full max-w-7xl text-center py-12 sm:py-14 md:py-16 rounded-2xl sm:rounded-3xl shadow-lg border border-[var(--border-light)] flex flex-col items-center justify-center">
        {/* Availability badge */}
        <div className="flex items-center gap-2 bg-green-600/20 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-5 md:mb-6">
          <span className="h-2 w-2 rounded-full animate-pulse bg-green-500"></span>
          <span className="text-xs sm:text-sm">Available to work</span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl heading-font xs:text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(-text--main)] leading-tight px-2 sm:px-0">
          Let's{" "}
          <span className="text-[var(--accent-primary)]">
            {" "}
            create your <br /> next big
          </span>{" "}
          idea.
        </h1>

        {/* Contact button */}
        <button
          onClick={handleContactClick}
          className="mt-7 cursor-pointer relative overflow-hidden px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-full font-medium tracking-[0.1em] text-[var(--text-main)] hover:text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/5 backdrop-blur-md border border-[var(--border-light)] hover:border-[var(--accent-primary)]/20 shadow-sm transition-all duration-500 ease-out group  sm:w-auto
"
        >
          <span className="flex items-center space-x-2 text-[10px] sm:text-xs opacity-100 translate-y-0 ">
            CONTACT
          </span>
        </button>
      </div>
    </div>
  );
};

export default WorkBadge;
