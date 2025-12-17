import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Mail,
  User,
  MessageSquare,
  Instagram,
  Linkedin,
  Github,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { supabase } from "../supabaseClient";
import { toast } from "sonner";
import ContactFaq from "../Components/ContactFaq";
import Footer from "../layout/Footer";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    return newErrors;
  };

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

      const { data, error } = await supabase
        .from("Contacts")
        .insert([{ name, email, message }]);

      if (error) {
        console.error("Supabase error:", error.message);
        toast.error("Something went wrong! Please try again.");
        setErrors({ submit: "Failed to send message. Please try again." });
      } else {
        console.log("Data inserted successfully:", data);
        toast.success("Message sent successfully!");
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An unexpected error occurred!");
      setErrors({ submit: "An unexpected error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setSubmitSuccess(false);
  };

  return (
    <>
      <div className="min-h-screen bg-[var(--bg-main)] py-5">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] opacity-70">
              Get in Touch
            </h3>

            <div className="mt-2 mb-6 h-[2px] w-16 bg-[var(--accent-primary)] rounded-full" />

            <h1 className="heading-font text-4xl md:text-5xl leading-tight mb-4">
              Let's Start a{" "}
              <span className="text-[var(--accent-primary)]">Conversation</span>
            </h1>

            <p className="text-sm opacity-80 max-w-2xl">
              Have a project in mind or just want to say hello? I'd love to hear
              from you. Fill out the form below and I'll get back to you as soon
              as possible.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2"
            >
              <div className="border border-[var(--border-light)] bg-[var(--bg-secondary)] rounded-xl p-6 md:p-8">
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                      className="inline-flex items-center justify-center w-20 h-20 bg-green-500/10 rounded-full mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </motion.div>

                    <h3 className="text-2xl font-semibold mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-sm opacity-80 mb-6">
                      Thank you for reaching out. I'll get back to you within 24
                      hours.
                    </p>

                    <button
                      onClick={handleReset}
                      className="px-8 py-3 bg-transparent border-2 border-[var(--border-light)] text-[var(--text-main)] font-medium tracking-wider rounded-full transition-all duration-300 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      {/* Name Field */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <User className="w-4 h-4 opacity-70" />
                          <label className="block text-sm font-medium opacity-90">
                            Your Name *
                          </label>
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-[var(--bg-main)] border ${
                            errors.name
                              ? "border-red-500"
                              : "border-[var(--border-light)]"
                          } rounded-lg focus:outline-none focus:border-[var(--accent-primary)] transition-colors`}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="text-sm text-red-500 mt-2 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Mail className="w-4 h-4 opacity-70" />
                          <label className="block text-sm font-medium opacity-90">
                            Email Address *
                          </label>
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-[var(--bg-main)] border ${
                            errors.email
                              ? "border-red-500"
                              : "border-[var(--border-light)]"
                          } rounded-lg focus:outline-none focus:border-[var(--accent-primary)] transition-colors`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500 mt-2 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Message Field */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <MessageSquare className="w-4 h-4 opacity-70" />
                          <label className="block text-sm font-medium opacity-90">
                            Your Message *
                          </label>
                        </div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="6"
                          className={`w-full px-4 py-3 bg-[var(--bg-main)] border ${
                            errors.message
                              ? "border-red-500"
                              : "border-[var(--border-light)]"
                          } rounded-lg focus:outline-none focus:border-[var(--accent-primary)] transition-colors resize-none`}
                          placeholder="Tell me about your project, ideas, or just say hello..."
                        />
                        {errors.message && (
                          <p className="text-sm text-red-500 mt-2 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.message}
                          </p>
                        )}

                        <div className="mt-3 text-xs opacity-60 flex justify-between">
                          <span>Characters: {formData.message.length}</span>
                          <span>Minimum: 10 characters</span>
                        </div>
                      </div>

                      {errors.submit && (
                        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                          <p className="text-sm text-red-500 flex items-center gap-2">
                            <AlertCircle className="w-4 h-4" />
                            {errors.submit}
                          </p>
                        </div>
                      )}

                      {/* Form Actions */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-[var(--border-light)]">
                        <button
                          type="button"
                          onClick={handleReset}
                          className="px-8 py-3 border-2 border-[var(--border-light)] text-[var(--text-main)] font-medium tracking-wider rounded-full transition-all duration-300 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] flex-1"
                        >
                          Clear Form
                        </button>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-8 py-3 bg-[var(--accent-primary)] text-white font-medium tracking-wider rounded-full transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group flex-1"
                        >
                          {/* Shimmer effect */}
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-x-full group-hover:translate-x-full"></span>

                          <span className="relative flex items-center justify-center gap-2">
                            {isSubmitting ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Sending...
                              </>
                            ) : (
                              <>
                                Send Message
                                <ArrowUp className="w-4 h-4 rotate-45" />
                              </>
                            )}
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Right Column - Contact Info */}
            <div className="w-full lg:w-1/2">
              <div className="border border-[var(--border-light)] bg-[var(--bg-secondary)] rounded-xl p-6 md:p-8 h-full">
                <div className="space-y-8">
                  {/* Status Badge */}
                  <div className="inline-flex items-center gap-2 bg-[var(--accent-primary)]/20 px-4 py-2 rounded-full">
                    <span className="h-2 w-2 rounded-full animate-pulse bg-[var(--accent-primary)]"></span>
                    <span className="text-xs font-medium">
                      Available for new projects
                    </span>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Direct Contact</h3>

                    <div className="space-y-3">
                      <a
                        href="mailto:joydeeprnp8821@gmail.com"
                        className="flex items-center gap-3 p-3 border border-[var(--border-light)] rounded-lg hover:border-[var(--accent-primary)] transition-colors group"
                      >
                        <div className="p-2 bg-[var(--accent-primary)]/10 rounded-lg">
                          <Mail className="w-5 h-5 text-[var(--accent-primary)]" />
                        </div>
                        <div>
                          <p className="text-sm opacity-70">Email</p>
                          <p className="group-hover:text-[var(--accent-primary)] transition-colors">
                            joydeeprnp8821@gmail.com
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="p-4 bg-[var(--bg-main)] rounded-lg border border-[var(--border-light)]">
                    <h4 className="font-semibold mb-2">Response Time</h4>
                    <p className="text-sm opacity-80">
                      I typically respond within 24 hours on weekdays. For
                      urgent inquiries, please connect with me on LinkedIn.
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Connect With Me</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://www.instagram.com/mr.paul_16"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 border border-[var(--border-light)] rounded-lg hover:border-pink-500 hover:text-pink-500 transition-colors"
                      >
                        <Instagram className="w-6 h-6" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/joydeep-paul-06b37926a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 border border-[var(--border-light)] rounded-lg hover:border-blue-500 hover:text-blue-500 transition-colors"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                      <a
                        href="https://github.com/joydeep-07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 border border-[var(--border-light)] rounded-lg hover:border-gray-700 hover:text-gray-700 transition-colors dark:hover:border-gray-300 dark:hover:text-gray-300"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                    </div>
                  </div>

                  {/* FAQ Link */}
                  <div className="pt-6 border-t border-[var(--border-light)]">
                    <button
                      // onClick={() => navigate("/faq")}
                      className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 hover:text-[var(--accent-primary)] transition-colors"
                    >
                      View Frequently Asked Questions
                      <ArrowUp className="w-4 h-4 rotate-45" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactFaq/>
      <Footer/>
    </>
  );
};

export default Contact;
