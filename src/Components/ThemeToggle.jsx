import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../slices/themeSlice";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.theme);
  const isDark = mode === "dark";

  return (
    <motion.button
      onClick={() => dispatch(toggleTheme())}
      aria-label="Toggle theme"
      whileTap={{ scale: 0.95 }}
      className="
        relative
        w-14 h-7.5
        rounded-full
        px-1
        flex items-center
        overflow-hidden

        bg-[var(--bg-secondary)]
        border border-[var(--border-color)]
        backdrop-blur-xl

        shadow-md
        hover:shadow-lg
        transition-shadow
      "
    >
      {/* Background icons */}
      <div className="absolute inset-0 flex items-center justify-between px-3 text-xs">
        <FaSun className="text-gray-100 opacity-70" />
        <FaMoon className="text-blue-400 opacity-70" />
      </div>

      {/* Sliding knob */}
      <motion.span
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        animate={{
          x: isDark ? 28 : 0,
        }}
        className={`
          relative z-10
          h-5 w-5
          rounded-full
          flex items-center justify-center

          text-white
          shadow-lg

          ${
            isDark
              ? "bg-gradient-to-br from-blue-500 to-indigo-600"
              : "bg-gradient-to-br from-amber-400 to-orange-500"
          }
        `}
        style={{
          boxShadow: isDark
            ? "0 0 12px rgba(99,102,241,0.6)"
            : "0 0 12px rgba(251,191,36,0.6)",
        }}
      >
        {isDark ? <FaMoon size={12} /> : <FaSun size={12} />}
      </motion.span>
    </motion.button>
  );
};

export default ThemeToggle;
