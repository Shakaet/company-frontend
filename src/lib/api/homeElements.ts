// src/lib/api/homeElements.ts
import { apiFetch } from "./client";
import type {
    WhyChooseUsItem,
    WhyChooseUsApiItem,
    WhyChooseUsApiResponse,
} from "@/lib/types";

function mapWhyChooseUs(api: WhyChooseUsApiItem): WhyChooseUsItem {
    return {
        id: api._id,
        icon: api.icon || "Shield",
        badge: api.badge || undefined,
        title: api.title,
        desc: api.desc,
        perks: api.perks ?? [],
    };
}

export async function getWhyChooseUsFromApi(): Promise<WhyChooseUsItem[]> {
    try {
        const res = await apiFetch<WhyChooseUsApiResponse>(
            "/api/v1/home-elements/why-choose-us",
            { next: { revalidate: 60, tags: ["home", "why-choose-us"] } }
        );

        if (!res.success || !Array.isArray(res.data)) return [];

        return res.data
            .filter((w) => w.status === "active")
            .map(mapWhyChooseUs);
    } catch (err) {
        console.error("[getWhyChooseUsFromApi] failed:", err);
        return [];
    }
}

import type {
    Partner,
    PartnerApiItem,
    PartnerApiResponse,
} from "@/lib/types";

function mapPartner(api: PartnerApiItem): Partner {
    return {
        id: api._id,
        name: api.name,
        // No emoji from API — fallback for visual consistency
        emoji: "🏢",
    };
}

export async function getPartnersFromApi(): Promise<Partner[]> {
    try {
        const res = await apiFetch<PartnerApiResponse>(
            "/api/v1/home-elements/partners",
            { next: { revalidate: 60, tags: ["home", "partners"] } }
        );

        if (!res.success || !Array.isArray(res.data)) return [];

        return res.data
            .filter((p) => p.status === "active")
            .map(mapPartner);
    } catch (err) {
        console.error("[getPartnersFromApi] failed:", err);
        return [];
    }
}

import type {
    TechStackItem,
    TechStackApiItem,
    TechStackApiResponse,
} from "@/lib/types";

/** Lookup table — maps API name → visual style */
const TECH_STYLE_MAP: Record<string, Omit<TechStackItem, "id" | "name">> = {
    react: { color: "#61DAFB", bg: "#0a1929", icon: "⚛️" },
    next: { color: "#ffffff", bg: "#000000", icon: "▲" },
    "next.js": { color: "#ffffff", bg: "#000000", icon: "▲" },
    typescript: { color: "#3178C6", bg: "#1a2a3a", icon: "TS" },
    node: { color: "#68A063", bg: "#0f2010", icon: "🟩" },
    "node.js": { color: "#68A063", bg: "#0f2010", icon: "🟩" },
    mongodb: { color: "#47A248", bg: "#0d1f0d", icon: "🍃" },
    aws: { color: "#FF9900", bg: "#1a1200", icon: "☁️" },
    docker: { color: "#2496ED", bg: "#071929", icon: "🐳" },
    figma: { color: "#F24E1E", bg: "#2a0d08", icon: "🎨" },
    graphql: { color: "#E535AB", bg: "#1a0014", icon: "◈" },
    tailwind: { color: "#38BDF8", bg: "#071523", icon: "🌊" },
    "tailwind css": { color: "#38BDF8", bg: "#071523", icon: "🌊" },
    python: { color: "#3776AB", bg: "#0d1f2a", icon: "🐍" },
    postgresql: { color: "#4169E1", bg: "#0d1229", icon: "🐘" },
    postgres: { color: "#4169E1", bg: "#0d1229", icon: "🐘" },
    redis: { color: "#DC382D", bg: "#2a0806", icon: "🔴" },
    prisma: { color: "#2D3748", bg: "#0d1117", icon: "▲" },
    express: { color: "#ffffff", bg: "#1a1a1a", icon: "⬢" },
    vue: { color: "#42B883", bg: "#0a1a12", icon: "💚" },
    flutter: { color: "#02569B", bg: "#0a1a2a", icon: "🐦" },
};

const DEFAULT_STYLE = {
    color: "#64748b",
    bg: "#f1f5f9",
    icon: "⚙️",
};

function mapTechStack(api: TechStackApiItem): TechStackItem {
    const key = api.name.toLowerCase().trim();
    const style = TECH_STYLE_MAP[key] ?? DEFAULT_STYLE;

    return {
        id: api._id,
        name: api.name,
        ...style,
    };
}

export async function getTechStackFromApi(): Promise<TechStackItem[]> {
    try {
        const res = await apiFetch<TechStackApiResponse>(
            "/api/v1/home-elements/tech-stack",
            { next: { revalidate: 60, tags: ["home", "tech-stack"] } }
        );

        if (!res.success || !Array.isArray(res.data)) return [];

        return res.data
            .filter((t) => t.status === "active")
            .map(mapTechStack);
    } catch (err) {
        console.error("[getTechStackFromApi] failed:", err);
        return [];
    }
}

import type { Stat, StatApiItem, StatApiResponse } from "@/lib/types";

/** Fallback emojis by label keyword */
function pickIcon(label: string): string {
  const l = label.toLowerCase();
  if (l.includes("project"))   return "🎯";
  if (l.includes("client"))    return "😊";
  if (l.includes("experience") || l.includes("year")) return "📅";
  if (l.includes("team"))      return "👥";
  if (l.includes("countr"))    return "🌍";
  if (l.includes("code"))      return "💻";
  if (l.includes("review") || l.includes("star")) return "⭐";
  if (l.includes("uptime") || l.includes("sla"))  return "🔒";
  return "✨";
}

function mapStat(api: StatApiItem): Stat {
  return {
    id: api._id,
    label: api.label,
    value: api.value,
    icon: pickIcon(api.label),
  };
}

export async function getStatsFromApi(): Promise<Stat[]> {
  try {
    const res = await apiFetch<StatApiResponse>(
      "/api/v1/home-elements/stats",
      { next: { revalidate: 60, tags: ["home", "stats"] } }
    );

    if (!res.success || !Array.isArray(res.data)) return [];

    return res.data
      .filter((s) => s.status === "active")
      .map(mapStat);
  } catch (err) {
    console.error("[getStatsFromApi] failed:", err);
    return [];
  }
}