import React, { useState } from "react";
import me from "../assets/images/dp1.jpg";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { supabase } from "../supabaseClient";
import { toast } from "sonner";
import ContactFaq from "../Components/ContactFaq";
import Footer from "../layout/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

      toast.success("Message sent successfully 🚀");
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message ❌");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[var(--bg-main)] py-5">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] opacity-70">
              Get in Touch
            </h3>

            <div className="mt-2 mb-6 h-[2px] w-16 bg-[var(--accent-primary)] rounded-full" />

            <h1 className="heading-font text-4xl md:text-5xl mb-4">
              Let's Start a{" "}
              <span className="text-[var(--accent-primary)]">Conversation</span>
            </h1>

            <p className="text-sm opacity-80 max-w-2xl">
              Have a project in mind or just want to say hello? Fill out the
              form below and I’ll get back to you.
            </p>
          </div>

          {/* Main Section */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left - Form */}
            <div className="w-full lg:w-1/2 rounded-2xl p-6 ">
              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                  <label className="block text-sm mb-2">Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-[var(--border-light)] focus:border-[var(--accent-secondary)] outline-none py-2"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full bg-transparent border-b border-[var(--border-light)] focus:border-[var(--accent-secondary)] outline-none py-2"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm mb-2">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    className="w-full bg-transparent border border-[var(--border-light)] focus:border-[var(--accent-secondary)] outline-none rounded-lg p-3"
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-5 py-3 text-sm rounded-full border-1 border-[var(--border-light)] transition-all duration-500
                    ${
                      isSubmitting
                        ? "opacity-50 cursor-not-allowed"
                        : " text-[var(--text-main)] hover:text-[var(--text-secondary)]"
                    }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitSuccess && (
                  <p className="text-sm text-green-400 mt-2">
                    Message sent successfully!
                  </p>
                )}
              </form>
            </div>

            {/* Right - Info */}
            <div className="w-full lg:w-1/2 rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex items-center gap-2 bg-[var(--accent-primary)]/10 px-4 py-2 rounded-full w-fit">
                <span className="h-2 w-2 bg-[var(--accent-primary)] rounded-full animate-pulse" />
                <span className="text-xs">Available to work</span>
              </div>

              <img
                src={me}
                alt="Profile"
                className="h-24 w-24 p-1.5 rounded-full object-cover border-3 border-[var(--accent-primary)]"
              />

              <p className="text-sm opacity-70">
                My inbox is always open. Whether you have a project or just want
                to say hi, I’d love to hear from you.
              </p>

              <div className="flex gap-4">
                <FaInstagram />
                <FaLinkedin />
                <FaGithub />
                <HiOutlineMail />
              </div>
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
