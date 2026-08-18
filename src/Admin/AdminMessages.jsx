import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { toast } from "sonner";
import { CircularProgress, IconButton } from "@mui/material";
import {
  Trash2,
  Mail,
  User,
  Calendar,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import DeleteModal from "../Components/DeleteModal";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedMessage, setExpandedMessage] = useState(null);

  // Delete modal state
  const [deleteMessageId, setDeleteMessageId] = useState(null);

  const fetchMessages = async () => {
    try {
      setLoading(true);

      const { data, error } = await supabase
        .from("Contacts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setMessages(data || []);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load messages");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from("Contacts").delete().eq("id", id);

      if (error) throw error;

      setMessages((prev) => prev.filter((msg) => msg.id !== id));

      if (expandedMessage === id) {
        setExpandedMessage(null);
      }

      setDeleteMessageId(null);

      toast.success("Message deleted successfully");
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete message");
    }
  };

  const toggleMessage = (id) => {
    setExpandedMessage((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <section className="w-full min-h-screen bg-[var(--bg-main)] flex justify-center py-24 md:py-30">
        <div className="w-full max-w-8xl px-4 md:px-12">
          {/* HEADER */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)]">
                  Admin Dashboard
                </span>

                <span className="h-px w-12 bg-[var(--accent-primary)]" />
              </div>

              <h1 className="heading-font text-3xl sm:text-4xl text-[var(--text-main)]">
                Inbox{" "}
                <span className="text-[var(--accent-primary)]">messages</span>
              </h1>

              <p className="mt-4 max-w-md text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Messages submitted through your contact form, organized in one
                place for quick review and management.
              </p>
            </div>

            <div className="lg:col-span-5 hidden md:flex flex-col lg:border-l lg:border-[var(--border-light)] lg:pl-10">
              <h2 className="heading-font text-2xl sm:text-3xl text-[var(--text-main)]">
                Quick <span className="text-[var(--accent-primary)]">info</span>
              </h2>

              <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                A simple overview of incoming messages and available actions.
              </p>

              <div className="flex items-center gap-8 mt-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                    Messages
                  </p>

                  <p className="heading-font mt-1 text-2xl text-[var(--text-main)]">
                    {messages.length}
                  </p>
                </div>

                <div className="h-8 w-px bg-[var(--border-light)]" />

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                    Status
                  </p>

                  <p className="mt-1 text-xs font-medium text-[var(--accent-primary)]">
                    {loading ? "Loading" : "Active"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE QUICK INFO */}
          <div className="md:hidden mb-10 pb-8 border-b border-[var(--border-light)]">
            <div className="flex items-center gap-3 mb-4">
              <Mail size={15} className="text-[var(--accent-primary)]" />

              <h2 className="heading-font text-xl text-[var(--text-main)]">
                Quick <span className="text-[var(--accent-primary)]">info</span>
              </h2>
            </div>

            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              {messages.length} message
              {messages.length !== 1 ? "s" : ""} currently available in your
              inbox.
            </p>
          </div>

          {/* CONTENT */}
          {loading ? (
            <div className="min-h-[300px] flex items-center justify-center">
              <CircularProgress
                size={24}
                sx={{
                  color: "var(--accent-primary)",
                }}
              />
            </div>
          ) : messages.length === 0 ? (
            <div className="border border-dashed border-[var(--border-light)] rounded-sm py-16 px-6 text-center">
              <Mail
                size={34}
                strokeWidth={1.5}
                className="mx-auto mb-4 text-[var(--text-secondary)] opacity-40"
              />

              <h3 className="heading-font text-lg text-[var(--text-main)]">
                No messages found
              </h3>

              <p className="max-w-sm mx-auto mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                When visitors submit the contact form, their messages will
                appear here.
              </p>
            </div>
          ) : (
            <div className="border-t border-[var(--border-light)]">
              {/* DESKTOP HEADER */}
              <div className="hidden md:grid grid-cols-12 gap-6 py-4 border-b border-[var(--border-light)]">
                <div className="col-span-2">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                    Name
                  </span>
                </div>

                <div className="col-span-3">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                    Email
                  </span>
                </div>

                <div className="col-span-4">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                    Message
                  </span>
                </div>

                <div className="col-span-2">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                    Date
                  </span>
                </div>

                <div className="col-span-1 text-right">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                    #
                  </span>
                </div>
              </div>

              {/* MESSAGES LIST CONTAINER WITH LAYOUT ANIMATION */}
              <motion.div layout className="flex flex-col">
                <AnimatePresence initial={false}>
                  {messages.map((msg) => {
                    const isExpanded = expandedMessage === msg.id;

                    return (
                      <motion.div
                        key={msg.id}
                        layout
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{
                          opacity: 0,
                          scale: 0.98,
                          transition: { duration: 0.2 },
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                        className="group relative border-b border-[var(--border-light)] transition-colors duration-300 hover:bg-[color-mix(in_srgb,var(--accent-primary)_3%,transparent)] overflow-hidden"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 py-6">
                          {/* NAME + MOBILE DELETE */}
                          <div className="md:col-span-2">
                            <div className="flex items-center justify-between md:justify-start gap-2">
                              <div className="flex items-center gap-2 min-w-0">
                                <User
                                  size={14}
                                  strokeWidth={1.7}
                                  className="shrink-0 text-[var(--accent-primary)]"
                                />

                                <span className="text-sm font-medium text-[var(--text-main)] truncate">
                                  {msg.name}
                                </span>
                              </div>

                              {/* MOBILE DELETE */}
                              <div className="md:hidden shrink-0">
                                <IconButton
                                  onClick={() => setDeleteMessageId(msg.id)}
                                  size="small"
                                  aria-label="delete message"
                                  sx={{
                                    width: 30,
                                    height: 30,
                                    color: "var(--text-secondary)",
                                    "&:hover": {
                                      color: "#ef4444",
                                      backgroundColor:
                                        "rgba(239, 68, 68, 0.08)",
                                    },
                                  }}
                                >
                                  <Trash2 size={15} strokeWidth={1.7} />
                                </IconButton>
                              </div>
                            </div>
                          </div>

                          {/* EMAIL */}
                          <div className="md:col-span-3">
                            <div className="flex items-center gap-2">
                              <Mail
                                size={13}
                                strokeWidth={1.7}
                                className="shrink-0 text-[var(--text-secondary)]"
                              />

                              <a
                                href={`mailto:${msg.email}`}
                                className="text-xs sm:text-sm text-[var(--text-secondary)] truncate transition-colors hover:text-[var(--accent-primary)]"
                              >
                                {msg.email}
                              </a>
                            </div>
                          </div>

                          {/* MESSAGE ACCORDION */}
                          <div className="md:col-span-4">
                            <button
                              type="button"
                              onClick={() => toggleMessage(msg.id)}
                              className="w-full text-left flex items-start gap-3 cursor-pointer group/message"
                            >
                              <div className="flex-1 min-w-0">
                                <motion.div
                                  layout
                                  transition={{
                                    duration: 0.3,
                                    ease: [0.04, 0.62, 0.23, 0.98],
                                  }}
                                  className="text-xs sm:text-sm text-[var(--text-secondary)] leading-[1.7] overflow-hidden"
                                >
                                  {isExpanded ? (
                                    <motion.p
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      transition={{
                                        duration: 0.2,
                                        delay: 0.05,
                                      }}
                                    >
                                      {msg.message}
                                    </motion.p>
                                  ) : (
                                    <motion.p
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      transition={{
                                        duration: 0.2,
                                        delay: 0.05,
                                      }}
                                    >
                                      {msg.message.length > 100
                                        ? `${msg.message.slice(0, 100)}...`
                                        : msg.message}
                                    </motion.p>
                                  )}
                                </motion.div>
                              </div>

                              <motion.div
                                animate={{
                                  rotate: isExpanded ? 180 : 0,
                                }}
                                transition={{
                                  duration: 0.3,
                                  ease: [0.04, 0.62, 0.23, 0.98],
                                }}
                                className="shrink-0 mt-1"
                              >
                                <ChevronDown
                                  size={14}
                                  strokeWidth={1.7}
                                  className="text-[var(--text-secondary)] group-hover/message:text-[var(--accent-primary)]"
                                />
                              </motion.div>
                            </button>

                            {/* MOBILE READ MORE */}
                            {msg.message.length > 100 && (
                              <button
                                type="button"
                                onClick={() => toggleMessage(msg.id)}
                                className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[var(--accent-primary)] cursor-pointer md:hidden"
                              >
                                {isExpanded ? "Show less" : "Read more"}
                              </button>
                            )}
                          </div>

                          {/* DATE */}
                          <div className="md:col-span-2">
                            <div className="flex items-center gap-2">
                              <Calendar
                                size={12}
                                strokeWidth={1.7}
                                className="shrink-0 text-[var(--text-secondary)]"
                              />

                              <span className="text-[10px] sm:text-xs text-[var(--text-secondary)]">
                                {msg.created_at
                                  ? new Date(msg.created_at).toLocaleDateString(
                                      "en-IN",
                                      {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                      },
                                    )
                                  : "N/A"}
                              </span>
                            </div>
                          </div>

                          {/* DESKTOP DELETE */}
                          <div className="hidden md:flex md:col-span-1 justify-end">
                            <IconButton
                              onClick={() => setDeleteMessageId(msg.id)}
                              size="small"
                              aria-label="delete message"
                              sx={{
                                width: 30,
                                height: 30,
                                color: "var(--text-secondary)",
                                transition: "all 0.25s ease",
                                "&:hover": {
                                  color: "#ef4444",
                                  backgroundColor: "rgba(239, 68, 68, 0.08)",
                                },
                              }}
                            >
                              <Trash2 size={15} strokeWidth={1.7} />
                            </IconButton>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            </div>
          )}

          {/* FOOTER INFO */}
          {!loading && messages.length > 0 && (
            <div className="flex items-center justify-between pt-5">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                Contact inbox
              </span>

              <div className="flex items-center gap-2 text-[10px] text-[var(--text-secondary)]">
                <span>Latest messages first</span>
                <ArrowUpRight size={12} />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* DELETE MODAL */}
      <AnimatePresence>
        {deleteMessageId && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/40 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDeleteMessageId(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <DeleteModal
                onCancel={() => setDeleteMessageId(null)}
                onConfirm={() => handleDelete(deleteMessageId)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdminMessages;
