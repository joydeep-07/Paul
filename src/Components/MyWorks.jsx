import React from "react";
import { projects } from "../Utils/Projects";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";

const MyWorks = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center p-6">
      <div className="w-7xl flex flex-col gap-6 sm:gap-8 lg:gap-10">
        {/* HEADER */}
        <div className="pt-8 h-fit self-start">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-[var(--accent-primary)]" />
            <h2 className="text-xs uppercase tracking-widest text-[var(--accent-primary)]">
              My Project Works
            </h2>
          </div>

          <h1 className="heading-font text-4xl md:text-5xl leading-tight">
            Creating{" "}
            <span className="text-[var(--accent-primary)]">Next level</span>{" "}
            digital products
          </h1>

          <p className="mt-4 text-[var(--text-secondary)] text-sm opacity-80 max-w-sm">
            Each project is unique, and I follow a structured approach to turn
            ideas into seamless user experiences.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid gap-6 md:grid-cols-2 py-10">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => navigate(`/project/${project.id}`)}
              className="group border border-[var(--border-primary)] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* IMAGE */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* YEAR BADGE */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                  <FaCalendarAlt size={12} />
                  {project.year}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col gap-3">
                {/* CATEGORY + STATUS */}
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-3 py-1 rounded-full border text-[var(--accent-primary)]">
                    {project.category}
                  </span>
                  <span className="text-[var(--text-secondary)]">
                    {project.status}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold leading-snug">
                  {project.title}
                </h3>

                {/* SHORT DESCRIPTION */}
                <p className="text-sm text-[var(--text-secondary)] line-clamp-2">
                  {project.shortDescription}
                </p>

                {/* TECH STACK (LIMITED) */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-[var(--bg-secondary)] border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWorks;
