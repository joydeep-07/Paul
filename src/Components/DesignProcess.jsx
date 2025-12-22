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
    icon: <FaSearch size={20} />,
    title: "Research",
    description:
      "Understanding the problem space, gathering requirements, and analyzing user needs to ensure a strong foundation.",
  },
  {
    id: 2,
    icon: <FaPenNib size={20} />,
    title: "Wireframing",
    description:
      "Sketching layouts and structuring content to visualize user flows and interactions before diving into design.",
  },
  {
    id: 3,
    icon: <FaPalette size={20} />,
    title: "Design",
    description:
      "Bringing wireframes to life with colors, typography, and visual hierarchy for an appealing user interface.",
  },
  {
    id: 4,
    icon: <FaProjectDiagram size={20} />,
    title: "Prototyping",
    description:
      "Creating interactive prototypes to test usability and validate the design with real users before development.",
  },
  {
    id: 5,
    icon: <FaHandshake size={20} />,
    title: "Quality Assurance",
    description:
      "Delivering design assets to developers and iterating based on feedback to ensure the final product exceeds expectations.",
  },
];

const cardVariants = {
  offscreen: { x: 100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.3, duration: 0.8 },
  },
};

const DesignProcess = () => {
  return (
    <div className="justify-center p-6 items-center flex">
      <div className="w-7xl flex flex-col gap-6 sm:gap-8 lg:gap-10">
        {/* LEFT */}
        <div className="pt-8 h-fit self-start">
          <div className="mb-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] opacity-70">
              Steps I follow
            </h3>

            <div className="mt-2 mb-6 h-[2px] w-24 bg-[var(--accent-primary)] rounded-full" />
          </div>

          <h1 className="heading-font text-4xl md:text-5xl leading-tight">
            What My{" "}
            <span className="text-[var(--accent-primary)]">
              Design process include
            </span>{" "}
          </h1>
          <p className="mt-4 text-[var(--text-secondary)] text-sm opacity-80 max-w-sm">
            Each project is unique, and I follow a structured approach to turn
            ideas into seamless user experiences.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center gap-4 items-stretch flex-wrap">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className="border border-[var(--border-light)] bg-[var(--bg-secondary)] p-5 rounded-lg flex-1 min-w-[220px] max-w-[250px] flex flex-col justify-start"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              {/* <div className="icon mb-4 h-10 w-10 flex justify-center items-center rounded-full border border-[var(--border-light)] text-[var(--accent-primary)]">
                {step.icon}
              </div> */}
              <h1 className="text-xl heading-font flex items-center gap-2">
                <span className="pr-2 text-[var(--text-secondary)] ">
                  {step.icon}
                </span>
                <span className="text-[var(--accent-primary)]">
                  {step.title}
                </span>
              </h1>

              <p className="text-xs text-[var(--text-secondary)]/80 pt-3 font-medium">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignProcess;
