import React, { useState } from "react";

const LeaveReview = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="border border-[var(--border-light)] px-6 py-2.5 mt-4 rounded-full 
        bg-[var(--bg-secondary)] text-sm tracking-wide hover:opacity-90 transition"
      >
        Leave your Review
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
            <div className="px-8 pt-8 pb-6 ">
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
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border-b border-[var(--border-light)]
                  bg-transparent px-4 py-3 text-sm
                  focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                />
              </div>

              {/* Role */}
              <div>
                <label className="block mb-1 text-xs uppercase tracking-wider text-[var(--text-muted)]">
                  Job Role
                </label>
                <input
                  type="text"
                  placeholder="Sineor Software Developer"
                  className="w-full border-b border-[var(--border-light)]
                  bg-transparent px-4 py-3 text-sm
                  focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                />
              </div>

              {/* Image Link */}
              <div className="md:col-span-2">
                <label className="block mb-1 text-xs uppercase tracking-wider text-[var(--text-muted)]">
                  Profile Image (optional)
                </label>

                <input
                  type="text"
                  placeholder="Enter Your Profile image link"
                  className="w-full border-b border-[var(--border-light)]
                  bg-transparent px-4 py-3 text-sm
                  focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                />
                <p className="text-[10px] text-[var(--text-secondary)]/50 py-2">
                  This image will be diaplayed in the website as your Profile
                  image
                </p>
              </div>

              {/* Review */}
              <div className="md:col-span-2">
                <label className="block mb-1 text-xs uppercase tracking-wider text-[var(--text-muted)]">
                  Review
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your experience..."
                  className="w-full rounded-xl border border-[var(--border-light)]
                  bg-transparent px-4 py-3 text-sm resize-none
                  focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
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
                className="px-6 py-2.5 rounded-full text-sm font-medium
                bg-[var(--accent)] text-white
                hover:opacity-90 transition"
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LeaveReview;
