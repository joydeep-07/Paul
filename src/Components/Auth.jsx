import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, LockKeyhole, Mail, X, ArrowUpRight } from "lucide-react";
import { BsShieldLockFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ADMIN_EMAIL = "joydeeprnp8821@gmail.com";
const ADMIN_PASSWORD = "123456";

const Auth = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const closeModal = () => {
    setIsOpen(false);
    setEmail("");
    setPassword("");
    setError("");
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    setTimeout(() => {
      if (
        email.trim().toLowerCase() === ADMIN_EMAIL &&
        password === ADMIN_PASSWORD
      ) {
        localStorage.setItem("adminAuthenticated", "true");

        setLoading(false);
        closeModal();
        navigate("/admin/reviews");
      } else {
        setLoading(false);
        setError("Invalid email or password.");
      }
    }, 500);
  };

  return (
    <>
      {/* ADMIN BUTTON */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Admin Access"
        className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-light)] bg-[var(--bg-secondary)]/40 text-[var(--text-secondary)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-primary)]/50 hover:text-[var(--accent-primary)] active:scale-95"
      >
        <BsShieldLockFill
          size={13}
          className="transition-transform duration-300 group-hover:scale-110"
        />

        <span className="pointer-events-none absolute right-0 top-full z-50 mt-2 whitespace-nowrap rounded-md border border-[var(--border-light)] bg-[var(--bg-main)] px-2.5 py-1.5 text-[10px] font-medium text-[var(--text-main)] shadow-lg opacity-0 translate-y-1 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
          Admin Access
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
              initial={{
                opacity: 0,
                y: "100%", // Slide up from bottom on mobile
                scale: 1,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: "100%",
                scale: 1,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
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

                    <h2 className="text-[var(--text-main)] heading-font text-2xl md:text-3xl ">
                      Admin
                      <span className="text-[var(--accent-primary)] ">
                        {" "}
                        Authentication
                      </span>
                    </h2>
                  </div>

                  <div>
                    <div className="mb-5 h-px w-12 bg-[var(--accent-primary)]" />

                    <p className="max-w-[250px] text-xs leading-relaxed text-[var(--text-secondary)]">
                      A private space for managing reviews and maintaining the
                      portfolio experience.
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
                        Secure Login
                      </p>

                      <ArrowUpRight
                        size={14}
                        className="text-[var(--text-secondary)]/40"
                      />
                    </div>

                    <p className="text-xs leading-relaxed text-[var(--text-secondary)]/70">
                      Enter your administrator credentials to continue.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* EMAIL */}
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

                    {/* PASSWORD */}
                    <div>
                      <label
                        htmlFor="admin-password"
                        className="mb-2 block text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--text-secondary)]"
                      >
                        Password
                      </label>

                      <div className="group relative">
                        <LockKeyhole
                          size={14}
                          className="absolute left-0 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]/40 transition-colors duration-300 group-focus-within:text-[var(--accent-primary)]"
                        />

                        <input
                          id="admin-password"
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                            setError("");
                          }}
                          placeholder="Enter password"
                          autoComplete="current-password"
                          className="w-full border-b border-[var(--border-light)] bg-transparent py-3 pl-7 pr-10 text-sm text-[var(--text-main)] outline-none placeholder:text-[var(--text-secondary)]/30 transition-all duration-300 focus:border-[var(--accent-primary)]"
                        />

                        <button
                          type="button"
                          onClick={() => setShowPassword((prev) => !prev)}
                          aria-label={
                            showPassword ? "Hide password" : "Show password"
                          }
                          className="absolute right-0 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]/40 transition-colors hover:text-[var(--accent-primary)]"
                        >
                          {showPassword ? (
                            <EyeOff size={15} />
                          ) : (
                            <Eye size={15} />
                          )}
                        </button>
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

                    {/* SUBMIT */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative mt-2 flex w-full items-center justify-between overflow-hidden border border-[var(--accent-primary)] bg-[var(--accent-primary)] px-5 py-3.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:opacity-90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      <span>
                        {loading ? "Authenticating..." : "Enter Admin Panel"}
                      </span>

                      {!loading && (
                        <ArrowUpRight
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      )}
                    </button>
                  </form>

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
