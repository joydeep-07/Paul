import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { toast } from "sonner";
import { CircularProgress, IconButton } from "@mui/material";
import { Trash2, Mail, User, Calendar, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import DeleteModal from "../Components/DeleteModal";
import Footer from '../layout/Footer'

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
      if (expandedMessage === id) setExpandedMessage(null);
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
      <section className="w-full bg-[var(--bg-main)] flex justify-center py-24 md:py-30">
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

          {/* CONTENT */}
          {loading ? (
            <div className="min-h-[300px] flex items-center justify-center">
              <CircularProgress
                size={24}
                sx={{ color: "var(--accent-primary)" }}
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
            </div>
          ) : (
            <div className="border-t border-[var(--border-light)]">
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
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                        className="group relative border-b border-[var(--border-light)] transition-colors duration-300 hover:bg-[color-mix(in_srgb,var(--accent-primary)_3%,transparent)] overflow-hidden"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 items-center">
                          {/* NAME + MOBILE DELETE */}
                          <div className="md:col-span-2 flex items-center justify-between">
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

                            {/* Mobile-only delete */}
                            <div className="md:hidden">
                              <IconButton
                                onClick={() => setDeleteMessageId(msg.id)}
                                size="small"
                                sx={{
                                  color: "var(--text-secondary)",
                                  "&:hover": {
                                    color: "#ef4444",
                                    backgroundColor: "rgba(239, 68, 68, 0.08)",
                                  },
                                }}
                              >
                                <Trash2 size={15} />
                              </IconButton>
                            </div>
                          </div>

                          {/* EMAIL */}
                          <div className="md:col-span-3 flex items-center gap-2">
                            <Mail
                              size={13}
                              className="shrink-0 text-[var(--text-secondary)]"
                            />
                            <a
                              href={`mailto:${msg.email}`}
                              className="text-xs sm:text-sm text-[var(--text-secondary)] truncate hover:text-[var(--accent-primary)] transition-colors"
                            >
                              {msg.email}
                            </a>
                          </div>

                          {/* MESSAGE ACCORDION */}
                          <div className="md:col-span-4 w-full">
                            <button
                              type="button"
                              onClick={() => toggleMessage(msg.id)}
                              className="w-full text-left cursor-pointer group/message"
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex-1 min-w-0">
                                  <motion.div
                                    animate={{
                                      height: isExpanded ? "auto" : "1.5rem",
                                    }}
                                    transition={{
                                      duration: 0.3,
                                      ease: [0.04, 0.62, 0.23, 0.98],
                                    }}
                                    className="overflow-hidden flex-1"
                                  >
                                    <p className="text-xs sm:text-sm text-justify text-[var(--text-secondary)] leading-[1.7]">
                                      {msg.message}
                                    </p>
                                  </motion.div>
                                </div>
                                <motion.div
                                  animate={{ rotate: isExpanded ? 180 : 0 }}
                                  className="shrink-0 mt-1"
                                >
                                  <ChevronDown
                                    size={14}
                                    className="text-[var(--text-secondary)] group-hover/message:text-[var(--accent-primary)]"
                                  />
                                </motion.div>
                              </div>
                            </button>
                          </div>

                          {/* DATE & DESKTOP DELETE */}
                          <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-4">
                            <div className="flex items-center gap-2">
                              <Calendar
                                size={12}
                                className="shrink-0 text-[var(--text-secondary)]"
                              />
                              <span className="text-[10px] sm:text-xs text-[var(--text-secondary)]">
                                {msg.created_at
                                  ? new Date(msg.created_at).toLocaleDateString(
                                      "en-IN",
                                    )
                                  : "N/A"}
                              </span>
                            </div>

                            {/* Desktop-only delete */}
                            <div className="hidden md:flex">
                              <IconButton
                                onClick={() => setDeleteMessageId(msg.id)}
                                size="small"
                                sx={{
                                  color: "var(--text-secondary)",
                                  transition: "all 0.2s",
                                  "&:hover": {
                                    color: "#ef4444",
                                    backgroundColor: "rgba(239, 68, 68, 0.08)",
                                  },
                                }}
                              >
                                <Trash2 size={15} />
                              </IconButton>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* DELETE MODAL */}

      {deleteMessageId && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/40 backdrop-blur-[2px]"
          onClick={() => setDeleteMessageId(null)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <DeleteModal
              onCancel={() => setDeleteMessageId(null)}
              onConfirm={() => handleDelete(deleteMessageId)}
            />
          </div>
        </div>
      )}
      <Footer/>
    </>
  );
};

export default AdminMessages;
