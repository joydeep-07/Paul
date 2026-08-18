import React, { useEffect, useState } from "react";
import { User, Trash2, ChevronDown, ArrowUp } from "lucide-react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { FaCrown } from "react-icons/fa";
import ReviewSkeleton from "../Components/ReviewSkeleton";
import LeaveReview from "../Components/LeaveReview";
import AdminSubscribers from "./AdminSubscribers";
import { supabase } from "../supabaseClient";

const AdminReviews = () => {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [deletingId, setDeletingId] = useState(null);
  const [subscriberCount, setSubscriberCount] = useState(0);

  // Tracks which single review accordion is open (stores ID or null)
  const [openId, setOpenId] = useState(null);

  // Tracks whether "See More" is toggled on
  const [showAll, setShowAll] = useState(false);

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

  // FETCH SUBSCRIBER COUNT FOR RHS HEADER
  const fetchSubscriberCount = async () => {
    const { count, error } = await supabase
      .from("newsletter_subscribers")
      .select("*", { count: "exact", head: true });

    if (!error && count !== null) {
      setSubscriberCount(count);
    }
  };

  useEffect(() => {
    fetchReviews();
    fetchSubscriberCount();
  }, []);

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // DELETE REVIEW HANDLER
  const handleDelete = async (e, id) => {
    e.stopPropagation();
    if (!window.confirm("Are you sure you want to delete this review?")) return;

    setDeletingId(id);
    const { error } = await supabase.from("reviews").delete().eq("id", id);

    if (!error) {
      setReviews((prev) => prev.filter((rev) => rev.id !== id));
      if (openId === id) setOpenId(null);
      toast.success("Review deleted successfully");
    } else {
      toast.error("Failed to delete the review.");
    }
    setDeletingId(null);
  };

  // Slice reviews based on showAll state
  const displayedReviews = showAll ? reviews : reviews.slice(0, 4);

  return (
    <section className="w-full bg-[var(--bg-main)] flex justify-center py-16 sm:py-20">
      <div className="max-w-8xl px-4 md:px-12 w-full">
        {/* HEADERS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-10">
          {/* TITLE HEADING (LEFT) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)]">
                Admin Panel
              </span>
              <span className="h-px w-12 bg-[var(--accent-primary)]" />
            </div>

            <h1 className="heading-font text-3xl sm:text-4xl md:text-4xl text-[var(--text-main)]">
              Manage{" "}
              <span className="text-[var(--accent-primary)]">Reviews</span>
            </h1>

            <p className="mt-4 max-w-md text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Review and moderate all user feedback and testimonials submitted
              across your platform.
            </p>
          </div>

          {/* SUBSCRIBERS HEADING (RIGHT TOP) */}
          <div className="lg:col-span-5 pl-10 border-l border-[var(--border-light)]">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)]">
                Admin Newsletter
              </span>
              <span className="h-px w-12 bg-[var(--accent-primary)]" />
            </div>

            <h1 className="heading-font text-3xl sm:text-4xl md:text-4xl text-[var(--text-main)]">
              Newsletter{" "}
              <span className="text-[var(--accent-primary)]">Subscribers</span>
            </h1>

            <p className="mt-4 max-w-md text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Manage newsletter subscribers, review their details, and stay
              organized with your latest audience updates from one place.
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* LEFT COLUMN: REVIEWS ACCORDIONS */}
          <div className="lg:col-span-7">
            {loading ? (
              <ReviewSkeleton />
            ) : reviews.length === 0 ? (
              <div className="border border-[var(--border-light)]/50 bg-[var(--bg-secondary)]/50 rounded-lg p-6 text-center text-sm text-[var(--text-secondary)]">
                No reviews available to manage.
              </div>
            ) : (
              <motion.div layout className="space-y-4">
                <AnimatePresence initial={false}>
                  {displayedReviews.map((rev) => {
                    const isOpen = openId === rev.id;

                    return (
                      <motion.div
                        key={rev.id}
                        layout
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: easeInOut }}
                        className="border border-[var(--border-light)]/50 bg-[var(--bg-secondary)]/50 rounded-lg overflow-hidden transition-colors"
                      >
                        {/* ACCORDION HEADER */}
                        <div
                          onClick={() => toggleAccordion(rev.id)}
                          className="flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-[var(--accent-primary)]/5"
                        >
                          <div className="flex items-center gap-4 overflow-hidden pr-2">
                            <div className="relative h-12 w-12 flex-shrink-0">
                              {rev.image_url &&
                              rev.image_url.startsWith("http") ? (
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
                                {deletingId === rev.id
                                  ? "Deleting..."
                                  : "Delete"}
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
                                    {new Date(
                                      rev.created_at,
                                    ).toLocaleDateString()}
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            )}

            {/* FOOTER LINK & TOGGLE BUTTONS */}
            <div className="mt-6 flex justify-between items-center px-1">
              {reviews.length > 4 && (
                <button
                  onClick={() => {
                    setShowAll((prev) => !prev);
                    setOpenId(null);
                  }}
                  className="flex items-center gap-2 border-b border-transparent hover:border-[var(--accent-primary)] pb-1 text-sm hover:text-[var(--accent-primary)] text-[var(--text-secondary)]/70 transition-colors whitespace-nowrap"
                >
                  {showAll ? "Show Less" : "See More"}
                  <ArrowUp
                    className={`w-4 h-4 transition-transform duration-300 ${
                      showAll ? "rotate-225" : "rotate-45"
                    }`}
                  />
                </button>
              )}
              <div className="text-xs text-[var(--text-secondary)]/70 ml-auto">
                Total Reviews:{" "}
                <span className="font-medium text-[var(--text-main)]">
                  {reviews.length}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: IMPORTED ADMIN SUBSCRIBERS COMPONENT */}
          <div className="lg:col-span-5 lg:border-l lg:border-[var(--border-light)] lg:pl-10">
            <AdminSubscribers />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminReviews;
