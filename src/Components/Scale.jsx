import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

const Scale = () => {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 4500], [0, -1800]);

  const opacity = useTransform(scrollY, [0, 1200, 3000], [0.3, 1, 0.3]);
  const scale = useTransform(scrollY, [0, 1200, 3000], [0.92, 1.08, 0.92]);

  const marks = Array.from({ length: 451 });

  const scrollBy = (direction) => {
    const amount = window.innerHeight * 1.8;
    const current = window.scrollY;

    window.scrollTo({
      top: direction === "up" ? current - amount : current + amount,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="
        fixed right-0 top-1/2 -translate-y-1/2
        flex flex-col items-center 
        z-[90] select-none
      "
    >
      {/* Up button */}
      <motion.button
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        onClick={() => scrollBy("up")}
        className="rounded-full mb-8 cursor-pointer"
      >
        <ChevronUp
          size={22}
          className="text-[var(--text-secondary)]/40 hover:text-[var(--text-main)]/80 "
          strokeWidth={2.2}
        />
      </motion.button>

      {/* Main scale container */}
      <motion.div
        className="
          relative h-[400px] overflow-hidden
        "
        style={{ opacity, scale }}
        transition={{ duration: 0.8 }}
      >
        {/* Center indicator */}
        <div className="absolute z-100 inset-0 flex items-center pointer-events-none">
          <div className="w-[5px] bg-red-600 h-[1.5px]" />
        </div>

        <motion.div
          className="relative h-[400px] overflow-hidden"
          style={{ opacity, scale }}
          transition={{ duration: 0.8 }}
        >
          {/* Top fade */}
          <div className="pointer-events-none absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[var(--bg-main)] to-transparent z-10" />

          {/* Bottom fade */}
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[var(--bg-main)] to-transparent z-10" />

          {/* Center indicator */}
          <div className="absolute inset-0 flex items-center pointer-events-none">
            <div className="w-[5px] bg-red-600 h-[1.5px]" />
          </div>

          {/* Scale */}
          <motion.div
            style={{ y }}
            className="flex flex-col items-end pr-4 pt-6"
          >
            {marks.map((_, i) => {
              const cm = i % 10 === 0;
              const half = i % 5 === 0 && !cm;

              const length = cm ? 26 : half ? 18 : 10;
              const thickness = cm ? 2 : half ? 1.4 : 1;

              return (
                <div key={i} className="flex items-center h-[6px] -mr-[1px]">
                  <div
                    className={`
              bg-[var(--text-main)]
              transition-all duration-200
              ${cm ? "opacity-90" : half ? "opacity-55" : "opacity-25"}
            `}
                    style={{
                      width: length,
                      height: thickness,
                    }}
                  />
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Down button */}
      <motion.button
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        onClick={() => scrollBy("down")}
        className="mt-8 rounded-full cursor-pointer"
      >
        <ChevronDown
          size={22}
          className="text-[var(--text-secondary)]/40 hover:text-[var(--text-main)]/80 "
          strokeWidth={2.2}
        />
      </motion.button>
    </div>
  );
};

export default Scale;
