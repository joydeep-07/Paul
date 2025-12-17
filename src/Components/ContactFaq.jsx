import React, { useState } from "react";
// import SplitText from "../../Reactbits/SplitText/SplitText";
import { faqData } from "../Utils/questions";
import { IoChevronUp } from "react-icons/io5";

const ContactFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex justify-center items-start py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10">
        {/* LEFT: Sticky Header */}
        <div className="lg:w-1/2 lg:sticky lg:top-20 pt-8 sm:pt-12 lg:pt-15 h-fit self-start">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 sm:w-10 lg:w-12 h-0.5 bg-green-500"></div>
            <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-green-500">
              Questions
            </h2>
          </div>

          <h1 className="heading-font text-4xl md:text-5xl leading-tight mb-4">
            Frequently{" "}
            <span className="text-[var(--accent-primary)]">
              Asked Questions
            </span>
          </h1>
        </div>

        {/* RIGHT: FAQ List */}
        <div className="lg:w-1.5/2 flex pt-8 sm:pt-12 lg:pt-15 flex-col gap-3 sm:gap-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-[var(--border-light)] rounded-xl sm:rounded-2xl bg-[var(--bg-secondary)] overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              {/* Question */}
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-4 sm:p-5 lg:p-6 text-left focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[var(--text-main)] text-xs sm:text-sm md:text-base">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  <h3 className="text-base sm:text-lg md:text-[15px] text-[var(--text-main)] pr-2 sm:pr-4">
                    {item.question}
                  </h3>
                </div>
                {openIndex === index ? (
                  <IoChevronUp className="text-[var(--text-main)] text-xs sm:text-sm transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] flex-shrink-0" />
                ) : (
                  <IoChevronUp className="text-[var(--text-main)] rotate-180 text-xs sm:text-sm transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] flex-shrink-0" />
                )}
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  openIndex === index
                    ? "max-h-48 opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-2"
                }`}
                style={{ willChange: "transform, opacity, max-height" }}
              >
                <div className="p-4 sm:p-5 lg:p-6 pt-0 sm:pt-0 lg:pt-0">
                  <p className="text-[var(--text-secondary)] text-base sm:text-lg md:text-[15px] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactFaq;
