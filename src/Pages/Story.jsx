import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import me from "../assets/images/main3.png";
import me1 from "../assets/images/main2.png";
import { Heart, Send, X, MoreHorizontal, Music } from "lucide-react";

const Story = () => {
  const navigate = useNavigate();
  const [reply, setReply] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showHeartBurst, setShowHeartBurst] = useState(false);
  const timerRef = useRef(null);

  // Auto-advance timer (respects pause state)
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setTimeout(() => {
      navigate(-1);
    }, 15000);

    return () => clearTimeout(timerRef.current);
  }, [navigate, isPaused]);

  const handleReply = (e) => {
    e.preventDefault();
    if (!reply.trim()) return;
    console.log("Story reply:", reply);
    setReply("");
  };

  const handleLike = () => {
    setIsLiked((prev) => {
      if (!prev) {
        setShowHeartBurst(true);
        setTimeout(() => setShowHeartBurst(false), 900);
      }
      return !prev;
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg-main)] select-none overflow-hidden">
      {/* LAPTOP AMBIENT BACKLIGHT */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block overflow-hidden">
        {/* Soft radial glow using primary accent & gradient */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[850px] rounded-full opacity-35 blur-[120px] transition-all duration-700"
          style={{
            background:
              "radial-gradient(circle, var(--accent-primary) 0%, var(--accent-secondary) 40%, transparent 75%)",
          }}
        />

        {/* Ambient image reflection mirror */}
        <div className="absolute inset-0 opacity-20 filter blur-[90px] scale-125">
          <img
            src={me}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>

        {/* Dark overlay to balance contrast behind the card */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-2xl" />
      </div>

      {/* Outer wrapper: 9:16 mobile canvas frame */}
      <div
        className="
          relative
          z-10
          w-full h-full
          sm:w-[412px]
          sm:h-[min(94vh,850px)]
          sm:rounded-2xl
          overflow-hidden
          bg-[#18181b]
          border border-white/10
          sm:shadow-[0_0_60px_rgba(0,0,0,0.9),0_0_35px_-5px_var(--accent-primary)]
          flex flex-col
        "
        onMouseDown={() => setIsPaused(true)}
        onMouseUp={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Story Progress Bar */}
        <div className="absolute top-0 left-0 z-30 w-full px-3 pt-3 flex gap-1">
          <div className="h-[2.5px] flex-1 overflow-hidden rounded-full bg-white/25 backdrop-blur-sm">
            <div
              className={`h-full w-full rounded-full origin-left ${
                isPaused ? "animation-paused" : ""
              }`}
              style={{
                backgroundColor: "var(--accent-primary)",
                boxShadow: "0 0 8px var(--accent-primary)",
                animation: "storyProgress 15s linear forwards",
              }}
            />
          </div>
        </div>

        {/* Top Header Bar */}
        <div className="absolute top-5 left-0 z-30 flex w-full items-center justify-between px-3 text-white">
          {/* Left: Avatar + User Details */}
          <div className="flex items-center gap-3">
            {/* Story Ring Avatar with accent ring */}
            <div
              className="p-[2px] rounded-full shadow-sm"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary), #34A853)",
              }}
            >
              <div className="h-10 w-10 rounded-full overflow-hidden border-[1.5px] border-black/60 bg-neutral-800">
                <img
                  src={me}
                  alt="Joydeep Paul"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Identity Meta */}
            <div className="flex flex-col justify-center leading-tight">
              <div className="flex items-center gap-1.5">
                <a
                  href="https://www.instagram.com/mr.paul_16/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold tracking-tight text-white hover:text-[var(--accent-secondary)] transition drop-shadow"
                >
                  mr.paul_16
                </a>
                <span className="text-xs text-white/60 font-normal drop-shadow">
                  • 2h
                </span>
              </div>
              <span className="text-[11px] font-normal flex gap-1 text-white/70 tracking-wide drop-shadow">
                <Music size={14} /> <p>Lorem ipsum dolor sit.</p>
              </span>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-0.5">
            <button
              type="button"
              className="p-2 rounded-full hover:bg-white/10 active:bg-white/20 text-white transition active:scale-90"
              aria-label="Story options"
            >
              <MoreHorizontal size={20} className="drop-shadow" />
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="p-2 rounded-full hover:bg-white/10 active:bg-white/20 text-white transition active:scale-90"
              aria-label="Close story"
            >
              <X size={22} className="drop-shadow" />
            </button>
          </div>
        </div>

        {/* Story Body / Media Canvas */}
        <div className="relative flex-1 flex items-center justify-center bg-gradient-to-b from-stone-900 via-neutral-900 to-black">
          {/* Subtle vignette gradients so text & controls pop */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none z-10" />

          {/* Double-tap / Like burst animation */}
          {showHeartBurst && (
            <div className="absolute z-20 pointer-events-none animate-heart-burst">
              <Heart className="w-24 h-24 fill-[var(--google-red)] text-[var(--google-red)] drop-shadow-[0_0_20px_var(--google-red)]" />
            </div>
          )}

          {/* Main Story Content */}
          <div className="relative z-10 h-full w-full">
            <img src={me1} alt="Story" className="h-full w-full object-cover" />
          </div>

          {/* BOTTOM INTERACTION DOCK: GLASSMORPHISM */}
          <div className="absolute bottom-4 inset-x-3.5 z-30">
            <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/[0.07] backdrop-blur-xl border border-white/[0.18] shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_1px_0_rgba(255,255,255,0.2)]">
              {/* Reply Form */}
              <form onSubmit={handleReply} className="flex-1">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    placeholder="Send message"
                    className={`
                      w-full h-10 pl-4 rounded-full
                      bg-white/[0.08] backdrop-blur-md
                      border border-white/[0.12]
                      text-xs sm:text-sm text-white placeholder:text-white/50
                      outline-none transition-all duration-300
                      focus:border-[var(--accent-primary)] focus:bg-white/[0.14] focus:shadow-[0_0_15px_rgba(102,187,106,0.3)]
                      ${reply.trim() ? "pr-16" : "pr-3"}
                    `}
                  />

                  {/* Glassmorphic Send Button */}
                  <button
                    type="submit"
                    disabled={!reply.trim()}
                    style={{
                      backgroundColor: "var(--accent-primary)",
                      color: "#ffffff",
                    }}
                    className={`
                      absolute right-1 h-8 px-3.5
                      rounded-full text-xs font-semibold
                      shadow-[0_2px_10px_rgba(0,0,0,0.25)]
                      backdrop-blur-sm
                      transition-all duration-200 ease-out flex items-center justify-center
                      active:scale-95
                      ${
                        reply.trim()
                          ? "opacity-100 scale-100 translate-x-0 pointer-events-auto"
                          : "opacity-0 scale-75 translate-x-2 pointer-events-none"
                      }
                    `}
                  >
                    Send
                  </button>
                </div>
              </form>

              {/* Actions Wrapper (Like Button) */}
              <div
                className={`
                  flex items-center transition-all duration-300 ease-out overflow-hidden
                  ${
                    reply.trim()
                      ? "max-w-0 opacity-0 pointer-events-none gap-0"
                      : "max-w-[48px] opacity-100 pr-1"
                  }
                `}
              >
                <button
                  type="button"
                  onClick={handleLike}
                  className="p-2 rounded-full hover:bg-white/10 active:scale-75 transition duration-150 shrink-0"
                  aria-label="Like story"
                >
                  <Heart
                    size={22}
                    className={`transition-all duration-200 ${
                      isLiked
                        ? "fill-[var(--google-red)] stroke-[var(--google-red)] scale-110 drop-shadow-[0_0_12px_var(--google-red)]"
                        : "text-white/85 hover:text-white"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded CSS Animations */}
      <style>
        {`
          @keyframes storyProgress {
            from {
              transform: scaleX(0);
            }
            to {
              transform: scaleX(1);
            }
          }

          .animation-paused {
            animation-play-state: paused !important;
          }

          @keyframes heartBurst {
            0% {
              transform: scale(0.4);
              opacity: 0;
            }
            50% {
              transform: scale(1.15);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 0;
            }
          }

          .animate-heart-burst {
            animation: heartBurst 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Story;
