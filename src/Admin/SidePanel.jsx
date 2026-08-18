import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const SidePanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const panelRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Close when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isOpen &&
        panelRef.current &&
        !panelRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const handleNavigation = (path) => {
    setIsOpen(false);

    // Small delay allows the panel's close animation to begin
    setTimeout(() => {
      navigate(path);
    }, 100);
  };

  const handleSignOut = () => {
    setIsOpen(false);

    setTimeout(() => {
      localStorage.removeItem("adminAuthenticated");
      navigate("/", { replace: true });
    }, 150);
  };

  const menuItems = [
    {
      label: "Messages",
      icon: MessageSquare,
      path: "/admin/messages",
    },
    {
      label: "Control",
      icon: Settings,
      path: "/admin/control",
    },
  ];

  return (
    <motion.aside
      ref={panelRef}
      initial={false}
      animate={{
        width: isOpen ? 210 : 58,
      }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        fixed
        left-4
        top-1/2
        z-50
        -translate-y-1/2
        overflow-hidden
        rounded-sm
        border
        border-black/10
       
        shadow-xl
        shadow-black/5
        backdrop-blur-xl
        dark:border-white/10
        dark:bg-[#161616]/90
      "
    >
      <div className="flex min-h-[360px] flex-col p-2">
        {/* Toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="
            absolute
            right-2
            top-3
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-lg
            text-gray-500
            transition-colors
            hover:bg-black/5
            hover:text-black
            dark:hover:bg-white/10
            dark:hover:text-white
          "
          aria-label={isOpen ? "Collapse panel" : "Expand panel"}
        >
          {isOpen ? <ChevronLeft size={17} /> : <ChevronRight size={17} />}
        </button>

        {/* Navigation */}
        <div className="mt-12 flex flex-col gap-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <motion.button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                whileTap={{ scale: 0.95 }}
                className={`
                  flex
                  h-11
                  items-center
                  gap-3
                  rounded-xl
                  px-3
                  cursor-pointer
                  text-sm
                  font-medium
                  transition-colors
                  ${
                    isActive
                      ? "text-[var(--accent-primary)] "
                      : "text-[var(--text-secondary)] "
                  }
                `}
              >
                <Icon size={18} className="shrink-0" />

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.span
                      initial={{
                        opacity: 0,
                        x: -8,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: -8,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="whitespace-nowrap"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>

        {/* Sign Out */}
        <div className="mt-auto">
          <div className="mb-2 h-px bg-black/10 dark:bg-white/10" />

          <motion.button
            onClick={handleSignOut}
            whileTap={{ scale: 0.95 }}
            className="
              flex
              h-11
              w-full
              items-center
              gap-3
              rounded-xl
              px-3
              text-sm
              font-medium
              text-red-500
              transition-colors
              hover:bg-red-500/10
            "
          >
            <LogOut size={18} className="shrink-0" />

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.span
                  initial={{
                    opacity: 0,
                    x: -8,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -8,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="whitespace-nowrap"
                >
                  Sign Out
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.aside>
  );
};

export default SidePanel;
