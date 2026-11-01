import React from "react";

const AnimeLander = () => {
  return (
    <div className="md:px-12 min-h-[80vh] flex justify-center items-center md:py-12">
      <div className="border border-[var(--border-light)] h-[80vh] w-full flex justify-center items-center">
        <div className="anime h-[480px] w-[480px] p-2 flex justify-center items-center relative">
          {/* Outer Container Ring */}
          <div className="outer h-full w-full border-[3px] border-[var(--border-light)] rounded-full relative flex items-center justify-center bg-[var(--bg-secondary)] overflow-hidden">
            {/* Dotted Background Grid */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, var(--border-light) 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            />

            {/* SVG Vector HUD Elements */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 400 400"
            >
             
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

                if (i >= 10 && i <= 22) {
                  strokeColor = "var(--google-red)";
                } else if (i >= 24 && i <= 38) {
                  strokeColor = "var(--google-yellow)";
                } else if (i >= 50 && i <= 56) {
                  strokeColor = "var(--google-green)";
                }

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

              {/* 2. Outermost Segmented Color Track */}

              {/* Green Arc */}
              <circle
                cx="200"
                cy="200"
                r="184"
                fill="none"
                stroke="var(--google-green)"
                strokeWidth="6"
                strokeDasharray="140 1020"
                strokeDashoffset="-760"
                opacity="0.85"
                filter="url(#glow)"
              />

              {/* Yellow Arc */}
              <circle
                cx="200"
                cy="200"
                r="184"
                fill="none"
                stroke="var(--google-yellow)"
                strokeWidth="6"
                strokeDasharray="100 1020"
                strokeDashoffset="-640"
                opacity="0.9"
                filter="url(#glow)"
              />

              {/* Red Arc */}
              <circle
                cx="200"
                cy="200"
                r="184"
                fill="none"
                stroke="var(--google-red)"
                strokeWidth="6"
                strokeDasharray="120 1020"
                strokeDashoffset="-380"
                opacity="0.9"
                filter="url(#glow)"
              />

              {/* Yellow Arc */}
              <circle
                cx="200"
                cy="200"
                r="184"
                fill="none"
                stroke="var(--google-yellow)"
                strokeWidth="6"
                strokeDasharray="180 1020"
                strokeDashoffset="-140"
                opacity="0.9"
                filter="url(#glow)"
              />

              {/* Blue Arc */}
              <circle
                cx="200"
                cy="200"
                r="184"
                fill="none"
                stroke="var(--google-blue)"
                strokeWidth="6"
                strokeDasharray="90 1020"
                strokeDashoffset="-930"
                opacity="0.9"
                filter="url(#glow)"
              />

              {/* 3. Inner Technical Rings */}
              <circle
                cx="200"
                cy="200"
                r="135"
                fill="none"
                stroke="var(--text-secondary)"
                opacity="0.4"
                strokeWidth="1"
                strokeDasharray="4 4"
              />

              <circle
                cx="200"
                cy="200"
                r="125"
                fill="none"
                stroke="var(--text-secondary)"
                opacity="0.2"
                strokeWidth="1"
              />

              <circle
                cx="200"
                cy="200"
                r="110"
                fill="none"
                stroke="var(--text-secondary)"
                strokeWidth="16"
                opacity="0.05"
              />

              {/* 4. Center Pointer / Needle */}
              <g transform="translate(200, 200)">
                <line
                  x1="0"
                  y1="0"
                  x2="-22"
                  y2="115"
                  stroke="var(--google-yellow)"
                  strokeWidth="1.7"
                />

                <rect
                  x="-8"
                  y="75"
                  width="16"
                  height="16"
                  fill="var(--google-yellow)"
                  transform="rotate(26, 0, 80)"
                />

                <circle
                  cx="0"
                  cy="0"
                  r="5"
                  fill="var(--bg-main)"
                  stroke="var(--google-yellow)"
                  strokeWidth="2"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeLander;
