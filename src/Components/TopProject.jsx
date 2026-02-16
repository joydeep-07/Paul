import React, { useState } from "react";
import second from "../assets/thumbnail/medcare.png";
import ProjectHeading from "./ProjectHeading";

const TopProject = () => {
  const [loaded, setLoaded] = useState(false);

  const project = {
    title: "Medical Appointment Booking System",
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
          <div className=" group cursor-pointer rounded-3xl border border-[var(--border-light)]/50 bg-[var(--bg-secondary)]/80 transition-all duration-500">
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
                className={` w-full h-full object-contain rounded-xl transition-all duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
              />
            </div>

            {/* CONTENT */}
            <div className="px-6 pb-6 flex justify-between items-start gap-6">
              <div>
                <h2
                  className=" heading-font text-2xl sm:text-3xl text-[var(--text-main)] group-hover:text-[var(--accent-primary)] transition-colors duration-300"
                >
                  {project.title}
                </h2>

                <p className="mt-2 text-sm sm:text-sm text-[var(--text-secondary)]/80">
                  {project.shortDescription}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT → DESCRIPTION PANEL */}
          <div className="space-y-6 p-2">
            <h3 className="heading-font text-3xl tracking-tight sm:text-[45px] text-[var(--text-main)]">
              Why This Project{" "}
              <span className="text-[var(--accent-primary)] ">Stands Out</span>
            </h3>

            <p className="text-[var(--text-secondary)] leading-relaxed">
              This platform allows patients to book appointments in real-time,
              receive automated email confirmations, and manage their medical
              history securely. The system includes role-based authentication,
              dynamic slot management, and a clean, responsive UI.
            </p>

            <ul className="space-y-3 text-[var(--text-secondary)]">
              <li>• Real-time slot updates</li>
              <li>• Secure JWT authentication</li>
              <li>• Email notifications via Nodemailer</li>
              <li>• Fully responsive UI</li>
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
