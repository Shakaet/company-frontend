"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Banner, Partner, TechStackItem, Stat } from "@/lib/types";

/** Fallback slides */
const FALLBACK_SLIDES: Banner[] = [
  {
    id: "fallback-1",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1920&h=1080&fit=crop&q=90",
    alt: "AI and software development team collaborating",
  },
  {
    id: "fallback-2",
    image:
      "https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?w=1920&h=1080&fit=crop&q=90",
    alt: "Modern IT office with developers working",
  },
];

/** Fallback partners */
const FALLBACK_PARTNERS: Partner[] = [
  { id: "p1", name: "TechCorp", emoji: "🏢" },
  { id: "p2", name: "InnovateX", emoji: "💡" },
  { id: "p3", name: "CloudSync", emoji: "☁️" },
  { id: "p4", name: "NextGen", emoji: "⚡" },
  { id: "p5", name: "DataFlow", emoji: "📊" },
  { id: "p6", name: "AppWorks", emoji: "📱" },
  { id: "p7", name: "CodeBase", emoji: "💻" },
  { id: "p8", name: "PixelForge", emoji: "🎨" },
  { id: "p9", name: "SwiftLab", emoji: "🚀" },
];

/** Fallback tech stack */
const FALLBACK_TECH_STACK: TechStackItem[] = [
  { id: "t1", name: "React", color: "#61DAFB", bg: "#0a1929", icon: "⚛️" },
  { id: "t2", name: "Next.js", color: "#ffffff", bg: "#000000", icon: "▲" },
  { id: "t3", name: "TypeScript", color: "#3178C6", bg: "#1a2a3a", icon: "TS" },
  { id: "t4", name: "Node.js", color: "#68A063", bg: "#0f2010", icon: "🟩" },
  { id: "t5", name: "MongoDB", color: "#47A248", bg: "#0d1f0d", icon: "🍃" },
  { id: "t6", name: "AWS", color: "#FF9900", bg: "#1a1200", icon: "☁️" },
  { id: "t7", name: "Docker", color: "#2496ED", bg: "#071929", icon: "🐳" },
  { id: "t8", name: "Figma", color: "#F24E1E", bg: "#2a0d08", icon: "🎨" },
  { id: "t9", name: "GraphQL", color: "#E535AB", bg: "#1a0014", icon: "◈" },
  { id: "t10", name: "Tailwind", color: "#38BDF8", bg: "#071523", icon: "🌊" },
];

/** Fallback stats */
const FALLBACK_STATS: Stat[] = [
  { id: "s1", label: "Projects Delivered", value: "250+", icon: "🎯" },
  { id: "s2", label: "Happy Clients", value: "120+", icon: "😊" },
  { id: "s3", label: "Years of Experience", value: "8+", icon: "📅" },
  { id: "s4", label: "Team Members", value: "35+", icon: "👥" },
  { id: "s5", label: "Countries Served", value: "18+", icon: "🌍" },
  { id: "s6", label: "Lines of Code", value: "2M+", icon: "💻" },
  { id: "s7", label: "5-Star Reviews", value: "98%", icon: "⭐" },
  { id: "s8", label: "Uptime SLA", value: "99.9%", icon: "🔒" },
];

interface HeroProps {
  banners?: Banner[];
  partners?: Partner[];
  techStack?: TechStackItem[];
  stats?: Stat[];
}

export default function Hero({ banners, partners, techStack, stats }: HeroProps) {
  const partnersList =
    partners && partners.length > 0 ? partners : FALLBACK_PARTNERS;
  const techStackList =
    techStack && techStack.length > 0 ? techStack : FALLBACK_TECH_STACK;
  const statsList =
    stats && stats.length > 0 ? stats : FALLBACK_STATS;

  const slides = banners && banners.length > 0 ? banners : FALLBACK_SLIDES;
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

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [slides.length]);

  const goTo = (index: number) => {
    setCurrent((index + slides.length) % slides.length);
    startAutoSlide();
  };

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

  const onMouseDown = (e: React.MouseEvent) => onDragStart(e.clientX);
  const onMouseUp = (e: React.MouseEvent) => onDragEnd(e.clientX);
  const onMouseMove = (e: React.MouseEvent) => {
    if (dragStartX.current !== null) isDragging.current = true;
    void e;
  };

  const onTouchStart = (e: React.TouchEvent) => onDragStart(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => onDragEnd(e.changedTouches[0].clientX);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee-forward {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-forward {
          animation: marquee-forward 35s linear infinite;
        }
        .marquee-forward:hover { animation-play-state: paused; }

        @keyframes marquee-reverse {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-reverse {
          animation: marquee-reverse 28s linear infinite;
        }
        .marquee-reverse:hover { animation-play-state: paused; }

        @keyframes marquee-fast {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-fast {
          animation: marquee-fast 18s linear infinite;
        }

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

        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(99,102,241,0); }
          50%       { box-shadow: 0 0 18px 4px rgba(99,102,241,0.25); }
        }
        .stat-card {
          animation: glow-pulse 2.5s ease-in-out infinite;
        }
        .stat-card:nth-child(2n) { animation-delay: 0.6s; }
        .stat-card:nth-child(3n) { animation-delay: 1.2s; }

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
        <div
          className="flex h-full w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative shrink-0 pointer-events-none overflow-hidden"
              style={{ width: "100vw", height: "100%" }}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center"
                style={{ userSelect: "none" }}
                draggable={false}
                unoptimized={false}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/30 to-slate-950/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 items-center">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${i === current
                ? "w-8 h-2.5 bg-white shadow-md"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
                }`}
            />
          ))}
        </div>

        {/* Slide counter */}
        <div className="absolute top-5 right-5 z-20 text-white/70 text-sm font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
          {current + 1} / {slides.length}
        </div>
      </div>

      {/* BANNER ROW 1 — Partners */}
      <div className="relative w-full overflow-hidden bg-white/50 border-t border-white/70 py-5">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white/80 to-transparent z-10" />

        <div className="flex w-max marquee-forward">
          {[...partnersList, ...partnersList].map((p, i) => (
            <div key={`${p.id}-${i}`} className="flex items-center gap-2 mx-10 cursor-default select-none">
              {p.emoji && <span className="text-xl">{p.emoji}</span>}
              <span className="partner-name text-xl md:text-2xl font-extrabold text-slate-300 tracking-widest uppercase transition-all duration-300">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* BANNER ROW 2 — Tech Stack */}
      <div className="relative w-full overflow-hidden bg-white border-t border-slate-100 py-6">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max marquee-reverse">
          {[...techStackList, ...techStackList].map((tech, i) => (
            <div
              key={`${tech.id}-${i}`}
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

      {/* BANNER ROW 3 — Stats Ticker */}
      <div className="relative w-full overflow-hidden bg-white border-t border-slate-100 py-5">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max marquee-fast">
          {[...statsList, ...statsList].map((s, i) => (
            <div
              key={`${s.id}-${i}`}
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