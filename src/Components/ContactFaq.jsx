import React, { useState } from "react";
import { faqData } from "../Utils/questions";
import { IoChevronUp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const ContactFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[var(--bg-main)] py-12 transition-colors duration-300 sm:py-16 md:py-20">
      <div className="mx-auto max-w-8xl px-4 md:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* LEFT */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              {/* LABEL */}
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs">
                  Questions
                </span>

                <span className="h-px w-10 bg-[var(--accent-primary)] sm:w-12" />
              </div>

              {/* HEADING */}
              <h2 className="heading-font mt-5 text-3xl leading-tight text-[var(--text-main)] sm:text-4xl md:text-5xl">
                Frequently{" "}
                <span className="text-[var(--accent-primary)]">
                  Asked Questions
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-5 max-w-md text-xs leading-[1.9] text-[var(--text-secondary)] sm:text-sm">
                Find answers to common questions about my development process,
                services, technologies, and project collaboration.
              </p>

              
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-8">
            <div className="border-t border-[var(--border-light)]">
              {faqData.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className="border-b border-[var(--border-light)]"
                  >
                    {/* QUESTION */}
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="group flex w-full cursor-pointer items-center justify-between gap-5 py-5 text-left sm:py-6"
                    >
                      <div className="flex min-w-0 items-center gap-4 sm:gap-5">
                        {/* NUMBER */}
                        <span
                          className={`shrink-0 text-[10px] font-medium tracking-[0.15em] transition-colors duration-300 sm:text-xs ${
                            isOpen
                              ? "text-[var(--accent-primary)]"
                              : "text-[var(--text-secondary)]/50"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* QUESTION */}
                        <h3
                          className={`text-sm transition-colors duration-300 sm:text-sm ${
                            isOpen
                              ? "text-[var(--accent-primary)]"
                              : "text-[var(--text-main)] group-hover:text-[var(--accent-primary)]"
                          }`}
                        >
                          {item.question}
                        </h3>
                      </div>

                      {/* ICON */}
                      <motion.span
                        animate={{ rotate: isOpen ? 0 : 180 }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                        className={`flex h-7 w-7 shrink-0 items-center justify-center transition-colors duration-300 ${
                          isOpen
                            ? "text-[var(--accent-primary)]"
                            : "text-[var(--text-secondary)]"
                        }`}
                      >
                        <IoChevronUp className="text-xs" />
                      </motion.span>
                    </button>

                    {/* ANSWER */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.35,
                            ease: [0.4, 0, 0.2, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 pl-9 pr-10 sm:pl-10 sm:pr-14">
                            <p className="max-w-2xl text-xs leading-[1.9] text-[var(--text-secondary)] sm:text-sm">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFaq;
