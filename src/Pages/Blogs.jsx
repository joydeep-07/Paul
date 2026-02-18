import React, { useState } from "react";
import { blogs } from "../Utils/blogs";
import { Link } from "react-router-dom";
import ProjectHeading from "../Components/ProjectHeading";
import { Image } from "lucide-react";
import WorkBadge from "../Components/WorkBadge";
import Footer from "../layout/Footer";

const Blogs = () => {
  const [loadedImages, setLoadedImages] = useState({});

  const handleLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <>
      <div className="bg-[var(--bg-main)] min-h-screen transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-0 lg:px-0">
          <ProjectHeading />

          {/* Cards Wrapper */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
            {blogs.map((blog) => (
              <Link key={blog.id} to={`/blog/${blog.slug}`} className="w-full">
                <div
                  className="
          group cursor-pointer
          rounded-3xl
          border border-[var(--border-light)]/50
          bg-[var(--bg-secondary)]/80
          shadow-sm hover:shadow-xl
          transition-all duration-500
        "
                >
                  {/* IMAGE */}
                  <div
                    className="
    relative overflow-hidden rounded-2xl m-5
                h-[240px] sm:h-[280px] md:h-[300px] lg:h-[320px]
   
    bg-[var(--bg-secondary)]
  "
                  >
                    {blog.img ? (
                      <img
                        src={blog.img}
                        alt={blog.title}
                        className="
        w-full h-full object-cover rounded-xl
        transition-all duration-700
      "
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Image
                          size={70}
                          className="text-[var(--text-secondary)]/40"
                        />
                      </div>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="px-6 pb-6">
                    <h3 className="heading-font text-lg sm:text-xl text-[var(--text-main)] leading-snug">
                      {blog.title}
                    </h3>

                    <div className="mt-5 flex items-center justify-between text-xs sm:text-sm text-[var(--text-secondary)] opacity-70">
                      <span>{blog.date}</span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <WorkBadge />
      <Footer />
    </>
  );
};

export default Blogs;
