// src/lib/api/testimonials.ts
import { apiFetch } from "./client";
import type {
    Testimonial,
    TestimonialApiItem,
    TestimonialApiResponse,
} from "@/lib/types";

function normalizeAvatar(raw: string): string {
    if (!raw) return "";
    return /^https?:\/\//i.test(raw) ? raw : "";
}

function mapTestimonial(api: TestimonialApiItem): Testimonial {
    return {
        id: api._id,
        name: api.name,
        role: api.role,
        company: api.company || undefined,
        message: api.message,
        avatar: normalizeAvatar(api.avatar),
        rating: api.rating ?? 5,
        highlightMetric: undefined,
        projectTag: undefined,
    };
}

export async function getTestimonialsFromApi(): Promise<Testimonial[]> {
    try {
        const res = await apiFetch<TestimonialApiResponse>(
            "/api/v1/home-elements/testimonials",
            { next: { revalidate: 60, tags: ["testimonials"] } }
        );
        if (!res.success || !Array.isArray(res.data)) return [];
        return res.data
            .filter((t) => t.status === "active")
            .map(mapTestimonial);
    } catch (err) {
        console.error("[getTestimonialsFromApi] failed:", err);
        return [];
    }
}