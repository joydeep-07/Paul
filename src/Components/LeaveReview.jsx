import React, { useState, useRef } from "react";
import { supabase } from "../supabaseClient";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

const LeaveReview = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  /* -------------------- React Hook Form -------------------- */
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  /* -------------------- Mobile Focus Only -------------------- */
  const handleFocus = (e) => {
    if (window.innerWidth >= 768) return;

    requestAnimationFrame(() => {
      setTimeout(() => {
        e.target.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 250);
    });
  };

  /* -------------------- Submit -------------------- */
  const onSubmit = async (data) => {
    setLoading(true);

    const { error } = await supabase.from("reviews").insert([
      {
        name: data.name,
        role: data.role,
        image_url: data.image_url || null,
        review: data.review,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error(error);
      toast.error("Failed to submit review");
    } else {
      toast.success("Review submitted successfully 🎉");
      reset();
      setOpen(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="my-7 cursor-pointer relative overflow-hidden px-8 sm:px-10 md:px-9 py-3 sm:py-3.5 md:py-3 rounded-full font-medium tracking-[0.1em]
        text-[var(--text-main)] hover:text-[var(--accent-primary)]
        hover:bg-[var(--accent-primary)]/5 backdrop-blur-md
        border border-[var(--border-light)]
        hover:border-[var(--accent-primary)]/20
        shadow-sm transition-all duration-500 ease-out"
      >
        <span className="text-[10px] sm:text-xs">LEAVE REVIEW</span>
      </button>

      {/* Modal */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md px-4"
        >
          <div
            ref={formRef}
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="px-8 py-6 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Name */}
              <div>
                <label className="block mb-1 text-xs uppercase tracking-wider text-[var(--text-muted)]">
                  Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  onFocus={handleFocus}
                  placeholder="Enter your name"
                  className="w-full border-b border-[var(--border-light)]
                  bg-transparent px-4 py-3 text-sm outline-none"
                />
                {errors.name && (
                  <p className="text-xs text-red-400 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Role */}
              <div>
                <label className="block mb-1 text-xs uppercase tracking-wider text-[var(--text-muted)]">
                  Job Role
                </label>
                <input
                  {...register("role", { required: "Role is required" })}
                  onFocus={handleFocus}
                  placeholder="Senior Software Developer"
                  className="w-full border-b border-[var(--border-light)]
                  bg-transparent px-4 py-3 text-sm outline-none"
                />
                {errors.role && (
                  <p className="text-xs text-red-400 mt-1">
                    {errors.role.message}
                  </p>
                )}
              </div>

              {/* Image Link (Optional) */}
              <div className="md:col-span-2">
                <label className="block mb-1 text-xs tracking-wider text-[var(--text-muted)]">
                  <span className="uppercase">Profile Image</span> (optional)
                </label>
                <input
                  {...register("image_url")}
                  onFocus={handleFocus}
                  placeholder="Enter your profile image link"
                  className="w-full border-b border-[var(--border-light)]
                  bg-transparent px-4 py-3 text-sm outline-none"
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
                  {...register("review", {
                    required: "Review is required",
                    minLength: {
                      value: 10,
                      message: "Review must be at least 10 characters",
                    },
                  })}
                  onFocus={handleFocus}
                  rows="5"
                  placeholder="Write your experience..."
                  className="w-full rounded-xl border border-[var(--border-light)]
                  bg-transparent px-4 py-3 text-sm resize-none outline-none"
                />
                {errors.review && (
                  <p className="text-xs text-red-400 mt-1">
                    {errors.review.message}
                  </p>
                )}
              </div>

              {/* Footer */}
              <div className="md:col-span-2 flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-6 py-2.5 rounded-full text-sm font-medium
                  bg-[var(--bg-secondary)]/85 border border-[var(--border-light)]
                  hover:opacity-90 transition"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 rounded-full text-sm font-medium
                  bg-[var(--accent-primary)]/85 text-white
                  hover:opacity-90 transition disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit Review"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LeaveReview;
