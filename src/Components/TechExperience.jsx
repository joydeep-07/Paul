import React, { useState } from "react";
import { libraries } from "../Utils/TechExperience";
import { IoChevronUp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const TechExperience = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const visibleLibraries = showAll ? libraries : libraries.slice(0, 4);

  return (
    <section className="w-full py-10 sm:py-14 md:py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-14">
        {/* LEFT */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4 h-fit">
          <div>
            <h3 className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em] opacity-70">
              Experience
            </h3>
            <div className="mt-2 h-[2px] w-16 bg-[var(--accent-primary)] rounded-full" />
          </div>

          <h1 className="heading-font text-3xl sm:text-4xl md:text-5xl leading-snug">
            My experience with{" "}
            <span className="text-[var(--accent-primary)]">Tech Libraries</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base md:text-lg lg:text-sm max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl opacity-90 leading-relaxed ">
            Each project is unique, and I follow a structured approach to turn
            ideas into seamless user experiences.
          </p>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-2/3 flex flex-col">
          {visibleLibraries.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                className="border-b border-[var(--border-light)]"
              >
                {/* Header */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full cursor-pointer flex items-center justify-between gap-4 px-2 sm:px-4 py-4 sm:py-5 text-left"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <motion.div
                      className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full
                      bg-[var(--accent-primary)]/10
                      border border-[var(--accent-primary)]/30
                      text-[var(--accent-primary)]"
                      animate={{ scale: isOpen ? 1.1 : 1 }}
                      transition={{ duration: 0.25 }}
                    >
                      <item.icon className="text-base sm:text-lg" />
                    </motion.div>

                    <h3 className="text-sm sm:text-base text-[var(--text-main)]">
                      {item.name}
                    </h3>
                  </div>

                  <motion.span
                    animate={{ rotate: isOpen ? 0 : 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IoChevronUp className="text-sm sm:text-base" />
                  </motion.span>
                </button>

                {/* Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-2 sm:px-4 pb-5 space-y-4">
                        <p className="text-[13px] sm:text-[15px] leading-relaxed text-[var(--text-secondary)]">
                          {item.description}
                        </p>

                        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-[var(--text-secondary)]">
                          {item.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>

                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block text-xs sm:text-sm text-[var(--accent-primary)] hover:underline"
                        >
                          Visit official site →
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* SEE MORE / LESS */}
          {libraries.length > 4 && (
            <button
              onClick={() => {
                setShowAll(!showAll);
                setOpenIndex(null);
              }}
              className="mt-4 flex items-center gap-2 w-fit text-xs sm:text-sm border-b pb-1 hover:text-[var(--accent-primary)] transition"
            >
              {showAll ? "See less" : "See more"}
              <motion.span
                animate={{ rotate: showAll ? 180 : 45 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUp className="w-4 h-4" />
              </motion.span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechExperience;
