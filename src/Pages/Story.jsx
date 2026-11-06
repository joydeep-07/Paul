import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import me from "../assets/images/main3.png";
import me1 from "../assets/images/main2.png";
import {
  Heart,
  Send,
  X,
  MoreHorizontal,
  Music,
  Volume2,
  VolumeX,
  ChevronDown,
} from "lucide-react";

const storiesData = [
  {
    id: 1,
    type: "image",
    media:
      "https://i.pinimg.com/736x/38/26/68/382668d50d51739ebefae2df8979f085.jpg",
    duration: 20,
    music: {
      title: "Tangled Life - SoundHelix",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
  },
];

const Story = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reply, setReply] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showHeartBurst, setShowHeartBurst] = useState(false);

  const timerRef = useRef(null);
  const audioRef = useRef(null);
  const videoRef = useRef(null);

  const currentStory = storiesData[currentIndex];

  const handleNextStory = () => {
    if (currentIndex < storiesData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      navigate(-1);
    }
  };

  const handlePrevStory = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Sync background audio with story changes
  useEffect(() => {
    if (audioRef.current && currentStory.music) {
      audioRef.current.src = currentStory.music.url;
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        // Handle browser autoplay policy restrictions
        setIsMuted(true);
      });
    }
  }, [currentIndex, currentStory.music]);

  // Audio pause/play tracking
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPaused) {
      audioRef.current.pause();
      if (videoRef.current) videoRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
      if (videoRef.current) videoRef.current.play().catch(() => {});
    }
  }, [isPaused]);

  // Handle Mute state
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Auto-advance timer (recalculates on step or pause change)
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setTimeout(() => {
      handleNextStory();
    }, currentStory.duration * 1000);

    return () => clearTimeout(timerRef.current);
  }, [currentIndex, isPaused, currentStory.duration]);

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
      {/* Background Audio element */}
      <audio ref={audioRef} loop />

      {/* Ambient Backlight */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[850px] rounded-full opacity-35 blur-[120px] transition-all duration-700"
          style={{
            background:
              "radial-gradient(circle, var(--accent-primary) 0%, var(--accent-secondary) 40%, transparent 75%)",
          }}
        />
        <div className="absolute inset-0 opacity-20 filter blur-[90px] scale-125">
          {currentStory.type === "image" ? (
            <img
              src={currentStory.media}
              alt=""
              className="w-full h-full object-cover"
              aria-hidden="true"
            />
          ) : (
            <div className="w-full h-full bg-black/50" />
          )}
        </div>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-2xl" />
      </div>

      {/* Main Container Frame */}
      <div
        className="
          relative z-10 w-full h-full sm:w-[412px] sm:h-[min(94vh,850px)] sm:rounded-2xl
          overflow-hidden
         
          flex flex-col
        "
        onMouseDown={() => setIsPaused(true)}
        onMouseUp={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Story Progress Bars (1 bar per story) */}
        <div className="absolute top-0 left-0 z-30 w-full px-3 pt-3 flex gap-1.5">
          {storiesData.map((story, idx) => (
            <div
              key={story.id}
              className="h-[2.5px] flex-1 overflow-hidden rounded-full bg-white/25 backdrop-blur-sm relative"
            >
              <div
                className={`h-full w-full rounded-full origin-left ${
                  idx === currentIndex && isPaused ? "animation-paused" : ""
                }`}
                style={{
                  backgroundColor: "var(--accent-primary, #ffffff)",
                  boxShadow: "0 0 8px var(--accent-primary, #ffffff)",
                  transform:
                    idx < currentIndex
                      ? "scaleX(1)"
                      : idx > currentIndex
                        ? "scaleX(0)"
                        : undefined,
                  animation:
                    idx === currentIndex
                      ? `storyProgress ${story.duration}s linear forwards`
                      : "none",
                }}
              />
            </div>
          ))}
        </div>

        {/* Top Header Bar */}
        <div className="absolute top-5 left-0 z-30 flex w-full items-center justify-between px-3 mt-1 text-white">
          <div className="flex items-center gap-3">
            <div
              className="p-[2px] rounded-full shadow-sm"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary), #34A853)",
              }}
            >
              <div className="h-11 w-11 rounded-full overflow-hidden">
                <img
                  src={me}
                  alt="Joydeep Paul"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center leading-relaxed">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold tracking-tight text-white drop-shadow">
                  @ mr.paul_16
                </span>
                <span className="text-xs text-white/60 font-normal drop-shadow">
                  • 2h
                </span>
              </div>
              <span className="text-[11px] font-normal flex items-center gap-1 text-white/70 tracking-wide drop-shadow truncate max-w-[180px]">
                <Music size={12} className="shrink-0" />
                <span className="truncate">
                  {currentStory.music?.title || "Original Audio"}
                </span>
              </span>
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-0.5">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsMuted((prev) => !prev);
              }}
              className="p-2 rounded-full hover:bg-white/10 text-white transition active:scale-90"
              aria-label="Toggle sound"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <button
              type="button"
              className="p-2 rounded-full hover:bg-white/10 text-white transition active:scale-90"
              aria-label="Story options"
            >
              <MoreHorizontal size={20} className="drop-shadow" />
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="p-2 rounded-full hover:bg-white/10 text-white transition active:scale-90"
              aria-label="Close story"
            >
              <X size={22} className="drop-shadow" />
            </button>
          </div>
        </div>

        {/* Media Canvas with Tap Zones for Navigation */}
        <div className="relative flex-1 flex items-center justify-center bg-black overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none z-10" />

          {/* Left/Right Tap Zones for Story Skipping */}
          <div
            className="absolute top-16 bottom-20 left-0 w-1/3 z-20 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevStory();
            }}
          />
          <div
            className="absolute top-16 bottom-20 right-0 w-2/3 z-20 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handleNextStory();
            }}
          />

          {showHeartBurst && (
            <div className="absolute z-30 pointer-events-none animate-heart-burst">
              <Heart className="w-24 h-24 fill-[var(--google-red,#ef4444)] text-[var(--google-red,#ef4444)] drop-shadow-[0_0_20px_var(--google-red,#ef4444)]" />
            </div>
          )}

          {/* Active Story Render */}
          <div className="relative z-0 h-full w-full flex items-center justify-center">
            {currentStory.type === "image" ? (
              <img
                key={currentStory.id}
                src={currentStory.media}
                alt="Story"
                className="h-full w-full object-cover"
              />
            ) : (
              <video
                key={currentStory.id}
                ref={videoRef}
                src={currentStory.media}
                autoPlay
                playsInline
                muted // Background audio tag handles sound to allow cross-media music sync
                className="h-full w-full object-cover"
              />
            )}
          </div>

          {/* Bottom Interaction Dock */}
          <div className="absolute bottom-4 inset-x-3.5 z-30">
          <div className=" flex justify-center">
           <ChevronDown size={20} />
          </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes storyProgress {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
          .animation-paused {
            animation-play-state: paused !important;
          }
          @keyframes heartBurst {
            0% { transform: scale(0.4); opacity: 0; }
            50% { transform: scale(1.15); opacity: 1; }
            100% { transform: scale(1); opacity: 0; }
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
