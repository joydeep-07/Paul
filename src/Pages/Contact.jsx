import React, { useState } from "react";
import me from "../assets/images/dp2.png";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { supabase } from "../supabaseClient";
import { toast } from "sonner";
import ContactFaq from "../Components/ContactFaq";
import Footer from "../layout/Footer";
import { User } from "lucide-react";
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
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  /* -------------------- Validation -------------------- */
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

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

      // toast.success("Message sent");
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message ");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className=" bg-[var(--bg-main)] py-6 pt-25">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] opacity-70">
              Get in Touch
            </h3>

            <div className="mt-2 mb-6 h-[2px] w-16 bg-[var(--accent-primary)] rounded-full" />

            <h1 className="heading-font text-4xl md:text-6xl mb-4">
              Let's Start a{" "}
              <span className="text-[var(--accent-primary)]">Conversation</span>
            </h1>

            <p className="text-sm opacity-80 max-w-2xl">
              Have a project in mind or just want to say hello? Fill out the
              form below and I’ll get back to you.
            </p>
          </div>

          {/* Main Section */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Right - Info */}
            <div className="w-full lg:w-1/2 rounded-2xl p-4 flex flex-col gap-5">
              <div className="flex items-center gap-2 bg-[var(--accent-primary)]/10 px-4 py-2 rounded-full w-fit">
                <span className="h-2 w-2 bg-[var(--accent-primary)] rounded-full animate-pulse" />
                <span className="text-xs">Available to work</span>
              </div>

              <div className="relative h-24 w-24">
                {/* Skeleton */}
                {!imageLoaded && (
                  <div className="absolute inset-0 rounded-full p-1 bg-[var(--bg-secondary)] text-[var(--text-secondary)] border-2 border-[var(--accent-primary)] animate-pulse flex justify-center items-center">
                    <User />
                  </div>
                )}

                {/* Image */}
                <img
                  loading="lazy"
                  src={me}
                  alt="Profile"
                  onLoad={() => setImageLoaded(true)}
                  className={`h-24 w-24 p-1.5 rounded-full object-cover border-2 border-[var(--accent-primary)] transition-opacity duration-500  ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                />
              </div>

              <p className="text-sm opacity-70 leading-relaxed">
                My inbox is always open, Whether you have a project or just want
                to say Hi. I would love to hear from you. Feel free to contact
                me and I'll get back to you.
              </p>

              <div className="flex gap-4 text-lg opacity-80">
                <FaInstagram className="hover:opacity-100 transition" />
                <FaLinkedin className="hover:opacity-100 transition" />
                <FaGithub className="hover:opacity-100 transition" />
                <HiOutlineMail className="hover:opacity-100 transition" />
              </div>
            </div>

            {/* Left - Form */}
            <div className="w-full lg:w-1/2 rounded-2xl p-6">
              <form onSubmit={handleSubmit}>
                <Box
                  display="flex"
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
                  {/* Name */}
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

                  {/* Email */}
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

                  {/* Message */}
                  <TextField
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    error={!!errors.message}
                    helperText={errors.message}
                  />

                  {/* Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    sx={{
                      borderRadius: "30px",
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
      </div>

      <ContactFaq />
      <Footer />
    </>
  );
};

export default Contact;
