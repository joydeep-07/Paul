import React, { useEffect, useRef, useState } from "react";

import {
  Send,
  User,
  X,
  MessageCircle,
  Copy,
  Check,
  Volume2,
  VolumeX,
  RotateCcw,
  Paperclip,
  Mic,
  Circle,
  ArrowUp,
} from "lucide-react";

import gsap from "gsap";
import ReactMarkdown from "react-markdown";

const API_URL =
  import.meta.env.VITE_BACKEND_API_URL ||
  "https://paulhere-backend.onrender.com";

/* =========================================================
   SHUFFLE ARRAY
========================================================= */

const shuffleArray = (array) => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

/* =========================================================
   BASIC FOLLOW-UP QUESTIONS
========================================================= */

const BASIC_FOLLOW_UPS = [
  "Who is Joydeep?",
  "How can I download the resume?",
  "What technology does Joydeep use?",
  "What projects has Joydeep built?",
  "What is Joydeep's experience?",
  "How can I contact Joydeep?",
  "What does Joydeep specialize in?",
  "What is Joydeep's GitHub profile?",
  "What is Joydeep's portfolio?",
  "What is Joydeep currently studying?",
  "Where is Joydeep located?",
  "Is Joydeep available for work?",
];

/* =========================================================
   GENERATE BASIC FOLLOW-UPS
========================================================= */

const generateDynamicFollowUps = () => {
  return shuffleArray(BASIC_FOLLOW_UPS).slice(0, 3);
};

/* =========================================================
   TYPEWRITER COMPONENT
========================================================= */

const TypewriterText = ({ text, onComplete }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const elements = containerRef.current.querySelectorAll(".type-char");

      gsap.set(elements, {
        opacity: 0,
        display: "inline",
      });

      gsap.to(elements, {
        opacity: 1,
        duration: 0.01,
        stagger: 0.012,
        ease: "none",
        onComplete: () => {
          onComplete?.();
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [text, onComplete]);

  const renderTypingContent = (content) => {
    return (
      <ReactMarkdown
        components={{
          p: ({ children }) => (
            <p className="mb-2 leading-relaxed last:mb-0">{children}</p>
          ),

          strong: ({ children }) => (
            <strong className="font-semibold text-[var(--text-main)]">
              {children}
            </strong>
          ),

          em: ({ children }) => <em className="italic">{children}</em>,

          ul: ({ children }) => (
            <ul className="my-2 list-disc space-y-1 pl-5">{children}</ul>
          ),

          ol: ({ children }) => (
            <ol className="my-2 list-decimal space-y-1 pl-5">{children}</ol>
          ),

          li: ({ children }) => <li className="pl-1">{children}</li>,

          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-primary)] underline underline-offset-2 hover:opacity-80"
            >
              {children}
            </a>
          ),

          code: ({ inline, children }) =>
            inline ? (
              <code className="rounded bg-black/10 px-1.5 py-0.5 font-mono text-xs dark:bg-white/10">
                {children}
              </code>
            ) : (
              <code className="block overflow-x-auto rounded-lg border border-[var(--border-light)] bg-black/5 p-3 font-mono text-xs dark:bg-white/5">
                {children}
              </code>
            ),

          text: ({ value }) => {
            return value.split("").map((char, index) => (
              <span
                key={index}
                className="type-char inline-block whitespace-pre"
              >
                {char}
              </span>
            ));
          },
        }}
      >
        {content}
      </ReactMarkdown>
    );
  };

  return <div ref={containerRef}>{renderTypingContent(text)}</div>;
};

/* =========================================================
   CHAT ASSISTANT
========================================================= */

