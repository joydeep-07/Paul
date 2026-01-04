import React from "react";
import Lottie from "lottie-react";
import cat from "../assets/animation/Cat1.json";

const UnderConstruction = ({ note, progress = 60 }) => {
  // Clamp progress between 0 and 100
  const safeProgress = Math.min(100, Math.max(0, progress));

  return (
    <div
      className="flex flex-col items-center justify-center px-4 py-12"
      style={{ color: "var(--text-main)" }}
    >
      <div className="max-w-4xl w-full text-center flex flex-col justify-center items-center space-y-8">
        {/* Animation */}
        <div className="relative max-w-2xl">
          <div className="flex justify-center items-center">
            <Lottie
              animationData={cat}
              loop
              className="w-64 h-64 md:w-80 md:h-80"
            />
          </div>

          {/* Decorative dots */}
          <div
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full animate-pulse"
            style={{ backgroundColor: "var(--accent-secondary)", opacity: 0.7 }}
          />
          <div
            className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full animate-pulse"
            style={{ backgroundColor: "var(--accent-primary)", opacity: 0.6 }}
          />
        </div>

        {/* Text */}
        <div className="space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold uppercase heading-font">
            Page Under Construction
          </h1>

          <p
            className="text-lg max-w-md mx-auto pt-4"
            style={{ color: "var(--text-secondary)" }}
          >
            {note}
            <span
              className="block text-sm mt-2 opacity-80"
              style={{ color: "var(--text-secondary)" }}
            >
              Please check back soon!
            </span>
          </p>
        </div>

        {/* Progress */}
        <div className="pt-6">
          <div
            className="h-[3px] w-64 mx-auto rounded-full overflow-hidden"
            style={{ backgroundColor: "var(--border-light)" }}
          >
            <div
              className="h-full rounded-full transition-all duration-700 ease-out"
              style={{
                width: `${safeProgress}%`,
                backgroundColor: "var(--accent-primary)",
              }}
            />
          </div>

          <p
            className="text-xs mt-2 opacity-80"
            style={{ color: "var(--text-secondary)" }}
          >
            Estimated completion: {safeProgress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
