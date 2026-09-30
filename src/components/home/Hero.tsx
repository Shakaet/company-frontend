"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const partners = [
    { name: "TechCorp", emoji: "🏢" },
    { name: "InnovateX", emoji: "💡" },
    { name: "CloudSync", emoji: "☁️" },
    { name: "NextGen", emoji: "⚡" },
    { name: "DataFlow", emoji: "📊" },
    { name: "AppWorks", emoji: "📱" },
    { name: "CodeBase", emoji: "💻" },
    { name: "PixelForge", emoji: "🎨" },
    { name: "SwiftLab", emoji: "🚀" },
  ];

  const techStack = [
    { name: "React", color: "#61DAFB", bg: "#0a1929", icon: "⚛️" },
    { name: "Next.js", color: "#ffffff", bg: "#000000", icon: "▲" },
    { name: "TypeScript", color: "#3178C6", bg: "#1a2a3a", icon: "TS" },
    { name: "Node.js", color: "#68A063", bg: "#0f2010", icon: "🟩" },
    { name: "MongoDB", color: "#47A248", bg: "#0d1f0d", icon: "🍃" },
    { name: "AWS", color: "#FF9900", bg: "#1a1200", icon: "☁️" },
    { name: "Docker", color: "#2496ED", bg: "#071929", icon: "🐳" },
    { name: "Figma", color: "#F24E1E", bg: "#2a0d08", icon: "🎨" },
    { name: "GraphQL", color: "#E535AB", bg: "#1a0014", icon: "◈" },
    { name: "Tailwind", color: "#38BDF8", bg: "#071523", icon: "🌊" },
  ];

  const stats = [
    { label: "Projects Delivered", value: "250+", icon: "🎯" },
    { label: "Happy Clients", value: "120+", icon: "😊" },
    { label: "Years of Experience", value: "8+", icon: "📅" },
    { label: "Team Members", value: "35+", icon: "👥" },
    { label: "Countries Served", value: "18+", icon: "🌍" },
    { label: "Lines of Code", value: "2M+", icon: "💻" },
    { label: "5-Star Reviews", value: "98%", icon: "⭐" },
    { label: "Uptime SLA", value: "99.9%", icon: "🔒" },
  ];

  const slides = [
    {
      src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1920&h=1080&fit=crop&crop=center&q=90",
      alt: "AI and software development team collaborating",
    },
    {
      src: "https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?w=1920&h=1080&fit=crop&crop=center&q=90",
      alt: "Modern IT office with developers working",
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=1080&fit=crop&crop=center&q=90",
      alt: "Tech startup team in modern workspace",
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop&crop=center&q=90",
      alt: "Circuit board and technology infrastructure",
    },
  ];

  const [current, setCurrent] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);
  const autoSlideRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoSlide = () => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  // Auto-slide
  useEffect(() => {
    startAutoSlide();
    return () => { if (autoSlideRef.current) clearInterval(autoSlideRef.current); };
  }, [slides.length]);

  const goTo = (index: number) => {
    setCurrent((index + slides.length) % slides.length);
    startAutoSlide(); // reset timer on manual nav
  };

  // ── Drag / Swipe handlers ──
  const onDragStart = (clientX: number) => {
    dragStartX.current = clientX;
    isDragging.current = false;
  };

  const onDragEnd = (clientX: number) => {
    if (dragStartX.current === null) return;
    const delta = dragStartX.current - clientX;
    if (Math.abs(delta) > 50) {
      goTo(delta > 0 ? current + 1 : current - 1);
    }
    dragStartX.current = null;
  };

  // Mouse events
  const onMouseDown = (e: React.MouseEvent) => onDragStart(e.clientX);
  const onMouseUp   = (e: React.MouseEvent) => onDragEnd(e.clientX);
  const onMouseMove = (e: React.MouseEvent) => {
    if (dragStartX.current !== null) isDragging.current = true;
    void e;
  };

  // Touch events
  const onTouchStart = (e: React.TouchEvent) => onDragStart(e.touches[0].clientX);
  const onTouchEnd   = (e: React.TouchEvent) => onDragEnd(e.changedTouches[0].clientX);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Keyframe Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        /* Row 1 — forward slide */
        @keyframes marquee-forward {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-forward {
          animation: marquee-forward 35s linear infinite;
        }
        .marquee-forward:hover { animation-play-state: paused; }

        /* Row 2 — reverse slide */
        @keyframes marquee-reverse {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-reverse {
          animation: marquee-reverse 28s linear infinite;
        }
        .marquee-reverse:hover { animation-play-state: paused; }

        /* Row 3 — stats ticker (faster) */
        @keyframes marquee-fast {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-fast {
          animation: marquee-fast 18s linear infinite;
        }

        /* Floating pulse on tech badges */
        @keyframes float-up-down {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        .float-badge {
          animation: float-up-down 3s ease-in-out infinite;
        }
        .float-badge:nth-child(2n)   { animation-delay: 0.4s; }
        .float-badge:nth-child(3n)   { animation-delay: 0.8s; }
        .float-badge:nth-child(4n)   { animation-delay: 1.2s; }
        .float-badge:nth-child(5n)   { animation-delay: 1.6s; }

        /* Glow pulse on stat cards */
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(99,102,241,0); }
          50%       { box-shadow: 0 0 18px 4px rgba(99,102,241,0.25); }
        }
        .stat-card {
          animation: glow-pulse 2.5s ease-in-out infinite;
        }
        .stat-card:nth-child(2n) { animation-delay: 0.6s; }
        .stat-card:nth-child(3n) { animation-delay: 1.2s; }

        /* Shimmer on partner names */
        @keyframes shimmer-text {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .partner-name:hover {
          background: linear-gradient(90deg, #94a3b8, #6366f1, #3b82f6, #94a3b8);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer-text 1.5s linear infinite;
        }
      `}} />

      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-200 rounded-full blur-3xl opacity-30" />

      {/* ── Hero Image Slider ── */}
      <div
        className="relative w-full select-none cursor-grab active:cursor-grabbing"
        style={{ height: "85vh", minHeight: "520px", maxHeight: "960px" }}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onMouseLeave={() => { dragStartX.current = null; }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Slides wrapper — full width flex strip */}
        <div
          className="flex h-full w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.src}
              className="relative shrink-0 pointer-events-none overflow-hidden"
              style={{ width: "100vw", height: "100%" }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center"
                style={{ userSelect: "none" }}
                draggable={false}
                unoptimized={false}
              />
              {/* Gradient overlay — left-to-right darkening for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/30 to-slate-950/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        {/* ── Dot indicators ── */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 items-center">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-2.5 bg-white shadow-md"
                  : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* ── Slide counter ── */}
        <div className="absolute top-5 right-5 z-20 text-white/70 text-sm font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
          {current + 1} / {slides.length}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────
          BANNER ROW 1 — Partner / Client Names (Forward)
      ───────────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden bg-white/50 border-t border-white/70 py-5">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white/80 to-transparent z-10" />

        <div className="flex w-max marquee-forward">
          {[...partners, ...partners].map((p, i) => (
            <div key={i} className="flex items-center gap-2 mx-10 cursor-default select-none">
              <span className="text-xl">{p.emoji}</span>
              <span className="partner-name text-xl md:text-2xl font-extrabold text-slate-300 tracking-widest uppercase transition-all duration-300">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────
          BANNER ROW 2 — Tech Stack Badges (Reverse + Float)
      ───────────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden bg-white border-t border-slate-100 py-6">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max marquee-reverse">
          {[...techStack, ...techStack].map((tech, i) => (
            <div
              key={i}
              className="float-badge flex items-center gap-2 mx-4 px-4 py-2 rounded-xl border bg-white cursor-default select-none transition-transform duration-300 hover:scale-110"
              style={{
                borderColor: tech.color + "60",
                boxShadow: `0 2px 12px ${tech.color}18`,
              }}
            >
              <span className="text-lg leading-none">{tech.icon}</span>
              <span className="text-sm font-bold tracking-wide" style={{ color: tech.color }}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────
          BANNER ROW 3 — Animated Stats Ticker (Fast + Glow)
      ───────────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden bg-white border-t border-slate-100 py-5">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max marquee-fast">
          {[...stats, ...stats].map((s, i) => (
            <div
              key={i}
              className="stat-card flex items-center gap-3 mx-8 px-5 py-2 rounded-full bg-slate-50 border border-slate-100 cursor-default select-none"
            >
              <span className="text-xl">{s.icon}</span>
              <span className="text-indigo-600 font-extrabold text-lg leading-none">{s.value}</span>
              <span className="text-slate-500 text-sm font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
