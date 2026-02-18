import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../Utils/Projects";
import { ArrowLeft, ExternalLink } from "lucide-react";
import WorkBadge from "../Components/WorkBadge";
import Footer from "../layout/Footer";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((item) => item.id.toString() === id);

  const [loaded, setLoaded] = useState(false);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--text-main)]">
          Project not found
        </h2>
        <Link
          to="/projects"
          className="text-sm sm:text-base text-[var(--accent-primary)] hover:underline"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="bg-[var(--bg-main)] transition-colors duration-300 pt-25">
        {/* ================= HERO ================= */}
        <div className="relative overflow-hidden rounded-3xl bg-[var(--bg-gradient)]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-0 sm:py-0 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* LEFT CONTENT */}
            <div className="space-y-6">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm sm:text-base text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition"
              >
                <ArrowLeft size={16} />
                Back to Projects
              </Link>

              <div className="flex flex-wrap items-center gap-1">
                <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] font-medium">
                  {project.category}
                </span>
                <span className="text-xs sm:text-sm text-[var(--text-secondary)]">
                  {project.year}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl heading-font font-bold leading-tight text-[var(--text-main)]">
                {project.title}
              </h1>

              <p className="text-xs sm:text-xs md:text-sm text-[var(--text-secondary)] max-w-xl">
                {project.shortDescription}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-3 pt-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-1.5 text-xs sm:text-sm rounded-full border border-[var(--border-light)] bg-[var(--bg-main)]/60 backdrop-blur text-[var(--text-main)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA */}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 mt-6 px-6 py-3 rounded-full border border-[var(--border-light)] text-sm sm:text-base font-medium text-[var(--accent-primary)] hover:opacity-90 transition-all duration-300"
                >
                  <ExternalLink size={16} />
                  Live Preview
                </a>
              )}
            </div>
          </div>
        </div>
        {/* RIGHT IMAGE */}
        <div className="flex pt-10 justify-center items-center lg:justify-end">
          <div className="relative w-full max-w-md px-4 sm:max-w-lg lg:max-w-full overflow-hidden">
            {!loaded && (
              <div className="absolute inset-0 bg-[var(--border-light)]/30 animate-pulse rounded-2xl" />
            )}
            <img
              src={project.thumbnail}
              alt={project.title}
              className={`w-full h-auto sm:h-[320px] md:h-[380px] lg:h-[440px] object-contain object-top rounded-xl transition-opacity duration-500 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setLoaded(true)}
            />
          </div>
        </div>
        {/* ================= CONTENT ================= */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 space-y-20">
          {/* OVERVIEW */}
          <section>
            <h2 className="text-3xl sm:text-4xl md:text-5xl heading-font font-medium mb-4">
              Project{" "}
              <span className="text-[var(--accent-primary)]">Overview</span>
            </h2>
            <div className="w-16 h-[2px] bg-[var(--accent-primary)] mb-6" />
            <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed text-justify max-w-7xl">
              {project.description}
            </p>
          </section>

          {/* CORE FUNCTIONALITY */}
          <section className="grid lg:grid-cols-4 gap-10">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl heading-font font-medium">
                Core{" "}
                <span className="text-[var(--accent-primary)]">
                  Functionality
                </span>
              </h2>
              <div className="w-14 h-[2px] bg-[var(--accent-primary)] mt-3" />
            </div>

            <ul className="lg:col-span-3 space-y-0">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="p-4 sm:p-5 border-b border-[var(--border-light)] text-[var(--text-secondary)] leading-relaxed rounded-md hover:bg-[var(--bg-secondary)]/20 transition"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          {/* PROBLEM & SOLUTION */}
          <section className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl sm:text-3xl heading-font mb-3 text-[var(--text-main)]">
                Problem Statement
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                The goal was to design a modern, scalable project with clean UI,
                reusable components, and smooth user experience while keeping
                performance and maintainability in mind.
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl heading-font mb-3 text-[var(--text-main)]">
                Solution Approach
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                I implemented a component-driven architecture using React and
                Vite, leveraged Tailwind CSS for rapid UI development, and
                focused on clean separation of concerns for scalability.
              </p>
            </div>
          </section>

          {/* LEARNINGS */}
          <section>
            <h3 className="text-2xl sm:text-3xl heading-font mb-4">
              Key{" "}
              <span className="text-[var(--accent-primary)]">Learnings</span>
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
              This project strengthened my understanding of reusable component
              design, responsive layouts, UI consistency using CSS variables,
              and real-world project structuring suitable for production-ready
              applications.
            </p>
          </section>
        </div>
      </section>

      <WorkBadge />
      <Footer />
    </>
  );
};

export default ProjectDetails;