const ChatAssistant = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [speakingId, setSpeakingId] = useState(null);
  const [followUps, setFollowUps] = useState([]);
  const [messages, setMessages] = useState([]);

  const chatRef = useRef(null);
  const panelRef = useRef(null);
  const backdropRef = useRef(null);
  const triggerBtnRef = useRef(null);
  const textareaRef = useRef(null);

  /* =========================================================
     INITIAL PROMPTS
  ========================================================= */

  const initialPrompts = [
    {
      title: "About Me",
      subtitle: "Who are you?",
      prompt: "Tell me about yourself.",
    },
    {
      title: "Skills & Expertise",
      subtitle: "View your core skills",
      prompt: "What are your core technical skills and expertise?",
    },
    {
      title: "Work Experience",
      subtitle: "See past experience",
      prompt: "Can you share your work experience?",
    },
    {
      title: "Projects",
      subtitle: "Explore notable projects",
      prompt: "What notable projects have you built?",
    },
    {
      title: "Contact & Collaboration",
      subtitle: "How can we work together?",
      prompt: "How can I contact you or collaborate with you?",
    },
  ];

  /* =========================================================
     SCROLL TO BOTTOM
  ========================================================= */

  const scrollToBottom = () => {
    if (!chatRef.current) return;

    chatRef.current.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  /* =========================================================
     AUTO SCROLL
  ========================================================= */

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages.length, loading]);

  /* =========================================================
     BODY SCROLL LOCK
  ========================================================= */

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    if (isOpen) {
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 100);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* =========================================================
     GLOBAL KEYBOARD TYPING
  ========================================================= */

  useEffect(() => {
    const handleGlobalTyping = (e) => {
      if (!isOpen) return;

      if (
        e.ctrlKey ||
        e.altKey ||
        e.metaKey ||
        e.key === "Escape" ||
        e.key === "Tab"
      ) {
        return;
      }

      const activeElement = document.activeElement;

      const isInputFocused =
        activeElement?.tagName === "INPUT" ||
        activeElement?.tagName === "TEXTAREA" ||
        activeElement?.isContentEditable;

      if (!isInputFocused && textareaRef.current) {
        textareaRef.current.focus();
      }
    };

    window.addEventListener("keydown", handleGlobalTyping);

    return () => {
      window.removeEventListener("keydown", handleGlobalTyping);
    };
  }, [isOpen]);

  /* =========================================================
     GSAP OPEN / CLOSE ANIMATION
  ========================================================= */

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isOpen) {
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
            onComplete: () => {
              textareaRef.current?.focus();
            },
          },
        );
      } else {
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

  /* =========================================================
     GET CURRENT TIME
  ========================================================= */

  const getTime = () => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  /* =========================================================
     CLOSE CHAT
  ========================================================= */

  const handleClose = () => {
    window.speechSynthesis?.cancel();

    setSpeakingId(null);
    setIsOpen(false);

    onClose?.();
  };

  /* =========================================================
     COPY MESSAGE
  ========================================================= */

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);

    setCopiedId(id);

    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  /* =========================================================
     READ ALOUD
  ========================================================= */

  const handleReadAloud = (id, text) => {
    if (!("speechSynthesis" in window)) return;

    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.onend = () => {
      setSpeakingId(null);
    };

    utterance.onerror = () => {
      setSpeakingId(null);
    };

    setSpeakingId(id);

    window.speechSynthesis.speak(utterance);
  };

  /* =========================================================
     SEND MESSAGE
  ========================================================= */

  const sendMessage = async (overrideText) => {
    const text = (overrideText || message).trim();

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

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: text,
          history: messages.slice(-4),
        }),
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

      /* =====================================================
         BASIC FOLLOW-UP QUESTIONS
      ===================================================== */

      let rawFollowUps = [];

      if (
        data.followUps &&
        Array.isArray(data.followUps) &&
        data.followUps.length > 0
      ) {
        rawFollowUps = data.followUps;
      } else {
        rawFollowUps = generateDynamicFollowUps();
      }

      /*
       * Always keep follow-ups basic.
       * If backend sends complicated questions,
       * we ignore them and use portfolio questions.
       */

      const basicQuestions = generateDynamicFollowUps();

      setFollowUps(
        shuffleArray(
          basicQuestions.length >= 3 ? basicQuestions : rawFollowUps,
        ).slice(0, 3),
      );

      /* =====================================================
         ADD AI MESSAGE
      ===================================================== */

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: "ai",
          text: aiText,
          time: getTime(),
          isNew: true,
        },
      ]);
    } catch (error) {
      console.error("Chat API Error:", error);

      const fallbackError =
        error.message || "Sorry, I couldn't connect to the AI server.";

      /* =====================================================
         FALLBACK FOLLOW-UPS
      ===================================================== */

      setFollowUps(shuffleArray(generateDynamicFollowUps()).slice(0, 3));

      /* =====================================================
         ADD ERROR MESSAGE
      ===================================================== */

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: "ai",
          text: fallbackError,
          time: getTime(),
          isNew: true,
        },
      ]);
    } finally {
      setLoading(false);

      setTimeout(() => {
        textareaRef.current?.focus();
      }, 50);
    }
  };

  /* =========================================================
     REGENERATE
  ========================================================= */

  const handleRegenerate = () => {
    const lastUserMsg = [...messages].reverse().find((m) => m.type === "user");

    if (lastUserMsg) {
      sendMessage(lastUserMsg.text);
    }
  };

  /* =========================================================
     FORM SUBMIT
  ========================================================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    sendMessage();
  };

  /* =========================================================
     TEXTAREA KEYBOARD
  ========================================================= */

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      sendMessage();
    }
  };

  /* =========================================================
     UI
  ========================================================= */

  return (
    <div className="hidden md:block">
      {/* =====================================================
          FLOATING TRIGGER BUTTON
      ===================================================== */}

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

      {/* =====================================================
          BACKDROP
      ===================================================== */}

      <div
        ref={backdropRef}
        className="
          fixed inset-0 z-40
          bg-black/40 backdrop-blur-sm
          opacity-0 pointer-events-none
          md:bg-transparent md:backdrop-blur-none
        "
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* =====================================================
          MAIN PANEL
      ===================================================== */}

      <div
        ref={panelRef}
        className="
          fixed z-50
          flex flex-col
          overflow-hidden
          opacity-0 pointer-events-none
          bg-[var(--bg-main)]
          text-[var(--text-main)]
          shadow-2xl
          inset-0 rounded-none

          md:inset-auto
          md:bottom-8
          md:right-8
          md:h-[650px]
          md:w-[680px]
          md:rounded-2xl
          md:border
          md:border-[var(--border-light)]
        "
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <header
          className="
            flex shrink-0
            items-center justify-between
            border-b border-[var(--border-light)]
            px-5 py-3.5
            bg-[var(--bg-secondary)]
          "
        >
          <div className="flex items-center gap-3">
            <div>
              <h2 className="text-lg heading-font tracking-wide">
                <span className="text-[var(--accent-primary)]">Paul's</span>{" "}
                Assistant
              </h2>

              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span
                    className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      loading
                        ? "animate-ping bg-amber-400"
                        : "animate-pulse bg-emerald-400"
                    }`}
                  />

                  <span
                    className={`relative inline-flex h-2 w-2 rounded-full ${
                      loading ? "bg-amber-500" : "bg-emerald-500"
                    }`}
                  />
                </span>

                <span className="text-[11px] font-medium opacity-60">
                  {loading ? "Thinking..." : "Online"}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={handleClose}
            type="button"
            className="
              flex h-8 w-8
              items-center justify-center
              rounded-full
              border border-[var(--border-light)]
              bg-black/5
              text-opacity-60
              transition-colors
              hover:bg-black/10
              dark:bg-white/5
              dark:hover:bg-white/10
            "
          >
            <X size={16} />
          </button>
        </header>

        {/* ===================================================
            SCROLLABLE CHAT AREA
        =================================================== */}

        <div
          ref={chatRef}
          data-lenis-prevent
          className="
            min-h-0
            flex-1
            overflow-y-auto
            px-6 py-6
            scrollbar-thin
          "
        >
          {/* =================================================
              EMPTY STATE
          ================================================= */}

          {messages.length === 0 ? (
            <div className="flex min-h-full flex-col justify-end space-y-6">
              <div className="space-y-1">
                <h1
                  className="
                    flex items-center gap-2
                    text-3xl font-bold
                    text-[var(--text-main)]
                    heading-font
                  "
                >
                  Hello there!
                 
                </h1>

                <p
                  className="
                    text-xl
                    font-light
                    text-[var(--text-main)]
                    opacity-60
                  "
                >
                  How can I help you today?
                </p>
              </div>

              {/* =================================================
                  INITIAL PROMPTS
              ================================================= */}

              <div className="flex flex-col gap-2.5">
                {initialPrompts.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => sendMessage(item.prompt)}
                    className="
                      flex w-full
                      items-center
                      rounded-full
                      border
                      border-[var(--border-light)]
                      bg-[var(--bg-secondary)]
                      px-5 py-3.5
                      text-left
                      transition-all
                      duration-200
                      hover:bg-black/5
                      active:scale-[0.99]
                      dark:hover:bg-white/5
                    "
                  >
                    <span
                      className="
                        mr-2
                        text-sm
                        font-semibold
                        text-[var(--text-main)]
                      "
                    >
                      {item.title}
                    </span>

                    <span
                      className="
                        text-sm
                        font-normal
                        text-[var(--text-main)]
                        opacity-50
                      "
                    >
                      {item.subtitle}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* =================================================
               ACTIVE CHAT
            ================================================= */

            <div className="space-y-6 pb-4">
              {messages.map((item) => {
                const isUser = item.type === "user";

                return (
                  <div
                    key={item.id}
                    className="group relative flex flex-col gap-2"
                  >
                    {/* =========================================
                        MESSAGE ROW
                    ========================================= */}

                    <div
                      className={`flex gap-3 ${
                        isUser ? "justify-end" : "justify-start"
                      }`}
                    >
                      {/* AI ICON */}

                      {!isUser && (
                        <div
                          className="
                            mt-1
                            flex h-7 w-7
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[var(--border-light)]
                            bg-[var(--bg-secondary)]
                            text-[10px]
                            font-semibold
                            text-[var(--text-main)]
                            opacity-70
                          "
                        >
                          AI
                        </div>
                      )}

                      {/* MESSAGE CONTENT */}

                      <div
                        className={`text-sm leading-relaxed ${
                          isUser
                            ? `
                              max-w-[80%]
                              rounded-2xl
                              rounded-tr-xs
                              border
                              border-[var(--border-light)]
                              bg-[var(--bg-secondary)]
                              px-4 py-3
                              text-[var(--text-main)]
                              shadow-sm
                            `
                            : `
                              max-w-[90%]
                              py-1
                              text-[var(--text-main)]
                            `
                        }`}
                      >
                        {/* USER MESSAGE */}

                        {isUser ? (
                          <p className="whitespace-pre-wrap break-words">
                            {item.text}
                          </p>
                        ) : item.isNew ? (
                          /* AI TYPEWRITER */

                          <TypewriterText
                            text={item.text}
                            onComplete={() => {
                              setMessages((prev) =>
                                prev.map((m) =>
                                  m.id === item.id
                                    ? {
                                        ...m,
                                        isNew: false,
                                      }
                                    : m,
                                ),
                              );
                            }}
                          />
                        ) : (
                          /* NORMAL AI MARKDOWN */

                          <ReactMarkdown
                            components={{
                              p: ({ children }) => (
                                <p className="mb-2 leading-relaxed last:mb-0">
                                  {children}
                                </p>
                              ),

                              strong: ({ children }) => (
                                <strong className="font-semibold text-[var(--text-main)]">
                                  {children}
                                </strong>
                              ),

                              em: ({ children }) => (
                                <em className="italic">{children}</em>
                              ),

                              ul: ({ children }) => (
                                <ul className="my-2 list-disc space-y-1 pl-5">
                                  {children}
                                </ul>
                              ),

                              ol: ({ children }) => (
                                <ol className="my-2 list-decimal space-y-1 pl-5">
                                  {children}
                                </ol>
                              ),

                              li: ({ children }) => (
                                <li className="pl-1">{children}</li>
                              ),

                              a: ({ href, children }) => (
                                <a
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="
                                    text-[var(--accent-primary)]
                                    underline
                                    underline-offset-2
                                    hover:opacity-80
                                  "
                                >
                                  {children}
                                </a>
                              ),

                              code: ({ inline, children }) =>
                                inline ? (
                                  <code
                                    className="
                                      rounded
                                      bg-black/10
                                      px-1.5 py-0.5
                                      font-mono
                                      text-xs
                                      dark:bg-white/10
                                    "
                                  >
                                    {children}
                                  </code>
                                ) : (
                                  <code
                                    className="
                                      block
                                      overflow-x-auto
                                      rounded-lg
                                      border
                                      border-[var(--border-light)]
                                      bg-black/5
                                      p-3
                                      font-mono
                                      text-xs
                                      dark:bg-white/5
                                    "
                                  >
                                    {children}
                                  </code>
                                ),
                            }}
                          >
                            {item.text}
                          </ReactMarkdown>
                        )}
                      </div>

                      {/* USER ICON */}

                      {isUser && (
                        <div
                          className="
                            mt-1
                            flex h-7 w-7
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[var(--border-light)]
                            bg-[var(--bg-secondary)]
                            text-[var(--text-main)]
                          "
                        >
                          <User size={14} />
                        </div>
                      )}
                    </div>

                    {/* =========================================
                        AI ACTION BAR
                    ========================================= */}

                    {!isUser && (
                      <div
                        className="
                          ml-10
                          flex items-center gap-3
                          pt-1
                          text-xs
                          text-[var(--text-main)]
                          opacity-60
                        "
                      >
                        {/* COPY */}

                        <button
                          onClick={() => handleCopy(item.id, item.text)}
                          type="button"
                          className="
                            flex items-center gap-1
                            transition-colors
                            hover:opacity-100
                          "
                        >
                          {copiedId === item.id ? (
                            <Check size={14} className="text-emerald-500" />
                          ) : (
                            <Copy size={14} />
                          )}
                        </button>

                        {/* REGENERATE */}

                        <button
                          onClick={handleRegenerate}
                          type="button"
                          className="
                            transition-colors
                            hover:opacity-100
                          "
                        >
                          <RotateCcw size={14} />
                        </button>

                        {/* READ ALOUD */}

                        <button
                          onClick={() => handleReadAloud(item.id, item.text)}
                          type="button"
                          className={`transition-colors ${
                            speakingId === item.id
                              ? `
                                text-[var(--accent-primary)]
                                opacity-100
                              `
                              : "hover:opacity-100"
                          }`}
                        >
                          {speakingId === item.id ? (
                            <VolumeX size={14} />
                          ) : (
                            <Volume2 size={14} />
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* =================================================
                  BASIC FOLLOW-UP QUESTIONS
              ================================================= */}

              {!loading && followUps.length > 0 && (
                <div className="space-y-2 pt-2">
                  <p
                    className="
                      text-xs
                      font-medium
                      text-[var(--text-main)]
                      opacity-50
                    "
                  >
                    Follow up questions:
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {followUps.map((question, index) => (
                      <button
                        key={`${index}-${question}`}
                        onClick={() => sendMessage(question)}
                        className="
                          rounded-full
                          border
                          border-[var(--border-light)]
                          bg-[var(--bg-secondary)]
                          px-4 py-2
                          text-xs
                          font-medium
                          text-[var(--text-main)]
                          transition-all
                          hover:bg-black/5
                          active:scale-95
                          dark:hover:bg-white/5
                        "
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* =================================================
                  THINKING
              ================================================= */}

              {loading && (
                <div
                  className="
                    flex items-center gap-2
                    pl-10
                    text-xs
                    text-[var(--text-main)]
                    opacity-50
                  "
                >
                  <span>Thinking</span>

                  <div className="flex items-center gap-1">
                    <span className="h-1 w-1 animate-bounce rounded-full bg-current" />

                    <span
                      className="h-1 w-1 animate-bounce rounded-full bg-current"
                      style={{
                        animationDelay: "150ms",
                      }}
                    />

                    <span
                      className="h-1 w-1 animate-bounce rounded-full bg-current"
                      style={{
                        animationDelay: "300ms",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* =====================================================
            INPUT AREA
        ===================================================== */}

        <div
          className="
            shrink-0
            bg-[var(--bg-main)]
            p-4
          "
        >
          <form
            onSubmit={handleSubmit}
            className="
              relative
              flex
              min-h-[110px]
              flex-col
              justify-between
              rounded-2xl
              border
              border-[var(--border-light)]
              bg-[var(--bg-secondary)]
              p-4
              transition-all
              duration-200
              focus-within:border-[var(--accent-primary)]/50
            "
          >
            {/* =================================================
                TEXTAREA
            ================================================= */}

            <textarea
              ref={textareaRef}
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
              placeholder={
                loading
                  ? "AI is processing..."
                  : "Ask me anything ..."
              }
              className="
                w-full
                resize-none
                bg-transparent
                text-sm
                text-[var(--text-main)]
                outline-none
                placeholder:text-[var(--text-main)]
                placeholder:opacity-40
                disabled:opacity-50
              "
            />

            {/* =================================================
                INPUT ACTIONS
            ================================================= */}

            <div className="flex items-center justify-between pt-2">
              <div
                className="
                  flex items-center gap-3
                  text-[var(--text-main)]
                  opacity-50
                "
              >
                {/* ATTACH */}

                <button
                  type="button"
                  className="
                    transition-opacity
                    hover:opacity-100
                  "
                  aria-label="Attach File"
                >
                  <Paperclip size={18} />
                </button>

                {/* MICROPHONE */}

                <button
                  type="button"
                  className="
                    transition-opacity
                    hover:opacity-100
                  "
                  aria-label="Voice Input"
                >
                  <Mic size={18} />
                </button>

                {/* OPTIONS */}

                <button
                  type="button"
                  className="
                    transition-opacity
                    hover:opacity-100
                  "
                  aria-label="Options"
                >
                  <Circle size={18} />
                </button>
              </div>

              {/* SEND */}

              <button
                type="submit"
                disabled={loading || !message.trim()}
                className="
                  flex h-8 w-8
                  items-center justify-center
                  rounded-full
                  bg-white
                  text-black
                  shadow-md
                  transition-all
                  duration-200
                  hover:scale-105
                  active:scale-95
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                  disabled:hover:scale-100
                  dark:bg-white
                  dark:text-black
                "
              >
                <ArrowUp size={16} strokeWidth={2.5} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatAssistant;
