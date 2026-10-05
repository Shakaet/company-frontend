// src/lib/api/pricing.ts
import { apiFetch } from "./client";

import type { PricingPlan, PricingApiItem, PricingApiResponse } from "@/lib/types";

import type { Guarantee, GuaranteeApiItem, GuaranteeApiResponse } from "@/lib/types";

/** Map raw API item → PricingPlan shape used by components */
function mapPricing(api: PricingApiItem): PricingPlan {
  return {
    id: api._id,
    name: api.name,
    badge: api.badge || undefined,
    popular: api.popular,
    priceMonthly: api.priceMonthly,
    priceQuarterly: api.priceQuarterly || undefined,
    period: api.period,
    tagline: api.tagline,
    description: api.description,
    idealFor: api.idealFor,
    features: api.features ?? [],
    notIncluded: api.notIncluded ?? [],
    ctaText: api.ctaText,
    ctaHref: api.ctaHref,
  };
}

export async function getPricingPlansFromApi(): Promise<PricingPlan[]> {
  try {
    const res = await apiFetch<PricingApiResponse>("/api/v1/pricing/plans", {
      next: { revalidate: 60, tags: ["pricing"] },
    });

    if (!res.success || !Array.isArray(res.data)) return [];

    return res.data
      .filter((p) => p.status === "active")
      .map(mapPricing);
  } catch (err) {
    console.error("[getPricingPlansFromApi] failed:", err);
    return [];
  }
}


function mapGuarantee(api: GuaranteeApiItem): Guarantee {
  return {
    id: api._id,
    icon: api.icon,
    label: api.label,
    desc: api.desc,
  };
}

export async function getGuaranteesFromApi(): Promise<Guarantee[]> {
  try {
    const res = await apiFetch<GuaranteeApiResponse>(
      "/api/v1/pricing/guarantees",
      { next: { revalidate: 60, tags: ["pricing", "guarantees"] } }
    );

    if (!res.success || !Array.isArray(res.data)) return [];

    return res.data
      .filter((g) => g.status === "active")
      .map(mapGuarantee);
  } catch (err) {
    console.error("[getGuaranteesFromApi] failed:", err);
    return [];
  }
}