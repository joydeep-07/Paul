import React from "react";

const BlogHeading = ({
  title,
  highlight,
  description,
  tags = [],
  backgroundImage,
}) => {
  return (
    <header
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
      }}
    >
      {/* Dynamic Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[var(--bg-main)]/70 via-[var(--bg-main)]/50 to-[var(--bg-main)]/90"
        aria-hidden="true"
      />

      {/* Animated Gradient Accent */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/20 via-transparent to-[var(--accent-secondary)]/20 " />
      </div>

      {/* Soft Edge Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{
          background: "linear-gradient(to top, var(--bg-main), transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
                      py-16 sm:py-20 md:py-28 lg:py-36 
                      text-center flex flex-col items-center"
      >
        {/* Heading */}
        <h1
          className="
            heading-font
            text-3xl 
            sm:text-4xl 
            md:text-5xl 
            lg:text-6xl 
            xl:text-7xl 
            font-bold 
            tracking-tight 
            leading-tight 
            mb-4 sm:mb-6
            text-[var(--text-main)]
          "
        >
          {title}{" "}
          <span className="text-[var(--accent-primary)]">{highlight}</span>
        </h1>

        {/* Description */}
        <p
          className="
            text-base 
            sm:text-lg 
            md:text-xl 
            lg:text-2xl
            max-w-xs 
            sm:max-w-2xl 
            md:max-w-3xl 
            mx-auto 
            opacity-90 
            text-[var(--text-secondary)]
          "
        >
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="
                  px-4 py-2 
                  sm:px-5 sm:py-2.5
                  md:px-6 md:py-3
                  text-xs 
                  sm:text-sm
                  bg-[var(--bg-secondary)]/50 
                  border border-[var(--border-light)]
                  text-white 
                  rounded-full 
                  font-medium 
                  shadow-md 
                  hover:shadow-xl 
                  transition-all 
                  duration-300
                  cursor-default
                "
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default BlogHeading;
