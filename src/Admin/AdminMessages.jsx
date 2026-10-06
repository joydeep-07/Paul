import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { toast } from "sonner";
import { CircularProgress, IconButton } from "@mui/material";
import { Trash2, Mail, User, Calendar, ChevronDown, Clock } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import DeleteModal from "../Components/DeleteModal";
import Footer from "../layout/Footer";

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
      <section className="w-full bg-[var(--bg-main)] flex justify-center relative">
        <div className=" w-full">
          {/* HEADERS */}

          {/* CONTENT */}
          {loading ? (
            <div className="min-h-[300px] flex items-center justify-center">
              <CircularProgress
                size={24}
                sx={{ color: "var(--accent-primary)" }}
              />
            </div>
          ) : messages.length === 0 ? (
            <div className="border border-[var(--border-light)]/50 bg-[var(--bg-secondary)]/50 rounded-lg p-6 text-center text-sm text-[var(--text-secondary)]">
              No messages found.
            </div>
          ) : (
            <motion.div layout className="space-y-4">
              <AnimatePresence initial={false}>
                {messages.map((msg) => {
                  const isOpen = expandedMessage === msg.id;

                  return (
                    <motion.div
                      key={msg.id}
                      layout
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="border-b border-t border-[var(--border-light)] rounded-xs overflow-hidden transition-colors"
                    >
                      {/* ACCORDION HEADER */}
                      <div
                        onClick={() => toggleMessage(msg.id)}
                        className="flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-[var(--accent-primary)]/5"
                      >
                        <div className="flex items-center gap-4 overflow-hidden pr-2">
                          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[var(--accent-primary)]/15 border border-[var(--accent-primary)]/30 flex-shrink-0">
                            <User
                              size={20}
                              className="text-[var(--accent-primary)]"
                            />
                          </div>

                          <div className="overflow-hidden">
                            <h2 className="font-semibold text-base sm:text-lg text-[var(--text-main)] truncate">
                              {msg.name}
                            </h2>
                            <a
                              href={`mailto:${msg.email}`}
                              onClick={(e) => e.stopPropagation()}
                              className="text-xs sm:text-sm text-[var(--text-secondary)] truncate opacity-80 hover:text-[var(--accent-primary)] transition-colors block"
                            >
                              {msg.email}
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 flex-shrink-0">
                          {/* Replaced Calendar with Clock and showing time instead of date on laptop/desktop view */}
                          <span className="text-[10px] sm:text-xs text-[var(--text-secondary)] hidden sm:flex items-center gap-1.5 mr-2">
                            {msg.created_at
                              ? new Date(msg.created_at).toLocaleTimeString(
                                  [],
                                  {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  },
                                )
                              : "N/A"}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setDeleteMessageId(msg.id);
                            }}
                            className="flex items-center gap-1.5 px-3 py-1.5 text-red-700 cursor-pointer transition-colors"
                            title="Delete Message"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>

                      {/* ACCORDION CONTENT */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden border-t border-[var(--border-light)]/40 bg-[var(--bg-main)]/30"
                          >
                            <div className="p-4 sm:p-6">
                              <p className="text-sm text-justify text-[var(--text-main)] leading-relaxed">
                                {msg.message}
                              </p>
                              {msg.created_at && (
                                <div className="mt-4 pt-3 border-t border-[var(--border-light)]/20 text-[10px] text-[var(--text-secondary)] uppercase tracking-wider flex justify-between items-center">
                                  <span>
                                    Received on:{" "}
                                    {new Date(
                                      msg.created_at,
                                    ).toLocaleDateString("en-IN")}
                                  </span>
                                  <span className="sm:hidden">
                                    {new Date(
                                      msg.created_at,
                                    ).toLocaleTimeString([], {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    })}
                                  </span>
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

          {/* FOOTER TOTAL COUNT */}
          <div className="mt-6 flex justify-between items-center px-1">
            <div className="text-xs text-[var(--text-secondary)]/70 ml-auto">
              Total Messages:{" "}
              <span className="font-medium text-[var(--text-main)]">
                {messages.length}
              </span>
            </div>
          </div>
        </div>

        {/* DELETE MODAL OVERLAY */}
        {deleteMessageId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
            <DeleteModal
              onCancel={() => setDeleteMessageId(null)}
              onConfirm={() => handleDelete(deleteMessageId)}
            />
          </div>
        )}
      </section>
    </>
  );
};

export default AdminMessages;
