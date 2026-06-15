import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const greetings = [
  "Hello",
  "नमस्कार",
  "নমস্কার",
  "ನಮಸ್ಕಾರ",
  "Bonjour",
  "Здравствуйте",
  "こんにちは",
  "Olá",
  "Ciao",
  "Salve",
];

const PreLoader = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 400); 

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="fixed inset-0 z-[9999] overflow-hidden bg-lime-100 flex items-center justify-center"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
        {greetings[currentGreeting]}
      </h1>
    </motion.div>
  );
};

export default PreLoader;
