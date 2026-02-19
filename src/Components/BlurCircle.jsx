import React from "react";

const BlurCircle = ({
  top = "auto",
  left = "auto",
  right = "auto",
  bottom = "auto",
  size = "300px",
  color = "var(--accent-primary)",
  opacity = 0.3,
}) => {
  return (
    <div
      className="absolute z-0 rounded-full blur-[150px] pointer-events-none"
      style={{
        top,
        left,
        right,
        bottom,
        width: size,
        height: size,
        background: color,
        opacity,
      }}
    />
  );
};

export default BlurCircle;
