import React, { useState } from "react";
import { projects } from "../Utils/Projects";
import { useNavigate, useLocation } from "react-router-dom";

const MyWorks = ({ limit }) => {
  const [loadedImages, setLoadedImages] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  const visibleProjects = limit ? projects.slice(0, limit) : projects;

  const isHomePage = location.pathname === "/";

  return (
    <div className="bg-[var(--bg-main)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* PROJECT GRID */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => navigate(`/project/${project.id}`)}
              className="
                group cursor-pointer
                rounded-3xl border border-[var(--border-light)]/50
                bg-[var(--bg-secondary)]/80
                transition-all duration-500
                hover:bg-[var(--bg-secondary)]
              "
            >
              {/* IMAGE */}
              <div
                className="relative overflow-hidden rounded-2xl m-4
                h-[220px] sm:h-[280px] md:h-[320px] lg:h-[380px]"
              >
                {!loadedImages[project.id] && (
                  <div className="absolute inset-0 rounded-xl bg-[var(--border-light)] animate-pulse" />
                )}

                <img
                  src={project.thumbnail}
                  alt={project.title}
                  loading="lazy"
                  onLoad={() => handleImageLoad(project.id)}
                  className={`
                    w-full h-full object-contain rounded-xl
                    transition-opacity duration-500
                    ${loadedImages[project.id] ? "opacity-100" : "opacity-0"}
                  `}
                />
              </div>

              {/* CONTENT */}
              <div className="px-4 pb-5 flex items-start justify-between gap-4">
                <div>
                  <h2 className="heading-font text-lg sm:text-xl lg:text-2xl text-[var(--text-main)]">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-[var(--text-secondary)]/80">
                    {project.shortDescription}
                  </p>
                </div>

                <span className="text-xs sm:text-sm opacity-60 whitespace-nowrap">
                  {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* WATCH MORE — ONLY ON HOME PAGE */}
        {isHomePage && (
          <div className="flex justify-center mt-10 sm:mt-12">
            <button
              onClick={() => navigate("/projects")}
              className="
                px-8 sm:px-10 md:px-12
                py-3 sm:py-3.5 md:py-4
                rounded-full
                tracking-[0.12em]
                text-[10px] sm:text-xs uppercase
                border border-[var(--border-light)]
                backdrop-blur-md
                hover:bg-[var(--accent-primary)]/5
                hover:border-[var(--accent-primary)]/20
                transition-all duration-500
                active:scale-[0.98]
              "
            >
              Watch More
            </button>
          </div>
        )}

        {/* FOOTER NOTE */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-[var(--border-light)] text-center">
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] opacity-80">
            Interested in collaboration?{" "}
            <a
              href="/contact"
              className="text-[var(--accent-primary)] font-medium hover:underline"
            >
              Let&apos;s discuss your next project
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyWorks;
