"use client";
import { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Pause video when it scrolls out of view
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If less than 30% of the video is visible, pause it
          if (entry.intersectionRatio < 0.3 && !video.paused) {
            video.pause();
          }
        });
      },
      {
        threshold: [0, 0.3, 0.5, 0.7, 1], // fire at multiple visibility levels
      }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50/50 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Company Video</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            See How We Build Digital Products
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            A short look at our process, our team, and the impact we deliver for clients worldwide.
          </p>
        </div>

        {/* Video Container — ref for IntersectionObserver */}
        <div
          ref={containerRef}
          className="relative group rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-200/80 bg-slate-900"
        >
          <video
            ref={videoRef}
            className="w-full h-auto aspect-video object-cover"
            controls
            playsInline
            loop
            preload="metadata"
            poster="/video-poster.jpg"
          >
            {/* ⚠️ underscore, not hyphen — matches your actual file */}
            <source src="/company_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}