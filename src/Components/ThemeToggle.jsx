import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../slices/themeSlice";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.theme);

  const isDark = mode === "dark";

  const handleToggleTheme = async (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const maxDistanceX = Math.max(x, window.innerWidth - x);
    const maxDistanceY = Math.max(y, window.innerHeight - y);
    const endRadius = Math.hypot(maxDistanceX, maxDistanceY) * 1.15;

    // Fallback if View Transitions API is unsupported
    if (!document.startViewTransition) {
      dispatch(toggleTheme());
      return;
    }

    const transition = document.startViewTransition(() => {
      dispatch(toggleTheme());
    });

    try {
      await transition.ready;

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 700,
          easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    } catch {
      // Fallback on animation error
    }
  };

  return (
    <button
      type="button"
      onClick={handleToggleTheme}
      aria-label="Toggle theme"
      className="h-9 w-9 rounded-full flex items-center justify-center cursor-pointer"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 180, opacity: 0 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="flex items-center justify-center text-gray-100"
          >
            <FaRegMoon size={16} />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ rotate: 180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -180, opacity: 0 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="flex items-center justify-center text-neutral-800"
          >
            <IoSunnyOutline size={17} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
