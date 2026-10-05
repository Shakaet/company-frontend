// src/lib/api/banner.ts
import { apiFetch } from "./client";
import type { Banner, BannerApiResponse } from "@/lib/types";

export async function getBanners(): Promise<Banner[]> {
  try {
    const res = await apiFetch<BannerApiResponse>("/api/v1/banner/", {
      // ISR — refresh every 60s. Change to `cache: "no-store"` for always-fresh.
      next: { revalidate: 60, tags: ["banners"] },
    });

    if (!res.success || !Array.isArray(res.data)) return [];

    return res.data
      .filter((b) => b.status === "active") // only active banners
      .map((b, i) => ({
        id: b._id,
        image: b.banner_image,
        alt: `Banner ${i + 1}`, // API has no alt field — using generic label
      }));
  } catch (err) {
    console.error("[getBanners] failed:", err);
    return []; // fail soft so page never crashes
  }
}