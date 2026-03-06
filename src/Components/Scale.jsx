import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Scale = () => {
  const { scrollY } = useScroll();

  // slow movement effect
  const y = useTransform(scrollY, [0, 2000], [0, -300]);

  const marks = Array.from({ length: 2000 });

  return (
    <div className="h-full w-full flex justify-center items-start overflow-hidden">
      <motion.div style={{ y }} className="flex flex-col items-end">
        {marks.map((_, i) => {
          const isCm = i % 10 === 0;
          const isHalf = i % 5 === 0 && !isCm;

          return (
            <div key={i} className="flex items-end gap-2 h-1">
              {/* ruler line */}
              <div
                className={`
                  bg-[var(--text-main)]/50
                  ${isCm ? "w-4 h-[1px]" : isHalf ? "w-3 h-[1.5px]" : "w-2 h-[1px]"}
                  opacity-${isCm ? "100" : "70"}
                `}
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Scale;
