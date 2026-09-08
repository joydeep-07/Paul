import React, { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../Utils/Projects";
import { ArrowLeft, ChevronLeft, ExternalLink } from "lucide-react";
import WorkBadge from "../Components/WorkBadge";
import Footer from "../layout/Footer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((item) => item.id.toString() === id);

  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (!project) return;

      // Hardware acceleration setup
      gsap.config({ force3D: true });

      // Initial state setup for left-to-right slide animation
      gsap.set(".slide-text-left", {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        x: -40,
        opacity: 0,
      });

      // Hero Section Animation Timeline
      const heroTl = gsap.timeline({
        defaults: { ease: "expo.out" },
      });

      heroTl
        .to(".hero-slide-text", {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          x: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.1,
        })
        .to(
          ".hero-image-reveal",
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            x: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power2.out",
          },
          "-=0.7",
        );

      // Section Content Animations triggered on scroll
      const sections = gsap.utils.toArray(".scroll-section");
      sections.forEach((section) => {
        const elements = section.querySelectorAll(".slide-text-left");
        if (elements.length > 0) {
          gsap.to(elements, {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            x: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.08,
            ease: "expo.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    },
    { scope: containerRef, dependencies: [project] },
  );

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 px-4 text-center">
        <h2 className="text-3xl font-medium text-[var(--text-main)]">
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
    <div
      ref={containerRef}
      className="bg-[var(--bg-main)] min-h-screen transition-colors duration-300 pt-18 md:pt-18 overflow-hidden"
    >
      {/* ================= FULL-WIDTH HERO SECTION ================= */}
      <section className="w-full px-4 sm:px-8 lg:px-16 pt-6 pb-16">
        <div className="mb-5 overflow-hidden">
          <Link
            to="/projects"
            className="slide-text-left hero-slide-text inline-flex items-center gap-2 text-xs text-[var(--text-secondary)]50 hover:text-[var(--accent-primary)] transition"
          >
            <ChevronLeft size={16} />
            Back to Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: TITLE & META */}
          <div className="lg:col-span-6 space-y-6">
            <div className="overflow-hidden">
              <div className="slide-text-left hero-slide-text flex flex-wrap items-center gap-3">
                <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[var(--accent-primary)]">
                  {project.category}
                </span>
                <span className="text-xs sm:text-sm text-[var(--text-secondary)]">
                  / {project.year}
                </span>
              </div>
            </div>

            <div className="overflow-hidden">
              <h1 className="slide-text-left hero-slide-text text-4xl heading-font sm:text-5xl lg:text-6xl font-normal tracking-tight text-[var(--text-main)] leading-none">
                {project.title}
              </h1>
            </div>

            <div className="overflow-hidden">
              <p className="slide-text-left hero-slide-text text-sm text-justify sm:text-sm text-[var(--text-secondary)] font-normal leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            <div className="overflow-hidden">
              <div className="slide-text-left hero-slide-text flex flex-wrap gap-1 pt-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs sm:text-sm font-medium text-[var(--text-main)] bg-[var(--bg-secondary)]/50 px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.liveLink && (
              <div className="overflow-hidden">
                <div className="slide-text-left hero-slide-text pt-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-primary)] hover:opacity-80 transition"
                  >
                    <ExternalLink size={16} />
                    Live Preview
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: EDGE-TO-EDGE THUMBNAIL */}
          <div className="lg:col-span-6 w-full overflow-hidden">
            <div className="slide-text-left hero-image-reveal relative w-full overflow-hidden">
              {!loaded && (
                <div className="absolute inset-0 bg-[var(--border-light)]/20 animate-pulse aspect-video" />
              )}
              <img
                src={project.thumbnail}
                alt={project.title}
                loading="lazy"
                className={`w-full rounded-sm h-auto max-h-[500px] object-cover object-top transition-opacity duration-500 ${
                  loaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setLoaded(true)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FULL-WIDTH CONTENT SECTIONS ================= */}
      <div className="w-full px-4 sm:px-8 lg:px-16 space-y-10 pb-24">
        {/* OVERVIEW */}
        <section className="scroll-section md:pt-8">
          <div className="space-y-4">
            <div className="overflow-hidden">
              <span className="slide-text-left block text-xs font-semibold uppercase tracking-widest text-[var(--accent-primary)]">
                01 / Overview
              </span>
            </div>

            <div className="overflow-hidden">
              <p className="slide-text-left text-xs lg:text-sm text-justify font-normal text-[var(--text-main)] leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </section>

        {/* CORE FUNCTIONALITY */}
        <section className="scroll-section md:pt-8">
          <div className="space-y-6">
            <div className="overflow-hidden">
              <span className="slide-text-left block text-xs font-semibold uppercase tracking-widest text-[var(--accent-primary)]">
                02 / Features
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-0">
              {project.features.map((feature, index) => (
                <div key={index} className="overflow-hidden">
                  <div className="slide-text-left flex items-start gap-4 py-1">
                    <span className="shrink-0 text-[10px] lg:text-xs text-[var(--accent-primary)] font-mono pt-0.5">
                      {index + 1}.
                    </span>

                    <p className="text-xs lg:text-sm text-justify text-[var(--text-secondary)]/85 leading-relaxed">
                      {feature}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STRATEGY */}
        {project.strategies?.length > 0 && (
          <section className="scroll-section pt-12 border-t border-[var(--border-light)]">
            <div className="space-y-6">
              <div className="overflow-hidden">
                <span className="slide-text-left block text-xs font-semibold uppercase tracking-widest text-[var(--accent-primary)]">
                  03 / Strategy
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {project.strategies.map((strategy, index) => (
                  <div key={index} className="overflow-hidden">
                    <div className="slide-text-left space-y-3">
                      <h3 className="text-md heading-font md:text-md text-[var(--accent-primary)]">
                        [{" "}
                        <span className="text-[var(--text-main)]">
                          {strategy.title}
                        </span>{" "}
                        ]
                      </h3>

                      <p className="text-xs lg:text-sm text-justify text-[var(--text-secondary)]/85 leading-relaxed">
                        {strategy.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* KEY LEARNINGS */}
        {project.takeaways?.length > 0 && (
          <section className="scroll-section pt-12 border-t border-[var(--border-light)]">
            <div className="space-y-4">
              <div className="overflow-hidden">
                <span className="slide-text-left block text-xs font-semibold uppercase tracking-widest text-[var(--accent-primary)]">
                  04 / Takeaways
                </span>
              </div>

              <div className="space-y-3">
                {project.takeaways.map((takeaway, index) => (
                  <div key={index} className="overflow-hidden">
                    <p className="slide-text-left text-xs lg:text-sm text-justify text-[var(--text-secondary)]/85 leading-relaxed">
                      {takeaway}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
