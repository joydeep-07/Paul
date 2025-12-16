import React, { useEffect, useState } from "react";
import { reviews } from "../Utils/Reviews";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -400,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -400 : 300,
    opacity: 0,
  }),
};

const Reviews = () => {
  const [[index, direction], setIndex] = useState([0, 1]);
  const [expandedId, setExpandedId] = useState(null);

  // 🔁 Auto slide every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(([prev]) => [(prev + 1) % reviews.length, 1]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const toggleReadMore = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const item = reviews[index];
  const words = item.review.split(" ");
  const shortText = words.slice(0, 40).join(" ");
  const isExpanded = expandedId === item.id;

  return (
    <div className="py-16 bg-[var(--bg-main)] flex justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row">
        {/* LEFT */}
        <div className="w-full md:w-1/3 px-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] opacity-70">
            Testimonials
          </h3>

          <div className="mt-2 mb-6 h-[2px] w-16 bg-[var(--accent-primary)] rounded-full" />

          <h1 className="heading-font text-4xl md:text-5xl leading-tight mb-4">
            What others{" "}
            <span className="text-[var(--accent-primary)]">Say</span>
          </h1>

          <p className="text-sm opacity-80 max-w-sm">
            I’ve worked with some amazing people over the years here’s what they
            have to say about me.
          </p>
        </div>

        {/* RIGHT (SLIDER) */}
        <div className="w-full md:w-2/3 p-4 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={item.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 120, damping: 20 },
                opacity: { duration: 0.3 },
              }}
              className="border border-[var(--border-light)] bg-[var(--bg-secondary)] rounded-xl"
            >
              <div className="flex items-center">
                <div className="p-2 border-2 border-[var(--accent-primary)] rounded-full m-4">
                  <img
                    className="h-16 w-16 rounded-full object-cover"
                    src={item.photo}
                    alt={item.name}
                  />
                </div>

                <div>
                  <h1 className="font-semibold">{item.name}</h1>
                  <p className="text-sm opacity-70">{item.position}</p>
                </div>
              </div>

              <p className="p-4 text-justify">
                {isExpanded ? item.review : shortText}
                {words.length > 40 && (
                  <span
                    onClick={() => toggleReadMore(item.id)}
                    className="cursor-pointer text-[var(--accent-primary)] font-medium"
                  >
                    {isExpanded ? " read less" : " ...read more"}
                  </span>
                )}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <div className="mt-6">
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/joydeep-paul-06b37926a",
                  "_blank"
                )
              }
              className="flex items-center gap-2 border-b pb-1 text-sm hover:text-[var(--accent-primary)]"
            >
              Check it out on LinkedIn
              <ArrowUp className="w-4 h-4 rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
