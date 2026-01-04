import React, { useState } from "react";
import { supabase } from "../supabaseClient";

const LeaveReview = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    image_url: "",
    review: "",
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // submit to supabase
  const handleSubmit = async () => {
    if (!formData.name || !formData.role || !formData.review) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("reviews").insert([
      {
        name: formData.name,
        role: formData.role,
        image_url: formData.image_url || null,
        review: formData.review,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error(error);
      alert("Failed to submit review");
    } else {
      alert("Review submitted successfully 🎉");
      setFormData({
        name: "",
        role: "",
        image_url: "",
        review: "",
      });
      setOpen(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="my-7 cursor-pointer relative overflow-hidden px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-full font-medium tracking-[0.1em] text-[var(--text-main)] hover:text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/5 backdrop-blur-md border border-[var(--border-light)] hover:border-[var(--accent-primary)]/20 shadow-sm transition-all duration-500 ease-out group  sm:w-auto
"
      >
        <span className="flex items-center space-x-2 text-[10px] sm:text-xs opacity-100 translate-y-0 ">
          LEAVE REVIEW
        </span>
      </button>

      {/* Modal */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md px-4"
        >
          {/* Card */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl rounded-2xl 
            bg-[var(--bg-main)] border border-[var(--border-light)]
            shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
          >
            {/* Header */}
            <div className="px-8 pt-8 pb-6">
              <h2 className="text-3xl heading-font font-semibold text-[var(--accent-primary)]">
                Share Your Experience
              </h2>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                Your feedback helps us grow and improve.
              </p>
            </div>

            {/* Form */}
            <div className="px-8 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block mb-1 text-xs uppercase tracking-wider text-[var(--text-muted)]">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border-b border-[var(--border-light)]
                  bg-transparent px-4 py-3 text-sm
                 outline-none"
                />
              </div>

              {/* Role */}
              <div>
                <label className="block mb-1 text-xs uppercase tracking-wider text-[var(--text-muted)]">
                  Job Role
                </label>
                <input
                  name="role"
                  type="text"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="Senior Software Developer"
                  className="w-full border-b border-[var(--border-light)]
                  bg-transparent px-4 py-3 text-sm
                  outline-none"
                />
              </div>

              {/* Image Link */}
              <div className="md:col-span-2">
                <label className="block mb-1 text-xs tracking-wider text-[var(--text-muted)]">
                  <span className="uppercase"> Profile Image </span>(optional)
                </label>

                <input
                  name="image_url"
                  type="text"
                  value={formData.image_url}
                  onChange={handleChange}
                  placeholder="Enter your profile image link"
                  className="w-full border-b border-[var(--border-light)]
                  bg-transparent px-4 py-3 text-sm
                  outline-none"
                />
                <p className="text-[10px] text-[var(--text-secondary)]/50 py-2">
                  This image will be displayed on the website
                </p>
              </div>

              {/* Review */}
              <div className="md:col-span-2">
                <label className="block mb-1 text-xs uppercase tracking-wider text-[var(--text-muted)]">
                  Review
                </label>
                <textarea
                  name="review"
                  rows="5"
                  value={formData.review}
                  onChange={handleChange}
                  placeholder="Write your experience..."
                  className="w-full rounded-xl border border-[var(--border-light)]
                  bg-transparent px-4 py-3 text-sm resize-none
                 outline-none"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-6 flex justify-end gap-4">
              <button
                onClick={() => setOpen(false)}
                className="px-5 py-2.5 rounded-full text-sm
                border border-[var(--border-light)]
                hover:bg-[var(--bg-secondary)] transition"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="px-6 py-2.5 rounded-full text-sm font-medium
                bg-[var(--accent)] text-white
                hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Review"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LeaveReview;
