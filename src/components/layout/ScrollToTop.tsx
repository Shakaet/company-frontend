"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [overFooter, setOverFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // ── 1. Show/hide based on scroll ──
      setIsVisible(window.scrollY > 300);

      // ── 2. Detect if button overlaps the footer ──
      const footer = document.querySelector("footer");
      if (!footer) {
        setOverFooter(false);
        return;
      }

      const footerRect = footer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const BUTTON_OFFSET = 204;
      const BUTTON_CENTER_Y = viewportHeight - BUTTON_OFFSET;

      setOverFooter(footerRect.top <= BUTTON_CENTER_Y);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`group cursor-pointer fixed bottom-[176px] right-6 md:right-15 z-40 p-4 rounded-full transition-all duration-300 ${
        isVisible
          ? "opacity-100 pointer-events-auto translate-y-0"
          : "opacity-0 pointer-events-none translate-y-4"
      } hover:scale-110`}
    >
      {/* Blue layer — default */}
      <span
        aria-hidden
        className={`absolute inset-0 rounded-full bg-blue-600 shadow-lg shadow-blue-400/40 transition-all duration-700 ease-in-out group-hover:bg-blue-700 ${
          overFooter ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* White layer — over footer */}
      <span
        aria-hidden
        className={`absolute inset-0 rounded-full bg-white ring-2 ring-white/50 shadow-lg shadow-blue-900/20 transition-all duration-700 ease-in-out group-hover:bg-blue-50 ${
          overFooter ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Icon — its color crossfades at the same speed */}
      <ChevronUp
        className={`relative w-6 h-6 transition-colors duration-700 ease-in-out ${
          overFooter ? "text-blue-600" : "text-white"
        }`}
      />
    </button>
  );
}