import React from "react";
import { awards } from "../Utils/Awards";

const Awards = () => {
  return (
    <section className="w-full bg-[var(--bg-main)] py-12 transition-colors duration-300 sm:py-16 md:py-20">
      <div className="mx-auto max-w-8xl px-4 md:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-20">
          {/* LEFT */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs">
                Qualification
              </span>

              <span className="h-px w-10 bg-[var(--accent-primary)] sm:w-12" />
            </div>

            <h2 className="heading-font mt-5 text-3xl leading-tight text-[var(--text-main)] sm:text-4xl md:text-4xl">
             Proffetional{" "}
              <span className="text-[var(--accent-primary)]">Milestones</span>
            </h2>

            <p className="mt-4 max-w-md text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
              A selection of achievements, recognitions, and milestones from my
              academic and professional journey.
            </p>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-8">
            {/* AWARDS LIST */}
            <div className="border-t border-[var(--border-light)]">
              {awards.map((award, index) => (
                <div
                  key={award.id}
                  className="group flex items-center justify-between gap-6 border-b border-[var(--border-light)] py-4 transition-colors duration-300 sm:py-5"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <span className="shrink-0 text-[10px] font-medium tracking-[0.15em] text-[var(--text-secondary)]/50 transition-colors duration-300 group-hover:text-[var(--accent-primary)] sm:text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-xs font-medium text-[var(--text-secondary)]/90 uppercase transition-colors duration-300 group-hover:text-[var(--text-main)] sm:text-sm md:text-xs">
                      {award.title}
                    </h3>
                  </div>

                  <span className="shrink-0 whitespace-nowrap text-[10px] font-medium uppercase tracking-wide text-[var(--text-secondary)]/70 sm:text-xs">
                    {award.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
