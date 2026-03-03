import React from "react";
import {
  FaSearch,
  FaPenNib,
  FaPalette,
  FaProjectDiagram,
  FaHandshake,
} from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    icon: <FaSearch size={18} />,
    title: "Research",
    description:
      "Understanding the problem space, gathering requirements, and analyzing user needs to ensure a strong foundation.",
  },
  {
    id: 2,
    icon: <FaPenNib size={18} />,
    title: "Wireframing",
    description:
      "Sketching layouts and structuring content to visualize user flows and interactions before diving into design.",
  },
  {
    id: 3,
    icon: <FaPalette size={18} />,
    title: "Design",
    description:
      "Bringing wireframes to life with colors, typography, and visual hierarchy for an appealing user interface.",
  },
  {
    id: 4,
    icon: <FaProjectDiagram size={18} />,
    title: "Prototyping",
    description:
      "Creating interactive prototypes to test usability and validate the design with real users before development.",
  },
  {
    id: 5,
    icon: <FaHandshake size={18} />,
    title: "Quality Assurance",
    description:
      "Delivering design assets to developers and iterating based on feedback to ensure the final product exceeds expectations.",
  },
];

const DesignProcess = () => {
  return (
    <section className="w-full bg-[var(--bg-main)] py-10 sm:py-14 md:py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* TOP / LEFT */}
        <div className="max-w-xl">
          <h3 className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em] opacity-70">
            Steps I follow
          </h3>

          <div className="mt-2 mb-6 h-[2px] w-24 bg-[var(--accent-primary)] rounded-full" />

          <h1 className="heading-font text-3xl sm:text-4xl md:text-5xl leading-snug">
            What My{" "}
            <span className="text-[var(--accent-primary)]">
              Design process include
            </span>
          </h1>

          <p className="mt-4 text-xs sm:text-sm text-[var(--text-secondary)]/80 max-w-md">
            Each project is unique, and I follow a structured approach to turn
            ideas into seamless user experiences.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className="border border-[var(--border-light)] bg-[var(--bg-secondary)] p-5 sm:p-6 rounded-xl flex flex-col"
             
            >
              <h2 className="text-lg sm:text-xl heading-font flex items-center gap-3">
                <span className="text-[var(--text-secondary)]">
                  {step.icon}
                </span>
                <span className="text-[var(--accent-primary)]">
                  {step.title}
                </span>
              </h2>

              <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)]/80 font-medium leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
