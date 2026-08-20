import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CursorFollower = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      cursor.style.display = "none";
      return;
    }

    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.32,
      ease: "power2.out",
    });
    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.32,
      ease: "power2.out",
    });

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      xTo.kill?.();
      yTo.kill?.();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[9999]
        w-[18px]
        h-[18px]
        rounded-full
        bg-white
        mix-blend-difference
        will-change-transform
      "
    />
  );
};

export default CursorFollower;
