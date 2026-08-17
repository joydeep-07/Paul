import React, { useState } from "react";
import blogImage from "../assets/blog/ui2.jpg";
import blogVid from "../assets/blog/short.mp4";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const BlogBanner = () => {
  const [loaded, setLoaded] = useState(false);

  const blog = {
    title: "Building Scalable MERN Applications",
    shortDescription:
      "A deep dive into structuring large-scale MERN stack applications with clean architecture, authentication, performance optimization, and scalable folder patterns.",
    date: "Feb 2026",
    thumbnail: blogImage,
  };

  return (
    <section className="w-full bg-[var(--bg-main)] py-0 transition-colors duration-300">
      <div className="mx-auto max-w-8xl px-4 md:px-12">
        {/* HEADER */}
        <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-20">
          {/* LEFT */}
          <div className="hidden flex-col lg:col-span-7 md:flex">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs">
                Blog Section
              </span>

              <span className="h-px w-10 bg-[var(--accent-primary)] sm:w-12" />
            </div>

            <p className="max-w-md text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
              Explore my latest thoughts on development, design, modern web
              technologies, and lessons learned while building real-world
              projects.
            </p>
          </div>

          {/* MOBILE HEADER */}
          <div className="md:hidden lg:col-span-5">
            <div>
              <h2 className="heading-font text-2xl text-[var(--text-main)] sm:text-3xl">
                Latest{" "}
                <span className="text-[var(--accent-primary)]">articles</span>
              </h2>

              <p className="mt-2 max-w-sm text-xs leading-relaxed text-[var(--text-secondary)]">
                A closer look at my development experiences, technical
                decisions, and ideas.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden border-l border-[var(--border-light)] pl-10 md:flex lg:col-span-5">
            <div>
              <h2 className="heading-font text-2xl text-[var(--text-main)] sm:text-3xl">
                Latest{" "}
                <span className="text-[var(--accent-primary)]">articles</span>
              </h2>

              <p className="mt-2 max-w-sm text-xs leading-relaxed text-[var(--text-secondary)]">
                A closer look at my development experiences, technical
                decisions, and ideas.
              </p>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          {/* LEFT — BLOG CARD */}
          <div className="lg:col-span-7">
            <div className="group cursor-pointer rounded-sm md:rounded-2xl md:border border-[var(--border-light)]/50 md:bg-[var(--bg-secondary)]/80 md:shadow-sm">
              {/* MEDIA */}
              <Link
                to="/blog/mern-architecture"
                className="relative md:m-5 block overflow-hidden rounded-sm md:rounded-xl"
              >
                {!loaded && (
                  <div className="absolute inset-0 z-20 animate-pulse rounded-sm bg-[var(--border-light)] md:rounded-xl" />
                )}

                {/* IMAGE */}
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  loading="lazy"
                  onLoad={() => setLoaded(true)}
                  className={`h-full w-full rounded-sm object-contain transition-all duration-500 ease-out md:rounded-xl ${
                    loaded ? "opacity-100" : "opacity-0"
                  } group-hover:opacity-0`}
                />

                {/* VIDEO */}
                <video
                  src={blogVid}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="pointer-events-none absolute inset-0 h-full w-full rounded-sm object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 md:rounded-xl"
                />
              </Link>

              {/* CARD CONTENT */}
              <Link
                to="/blog/mern-architecture"
                className="flex items-start justify-between gap-4 px-0 pt-6 pb-6 md:px-6 md:pt-0"
              >
                <div className="w-full">
                  {/* TITLE + DATE */}
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="heading-font text-lg text-[var(--text-main)] transition-colors duration-300 sm:text-xl lg:text-2xl">
                      {blog.title}
                    </h2>

                    <span className="shrink-0 whitespace-nowrap text-[10px] font-medium uppercase tracking-wide text-[var(--text-main)] opacity-50 sm:text-xs">
                      {blog.date}
                    </span>
                  </div>

                  {/* FULL WIDTH DESCRIPTION */}
                  <p className="mt-2 w-full text-justify text-xs leading-relaxed text-[var(--text-secondary)]/80 sm:text-sm">
                    {blog.shortDescription}
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* RIGHT — TEXT AREA */}
          <div className="lg:col-span-5 lg:border-l lg:border-[var(--border-light)] lg:pl-10">
            {/* MOBILE PROJECT SHOWCASE STYLE HEADER */}
            <div className="pb-8 md:hidden lg:col-span-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs">
                  Blog Section
                </span>

                <span className="h-px w-10 bg-[var(--accent-primary)] sm:w-12" />
              </div>

              <p className="max-w-md text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                Explore my latest thoughts on development, design, modern web
                technologies, and lessons learned while building real-world
                projects.
              </p>
            </div>

            {/* CONSTRAINED TEXT WIDTH */}
            <div className="max-w-md">
              <h3 className="heading-font text-2xl leading-tight tracking-tight text-[var(--text-main)] md:text-4xl">
                Latest insights on{" "}
                <span className="text-[var(--accent-primary)]">
                  MERN architecture
                </span>
              </h3>

              <p className="mt-6 text-justify text-sm leading-[1.9] text-[var(--text-secondary)]">
                In 2026, the MERN stack continues to be a versatile foundation
                for building modern full-stack applications. MongoDB,
                Express.js, React, and Node.js provide a unified JavaScript
                ecosystem that simplifies development while allowing
                applications to scale from smaller products to complex
                platforms.
              </p>

              <p className="mt-5 text-justify text-sm leading-[1.9] text-[var(--text-secondary)]">
                This article explores practical approaches to structuring
                scalable MERN applications, including clean architecture,
                authentication, performance optimization, reusable patterns, and
                maintainable project organization.
              </p>

              {/* TECHNOLOGIES */}
              <div className="mt-8">
                {["MongoDB", "Express.js", "React.js", "Node.js"].map(
                  (technology, index) => (
                    <div
                      key={technology}
                      className="flex items-center gap-3 py-3"
                    >
                      <span className="text-xs font-medium text-[var(--accent-primary)]">
                        0{index + 1}
                      </span>

                      <span className="text-xs text-[var(--text-secondary)] sm:text-sm">
                        {technology}
                      </span>
                    </div>
                  ),
                )}
              </div>

              {/* ACTIONS */}
              <div className="mt-8 flex items-center gap-6">
                <Link
                  to="/blog/mern-architecture"
                  className="flex cursor-pointer items-center text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-main)] transition-colors duration-300 hover:text-[var(--accent-primary)]"
                >
                  Read Article
                  <span className="ml-2 text-[var(--accent-primary)]">
                    <ChevronRight size={14} />
                  </span>
                </Link>

                <Link
                  to="/blogs"
                  className="cursor-pointer text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--accent-primary)]"
                >
                  All Articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogBanner;
