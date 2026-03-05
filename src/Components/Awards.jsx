import React from "react";
import { awards } from "../Utils/Awards";

const Awards = () => {
  return (
    <section className="w-full bg-[var(--bg-main)] py-10 sm:py-14 md:py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-14">
        {/* LEFT */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <h3 className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em] opacity-70">
            Awards
          </h3>

          <div className="h-[2px] w-12 bg-[var(--accent-primary)] rounded-full" />

          <h1 className="heading-font text-3xl sm:text-4xl md:text-5xl leading-snug">
            Awards &{" "}
            <span className="text-[var(--accent-primary)]">Recognition</span>
          </h1>

          <p className="text-xs sm:text-sm opacity-80 max-w-md">
            I’ve worked with some amazing people over the years here’s what
            they have to say about me.
          </p>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-2/3 flex flex-col divide-y divide-[var(--border-light)]">
          {awards.map((award) => (
            <div
              key={award.id}
              className="flex items-center justify-between gap-4 py-4 sm:py-5"
            >
              {/* Award Title */}
              <h3 className="text-sm sm:text-base font-medium text-[var(--text-secondary)]/90">
                {award.title}
              </h3>

              {/* Year */}
              <span className="text-xs sm:text-sm font-medium uppercase text-[var(--text-secondary)]/70 whitespace-nowrap">
                {award.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
