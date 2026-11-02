import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Dial from "../Components/Dial";

gsap.registerPlugin(ScrollTrigger);

const textContent =
  "I am a React.js developer passionate about building modern, interactive, and user-focused web experiences. I transform ideas into responsive interfaces using clean code, reusable components, and thoughtful design. From smooth animations to performance optimization, I focus on creating digital products that feel intuitive, look refined, and work seamlessly across devices. I believe great development is where creativity, functionality, and attention to detail come together.";

const AnimeLander = () => {
  const containerRef = useRef(null);
  const pinnedWrapperRef = useRef(null);
  const paragraphRef = useRef(null);

  const words = textContent.split(" ");

  useGSAP(
    () => {
      if (!pinnedWrapperRef.current || !paragraphRef.current) return;

      const letters = paragraphRef.current.querySelectorAll(".anime-char");

      gsap.set(letters, {
        opacity: 0.2,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinnedWrapperRef.current,
          start: "top top",
          end: "+=1400",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      tl.to(letters, {
        opacity: 1,
        color: "var(--text-main)",
        stagger: 0.02,
        ease: "power2.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="w-full relative">
      <div
        ref={pinnedWrapperRef}
        className="w-full p-6 md:px-12 md:py-24 flex flex-col justify-start bg-[var(--bg-main)]"
      >
        <div className="overflow-hidden">
          <h2 className="slide-text-left heading-font mt-5 font-light text-3xl leading-tight text-[var(--text-main)] sm:text-4xl md:text-[70px] transform-gpu will-change-[transform,clip-path,opacity]">
            Crafting digital experiences that{" "}
            <span className="text-[var(--accent-primary)]">
              make an impact.
            </span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-8 flex-1">
          {/* Left container */}
          <div className="left w-full lg:w-3/5 py-6">
            <div className="lg:col-span-7 mb-10">
              <div className="about-label-wrapper flex items-center gap-3 mb-4 transform-gpu will-change-[transform,opacity]">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">
                  The developer behind the code
                </span>

                <span className="about-accent-line h-px w-12 bg-[var(--accent-primary)] transform-gpu will-change-transform" />
              </div>

              <div className="overflow-hidden">
                <p className="slide-text-left max-w-md text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed transform-gpu will-change-[transform,clip-path,opacity]">
                  A closer look at my approach to frontend development, creative
                  problem-solving, and building meaningful digital experiences.
                </p>
              </div>
            </div>

            <p
              ref={paragraphRef}
              className="flex flex-wrap text-xl md:text-2xl leading-relaxed font-extralight"
            >
              {words.map((word, wordIdx) => (
                <span
                  key={wordIdx}
                  className="inline-block whitespace-nowrap mr-[0.3em]"
                >
                  {word.split("").map((char, charIdx) => (
                    <span
                      key={charIdx}
                      className="anime-char inline-block opacity-20 text-[var(--text-muted)] select-none will-change-[opacity,color]"
                    >
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </p>
          </div>

          {/* Right container */}
          <div className="right w-full lg:w-2/5 p-6 flex items-center justify-center">
            <Dial />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeLander;
