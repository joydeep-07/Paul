import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector } from "react-redux";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const textRef = useRef(null);

  const { mode } = useSelector((state) => state.theme);

  const splitTextToSpans = (text) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        className="inline-block opacity-60 hover:opacity-100 transition-opacity duration-200"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  useEffect(() => {
    const textColor = "var(--text-main)";

    const ctx = gsap.context(() => {
      const letters = textRef.current.querySelectorAll("span");

      gsap.to(letters, {
        color: textColor,
        opacity: 1,
        stagger: 0.015,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 30%",
          scrub: 1.2,
        },
      });
    });

    return () => ctx.revert();
  }, [mode]);

  return (
    <section className="bg-[var(--bg-main)] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-28 flex flex-col gap-12 sm:gap-16">
        {/* Header (NO animation) */}
        <div className="text-center">
          <h2
            className="text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3
                       text-[var(--text-secondary)]"
          >
            About Me
          </h2>
          <div className="w-14 sm:w-16 h-0.5 bg-[var(--accent-primary)] mx-auto" />
        </div>

        {/* Text */}
        <div
          ref={textRef}
          className="mx-auto max-w-5xl text-center font-medium
                     text-base sm:text-lg md:text-xl lg:text-2xl
                     leading-relaxed sm:leading-loose
                     text-[var(--text-secondary)]
                     transition-colors duration-500"
        >
          {splitTextToSpans(
            "I'm Joydeep Paul, a passionate developer and designer with over 5+ years of experience in crafting seamless user-centric digital experiences. My expertise spans across modern web design, full-stack development, and interactive user interfaces, with a strong focus on delivering high-quality, scalable, and impactful products. I've collaborated with some of the most innovative industry leaders to help bring their visions to life and build top-notch digital solutions that truly make a difference."
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
