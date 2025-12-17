import React, { useState } from "react";

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    review: "",
    imageUrl: "",
    imageFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now just log (later API call)
    console.log(formData);
  };

  return (
    <div className="h-full w-full flex flex-col">
      {/* HEADER */}
      <div className="mb-6">
        <h2 className="text-3xl heading-font font-semibold text-[var(--accent-primary)]">
          Leave a Review
        </h2>
        <p className="text-sm opacity-70 mt-1 max-w-md">
          Your feedback helps build trust and credibility.
        </p>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
        {/* IMAGE INPUTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Image URL */}
          <div className="flex flex-col gap-1">
            <label className="text-xs uppercase tracking-widest opacity-70">
              Image URL
            </label>
            <input
              type="text"
              name="imageUrl"
              placeholder="https://example.com/photo.jpg"
              value={formData.imageUrl}
              onChange={handleChange}
              className="border border-[var(--border-light)] bg-transparent px-4 py-3 rounded-lg outline-none focus:border-[var(--accent-primary)] transition"
            />
          </div>

          {/* Image Upload */}
          <div className="flex flex-col gap-1">
            <label className="text-xs uppercase tracking-widest opacity-70">
              Upload Image
            </label>
            <input
              type="file"
              name="imageFile"
              accept="image/*"
              onChange={handleChange}
              className="border border-[var(--border-light)] bg-transparent px-4 py-2 rounded-lg outline-none file:mr-4 file:px-4 file:py-2 file:border-0 file:bg-[var(--bg-secondary)] file:rounded-md file:text-xs file:cursor-pointer"
            />
          </div>
        </div>

        {/* NAME */}
        <div className="flex flex-col gap-1">
          <label className="text-xs uppercase tracking-widest opacity-70">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-[var(--border-light)] bg-transparent px-4 py-3 rounded-lg outline-none focus:border-[var(--accent-primary)] transition"
          />
        </div>

        {/* JOB ROLE */}
        <div className="flex flex-col gap-1">
          <label className="text-xs uppercase tracking-widest opacity-70">
            Job Role
          </label>
          <input
            type="text"
            name="role"
            placeholder="Software Engineer, Manager, Designer..."
            value={formData.role}
            onChange={handleChange}
            required
            className="border border-[var(--border-light)] bg-transparent px-4 py-3 rounded-lg outline-none focus:border-[var(--accent-primary)] transition"
          />
        </div>

        {/* REVIEW */}
        <div className="flex flex-col gap-1 flex-1">
          <label className="text-xs uppercase tracking-widest opacity-70">
            Review
          </label>
          <textarea
            name="review"
            placeholder="Write your experience..."
            value={formData.review}
            onChange={handleChange}
            required
            className="border border-[var(--border-light)] bg-transparent px-4 py-3 rounded-lg outline-none resize-none flex-1 focus:border-[var(--accent-primary)] transition"
          />
        </div>

        {/* SUBMIT */}
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="px-8 py-3 rounded-full border-2 border-[var(--text-main)] text-sm tracking-widest hover:bg-[var(--text-main)] hover:text-white transition-all duration-300"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
