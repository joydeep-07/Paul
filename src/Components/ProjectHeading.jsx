import React from 'react'
import { projects } from '../Utils/Projects';
const ProjectHeading = () => {
  return (
    <div className=" flex justify-center flex-col items-center bg-[var(--bg-main)]">
      <div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 px-6 w-7xl md:mb-20 lg:mb-5"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full" />
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent-primary)] font-medium">
            Portfolio Showcase
          </span>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl heading-font md:text-5xl lg:text-6xl leading-tight mb-2">
            Creating{" "}
            <span className="text-[var(--accent-primary)] bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
              Next level
            </span>{" "}
            digital products
          </h1>

          <p className="text-[var(--text-secondary)] text-base md:text-sm max-w-sm opacity-90 max-w-xl leading-relaxed">
            Each project is unique, and I follow a structured approach to turn
            ideas into seamless user experiences.
          </p>
        </div>

        <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)]">
          <div className="flex items-center gap-2">
            <span>{projects.length} Featured Projects</span>
          </div>
          <div className="w-1 h-1 bg-[var(--border-light)] rounded-full" />
          <span>Updated Recently</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectHeading