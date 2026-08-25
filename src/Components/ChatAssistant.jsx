import React, { useEffect, useRef, useState } from "react";
import { Bot, Send, User, Sparkles, X, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const API_URL =
  import.meta.env.VITE_BACKEND_API_URL ||
  "https://paulhere-backend.onrender.com";

const ChatAssistant = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      text: "Hello! How can I help you today?",
      time: "10:30 AM",
    },
  ]);

  const chatRef = useRef(null);
  const panelRef = useRef(null);
  const backdropRef = useRef(null);
  const triggerBtnRef = useRef(null);

  // Scroll to bottom when messages update
  const scrollToBottom = () => {
    if (!chatRef.current) return;
    chatRef.current.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (messages.length > 1) {
      scrollToBottom();
    }
  }, [messages.length]);

  // Lock body scroll when chat is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // GSAP Animations setup
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isOpen) {
        // OPEN ANIMATION
        gsap.to(triggerBtnRef.current, {
          scale: 0,
          opacity: 0,
          duration: 0.25,
          ease: "power2.in",
          pointerEvents: "none",
        });

        gsap.to(backdropRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
          pointerEvents: "auto",
        });

        gsap.fromTo(
          panelRef.current,
          {
            opacity: 0,
            scale: 0.85,
            y: 30,
            transformOrigin: "bottom right",
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: "back.out(1.2)",
            pointerEvents: "auto",
          },
        );
      } else {
        // CLOSE ANIMATION
        gsap.to(triggerBtnRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "back.out(1.5)",
          pointerEvents: "auto",
        });

        gsap.to(backdropRef.current, {
          opacity: 0,
          duration: 0.25,
          ease: "power2.in",
          pointerEvents: "none",
        });

        gsap.to(panelRef.current, {
          opacity: 0,
          scale: 0.85,
          y: 20,
          duration: 0.25,
          ease: "power2.in",
          pointerEvents: "none",
        });
      }
    });

    return () => ctx.revert();
  }, [isOpen]);

  const getTime = () => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  const sendMessage = async () => {
    const text = message.trim();
    if (!text || loading) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      text,
      time: getTime(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);

    try {
      const endpoint = `${API_URL.replace(/\/$/, "")}/api/chat`;

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const contentType = response.headers.get("content-type");
      let data = {};

      if (contentType?.includes("application/json")) {
        data = await response.json();
      } else {
        const responseText = await response.text();
        throw new Error(
          `Server returned ${response.status}: ${
            responseText || "Empty response"
          }`,
        );
      }

      if (!response.ok) {
        throw new Error(
          data.message || data.error || `Server returned ${response.status}`,
        );
      }

      const aiText =
        data.reply ||
        data.message ||
        data.response ||
        "I couldn't generate a response.";

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: "ai",
          text: aiText,
          time: getTime(),
        },
      ]);
    } catch (error) {
      console.error("Chat API Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: "ai",
          text:
            error.message ||
            "Sorry, I couldn't connect to the AI server. Please try again.",
          time: getTime(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Open Button */}
      <button
        ref={triggerBtnRef}
        onClick={() => setIsOpen(true)}
        type="button"
        aria-label="Open Chat"
        className="
          fixed bottom-5 right-5 z-50
          flex h-14 w-14 items-center justify-center
          rounded-full bg-[var(--accent-primary)] text-white
          shadow-lg shadow-[var(--accent-primary)]/30
          transition-shadow duration-300
          hover:shadow-xl active:scale-95
          md:bottom-8 md:right-8
        "
      >
        <MessageCircle size={24} />
      </button>

      {/* Backdrop (mobile) */}
      <div
        ref={backdropRef}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm opacity-0 pointer-events-none md:bg-transparent md:backdrop-blur-none"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Chat Container */}
      <div
        ref={panelRef}
        className="
          fixed z-50 flex flex-col overflow-hidden opacity-0 pointer-events-none
          bg-[var(--bg-secondary)]/95 backdrop-blur-xl
          shadow-2xl

          inset-0 rounded-none

          md:inset-auto md:bottom-8 md:right-8
          md:h-[560px] md:w-3xl
          md:rounded-2xl md:border md:border-[var(--border-light)]/70
        "
      >
        {/* HEADER */}
        <header
          className="
            mt-20 md:mt-0
            flex shrink-0 items-center justify-between
            border-b border-[var(--border-light)]/40 px-4 py-3
            bg-[var(--bg-main)]/50 backdrop-blur-md
            sm:px-6 sm:py-4
          "
        >
          <div className="flex items-center gap-3">
            <div>
              <h2 className="heading-font text-sm tracking-tight sm:text-base">
                <span className="text-[var(--accent-primary)]">Paul's</span>{" "}
                Assistant
              </h2>

              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span
                    className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      loading
                        ? "animate-ping bg-amber-400"
                        : "animate-pulse bg-[var(--accent-primary)]"
                    }`}
                  />
                  <span
                    className={`relative inline-flex h-2 w-2 rounded-full ${
                      loading ? "bg-amber-500" : "bg-[var(--accent-primary)]"
                    }`}
                  />
                </span>
                <span className="text-[11px] font-medium text-[var(--text-secondary)]/70">
                  {loading ? "Thinking..." : "Online"}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={handleClose}
            type="button"
            aria-label="Close Chat"
            className="
              flex h-9 w-9 items-center justify-center rounded-full
              border border-[var(--border-light)]/50 bg-[var(--bg-main)]/60
              text-[var(--text-secondary)] transition-all duration-200
              hover:border-[var(--accent-primary)]/40 hover:bg-[var(--accent-primary)]/10
              hover:text-[var(--accent-primary)] active:scale-95
            "
          >
            <X size={16} />
          </button>
        </header>

        {/* MESSAGE AREA */}
        <div
          ref={chatRef}
          data-lenis-prevent
          className="
            min-h-0 flex-1 overflow-y-auto overscroll-contain touch-pan-y
            px-4 py-4 scrollbar-thin scrollbar-thumb-[var(--border-light)]
            sm:px-6
          "
        >
          <div className="space-y-4 pb-2">
            <div className="my-2 flex justify-center">
              <span
                className="
                  rounded-full border border-[var(--border-light)]/40
                  bg-[var(--bg-main)]/80 px-3.5 py-0.5
                  text-[9px] font-medium uppercase tracking-[0.2em]
                  text-[var(--text-secondary)] opacity-70 shadow-sm
                "
              >
                Today
              </span>
            </div>

            {messages.map((item) => {
              const isUser = item.type === "user";

              return (
                <div
                  key={item.id}
                  className={`flex items-end gap-2 ${
                    isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  {!isUser && (
                    <div
                      className="
                        mb-1 flex h-7 w-7 shrink-0 items-center justify-center
                        rounded-full border border-[var(--border-light)]
                        bg-[var(--bg-main)] shadow-sm
                      "
                    >
                      <h2 className="text-xs text-[var(--text-secondary)]/50">
                        AI
                      </h2>
                    </div>
                  )}

                  <div
                    className={`
                      group relative max-w-[85%] px-3.5 py-2.5 text-xs leading-relaxed shadow-sm
                      transition-all duration-200 hover:shadow-md sm:max-w-[75%] sm:px-4 sm:py-3
                      ${
                        isUser
                          ? "rounded-2xl rounded-br-xs bg-[var(--accent-primary)] text-white"
                          : "rounded-2xl rounded-bl-xs border border-[var(--border-light)]/70 bg-[var(--bg-main)] text-[var(--text-main)]"
                      }
                    `}
                  >
                    <p className="whitespace-pre-wrap break-words">
                      {item.text}
                    </p>
                  </div>

                  {isUser && (
                    <div
                      className="
                        mb-1 flex h-7 w-7 shrink-0 items-center justify-center
                        rounded-full border border-[var(--border-light)]
                        bg-[var(--bg-main)] shadow-sm
                      "
                    >
                      <User
                        size={13}
                        className="text-[var(--text-secondary)]"
                      />
                    </div>
                  )}
                </div>
              );
            })}

            {loading && (
              <div className="flex items-center gap-2.5">
                <div
                  className="
                    flex h-7 w-7 shrink-0 items-center justify-center
                    rounded-full border border-[var(--border-light)]
                    bg-[var(--bg-secondary)] shadow-sm
                  "
                >
                  <span className="text-[9px] font-medium tracking-wider text-[var(--text-secondary)]/60">
                    AI
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-[var(--text-secondary)]/60">
                    Thinking
                  </span>

                  <div className="flex items-center gap-1">
                    <span className="h-1 w-1 animate-bounce rounded-full bg-[var(--accent-primary)]/60" />
                    <span
                      className="h-1 w-1 animate-bounce rounded-full bg-[var(--accent-primary)]/60"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="h-1 w-1 animate-bounce rounded-full bg-[var(--accent-primary)]/60"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* INPUT AREA */}
        <div className="shrink-0 border-t border-[var(--border-light)]/40 p-3 backdrop-blur-md sm:p-4">
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 sm:gap-3"
          >
            <div
              className="
                flex flex-1 items-center rounded-xl border border-[var(--border-light)]
                bg-[var(--bg-main)] px-3 py-2.5 shadow-inner transition-all duration-200
                focus-within:border-[var(--accent-primary)]/40 sm:rounded-sm sm:px-4 sm:py-3
              "
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
                placeholder={
                  loading ? "AI is processing..." : "Ask me anything..."
                }
                className="
                  w-full bg-transparent text-sm text-[var(--text-main)] outline-none
                  placeholder:text-[var(--text-secondary)] placeholder:opacity-50
                  disabled:cursor-not-allowed disabled:opacity-50 sm:text-xs
                "
              />
            </div>

            <button
              type="submit"
              disabled={loading || !message.trim()}
              className="
                flex h-11 w-11 shrink-0 items-center justify-center gap-2 rounded-xl
                bg-[var(--accent-primary)] text-white text-xs font-medium shadow-md
                transition-all duration-200 hover:scale-[1.02] active:scale-95
                disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100 disabled:shadow-none
                sm:h-10 sm:w-auto sm:rounded-sm sm:px-5
              "
            >
              <span className="hidden sm:inline">Send</span>
              <Send size={16} className="sm:size-[13px]" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatAssistant;
