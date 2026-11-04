import React from "react";
import me from "../assets/images/main3.png";
import { Link } from "react-router-dom";

const AboutMe = () => {
  const info = [
    ["Lecturer at Kendriya Vidyalaya", "2026 / 2027"],
    ["Masters in Computer Applications", "2026 / 2028"],
    ["Bachelors in Computer Applications", "2022 / 2025"],
    ["MERN Development", "2024 / Kolkata"],
    ["Matric & Higher Secondary", "2020 / 2022"],
  ];

  return (
    <section className="w-full bg-[var(--bg-main)] flex justify-center py-16 sm:py-20 overflow-hidden transition-colors duration-300">
      <div className="max-w-8xl px-4 sm:px-6 md:px-12 w-full">
        {/* HEADERS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-10">
          {/* ABOUT HEADER */}
          <div className="lg:col-span-7">
            <div className="flex items-start gap-4 sm:gap-6">
              {/* RESPONSIVE PROFILE IMAGE */}
              <Link
                to="/story"
                className="shrink-0 w-18 h-18 md:w-21 md:h-21 rounded-full p-[4px] sm:p-[5px] border-2 sm:border-3 border-[var(--accent-primary)]"
              >
                <img
                  src={me}
                  alt="Joydeep Paul"
                  className="w-full h-full rounded-full object-cover object-center"
                />
              </Link>

              {/* ABOUT HEADING */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)]">
                    About Me
                  </span>

                  <span className="h-px w-12 bg-[var(--accent-primary)]" />
                </div>

                <div>
                  <p className="md:max-w-md max-w-[270px] text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    A quick overview of who I am, what I do, and how I create
                    meaningful digital experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* QUICK INFO HEADER */}
          <div className="lg:col-span-5 hidden md:flex flex-col lg:border-l lg:border-[var(--border-light)] lg:pl-10">
            <div>
              <h2 className="heading-font text-2xl sm:text-3xl text-[var(--text-main)]">
                Quick <span className="text-[var(--accent-primary)]">info</span>
              </h2>
            </div>

            <div>
              <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
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
            <div>
              <p className="text-sm text-justify text-[var(--text-main)] leading-[1.9]">
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

            <div>
              <p className="text-sm text-justify text-[var(--text-secondary)] leading-[1.9]">
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
              <div>
                <h2 className="heading-font text-2xl sm:text-3xl text-[var(--text-main)]">
                  Quick{" "}
                  <span className="text-[var(--accent-primary)]">info</span>
                </h2>
              </div>

              <div>
                <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                  Education, experience, technical skills, and professional
                  development background.
                </p>
              </div>
            </div>

            {/* QUICK INFO LIST */}
            <div className="relative">
              {/* TOP BORDER */}
              <div className="h-px w-full bg-[var(--border-light)]" />

              {info.map(([title, year], index) => (
                <div key={index} className="relative">
                  {/* INFO ROW */}
                  <div className="group flex items-center justify-between gap-4 sm:gap-6 py-3 sm:py-4 transition-colors duration-300">
                    <span className="min-w-0 text-xs sm:text-sm text-[var(--text-secondary)] transition-colors duration-300 group-hover:text-[var(--text-main)]">
                      {title}
                    </span>

                    <span className="shrink-0 text-[10px] sm:text-xs font-medium text-[var(--text-main)] uppercase tracking-wider transition-colors duration-300 group-hover:text-[var(--accent-primary)]">
                      {year}
                    </span>
                  </div>

                  {/* DIVIDER */}
                  <div className="h-px w-full bg-[var(--border-light)]" />
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
