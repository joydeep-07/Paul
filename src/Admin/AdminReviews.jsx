import React, { useEffect, useState } from "react";
import { User, Trash2, ChevronDown, ArrowUp } from "lucide-react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ReviewSkeleton from "../Components/ReviewSkeleton";
import LeaveReview from "../Components/LeaveReview";
import { supabase } from "../supabaseClient";

const AdminReviews = () => {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [deletingId, setDeletingId] = useState(null);

  // Tracks which review accordions are open (using an object or array of IDs)
  const [openIds, setOpenIds] = useState({});
  const navigate = useNavigate();

  // FETCH REVIEWS -- SUPABASE
  const fetchReviews = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setReviews(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const toggleAccordion = (id) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // DELETE REVIEW HANDLER
  const handleDelete = async (e, id) => {
    e.stopPropagation(); // Prevent toggling accordion when clicking delete
    if (!window.confirm("Are you sure you want to delete this review?")) return;

    setDeletingId(id);
    const { error } = await supabase.from("reviews").delete().eq("id", id);

    if (!error) {
      setReviews((prev) => prev.filter((rev) => rev.id !== id));
    } else {
      alert("Failed to delete the review.");
    }
    setDeletingId(null);
  };

  return (
    <div className="py-8 md:py-18 bg-[var(--bg-main)] flex justify-center px-2 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* LEFT SECTION (Consistent with normal view) */}
        <div className="w-full lg:w-1/3 px-2 sm:px-4">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)] sm:text-xs">
              Admin Panel
            </span>
            <span className="h-px w-10 bg-[var(--accent-primary)] sm:w-12" />
          </div>

          <h1 className="heading-font text-3xl leading-tight text-[var(--text-main)] sm:text-4xl md:text-5xl">
            Manage <span className="text-[var(--accent-primary)]">Reviews</span>
          </h1>

          <p className="mt-4 max-w-md text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
            Review and moderate all user feedback and testimonials submitted
            across your platform.
          </p>

          <div className="hidden md:flex mt-6">
            <LeaveReview />
          </div>
        </div>

        {/* RIGHT SECTION: ACCORDION LIST */}
        <div className="w-full lg:w-2/3 px-0 sm:px-4">
          {loading ? (
            <ReviewSkeleton />
          ) : reviews.length === 0 ? (
            <div className="border border-[var(--border-light)]/50 bg-[var(--bg-secondary)]/50 rounded-lg p-6 text-center text-sm text-[var(--text-secondary)]">
              No reviews available to manage.
            </div>
          ) : (
            <div className="space-y-4">
              {reviews.map((rev) => {
                const isOpen = !!openIds[rev.id];

                return (
                  <motion.div
                    key={rev.id}
                    layout
                    className="border border-[var(--border-light)]/50 bg-[var(--bg-secondary)]/50 rounded-lg overflow-hidden transition-colors"
                  >
                    {/* ACCORDION HEADER */}
                    <div
                      onClick={() => toggleAccordion(rev.id)}
                      className="flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-[var(--accent-primary)]/5"
                    >
                      <div className="flex items-center gap-4 overflow-hidden pr-2">
                        <div className="relative h-12 w-12 flex-shrink-0">
                          {rev.image_url && rev.image_url.startsWith("http") ? (
                            <img
                              src={rev.image_url}
                              alt={rev.name}
                              className="h-12 w-12 rounded-full object-cover border border-[var(--border-light)]"
                            />
                          ) : (
                            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[var(--accent-primary)]/15 border border-[var(--accent-primary)]/30">
                              <User
                                size={20}
                                className="text-[var(--accent-primary)]"
                              />
                            </div>
                          )}
                        </div>

                        <div className="overflow-hidden">
                          <h2 className="font-semibold text-base sm:text-lg text-[var(--text-main)] truncate">
                            {rev.name}
                          </h2>
                          <p className="text-xs sm:text-sm text-[var(--text-secondary)] truncate opacity-80">
                            {rev.role}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 flex-shrink-0">
                        <button
                          onClick={(e) => handleDelete(e, rev.id)}
                          disabled={deletingId === rev.id}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-md text-xs font-medium transition-colors disabled:opacity-50"
                          title="Delete Review"
                        >
                          <Trash2 size={14} />
                          <span className="hidden sm:inline">
                            {deletingId === rev.id ? "Deleting..." : "Delete"}
                          </span>
                        </button>

                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-[var(--text-secondary)] p-1"
                        >
                          <ChevronDown size={20} />
                        </motion.div>
                      </div>
                    </div>

                    {/* ACCORDION CONTENT */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: easeInOut }}
                          className="overflow-hidden border-t border-[var(--border-light)]/40 bg-[var(--bg-main)]/30"
                        >
                          <div className="p-4 sm:p-6">
                            <p className="text-sm text-justify text-[var(--text-main)] leading-relaxed">
                              {rev.review}
                            </p>
                            {rev.created_at && (
                              <div className="mt-4 pt-3 border-t border-[var(--border-light)]/20 text-[10px] text-[var(--text-secondary)] uppercase tracking-wider">
                                Submitted on:{" "}
                                {new Date(rev.created_at).toLocaleDateString()}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* FOOTER LINK (Consistent with review component style) */}
          <div className="mt-6 flex justify-between items-center px-2 sm:px-4">
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/joydeep-paul-06b37926a",
                  "_blank",
                )
              }
              className="flex items-center gap-2 border-b border-transparent hover:border-[var(--accent-primary)] pb-1 text-sm hover:text-[var(--accent-primary)] text-[var(--text-secondary)]/70 transition-colors whitespace-nowrap"
            >
              Check it out on LinkedIn
              <ArrowUp className="w-4 h-4 rotate-45" />
            </button>
            <div className="text-xs text-[var(--text-secondary)]/70">
              Total:{" "}
              <span className="font-medium text-[var(--text-main)]">
                {reviews.length}
              </span>
            </div>
          </div>
        </div>

        <div className="md:hidden justify-center flex mt-4">
          <LeaveReview />
        </div>
      </div>
    </div>
  );
};

export default AdminReviews;
