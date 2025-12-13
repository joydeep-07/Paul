import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../slices/themeSlice";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.theme);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="p-2 rounded-full text-[var(--text-main)] text-lg 
      transition-all duration-300 hover:opacity-90 
      flex items-center justify-center"
      aria-label="Toggle Theme"
    >
      {mode === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeToggle;
