"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`cursor-pointer fixed bottom-[96px] right-6 md:right-15 z-40 p-4 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-400/40 hover:bg-blue-700 hover:scale-110 transition-all duration-300 ${
        isVisible ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-4"
      }`}
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
}
