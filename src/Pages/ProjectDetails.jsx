import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../Utils/Projects";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
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
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="relative">
        {/* HERO */}
        <div className="relative overflow-hidden rounded-3xl bg-[var(--bg-gradient)]">
          <div className="absolute inset-0 " />

          <div className="relative max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div className="space-y-6">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition"
              >
                <ArrowLeft size={16} />
                Back to projects
              </Link>

              <div className="flex items-center gap-3">
                <span className="px-3 py-1 text-xs rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] font-medium">
                  {project.category}
                </span>
                <span className="text-sm text-[var(--text-secondary)]">
                  {project.year}
                </span>
              </div>

              <h1 className="text-4xl heading-font md:text-5xl font-bold text-[var(--accent-primary)] leading-tight">
                {project.title}
              </h1>

              <p className="text-lg text-[var(--text-secondary)] max-w-xl">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 text-xs rounded-full border border-[var(--border-light)] bg-[var(--bg-main)]/60 backdrop-blur text-[var(--text-main)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button>
                <div className="flex flex-col gap-3 pt-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex px-5 items-center justify-center gap-2 rounded-full text-[var(--accent-primary)] border border-[var(--border-light)]  py-3 text-sm font-medium hover:opacity-90 transition"
                    >
                      <ExternalLink size={16} />
                      Live Preview
                    </a>
                  )}
                </div>
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className=" p-5 [background:var(--bg-gradient)] rounded-2xl ">
              <div className="relative rounded-2xl h-[350px] overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid gap-12">
            {/* MAIN CONTENT */}
            <div className=" space-y-14">
              {/* OVERVIEW */}
              <section className="relative">
                <h2 className="text-5xl heading-font font-medium text-[var(--text-main)] mb-4">
                  At a{" "}
                  <span className="text-[var(--accent-primary)]">Glance</span>
                </h2>

                <div className="w-14 h-[2px] bg-[var(--accent-primary)] mb-6" />

                <p className="text-[var(--text-secondary)] text-justify leading-relaxed text-base">
                  {project.description}
                </p>
              </section>

              {/* FEATURES */}
              <section className="space-y-6 flex w-7xl justify-between ">
                <div className="w-1/4">
                  <h2 className="text-5xl heading-font font-medium pb-2 text-[var(--text-main)]">
                    Core <span className="text-[var(--accent-primary)]">Functionality</span>
                  </h2>

                  <div className="w-14 h-[2px] bg-[var(--accent-primary)]" />
                </div>

                <div className="w-3/4">
                  <ul className=" gap-5">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="
                group
                p-5
              
                
                border-b border-[var(--border-light)]
                text-[var(--text-secondary)]
                transition-all
                duration-300
                
          
              "
                      >
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <WorkBadge />
      <Footer />
    </>
  );
};

export default ProjectDetails;
