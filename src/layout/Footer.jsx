import { Phone } from "lucide-react";
import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
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
    <footer className="w-full bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300">
      <div className="mx-auto max-w-8xl px-4 md:pb-6 py-6 pb-22 md:px-12">
        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs">
                Get In Touch
              </span>

              <span className="h-px w-10 bg-[var(--accent-primary)] sm:w-12" />
            </div>

            <h2 className="heading-font mt-5 text-3xl leading-tight text-[var(--text-main)] sm:text-4xl md:text-5xl">
              Let&apos;s build something{" "}
              <span className="text-[var(--accent-primary)]">meaningful.</span>
            </h2>

            <p className="mt-4 max-w-xl text-xs leading-[1.9] text-[var(--text-secondary)] sm:text-sm">
              I&apos;m interested in building modern, scalable, and user-focused
              digital products using clean code, thoughtful UI, and reliable
              technology.
            </p>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5 lg:border-l lg:border-[var(--border-light)] lg:pl-10">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs">
                Connect
              </span>

              <span className="h-px w-8 bg-[var(--accent-primary)]" />
            </div>

            <p className="mt-4 max-w-sm text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
              Follow my work, projects, and development journey across these
              platforms.
            </p>

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
                    className="group flex items-center justify-center gap-2 rounded-sm border border-[var(--border-light)] px-3 py-2.5 text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--accent-primary)]/40 hover:bg-[var(--accent-primary)]/5 hover:text-[var(--accent-primary)]"
                  >
                    <Icon className="text-sm transition-transform duration-300 group-hover:-translate-y-0.5" />

                    <span className="text-[9px] font-medium uppercase tracking-[0.12em]">
                      {social.name}
                    </span>
                  </a>
                );
              })}

              <Link
                to="/contact"
                className="group flex items-center justify-center gap-2 rounded-sm border border-[var(--accent-primary)] bg-[var(--accent-primary)] px-3 py-2.5 text-white transition-all duration-300 hover:opacity-90"
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
        <div className="mt-8 border-t border-[var(--border-light)] pt-4 sm:mt-10 sm:pt-5">
          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
            <p className="text-[10px] text-[var(--text-secondary)] sm:text-xs">
              © {new Date().getFullYear()} Joydeep Paul. All rights reserved.
            </p>

            <p className="text-[9px] hidden md:flex uppercase tracking-[0.18em] text-[var(--text-secondary)]/60 sm:text-[10px]">
              React · Node.js · MongoDB
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
