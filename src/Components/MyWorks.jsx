import React from "react";
import { projects } from "../Utils/Projects";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import WorkBadge from "./WorkBadge";
import Footer from "../layout/Footer";

const MyWorks = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen bg-[var(--bg-main)] transition-colors duration-300">
        <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8 max-w-7xl">
          {/* HEADER SECTION */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-1 bg-[var(--accent-primary)] rounded-full" />
              <h2 className="text-xs uppercase tracking-widest text-[var(--accent-primary)] font-semibold">
                My Project Works
              </h2>
            </div>

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

          {/* PROJECT CARDS GRID */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 py-6">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => navigate(`/project/${project.id}`)}
                className="group bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300  "
              >
                {/* IMAGE CONTAINER */}
                <div className=" h-[300px] items-center flex justify-center">
                  <div className="relative h-[400px] md:h-56 w-[400px] overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className=" object-cover rounded-xl transition-all duration-500"
                    />
                  </div>
                </div>

                {/* CARD CONTENT */}
                <div className="p-5 md:p-6 flex flex-col gap-4">
                  {/* TITLE */}
                  <h3 className="text-xl font-bold text-[var(--text-main)] leading-tight group-hover:text-[var(--accent-primary)] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* SHORT DESCRIPTION */}
                  <p className="text-sm text-[var(--text-secondary)] opacity-90 leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-3 py-1.5 rounded-full bg-[var(--bg-main)] border border-[var(--border-light)] text-[var(--text-secondary)] font-medium hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-xs px-3 py-1.5 rounded-full bg-[var(--bg-main)] border border-[var(--border-light)] text-[var(--text-secondary)] font-medium">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* VIEW PROJECT CTA */}
                  <div className="pt-4 mt-2 border-t flex justify-between  border-[var(--border-light)]">
                    <button className="text-[var(--accent-primary)] text-sm font-semibold flex items-center gap-2 transition-all duration-300">
                      View Project Details
                      <span className="text-lg transition-transform duration-300">
                        →
                      </span>
                    </button>
                    {project.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <WorkBadge />
      <Footer />
    </>
  );
};

export default MyWorks;
