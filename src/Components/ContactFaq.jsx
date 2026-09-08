import React, { useRef, useState } from "react";
import { faqData } from "../Utils/questions";
import { IoChevronUp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

// GSAP Imports
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ContactFaq = () => {
  const containerRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  /* -------------------- GSAP Scroll Animations -------------------- */
  useGSAP(
    () => {
      gsap.config({ force3D: true });

      // Initial state setup for Left Column
      gsap.set(".faq-label-wrapper", { y: 20, opacity: 0 });
      gsap.set(".faq-accent-line", {
        scaleX: 0,
        transformOrigin: "left center",
      });
      gsap.set(".slide-faq-left", {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        x: -40,
        opacity: 0,
      });

      // Initial state setup for FAQ Items
      gsap.set(".faq-item-reveal", {
        y: 30,
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "expo.out" },
      });

      tl.to(".faq-label-wrapper", {
        y: 0,
        opacity: 1,
        duration: 0.6,
      })
        .to(
          ".faq-accent-line",
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4",
        )
        .to(
          ".slide-faq-left",
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            x: 0,
            opacity: 1,
            duration: 1.1,
            stagger: 0.1,
          },
          "-=0.5",
        )
        .to(
          ".faq-item-reveal",
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.8",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-[var(--bg-main)] py-12 transition-colors duration-300 sm:py-16 md:py-20 overflow-hidden"
    >
      <div className="mx-auto max-w-8xl px-4 md:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* LEFT */}
          <div className="lg:col-span-4">
            <div className="">
              {/* LABEL */}
              <div className="faq-label-wrapper flex items-center gap-3 transform-gpu will-change-[transform,opacity]">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs">
                  Questions
                </span>

                <span className="faq-accent-line h-px w-10 bg-[var(--accent-primary)] sm:w-12 transform-gpu will-change-transform" />
              </div>

              {/* HEADING */}
              <div className="overflow-hidden mt-5">
                <h2 className="slide-faq-left heading-font text-3xl leading-tight text-[var(--text-main)] sm:text-4xl md:text-5xl transform-gpu will-change-[transform,clip-path,opacity]">
                  Frequently{" "}
                  <span className="text-[var(--accent-primary)]">
                    Asked Questions
                  </span>
                </h2>
              </div>

              {/* DESCRIPTION */}
              <div className="overflow-hidden mt-5">
                <p className="slide-faq-left max-w-md text-xs leading-[1.9] text-[var(--text-secondary)] sm:text-sm transform-gpu will-change-[transform,clip-path,opacity]">
                  Find answers to common questions about my development process,
                  services, technologies, and project collaboration.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-8">
            <div className="border-t border-[var(--border-light)]">
              {faqData.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className="faq-item-reveal border-b border-[var(--border-light)] transform-gpu will-change-[transform,opacity]"
                  >
                    {/* QUESTION */}
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="group flex w-full cursor-pointer items-center justify-between gap-5 py-5 text-left sm:py-6"
                    >
                      <div className="flex min-w-0 items-center gap-4 sm:gap-5">
                        {/* NUMBER */}
                        <span
                          className={`shrink-0 text-[10px] font-medium tracking-[0.15em] transition-colors duration-300 sm:text-xs ${
                            isOpen
                              ? "text-[var(--accent-primary)]"
                              : "text-[var(--text-secondary)]/50"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* QUESTION */}
                        <h3
                          className={`text-sm transition-colors duration-300 sm:text-sm ${
                            isOpen
                              ? "text-[var(--accent-primary)]"
                              : "text-[var(--text-main)] group-hover:text-[var(--accent-primary)]"
                          }`}
                        >
                          {item.question}
                        </h3>
                      </div>

                      {/* ICON */}
                      <motion.span
                        animate={{ rotate: isOpen ? 0 : 180 }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                        className={`flex h-7 w-7 shrink-0 items-center justify-center transition-colors duration-300 ${
                          isOpen
                            ? "text-[var(--accent-primary)]"
                            : "text-[var(--text-secondary)]"
                        }`}
                      >
                        <IoChevronUp className="text-xs" />
                      </motion.span>
                    </button>

                    {/* ANSWER */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.35,
                            ease: [0.4, 0, 0.2, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 pl-9 pr-10 sm:pl-10 sm:pr-14">
                            <p className="text-justify text-xs leading-[1.9] text-[var(--text-secondary)] sm:text-sm">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFaq;
