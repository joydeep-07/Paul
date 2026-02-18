import React from "react";

const ProjectHeading = ({ small, heading, desc }) => {
  return (
    <div className="flex justify-center flex-col items-center bg-[var(--bg-main)] w-full">
      <div className="mb-8 px-4 w-full max-w-7xl md:mb-16 lg:mb-5 sm:px-6 md:px-8 lg:px-0">
        {/* Small Label */}
        {small && (
          <div className="mb-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] opacity-70">
              {small}
            </h3>
            <div className="mt-2 mb-6 h-[2px] w-24 bg-[var(--accent-primary)] rounded-full" />
          </div>
        )}

        {/* Heading */}
        <div className="mb-6 sm:mb-7 md:mb-8">
          {heading ? (
            heading
          ) : (
            <h1 className="text-2xl heading-font sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-2">
              Featured{" "}
              <span className="text-[var(--accent-primary)] bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                Project
              </span>
            </h1>
          )}

          {desc && (
            <p className="text-[var(--text-secondary)] text-sm sm:text-base md:text-lg lg:text-sm max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl opacity-90 leading-relaxed mt-2 sm:mt-3">
              {desc}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectHeading;
