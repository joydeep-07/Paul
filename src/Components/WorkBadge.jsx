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
          className="
    px-1 sm:px-5 mt-5 sm:mt-6 py-3 sm:py-4
    bg-transparent
    border-2 border-[var(--text-main)]
    text-[var(--text-main)]
    font-medium tracking-widest
    rounded-full
    transition-all duration-700
    group relative overflow-hidden
    w-fit min-w-32 sm:min-w-36
  "
        >
          {/* Sliding overlay */}
          <span
            className="
      absolute inset-0
      bg-[var(--text-main)]
      opacity-0
      group-hover:opacity-10
      transition-all duration-700
      -translate-x-full
      group-hover:translate-x-0
    "
          />

          {/* Text wrapper */}
          <span className="relative w-32 sm:w-36 md:w-40 flex items-center justify-center">
            {/* Initial text */}
            <span
              className="
        opacity-100 group-hover:opacity-0
        translate-y-0 group-hover:-translate-y-2
        transition-all duration-500
        text-[var(--text-main)]
        text-xs
      "
            >
              CONTACT
            </span>

            {/* Hover text */}
            <span
              className="
        absolute inset-0
        opacity-0 group-hover:opacity-100
        translate-y-2 group-hover:translate-y-0
        transition-all duration-500
        flex items-center justify-center
        text-[var(--text-main)]
        text-xs
      "
            >
              ME
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default WorkBadge;
