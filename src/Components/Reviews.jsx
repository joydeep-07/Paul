import React, { useEffect, useState, useRef } from "react";
import { ArrowUp, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ReviewSkeleton from "./ReviewSkeleton";
import LeaveReview from "./LeaveReview";
import { supabase } from "../supabaseClient"; // ✅ SUPABASE

const SLIDE_DURATION = 5000;
const RADIUS = 36;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -400,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -400 : 300,
    opacity: 0,
  }),
};

const Reviews = () => {
  const [[index, direction], setIndex] = useState([0, 1]);
  const [expandedId, setExpandedId] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]); // ✅ dynamic reviews
  const navigate = useNavigate();

  const holdTimeoutRef = useRef(null);
  const isHoldingRef = useRef(false);

  // ✅ FETCH REVIEWS FROM SUPABASE
  useEffect(() => {
    const fetchReviews = async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setReviews(data);
      }

      setLoading(false);
    };

    fetchReviews();
  }, []);

  // 🔁 Auto slide
  useEffect(() => {
    if (isPaused || reviews.length === 0) return;

    const interval = setInterval(() => {
      setIndex(([prev]) => [(prev + 1) % reviews.length, 1]);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [isPaused, reviews]);

  const toggleReadMore = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
      setIsPaused(false);
    } else {
      setExpandedId(id);
      setIsPaused(true);
    }
  };

  const handleDoubleClick = () => {
    holdTimeoutRef.current = setTimeout(() => {
      isHoldingRef.current = true;
      setIsPaused(true);
    }, 120);
  };

  const handleHoldRelease = () => {
    clearTimeout(holdTimeoutRef.current);
    if (isHoldingRef.current) {
      isHoldingRef.current = false;
      setIsPaused(false);
    }
  };

  // 🛡️ SAFETY GUARD
  if (!loading && reviews.length === 0) {
    return null;
  }

  const item = reviews[index] || {};
  const words = item.review ? item.review.split(" ") : [];
  const shortText = words.slice(0, 40).join(" ");
  const isExpanded = expandedId === item.id;

  return (
    <div className="py-16 bg-[var(--bg-main)] flex justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row">
        {/* LEFT */}
        <div className="w-full md:w-1/3 px-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] opacity-70">
            Testimonials
          </h3>

          <div className="mt-2 mb-6 h-[2px] w-16 bg-[var(--accent-primary)] rounded-full" />

          <h1 className="heading-font text-4xl md:text-5xl leading-tight mb-4">
            What others{" "}
            <span className="text-[var(--accent-primary)]">Say</span>
          </h1>

          <p className="text-sm opacity-80 max-w-sm">
            I’ve worked with some amazing people over the years — here’s what
            they have to say about me.
          </p>

          <LeaveReview />
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-2/3 p-4 overflow-hidden">
          {loading ? (
            <ReviewSkeleton />
          ) : (
            <>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={item.id}
                  layout
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  onDoubleClick={handleDoubleClick}
                  onMouseUp={handleHoldRelease}
                  onMouseLeave={handleHoldRelease}
                  onTouchEnd={handleHoldRelease}
                  transition={{
                    layout: { duration: 0.45, ease: "easeInOut" },
                    x: { type: "spring", stiffness: 120, damping: 20 },
                    opacity: { duration: 0.3 },
                  }}
                  className="border border-[var(--border-light)] bg-[var(--bg-secondary)] rounded-xl overflow-hidden select-none"
                >
                  <div className="flex items-center">
                    <div className="relative m-4 w-[88px] h-[88px] flex items-center justify-center">
                      <svg className="absolute w-full h-full rotate-[-90deg]">
                        <circle
                          cx="44"
                          cy="44"
                          r={RADIUS}
                          fill="none"
                          stroke="var(--bg-main)"
                          strokeWidth="3"
                        />
                        <motion.circle
                          key={index}
                          cx="44"
                          cy="44"
                          r={RADIUS}
                          fill="none"
                          stroke="var(--accent-primary)"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeDasharray={CIRCUMFERENCE}
                          initial={{ strokeDashoffset: CIRCUMFERENCE }}
                          animate={{
                            strokeDashoffset: isPaused ? CIRCUMFERENCE : 0,
                          }}
                          transition={{
                            duration: isPaused ? 0 : SLIDE_DURATION / 1000,
                            ease: "linear",
                          }}
                        />
                      </svg>

                      {item.image_url && item.image_url.startsWith("http") ? (
                        <img
                          src={item.image_url}
                          alt={item.name}
                          className="h-16 w-16 rounded-full object-cover z-10 border border-[var(--border-light)]"
                        />
                      ) : (
                        <div className="h-16 w-16 flex items-center justify-center rounded-full bg-[var(--accent-primary)]/15 border border-[var(--accent-primary)]/30">
                          <User
                            size={26}
                            className="text-[var(--accent-primary)]"
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <h1 className="font-semibold">{item.name}</h1>
                      <p className="text-sm opacity-70">{item.role}</p>
                    </div>
                  </div>

                  <motion.p layout className="p-4 text-justify">
                    {isExpanded ? item.review : shortText}
                    {words.length > 40 && (
                      <span
                        onClick={() => toggleReadMore(item.id)}
                        className="cursor-pointer text-[var(--accent-primary)] font-medium"
                      >
                        {isExpanded ? " read less" : " ...read more"}
                      </span>
                    )}
                  </motion.p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 flex justify-between px-5">
                <button
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/joydeep-paul-06b37926a",
                      "_blank"
                    )
                  }
                  className="flex items-center gap-2 border-b pb-1 text-sm hover:text-[var(--accent-primary)]"
                >
                  Check it out on LinkedIn
                  <ArrowUp className="w-4 h-4 rotate-45" />
                </button>

                <div>
                  <button
                    onClick={() =>
                      setIndex(([prev]) => [
                        prev === 0 ? reviews.length - 1 : prev - 1,
                        -1,
                      ])
                    }
                    className="px-3 py-1 hover:text-[var(--accent-primary)]"
                  >
                    <IoIosArrowBack className="text-2xl" />
                  </button>

                  <button
                    onClick={() =>
                      setIndex(([prev]) => [(prev + 1) % reviews.length, 1])
                    }
                    className="px-3 py-1 hover:text-[var(--accent-primary)]"
                  >
                    <IoIosArrowForward className="text-2xl" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
