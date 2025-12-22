import React from 'react'
import { ArrowUp } from "lucide-react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { awards } from '../Utils/Awards';
const Awards = () => {
    

  return (
    <div>
      <div className="py-16 bg-[var(--bg-main)] flex justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row">
          {/* LEFT */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] opacity-70">
              Awards
            </h3>

            <div className="mt-2 mb-6 h-[2px] w-12 bg-[var(--accent-primary)] rounded-full" />

            <h1 className="heading-font text-4xl md:text-5xl leading-tight mb-4">
              Awards &{" "}
              <span className="text-[var(--accent-primary)]">Recognition</span>
            </h1>

            <p className="text-sm opacity-80 max-w-sm">
              I’ve worked with some amazing people over the years here’s what
              they have to say about me.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-3 md:w-2/3">
            {awards.map((award) => (
              <div
                key={award.id}
                className="flex items-center justify-between border-b border-[var(--border-light)] p-4 overflow-hidden"
              >
                {/* Left: Award Name */}
                <h3 className="text-base text-[var(--text-secondary)]/80 font-medium">{award.title}</h3>

                {/* Right: Year */}
                <span className="text-sm text-[var(--text-secondary)]/70 font-medium uppercase">{award.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards