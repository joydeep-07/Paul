import React from "react";

const NewsletterSection = () => {
  return (
    <div className="bg-[var(--bg-main)] transition-colors duration-300 py-20">
      <div className="max-w-7xl mx-auto">
        <div
          className="
            relative overflow-hidden
            rounded-3xl
            border border-[var(--border-light)]/50
            bg-[var(--bg-secondary)]/80
            shadow-sm hover:shadow-xl
            transition-all duration-500
            px-6 sm:px-10 py-12
          "
        >
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-[var(--accent-primary)]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[var(--accent-secondary)]/10 rounded-full blur-3xl" />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* LEFT → TEXT */}
            <div className="space-y-6 text-center lg:text-left">
              <h3 className="heading-font text-3xl sm:text-[45px] tracking-tight text-[var(--text-main)] leading-tight">
                Join My{" "}
                <span className="text-[var(--accent-primary)]">
                  Developer Newsletter
                </span>
              </h3>

              <p className="text-[var(--text-secondary)] leading-relaxed">
                Get insights on MERN architecture, UI design patterns,
                performance optimization, and real-world project breakdowns —
                delivered straight to your inbox.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-xs sm:text-sm text-[var(--text-secondary)]">
                <span className="px-3 py-1 rounded-full border border-[var(--border-light)]">
                  Weekly Insights
                </span>
                <span className="px-3 py-1 rounded-full border border-[var(--border-light)]">
                  No Spam
                </span>
                <span className="px-3 py-1 rounded-full border border-[var(--border-light)]">
                  Practical Tips
                </span>
              </div>
            </div>

            {/* RIGHT → FORM */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="
                  w-full sm:flex-1
                  px-6 py-4 rounded-full
                  bg-[var(--bg-main)]
                  border border-[var(--border-light)]
                  text-[var(--text-main)]
                  placeholder:text-[var(--text-secondary)]/60
                  focus:outline-none
                  focus:ring-2 focus:ring-[var(--accent-primary)]/40
                  transition-all duration-300
                "
              />

              <button
                className="
                  w-full sm:w-auto
                  cursor-pointer
                  px-8 py-4 rounded-full
                  font-medium tracking-[0.1em]
                  text-[var(--text-main)]
                  hover:text-[var(--accent-primary)]
                  hover:bg-[var(--accent-primary)]/5
                  border border-[var(--border-light)]
                  shadow-sm
                  transition-all duration-500
                "
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
