import React, { useRef } from "react";
import { awards } from "../Utils/Awards";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Awards = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.config({ force3D: true });

      // 1. Set Initial States
      gsap.set(".slide-text-left", {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        x: -30,
        opacity: 0,
      });

      gsap.set(".award-row", {
        opacity: 0,
      });

      gsap.set(".award-divider", {
        scaleX: 0,
        transformOrigin: "left center",
      });

      // 2. Build ScrollTrigger Timeline
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      mainTl
        // Reveal Left Side Headings & Paragraphs
        .to(".slide-text-left", {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          x: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.08,
        })
        // Draw the top border line left-to-right
        .to(
          ".award-top-border",
          {
            scaleX: 1,
            duration: 1.0,
            ease: "power2.inOut",
          },
          "-=0.7",
        )
        // Fade in rows & draw row divider lines sequentially
        .to(
          ".award-row",
          {
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.6",
        )
        .to(
          ".award-divider",
          {
            scaleX: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: "power2.inOut",
          },
          "-=0.7",
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
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-20">
          {/* LEFT SECTION */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 overflow-hidden py-1">
              <span className="slide-text-left text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs transform-gpu will-change-[transform,clip-path,opacity]">
                Qualification
              </span>

              <span className="h-px w-10 bg-[var(--accent-primary)] sm:w-12" />
            </div>

            <div className="overflow-hidden py-1">
              <h2 className="slide-text-left heading-font mt-5 text-3xl leading-tight text-[var(--text-main)] sm:text-4xl md:text-4xl transform-gpu will-change-[transform,clip-path,opacity]">
                Professional{" "}
                <span className="text-[var(--accent-primary)]">Milestones</span>
              </h2>
            </div>

            <div className="overflow-hidden py-1">
              <p className="slide-text-left mt-4 max-w-md text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm transform-gpu will-change-[transform,clip-path,opacity]">
                A selection of achievements, recognitions, and milestones from
                my academic and professional journey.
              </p>
            </div>
          </div>

          {/* RIGHT SECTION — AWARDS LIST */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Top Animated Border Line */}
              <div className="award-top-border h-px w-full bg-[var(--border-light)]" />

              {awards.map((award, index) => (
                <div key={award.id} className="relative">
                  <div className="award-row group flex items-center justify-between gap-6 py-4 transition-colors duration-300 sm:py-5 transform-gpu will-change-[opacity]">
                    <div className="flex min-w-0 items-center gap-4">
                      <span className="shrink-0 text-[10px] font-medium tracking-[0.15em] text-[var(--text-secondary)]/50 transition-colors duration-300 group-hover:text-[var(--accent-primary)] sm:text-xs">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="text-xs font-medium text-[var(--text-secondary)]/90 uppercase transition-colors duration-300 group-hover:text-[var(--text-main)] sm:text-sm md:text-xs">
                        {award.title}
                      </h3>
                    </div>

                    <span className="shrink-0 whitespace-nowrap text-[10px] font-medium uppercase tracking-wide text-[var(--text-secondary)]/70 sm:text-xs">
                      {award.year}
                    </span>
                  </div>

                  {/* Row Bottom Animated Divider Line */}
                  <div className="award-divider h-px w-full bg-[var(--border-light)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
