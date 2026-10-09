// src/lib/api/siteSettings.ts
import { apiFetch } from "./client";
import type { SiteSettings, SiteSettingsApiResponse } from "@/lib/types";

function mapSettings(api: SiteSettingsApiResponse["data"]): SiteSettings {
  return {
    companyName: api.companyName || "Our Company",
    tagline: api.tagline || "",
    logo: api.logo || "",
    email: api.email || "",
    phone: api.phone || "",
    whatsappNumber: api.whatsappNumber || "",
    address: api.address || "",
    footerTagline: api.footerTagline || api.tagline || "",
    footerQuickLinks: api.footerQuickLinks ?? [],
    copyrightText: api.copyrightText || "",
    metaTitle: api.metaTitle || "",
    metaDescription: api.metaDescription || "",
    // Filter out inactive social links
    socialLinks: (api.socialLinks ?? []).filter((s) => s.isActive),
  };
}

export async function getSiteSettingsFromApi(): Promise<SiteSettings | null> {
  try {
    const res = await apiFetch<SiteSettingsApiResponse>(
      "/api/v1/site-setting",
      { next: { revalidate: 300, tags: ["site-settings"] } }
    );
    if (!res.success || !res.data) return null;
    return mapSettings(res.data);
  } catch (err) {
    console.error("[getSiteSettingsFromApi] failed:", err);
    return null;
  }
}

/** Hard fallback so nothing breaks if API is down */
export const FALLBACK_SETTINGS: SiteSettings = {
  companyName: "Our Company",
  tagline: "Building digital products that matter.",
  logo: "",
  email: "support@neutrinobyte.com",
  phone: "+880 123 456 789",
  whatsappNumber: "8801234567890",
  address: "Dhaka, Bangladesh",
  footerTagline: "Building digital products that matter.",
  footerQuickLinks: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
  ],
  copyrightText: `© ${new Date().getFullYear()} Our Company. All rights reserved.`,
  metaTitle: "Our Company",
  metaDescription: "We build web, mobile apps & digital experiences.",
  socialLinks: [],
};