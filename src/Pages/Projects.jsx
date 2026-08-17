import React from "react";
import MyWorks from "../Components/MyWorks";
import Footer from "../layout/Footer";
import { projects } from "../Utils/Projects";

const Projects = () => {
  return (
    <div className="w-full bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300">
      {/* HEADER */}
      <section className="mx-auto max-w-8xl px-4 pt-24 sm:px-6 sm:pt-28 md:px-12 lg:pt-32">
        <div className="max-w-4xl">
          {/* LABEL */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs">
              Portfolio
            </span>

            <span className="h-px w-10 bg-[var(--accent-primary)] sm:w-12" />
          </div>

          {/* HEADING */}
          <h1 className="heading-font mt-5 text-3xl leading-[1.15] text-[var(--text-main)] sm:text-4xl md:text-5xl lg:text-5xl">
            Selected{" "}
            <span className="text-[var(--accent-primary)]">projects</span>{" "}
            & digital experiences
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-5 max-w-2xl text-xs leading-[1.9] text-[var(--text-secondary)] sm:text-sm md:text-base">
            A collection of projects focused on responsive interfaces,
            interactive experiences, scalable frontend architecture, and
            practical full-stack development.
          </p>

          {/* META */}
          <div className="mt-6 flex items-center gap-3">
            <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--text-secondary)] sm:text-xs">
              {projects.length} Featured Projects
            </span>

            <span className="h-1 w-1 rounded-full bg-[var(--accent-primary)]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--text-secondary)]/60 sm:text-xs">
              Selected Work
            </span>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mt-14 w-full sm:mt-16 lg:mt-20">
        <MyWorks />
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Projects;