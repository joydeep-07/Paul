import React, { useState, useRef } from "react";
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
    watch,
    formState: { errors },
  } = useForm();

  const imageFile = watch("image");

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

    try {
      // ────────────────────────────────────────────────
      // Just print the form data to console
      console.log("Submitted review data:", {
        name: data.name,
        role: data.role,
        review: data.review,
        image: data.image?.[0]
          ? {
              name: data.image[0].name,
              size: data.image[0].size,
              type: data.image[0].type,
              // file: data.image[0]  ← you can log the File object if needed
            }
          : null,
      });

      // You can also do this for a more raw view:
      console.log("Raw form data:", data);

      // ────────────────────────────────────────────────

      toast.success("Review submitted successfully 🎉 (check console)");
      reset();
      setOpen(false);
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="my-7 cursor-pointer relative overflow-hidden px-8 py-3 rounded-full font-medium tracking-[0.1em]
        text-[var(--text-main)] hover:text-[var(--accent-primary)]
        hover:bg-[var(--accent-primary)]/5
        border border-[var(--border-light)]
        shadow-sm transition-all duration-500"
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
              <h2 className="text-3xl heading-font font-medium ">
                Share Your{" "}
                <span className="text-[var(--accent-primary)]">Experience</span>
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
              {/* Name + Image */}
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                {/* Name */}
                <div>
                  <label className="block mb-2 text-xs uppercase tracking-wider text-[var(--text-muted)]">
                    Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    onFocus={handleFocus}
                    placeholder="Enter your name"
                    className="w-full border-b border-[var(--border-light)]
                    bg-transparent px-4 py-3 text-sm outline-none
                    focus:border-[var(--accent-primary)]/50 transition-colors"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Image Upload */}
                <label
                  htmlFor="profile-image-upload"
                  className="cursor-pointer border border-dashed border-[var(--border-light)]
                  rounded-xl px-6 py-3 flex flex-col items-center justify-center
                  text-center bg-[var(--bg-secondary)]/40
                  hover:bg-[var(--bg-secondary)]/70
                  hover:border-[var(--accent-primary)]/60
                  transition-all"
                >
                  {imageFile?.length ? (
                    <p className="mt-1 text-sm text-[var(--accent-primary)] font-medium truncate max-w-full">
                      {imageFile[0].name}
                    </p>
                  ) : (
                    <p className="text-sm font-medium uppercase text-[var(--text-main)]">
                      Profile Photo
                    </p>
                  )}

                  <p className="mt-1 text-[11px] text-[var(--text-secondary)]/70">
                    Optional : This image will be displayed on the website
                  </p>

                  <input
                    id="profile-image-upload"
                    type="file"
                    accept="image/*"
                    {...register("image")}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Job Role */}
              <div className="md:col-span-2">
                <label className="block mb-1 text-xs uppercase tracking-wider text-[var(--text-muted)]">
                  Job Role
                </label>
                <input
                  {...register("role", { required: "Role is required" })}
                  onFocus={handleFocus}
                  placeholder="Senior Software Developer"
                  className="w-full border-b border-[var(--border-light)]
                  bg-transparent px-4 py-3 text-sm outline-none  focus:border-[var(--accent-primary)]/50"
                />
                {errors.role && (
                  <p className="text-xs text-red-400 mt-1">
                    {errors.role.message}
                  </p>
                )}
              </div>

              {/* Review */}
              <div className="md:col-span-2">
                <label className="block mb-1 text-xs uppercase tracking-wider text-[var(--text-muted)]">
                  Review
                </label>
                <textarea
                  {...register("review", { required: "Review is required" })}
                  onFocus={handleFocus}
                  rows="5"
                  placeholder="Write your experience..."
                  className="w-full rounded-xl border border-[var(--border-light)]
                  bg-transparent px-4 py-3 text-sm resize-none outline-none  focus:border-[var(--accent-primary)]/50"
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
                  className="px-6 py-2.5 rounded-full text-sm
                  bg-[var(--bg-secondary)] border border-[var(--border-light)]"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 rounded-full text-sm
                  bg-[var(--accent-primary)] text-white disabled:opacity-50"
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
