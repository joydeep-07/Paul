import React, { useEffect, useState } from "react";

const Scale = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-0 top-0 z-50 h-screen w-[2px] bg-[var(--border-light)]/40">
      <div
        className="absolute top-0 left-0 w-full bg-[var(--accent-primary)] origin-top transition-transform duration-100"
        style={{
          height: `${progress}%`,
        }}
      />
    </div>
  );
};

export default Scale;
