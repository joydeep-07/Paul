import React, { useState, useRef } from "react";
import second from "../assets/thumbnail/neurocare.png";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const TopProject = () => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef(null);

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

  useGSAP(
    () => {
      gsap.config({ force3D: true });

      // 1. Initial State Setup
      // Top header titles / descriptions slide UP & reveal via clip-path
      gsap.set(".mask-text", {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        y: 30,
      });

      // SVG accent border outline setup
      gsap.set(".border-path", {
        strokeDasharray: 1000,
        strokeDashoffset: 1000,
      });

      // All paragraph & heading text on the right side: initial left-to-right slide state
      gsap.set(".slide-text-left", {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        x: -40,
        opacity: 0,
      });

      // Features list: magnetic left-to-right slide setup
      gsap.set(".magnetic-feature", {
        x: -40,
        opacity: 0,
      });

      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "expo.out" },
      });

      // 2. Timeline Sequence
      mainTl
        // Header Text Mask Animation
        .to(".mask-text", {
          clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
          y: 0,
          duration: 1.2,
          stagger: 0.15,
        })
        // Draw Card Accent SVG Border
        .to(
          ".border-path",
          {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power2.inOut",
          },
          "-=0.9",
        )
        // Reveal All Paragraphs / Section Titles with Left-to-Right Slide Animation
        .to(
          ".slide-text-left",
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            x: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.12,
          },
          "-=1.0",
        )
        // Feature List Items Left-to-Right Magnetic Animation
        .to(
          ".magnetic-feature",
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: "back.out(1.4)",
          },
          "-=0.8",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-[var(--bg-main)] py-0 pb-10 md:pb-0 transition-colors duration-300 overflow-hidden"
    >
      <div className="mx-auto max-w-8xl px-4 md:px-12">
        {/* HEADER */}
        <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7 hidden md:flex flex-col">
            <div className="mb-4 flex items-center gap-3 overflow-hidden">
              <span className="slide-text-left text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs transform-gpu will-change-[transform,clip-path,opacity]">
                Project Showcase
              </span>
              <span className="h-px w-10 bg-[var(--accent-primary)] sm:w-12" />
            </div>

            <div className="overflow-hidden">
              <p className="slide-text-left max-w-md text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm transform-gpu will-change-[transform,clip-path,opacity]">
                A selection of work that reflects my approach to design,
                development, interaction, and creating meaningful digital
                experiences.
              </p>
            </div>
          </div>

          <div className="md:hidden lg:col-span-5">
            <div className="overflow-hidden">
              <h2 className="slide-text-left heading-font text-2xl text-[var(--text-main)] sm:text-3xl transform-gpu will-change-[transform,clip-path,opacity]">
                Featured{" "}
                <span className="text-[var(--accent-primary)]">project</span>
              </h2>
              <p className="slide-text-left mt-2 max-w-sm text-xs leading-relaxed text-[var(--text-secondary)] transform-gpu will-change-[transform,clip-path,opacity]">
                A closer look at one of my projects, its purpose, technology,
                and the decisions behind its implementation.
              </p>
            </div>
          </div>

          <div className="hidden border-l border-[var(--border-light)] pl-10 md:flex lg:col-span-5">
            <div className="overflow-hidden">
              <h2 className="slide-text-left heading-font text-2xl text-[var(--text-main)] sm:text-3xl transform-gpu will-change-[transform,clip-path,opacity]">
                Featured{" "}
                <span className="text-[var(--accent-primary)]">project</span>
              </h2>
              <p className="slide-text-left mt-2 max-w-sm text-xs leading-relaxed text-[var(--text-secondary)] transform-gpu will-change-[transform,clip-path,opacity]">
                A closer look at one of my projects, its purpose, technology,
                and the decisions behind its implementation.
              </p>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          {/* LEFT — BORDER DRAW CARD */}
          <div className="lg:col-span-7">
            <div className="card-3d-wrapper relative transform-gpu">
              {/* SVG Border Effect */}
              <svg
                className="pointer-events-none absolute -inset-1 h-[calc(100%+8px)] w-[calc(100%+8px)] rounded-2xl z-10"
                fill="none"
              >
                <rect
                  width="100%"
                  height="100%"
                  rx="16"
                  className="border-path stroke-[var(--accent-primary)] stroke-[3]"
                />
              </svg>

              <div
                onClick={handleNavigation}
                className="group cursor-pointer rounded-sm md:rounded-2xl md:border border-[var(--border-light)]/50 md:bg-[var(--bg-secondary)]/80 md:shadow-sm"
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
                    <div className="flex items-start justify-between gap-4 overflow-hidden">
                      <h2 className="slide-text-left heading-font text-lg text-[var(--text-main)] transition-colors duration-300 sm:text-xl lg:text-2xl transform-gpu will-change-[transform,clip-path,opacity]">
                        {project.title}
                      </h2>

                      <span className="slide-text-left shrink-0 whitespace-nowrap text-[10px] font-medium uppercase tracking-wide text-[var(--text-main)] opacity-50 sm:text-xs transform-gpu will-change-[transform,clip-path,opacity]">
                        {project.year}
                      </span>
                    </div>

                    <div className="overflow-hidden">
                      <p className="slide-text-left mt-2 w-full text-justify text-xs line-clamp-2 leading-relaxed text-[var(--text-secondary)]/80 sm:text-sm transform-gpu will-change-[transform,clip-path,opacity]">
                        {project.shortDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — TEXT & MAGNETIC FEATURES */}
          <div className="lg:col-span-5 lg:border-l lg:border-[var(--border-light)] lg:pl-10">
            <div className="lg:col-span-7 pb-8 md:hidden">
              <div className="mb-4 flex items-center gap-3 overflow-hidden">
                <span className="slide-text-left text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs transform-gpu will-change-[transform,clip-path,opacity]">
                  Project Showcase
                </span>
                <span className="h-px w-10 bg-[var(--accent-primary)] sm:w-12" />
              </div>
              <p className="slide-text-left max-w-md text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm transform-gpu will-change-[transform,clip-path,opacity]">
                A selection of work that reflects my approach to design,
                development, interaction, and creating meaningful digital
                experiences.
              </p>
            </div>

            <div>
              <div className="overflow-hidden">
                <h3 className="slide-text-left heading-font text-2xl leading-tight tracking-tight text-[var(--text-main)] md:text-4xl transform-gpu will-change-[transform,clip-path,opacity]">
                  Why this project{" "}
                  <span className="text-[var(--accent-primary)]">
                    stands out
                  </span>
                </h3>
              </div>

              <div className="overflow-hidden">
                <p className="slide-text-left mt-6 text-justify text-sm leading-[1.9] text-[var(--text-secondary)] transform-gpu will-change-[transform,clip-path,opacity]">
                  Bharat Vraman is a modern React.js web application designed to
                  help users explore famous temples across India. The platform
                  presents temples through a clean and responsive interface,
                  with dedicated detail pages containing information such as
                  deity, history, timings, location, and cultural significance.
                </p>
              </div>

              <div className="overflow-hidden">
                <p className="slide-text-left mt-5 text-justify text-sm leading-[1.9] text-[var(--text-secondary)] transform-gpu will-change-[transform,clip-path,opacity]">
                  The project focuses on creating a simple discovery experience
                  while maintaining reusable components, responsive layouts,
                  dynamic routing, and smooth interactions throughout the
                  application.
                </p>
              </div>

              {/* FEATURES WITH MAGNETIC EASE */}
              <div className="mt-8">
                {[
                  "Patient, Doctor & Admin role-based system",
                  "Email OTP & Google OAuth authentication",
                  "AI-powered symptom analysis & specialist recommendations",
                  "Appointment booking with admin approval & scheduling",
                  "Digital prescriptions, medical reports & family profiles",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="magnetic-feature flex items-center gap-3 py-3 transform-gpu will-change-[transform,opacity]"
                  >
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
              <div
                id="project-btn"
                className="slide-text-left mt-8 flex items-center gap-6 transform-gpu will-change-[transform,clip-path,opacity]"
              >
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
        <div className="mt-14 border-t border-[var(--border-light)] pt-6 overflow-hidden">
          <p className="slide-text-left text-xs text-center md:text-left text-[var(--text-secondary)] sm:text-sm transform-gpu will-change-[transform,clip-path,opacity]">
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
