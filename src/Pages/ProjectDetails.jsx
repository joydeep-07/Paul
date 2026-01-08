import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../Utils/Projects";
import { ArrowLeft, ExternalLink } from "lucide-react";
import WorkBadge from "../Components/WorkBadge";
import Footer from "../layout/Footer";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((item) => item.id.toString() === id);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-semibold text-[var(--text-main)]">
          Project not found
        </h2>
        <Link
          to="/projects"
          className="text-sm text-[var(--accent-primary)] hover:underline"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="relative">
        {/* ================= HERO ================= */}
        <div className="relative overflow-hidden rounded-3xl bg-[var(--bg-gradient)]">
          <div className="relative max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-14 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-6">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition"
              >
                <ArrowLeft size={16} />
                Back to projects
              </Link>

              <div className="flex items-center gap-4">
                <span className="px-3 py-1 text-xs rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] font-medium">
                  {project.category}
                </span>
                <span className="text-sm text-[var(--text-secondary)]">
                  {project.year}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl heading-font font-bold leading-tight text-[var(--text-main)]">
                {project.title}
              </h1>

              <p className="text-lg text-[var(--text-secondary)] max-w-xl">
                {project.shortDescription}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-3 pt-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-1.5 text-xs rounded-full border border-[var(--border-light)] bg-[var(--bg-main)]/60 backdrop-blur text-[var(--text-main)]"
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
                  className="inline-flex items-center justify-center gap-2 mt-6 px-6 py-3 rounded-full border border-[var(--border-light)] text-sm font-medium text-[var(--accent-primary)] hover:opacity-90 transition"
                >
                  <ExternalLink size={16} />
                  Live Preview
                </a>
              )}
            </div>

            {/* RIGHT IMAGE */}
            <div className="p-5 rounded-2xl bg-[var(--bg-gradient)]">
              <div className="relative rounded-2xl h-[360px] overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
          {/* OVERVIEW */}
          <section>
            <h2 className="text-5xl heading-font font-medium mb-4">
              Project{" "}
              <span className="text-[var(--accent-primary)]">Overview</span>
            </h2>
            <div className="w-16 h-[2px] bg-[var(--accent-primary)] mb-6" />
            <p className="text-[var(--text-secondary)] leading-relaxed text-justify max-w-3xl">
              {project.description}
            </p>
          </section>

          {/* CORE FUNCTIONALITY */}
          <section className="grid lg:grid-cols-4 gap-10">
            <div>
              <h2 className="text-4xl heading-font font-medium">
                Core{" "}
                <span className="text-[var(--accent-primary)]">
                  Functionality
                </span>
              </h2>
              <div className="w-14 h-[2px] bg-[var(--accent-primary)] mt-3" />
            </div>

            <ul className="lg:col-span-3 space-y-4">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="p-5 border-b border-[var(--border-light)] text-[var(--text-secondary)] leading-relaxed"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          {/* PROBLEM & SOLUTION */}
          <section className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl heading-font mb-3 text-[var(--text-main)]">
                Problem Statement
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                The goal was to design a modern, scalable project with clean UI,
                reusable components, and smooth user experience while keeping
                performance and maintainability in mind.
              </p>
            </div>

            <div>
              <h3 className="text-3xl heading-font mb-3 text-[var(--text-main)]">
                Solution Approach
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                I implemented a component-driven architecture using React and
                Vite, leveraged Tailwind CSS for rapid UI development, and
                focused on clean separation of concerns for scalability.
              </p>
            </div>
          </section>

          {/* LEARNINGS */}
          <section>
            <h3 className="text-3xl heading-font mb-4">
              Key{" "}
              <span className="text-[var(--accent-primary)]">Learnings</span>
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed max-w-3xl">
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
