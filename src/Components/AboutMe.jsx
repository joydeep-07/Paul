import React from "react";

const AboutMe = () => {
  const info = [
    ["Lecturer at Kendriya Vidyalaya", "2026 / 2027"],
    ["Masters in Computer Applications", "2026 / 2028"],
    ["Bachelors in Computer Applications", "2022 / 2025"],
    ["MERN Development", "2024 / Kolkata"],
    ["Matric & Higher Secondary", "2020 / 2022"],
  ];

  return (
    <section className="w-full bg-[var(--bg-main)] flex justify-center py-16 sm:py-20">
      <div className="max-w-8xl px-4 md:px-12">
        {/* HEADERS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-10">
          {/* ABOUT HEADING */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)]">
                About Me
              </span>

              <span className="h-px w-12 bg-[var(--accent-primary)]" />
            </div>

            <p className="max-w-md text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              A quick overview of who I am, what I do, and how I create
              meaningful digital experiences.
            </p>
          </div>

          {/* QUICK INFO HEADING */}
          <div className="lg:col-span-5 hidden md:flex flex-col lg:border-l lg:border-[var(--border-light)] lg:pl-10">
            <h2 className="heading-font text-2xl sm:text-3xl text-[var(--text-main)]">
              Quick <span className="text-[var(--accent-primary)]">info</span>
            </h2>

            <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
              Education, experience, technical skills, and professional
              development background.
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* ABOUT CONTENT */}
          <div className="lg:col-span-7">
            <p className="text-sm sm:text-sm text-justify text-[var(--text-main)] leading-[1.9]">
              I'm{" "}
              <span className="font-medium text-[var(--accent-primary)]">
                Joydeep Paul
              </span>
              , a Full Stack Developer focused on building modern, responsive,
              and user-centric digital products. I specialize in frontend
              development using React.js, JavaScript, TypeScript, Tailwind CSS,
              GSAP, and Framer Motion, while also working with Node.js,
              Express.js, MongoDB, REST APIs, and authentication systems to
              build complete web applications. I have hands-on experience
              developing reusable components, integrating APIs, managing
              application state, designing backend services, and implementing
              scalable application workflows.
            </p>

            <p className="mt-6 text-sm sm:text-sm text-justify text-[var(--text-secondary)] leading-[1.9]">
              I enjoy turning ideas into polished, production-ready applications
              by combining clean architecture, maintainable code, intuitive user
              experiences, and reliable backend systems. I focus on performance,
              responsiveness, usability, and visual quality while continuously
              improving my skills across the full development stack.
            </p>
          </div>

          {/* QUICK INFO CONTENT */}
          <div className="lg:col-span-5 lg:border-l lg:border-[var(--border-light)] lg:pl-10">
            <div className="lg:col-span-5 md:hidden flex flex-col mb-8 lg:border-l lg:border-[var(--border-light)] lg:pl-10">
              <h2 className="heading-font text-2xl sm:text-3xl text-[var(--text-main)]">
                Quick <span className="text-[var(--accent-primary)]">info</span>
              </h2>

              <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                Education, experience, technical skills, and professional
                development background.
              </p>
            </div>
            <div className="">
              {info.map(([title, year], index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-6 py-2 first:pt-0"
                >
                  <span className="text-xs sm:text-sm text-[var(--text-secondary)]">
                    {title}
                  </span>

                  <span className="shrink-0 text-[10px] sm:text-xs font-medium text-[var(--text-main)] uppercase">
                    {year}
                  </span>
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
