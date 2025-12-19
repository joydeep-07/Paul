import React from "react";
import { projects } from "../Utils/Projects";

const ProjectHeading = () => {
  return (
    <div className="flex justify-center flex-col items-center bg-[var(--bg-main)] w-full">
      <div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 px-4 w-full max-w-7xl md:mb-16 lg:mb-5 sm:px-6 md:px-8 lg:px-0"
      >
        <div className="flex items-center gap-3 mb-4 sm:mb-5 md:mb-6">
          <div className="w-8 h-1 sm:w-10 md:w-12 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full" />
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent-primary)] font-medium">
            Project Showcase
          </span>
        </div>

        <div className="mb-6 sm:mb-7 md:mb-8">
          <h1 className="text-2xl heading-font sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-2">
            Selected{" "}
            <span className="text-[var(--accent-primary)] bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="text-[var(--text-secondary)] text-sm sm:text-base md:text-lg lg:text-sm max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl opacity-90 leading-relaxed mt-2 sm:mt-3">
            Each project is unique, and I follow a structured approach to turn
            ideas into seamless user experiences.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-[var(--text-secondary)]">
          <div className="flex items-center gap-1 sm:gap-2">
            <span>{projects.length} Featured Projects</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-[var(--border-light)] rounded-full" />
          <span className="text-xs sm:text-sm">Updated Recently</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeading;
