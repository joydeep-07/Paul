import React, { useState, useRef } from "react";
import blogImage from "../assets/blog/ui2.jpg";
import blogVid from "../assets/blog/short.mp4";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const BlogBanner = () => {
  const containerRef = useRef(null);
  const borderPathRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  const blog = {
    title: "Building Scalable MERN Applications",
    shortDescription:
      "A deep dive into structuring large-scale MERN stack applications with clean architecture, authentication, performance optimization, and scalable folder patterns.",
    date: "Feb 2026",
    thumbnail: blogImage,
  };

  useGSAP(
    () => {
      gsap.config({ force3D: true });

      const pathEl = borderPathRef.current;
      if (pathEl) {
        const pathLength = pathEl.getTotalLength();

        // Reveal only a portion of the border path (e.g., 40% length dash)
        // Adjust the multiplier (0.4) to match the exact coverage ratio from Top Projects
        const visibleSegmentLength = pathLength * 0.4;

        gsap.set(pathEl, {
          strokeDasharray: `${visibleSegmentLength} ${pathLength}`,
          strokeDashoffset: visibleSegmentLength,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          defaults: { ease: "expo.out" },
        });

        // Header Animations
        gsap.set(".blog-label-wrapper", { y: 20, opacity: 0 });
        gsap.set(".blog-accent-line", {
          scaleX: 0,
          transformOrigin: "left center",
        });
        gsap.set(".slide-text-left", {
          clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
          x: -40,
          opacity: 0,
        });

        tl.to(".blog-label-wrapper", { y: 0, opacity: 1, duration: 0.6 })
          .to(
            ".blog-accent-line",
            { scaleX: 1, duration: 0.8, ease: "power2.out" },
            "-=0.4",
          )
          // Animate partial line along the perimeter
          .to(
            pathEl,
            {
              strokeDashoffset: -pathLength + visibleSegmentLength,
              duration: 1.8,
              ease: "power2.inOut",
            },
            "-=0.5",
          )
          .to(
            ".slide-text-left",
            {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              x: 0,
              opacity: 1,
              duration: 1.1,
              stagger: 0.1,
            },
            "-=1.2",
          );
      }
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-[var(--bg-main)] py-0 transition-colors duration-300 overflow-hidden"
    >
      <div className="mx-auto max-w-8xl px-4 md:px-12">
        {/* HEADER */}
        <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-20">
          <div className="hidden flex-col lg:col-span-7 md:flex">
            <div className="blog-label-wrapper mb-4 flex items-center gap-3 transform-gpu will-change-[transform,opacity]">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs">
                Blog Section
              </span>
              <span className="blog-accent-line h-px w-10 bg-[var(--accent-primary)] sm:w-12 transform-gpu will-change-transform" />
            </div>
            <div className="overflow-hidden">
              <p className="slide-text-left max-w-md text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm transform-gpu will-change-[transform,clip-path,opacity]">
                Explore my latest thoughts on development, design, modern web
                technologies, and lessons learned while building real-world
                projects.
              </p>
            </div>
          </div>

          <div className="md:hidden lg:col-span-5">
            <div>
              <div className="overflow-hidden">
                <h2 className="slide-text-left heading-font text-2xl text-[var(--text-main)] sm:text-3xl transform-gpu will-change-[transform,clip-path,opacity]">
                  Latest{" "}
                  <span className="text-[var(--accent-primary)]">articles</span>
                </h2>
              </div>
              <div className="overflow-hidden">
                <p className="slide-text-left mt-2 max-w-sm text-xs leading-relaxed text-[var(--text-secondary)] transform-gpu will-change-[transform,clip-path,opacity]">
                  A closer look at my development experiences, technical
                  decisions, and ideas.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden border-l border-[var(--border-light)] pl-10 md:flex lg:col-span-5">
            <div>
              <div className="overflow-hidden">
                <h2 className="slide-text-left heading-font text-2xl text-[var(--text-main)] sm:text-3xl transform-gpu will-change-[transform,clip-path,opacity]">
                  Latest{" "}
                  <span className="text-[var(--accent-primary)]">articles</span>
                </h2>
              </div>
              <div className="overflow-hidden">
                <p className="slide-text-left mt-2 max-w-sm text-xs leading-relaxed text-[var(--text-secondary)] transform-gpu will-change-[transform,clip-path,opacity]">
                  A closer look at my development experiences, technical
                  decisions, and ideas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <div className="relative w-full rounded-2xl transform-gpu">
              {/* SVG PARTIAL STROKE OVERLAY */}
              <svg className="pointer-events-none absolute inset-0 h-full w-full z-20 overflow-visible">
                <rect
                  ref={borderPathRef}
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  rx="16"
                  ry="16"
                  fill="none"
                  stroke="var(--accent-primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              <div
                onClick={() => navigate("/blog/mern-architecture")}
                className="group cursor-pointer rounded-2xl border border-[var(--border-light)]/50 bg-[var(--bg-secondary)]/80 p-5 shadow-sm transition-all duration-300"
              >
                {/* MEDIA */}
                <div className="relative block overflow-hidden rounded-xl">
                  {!loaded && (
                    <div className="absolute inset-0 z-20 animate-pulse bg-[var(--border-light)] rounded-xl" />
                  )}

                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    loading="lazy"
                    onLoad={() => setLoaded(true)}
                    className={`h-full w-full object-cover rounded-xl transition-all duration-500 ease-out ${
                      loaded ? "opacity-100" : "opacity-0"
                    } group-hover:opacity-0`}
                  />

                  <video
                    src={blogVid}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover rounded-xl opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                  />
                </div>

                {/* CARD CONTENT */}
                <div className="flex items-start justify-between gap-4 pt-6 pb-2">
                  <div className="w-full">
                    <div className="flex items-start justify-between gap-4">
                      <div className="overflow-hidden">
                        <h2 className="slide-text-left heading-font text-lg text-[var(--text-main)] transition-colors duration-300 sm:text-xl lg:text-2xl transform-gpu will-change-[transform,clip-path,opacity]">
                          {blog.title}
                        </h2>
                      </div>

                      <span className="shrink-0 whitespace-nowrap text-[10px] font-medium uppercase tracking-wide text-[var(--text-main)] opacity-50 sm:text-xs">
                        {blog.date}
                      </span>
                    </div>

                    <div className="overflow-hidden">
                      <p className="slide-text-left mt-2 w-full text-justify text-xs leading-relaxed text-[var(--text-secondary)]/80 sm:text-sm transform-gpu will-change-[transform,clip-path,opacity]">
                        {blog.shortDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — TEXT AREA */}
          <div className="lg:col-span-5 lg:border-l lg:border-[var(--border-light)] lg:pl-10">
            <div className="pb-8 md:hidden lg:col-span-7">
              <div className="blog-label-wrapper mb-4 flex items-center gap-3 transform-gpu will-change-[transform,opacity]">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs">
                  Blog Section
                </span>
                <span className="blog-accent-line h-px w-10 bg-[var(--accent-primary)] sm:w-12 transform-gpu will-change-transform" />
              </div>

              <div className="overflow-hidden">
                <p className="slide-text-left max-w-md text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm transform-gpu will-change-[transform,clip-path,opacity]">
                  Explore my latest thoughts on development, design, modern web
                  technologies, and lessons learned while building real-world
                  projects.
                </p>
              </div>
            </div>

            <div>
              <div className="overflow-hidden">
                <h3 className="slide-text-left heading-font text-2xl leading-tight tracking-tight text-[var(--text-main)] md:text-4xl transform-gpu will-change-[transform,clip-path,opacity]">
                  Latest insights on{" "}
                  <span className="text-[var(--accent-primary)]">
                    MERN architecture
                  </span>
                </h3>
              </div>

              <div className="overflow-hidden">
                <p className="slide-text-left mt-6 text-justify text-sm leading-[1.9] text-[var(--text-secondary)] transform-gpu will-change-[transform,clip-path,opacity]">
                  In 2026, the MERN stack continues to be a versatile foundation
                  for building modern full-stack applications.
                </p>
              </div>

              <div className="overflow-hidden">
                <p className="slide-text-left mt-5 text-justify text-sm leading-[1.9] text-[var(--text-secondary)] transform-gpu will-change-[transform,clip-path,opacity]">
                  This article explores practical approaches to structuring
                  scalable MERN applications, including clean architecture,
                  authentication, performance optimization, reusable patterns,
                  and maintainable project organization.
                </p>
              </div>

              <div className="mt-8">
                {["MongoDB", "Express.js", "React.js", "Node.js"].map(
                  (technology, index) => (
                    <div key={technology} className="overflow-hidden">
                      <div className="slide-text-left flex items-center gap-3 py-3 transform-gpu will-change-[transform,clip-path,opacity]">
                        <span className="text-xs font-medium text-[var(--accent-primary)]">
                          0{index + 1}
                        </span>
                        <span className="text-xs text-[var(--text-secondary)] sm:text-sm">
                          {technology}
                        </span>
                      </div>
                    </div>
                  ),
                )}
              </div>

              <div className="mt-8 flex items-center gap-6 overflow-hidden">
                <div className="slide-text-left flex items-center gap-6 transform-gpu will-change-[transform,clip-path,opacity]">
                  <Link
                    to="/blog/mern-architecture"
                    className="flex cursor-pointer items-center text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-main)] transition-colors duration-300 hover:text-[var(--accent-primary)]"
                  >
                    Read Article
                    <span className="ml-2 text-[var(--accent-primary)]">
                      <ChevronRight size={14} />
                    </span>
                  </Link>

                  <Link
                    to="/blogs"
                    className="cursor-pointer text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--accent-primary)]"
                  >
                    All Articles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogBanner;
