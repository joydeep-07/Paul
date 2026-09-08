import React, { useRef } from "react";
import {
  FaSearch,
  FaPenNib,
  FaPalette,
  FaProjectDiagram,
  FaHandshake,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.config({ force3D: true });

      // 1. Initial State Setup using percentage strings
      gsap.set(".border-path", {
        strokeDasharray: "100%",
        strokeDashoffset: "100%",
      });

      gsap.set(".slide-text-left", {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        x: -30,
        opacity: 0,
      });

      gsap.set(".step-card", {
        opacity: 0,
      });

      // 2. Main Timeline Sequence
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      mainTl
        // Reveal Headings & Text Blocks
        .to(".slide-text-left", {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          x: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.08,
        })
        // Fade Step Cards in place
        .to(
          ".step-card",
          {
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.7",
        )
        // Partial SVG Border Drawing Effect (45% line visible on all screen sizes)
        .to(
          ".border-path",
          {
            strokeDashoffset: "55%",
            duration: 1.3,
            ease: "power2.inOut",
            stagger: 0.08,
          },
          "-=0.8",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-[var(--bg-main)] py-12 transition-colors duration-300 sm:py-16 md:py-20 overflow-hidden"
    >
      <div className="mx-auto max-w-8xl px-4 md:px-12">
        {/* MAIN HEADING */}
        <div className="mb-12 max-w-3xl sm:mb-14">
          <div className="flex items-center gap-3 overflow-hidden py-1">
            <span className="slide-text-left text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs transform-gpu will-change-[transform,clip-path,opacity]">
              My Process
            </span>

            <span className="h-px w-10 bg-[var(--accent-primary)] sm:w-12" />
          </div>

          <div className="overflow-hidden py-1">
            <h2 className="slide-text-left heading-font mt-5 text-3xl leading-tight text-[var(--text-main)] sm:text-4xl md:text-4xl transform-gpu will-change-[transform,clip-path,opacity]">
              How I Turn Ideas Into{" "}
              <span className="text-[var(--accent-primary)]">
                Digital Products
              </span>
            </h2>
          </div>

          <div className="overflow-hidden py-1">
            <p className="slide-text-left mt-4 max-w-2xl text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm transform-gpu will-change-[transform,clip-path,opacity]">
              A structured workflow helps me move from an initial concept to a
              polished digital experience while keeping usability, performance,
              responsiveness, and code quality in focus.
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-20">
          {/* LEFT — PROCESS CARDS */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.id}
                    className="step-card relative rounded-sm sm:rounded-md transform-gpu will-change-[opacity]"
                  >
                    {/* SVG Border Drawing Effect */}
                    <svg
                      className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <rect
                        x="1"
                        y="1"
                        width="calc(100% - 2px)"
                        height="calc(100% - 2px)"
                        rx="4"
                        ry="4"
                        className="border-path stroke-[var(--accent-primary)]"
                        strokeWidth="1.5"
                      />
                    </svg>

                    <div className="group relative z-0 h-full rounded-sm border border-[var(--border-light)] bg-[var(--bg-secondary)] p-3.5 transition-all duration-300 hover:border-[var(--accent-primary)]/40 sm:rounded-md sm:p-4">
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
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — SUPPORTING CONTENT */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 overflow-hidden py-1">
              <span className="slide-text-left text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs transform-gpu will-change-[transform,clip-path,opacity]">
                Approach
              </span>

              <span className="h-px w-10 bg-[var(--accent-primary)]" />
            </div>

            <div className="overflow-hidden py-1">
              <h3 className="slide-text-left heading-font mt-5 text-2xl leading-tight text-[var(--text-main)] sm:text-3xl transform-gpu will-change-[transform,clip-path,opacity]">
                Structured thinking,
                <br />
                <span className="text-[var(--accent-primary)]">
                  purposeful execution.
                </span>
              </h3>
            </div>

            <div className="overflow-hidden py-1">
              <p className="slide-text-left mt-5 max-w-full text-justify text-xs leading-[1.9] text-[var(--text-secondary)] sm:text-sm transform-gpu will-change-[transform,clip-path,opacity]">
                Every project starts with understanding what needs to be solved.
                I break the idea into clear requirements, define the user flow,
                and establish a technical direction before moving into
                implementation.
              </p>
            </div>

            <div className="overflow-hidden py-1">
              <p className="slide-text-left mt-5 max-w-full text-justify text-xs leading-[1.9] text-[var(--text-secondary)] sm:text-sm transform-gpu will-change-[transform,clip-path,opacity]">
                During development, I focus on reusable components, responsive
                layouts, clean architecture, performance, and meaningful
                interactions. The final stage is dedicated to testing and
                refinement.
              </p>
            </div>

            {/* META ITEMS */}
            <div className="mt-8 border-y uppercase border-[var(--border-light)]">
              {[
                { label: "Backend", value: "API / Database / Server" },
                {
                  label: "Authentication",
                  value: "OTP / OAuth / Token-based",
                },
                { label: "Testing", value: "API / Authentication / UI" },
                { label: "Quality", value: "Performance / Responsiveness" },
              ].map((meta, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden py-1 border-t border-[var(--border-light)] first:border-t-0"
                >
                  <div className="slide-text-left flex items-center justify-between gap-4 py-3 transform-gpu will-change-[transform,clip-path,opacity]">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                      {meta.label}
                    </span>

                    <span className="text-right text-xs font-medium text-[var(--text-main)]">
                      {meta.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
