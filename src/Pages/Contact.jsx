import React, { useState } from "react";
import me from "../assets/images/boat.jpeg";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { supabase } from "../supabaseClient";
import { toast } from "sonner";
import ContactFaq from "../Components/ContactFaq";
import Footer from "../layout/Footer";
import { User, ArrowUpRight } from "lucide-react";
import { TextField, Button, Box, Alert } from "@mui/material";

const Contact = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  /* -------------------- Mobile Focus Scroll -------------------- */

  const isMobile = () => window.innerWidth < 768;

  const handleFocus = (e) => {
    if (!isMobile()) return;

    requestAnimationFrame(() => {
      setTimeout(() => {
        e.target.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 250);
    });
  };

  /* -------------------- Handle Change -------------------- */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  /* -------------------- Validation -------------------- */

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  /* -------------------- Submit -------------------- */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const { name, email, message } = formData;

      const { error } = await supabase.from("Contacts").insert({
        name,
        email,
        message,
      });

      if (error) throw error;

      setSubmitSuccess(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = [
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/mr.paul_16",
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
    {
      name: "Email",
      icon: HiOutlineMail,
      href: "mailto:your@email.com",
    },
  ];

  return (
    <>
      <section className="w-full bg-[var(--bg-main)] pt-25 text-[var(--text-main)] transition-colors duration-300">
        <div className="mx-auto max-w-8xl px-4 pb-12 sm:px-6 sm:pb-16 md:px-12 md:pb-20">
          {/* HEADER */}
          <div className="grid grid-cols-1 gap-8 pb-10 lg:grid-cols-12 lg:gap-16">
            {/* LEFT */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs">
                  Get In Touch
                </span>

                <span className="h-px w-10 bg-[var(--accent-primary)] sm:w-12" />
              </div>

              <h1 className="heading-font mt-5 max-w-4xl text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Let&apos;s start a{" "}
                <span className="text-[var(--accent-primary)]">
                  conversation.
                </span>
              </h1>

              <p className="max-w-xl text-xs leading-[1.9] text-[var(--text-secondary)] sm:text-sm">
                Have a project in mind, need help with a technical problem, or
                simply want to connect? Send me a message and I&apos;ll get back
                to you.
              </p>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="grid grid-cols-1 gap-12 pt-10 lg:grid-cols-12 lg:gap-16 lg:pt-14">
            {/* LEFT — CONTACT INFO */}
            <div className="lg:col-span-5">
              <div className="flex flex-col">
                {/* AVAILABILITY */}
                <div className="flex w-fit items-center gap-2 px-3 py-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />

                  <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                    Available to work
                  </span>
                </div>

                {/* PROFILE */}
                <div className="mt-8 flex items-center gap-5">
                  <div className="relative h-20 w-20 shrink-0">
                    {!imageLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center rounded-full border border-[var(--border-light)] bg-[var(--bg-secondary)]">
                        <User
                          size={24}
                          className="text-[var(--text-secondary)]"
                        />
                      </div>
                    )}

                    <img
                      src={me}
                      alt="Joydeep Paul"
                      loading="lazy"
                      onLoad={() => setImageLoaded(true)}
                      className={`h-20 w-20 rounded-full border border-[var(--border-light)] object-cover p-1 transition-opacity duration-500 ${
                        imageLoaded ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>

                  <div>
                    <h2 className="heading-font text-lg text-[var(--text-main)] sm:text-xl">
                      Joydeep Paul
                    </h2>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                      Frontend Developer
                    </p>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p className="mt-7 max-w-md text-xs leading-[1.9] text-[var(--text-secondary)] sm:text-sm">
                  I build responsive and interactive digital products with
                  React, modern UI systems, animation libraries, and scalable
                  backend technologies.
                </p>

                {/* INFO */}
                <div className="mt-8 border-y border-[var(--border-light)]">
                  <div className="flex items-center justify-between gap-4 py-4">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                      Focus
                    </span>

                    <span className="text-right text-xs font-medium text-[var(--text-main)]">
                      Frontend Development
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-t border-[var(--border-light)] py-4">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                      Stack
                    </span>

                    <span className="text-right text-xs font-medium text-[var(--text-main)]">
                      React · Node · MongoDB
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-t border-[var(--border-light)] py-4">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                      Response
                    </span>

                    <span className="text-right text-xs font-medium text-[var(--text-main)]">
                      Usually within 24–48h
                    </span>
                  </div>
                </div>

                {/* SOCIALS */}
                <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {socials.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target={social.name !== "Email" ? "_blank" : undefined}
                        rel={
                          social.name !== "Email"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        aria-label={social.name}
                        className=" group flex items-center justify-center gap-2 border border-[var(--border-light)] rounded-[3px] px-3 py-2.5 text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--accent-primary)]/40 hover:bg-[var(--accent-primary)]/5 hover:text-[var(--accent-primary)]  "
                      >
                        <Icon
                          size={14}
                          className="shrink-0 transition-transform duration-300 "
                        />

                        <span className="text-[9px] font-medium uppercase tracking-[0.12em]">
                          {social.name}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT — FORM */}
            <div className="lg:col-span-7 ">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[var(--accent-primary)]">
                    Send a Message
                  </span>

                  <h2 className="heading-font mt-2 text-2xl sm:text-3xl">
                    Tell me about your project.
                  </h2>
                </div>

                <ArrowUpRight
                  size={22}
                  className="hidden text-[var(--text-secondary)]/40 sm:block"
                />
              </div>

              <form onSubmit={handleSubmit}>
                <Box
                  display="flex"
                  flexDirection="column"
                  gap={2.5}
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
                  <TextField
                    label="Name"
                    name="name"
                    variant="outlined"
                    fullWidth
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    error={!!errors.name}
                    helperText={errors.name}
                  />

                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    error={!!errors.email}
                    helperText={errors.email}
                  />

                  <TextField
                    label="Message"
                    name="message"
                    multiline
                    rows={5}
                    variant="outlined"
                    fullWidth
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    error={!!errors.message}
                    helperText={errors.message}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    sx={{
                      marginTop: "4px",
                      padding: "12px 20px",
                      borderRadius: "2px",
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      fontSize: "10px",
                      fontWeight: 600,
                      backgroundColor: "var(--accent-primary)",
                      color: "#fff",
                      boxShadow: "none",

                      "&:hover": {
                        backgroundColor: "var(--accent-primary)",
                        opacity: 0.9,
                        boxShadow: "none",
                      },

                      "&.Mui-disabled": {
                        backgroundColor: "var(--border-light)",
                        color: "var(--text-secondary)",
                      },
                    }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  {submitSuccess && (
                    <Alert severity="success">Message sent successfully!</Alert>
                  )}
                </Box>
              </form>
            </div>
          </div>
        </div>
      </section>

      <ContactFaq />
      <Footer />
    </>
  );
};

export default Contact;
