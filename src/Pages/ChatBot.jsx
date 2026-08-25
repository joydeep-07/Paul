import React, { useEffect, useRef, useState } from "react";

import { Bot, Send, User, X } from "lucide-react";

import { Link } from "react-router-dom";

import ReactMarkdown from "react-markdown";

const API_URL =
  import.meta.env.VITE_BACKEND_API_URL ||
  "https://paulhere-backend.onrender.com";

const ChatBot = () => {
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
  const inputRef = useRef(null);

  /*
   * Scroll only the chat container.
   * The header and input are outside this container,
   * so they remain fixed.
   */
  const scrollToBottom = () => {
    if (!chatRef.current) return;

    requestAnimationFrame(() => {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: "smooth",
      });
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  /*
   * Automatically focus the input when the page loads.
   */
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  /*
   * Prevent the Lenis smooth-scroll instance from
   * controlling the chat's internal scrolling.
   */
  useEffect(() => {
    const chat = chatRef.current;

    if (!chat) return;

    const preventWheelPropagation = (e) => {
      e.stopPropagation();
    };

    chat.addEventListener("wheel", preventWheelPropagation, {
      passive: true,
    });

    return () => {
      chat.removeEventListener("wheel", preventWheelPropagation);
    };
  }, []);

  /*
   * Lock body scrolling while the chatbot page is open.
   */
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const getTime = () => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
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

      console.log("Chat API URL:", endpoint);

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
        }),
      });

      const contentType = response.headers.get("content-type");

      let data = {};

      if (contentType?.includes("application/json")) {
        data = await response.json();
      } else {
        const responseText = await response.text();

        console.error("Non-JSON response:", responseText);

        throw new Error(
          `Server returned ${response.status}: ${
            responseText || "Empty response"
          }`,
        );
      }

      console.log("Chat API response:", data);

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

      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
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
    <div
      className="fixed inset-0 flex flex-col overflow-hidden"
      style={{
        backgroundColor: "var(--bg-main)",
        color: "var(--text-main)",
      }}
    >
      {/* =========================================================
          FIXED HEADER
      ========================================================= */}

      <header
        className="
          fixed
          inset-x-0
          top-0
          z-50
          shrink-0
          border-b
          border-[var(--border-light)]/40
          bg-[var(--bg-main)]/90
          backdrop-blur-md
        "
      >
        <div
          className="
            mx-auto
            flex
            w-[calc(100%-2rem)]
            items-center
            justify-between
            py-3
            md:w-[calc(100%-6rem)]
            md:py-4
          "
        >
          {/* LEFT SIDE */}

          <div>
           

            <h1 className="heading-font mt-1 text-lg tracking-tight md:text-2xl">
              <span className="text-[var(--accent-primary)]">Paul's</span>{" "}
              Assistant
            </h1>

            <div className="mt-1 flex items-center gap-2">
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

          {/* CLOSE BUTTON */}

          <Link
            to="/"
            aria-label="Close Chat"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-[var(--border-light)]/50
              bg-[var(--bg-secondary)]/60
              text-[var(--text-secondary)]
              transition-all
              duration-200
              hover:border-[var(--accent-primary)]/40
              hover:bg-[var(--accent-primary)]/10
              hover:text-[var(--accent-primary)]
              active:scale-95
            "
          >
            <X size={16} />
          </Link>
        </div>
      </header>

      {/* =========================================================
          SCROLLABLE MESSAGE AREA
      ========================================================= */}

      <main
        ref={chatRef}
        data-lenis-prevent
        className="
          min-h-0
          flex-1
          overflow-y-auto
          overscroll-contain
          touch-pan-y
          px-4
          pb-36
          pt-28
          scrollbar-thin
          scrollbar-thumb-[var(--border-light)]
          md:px-12
          md:pt-32
        "
      >
        <div className="mx-auto max-w-5xl space-y-5">
          {/* TODAY */}

          <div className="flex justify-center">
            <span
              className="
                rounded-sm
                border
                border-[var(--border-light)]/40
                bg-[var(--bg-secondary)]
                px-3.5
                py-2
                text-[9px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-[var(--text-secondary)]
                opacity-70
                shadow-sm
              "
            >
              Today
            </span>
          </div>

          {/* MESSAGES */}

          {messages.map((item) => {
            const isUser = item.type === "user";

            return (
              <div
                key={item.id}
                className={`flex items-end gap-2 ${
                  isUser ? "justify-end" : "justify-start"
                }`}
              >
                {/* AI AVATAR */}

                {!isUser && (
                  <div
                    className="
                      mb-1
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[var(--border-light)]
                      bg-[var(--bg-secondary)]
                      shadow-sm
                    "
                  >
                    <h2 className="text-xs text-[var(--text-secondary)]/50 ">
                      AI
                    </h2>
                  </div>
                )}

                {/* MESSAGE BUBBLE */}

                <div
                  className={`
                    group
                    relative
                    max-w-[88%]
                    px-4
                    py-3
                    text-xs
                    leading-relaxed
                    shadow-sm
                    transition-all
                    duration-200
                    hover:shadow-md
                    sm:max-w-[75%]
                    sm:px-4
                    sm:py-3
                    ${
                      isUser
                        ? "rounded-xl rounded-br-xs bg-[var(--accent-primary)] text-white"
                        : "rounded-xl rounded-bl-xs border border-[var(--border-light)]/70 bg-[var(--bg-secondary)] text-[var(--text-main)]"
                    }
                  `}
                >
                  {isUser ? (
                    <p className="whitespace-pre-wrap break-words">
                      {item.text}
                    </p>
                  ) : (
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => (
                          <p className="mb-2 last:mb-0 leading-relaxed">
                            {children}
                          </p>
                        ),

                        strong: ({ children }) => (
                          <strong className="font-semibold">{children}</strong>
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

                        h1: ({ children }) => (
                          <h1 className="mb-2 text-sm font-semibold">
                            {children}
                          </h1>
                        ),

                        h2: ({ children }) => (
                          <h2 className="mb-2 text-sm font-semibold">
                            {children}
                          </h2>
                        ),

                        h3: ({ children }) => (
                          <h3 className="mb-2 text-xs font-semibold">
                            {children}
                          </h3>
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
                              transition-opacity
                              hover:opacity-80
                            "
                          >
                            {children}
                          </a>
                        ),

                        blockquote: ({ children }) => (
                          <blockquote
                            className="
                              my-2
                              border-l-2
                              border-[var(--accent-primary)]/40
                              pl-3
                              opacity-80
                            "
                          >
                            {children}
                          </blockquote>
                        ),

                        code: ({ inline, children }) =>
                          inline ? (
                            <code
                              className="
                                rounded
                                bg-[var(--bg-main)]
                                px-1.5
                                py-0.5
                                font-mono
                                text-[11px]
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
                                bg-[var(--bg-main)]
                                p-3
                                font-mono
                                text-[11px]
                              "
                            >
                              {children}
                            </code>
                          ),

                        hr: () => (
                          <hr className="my-3 border-[var(--border-light)]/50" />
                        ),
                      }}
                    >
                      {item.text}
                    </ReactMarkdown>
                  )}

                  {/* TIME */}

                
                </div>

                {/* USER AVATAR */}

                {isUser && (
                  <div
                    className="
                      mb-1
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[var(--border-light)]
                      bg-[var(--bg-secondary)]
                      shadow-sm
                    "
                  >
                    <User size={14} className="text-[var(--text-secondary)]" />
                  </div>
                )}
              </div>
            );
          })}

          {/* THINKING */}

          {loading && (
            <div className="flex items-end gap-2">
              <div
                className="
                  mb-1
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[var(--border-light)]
                  bg-[var(--bg-secondary)]
                  shadow-sm
                "
              >
                <h2 className="text-xs text-[var(--text-secondary)]/50 ">AI</h2>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  rounded-bl-xs
                  border
                  border-[var(--border-light)]/70
                  bg-[var(--bg-secondary)]
                  px-4
                  py-3
                "
              >
                <span className="text-xs text-[var(--text-secondary)]/60">
                  Thinking
                </span>

                <div className="flex items-center gap-1">
                  <span className="h-1 w-1 animate-bounce rounded-full bg-[var(--accent-primary)]/60" />

                  <span
                    className="h-1 w-1 animate-bounce rounded-full bg-[var(--accent-primary)]/60"
                    style={{
                      animationDelay: "150ms",
                    }}
                  />

                  <span
                    className="h-1 w-1 animate-bounce rounded-full bg-[var(--accent-primary)]/60"
                    style={{
                      animationDelay: "300ms",
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* =========================================================
          FIXED INPUT AREA
      ========================================================= */}

      <div
        className="
          fixed
          inset-x-0
          bottom-0
          z-50
          border-t
          border-[var(--border-light)]/40
          bg-[var(--bg-main)]/90
          px-4
          py-3
          backdrop-blur-md
          md:px-12
          md:py-4
        "
      >
        <form onSubmit={handleSubmit} className="mx-auto max-w-5xl">
          <div
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-[var(--border-light)]/70
              bg-[var(--bg-secondary)]
              p-2
              shadow-sm
              transition-all
              duration-200
              focus-within:border-[var(--accent-primary)]/40
            "
          >
            <input
              ref={inputRef}
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
              placeholder={loading ? "AI is thinking..." : "Ask me anything..."}
              className="
                h-10
                min-w-0
                flex-1
                bg-transparent
                px-2
                text-sm
                text-[var(--text-main)]
                outline-none
                placeholder:text-[var(--text-secondary)]
                placeholder:opacity-40
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            />

            <button
              type="submit"
              disabled={loading || !message.trim()}
              aria-label="Send message"
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-[var(--accent-primary)]
                text-white
                shadow-sm
                transition-all
                duration-200
                hover:scale-[1.02]
                active:scale-95
                disabled:cursor-not-allowed
                disabled:opacity-40
                disabled:hover:scale-100
                disabled:active:scale-100
              "
            >
              <Send size={15} />
            </button>
          </div>

          <p
            className="
              mt-2
              text-center
              text-[9px]
              tracking-wide
              text-[var(--text-secondary)]
              opacity-40
            "
          >
            Press Enter to send
          </p>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
