import React from "react";
import {
  FaSearch,
  FaPenNib,
  FaPalette,
  FaProjectDiagram,
  FaHandshake,
} from "react-icons/fa";

const steps = [
  {
    id: "01",
    icon: FaSearch,
    title: "Research",
    description:
      "Understand the problem, requirements, users, project goals, and technical constraints.",
  },
  {
    id: "02",
    icon: FaPenNib,
    title: "Planning",
    description:
      "Structure the content, user flow, components, and technical approach.",
  },
  {
    id: "03",
    icon: FaPalette,
    title: "Design",
    description:
      "Define the visual system, layout, typography, interactions, and hierarchy.",
  },
  {
    id: "04",
    icon: FaProjectDiagram,
    title: "Development",
    description:
      "Build responsive, reusable, and maintainable components with clean code.",
  },
  {
    id: "05",
    icon: FaHandshake,
    title: "Refinement",
    description:
      "Test, optimize, fix inconsistencies, and improve the final experience.",
  },
];

const DesignProcess = () => {
  return (
    <section className="w-full bg-[var(--bg-main)] py-12 transition-colors duration-300 sm:py-16 md:py-20">
      <div className="mx-auto max-w-8xl px-4 md:px-12">
        {/* MAIN HEADING */}
        <div className="mb-12 max-w-3xl sm:mb-14">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs">
              My Process
            </span>

            <span className="h-px w-10 bg-[var(--accent-primary)] sm:w-12" />
          </div>

          <h2 className="heading-font mt-5 text-3xl leading-tight text-[var(--text-main)] sm:text-4xl md:text-4xl">
            How I Turn Ideas Into{" "}
            <span className="text-[var(--accent-primary)]">
              Digital Products
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
            A structured workflow helps me move from an initial concept to a
            polished digital experience while keeping usability, performance,
            responsiveness, and code quality in focus.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-20">
          {/* LEFT — PROCESS */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.id}
                    className="group rounded-sm border border-[var(--border-light)] bg-[var(--bg-secondary)] p-3.5 transition-all duration-300 hover:border-[var(--accent-primary)]/40 sm:rounded-md sm:p-4"
                  >
                    {/* TOP */}
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-medium tracking-[0.15em] text-[var(--accent-primary)] sm:text-[10px]">
                        {String(step.id).padStart(2, "0")}
                      </span>

                      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[var(--border-light)] text-[var(--text-secondary)] transition-all duration-300 group-hover:border-[var(--accent-primary)]/40 group-hover:text-[var(--accent-primary)] sm:h-7 sm:w-7">
                        <Icon className="text-[10px] sm:text-xs" />
                      </div>
                    </div>

                    {/* TITLE */}
                    <h3 className="heading-font mt-4 text-sm leading-tight text-[var(--text-main)] sm:mt-5 sm:text-base">
                      {step.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-2 text-[10px] leading-[1.7] text-[var(--text-secondary)] sm:text-xs">
                      {step.description}
                    </p>

                    {/* STAGE */}
                    <div className="mt-4 flex items-center gap-1.5 sm:mt-5 sm:gap-2">
                      <span className="h-px w-4 bg-[var(--accent-primary)] sm:w-6" />

                      <span className="text-[7px] uppercase tracking-[0.15em] text-[var(--text-secondary)]/60 sm:text-[9px]">
                        Stage {step.id}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* RIGHT — SUPPORTING CONTENT */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs">
                Approach
              </span>

              <span className="h-px w-10 bg-[var(--accent-primary)]" />
            </div>

            <h3 className="heading-font mt-5 text-2xl leading-tight text-[var(--text-main)] sm:text-3xl">
              Structured thinking,
              <br />
              <span className="text-[var(--accent-primary)]">
                purposeful execution.
              </span>
            </h3>

            <p className="mt-5 max-w-full text-justify text-xs leading-[1.9] text-[var(--text-secondary)] sm:text-sm">
              Every project starts with understanding what needs to be solved. I
              break the idea into clear requirements, define the user flow, and
              establish a technical direction before moving into implementation.
            </p>

            <p className="mt-5 max-w-full text-justify text-xs leading-[1.9] text-[var(--text-secondary)] sm:text-sm">
              During development, I focus on reusable components, responsive
              layouts, clean architecture, performance, and meaningful
              interactions. The final stage is dedicated to testing and
              refinement.
            </p>

            {/* META */}
            <div className="mt-8 border-y uppercase border-[var(--border-light)]">
              {/* BACKEND */}
              <div className="flex items-center justify-between gap-4 border-t border-[var(--border-light)] py-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                  Backend
                </span>

                <span className="text-right text-xs font-medium text-[var(--text-main)]">
                  API / Database / Server
                </span>
              </div>

              {/* AUTHENTICATION */}
              <div className="flex items-center justify-between gap-4 border-t border-[var(--border-light)] py-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                  Authentication
                </span>

                <span className="text-right text-xs font-medium text-[var(--text-main)]">
                  OTP / OAuth / Token-based
                </span>
              </div>

              {/* TESTING */}
              <div className="flex items-center justify-between gap-4 border-t border-[var(--border-light)] py-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                  Testing
                </span>

                <span className="text-right text-xs font-medium text-[var(--text-main)]">
                  API / Authentication / UI
                </span>
              </div>

              {/* QUALITY */}
              <div className="flex items-center justify-between gap-4 border-t border-[var(--border-light)] py-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                  Quality
                </span>

                <span className="text-right text-xs font-medium text-[var(--text-main)]">
                  Performance / Responsiveness
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
