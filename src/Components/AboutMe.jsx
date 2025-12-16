import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector } from "react-redux";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const textRef = useRef(null);
  const headingRef = useRef(null);

  // ✅ Get current theme
  const { mode } = useSelector((state) => state.theme);

  const splitTextToSpans = (text) => {
    return text.split("").map((char, i) => (
      <span
        key={i}
        className="inline-block opacity-60 hover:opacity-100 transition-opacity duration-200"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  useEffect(() => {
    const textColor = mode === "dark" ? "var(--text-main)" : "var(--text-dark)";

    const ctx = gsap.context(() => {
      /* Heading animation */
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /* Letter animation */
      const letters = textRef.current.querySelectorAll("span");

      gsap.to(letters, {
        color: textColor,
        opacity: 1,
        // y: -5,
        stagger: 0.015,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 75%",
          end: "bottom 25%",
          scrub: 1.5,
        },
      });

      
    });

    return () => ctx.revert();
  }, [mode]); // ✅ Re-run animation on theme change

  return (
    <section
      className={`relative py-10 overflow-hidden transition-colors duration-500
        ${mode === "dark" ? "bg-[var(--bg-main)]" : "bg-white"}
      `}
    >
      {/* Glow */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-2/3 left-1/4 w-96 h-32 rounded-full blur-[160px]
            ${mode === "dark" ? "bg-blue-500/20" : "bg-blue-300/30"}
          `}
        />
      </div>

      <div className="relative flex flex-col justify-center items-center gap-16 py-28 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center w-full">
          <div ref={headingRef} className="opacity-0">
            <h2
              className={`text-sm font-semibold uppercase tracking-widest mb-3
                ${mode === "dark" ? "text-gray-300" : "text-gray-600"}
              `}
            >
              About Me
            </h2>
            <div className="w-16 h-0.5 bg-[var(--accent-primary)] mx-auto" />
          </div>
        </div>

        {/* Text */}
        <div className="w-full">
          <div
            ref={textRef}
            className={`text-lg sm:text-xl font-medium  md:text-2xl text-center
              max-w-6xl mx-auto leading-relaxed md:leading-loose
              transition-colors duration-500
              ${mode === "dark" ? "text-gray-400" : "text-neutral-700"}
            `}
          >
            {splitTextToSpans(
              "I'm Joydeep Paul, a passionate developer and designer with over 5+ years of experience in crafting seamless user-centric digital experiences. My expertise spans across modern web design, full-stack development, and interactive user interfaces, with a strong focus on delivering high-quality, scalable, and impactful products. I've collaborated with some of the most innovative industry leaders to help bring their visions to life and build top-notch digital solutions that truly make a difference."
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
