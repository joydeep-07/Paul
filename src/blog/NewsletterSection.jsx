import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { toast } from "sonner";
import { supabase } from "../supabaseClient";
import { FaCrown } from "react-icons/fa";

const NewsletterSection = () => {
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

  return (
    <section className="relative z-0 w-full overflow-hidden bg-[var(--bg-main)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-8xl px-4 md:px-12">
        {/* HEADER */}
        <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-20">
          {/* LEFT HEADER — TEXT */}
          <div className="hidden flex-col md:flex lg:col-span-5">
            <div className="mb-4 flex items-center gap-3">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs">
                Newsletter
              </span>
              <span className="h-px w-10 bg-[var(--accent-primary)] sm:w-12" />
            </div>

            <p className="w-full text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
              Stay updated with practical development insights, technical
              breakdowns, and lessons from building real-world applications.
            </p>
          </div>

          {/* RIGHT HEADER — FORM INFO */}
          <div className="hidden border-l border-[var(--border-light)] pl-10 md:flex lg:col-span-7">
            <div className="w-full">
              <h2 className="heading-font text-2xl text-[var(--text-main)] sm:text-3xl">
                Developer&apos;s{" "}
                <span className="text-[var(--accent-primary)]">newsletter</span>
              </h2>

              <p className="mt-2 w-full text-xs leading-relaxed text-[var(--text-secondary)]">
                Get new articles, development ideas, and technical insights
                delivered directly to your inbox.
              </p>
            </div>
          </div>

          {/* MOBILE HEADER */}
          <div className="md:hidden">
            <h2 className="heading-font text-2xl text-[var(--text-main)] sm:text-3xl">
              Developer&apos;s{" "}
              <span className="text-[var(--accent-primary)]">newsletter</span>
            </h2>

            <p className="mt-2 w-full text-xs leading-relaxed text-[var(--text-secondary)]">
              Get new articles, development ideas, and technical insights
              delivered directly to your inbox.
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          {/* LEFT — TEXT */}
          <div className="lg:col-span-5">
            <div className="w-full">
              <h3 className="heading-font text-2xl leading-tight tracking-tight text-[var(--text-main)] sm:text-4xl lg:text-[42px]">
                Stay{" "}
                <span className="text-[var(--accent-primary)]">
                  in the loop
                </span>
              </h3>

              <p className="mt-6 w-full text-justify text-sm leading-[1.9] text-[var(--text-secondary)]">
                Get insights on MERN architecture, UI design patterns,
                performance optimization, and real-world project breakdowns
                delivered straight to your inbox. No unnecessary updates just
                useful content around modern web development, technologies, and
                things I learn while building projects. Subscription is
                completely free.
              </p>
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
