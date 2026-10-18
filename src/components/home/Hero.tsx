"use client";
import { Fragment } from "react";
import type { Banner, Partner, TechStackItem, Stat } from "@/lib/types";

const MARQUEE_COPIES = 4; // keep in sync with the -25% keyframes in Hero.module.css

/* ───────────────────────── Fallback marquee data ───────────────────────── */

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

export default function Hero({ partners, techStack, stats }: HeroProps) {
  const partnersList = partners && partners.length > 0 ? partners : FALLBACK_PARTNERS;
  const techStackList = techStack && techStack.length > 0 ? techStack : FALLBACK_TECH_STACK;
  const statsList = stats && stats.length > 0 ? stats : FALLBACK_STATS;

  return (
    <section className="relative overflow-hidden bg-white">

      {/* ── STATIC HTML BANNER (Using iFrame) ── */}
      {/* The aspect ratio matches the 1920x800 design of your HTML file */}
      <div className="relative w-full aspect-[1920/800] bg-[#050b1c]">
        <iframe
          src="/nb-banner.html"
          title="NB Services Banner"
          className="absolute inset-0 w-full h-full border-0"
          scrolling="no"
        />
      </div>

      {/* BANNER ROW 1 — Partners */}
      <div className="relative w-full overflow-hidden bg-white/50 border-t border-slate-100 py-5">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white/80 to-transparent z-10" />

        <div className="flex w-max nb-marquee-forward">
          {Array.from({ length: MARQUEE_COPIES }, (_, copy) => (
            <div key={copy} className="flex shrink-0" aria-hidden={copy > 0}>
              {partnersList.map((p) => (
                <div key={p.id} className="flex items-center gap-2 mx-10 cursor-default select-none">
                  {p.emoji && <span className="text-xl">{p.emoji}</span>}
                  <span
                    className="nb-partner-name text-xl md:text-2xl font-extrabold text-slate-300 tracking-widest uppercase transition-all duration-300"
                  >
                    {p.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* BANNER ROW 2 — Tech Stack */}
      <div className="relative w-full overflow-hidden bg-white border-t border-slate-100 py-6">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max nb-marquee-reverse">
          {Array.from({ length: MARQUEE_COPIES }, (_, copy) => (
            <div key={copy} className="flex shrink-0" aria-hidden={copy > 0}>
              {techStackList.map((tech) => (
                <div
                  key={tech.id}
                  className="nb-float-badge flex items-center gap-2 mx-4 px-4 py-2 rounded-xl border bg-white cursor-default select-none transition-transform duration-300 hover:scale-110"
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
          ))}
        </div>
      </div>

      {/* BANNER ROW 3 — Stats Ticker */}
      <div className="relative w-full overflow-hidden bg-white border-t border-slate-100 py-5">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max nb-marquee-fast">
          {Array.from({ length: MARQUEE_COPIES }, (_, copy) => (
            <div key={copy} className="flex shrink-0" aria-hidden={copy > 0}>
              {statsList.map((s) => (
                <div
                  key={s.id}
                  className="nb-stat-card flex items-center gap-3 mx-8 px-5 py-2 rounded-full bg-slate-50 border border-slate-100 cursor-default select-none"
                >
                  <span className="text-xl">{s.icon}</span>
                  <span className="text-indigo-600 font-extrabold text-lg leading-none">{s.value}</span>
                  <span className="text-slate-500 text-sm font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}