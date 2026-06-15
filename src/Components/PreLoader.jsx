import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const greetings = [
  "Hello",
  "नमस्कार",
  "নমস্কার",
  "Bonjour",
  "Здравствуйте",
  "こんにちは",
  "Ciao",
  "Salve",
];

const PreLoader = ({ onFinish }) => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 350);

    const timer = setTimeout(() => {
      setSlideUp(true);
    }, 2400);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: slideUp ? "-100%" : 0 }}
      transition={{
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationComplete={() => {
        if (slideUp) {
          onFinish();
        }
      }}
      className="fixed inset-0 z-[9999] bg-lime-100 flex items-center justify-center overflow-visible"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl heading-font">
        {greetings[currentGreeting]}
      </h1>

      <svg
        className="absolute -bottom-1 left-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ECFCCB"
          d="M0,0 C250,320 1000,-120 1440,180 L1440,320 L0,320 Z"
        />
      </svg>
    </motion.div>
  );
};

export default PreLoader;
