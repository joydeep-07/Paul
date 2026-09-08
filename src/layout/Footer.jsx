import { Phone } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Auth from "../Components/Auth";
import SignOut from "../Components/SignOut";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("adminAuthenticated") === "true",
  );
  const footerRef = useRef(null);

  useEffect(() => {
    const handleAdminAuthChange = () => {
      setIsAdmin(localStorage.getItem("adminAuthenticated") === "true");
    };

    window.addEventListener("adminAuthChanged", handleAdminAuthChange);

    return () => {
      window.removeEventListener("adminAuthChanged", handleAdminAuthChange);
    };
  }, []);

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

  useGSAP(
    () => {
      gsap.config({ force3D: true });

      // Initial state setup for text slide animation
      gsap.set(".slide-text-left", {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        x: -40,
        opacity: 0,
      });

      // Initial state setup for social links & actions fade/slide
      gsap.set(".footer-action-item", {
        x: -20,
        opacity: 0,
      });

      const footerTl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "expo.out" },
      });

      footerTl
        .to(".slide-text-left", {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          x: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.12,
        })
        .to(
          ".footer-action-item",
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.06,
            ease: "power2.out",
          },
          "-=0.8",
        );
    },
    { scope: footerRef },
  );

  return (
    <footer
      ref={footerRef}
      id="footer"
      className="w-full bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300 overflow-hidden"
    >
      <div className="mx-auto max-w-8xl px-4 md:pb-6 py-6 pb-22 md:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 overflow-hidden">
              <span className="slide-text-left text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs transform-gpu will-change-[transform,clip-path,opacity]">
                Get In Touch
              </span>

              <span className="h-px w-10 bg-[var(--accent-primary)] sm:w-12" />
            </div>

            <div className="overflow-hidden">
              <h2 className="slide-text-left heading-font mt-5 text-3xl leading-tight text-[var(--text-main)] sm:text-4xl md:text-5xl transform-gpu will-change-[transform,clip-path,opacity]">
                Let&apos;s build something{" "}
                <span className="text-[var(--accent-primary)]">
                  meaningful.
                </span>
              </h2>
            </div>

            <div className="overflow-hidden">
              <p className="slide-text-left mt-4 max-w-xl text-xs leading-[1.9] text-[var(--text-secondary)] sm:text-sm transform-gpu will-change-[transform,clip-path,opacity]">
                I&apos;m interested in building modern, scalable, and
                user-focused digital products using clean code, thoughtful UI,
                and reliable technology.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5 lg:border-l lg:border-[var(--border-light)] lg:pl-10">
            <div className="flex items-center gap-3 overflow-hidden">
              <span className="slide-text-left text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs transform-gpu will-change-[transform,clip-path,opacity]">
                Connect
              </span>

              <span className="h-px w-8 bg-[var(--accent-primary)]" />
            </div>

            <div className="overflow-hidden">
              <p className="slide-text-left mt-4 max-w-sm text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm transform-gpu will-change-[transform,clip-path,opacity]">
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
                    className="footer-action-item group flex items-center justify-center gap-2 rounded-sm border border-[var(--border-light)] px-3 py-2.5 text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--accent-primary)]/40 hover:bg-[var(--accent-primary)]/5 hover:text-[var(--accent-primary)] transform-gpu will-change-[transform,opacity]"
                  >
                    <Icon className="text-sm transition-transform duration-300 group-hover:-translate-y-0.5" />

                    <span className="text-[9px] font-medium uppercase tracking-[0.12em]">
                      {social.name}
                    </span>
                  </a>
                );
              })}

              {/* ADMIN AUTH BUTTON */}
              {isAdmin ? (
                <SignOut className="footer-action-item transform-gpu will-change-[transform,opacity]" />
              ) : (
                <Auth className="footer-action-item transform-gpu will-change-[transform,opacity]" />
              )}

              <Link
                to="/contact"
                className="footer-action-item group cursor-pointer flex items-center justify-center gap-2 rounded-sm border border-[var(--border-light)] px-3 py-2.5 text-[var(--text-main)] transition-all duration-300 hover:opacity-90 transform-gpu will-change-[transform,opacity]"
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
        <div className="mt-8 border-t border-[var(--border-light)] pt-4 sm:mt-10 sm:pt-5 overflow-hidden">
          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
            <p className="slide-text-left text-[10px] text-[var(--text-secondary)] sm:text-xs transform-gpu will-change-[transform,clip-path,opacity]">
              © {new Date().getFullYear()} Joydeep Paul. All rights reserved.
            </p>

            <p className="slide-text-left text-[9px] hidden md:flex uppercase tracking-[0.18em] text-[var(--text-secondary)]/60 sm:text-[10px] transform-gpu will-change-[transform,clip-path,opacity]">
              MongoDB · Express.js · React · Node.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
