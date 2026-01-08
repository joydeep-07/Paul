import React from 'react'

const ProjectTitle = ({name, description}) => {
  return (
    <div>
      <div className="max-w-xl">
        <h3 className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em] opacity-70">
         PROJECT SHOWCASE
        </h3>

        <div className="mt-2 mb-6 h-[2px] w-24 bg-[var(--accent-primary)] rounded-full" />

        <h1 className="heading-font text-3xl sm:text-4xl md:text-5xl leading-snug">
         {name}
        </h1>

        <p className="mt-4 text-xs sm:text-sm text-[var(--text-secondary)]/80 max-w-xl">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProjectTitle