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
      className="relative pt-10 w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
      }}
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[var(--bg-main)]/80 via-[var(--bg-main)]/60 to-[var(--bg-main)]"
        aria-hidden="true"
      />

      {/* Accent Glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/20 via-transparent to-[var(--accent-secondary)]/20" />
      </div>

      {/* Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: "linear-gradient(to top, var(--bg-main), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className="
          relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
          py-16 sm:py-24 md:py-32
          text-left sm:text-center
          flex flex-col items-start sm:items-center
        "
      >
        {/* Heading */}
        <h1
          className="
            heading-font
            text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
           tracking-tight leading-tight
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
            text-base sm:text-lg md:text-xl lg:text-2xl
            max-w-full sm:max-w-2xl md:max-w-3xl
            opacity-90
            text-[var(--text-secondary)]
          "
        >
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-8 flex flex-wrap justify-start sm:justify-center gap-3 sm:gap-4 w-full sm:max-w-3xl">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="
                  px-4 py-2 sm:px-5 sm:py-2.5
                  text-xs sm:text-sm
                  bg-[var(--bg-secondary)]/60
                  border border-[var(--border-light)]
                  text-[var(--text-main)]
                  rounded-full
                  font-medium
                  shadow-sm
                  hover:shadow-lg
                  hover:scale-105
                  transition-all duration-300
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
