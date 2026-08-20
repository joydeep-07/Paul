import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CursorFollower = ({
  enlargedIds = [],
  ignoreIds = [], // ← new prop
}) => {
  const cursorRef = useRef(null);
  const activeElementRef = useRef(null);

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

      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (!element) return;

      // Check if the element (or its parent) is in ignoreIds
      const isIgnored =
        ignoreIds.includes(element.id) ||
        ignoreIds.some((id) => element.closest(`#${CSS.escape(id)}`));

      if (isIgnored) {
        // Force normal size when hovering ignored elements
        if (activeElementRef.current !== null) {
          activeElementRef.current = null;
          gsap.to(cursor, {
            width: 18,
            height: 18,
            duration: 0.28,
            ease: "power2.out",
            overwrite: "auto",
          });
        }
        return;
      }

      const target = element.closest("a, button, [role='button']");
      const isDefaultInteractive = Boolean(target);

      const isCustomInteractive =
        enlargedIds.includes(element.id) ||
        enlargedIds.some((id) => element.closest(`#${CSS.escape(id)}`));

      const shouldEnlarge = isDefaultInteractive || isCustomInteractive;
      const activeElement = shouldEnlarge ? target || element : null;

      if (activeElement !== activeElementRef.current) {
        activeElementRef.current = activeElement;

        gsap.to(cursor, {
          width: shouldEnlarge ? 70 : 18,
          height: shouldEnlarge ? 70 : 18,
          duration: 0.28,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      xTo.kill?.();
      yTo.kill?.();
    };
  }, [enlargedIds, ignoreIds]);

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
