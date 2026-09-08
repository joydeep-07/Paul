import { Phone } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Auth from "../Components/Auth";
import SignOut from "../Components/SignOut";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const containerRef = useRef(null);
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("adminAuthenticated") === "true",
  );

  useEffect(() => {
    const handleAdminAuthChange = () => {
      setIsAdmin(localStorage.getItem("adminAuthenticated") === "true");
    };

    window.addEventListener("adminAuthChanged", handleAdminAuthChange);

    return () => {
      window.removeEventListener("adminAuthChanged", handleAdminAuthChange);
    };
  }, []);

  useGSAP(
    () => {
      // Hardware acceleration setup
      gsap.config({ force3D: true });

      // Initial state setup for label wrappers and accent lines
      gsap.set(".footer-label-wrapper", { y: 20, opacity: 0 });
      gsap.set(".footer-accent-line", {
        scaleX: 0,
        transformOrigin: "left center",
      });

      // Left-to-right slide text setup
      gsap.set(".slide-text-left", {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        x: -40,
        opacity: 0,
      });

      // Social links grid reveal setup
      gsap.set(".footer-social-btn", {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        x: -20,
        opacity: 0,
      });

      // Bottom copyright bar reveal setup
      gsap.set(".footer-bottom-bar", {
        y: 15,
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "expo.out" },
      });

      tl.to(".footer-label-wrapper", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
      })
        .to(
          ".footer-accent-line",
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4",
        )
        // Reveal headings and paragraph text
        .to(
          ".slide-text-left",
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            x: 0,
            opacity: 1,
            duration: 1.1,
            stagger: 0.1,
          },
          "-=0.5",
        )
        // Reveal social and contact buttons grid
        .to(
          ".footer-social-btn",
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            x: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.06,
            ease: "power2.out",
          },
          "-=0.6",
        )
        // Reveal bottom copyright & tech stack bar
        .to(
          ".footer-bottom-bar",
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4",
        );
    },
    { scope: containerRef },
  );

  const socials = [
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/mr.paul_16",
    },
    {
      name: "Twitter",
      icon: FaXTwitter,
      href: "https://x.com/Paul__here",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/joydeep-paul-06b37926a",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/joydeep-07",
    },
  ];

  return (
    <footer
      ref={containerRef}
      id="footer"
      className="w-full bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300 overflow-hidden"
    >
      <div className="mx-auto max-w-8xl px-4 md:pb-6 py-6 pb-22 md:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <div className="footer-label-wrapper flex items-center gap-3 transform-gpu will-change-[transform,opacity]">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs">
                Get In Touch
              </span>

              <span className="footer-accent-line h-px w-10 bg-[var(--accent-primary)] sm:w-12 transform-gpu will-change-transform" />
            </div>

            <div className="overflow-hidden mt-5">
              <h2 className="slide-text-left heading-font text-3xl leading-tight text-[var(--text-main)] sm:text-4xl md:text-5xl transform-gpu will-change-[transform,clip-path,opacity]">
                Let&apos;s build something{" "}
                <span className="text-[var(--accent-primary)]">
                  meaningful.
                </span>
              </h2>
            </div>

            <div className="overflow-hidden mt-4">
              <p className="slide-text-left max-w-xl text-xs leading-[1.9] text-[var(--text-secondary)] sm:text-sm transform-gpu will-change-[transform,clip-path,opacity]">
                I&apos;m interested in building modern, scalable, and
                user-focused digital products using clean code, thoughtful UI,
                and reliable technology.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5 lg:border-l lg:border-[var(--border-light)] lg:pl-10">
            <div className="footer-label-wrapper flex items-center gap-3 transform-gpu will-change-[transform,opacity]">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs">
                Connect
              </span>

              <span className="footer-accent-line h-px w-8 bg-[var(--accent-primary)] transform-gpu will-change-transform" />
            </div>

            <div className="overflow-hidden mt-4">
              <p className="slide-text-left max-w-sm text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm transform-gpu will-change-[transform,clip-path,opacity]">
                Follow my work, projects, and development journey across these
                platforms.
              </p>
            </div>

            {/* SOCIAL + CONTACT */}
            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="footer-social-btn group flex items-center justify-center gap-2 rounded-sm border border-[var(--border-light)] px-3 py-2.5 text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--accent-primary)]/40 hover:bg-[var(--accent-primary)]/5 hover:text-[var(--accent-primary)] transform-gpu will-change-[transform,clip-path,opacity]"
                  >
                    <Icon className="text-sm transition-transform duration-300 group-hover:-translate-y-0.5" />

                    <span className="text-[9px] font-medium uppercase tracking-[0.12em]">
                      {social.name}
                    </span>
                  </a>
                );
              })}

              {/* ADMIN AUTH BUTTON */}
              <div className="footer-social-btn transform-gpu will-change-[transform,clip-path,opacity]">
                {isAdmin ? <SignOut /> : <Auth />}
              </div>

              <Link
                to="/contact"
                className="footer-social-btn group cursor-pointer flex items-center justify-center gap-2 rounded-sm border border-[var(--border-light)] px-3 py-2.5 text-[var(--text-main)] transition-all duration-300 hover:opacity-90 transform-gpu will-change-[transform,clip-path,opacity]"
              >
                <Phone size={12} />

                <span className="text-[9px] font-medium uppercase tracking-[0.12em]">
                  Contact
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom-bar mt-8 border-t border-[var(--border-light)] pt-4 sm:mt-10 sm:pt-5 transform-gpu will-change-[transform,opacity]">
          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
            <p className="text-[10px] text-[var(--text-secondary)] sm:text-xs">
              © {new Date().getFullYear()} Joydeep Paul. All rights reserved.
            </p>

            <p className="text-[9px] hidden md:flex uppercase tracking-[0.18em] text-[var(--text-secondary)]/60 sm:text-[10px]">
              MongoDB · Express.js · React · Node.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
