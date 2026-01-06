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
          <div className="lg:col-span-2 bg-[var(--bg-secondary)]/80 border border-[var(--border-light)] rounded-2xl p-6 sm:p-8 shadow-xs">
            <p className="text-[var(--text-main)] text-sm sm:text-base leading-relaxed text-justify">
              I'm{" "}
              <span className="font-semibold text-[var(--accent-primary)]">
                Joydeep Paul
              </span>
              , a passionate developer and designer with over{" "}
              <span className="font-semibold">2+ years</span> of experience in
              crafting seamless, user-centric digital experiences. My expertise
              spans modern web design, full-stack development, and interactive
              user interfaces, with a strong focus on building scalable,
              high-quality, and impactful products.
              <br />
              <br />I enjoy collaborating with forward-thinking teams and
              turning ideas into polished digital solutions that feel intuitive,
              purposeful, and visually refined.
            </p>
          </div>

          {/* Right card */}
          <div className="bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-2xl p-6 flex flex-col justify-center shadow-xs">
            <h4 className="text-lg font-semibold text-[var(--accent-primary)] uppercase mb-4">
              Quick Info
            </h4>

            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-xs  text-[var(--text-secondary)] uppercase font-medium">
                 Tech Experience
                </span>
                <span className="text-[var(--text-main)]/95 uppercase text-xs font-medium">
                  2+ Years
                </span>
              </li>

              <li className="flex justify-between">
                <span className="text-xs uppercase  text-[var(--text-secondary)] font-medium">
                  Role
                </span>
                <span className="text-[var(--text-main)]/95 uppercase text-xs font-medium">
                  Full-Stack Developer
                </span>
              </li>

              <li className="flex justify-between">
                <span className="text-xs uppercase  text-[var(--text-secondary)] font-medium">
                  Focus
                </span>
                <span className="text-[var(--text-main)]/95 uppercase text-xs font-medium">
                  UI • UX • MERN
                </span>
              </li>
            </ul>

            <div className="mt-6 h-[1px] w-full bg-[var(--border-light)]" />

            <p className="mt-4 text-xs text-[var(--text-secondary)] opacity-80">
              Driven by clean design, performance, and meaningful user
              experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
