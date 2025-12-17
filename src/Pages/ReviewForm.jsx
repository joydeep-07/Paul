import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUp, Upload, X } from "lucide-react";
import { motion } from "framer-motion";

const ReviewForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    review: "",
    photo: null,
    photoPreview: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file type
      if (!file.type.startsWith("image/")) {
        setErrors((prev) => ({
          ...prev,
          photo: "Please upload an image file",
        }));
        return;
      }

      // Check file size (max 3MB)
      if (file.size > 3 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          photo: "File size should be less than 5MB",
        }));
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          photo: file,
          photoPreview: reader.result,
        }));
      };
      reader.readAsDataURL(file);

      if (errors.photo) {
        setErrors((prev) => ({ ...prev, photo: "" }));
      }
    }
  };

  const removePhoto = () => {
    setFormData((prev) => ({
      ...prev,
      photo: null,
      photoPreview: null,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.position.trim()) {
      newErrors.position = "Job role is required";
    }

    if (!formData.review.trim()) {
      newErrors.review = "Review is required";
    } else if (formData.review.trim().split(" ").length < 10) {
      newErrors.review = "Review should be at least 10 words";
    }

    if (!formData.photo) {
      newErrors.photo = "Profile photo is required";
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
      // In a real application, you would send this data to your backend
      console.log("Form data:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message and redirect
      // alert("Thank you for your review! It has been submitted for approval.");
      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (
      window.confirm(
        "Are you sure you want to cancel? All changes will be lost."
      )
    ) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] py-5 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {/* <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              <ArrowUp className="w-4 h-4 rotate-[-90deg]" />
              Back 
            </button> */}

            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] opacity-70">
              Submit Testimonial
            </h3>
          </div>

          <div className="mt-0 mb-6 h-[2px] w-16 bg-[var(--accent-primary)] rounded-full" />

          <h1 className="heading-font text-4xl md:text-5xl leading-tight mb-4">
            Share Your{" "}
            <span className="text-[var(--accent-primary)]">Experience</span>
          </h1>

          <p className="text-sm opacity-80 max-w-2xl">
            Your feedback helps showcase my work and build trust with future
            clients. Please provide honest feedback about our collaboration.
          </p>
        </div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border border-[var(--border-light)] bg-[var(--bg-secondary)] rounded-xl p-6 md:p-8"
        >
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Profile Photo Upload */}
                <div>
                  <label className="block text-sm font-medium mb-3 opacity-90">
                    Profile Photo *
                  </label>

                  <div className="flex flex-col items-center space-y-4">
                    {formData.photoPreview ? (
                      <div className="relative">
                        <img
                          src={formData.photoPreview}
                          alt="Preview"
                          className="w-32 h-32 rounded-full object-cover border-4 border-[var(--border-light)]"
                        />
                        <button
                          type="button"
                          onClick={removePhoto}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      <label className="cursor-pointer group">
                        <div className="w-32 h-32 rounded-full border-2 border-dashed border-[var(--border-light)] flex flex-col items-center justify-center hover:border-[var(--accent-primary)] transition-colors">
                          <Upload className="w-8 h-8 opacity-50 group-hover:opacity-100 group-hover:text-[var(--accent-primary)] mb-2" />
                          <span className="text-xs opacity-70">
                            Upload Photo
                          </span>
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    )}

                    {errors.photo && (
                      <p className="text-sm text-red-500 mt-2">
                        {errors.photo}
                      </p>
                    )}

                    <p className="text-xs opacity-60 text-center">
                      Recommended: Square image, at least 400x400px
                      <br />
                      Max file size: 3MB
                    </p>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-2 opacity-90">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-b ${
                      errors.name
                        ? "border-red-500"
                        : "border-[var(--border-light)]"
                    } focus:outline-none focus:border-[var(--accent-primary)] transition-colors`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-2">{errors.name}</p>
                  )}
                </div>

                {/* Job Role */}
                <div>
                  <label className="block text-sm font-medium mb-2 opacity-90">
                    Your Job Role / Position *
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-b ${
                      errors.position
                        ? "border-red-500"
                        : "border-[var(--border-light)]"
                    } focus:outline-none focus:border-[var(--accent-primary)] transition-colors`}
                    placeholder="Senior Developer at Tech Corp"
                  />
                  {errors.position && (
                    <p className="text-sm text-red-500 mt-2">
                      {errors.position}
                    </p>
                  )}
                </div>
              </div>

              {/* Right Column - Review */}
              <div>
                <label className="block text-sm font-medium mb-2 opacity-90">
                  Your Review *
                  <span className="text-xs opacity-60 ml-2">
                    (Minimum 10 words)
                  </span>
                </label>
                <textarea
                  name="review"
                  value={formData.review}
                  onChange={handleChange}
                  rows="12"
                  className={`w-full h-full px-4 py-3 bg-[var(--bg-main)] border ${
                    errors.review
                      ? "border-red-500"
                      : "border-[var(--border-light)]"
                  } rounded-lg focus:outline-none focus:border-[var(--accent-primary)] text-[var(--text-main)] transition-colors resize-none`}
                  placeholder="Share your experience working together..."
                />
                {errors.review && (
                  <p className="text-sm text-red-500 mt-2">{errors.review}</p>
                )}

                {/* <div className="mt-3 text-xs opacity-60 flex justify-between">
                  <span>
                    Words:{" "}
                    {formData.review.trim()
                      ? formData.review.trim().split(/\s+/).length
                      : 0}
                  </span>
                  <span>Characters: {formData.review.length}</span>
                </div> */}
              </div>
            </div>

            {/* Form Actions */}
            <div className="mt-10 pt-6  flex flex-col sm:flex-row justify-between items-center gap-4">
              <button
                type="button"
                onClick={handleCancel}
                className="px-8 py-3 border-2 border-[var(--border-light)] text-[var(--text-main)] font-medium tracking-wider rounded-full transition-all duration-300 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] w-full sm:w-auto"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-[var(--accent-primary)] text-white font-medium tracking-wider rounded-full transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group w-full sm:w-auto"
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-x-full group-hover:translate-x-full"></span>

                <span className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    "Submit Review"
                  )}
                </span>
              </button>
            </div>

            {/* Disclaimer */}
            <p className="mt-6 text-xs opacity-50 text-center">
              By submitting this review, you agree to have it displayed publicly
              on this website. All reviews are subject to approval before being
              published.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ReviewForm;
