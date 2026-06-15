import React from "react";
import { motion } from "framer-motion";

const PreLoader = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-lime-100"
    >
      <h1 className="text-5xl font-medium">PreLoader</h1>
    </motion.div>
  );
};

export default PreLoader;
