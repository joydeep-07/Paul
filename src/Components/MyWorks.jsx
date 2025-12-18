import React from "react";
import { projects } from "../Utils/Projects";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import WorkBadge from "./WorkBadge";
import Footer from "../layout/Footer";

const MyWorks = () => {
  const navigate = useNavigate();


  return (
    <>
      <div className="min-h-screen bg-[var(--bg-main)] transition-colors duration-300">
        <div className="container mx-auto px-4 py-16 md:px-6 lg:px-8 max-w-7xl">
          {/* PREMIUM HEADER SECTION */}
         

          {/* PREMIUM PROJECT GRID */}
          <div
            initial="hidden"
            animate="visible"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => navigate(`/project/${project.id}`)}
                className="group relative bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-main)] border border-[var(--border-light)] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:bg-[var(--bg-secondary)] "
              >
                {/* IMAGE CONTAINER - Full image display */}
                <div className="relative h-[400px]  overflow-hidden bg-[#b7e4c7] mb-5 rounded-2xl">
                  <div className="absolute inset-0 flex items-center justify-center p-7 ">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-xl transition-all duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="p-4 flex justify-between">
                  <div>
                    <h1 className="text-[var(--text-main)] pb-2 text-2xl heading-font">
                      {project.title}
                    </h1>
                    <p className="text-[var(--text-secondary)]/80 pb-2 text-sm">
                      {project.shortDescription}
                    </p>
                  </div>
                  <h2> {project.year}</h2>
                </div>
              </div>
            ))}
          </div>

          {/* FOOTER NOTE */}
          <div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-8 border-t border-[var(--border-light)] text-center"
          >
            <p className="text-sm text-[var(--text-secondary)] opacity-80">
              Interested in collaboration?{" "}
              <a
                href="/contact"
                className="text-[var(--accent-primary)] font-medium hover:underline"
              >
                Let's discuss your next project
              </a>
            </p>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default MyWorks;
