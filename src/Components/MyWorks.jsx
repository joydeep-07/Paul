import React, { useState, useRef } from "react";
import { projects } from "../Utils/Projects";
import { useNavigate, useLocation, Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const MyWorks = () => {
  const [loadedImages, setLoadedImages] = useState({});
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  const visibleProjects = isHomePage
    ? projects.slice(0, 4)
    : showAll
      ? projects
      : projects.slice(0, 4);

  // GSAP Animation: 45% Line Reveal
  useGSAP(
    () => {
      gsap.config({ force3D: true });

      const cardPaths =
        containerRef.current.querySelectorAll(".card-border-path");

      cardPaths.forEach((path, index) => {
        const totalLength = path.getTotalLength ? path.getTotalLength() : 1000;

        // Target coverage: ~45% of total card perimeter
        const segmentLength = totalLength * 0.45;
        const gapLength = totalLength - segmentLength;

        // Alternating starting points around the card
        const offsetStartPositions = [
          0,
          totalLength * 0.25,
          totalLength * 0.5,
          totalLength * 0.75,
        ];
        const initialStart =
          offsetStartPositions[index % offsetStartPositions.length];

        // strokeDasharray set to [visible line length, invisible gap length]
        gsap.set(path, {
          strokeDasharray: `${segmentLength} ${gapLength}`,
          strokeDashoffset: initialStart + segmentLength,
        });

        gsap.to(path, {
          strokeDashoffset: initialStart,
          duration: 1.4 + (index % 3) * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: path.closest(".card-item"),
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: containerRef, dependencies: [visibleProjects] },
  );

  return (
    <div
      ref={containerRef}
      className="bg-[var(--bg-main)] transition-colors duration-300"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-0">
        {/* PROJECT GRID */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => navigate(`/project/${project.id}`)}
              className="
                card-item group relative cursor-pointer
                rounded-xl border border-[var(--border-light)]/50
                bg-[var(--bg-secondary)]/80
                transition-all duration-500
                hover:bg-[var(--bg-secondary)]
                overflow-hidden transform-gpu
              "
            >
              {/* SVG 45% Accent Line Overlay */}
              <svg
                className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
                fill="none"
                preserveAspectRatio="none"
              >
                <rect
                  x="1.5"
                  y="1.5"
                  width="calc(100% - 3px)"
                  height="calc(100% - 3px)"
                  rx="12"
                  ry="12"
                  className="card-border-path stroke-[var(--accent-primary)]"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              {/* IMAGE */}
              <div
                className="relative overflow-hidden rounded-lg m-3 sm:m-4
                h-[220px] sm:h-[280px] md:h-[320px] lg:h-[380px]"
              >
                {!loadedImages[project.id] && (
                  <div className="absolute inset-0 rounded-lg bg-[var(--border-light)] animate-pulse" />
                )}

                <img
                  src={project.thumbnail}
                  alt={project.title}
                  loading="lazy"
                  onLoad={() => handleImageLoad(project.id)}
                  className={`
                    w-full h-full object-contain rounded-lg
                    transition-opacity duration-500
                    ${loadedImages[project.id] ? "opacity-100" : "opacity-0"}
                  `}
                />
              </div>

              {/* CONTENT */}
              <div className="px-4 pb-5 ">
                <div className="flex items-center justify-between w-full">
                  <h2 className="heading-font text-lg sm:text-xl lg:text-2xl text-[var(--text-main)]">
                    {project.title}
                  </h2>{" "}
                  <span className="text-xs sm:text-sm opacity-60 whitespace-nowrap">
                    {project.year}
                  </span>
                </div>
                <p className="mt-1 text-xs sm:text-sm line-clamp-2 text-justify text-[var(--text-secondary)]/80">
                  {project.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* HOME PAGE → WATCH MORE */}
        {isHomePage && (
          <div className="flex justify-center mt-10 sm:mt-12">
            <button
              onClick={() => navigate("/projects")}
              className="
                px-8 sm:px-10 md:px-12
                py-3 sm:py-3.5 md:py-4
                rounded-full
                tracking-[0.12em]
                text-[10px] sm:text-xs uppercase
                border border-[var(--border-light)]
                backdrop-blur-md
                hover:bg-[var(--accent-primary)]/5
                hover:border-[var(--accent-primary)]/20
                transition-all duration-500
                active:scale-[0.98]
              "
            >
              Watch More
            </button>
          </div>
        )}

        {/* PROJECTS PAGE → LOAD MORE */}
        {!isHomePage && projects.length > 4 && !showAll && (
          <div className="flex justify-center mt-10 sm:mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="
                px-8 sm:px-10 md:px-12
                py-3 sm:py-3.5 md:py-4
                rounded-full
                tracking-[0.12em]
                text-[10px] sm:text-xs uppercase
                border border-[var(--border-light)]
                backdrop-blur-md
                hover:bg-[var(--accent-primary)]/5
                hover:border-[var(--accent-primary)]/20
                transition-all duration-500
                active:scale-[0.98]
              "
            >
              Load More
            </button>
          </div>
        )}

        {/* FOOTER NOTE */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-[var(--border-light)] text-center">
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] opacity-80">
            Interested in collaboration?{" "}
            <Link
              to="/contact"
              className="text-[var(--accent-primary)] font-medium hover:underline"
            >
              Let&apos;s discuss your next project
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyWorks;
