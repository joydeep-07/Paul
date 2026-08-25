import React, { useEffect, useRef, useState } from "react";
import { Bot, Send, User, X } from "lucide-react";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, loading]);

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
      className="relative flex h-screen flex-col overflow-hidden px-4 py-4 md:px-12 md:py-8"
      style={{
        backgroundColor: "var(--bg-main)",
        color: "var(--text-main)",
      }}
    >
      {/* HEADER */}
      <header
        className="
          fixed
          left-1/2
          top-0
          z-50
          w-[calc(100%-2rem)]
          -translate-x-1/2
          border-b
          border-[var(--border-light)]/50
          bg-[var(--bg-main)]
          py-2
          md:w-[calc(100%-6rem)]
          md:py-4
        "
      >
        <div className="mx-auto flex items-center justify-between">
          <div>
            <h1 className="heading-font mt-1 text-lg md:text-2xl">
              AI Assistant
            </h1>

            <div className="mt-1 flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full ${
                  loading
                    ? "animate-pulse bg-yellow-500"
                    : "bg-[var(--accent-primary)]"
                }`}
              />

              <span className="text-xs text-[var(--text-secondary)] opacity-60">
                {loading ? "Thinking..." : "Online"}
              </span>
            </div>
          </div>

          <Link
            to="/"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              text-[var(--text-secondary)]
              transition-all
              duration-300
              hover:text-[var(--accent-primary)]
            "
          >
            <X size={16} />
          </Link>
        </div>
      </header>

      {/* CHAT AREA */}
      <div
        ref={chatRef}
        className="mt-18 min-h-0 flex-1 overflow-y-auto md:mt-22 md:px-12"
      >
        <div className="mx-auto max-w-6xl space-y-5 pb-28">
          {/* DATE */}
          <div className="flex justify-center">
            <span className="border border-[var(--border-light)]/50 bg-[var(--bg-secondary)] px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-[var(--text-secondary)] opacity-60">
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
                {/* AI ICON */}
                {!isUser && (
                  <div className="mb-1 hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border-light)] bg-[var(--bg-secondary)] sm:flex">
                    <Bot size={15} className="text-[var(--accent-primary)]" />
                  </div>
                )}

                {/* MESSAGE */}
                <div
                  className="relative max-w-[85%] border px-4 py-3 text-sm leading-5 sm:max-w-[65%]"
                  style={{
                    backgroundColor: isUser
                      ? "var(--accent-primary)"
                      : "var(--bg-secondary)",

                    borderColor: isUser
                      ? "var(--accent-primary)"
                      : "var(--border-light)",

                    color: isUser ? "#ffffff" : "var(--text-main)",

                    borderRadius: isUser
                      ? "14px 14px 3px 14px"
                      : "14px 14px 14px 3px",
                  }}
                >
                  <p className="whitespace-pre-wrap">{item.text}</p>

                  <span
                    className={`mt-1 block text-[9px] ${
                      isUser
                        ? "text-white/60"
                        : "text-[var(--text-secondary)] opacity-50"
                    }`}
                  >
                    {item.time}
                  </span>
                </div>

                {/* USER ICON */}
                {isUser && (
                  <div className="mb-1 hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border-light)] bg-[var(--bg-secondary)] sm:flex">
                    <User size={15} className="text-[var(--text-secondary)]" />
                  </div>
                )}
              </div>
            );
          })}

          {/* LOADING */}
          {loading && (
            <div className="flex items-end gap-2">
              <div className="mb-1 hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border-light)] bg-[var(--bg-secondary)] sm:flex">
                <Bot size={15} className="text-[var(--accent-primary)]" />
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-1
                  rounded-[14px_14px_14px_3px]
                  border
                  border-[var(--border-light)]
                  bg-[var(--bg-secondary)]
                  px-4
                  py-4
                "
              >
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--text-secondary)] opacity-50" />

                <span
                  className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--text-secondary)] opacity-50"
                  style={{
                    animationDelay: "150ms",
                  }}
                />

                <span
                  className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--text-secondary)] opacity-50"
                  style={{
                    animationDelay: "300ms",
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* INPUT AREA */}
      <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] -translate-x-1/2 pt-3 md:w-[calc(100%-6rem)]">
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-6xl items-center gap-2 border border-[var(--border-light)]/60 bg-[var(--bg-secondary)] p-2"
        >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
            placeholder={loading ? "AI is thinking..." : "Ask something..."}
            className="
              h-11
              min-w-0
              flex-1
              bg-transparent
              px-3
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
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              bg-[var(--accent-primary)]
              text-white
              transition-all
              duration-200
              hover:scale-105
              disabled:cursor-not-allowed
              disabled:opacity-40
              disabled:hover:scale-100
            "
          >
            <Send size={16} />
          </button>
        </form>

        <p className="mt-2 text-center text-[9px] tracking-wide text-[var(--text-secondary)] opacity-40">
          Press Enter to send
        </p>
      </div>
    </div>
  );
};

export default ChatBot;
