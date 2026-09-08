import React, { useRef, useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { toast } from "sonner";
import { supabase } from "../supabaseClient";
import { FaCrown } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const NewsletterSection = () => {
  const containerRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Name is required");
      return;
    }

    if (!email.trim()) {
      toast.error("Email is required");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.from("newsletter_subscribers").insert([
        {
          name,
          email,
        },
      ]);

      if (error) {
        if (error.code === "23505") {
          toast.error("Email already subscribed");
        } else {
          toast.error(error.message);
        }
      } else {
        toast.success("Successfully subscribed");
        setName("");
        setEmail("");
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useGSAP(
    () => {
      gsap.config({ force3D: true });

      /*
       * Initial states
       */

      // Small section label
      gsap.set(".newsletter-label", {
        y: 20,
        opacity: 0,
      });

      // Accent line
      gsap.set(".newsletter-line", {
        scaleX: 0,
        transformOrigin: "left center",
      });

      // Main animated text
      gsap.set(".newsletter-slide", {
        xPercent: -100,
        opacity: 0,
      });

      /*
       * Scroll animation
       */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },

        defaults: {
          ease: "expo.out",
        },
      });

      // 1. Newsletter label
      tl.to(".newsletter-label", {
        y: 0,
        opacity: 1,
        duration: 0.6,
      })

        // 2. Accent line
        .to(
          ".newsletter-line",
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4",
        )

        // 3. Header / description text
        .to(
          ".newsletter-slide",
          {
            xPercent: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.12,
          },
          "-=0.5",
        );
    },
    {
      scope: containerRef,
    },
  );

  return (
    <section
      ref={containerRef}
      className="relative z-0 w-full overflow-hidden bg-[var(--bg-main)] py-16 transition-colors duration-300 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-8xl px-4 md:px-12">
        {/* HEADER */}
        <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-20">
          {/* LEFT HEADER — TEXT */}
          <div className="hidden flex-col md:flex lg:col-span-5">
            <div className="mb-4 flex items-center gap-3">
              <div className="overflow-hidden">
                <span className="newsletter-label block text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs">
                  Newsletter
                </span>
              </div>

              <span className="newsletter-line h-px w-10 bg-[var(--accent-primary)] sm:w-12" />
            </div>

            <div className="overflow-hidden">
              <p className="newsletter-slide w-full text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                Stay updated with practical development insights, technical
                breakdowns, and lessons from building real-world applications.
              </p>
            </div>
          </div>

          {/* RIGHT HEADER — FORM INFO */}
          <div className="hidden border-l border-[var(--border-light)] pl-10 md:flex lg:col-span-7">
            <div className="w-full">
              <div className="overflow-hidden">
                <h2 className="newsletter-slide heading-font text-2xl text-[var(--text-main)] sm:text-3xl">
                  Developer&apos;s{" "}
                  <span className="text-[var(--accent-primary)]">
                    newsletter
                  </span>
                </h2>
              </div>

              <div className="overflow-hidden">
                <p className="newsletter-slide mt-2 w-full text-xs leading-relaxed text-[var(--text-secondary)]">
                  Get new articles, development ideas, and technical insights
                  delivered directly to your inbox.
                </p>
              </div>
            </div>
          </div>

          {/* MOBILE HEADER */}
          <div className="md:hidden">
            <div className="overflow-hidden">
              <h2 className="newsletter-slide heading-font text-2xl text-[var(--text-main)] sm:text-3xl">
                Developer&apos;s{" "}
                <span className="text-[var(--accent-primary)]">newsletter</span>
              </h2>
            </div>

            <div className="overflow-hidden">
              <p className="newsletter-slide mt-2 w-full text-xs leading-relaxed text-[var(--text-secondary)]">
                Get new articles, development ideas, and technical insights
                delivered directly to your inbox.
              </p>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          {/* LEFT — TEXT */}
          <div className="lg:col-span-5">
            <div className="w-full">
              <div className="overflow-hidden">
                <h3 className="newsletter-slide heading-font text-2xl leading-tight tracking-tight text-[var(--text-main)] sm:text-4xl lg:text-[42px]">
                  Stay{" "}
                  <span className="text-[var(--accent-primary)]">
                    in the loop
                  </span>
                </h3>
              </div>

              <div className="overflow-hidden">
                <p className="newsletter-slide mt-6 w-full text-justify text-sm leading-[1.9] text-[var(--text-secondary)]">
                  Get insights on MERN architecture, UI design patterns,
                  performance optimization, and real-world project breakdowns
                  delivered straight to your inbox. No unnecessary updates just
                  useful content around modern web development, technologies,
                  and things I learn while building projects. Subscription is
                  completely free.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — STATIC FORM */}
          <div className="lg:col-span-7 lg:border-l lg:border-[var(--border-light)] lg:pl-10">
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "var(--text-secondary)",
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "var(--accent-primary)",
                  },

                  "& .MuiOutlinedInput-root": {
                    color: "var(--text-main)",
                    backgroundColor: "transparent",

                    "& fieldset": {
                      borderColor: "var(--border-light)",
                    },

                    "&:hover fieldset": {
                      borderColor: "var(--accent-primary)",
                    },

                    "&.Mui-focused fieldset": {
                      borderColor: "var(--accent-primary)",
                    },
                  },

                  "& .MuiOutlinedInput-input": {
                    fontSize: "13px",
                  },
                }}
              >
                {/* INPUTS */}
                <div className="flex flex-col gap-4 pb-4 md:flex-row">
                  <div className="w-full">
                    <TextField
                      label="Enter Your Name"
                      name="name"
                      type="text"
                      variant="outlined"
                      fullWidth
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="w-full">
                    <TextField
                      label="Enter Your Email"
                      name="email"
                      type="email"
                      variant="outlined"
                      fullWidth
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* BUTTON */}
                <div>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={loading}
                    sx={{
                      marginTop: "4px",
                      padding: "13px 20px",
                      borderRadius: "4px",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      fontSize: "10px",
                      fontWeight: 600,

                      backgroundColor: "var(--accent-primary)",
                      color: "#fff",
                      border: "1px solid var(--accent-primary)",
                      boxShadow: "none",

                      "&:hover": {
                        backgroundColor: "var(--accent-primary)",
                        color: "#fff",
                        borderColor: "var(--accent-primary)",
                        opacity: 0.9,
                        boxShadow: "none",
                      },

                      "&.Mui-disabled": {
                        backgroundColor: "var(--accent-primary)",
                        color: "#fff",
                        borderColor: "var(--accent-primary)",
                        opacity: 0.6,
                      },
                    }}
                  >
                    {loading ? "Submitting..." : "Subscribe"}
                    <FaCrown className="ml-2" />
                  </Button>
                </div>
              </Box>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
