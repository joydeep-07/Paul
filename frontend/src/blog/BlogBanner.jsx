import React, { useState } from "react";
import blogImage from "../assets/blog/ui.jpg";
import blogVid from "../assets/blog/short.mp4";
import { Link } from "react-router-dom";
import ProjectHeading from "../Components/ProjectHeading";

const BlogBanner = () => {
  const [loaded, setLoaded] = useState(false);

  const blog = {
    title: "Building Scalable MERN Applications",
    description:
      "A deep dive into structuring large-scale MERN stack applications with clean architecture, authentication, performance optimization, and scalable folder patterns.",
    date: "Feb 2026",
    readTime: "8 min read",
    thumbnail: blogImage,
  };

  return (
    <div className="bg-[var(--bg-main)] transition-colors duration-300 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-0 lg:px-0">
        <ProjectHeading
          small="Blog Section"
          heading={
            <h1 className="text-3xl heading-font sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-2">
              Latest{" "}
              <span className="text-[var(--accent-primary)] bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                Articles
              </span>
            </h1>
          }
          desc="Explore my latest thoughts on development, design, modern web technologies, and the lessons I learn while building real-world projects."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT FEATURED CARD */}
          <div
            className="relative p-[1.5px] rounded-3xl overflow-hidden cursor-glow group"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty(
                "--x",
                `${e.clientX - rect.left}px`,
              );
              e.currentTarget.style.setProperty(
                "--y",
                `${e.clientY - rect.top}px`,
              );
            }}
          >
            {/* Cursor Gradient Border */}
            <div className="absolute inset-0 rounded-3xl insta-cursor-border pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Card */}
            <div
              className="
                relative z-10
                rounded-3xl
                border border-[var(--border-light)]/50
                bg-[var(--bg-secondary)]
                shadow-sm
                transition-all duration-500
              "
            >
              {/* IMAGE */}
              {/* MEDIA */}
              <div className="relative overflow-hidden rounded-xl m-5 block group">
                {!loaded && (
                  <div className="absolute inset-0 rounded-xl bg-[var(--border-light)] animate-pulse z-20" />
                )}

                {/* IMAGE (Default) */}
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  loading="lazy"
                  onLoad={() => setLoaded(true)}
                  className={`
      w-full h-full object-contain rounded-xl
      transition-all duration-500 ease-out
      ${loaded ? "opacity-100" : "opacity-0"}
      group-hover:opacity-0
    `}
                />

                {/* VIDEO (On Hover) */}
                <video
                  src={blogVid}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="
      absolute inset-0 w-full h-full object-cover rounded-xl
      opacity-0 group-hover:opacity-100
      transition-opacity duration-500 ease-in-out
      pointer-events-none
    "
                />
              </div>
              {/* CONTENT */}
              <Link
                to="/blog/mern-architecture"
                className="px-6 pb-6 flex items-start justify-between gap-4"
              >
                <div>
                  <h2 className="heading-font text-lg sm:text-xl lg:text-2xl text-[var(--text-main)]">
                    {blog.title}
                  </h2>

                  <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)]/80 leading-relaxed">
                    {blog.description.substring(0, 104)}...
                  </p>
                </div>

                {/* <span className="text-xs p-1 sm:text-sm opacity-50 whitespace-nowrap font-medium tracking-wide">
                  {blog.date}
                </span> */}
              </Link>
            </div>
          </div>

          {/* RIGHT → BLOG CONTENT */}
          <div className="space-y-6 p-2">
            <h3 className="heading-font text-2xl tracking-tight sm:text-[45px] text-[var(--text-main)] leading-tight">
              Latest Insights on{" "}
              <span className="text-[var(--accent-primary)]">
                MERN Architecture
              </span>
            </h3>

            <p className="text-[var(--text-secondary)] text-xs lg:text-sm text-justify leading-relaxed">
              In 2026, the MERN stack MongoDB, Express.js, React, and Node.js
              continues to thrive as one of the most versatile and productive
              full-stack JavaScript ecosystems. Far from being just a tool for
              simple CRUD applications, MERN has matured into the preferred
              foundation for intelligent, high-performance web experiences. The
              single-language advantage of JavaScript (now overwhelmingly paired
              with TypeScript) dramatically reduces context switching,
              accelerates development cycles, and enables seamless scaling from
              startups to enterprise modernization projects.
            </p>

            <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-[var(--text-secondary)]">
              <span className="px-3 py-1 rounded-full border border-[var(--border-light)]">
                MongoDB
              </span>
              <span className="px-3 py-1 rounded-full border border-[var(--border-light)]">
                Express
              </span>
              <span className="px-3 py-1 rounded-full border border-[var(--border-light)]">
                React
              </span>
              <span className="px-3 py-1 rounded-full border border-[var(--border-light)]">
                Node.js
              </span>
            </div>

            <div className="py-5 hidden md:flex justify-center md:justify-start">
              <Link to="/blogs">
                <button className="cursor-pointer relative overflow-hidden px-8 py-3 rounded-full font-medium tracking-[0.1em] text-[var(--text-main)] hover:text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/5 border border-[var(--border-light)] shadow-sm transition-all duration-500">
                  <span className="text-[10px] sm:text-xs">WATCH MORE</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-20 mt-5 sm:mt-16 pt-8 border-t border-[var(--border-light)] text-center">
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] opacity-80">
            Want more technical deep dives?{" "}
            <Link
              to="/blogs"
              className="text-[var(--accent-primary)] font-medium hover:underline"
            >
              Explore all articles
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
