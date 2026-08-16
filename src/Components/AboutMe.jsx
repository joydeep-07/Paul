import { LocateFixed, LocateIcon } from "lucide-react";
import React from "react";

const AboutMe = () => {
  return (
    <div className="flex justify-center items-center py-17 bg-[var(--bg-main)]">
      {/* Container */}
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-0 flex flex-col items-center">
        {/* Title */}
        <div className="w-full mb-10">
          <div className="mb-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)]">
              About Me
            </h3>

            <div className="mt-2 h-[2px] w-16 bg-[var(--accent-primary)] rounded-full" />
          </div>

          <div>
            <p className="text-[var(--text-secondary)] text-sm sm:text-sm md:text-sm max-w-sm opacity-90 leading-relaxed">
              A quick overview of who I am, what I do, and how I create
              meaningful digital experiences.
            </p>
          </div>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {/* Left content */}
          <div className="lg:col-span-2 bg-[var(--bg-secondary)]/90 border border-[var(--border-light)]/90 rounded-xl p-4 sm:p-8 shadow-xs">
            <p className="text-[var(--text-main)] text-xs sm:text-sm md:text-sm leading-relaxed text-justify">
              I'm{" "}
              <span className="font-semibold text-[var(--accent-primary)]">
                Joydeep Paul
              </span>
              , a passionate Frontend Developer and designer with over{" "}
              <span className="font-semibold">4+ years</span> of experience in
              crafting seamless, user-centric digital experiences with hands-on
              experience building responsive, modern, and interactive web
              applications using React.js, JavaScript, TypeScript, Tailwind CSS,
              GSAP, and Framer Motion. Experienced in developing reusable
              components, integrating REST APIs, managing application state, and
              implementing smooth animations and responsive UI designs. Along
              with strong frontend expertise, I have working knowledge of
              Node.js, Express.js, MongoDB, authentication, and backend API
              development. Passionate about writing clean, maintainable code and
              building scalable applications with a strong focus on performance,
              usability, and user experience.
              <br />
              <br />I enjoy collaborating with forward-thinking teams and
              turning ideas into polished digital solutions that feel intuitive,
              purposeful, and visually refined.
            </p>
          </div>

          {/* Right card */}
          <div className="p-2 md:p-6 pt-0 flex flex-col justify-center">
            <h1 className="heading-font text-2xl sm:text-3xl md:text-4xl leading-tight mb-2">
              Quick <span className="text-[var(--accent-primary)]">info</span>
            </h1>
            <p className="mb-10 text-xs text-[var(--text-secondary)] opacity-80">
              Driven by clean design, performance, and meaningful user
              experiences.
            </p>

            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-xs  text-[var(--text-secondary)] uppercase font-medium">
                  Lecturer at Kendriya Vidyalaya
                </span>
                <span className="text-[var(--text-main)]/95 uppercase text-xs font-medium">
                  2026 / 2027
                </span>
              </li>

              <li className="flex justify-between">
                <span className="text-xs  text-[var(--text-secondary)] uppercase font-medium">
                  Masters in Computer Applications
                </span>
                <span className="text-[var(--text-main)]/95 uppercase text-xs font-medium">
                  2026 / 2028
                </span>
              </li>

              <li className="flex justify-between">
                <span className="text-xs  text-[var(--text-secondary)] uppercase font-medium">
                  Bachelors in Computer Applications
                </span>
                <span className="text-[var(--text-main)]/95 uppercase text-xs font-medium">
                  2022 / 2025
                </span>
              </li>

              <li className="flex justify-between">
                <span className="text-xs uppercase  text-[var(--text-secondary)] font-medium">
                  Mern Development
                </span>
                <span className="text-[var(--text-main)]/95 uppercase text-xs font-medium">
                  2024 KOLKATA
                </span>
              </li>

              <li className="flex justify-between">
                <span className="text-xs uppercase  text-[var(--text-secondary)] font-medium">
                  Matric & Higher Secondary
                </span>
                <span className="text-[var(--text-main)]/95 uppercase text-xs font-medium">
                  DAV 2020 / 2022
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
