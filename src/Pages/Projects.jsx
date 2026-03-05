import React from "react";
import MyWorks from "../Components/MyWorks";
import { projects } from "../Utils/Projects";
import WorkBadge from "../Components/WorkBadge";
import Footer from "../layout/Footer";

const Projects = () => {
  return (
    <div className="flex flex-col items-center pt-25 bg-[var(--bg-main)]">
      {/* HEADER */}
      <div
        className="
          w-full max-w-7xl
          px-4 sm:px-6 lg:px-8
          mb-14 sm:mb-16 lg:mb-20
        "
      >
        {/* BADGE */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[var(--accent-primary)] font-medium">
            Portfolio Showcase
          </span>
        </div>

        {/* TITLE */}
        <div className="mb-8">
          <h1
            className="
            heading-font
            text-2xl sm:text-3xl md:text-5xl lg:text-6xl
            leading-tight mb-3
          "
          >
            Creating{" "}
            <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
              Next level
            </span>{" "}
            digital products
          </h1>

          <p
            className="
            text-[var(--text-secondary)]
            text-sm sm:text-base
            max-w-xl
            opacity-90
            leading-relaxed
          "
          >
            Each project is unique, and I follow a structured approach to turn
            ideas into seamless user experiences.
          </p>
        </div>

        {/* META */}
        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[var(--text-secondary)]">
          <span>{projects.length} Featured Projects</span>
          <span className="w-1 h-1 bg-[var(--border-light)] rounded-full hidden sm:block" />
          <span>Updated Recently</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="w-full">
        <MyWorks />

        

        <WorkBadge />
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
