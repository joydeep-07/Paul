import React from 'react'

const Reviews = () => {
  return (
    <>
      <div className="py-15 bg-[var(--bg-main)] flex justify-center items-center">
        <div className=" w-7xl flex">
          <div className="w-full md:w-1/3 px-4">
            {/* Section label */}
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-main)] opacity-70 mb-2">
              Testimonials
            </h3>
            {/* Decorative line */}
            <div className="mt-1 mb-6 h-[2px] w-16 bg-[var(--accent-primary)] rounded-full" />

            {/* Main heading */}
            <h1 className="heading-font text-4xl md:text-5xl leading-tight mb-4 text-[var(--text-heading)]">
              What others{" "}
              <span className="text-[var(--accent-primary)]">Say</span>
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base leading-relaxed text-[var(--text-main)] opacity-80 max-w-sm">
              I’ve worked with some amazing people over the years here’s what
              they have to say about me.
            </p>
          </div>

          <div className="border w-2/3 flex justify-center items-center px-4 uppercase text-sm text-[var(--text-accent)] opacity-70">
            right side
          </div>
        </div>
      </div>

      <div className="h-screen bg-[var(--bg-main)] "></div>
    </>
  );
}

export default Reviews