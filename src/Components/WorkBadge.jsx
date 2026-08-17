import React from "react";
import { useNavigate } from "react-router-dom";
import SplitText from "./SplitText";

const WorkBadge = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <section className="w-full bg-[var(--bg-main)] py-15 pb-24 md:pb-6 transition-colors duration-300 sm:py-20">
      <div className="mx-auto max-w-8xl px-4 md:px-12">
        <div className="">
          {/* HEADER */}
          <div className="mb-8 flex items-center gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs">
              Let&apos;s Work Together
            </span>

            <span className="h-px w-10 bg-[var(--accent-primary)] sm:w-12" />
          </div>

          {/* CONTENT */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-20">
            {/* LEFT */}
            <div className="lg:col-span-5">
              {/* Availability */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-light)] px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-primary)] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent-primary)]" />
                </span>

                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--text-secondary)] sm:text-xs">
                  Available to work
                </span>
              </div>

              {/* Heading */}
              <div className="overflow-hidden">
                <SplitText
                  text="Let's create your"
                  className="heading-font text-3xl font-semibold leading-tight text-[var(--text-main)] sm:text-4xl md:text-5xl lg:text-6xl"
                  delay={50}
                  duration={1.25}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="left"
                  showCallback
                />
              </div>

              <div className="overflow-hidden">
                <SplitText
                  text="next big idea."
                  className="heading-font text-3xl font-semibold leading-tight text-[var(--accent-primary)] sm:text-4xl md:text-5xl lg:text-6xl"
                  delay={75}
                  duration={1.25}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="left"
                  showCallback
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="md:border-l border-[var(--border-light)] lg:col-span-7 lg:pl-10">
              <p className="w-full text-justify text-sm leading-[1.9] text-[var(--text-secondary)]">
                Have an idea, project, or product that you want to bring to
                life? I&apos;m always open to discussing interesting projects,
                creative ideas, and opportunities to build something useful.
              </p>

              <p className="mt-5 w-full text-justify text-sm leading-[1.9] text-[var(--text-secondary)]">
                Let&apos;s turn your idea into a responsive, polished, and
                meaningful digital experience.
              </p>

              {/* BUTTON */}
              <div className="mt-8">
                <button
                  onClick={handleContactClick}
                  className="group relative cursor-pointer overflow-hidden rounded-full border border-[var(--accent-primary)] bg-[var(--accent-primary)] px-8 py-3 font-medium tracking-[0.1em] text-white shadow-sm transition-all duration-500 hover:opacity-90 sm:px-10"
                >
                  <span className="flex items-center justify-center gap-2 text-[10px] sm:text-xs">
                    CONTACT ME
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-12 border-t border-[var(--border-light)] pt-6">
            <p className="text-center text-xs text-[var(--text-secondary)] opacity-80 sm:text-sm">
              Open to frontend, full-stack, and Node.js development
              opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkBadge;
