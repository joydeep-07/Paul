import React, { useState } from "react";
import { reviews } from "../Utils/Reviews";
import { ArrowUp } from "lucide-react";

const Reviews = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleReadMore = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <div className="py-15 bg-[var(--bg-main)] flex justify-center items-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row">
          {/* Left */}
          <div className="w-full md:w-1/3 px-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-main)] opacity-70 mb-2">
              Testimonials
            </h3>

            <div className="mt-1 mb-6 h-[2px] w-16 bg-[var(--accent-primary)] rounded-full" />

            <h1 className="heading-font text-4xl md:text-5xl leading-tight mb-4 text-[var(--text-heading)]">
              What others{" "}
              <span className="text-[var(--accent-primary)]">Say</span>
            </h1>

            <p className="text-sm md:text-base leading-relaxed text-[var(--text-main)] opacity-80 max-w-sm">
              I’ve worked with some amazing people over the years here’s what
              they have to say about me.
            </p>
          </div>

          {/* Right */}
          <div className="w-full md:w-2/3 p-4 space-y-6">

          {/* Slide  */}
            {reviews.map((item) => {
              const words = item.review.split(" ");
              const shortText = words.slice(0, 40).join(" ");
              const isExpanded = expandedId === item.id;

              return (
                <div
                  key={item.id}
                  className="border border-[var(--border-light)] bg-[var(--bg-secondary)] rounded-xl"
                >
                  <div className="flex items-center">
                    <div className="p-2 border-2 border-[var(--accent-primary)] rounded-full m-4">
                      <img
                        className="h-16 w-16 rounded-full object-cover"
                        src={item.photo}
                        alt={item.name}
                      />
                    </div>

                    <div>
                      <h1 className="font-semibold text-[var(--text-main)]">
                        {item.name}
                      </h1>
                      <p className="text-sm text-[var(--text-secondary)]">
                        {item.position}
                      </p>
                    </div>
                  </div>

                  <p className="text-justify p-4 text-[var(--text-main)] max-w-3xl">
                    {isExpanded ? item.review : shortText}
                    {words.length > 40 && (
                      <span
                        onClick={() => toggleReadMore(item.id)}
                        className="cursor-pointer text-[var(--accent-primary)] font-medium"
                      >
                        {isExpanded ? " read less" : " ...read more"}
                      </span>
                    )}
                  </p>
                </div>
              );
            })}

            {/* CTA */}
            <div className="flex flex-wrap gap-3 sm:gap-5 py-2 sm:py-0 px-2 sm:px-3">
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/joydeep-paul-06b37926a",
                    "_blank"
                  )
                }
                className="flex pb-2 border-b border-[var(--border-light)] items-center gap-2 text-[var(--text-main)] text-xs md:text-sm font-medium hover:text-[var(--accent-primary)]"
              >
                <span>Check it out on LinkedIn</span>
                <ArrowUp className="w-4 h-4 rotate-45" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen bg-[var(--bg-main)]"></div>
    </>
  );
};

export default Reviews;
