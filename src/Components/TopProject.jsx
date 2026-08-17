import React, { useState } from "react";
import second from "../assets/thumbnail/neurocare.png";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const TopProject = () => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  const project = {
    title: "AI Powered Healthcare Platform",
    shortDescription:
      "An AI-powered healthcare platform that connects patients with suitable doctors through intelligent symptom analysis, specialization-based recommendations, location-aware discovery, and streamlined appointment management.",
    year: "2026",
    thumbnail: second,
  };

  const handleNavigation = () => {
    navigate("/project/neurocare");
  };

  const handleProjects = () => {
    navigate("/projects");
  };

  return (
    <section className="w-full bg-[var(--bg-main)] py-0 pb-10 md:pb-0 transition-colors duration-300">
      <div className="mx-auto max-w-8xl px-4 md:px-12">
        {/* HEADER */}
        <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-20">
          {/* LEFT */}
          <div className="lg:col-span-7 hidden md:flex flex-col">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs">
                Project Showcase
              </span>

              <span className="h-px w-10 bg-[var(--accent-primary)] sm:w-12" />
            </div>

            <p className="max-w-md text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
              A selection of work that reflects my approach to design,
              development, interaction, and creating meaningful digital
              experiences.
            </p>
          </div>

          <div className="md:hidden lg:col-span-5">
            <div>
              <h2 className="heading-font text-2xl text-[var(--text-main)] sm:text-3xl">
                Featured{" "}
                <span className="text-[var(--accent-primary)]">project</span>
              </h2>

              <p className="mt-2 max-w-sm text-xs leading-relaxed text-[var(--text-secondary)]">
                A closer look at one of my projects, its purpose, technology,
                and the decisions behind its implementation.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden border-l border-[var(--border-light)] pl-10 md:flex lg:col-span-5">
            <div>
              <h2 className="heading-font text-2xl text-[var(--text-main)] sm:text-3xl">
                Featured{" "}
                <span className="text-[var(--accent-primary)]">project</span>
              </h2>

              <p className="mt-2 max-w-sm text-xs leading-relaxed text-[var(--text-secondary)]">
                A closer look at one of my projects, its purpose, technology,
                and the decisions behind its implementation.
              </p>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          {/* LEFT — ORIGINAL CARD */}
          <div className="lg:col-span-7">
            <div
              onClick={handleNavigation}
              className="group cursor-pointer rounded-sm md:rounded-2xl md:border border-[var(--border-light)]/50 md:bg-[var(--bg-secondary)]/80 shadow-sm"
            >
              {/* IMAGE */}
              <div className="relative md:m-5 overflow-hidden rounded-sm md:rounded-xl">
                {!loaded && (
                  <div className="absolute inset-0 rounded-sm md:rounded-xl bg-[var(--border-light)] animate-pulse" />
                )}

                <img
                  src={project.thumbnail}
                  alt={project.title}
                  loading="lazy"
                  onLoad={() => setLoaded(true)}
                  className={`h-full w-full rounded-sm md:rounded-xl object-contain transition-all duration-700 ease-out ${
                    loaded ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>

              {/* CARD CONTENT */}
              <div className="flex items-start justify-between gap-4 md:px-6 pt-6 md:pt-0 pb-6">
                <div className="w-full">
                  {/* TITLE + YEAR */}
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="heading-font text-lg text-[var(--text-main)] transition-colors duration-300 sm:text-xl lg:text-2xl">
                      {project.title}
                    </h2>

                    <span className="shrink-0 whitespace-nowrap text-[10px] font-medium uppercase tracking-wide text-[var(--text-main)] opacity-50 sm:text-xs">
                      {project.year}
                    </span>
                  </div>

                  {/* FULL WIDTH DESCRIPTION */}
                  <p className="mt-2 w-full text-justify text-xs line-clamp-2 leading-relaxed text-[var(--text-secondary)]/80 sm:text-sm">
                    {project.shortDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — TEXT AREA */}
          <div className="lg:col-span-5 lg:border-l lg:border-[var(--border-light)] lg:pl-10">
            {/* MOBILE HEADING */}
            {/* <div className="mb-8 border border-blue-500 md:hidden">
              <div className="mb-3 flex items-center gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)]">
                  Featured Project
                </span>

                <span className="h-px w-8 bg-[var(--accent-primary)]" />
              </div>

              <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                The idea, technology, and implementation behind the project.
              </p>
            </div> */}

            {/* <div className="md:hidden pb-10 lg:col-span-5">
              <div>
                <h2 className="heading-font text-2xl text-[var(--text-main)] sm:text-3xl">
                  Featured{" "}
                  <span className="text-[var(--accent-primary)]">project</span>
                </h2>

                <p className="mt-2 max-w-sm text-xs leading-relaxed text-[var(--text-secondary)]">
                  A closer look at one of my projects, its purpose, technology,
                  and the decisions behind its implementation.
                </p>
              </div>
            </div> */}

            <div className="lg:col-span-7 pb-8 md:hidden">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs">
                  Project Showcase
                </span>

                <span className="h-px w-10 bg-[var(--accent-primary)] sm:w-12" />
              </div>

              <p className="max-w-md text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                A selection of work that reflects my approach to design,
                development, interaction, and creating meaningful digital
                experiences.
              </p>
            </div>

            {/* CONSTRAINED TEXT WIDTH */}
            <div className="max-w-md">
              <h3 className="heading-font text-2xl leading-tight tracking-tight text-[var(--text-main)] md:text-4xl">
                Why this project{" "}
                <span className="text-[var(--accent-primary)]">stands out</span>
              </h3>

              <p className="mt-6 text-justify text-sm leading-[1.9] text-[var(--text-secondary)]">
                Bharat Vraman is a modern React.js web application designed to
                help users explore famous temples across India. The platform
                presents temples through a clean and responsive interface, with
                dedicated detail pages containing information such as deity,
                history, timings, location, and cultural significance.
              </p>

              <p className="mt-5 text-justify text-sm leading-[1.9] text-[var(--text-secondary)]">
                The project focuses on creating a simple discovery experience
                while maintaining reusable components, responsive layouts,
                dynamic routing, and smooth interactions throughout the
                application.
              </p>

              {/* FEATURES */}
              <div className="mt-8 ">
                {[
                  "Patient, Doctor & Admin role-based system",
                  "Email OTP & Google OAuth authentication",
                  "AI-powered symptom analysis & specialist recommendations",
                  "Appointment booking with admin approval & scheduling",
                  "Digital prescriptions, medical reports & family profiles",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3  py-3">
                    <span className="text-xs font-medium text-[var(--accent-primary)]">
                      0{index + 1}
                    </span>

                    <span className="text-xs text-[var(--text-secondary)] sm:text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* ACTIONS */}
              <div className="mt-8 flex items-center gap-6">
                <button
                  type="button"
                  onClick={handleNavigation}
                  className="cursor-pointer text-xs flex items-center font-medium uppercase tracking-[0.15em] text-[var(--text-main)] transition-colors duration-300 hover:text-[var(--accent-primary)]"
                >
                  View Project
                  <span className="ml-2 text-[var(--accent-primary)]">
                    <ChevronRight size={14} />
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleProjects}
                  className="cursor-pointer text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--accent-primary)]"
                >
                  All Projects
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-14 border-t border-[var(--border-light)] pt-6">
          <p className="text-xs text-center md:text-left text-[var(--text-secondary)] sm:text-sm">
            Interested in collaboration?{" "}
            <Link
              to="/contact"
              className="font-medium text-[var(--accent-primary)] transition-opacity hover:opacity-70"
            >
              Let&apos;s discuss your next project
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopProject;
