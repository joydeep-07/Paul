import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import me from "../assets/images/main3.png";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const containerRef = useRef(null);

  const info = [
    ["Lecturer at Kendriya Vidyalaya", "2026 / 2027"],
    ["Masters in Computer Applications", "2026 / 2028"],
    ["Bachelors in Computer Applications", "2022 / 2025"],
    ["MERN Development", "2024 / Kolkata"],
    ["Matric & Higher Secondary", "2020 / 2022"],
  ];

  useGSAP(
    () => {
      gsap.config({ force3D: true });

      gsap.set(".about-label-wrapper", {
        y: 20,
        opacity: 0,
      });

      gsap.set(
        [".about-accent-line", ".quick-info-top-border", ".quick-info-divider"],
        {
          scaleX: 0,
          transformOrigin: "left center",
        },
      );

      gsap.set(".slide-text-left", {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        x: -40,
        opacity: 0,
      });

      gsap.set(".quick-info-row", {
        opacity: 0,
        y: 15,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      tl.to(".about-label-wrapper", {
        y: 0,
        opacity: 1,
        duration: 0.6,
      })
        .to(
          ".about-accent-line",
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4",
        )
        .to(
          ".slide-text-left",
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            x: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.08,
          },
          "-=0.5",
        )
        .to(
          ".quick-info-top-border",
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power2.inOut",
          },
          "-=0.6",
        )
        .to(
          ".quick-info-row",
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
          },
          "-=0.4",
        )
        .to(
          ".quick-info-divider",
          {
            scaleX: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.inOut",
          },
          "<",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-[var(--bg-main)] flex justify-center py-16 sm:py-20 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-8xl px-4 sm:px-6 md:px-12 w-full">
        {/* HEADERS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-10">
          {/* ABOUT HEADER */}
          <div className="lg:col-span-7">
            <div className="flex items-start gap-4 sm:gap-6">
              {/* RESPONSIVE PROFILE IMAGE */}
              <Link to="/story" className="shrink-0 w-18 h-18 md:w-21 md:h-21 rounded-full p-[4px] sm:p-[5px] border-2 sm:border-3 border-[var(--accent-primary)]">
                <img
                  src={me}
                  alt="Joydeep Paul"
                  className="w-full h-full rounded-full object-cover object-center"
                />
              </Link>

              {/* ABOUT HEADING */}
              <div className="min-w-0 flex-1">
                <div className="about-label-wrapper flex items-center gap-3 mb-4 transform-gpu will-change-[transform,opacity]">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)]">
                    About Me
                  </span>

                  <span className="about-accent-line h-px w-12 bg-[var(--accent-primary)] transform-gpu will-change-transform" />
                </div>

                <div className="overflow-hidden">
                  <p className="slide-text-left md:max-w-md max-w-[270px] text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed transform-gpu will-change-[transform,clip-path,opacity]">
                    A quick overview of who I am, what I do, and how I create
                    meaningful digital experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* QUICK INFO HEADER */}
          <div className="lg:col-span-5 hidden md:flex flex-col lg:border-l lg:border-[var(--border-light)] lg:pl-10">
            <div className="overflow-hidden">
              <h2 className="slide-text-left heading-font text-2xl sm:text-3xl text-[var(--text-main)] transform-gpu will-change-[transform,clip-path,opacity]">
                Quick <span className="text-[var(--accent-primary)]">info</span>
              </h2>
            </div>

            <div className="overflow-hidden">
              <p className="slide-text-left mt-2 text-xs text-[var(--text-secondary)] leading-relaxed transform-gpu will-change-[transform,clip-path,opacity]">
                Education, experience, technical skills, and professional
                development background.
              </p>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* ABOUT CONTENT */}
          <div className="lg:col-span-7 space-y-6">
            <div className="overflow-hidden">
              <p className="slide-text-left text-sm text-justify text-[var(--text-main)] leading-[1.9] transform-gpu will-change-[transform,clip-path,opacity]">
                I'm{" "}
                <span className="font-medium text-[var(--accent-primary)]">
                  Joydeep Paul
                </span>
                , a Full Stack Developer focused on building modern, responsive,
                and user-centric digital products. I specialize in frontend
                development using React.js, JavaScript, TypeScript, Tailwind
                CSS, GSAP, and Framer Motion, while also working with Node.js,
                Express.js, MongoDB, REST APIs, and authentication systems to
                build complete web applications. I have hands-on experience
                developing reusable components, integrating APIs, managing
                application state, designing backend services, and implementing
                scalable application workflows.
              </p>
            </div>

            <div className="overflow-hidden">
              <p className="slide-text-left text-sm text-justify text-[var(--text-secondary)] leading-[1.9] transform-gpu will-change-[transform,clip-path,opacity]">
                I enjoy turning ideas into polished, production-ready
                applications by combining clean architecture, maintainable code,
                intuitive user experiences, and reliable backend systems. I
                focus on performance, responsiveness, usability, and visual
                quality while continuously improving my skills across the full
                development stack.
              </p>
            </div>
          </div>

          {/* QUICK INFO CONTENT */}
          <div className="lg:col-span-5 lg:border-l lg:border-[var(--border-light)] lg:pl-10">
            {/* QUICK INFO HEADER - MOBILE */}
            <div className="md:hidden flex flex-col mb-8">
              <div className="overflow-hidden">
                <h2 className="slide-text-left heading-font text-2xl sm:text-3xl text-[var(--text-main)] transform-gpu will-change-[transform,clip-path,opacity]">
                  Quick{" "}
                  <span className="text-[var(--accent-primary)]">info</span>
                </h2>
              </div>

              <div className="overflow-hidden">
                <p className="slide-text-left mt-2 text-xs text-[var(--text-secondary)] leading-relaxed transform-gpu will-change-[transform,clip-path,opacity]">
                  Education, experience, technical skills, and professional
                  development background.
                </p>
              </div>
            </div>

            {/* QUICK INFO LIST */}
            <div className="relative">
              {/* TOP BORDER */}
              <div className="quick-info-top-border h-px w-full bg-[var(--border-light)]" />

              {info.map(([title, year], index) => (
                <div key={index} className="relative">
                  {/* INFO ROW */}
                  <div className="quick-info-row group flex items-center justify-between gap-4 sm:gap-6 py-3 sm:py-4 transition-colors duration-300 transform-gpu will-change-[transform,opacity]">
                    <span className="min-w-0 text-xs sm:text-sm text-[var(--text-secondary)] transition-colors duration-300 group-hover:text-[var(--text-main)]">
                      {title}
                    </span>

                    <span className="shrink-0 text-[10px] sm:text-xs font-medium text-[var(--text-main)] uppercase tracking-wider transition-colors duration-300 group-hover:text-[var(--accent-primary)]">
                      {year}
                    </span>
                  </div>

                  {/* DIVIDER */}
                  <div className="quick-info-divider h-px w-full bg-[var(--border-light)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
