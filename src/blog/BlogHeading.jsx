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
      className="relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[var(--bg-gradient)] opacity-70"></div>

      <div className="relative container mx-auto px-6 py-24 md:py-32 text-center">
        <h1 className="heading-font text-5xl md:text-7xl font-bold tracking-tight mb-6 text-[var(--text-main)]">
          {title}{" "}
          <span className="text-[var(--accent-primary)]">{highlight}</span>
        </h1>

        <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 text-[var(--text-secondary)]">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-[var(--accent-primary)] text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
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
