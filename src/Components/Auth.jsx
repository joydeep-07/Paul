import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X, ArrowUpRight, KeyRound } from "lucide-react";
import { BsShieldLockFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../slices/authSlice";

const ADMIN_EMAIL = "joydeeprnp8821@gmail.com";
const BACKEND_URL =
  import.meta.env.VITE_BACKEND_API_URL || "http://localhost:5000";

const Auth = ({ className = "" }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // Step 1: Enter Email, Step 2: Enter OTP
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAdminClick = () => {
    const isAdmin = localStorage.getItem("adminAuthenticated") === "true";

    if (isAdmin) {
      navigate("/admin/control");
    } else {
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setEmail("");
    setOtp("");
    setStep(1);
    setError("");
  };

  // Step 1: Request OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError("");

    if (email.trim().toLowerCase() !== ADMIN_EMAIL) {
      setError("Unauthorized email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${BACKEND_URL}/api/auth/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send OTP.");
      }

      setLoading(false);
      setStep(2); // Move to OTP verification view
    } catch (err) {
      setLoading(false);
      setError(err.message || "Network error. Please try again.");
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");

    if (!otp || otp.trim().length !== 6) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${BACKEND_URL}/api/auth/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          otp: otp.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Invalid OTP code.");
      }

      // Redux authentication
      dispatch(
        login({
          email: email.trim().toLowerCase(),
        }),
      );

      // Persist admin authentication
      localStorage.setItem("adminAuthenticated", "true");

      // Immediately update Navbar and Footer
      window.dispatchEvent(new Event("adminAuthChanged"));

      setLoading(false);
      closeModal();
      navigate("/admin/control");
    } catch (err) {
      setLoading(false);
      setError(err.message || "Verification failed. Please try again.");
    }
  };

  return (
    <>
      {/* ADMIN BUTTON */}
      <button
        type="button"
        onClick={handleAdminClick}
        aria-label="Admin Access"
        className={`group cursor-pointer flex items-center justify-center gap-2 rounded-sm border border-[var(--border-light)] px-3 py-2.5 text-[var(--text-main)] transition-all duration-300 hover:opacity-90 ${className}`}
      >
        <BsShieldLockFill size={12} />
        <span className="text-[9px] font-medium uppercase tracking-[0.12em]">
          Admin Control
        </span>
      </button>

      {/* MODAL / DRAWER CONTAINER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-end md:items-center justify-center bg-black/35 px-0 md:px-4 backdrop-blur-[10px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={closeModal}
          >
            <motion.div
              onMouseDown={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: "100%", scale: 1 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: "100%", scale: 1 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-[80vh] md:h-auto md:max-w-5xl overflow-y-auto md:overflow-hidden rounded-t-[24px] md:rounded-none md:border md:border-[var(--border-light)] border-t border-[var(--accent-primary)] bg-[var(--bg-main)] shadow-2xl"
            >
              {/* TOP LINE */}
              <div className="absolute hidden md:flex left-0 top-0 h-px w-full bg-[var(--accent-primary)]/70" />

              {/* CLOSE */}
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close"
                className="group absolute right-5 top-5 z-20 flex h-8 w-8 items-center justify-center cursor-pointer text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--accent-primary)]/40 hover:text-[var(--accent-primary)]"
              >
                <X
                  size={15}
                  className="transition-transform duration-300 group-hover:rotate-90"
                />
              </button>

              <div className="grid md:grid-cols-[0.8fr_1.2fr]">
                {/* LEFT */}
                <div className="relative flex md:min-h-[430px] flex-col justify-between border-b border-[var(--border-light)] p-7 sm:p-9 md:border-b-0 md:border-r">
                  <div>
                    <div className="mb-8 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-light)] text-[var(--accent-primary)]">
                        <BsShieldLockFill size={12} />
                      </span>
                      <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-[var(--text-secondary)]">
                        Restricted Area
                      </span>
                    </div>

                    <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[var(--accent-primary)]">
                      01 / Authentication
                    </p>

                    <h2 className="text-[var(--text-main)] heading-font text-2xl md:text-3xl">
                      Admin
                      <span className="text-[var(--accent-primary)]">
                        {" "}
                        {step === 1 ? "Authentication" : "Verification"}
                      </span>
                    </h2>
                  </div>

                  <div>
                    <div className="mb-5 h-px w-12 bg-[var(--accent-primary)]" />
                    <p className="max-w-[250px] text-xs leading-relaxed text-[var(--text-secondary)]">
                      {step === 1
                        ? "A private space for managing reviews and maintaining the portfolio experience."
                        : `We have dispatched a temporary one-time password to ${email}.`}
                    </p>

                    <div className="mt-8 flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-[var(--text-secondary)]/50">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-primary)]" />
                      Authorized personnel only
                    </div>
                  </div>

                  {/* DECORATIVE NUMBER */}
                  <span className="pointer-events-none absolute bottom-4 right-6 select-none text-7xl font-semibold leading-none text-[var(--text-secondary)]/[0.035]">
                    01
                  </span>
                </div>

                {/* RIGHT */}
                <div className="p-7 sm:p-9 md:p-10">
                  <div className="mb-8 pr-8">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-[var(--text-secondary)]">
                        {step === 1 ? "Secure Login" : "Enter OTP Code"}
                      </p>
                      <ArrowUpRight
                        size={14}
                        className="text-[var(--text-secondary)]/40"
                      />
                    </div>
                    <p className="text-xs leading-relaxed text-[var(--text-secondary)]/70">
                      {step === 1
                        ? "Enter your administrator email to receive an OTP code."
                        : "Check your email inbox for the 6-digit security code."}
                    </p>
                  </div>

                  {step === 1 ? (
                    /* STEP 1 FORM: EMAIL */
                    <form onSubmit={handleSendOtp} className="space-y-6">
                      <div>
                        <label
                          htmlFor="admin-email"
                          className="mb-2 block text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--text-secondary)]"
                        >
                          Email Address
                        </label>
                        <div className="group relative">
                          <Mail
                            size={14}
                            className="absolute left-0 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]/40 transition-colors duration-300 group-focus-within:text-[var(--accent-primary)]"
                          />
                          <input
                            id="admin-email"
                            type="email"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              setError("");
                            }}
                            placeholder="Enter admin email"
                            autoComplete="email"
                            className="w-full border-b border-[var(--border-light)] bg-transparent py-3 pl-7 pr-2 text-sm text-[var(--text-main)] outline-none placeholder:text-[var(--text-secondary)]/30 transition-all duration-300 focus:border-[var(--accent-primary)]"
                          />
                        </div>
                      </div>

                      {/* ERROR */}
                      <AnimatePresence>
                        {error && (
                          <motion.div
                            initial={{ opacity: 1, height: 0, y: -5 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -5 }}
                            className="flex items-center gap-2 overflow-hidden text-[10px] text-red-500"
                          >
                            <span className="h-1 w-1 rounded-full bg-red-500" />
                            {error}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <button
                        type="submit"
                        disabled={loading}
                        className="group relative mt-2 flex w-full items-center justify-between overflow-hidden border border-[var(--accent-primary)] bg-[var(--accent-primary)] px-5 py-3.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:opacity-90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        <span>
                          {loading ? "Sending OTP..." : "Continue with OTP"}
                        </span>
                        {!loading && (
                          <ArrowUpRight
                            size={15}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        )}
                      </button>
                    </form>
                  ) : (
                    /* STEP 2 FORM: OTP */
                    <form onSubmit={handleVerifyOtp} className="space-y-6">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label
                            htmlFor="admin-otp"
                            className="block text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--text-secondary)]"
                          >
                            One-Time Password
                          </label>
                          <button
                            type="button"
                            onClick={() => {
                              setStep(1);
                              setOtp("");
                              setError("");
                            }}
                            className="text-[9px] uppercase tracking-[0.15em] text-[var(--accent-primary)] hover:underline"
                          >
                            Change Email
                          </button>
                        </div>

                        <div className="group relative">
                          <KeyRound
                            size={14}
                            className="absolute left-0 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]/40 transition-colors duration-300 group-focus-within:text-[var(--accent-primary)]"
                          />
                          <input
                            id="admin-otp"
                            type="text"
                            maxLength={6}
                            value={otp}
                            onChange={(e) => {
                              setOtp(e.target.value.replace(/\D/g, ""));
                              setError("");
                            }}
                            placeholder="Enter 6-digit OTP"
                            className="w-full border-b border-[var(--border-light)] bg-transparent py-3 pl-7 pr-2 text-sm tracking-widest font-mono text-[var(--text-main)] outline-none placeholder:text-[var(--text-secondary)]/30 placeholder:font-sans placeholder:tracking-normal transition-all duration-300 focus:border-[var(--accent-primary)]"
                          />
                        </div>
                      </div>

                      {/* ERROR */}
                      <AnimatePresence>
                        {error && (
                          <motion.div
                            initial={{ opacity: 1, height: 0, y: -5 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -5 }}
                            className="flex items-center gap-2 overflow-hidden text-[10px] text-red-500"
                          >
                            <span className="h-1 w-1 rounded-full bg-red-500" />
                            {error}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <button
                        type="submit"
                        disabled={loading}
                        className="group relative mt-2 flex w-full items-center justify-between overflow-hidden border border-[var(--accent-primary)] bg-[var(--accent-primary)] px-5 py-3.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:opacity-90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        <span>
                          {loading ? "Verifying..." : "Verify & Login"}
                        </span>
                        {!loading && (
                          <ArrowUpRight
                            size={15}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        )}
                      </button>
                    </form>
                  )}

                  {/* BOTTOM META */}
                  <div className="mt-8 flex items-center justify-between border-t border-[var(--border-light)] pt-4">
                    <span className="text-[9px] uppercase tracking-[0.15em] text-[var(--text-secondary)]/40">
                      Protected
                    </span>
                    <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.15em] text-[var(--text-secondary)]/40">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-primary)]" />
                      Secure
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Auth;
