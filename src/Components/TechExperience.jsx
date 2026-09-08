import React, { useState, useRef } from "react";
import { libraries } from "../Utils/TechExperience";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const TechExperience = () => {
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef(null);

  const visibleLibraries = showAll ? libraries : libraries.slice(0, 6);

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

      gsap.set(".tech-card", {
        opacity: 0,
      });

      // 2. Main ScrollTrigger Timeline
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      mainTl
        // Reveal Left Side Headings & Text Blocks
        .to(".slide-text-left", {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          x: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.08,
        })
        // Fade Tech Cards in place
        .to(
          ".tech-card",
          {
            opacity: 1,
            duration: 0.6,
            stagger: 0.06,
            ease: "power2.out",
          },
          "-=0.7",
        )
        // Partial SVG Border Drawing Effect (45% line visible around card)
        .to(
          ".border-path",
          {
            strokeDashoffset: "55%",
            duration: 1.3,
            ease: "power2.inOut",
            stagger: 0.06,
          },
          "-=0.8",
        );
    },
    { scope: containerRef, dependencies: [showAll] },
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-[var(--bg-main)] py-12 transition-colors duration-300 sm:py-16 md:py-20 overflow-hidden"
    >
      <div className="mx-auto max-w-8xl px-4 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          {/* LEFT SECTION */}
          <div className="h-fit lg:col-span-5">
            <div className="flex items-center gap-3 overflow-hidden py-1">
              <span className="slide-text-left text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs transform-gpu will-change-[transform,clip-path,opacity]">
                Technical Experience
              </span>

              <span className="h-px w-10 bg-[var(--accent-primary)] sm:w-12" />
            </div>

            <div className="overflow-hidden py-1">
              <h2 className="slide-text-left heading-font mt-5 text-3xl leading-tight tracking-tight text-[var(--text-main)] sm:text-4xl md:text-5xl transform-gpu will-change-[transform,clip-path,opacity]">
                Technologies I{" "}
                <span className="text-[var(--accent-primary)]">work with</span>
              </h2>
            </div>

            <div className="overflow-hidden py-1">
              <p className="slide-text-left mt-5 max-w-md text-sm leading-[1.9] text-[var(--text-secondary)] transform-gpu will-change-[transform,clip-path,opacity]">
                A collection of libraries and technologies I use to build
                responsive interfaces, interactive experiences, animations, and
                modern web applications.
              </p>
            </div>
          </div>

          {/* RIGHT SECTION — TECH GRID */}
          <div className="lg:col-span-7">
            <motion.div
              layout
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4"
            >
              <AnimatePresence mode="popLayout">
                {visibleLibraries.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.25, 1, 0.5, 1],
                        layout: { duration: 0.3 },
                      }}
                      key={item.id}
                      className="tech-card relative rounded-sm sm:rounded-md transform-gpu will-change-[opacity]"
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

                      <div className="group relative z-0 flex min-h-[105px] cursor-default flex-col justify-between overflow-hidden rounded-sm border border-[var(--border-light)] bg-[var(--bg-secondary)]/40 p-4 transition-colors duration-500 hover:border-[var(--accent-primary)]/40 hover:bg-[var(--accent-primary)]/[0.03] sm:min-h-[125px] sm:p-5">
                        {/* NUMBER */}
                        <span className="absolute right-3 top-3 text-[9px] font-medium tracking-[0.15em] text-[var(--text-secondary)]/40 transition-colors duration-300 group-hover:text-[var(--accent-primary)]/60">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* ICON */}
                        <div className="flex h-9 w-9 items-center justify-center text-[var(--text-secondary)] transition-all duration-500 group-hover:text-[var(--accent-primary)]">
                          <Icon className="text-xl" />
                        </div>

                        {/* NAME */}
                        <div className="mt-5">
                          <h3 className="text-xs font-medium text-[var(--text-main)] transition-colors duration-300 group-hover:text-[var(--accent-primary)] sm:text-sm">
                            {item.name}
                          </h3>

                          <div className="mt-2 h-px w-0 bg-[var(--accent-primary)] transition-all duration-500 group-hover:w-8" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            {/* SEE MORE */}
            {libraries.length > 6 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="mt-7 flex cursor-pointer items-center gap-2 border-b border-[var(--border-light)] pb-1 text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--text-main)] transition-all duration-300 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] sm:text-xs"
              >
                {showAll ? "Show Less" : "View All Technologies"}

                <motion.span
                  animate={{ rotate: showAll ? -90 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="inline-flex items-center justify-center"
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </motion.span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechExperience;
