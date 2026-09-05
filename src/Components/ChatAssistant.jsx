import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Lottie from "lottie-react";
import meta from "../assets/animation/meta.json";

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
  Mic,
  MicOff,
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

    [shuffled[i], shuffled[j]] = [shuffled[i], shuffled[j]];
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
   CLEAN TEXT FOR SPEECH (STRIPS MARKDOWN SYMBOLS & CODES)
========================================================= */

const cleanTextForSpeech = (text) => {
  if (!text) return "";
  return text
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
    .replace(/[#*\_~>-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
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
  const [isListening, setIsListening] = useState(false);
  const [isVoiceSubmitted, setIsVoiceSubmitted] = useState(false);

  const chatRef = useRef(null);
  const panelRef = useRef(null);
  const backdropRef = useRef(null);
  const triggerBtnRef = useRef(null);
  const textareaRef = useRef(null);
  const recognitionRef = useRef(null);
  const silenceTimerRef = useRef(null);
  const messageRefs = useRef({});

  /* =========================================================
     INITIAL PROMPTS
  ========================================================= */

  const initialPrompts = [
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
     AUTO SCROLL & GSAP ENTRY FOR AI RESPONSE
  ========================================================= */

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();

      const lastMsg = messages[messages.length - 1];
      if (lastMsg && lastMsg.type === "ai" && messageRefs.current[lastMsg.id]) {
        gsap.fromTo(
          messageRefs.current[lastMsg.id],
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
        );
      }
    }
  }, [messages, loading]);

  /* =========================================================
     BODY SCROLL LOCK
  ========================================================= */

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* =========================================================
     VOICE INPUT SETUP
  ========================================================= */

  const resetSilenceTimer = () => {
    if (silenceTimerRef.current) {
      clearTimeout(silenceTimerRef.current);
    }
    silenceTimerRef.current = setTimeout(() => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    }, 3000);
  };

  const toggleVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice input is not supported in this browser.");
      return;
    }

    if (isListening) {
      if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    // Instantly stop any currently active speech synthesis when voice recording starts
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setIsListening(true);
      resetSilenceTimer();
    };

    recognition.onresult = (event) => {
      let currentTranscript = "";
      for (let i = 0; i < event.results.length; i++) {
        currentTranscript += event.results[i][0].transcript;
      }
      setMessage(currentTranscript);
      resetSilenceTimer();
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
      setIsListening(false);
    };

    recognition.onend = () => {
      if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
      setIsListening(false);

      setMessage((latestMsg) => {
        if (latestMsg.trim()) {
          setIsVoiceSubmitted(true);
          sendMessage(latestMsg);
        }
        return latestMsg;
      });
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  /* =========================================================
     GSAP OPEN ANIMATION
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
            scale: 0.95,
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
     GSAP CLOSE CHAT ANIMATION
  ========================================================= */

  const handleClose = () => {
    if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
    window.speechSynthesis?.cancel();
    recognitionRef.current?.stop();

    setSpeakingId(null);
    setIsListening(false);

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
      scale: 0.95,
      y: 20,
      duration: 0.25,
      ease: "power2.in",
      pointerEvents: "none",
      onComplete: () => {
        setIsOpen(false);
        onClose?.();
      },
    });
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
     READ ALOUD (READS ALL CLEAN TEXT WITHOUT MARKDOWN SYMBOLS)
  ========================================================= */

  const handleReadAloud = (id, text) => {
    if (!("speechSynthesis" in window)) return;

    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }

    window.speechSynthesis.cancel();

    const cleanText = cleanTextForSpeech(text);
    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);

    const voices = window.speechSynthesis.getVoices();
    const premiumVoice = voices.find(
      (v) =>
        v.lang.startsWith("en") &&
        (v.name.includes("Natural") ||
          v.name.includes("Google") ||
          v.name.includes("Enhanced") ||
          v.name.includes("Premium")),
    );
    if (premiumVoice) {
      utterance.voice = premiumVoice;
    }

    utterance.pitch = 1.0;
    utterance.rate = 0.95;

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
         FOLLOW-UP QUESTIONS
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

      const basicQuestions = generateDynamicFollowUps();

      setFollowUps(
        shuffleArray(
          basicQuestions.length >= 3 ? basicQuestions : rawFollowUps,
        ).slice(0, 3),
      );

      /* =====================================================
         ADD AI MESSAGE & READ ALL OUTPUT ALOUD
      ===================================================== */

      const newAiMsgId = Date.now() + 1;

      setMessages((prev) => [
        ...prev,
        {
          id: newAiMsgId,
          type: "ai",
          text: aiText,
          time: getTime(),
          isNew: true,
        },
      ]);

      // Automatically speak the complete text output when voice input was used
      if (isVoiceSubmitted) {
        handleReadAloud(newAiMsgId, aiText);
        setIsVoiceSubmitted(false);
      }
    } catch (error) {
      console.error("Chat API Error:", error);

      const fallbackError =
        error.message || "Sorry, I couldn't connect to the AI server.";

      setFollowUps(shuffleArray(generateDynamicFollowUps()).slice(0, 3));

      const newAiMsgId = Date.now() + 1;

      setMessages((prev) => [
        ...prev,
        {
          id: newAiMsgId,
          type: "ai",
          text: fallbackError,
          time: getTime(),
          isNew: true,
        },
      ]);

      // Automatically speak error output if prompt was initiated by voice
      if (isVoiceSubmitted) {
        handleReadAloud(newAiMsgId, fallbackError);
        setIsVoiceSubmitted(false);
      }
    } finally {
      setLoading(false);
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

    setIsVoiceSubmitted(false);
    sendMessage();
  };

  /* =========================================================
     TEXTAREA KEYBOARD
  ========================================================= */

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      setIsVoiceSubmitted(false);
      sendMessage();
    }
  };

  /* =========================================================
     UI RENDER VIA PORTAL
  ========================================================= */

  return createPortal(
    <div className="w-full">
      {/* FLOATING TRIGGER BUTTON */}
      <button
        ref={triggerBtnRef}
        onClick={() => setIsOpen(true)}
        type="button"
        aria-label="Open Chat"
        className=" group fixed bottom-20 right-5 z-[9997] flex h-14 w-14 items-center justify-center rounded-full shadow-[var(--accent-primary)]/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[var(--accent-primary)]/40 active:scale-95 md:bottom-8 md:right-8 cursor-pointer "
      >
        <Lottie
          animationData={meta}
          loop
          autoplay
          className="h-14 md:h-12 md:w-12 w-14"
        />
      </button>

      {/* BACKDROP */}
      <div
        ref={backdropRef}
        className="
          fixed inset-0 z-[9998]
          bg-black/40 backdrop-blur-sm
          opacity-0 pointer-events-none
          md:bg-transparent md:backdrop-blur-none
        "
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* MAIN PANEL */}
      <div
        ref={panelRef}
        className="
          fixed z-[9999]
          top-0 left-0
          h-[100dvh] w-[100dvw]
          flex flex-col
          overflow-hidden
          opacity-0 pointer-events-none
          bg-[var(--bg-main)]
          text-[var(--text-main)]
          shadow-2xl
          rounded-none

          md:top-auto
          md:left-auto
          md:bottom-8
          md:right-8
          md:h-[650px]
          md:w-[680px]
          md:rounded-2xl
          md:border
          md:border-[var(--border-light)]
        "
      >
        {/* HEADER */}
        <header
          className="
            flex shrink-0
            items-center justify-between
            border-b border-[var(--border-light)]
            px-5 py-3.5
            bg-[var(--bg-secondary)]
          "
        >
          <div className="flex items-center">
            <div>
              <h2 className="text-xl heading-font tracking-wide">
                <span className="text-[var(--accent-primary)]">Paul's</span>{" "}
                Assistant
              </h2>

              <div className="flex items-center gap-2">
                <span className="text-[3vw] md:text-sm heading-font font-medium opacity-60">
                  Created by Paul
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

        {/* SCROLLABLE CHAT AREA */}
        <div
          ref={chatRef}
          data-lenis-prevent
          className="
            min-h-0
            flex-1
            overflow-y-auto
            px-4 py-4
            md:px-6 md:py-6
            scrollbar-thin
          "
        >
          {messages.length === 0 ? (
            <div className="flex min-h-full flex-col justify-between">
              {/* Greeting - Top */}
              <div className="space-y-1 pt-10 md:pt-0">
                <h1
                  className="
        flex items-center gap-2
        text-[8vw] md:text-4xl font-light
        text-[var(--text-main)]
        heading-font
      "
                >
                  Hi there!
                </h1>

                <p
                  className="
        text-lg md:text-xl
        font-light
        text-[var(--text-main)]
        opacity-60
      "
                >
                  How can I help you today?
                </p>
              </div>

              {/* Questions - Bottom */}
              <div className="flex flex-wrap items-center gap-2">
                {initialPrompts.slice(0, 4).map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsVoiceSubmitted(false);
                      sendMessage(item.prompt);
                    }}
                    className="
        flex w-fit max-w-full shrink-0
        items-center
        rounded-full
        border
        border-[var(--border-light)]
        bg-[var(--bg-secondary)]
        px-4 py-3
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
          text-xs
          font-semibold
          text-[var(--text-main)]
        "
                    >
                      {item.title}
                    </span>

                    <span
                      className="
          text-xs
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
            <div className="space-y-6 pb-4">
              {messages.map((item) => {
                const isUser = item.type === "user";

                return (
                  <div
                    key={item.id}
                    ref={(el) => (messageRefs.current[item.id] = el)}
                    className="group relative flex flex-col gap-2"
                  >
                    <div
                      className={`flex gap-3 ${
                        isUser ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`text-sm leading-relaxed ${
                          isUser
                            ? `
                              max-w-[85%] md:max-w-[80%]
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
                        {isUser ? (
                          <p className="whitespace-pre-wrap break-words">
                            {item.text}
                          </p>
                        ) : item.isNew ? (
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
                    </div>

                    {!isUser && (
                      <div
                        className="
                          ml-0
                          flex items-center gap-3
                          pt-1
                          text-xs
                          text-[var(--text-main)]
                          opacity-60
                        "
                      >
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

              {!loading && followUps.length > 0 && (
                <div className="space-y-2 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {followUps.map((question, index) => (
                      <button
                        key={`${index}-${question}`}
                        onClick={() => {
                          setIsVoiceSubmitted(false);
                          sendMessage(question);
                        }}
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

              {loading && (
                <div
                  className="
                    flex items-center gap-2
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

        {/* INPUT AREA */}
        <div
          className="
            shrink-0
            bg-[var(--bg-main)]
            p-3 md:p-4
            pb-[calc(0.75rem+env(safe-area-inset-bottom))]
          "
        >
          <form
            onSubmit={handleSubmit}
            className="
              relative
              flex
              min-h-[100px] md:min-h-[110px]
              flex-col
              justify-between
              rounded-2xl
              border
              border-[var(--border-light)]
              bg-[var(--bg-secondary)]
              p-3 md:p-4
              transition-all
              duration-200
              focus-within:border-[var(--accent-primary)]/50
            "
          >
            <textarea
              ref={textareaRef}
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
              placeholder={
                loading ? "AI is processing..." : "Ask me anything ..."
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

            <div className="flex items-center justify-between pt-2">
              <div
                className="
                  flex items-center gap-3
                  text-[var(--text-main)]
                  opacity-50
                "
              >
                <button
                  type="button"
                  onClick={toggleVoiceInput}
                  className={`transition-opacity hover:opacity-100 ${
                    isListening ? "text-red-500 opacity-100 animate-pulse" : ""
                  }`}
                  aria-label="Voice Input"
                >
                  {isListening ? <MicOff size={18} /> : <Mic size={18} />}
                </button>

                <button
                  type="button"
                  className="transition-opacity hover:opacity-100"
                  aria-label="Options"
                >
                  <Circle size={18} />
                </button>
              </div>

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
    </div>,
    document.body,
  );
};

export default ChatAssistant;
