import React, { useRef } from "react";
import MyWorks from "../Components/MyWorks";
import Footer from "../layout/Footer";
import { projects } from "../Utils/Projects";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Projects = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.config({ force3D: true });

      // 1. Set Initial States
      gsap.set(".projects-text-reveal", {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        x: -30,
        opacity: 0,
      });

      gsap.set(".projects-accent-line", {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(".projects-meta-reveal", {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        x: -20,
        opacity: 0,
      });

      // 2. Build Entrance Timeline
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl
        // Reveal Top Label & Draw Accent Line
        .to(".projects-text-reveal-top", {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          x: 0,
          opacity: 1,
          duration: 0.8,
        })
        .to(
          ".projects-accent-line",
          {
            scaleX: 1,
            duration: 0.6,
            ease: "power2.inOut",
          },
          "-=0.5",
        )
        // Reveal Main Heading & Paragraph
        .to(
          ".projects-text-reveal",
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            x: 0,
            opacity: 1,
            duration: 1.0,
            stagger: 0.1,
          },
          "-=0.4",
        )
        // Reveal Meta Info (Featured Projects + Selected Work)
        .to(
          ".projects-meta-reveal",
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            x: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.08,
          },
          "-=0.5",
        );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="w-full bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300 overflow-hidden"
    >
      {/* HEADER */}
      <section className="mx-auto max-w-8xl px-4 pt-24 sm:px-6 sm:pt-28 md:px-12 lg:pt-32">
        <div className="max-w-4xl">
          {/* LABEL */}
          <div className="flex items-center gap-3 py-1 overflow-hidden">
            <span className="projects-text-reveal-top text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs transform-gpu will-change-[transform,clip-path,opacity]">
              Portfolio
            </span>

            <span className="projects-accent-line h-px w-10 bg-[var(--accent-primary)] sm:w-12 transform-gpu will-change-[transform]" />
          </div>

          {/* HEADING */}
          <div className="overflow-hidden py-1">
            <h1 className="projects-text-reveal heading-font mt-5 text-3xl leading-[1.15] text-[var(--text-main)] sm:text-4xl md:text-5xl lg:text-5xl transform-gpu will-change-[transform,clip-path,opacity]">
              Selected{" "}
              <span className="text-[var(--accent-primary)]">projects</span> &
              digital experiences
            </h1>
          </div>

          {/* DESCRIPTION */}
          <div className="overflow-hidden py-1">
            <p className="projects-text-reveal mt-5 max-w-2xl text-xs leading-[1.9] text-[var(--text-secondary)] sm:text-sm md:text-base transform-gpu will-change-[transform,clip-path,opacity]">
              A collection of projects focused on responsive interfaces,
              interactive experiences, scalable frontend architecture, and
              practical full-stack development.
            </p>
          </div>

          {/* META */}
          <div className="mt-6 flex items-center gap-3">
            <span className="projects-meta-reveal text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--text-secondary)] sm:text-xs transform-gpu will-change-[transform,clip-path,opacity]">
              {projects.length} Featured Projects
            </span>

            <span className="projects-meta-reveal h-1 w-1 rounded-full bg-[var(--accent-primary)] transform-gpu will-change-[transform,clip-path,opacity]" />

            <span className="projects-meta-reveal text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--text-secondary)]/60 sm:text-xs transform-gpu will-change-[transform,clip-path,opacity]">
              Selected Work
            </span>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mt-14 w-full sm:mt-16 lg:mt-20">
        <MyWorks />
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Projects;
