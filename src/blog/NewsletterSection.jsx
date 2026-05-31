import { Facebook, Instagram, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    <div className="bg-[var(--bg-main)] transition-colors duration-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-0 lg:px-0">
        <div>
          <div className="relative flex flex-col lg:flex-row items-start justify-between gap-12">
            {/* LEFT */}
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

            {/* RIGHT */}
            <div className="flex-1 w-full">
              <div className="w-full rounded-2xl">
                <form onSubmit={handleSubmit}>
                  <Box
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
                    }}
                  >
                    <div className="flex flex-col md:flex-row gap-4 md:gap-4">
                      <TextField
                        label="Enter Your Name"
                        name="name"
                        type="text"
                        variant="outlined"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />

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

                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      disabled={loading}
                      sx={{
                        borderRadius: "5px",
                        marginTop: "10px",
                        padding: "15px",
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
                      {loading ? "Submitting..." : "Subscribe"}
                      <FaCrown className="ml-2" />
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
