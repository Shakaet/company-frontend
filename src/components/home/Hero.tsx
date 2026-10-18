"use client";
import Image from "next/image";
import Link from "next/link";
import { Sora } from "next/font/google";
import { Fragment, useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import type { Banner, Partner, TechStackItem, Stat } from "@/lib/types";

const sora = Sora({ subsets: ["latin"], weight: ["400", "600", "700"], display: "swap" });

const BRAND_MARK = "NB";
const BRAND_NAME = "NB Technologies";
const AUTO_SLIDE_MS = 6000;
const MARQUEE_COPIES = 4; // keep in sync with the -25% keyframes in Hero.module.css

/* ───────────────────────── Designed slides ───────────────────────── */

type Variant = "brand" | "web" | "marketing" | "devops";
type Cta = { label: string; href: string };

interface DesignSlide {
  id: string;
  variant: Variant;
  title: string;
  text: string;
  primary: Cta;
  secondary: Cta;
  stats?: { value: string; label: string }[];
  /** [label, left (cqw), top (cqw)] */
  tiles: [string, number, number][];
}

const DESIGN_SLIDES: DesignSlide[] = [
  {
    id: "brand",
    variant: "brand",
    title: "Technology that moves your business forward",
    text: "Websites, digital marketing and DevOps from one team, built to launch on time and grow with you.",
    primary: { label: "Book a free consultation", href: "/contact" },
    secondary: { label: "See our work", href: "/portfolio" },
    tiles: [],
  },
  {
    id: "web",
    variant: "web",
    title: "Websites and apps built to convert",
    text: "Fast, secure and mobile-ready. React, Next.js, PHP and Python, delivered with a clear timeline.",
    primary: { label: "Get a quote", href: "/pricing" },
    secondary: { label: "View projects", href: "/portfolio" },
    stats: [
      { value: "100+", label: "Projects delivered" },
      { value: "5 yrs", label: "Experience" },
    ],
    tiles: [
      ["React", 4, 8], ["Next.js", 1, 26], ["Python", 2, 46], ["HTML5", 19, 2], ["CSS3", 33, 2],
      ["JS", 44, 4], ["Node", 49, 22], ["PHP", 50, 41], ["MySQL", 47, 60],
    ],
  },
  {
    id: "marketing",
    variant: "marketing",
    title: "Strategic digital marketing that grows revenue",
    text: "SEO, paid ads, email and social, tracked in one dashboard so every taka has a measurable return.",
    primary: { label: "Plan my campaign", href: "/contact" },
    secondary: { label: "Case studies", href: "/portfolio" },
    tiles: [
      ["Analytics", 6, 10], ["Facebook", 19, 2], ["Ads", 34, 2], ["Email", 46, 8], ["Instagram", 1, 34],
      ["LinkedIn", 6, 52], ["Google", 19, 62], ["SEO", 50, 32], ["TikTok", 49, 52],
    ],
  },
  {
    id: "devops",
    variant: "devops",
    title: "Faster releases with modern DevOps",
    text: "CI/CD pipelines, cloud infrastructure and monitoring that keep your product live and shipping.",
    primary: { label: "Talk to an engineer", href: "/contact" },
    secondary: { label: "Our process", href: "/services" },
    tiles: [
      ["Kubernetes", 5, 10], ["Docker", 19, 2], ["Terraform", 34, 2], ["GitLab", 46, 8], ["Ansible", 50, 26],
      ["Jenkins", 50, 44], ["AWS", 47, 62], ["Grafana", 1, 34], ["Prometheus", 3, 54],
    ],
  },
];

type SlideItem =
  | { kind: "design"; data: DesignSlide }
  | { kind: "image"; data: Banner };

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

/* ───────────────────────── Slide building blocks ───────────────────────── */

function CodeLines({ widths }: { widths: number[] }) {
  return (
    <div className="nb-code">
      {widths.map((w, i) => (
        <div key={i} style={{ width: `${w}%` }} />
      ))}
    </div>
  );
}

function Laptop({ children }: { children: ReactNode }) {
  return (
    <div className="nb-lap">
      <div className="nb-scr">{children}</div>
      <div className="nb-base" />
    </div>
  );
}

function Pipeline({ steps, small }: { steps: number; small?: boolean }) {
  return (
    <div className="nb-pipe" style={small ? { gap: "calc(.3 * var(--u))" } : undefined}>
      {Array.from({ length: steps }, (_, i) => (
        <Fragment key={i}>
          {i > 0 && <u />}
          <b style={small ? { width: "calc(1.4 * var(--u))", height: "calc(1.4 * var(--u))" } : undefined}>
            {small ? "" : i + 1}
          </b>
        </Fragment>
      ))}
    </div>
  );
}

function Mockup({ variant }: { variant: Exclude<Variant, "brand"> }) {
  if (variant === "web") {
    return (
      <>
        <Laptop>
          <div style={{ width: "30%" }}>
            <div className="nb-bar" style={{ width: "60%" }} />
            <CodeLines widths={[90, 70, 80, 50, 85, 65, 75, 55]} />
          </div>
          <div className="nb-prev-card">
            Modern solutions for a digital world
            <i />
          </div>
        </Laptop>
        <div className="nb-ph">
          <div className="nb-bar" />
          <CodeLines widths={[100, 100, 100]} />
        </div>
      </>
    );
  }

  if (variant === "marketing") {
    return (
      <>
        <Laptop>
          <div style={{ width: "32%" }}>
            <div className="nb-k">ROI</div>
            <div className="nb-big">+245%</div>
            <div className="nb-stat nb-k">
              Traffic up
              <br />
              <span className="nb-good">+62%</span>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div className="nb-k">Campaign performance</div>
            <svg className="nb-chart" viewBox="0 0 200 90" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 80C30 70 40 40 70 50S110 20 140 30 180 5 200 8V90H0z" fill="rgba(61,224,255,.18)" />
              <path d="M0 80C30 70 40 40 70 50S110 20 140 30 180 5 200 8" fill="none" stroke="#3de0ff" strokeWidth="2" />
            </svg>
          </div>
        </Laptop>
        <div className="nb-ph">
          <div className="nb-k">ROI</div>
          <div className="nb-big" style={{ fontSize: "calc(1.6 * var(--u))" }}>+245%</div>
          <div className="nb-bar" style={{ marginTop: "calc(1 * var(--u))" }} />
          <div className="nb-bar" style={{ width: "70%" }} />
        </div>
      </>
    );
  }

  // devops
  return (
    <>
      <Laptop>
        <div style={{ width: "26%" }}>
          <div className="nb-bar" style={{ width: "60%" }} />
          <CodeLines widths={[90, 60, 80, 50, 70]} />
        </div>
        <div style={{ flex: 1 }}>
          <div className="nb-k">
            Build 4124 · <span className="nb-good">Success</span>
          </div>
          <Pipeline steps={5} />
          <div className="nb-stat nb-k">
            Deploy frequency <span className="nb-good">High</span>
          </div>
          <div className="nb-stat nb-k">
            Lead time <span className="nb-good">Fast</span>
          </div>
        </div>
      </Laptop>
      <div className="nb-ph">
        <div className="nb-k">DevOps</div>
        <Pipeline steps={2} small />
        <div className="nb-bar" style={{ marginTop: "calc(1 * var(--u))" }} />
      </div>
    </>
  );
}

function DesignContent({ slide }: { slide: DesignSlide }) {
  return (
    <>
      {slide.variant === "brand" && (
        <>
          <svg className="nb-mt" viewBox="0 0 600 400" preserveAspectRatio="xMaxYMax slice" aria-hidden="true">
            <defs>
              <linearGradient id="nbMountain" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#1b3f86" />
                <stop offset="1" stopColor="#050b1c" />
              </linearGradient>
              <radialGradient id="nbSun" cx="1" cy=".62" r=".5">
                <stop offset="0" stopColor="#ffb27a" stopOpacity=".9" />
                <stop offset="1" stopColor="#ffb27a" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="600" height="400" fill="url(#nbSun)" />
            <path d="M0 400V250l90-70 70 50 110-90 100 80 90-50 140 90v240z" fill="url(#nbMountain)" opacity=".85" />
            <path d="M150 400c40-50 100-30 140-80s90-30 130-70" stroke="#3de0ff" strokeWidth="2" fill="none" opacity=".6" />
          </svg>
          <div className="nb-nb" aria-hidden="true">{BRAND_MARK}</div>
        </>
      )}

      <div className="nb-txt">
        <h2>{slide.title}</h2>
        <p>{slide.text}</p>
        <div className="nb-ctas">
          <Link className="nb-cta" href={slide.primary.href}>
            {slide.primary.label}
          </Link>
          <Link className="nb-cta nb-cta-ghost" href={slide.secondary.href}>
            {slide.secondary.label}
          </Link>
        </div>
        {slide.stats && (
          <div className="nb-stats">
            {slide.stats.map((s) => (
              <div key={s.label}>
                <b>{s.value}</b>
                <small>{s.label}</small>
              </div>
            ))}
          </div>
        )}
      </div>

      {slide.variant !== "brand" && (
        <div className="nb-stage">
          {slide.tiles.map(([label, x, y], k) => (
            <div
              key={label}
              className="nb-tile"
              style={{ left: `calc(${x} * var(--u))`, top: `calc(${y * 0.8} * var(--u))`, animationDelay: `${k * 0.5}s` }}
            >
              {label}
            </div>
          ))}
          <Mockup variant={slide.variant} />
        </div>
      )}
    </>
  );
}

/* ───────────────────────── Hero ───────────────────────── */

interface HeroProps {
  banners?: Banner[];
  partners?: Partner[];
  techStack?: TechStackItem[];
  stats?: Stat[];
}

export default function Hero({ banners, partners, techStack, stats }: HeroProps) {
  const partnersList = partners && partners.length > 0 ? partners : FALLBACK_PARTNERS;
  const techStackList = techStack && techStack.length > 0 ? techStack : FALLBACK_TECH_STACK;
  const statsList = stats && stats.length > 0 ? stats : FALLBACK_STATS;

  // API banners (if any) become image slides; otherwise show the designed slides.
  const slides: SlideItem[] =
    banners && banners.length > 0
      ? banners.map((data): SlideItem => ({ kind: "image", data }))
      : DESIGN_SLIDES.map((data): SlideItem => ({ kind: "design", data }));
  const count = slides.length;

  const [current, setCurrent] = useState(0);
  const [focused, setFocused] = useState(false);
  const paused = focused; // keyboard focus only; hovering the mouse does not stop autoplay
  const [tabHidden, setTabHidden] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [availH, setAvailH] = useState<number | null>(null);

  const active = Math.min(current, count - 1);

  // Slides list changed (e.g. banners finished loading) → start from the first slide
  useEffect(() => {
    setCurrent(0);
  }, [count]);

  // Height left on screen under whatever sits above the banner (top bar + navbar).
  // Measured from the real layout, so it stays exact at any browser zoom or header height.
  useEffect(() => {
    const measure = () => {
      const el = heroRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      setAvailH(Math.max(0, Math.round(window.innerHeight - top)));
    };
    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    ro?.observe(document.body);
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
      ro?.disconnect();
    };
  }, []);

  useEffect(() => {
    const onVisibility = () => setTabHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  // Re-armed on every slide change, so manual navigation also restarts the timer
  useEffect(() => {
    if (count < 2 || paused || tabHidden) return;
    const id = setTimeout(() => setCurrent((c) => (c + 1) % count), AUTO_SLIDE_MS);
    return () => clearTimeout(id);
  }, [current, count, paused, tabHidden]);

  const goTo = (n: number) => setCurrent(((n % count) + count) % count);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) goTo(delta > 0 ? active + 1 : active - 1);
    touchStartX.current = null;
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className={`nb-hero ${sora.className}`}
        ref={heroRef}
        style={availH ? ({ "--nb-avail": `${availH}px` } as CSSProperties) : undefined}
        role="group"
        aria-roledescription="carousel"
        aria-label="Featured services"
        onFocus={(e) => {
          if (e.target.matches(":focus-visible")) setFocused(true); // keyboard focus only
        }}
        onBlur={() => setFocused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="nb-logo">
          <span className="nb-logo-mark">{BRAND_MARK}</span>
          {BRAND_NAME}
        </div>

        {slides.map((slide, i) => (
          <div
            key={slide.data.id}
            className={`nb-slide ${i === active ? "nb-on" : ""}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${i + 1} of ${count}`}
            aria-hidden={i !== active}
          >
            {slide.kind === "design" ? (
              <DesignContent slide={slide.data} />
            ) : (
              <>
                <Image
                  src={slide.data.image}
                  alt={slide.data.alt}
                  fill
                  priority={i < 2}
                  sizes="100vw"
                  className="nb-img"
                />
                <div className="nb-shade" />
              </>
            )}
          </div>
        ))}

        {count > 1 && (
          <>
            <button
              type="button"
              className="nb-ar nb-prev"
              aria-label="Previous slide"
              onClick={() => goTo(active - 1)}
            >
              &#8249;
            </button>
            <button
              type="button"
              className="nb-ar nb-next"
              aria-label="Next slide"
              onClick={() => goTo(active + 1)}
            >
              &#8250;
            </button>
            <div className="nb-dots" role="group" aria-label="Choose slide">
              {slides.map((slide, i) => (
                <button
                  key={slide.data.id}
                  type="button"
                  className={`nb-dot ${i === active ? "nb-dot-on" : ""}`}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === active}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
          </>
        )}
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