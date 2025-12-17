import React, { useState } from "react";
import { libraries } from "../Utils/TechExperience";
import { IoChevronUp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const TechExperience = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex justify-center items-start py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10">
        {/* LEFT */}
        <div className="lg:w-1/3 lg:sticky lg:top-20 pt-8 h-fit self-start">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-[var(--accent-primary)]" />
            <h2 className="text-xs uppercase tracking-widest text-[var(--accent-primary)]">
              Experience
            </h2>
          </div>

          <h1 className="heading-font text-4xl md:text-5xl leading-tight">
            My experience with{" "}
            <span className="text-[var(--accent-primary)]">Tech Libraries</span>
          </h1>
        </div>

        {/* RIGHT */}
        <div className="lg:w-2/3 flex flex-col gap-4 pt-8">
          {libraries.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                onClick={() => toggleFaq(index)}
                key={item.id}
                className="border border-[var(--border-light)] rounded-2xl bg-[var(--bg-secondary)] overflow-hidden"
              >
                {/* Header */}
                <button className="w-full flex justify-between items-center p-5 text-left">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-9 h-9 flex items-center justify-center rounded-full
               bg-[var(--accent-primary)]/10
               border border-[var(--accent-primary)]/30
               text-[var(--accent-primary)]"
                      animate={{ scale: isOpen ? 1.1 : 1 }}
                      transition={{ duration: 0.25 }}
                    >
                      <item.icon className="text-lg" />
                    </motion.div>

                    <h3 className="text-[var(--text-main)] text-base">
                      {item.name}
                    </h3>
                  </div>

                  <motion.span
                    animate={{ rotate: isOpen ? 0 : 180 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <IoChevronUp className="text-[var(--text-main)] text-sm" />
                  </motion.span>
                </button>

                {/* Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0, y: -6 }}
                      animate={{ height: "auto", opacity: 1, y: 0 }}
                      exit={{ height: 0, opacity: 0, y: -6 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 space-y-3">
                        <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">
                          {item.description}
                        </p>

                        <ul className="list-disc pl-5 space-y-1 text-[var(--text-secondary)] text-sm">
                          {item.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>

                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block text-sm text-[var(--accent-primary)] hover:underline"
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
        </div>
      </div>
    </div>
  );
};

export default TechExperience;
