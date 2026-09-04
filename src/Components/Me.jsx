import React, { useState } from "react";
import me from "../assets/images/main1.png";
import CircularText from "./CircularText";
import { User } from "lucide-react";
import DownloadModal from "./DownloadModal";

const Me = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    setShowModal(true);
  };

  const confirmDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Joydeep_Paul_Resume.pdf";
    link.click();

    setShowModal(false);
  };

  return (
    <>
      <section className="w-full bg-[var(--bg-main)] transition-colors duration-300">
        <div className="mx-auto max-w-8xl px-4 md:px-12">
          {/* TOP LABEL */}
          {/* <div className="mb-10 flex items-center gap-3 sm:mb-12">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs">
              About Me
            </span>

            <span className="h-px w-10 bg-[var(--accent-primary)] sm:w-12" />
          </div> */}

          {/* MAIN CONTENT */}
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-20">
            {/* IMAGE SIDE */}
            <div className="relative flex justify-center pt-6 lg:col-span-4 lg:justify-start">
              <div className="relative">
                {/* IMAGE LOADER */}
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-b-full bg-[var(--border-light)]/40">
                    <User
                      className="text-[var(--text-secondary)]/40"
                      size={90}
                    />
                  </div>
                )}

                <img
                  src={me}
                  alt="Joydeep Paul"
                  loading="lazy"
                  onLoad={() => setImageLoaded(true)}
                  className={`h-80 w-70 object-contain object-top rounded-b-full transition-opacity duration-500
                    xs:h-96 xs:w-80
                    sm:h-110 sm:w-90
                    md:h-120 md:w-95
                    lg:h-130 lg:w-100
                    ${imageLoaded ? "opacity-100" : "opacity-0"}
                  `}
                />

                {/* CIRCULAR TEXT */}
                {imageLoaded && (
                  <div className="absolute -bottom-3 -right-8 scale-75 xs:-bottom-4 xs:-right-9 xs:scale-90 sm:-bottom-5 sm:-right-10 sm:scale-100">
                    <CircularText
                      text="LET'S TALK • LET'S TALK • LET'S TALK • "
                      radius={30}
                      fontSize={10}
                      rotateSpeed={40}
                      direction="clockwise"
                      textColor="var(--text-main)"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* TEXT SIDE */}
            <div className="lg:col-span-8 lg:pl-0">
              <div className="w-full">
                {/* HEADING */}
                <h1 className="heading-font text-3xl font-medium leading-tight tracking-tight text-[var(--text-main)] sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[60px]">
                  A creative{" "}
                  <span className="text-[var(--accent-primary)]">
                    developer
                  </span>{" "}
                  & digital designer
                </h1>

                {/* DESCRIPTION */}
                <p className="mt-6 w-full text-justify text-sm leading-[1.9] text-[var(--text-secondary)] sm:text-sm">
                  I’m a Full Stack Developer with strong expertise in building
                  responsive, interactive, and scalable web applications using
                  React.js, JavaScript, and TypeScript. I specialize in modern
                  frontend development with Tailwind CSS, GSAP, and Framer
                  Motion, while also working with Node.js, Express.js, and
                  MongoDB to develop robust backend services and RESTful APIs. I
                  have experience implementing authentication, role-based access
                  control, state management, database integration, and
                  end-to-end application workflows.
                </p>

                <p className="mt-5 w-full text-justify text-sm leading-[1.9] text-[var(--text-secondary)]">
                  I focus on transforming ideas into complete, production-ready
                  digital products by combining clean architecture, reusable
                  components, scalable backend systems, optimized APIs, and
                  polished user experiences. My approach emphasizes maintainable
                  code, performance, security, responsiveness, and intuitive
                  interfaces across the entire application stack.
                </p>

                {/* TECHNICAL INFO */}
                <div className="mt-8 border-y border-[var(--border-light)]">
                  {/* PRIMARY FOCUS */}
                  <div className="flex items-center justify-between gap-6 py-4 sm:inline-flex sm:w-1/3 sm:justify-start sm:border-r sm:border-[var(--border-light)] sm:pr-6 sm:py-5">
                    <div>
                      <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)] sm:text-[10px]">
                        Primary Focus
                      </span>

                      <p className="mt-1 text-xs uppercase font-medium text-[var(--text-main)] sm:mt-2 sm:text-sm">
                        Fullstack Development
                      </p>
                    </div>
                  </div>

                  {/* CORE STACK */}
                  <div className="flex items-center justify-between gap-6 border-t border-[var(--border-light)] py-4 sm:inline-flex sm:w-1/3 sm:border-t-0 sm:border-r sm:border-[var(--border-light)] sm:px-6 sm:py-5">
                    <div>
                      <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)] sm:text-[10px]">
                        Core Stack
                      </span>

                      <p className="mt-1 text-xs uppercase font-medium text-[var(--text-main)] sm:mt-2 sm:text-sm">
                        React / Node / MongoDB
                      </p>
                    </div>
                  </div>

                  {/* EXPERTISE */}
                  <div className="flex items-center justify-between gap-6 border-t border-[var(--border-light)] py-4 sm:inline-flex sm:w-1/3 sm:border-t-0 sm:pl-6 sm:py-5">
                    <div>
                      <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)] sm:text-[10px]">
                        Expertise
                      </span>

                      <p className="mt-1 text-xs uppercase font-medium text-[var(--text-main)] sm:mt-2 sm:text-sm">
                        UI / UX / Full Stack
                      </p>
                    </div>
                  </div>
                </div>

                {/* DOWNLOAD */}
                <div className="mt-8 flex justify-start">
                  <button
                    onClick={handleDownload}
                    className="relative cursor-pointer overflow-hidden rounded-full border border-[var(--accent-primary)] bg-[var(--accent-primary)] px-8 py-3 font-medium tracking-[0.1em] text-white shadow-sm transition-all duration-500 hover:opacity-90 sm:px-10"
                  >
                    <span className="flex items-center justify-center gap-2 text-[10px] sm:text-xs">
                      DOWNLOAD RESUME
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <DownloadModal
            onCancel={() => setShowModal(false)}
            onConfirm={confirmDownload}
          />
        </div>
      )}
    </>
  );
};

export default Me;
