import React, { useState } from "react";
import second from "../assets/thumbnail/bharat.png";
import ProjectHeading from "./ProjectHeading";
import { Link, useNavigate } from "react-router-dom";

const TopProject = () => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  const project = {
    title: "Bharat Vraman",
    shortDescription:
      "A beautifully designed temple exploration platform showcasing famous Indian temples with detailed information and smooth UI experience.",
    year: "2026",
    thumbnail: second,
  };

  const handleNavigation = ()=>{
    navigate("/project/bharat-vraman");
  }

  const handleProjects = () => {
    navigate("/projects");
  };

  return (
    <div className="bg-[var(--bg-main)] relative transition-colors duration-300 py-20">
      <ProjectHeading
        small={"Project Showcase"}
        heading={
          <h1 className="text-3xl heading-font sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-2">
            Featured{" "}
            <span className="text-[var(--accent-primary)] bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
        }
        desc={
          "Each project is unique, and I follow a structured approach to turn ideas into seamless user experiences."
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-0 lg:px-0 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT → FEATURED CARD */}
          <div
            onClick={handleNavigation}
            className=" group cursor-pointer rounded-2xl border border-[var(--border-light)]/50 bg-[var(--bg-secondary)]/80 shadow-sm"
          >
            {/* IMAGE */}
            <div className=" relative overflow-hidden rounded-xl m-5 ">
              {!loaded && (
                <div className="absolute inset-0 rounded-xl bg-[var(--border-light)] animate-pulse" />
              )}

              <img
                src={project.thumbnail}
                alt={project.title}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                className={` w-full h-full object-contain rounded-xl transition-all duration-700 ease-out ${loaded ? "opacity-100" : "opacity-0"} `}
              />
            </div>

            {/* CONTENT */}
            <div className="px-6 pb-6 flex items-start justify-between gap-4">
              <div>
                <h2 className="heading-font text-lg sm:text-xl lg:text-2xl text-[var(--text-main)] transition-colors duration-300">
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
              Temple Explorer is a modern React.js web application that lets
              users explore famous temples across India. It showcases temples in
              a responsive grid layout with images, names, and locations. Each
              temple includes a dedicated detail page using dynamic routing with
              slugs, displaying information like deity, history, timings, and
              significance. The project features a clean UI with smooth
              animations, reusable components, and user-friendly navigation.
            </p>

            <ul className="space-y-3 text-[var(--text-secondary)]">
              <li>
                {" "}
                <span className=" text-[var(--accent-primary)] mr-2 font-bold ">
                  ✓
                </span>{" "}
                Fully responsive UI
              </li>
              <li>
                {" "}
                <span className=" text-[var(--accent-primary)] mr-2 font-bold ">
                  ✓
                </span>{" "}
                Built with React.js, React Router, and Tailwind CSS
              </li>
              <li>
                {" "}
                <span className=" text-[var(--accent-primary)] mr-2 font-bold ">
                  ✓
                </span>{" "}
                Dynamic routing with slugs for temple detail pages
              </li>
              <li>
                {" "}
                <span className=" text-[var(--accent-primary)] mr-2 font-bold ">
                  ✓
                </span>{" "}
                Responsive grid layout showcasing temples with images and info
              </li>
            </ul>

            <div className=" py-5 flex justify-center md:justify-start ">
              <button
                onClick={handleProjects}
                className="cursor-pointer relative overflow-hidden px-8 py-3 rounded-full font-medium tracking-[0.1em] text-[var(--text-main)] hover:text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/5 border border-[var(--border-light)] shadow-sm transition-all duration-500"
              >
                <span className="text-[10px] sm:text-xs">SEE ALL PROJECTS</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 sm:mt-16 pt-8 border-t border-[var(--border-light)] text-center">
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] opacity-80">
            Interested in collaboration?{" "}
            <Link
              to="/contact"
              className="text-[var(--accent-primary)] font-medium hover:underline"
            >
              Let&apos;s discuss your next project
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopProject;
