import React, { useState, useEffect, useRef } from "react";

const AnimeLander = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const animationFrameRef = useRef(null);

  // Track raw scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("anime-lander-container");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;

      if (sectionHeight <= 0) return;

      const progress = Math.max(0, Math.min(1, scrolled / sectionHeight));
      targetProgressRef.current = progress;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Smooth LERP animation loop for buttery-smooth interpolation
    const render = () => {
      currentProgressRef.current +=
        (targetProgressRef.current - currentProgressRef.current) * 0.1;
      setScrollProgress(currentProgressRef.current);
      animationFrameRef.current = requestAnimationFrame(render);
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  // Dynamic rotations for multi-layered depth
  const outerRotation = scrollProgress * 360;
  const innerRotation = scrollProgress * -540; // Counter-rotation for depth
  const scaleValue = 1 + scrollProgress * 0.08;

  return (
    <div
      id="anime-lander-container"
      className="relative h-[500vh] bg-[var(--bg-primary)]"
    >
      <div className="sticky top-0 h-screen w-full flex justify-center items-center md:px-12 md:py-12">
        <div className="border border-[var(--border-light)] h-[80vh] w-full flex justify-center items-center px-12 bg-[var(--bg-primary)] overflow-hidden">
          {/* Right Side: Enhanced Anime HUD Element */}
          <div className="anime h-[480px] w-[480px] p-2 flex justify-center items-center relative">
            <div
              className="outer h-full w-full border-[3px] border-[var(--border-light)] rounded-full relative flex items-center justify-center bg-[var(--bg-secondary)] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.15)] transition-transform ease-out"
              style={{
                transform: `scale(${scaleValue}) rotate(${outerRotation * 0.2}deg)`,
                willChange: "transform",
              }}
            >
              {/* Dotted Background Grid with subtle pulse */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-300"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, var(--border-light) 1.5px, transparent 1.5px)",
                  backgroundSize: "18px 18px",
                  transform: `scale(${1 + scrollProgress * 0.05})`,
                }}
              />

              {/* SVG Vector HUD Elements */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                viewBox="0 0 400 400"
              >
                <defs>
                  <filter
                    id="hud-glow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite
                      in="SourceGraphic"
                      in2="blur"
                      operator="over"
                    />
                  </filter>
                </defs>

                {/* 1. Precision Radial Tick Marks */}
                {Array.from({ length: 180 }, (_, i) => {
                  const angle = (i * 2 * Math.PI) / 180;
                  const isMajor = i % 5 === 0;
                  const isAccent =
                    (i >= 10 && i <= 22) ||
                    (i >= 24 && i <= 38) ||
                    (i >= 50 && i <= 56);

                  const x1 = 200 + 160 * Math.cos(angle);
                  const y1 = 200 + 160 * Math.sin(angle);
                  const tickLength = isMajor ? 11 : 6;
                  const x2 = 200 + (160 + tickLength) * Math.cos(angle);
                  const y2 = 200 + (160 + tickLength) * Math.sin(angle);

                  let strokeColor = "var(--text-main)";
                  if (i >= 10 && i <= 22) strokeColor = "var(--google-red)";
                  else if (i >= 24 && i <= 38)
                    strokeColor = "var(--google-yellow)";
                  else if (i >= 50 && i <= 56)
                    strokeColor = "var(--google-green)";

                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={strokeColor}
                      strokeWidth={isMajor ? 2 : 1.2}
                      strokeLinecap="round"
                      opacity={isAccent ? 1 : isMajor ? 0.75 : 0.35}
                    />
                  );
                })}

                {/* 2. Outermost Segmented Color Tracks (Dynamic dash offsets) */}
                <circle
                  cx="200"
                  cy="200"
                  r="184"
                  fill="none"
                  stroke="var(--google-green)"
                  strokeWidth="6"
                  strokeDasharray="140 1020"
                  strokeDashoffset={-760 - scrollProgress * 250}
                  opacity="0.85"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="184"
                  fill="none"
                  stroke="var(--google-yellow)"
                  strokeWidth="6"
                  strokeDasharray="100 1020"
                  strokeDashoffset={-640 + scrollProgress * 250}
                  opacity="0.9"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="184"
                  fill="none"
                  stroke="var(--google-red)"
                  strokeWidth="6"
                  strokeDasharray="120 1020"
                  strokeDashoffset={-380 - scrollProgress * 180}
                  opacity="0.9"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="184"
                  fill="none"
                  stroke="var(--google-yellow)"
                  strokeWidth="6"
                  strokeDasharray="180 1020"
                  strokeDashoffset={-140 + scrollProgress * 300}
                  opacity="0.9"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="184"
                  fill="none"
                  stroke="var(--google-blue)"
                  strokeWidth="6"
                  strokeDasharray="90 1020"
                  strokeDashoffset={-930 - scrollProgress * 150}
                  opacity="0.9"
                />

                {/* 3. Inner Counter-Rotating Technical Rings */}
                <g
                  transform={`translate(200, 200) rotate(${innerRotation})`}
                  style={{ willChange: "transform" }}
                >
                  <circle
                    cx="0"
                    cy="0"
                    r="135"
                    fill="none"
                    stroke="var(--text-secondary)"
                    opacity="0.5"
                    strokeWidth="1.5"
                    strokeDasharray="6 6"
                  />
                  <circle
                    cx="0"
                    cy="0"
                    r="125"
                    fill="none"
                    stroke="var(--google-blue)"
                    opacity="0.3"
                    strokeWidth="1"
                    strokeDasharray="40 120"
                  />
                </g>

                <circle
                  cx="200"
                  cy="200"
                  r="110"
                  fill="none"
                  stroke="var(--text-secondary)"
                  strokeWidth="16"
                  opacity="0.05"
                />

                {/* 4. Center Pointer / Needle with Glow Effect */}
                <g
                  transform={`translate(200, 200) rotate(${outerRotation})`}
                  style={{ willChange: "transform" }}
                  filter="url(#hud-glow)"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="-22"
                    y2="115"
                    stroke="var(--google-blue)"
                    opacity="0.9"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="0"
                    cy="0"
                    r="6"
                    stroke="var(--text-main)"
                    opacity="0.9"
                    strokeWidth="2"
                    fill="var(--bg-secondary)"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeLander;
