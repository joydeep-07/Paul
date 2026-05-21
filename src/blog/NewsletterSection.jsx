import { Facebook, Instagram, X } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Box, Alert } from "@mui/material";
const NewsletterSection = () => {
  return (
    <div className="bg-[var(--bg-main)] transition-colors duration-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-0 lg:px-0">
        <div
          className="
           
          "
        >
          {/* FLEX CONTAINER */}
          <div className="relative flex flex-col lg:flex-row items-start justify-between gap-12">
            {/* LEFT → TEXT */}
            <div className="flex-1 space-y-6">
              <h3 className="heading-font text-2xl sm:text-[45px] tracking-tight text-[var(--text-main)] leading-tight">
                Join{" "}
                <span className="text-[var(--accent-primary)]">
                  Developer's Newsletter
                </span>
              </h3>

              <p className="text-[var(--text-secondary)] leading-relaxed max-w-xl text-xs md:text-sm lg:text-sm text-justify lg:mx-0">
                Get insights on MERN architecture, UI design patterns,
                performance optimization, and real-world project breakdowns
                delivered straight to your inbox.
              </p>
            </div>

            {/* RIGHT → FORM */}
            <div className="flex-1 w-full">
              {/* <form className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="
                    w-full
                    px-6 py-4
                    rounded-sm
                   bg-[var(--bg-main)]
                    border border-[var(--border-light)] 
                    text-[var(--text-main)]
                    placeholder:text-[var(--text-secondary)]/70
                    focus:outline-none
                    focus:border-[var(--accent-primary)]/70
                    transition-all duration-300
                  "
                />

                <button
                  type="submit"
                  className="
                    group relative
                    px-8 py-3
                    rounded-sm
                    font-semibold tracking-wide
                    text-white
                    bg-[var(--accent-primary)]
                    shadow-lg
                    active:scale-[0.98]
                    transition-all duration-300
                  "
                >
                  <span className="relative z-10">Subscribe</span>
                  <div className="absolute inset-0 rounded-full to-transparent opacity-0 " />
                </button>
              </form> */}

              <div className="w-full rounded-2xl ">
                <form>
                  <Box
                    display=""
                    flexDirection="column"
                    gap={3}
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

                      "& .MuiFormHelperText-root": {
                        color: "var(--text-secondary)",
                      },

                      "& .Mui-error": {
                        color: "#ef4444",
                      },
                    }}
                  >
                    {/* Email */}
                    <TextField
                      label="Enter Your Email"
                      name="email"
                      type="email"
                      variant="outlined"
                      fullWidth
                    />

                    {/* Button */}
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{
                        borderRadius: "5px",
                        marginTop: "10px",
                        padding: "10px",
                        textTransform: "none",
                        fontSize: "14px",
                        backgroundColor: "var(--accent-primary)",
                        color: "#fff",

                        "&:hover": {
                          backgroundColor: "var(--accent-primary)",
                          opacity: 0.9,
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Box>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-14 sm:mt-16 pt-8 border-t border-[var(--border-light)] text-center">
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] opacity-80">
              Want more technical deep dives?{" "}
              <Link
                to="/blogs"
                className="text-[var(--accent-primary)] font-medium hover:underline"
              >
                Explore all articles
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
