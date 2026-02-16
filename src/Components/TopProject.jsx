import React, { useState } from "react";
import second from "../assets/thumbnail/medcare.png";
import ProjectHeading from "./ProjectHeading";

const TopProject = () => {
  const [loaded, setLoaded] = useState(false);

  const project = {
    title: "Appointment Booking System",
    shortDescription:
      "A full-featured MERN stack platform with real-time slot updates, and automated email confirmations.",
    year: "2025",
    thumbnail: second,
  };

  return (
    <div className="bg-[var(--bg-main)] transition-colors duration-300 py-20">
      <ProjectHeading />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT → FEATURED CARD */}
          <div
            className="
    group cursor-pointer
    rounded-3xl border border-[var(--border-light)]/50
    bg-[var(--bg-secondary)]/80
    shadow-sm
    transition-all duration-500 ease-out
    hover:-translate-y-2
    hover:shadow-xl
    hover:border-[var(--accent-primary)]/20
  "
          >
            {/* IMAGE */}
            <div
              className="
      relative overflow-hidden rounded-2xl m-5
      h-[240px] sm:h-[280px] md:h-[280px] lg:h-[320px]
    "
            >
              {!loaded && (
                <div className="absolute inset-0 rounded-xl bg-[var(--border-light)] animate-pulse" />
              )}

              <img
                src={project.thumbnail}
                alt={project.title}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                className={`
        w-full h-full object-contain rounded-xl
        transition-all duration-700 ease-out
        group-hover:scale-105
        ${loaded ? "opacity-100" : "opacity-0"}
      `}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 rounded-xl" />
            </div>

            {/* CONTENT */}
            <div className="px-6 pb-6 flex items-start justify-between gap-4">
              <div>
                <h2 className="heading-font text-lg sm:text-xl lg:text-2xl text-[var(--text-main)] group-hover:text-[var(--accent-primary)] transition-colors duration-300">
                  {project.title}
                </h2>

                <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)]/80 leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              <span className="text-xs sm:text-sm opacity-50 whitespace-nowrap font-medium tracking-wide">
                {project.year}
              </span>
            </div>
          </div>

          {/* RIGHT → DESCRIPTION PANEL */}
          <div className="space-y-6 p-2">
            <h3 className="heading-font text-3xl tracking-tight sm:text-[45px] text-[var(--text-main)]">
              Why This Project{" "}
              <span className="text-[var(--accent-primary)] ">Stands Out</span>
            </h3>

            <p className="text-[var(--text-secondary)] text-justify leading-relaxed">
              This platform allows patients to book appointments in real-time,
              receive automated email confirmations, and manage their medical
              history securely. The system includes role-based authentication,
              dynamic slot management, and a clean, responsive UI.
            </p>

            <ul className="space-y-3 text-[var(--text-secondary)]">
              <li>
                {" "}
                <span className=" text-[var(--accent-primary)] mr-2 font-bold ">
                  ✓
                </span>{" "}
                Real-time slot updates
              </li>
              <li>
                {" "}
                <span className=" text-[var(--accent-primary)] mr-2 font-bold ">
                  ✓
                </span>{" "}
                Secure JWT authentication
              </li>
              <li>
                {" "}
                <span className=" text-[var(--accent-primary)] mr-2 font-bold ">
                  ✓
                </span>{" "}
                Email notifications via Nodemailer
              </li>
              <li>
                {" "}
                <span className=" text-[var(--accent-primary)] mr-2 font-bold ">
                  ✓
                </span>{" "}
                Fully responsive UI
              </li>
            </ul>

            <div className=" py-5 flex justify-center md:justify-start ">
              <button className="cursor-pointer relative overflow-hidden px-8 py-3 rounded-full font-medium tracking-[0.1em] text-[var(--text-main)] hover:text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/5 border border-[var(--border-light)] shadow-sm transition-all duration-500">
                <span className="text-[10px] sm:text-xs">
                  READ FULL CASESTUDY
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProject;
