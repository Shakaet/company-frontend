// src/lib/api/services.ts
// import { apiFetch } from "./client";
// import type {
//     Service,
//     ServiceApiItem,
//     ServiceApiResponse,
//     ServiceApiSingleResponse,
// } from "@/lib/types";

// src/lib/api/services.ts
import { apiFetch } from "./client";
import type {
  Service,
  ServiceApiItem,
  ServiceApiResponse,
  ServiceApiSingleResponse,
  ConsultationPayload,
  ConsultationApiResponse,
  ConsultationApiData,
  ConsultationValidationError,
} from "@/lib/types";

/** Map API category strings → your Service.category enum values */
function mapCategory(raw: string): Service["category"] {
    const lower = (raw || "").toLowerCase();
    if (lower.includes("design")) return "Design";
    if (lower.includes("marketing") || lower.includes("growth")) return "Growth";
    if (lower.includes("cloud") || lower.includes("devops")) return "Cloud";
    return "Development"; // fallback
}

/** Map API icon → Lucide icon name (API sends Cloudinary URLs) */
function mapIcon(raw: string): string {
    if (!raw || !raw.startsWith("http")) return raw || "Code";
    return "Code"; // fallback for Cloudinary URLs
}

function mapService(api: ServiceApiItem): Service {
    return {
        id: api._id,
        slug: api.slug,
        aliases: api.aliases ?? [],
        title: api.title,
        category: mapCategory(api.category),
        shortDesc: api.shortDesc,
        badge: api.badge || undefined,
        icon: mapIcon(api.icon),
        heroHeadline: api.heroHeadline || undefined,
        description: api.description,
        features: api.features ?? [],
        deliverables: api.deliverables ?? [],
        benefits: (api.benefits ?? []).map((b) => ({ title: b.title, desc: b.desc })),
        techStack: api.techStack ?? [],
        process: api.process ?? [],
        faqs: api.faqs ?? [],
        pricingStartingAt: api.pricingStartingAt || undefined,
    };
}

/** GET all services */
export async function getServicesFromApi(): Promise<Service[]> {
    try {
        const res = await apiFetch<ServiceApiResponse>("/api/v1/services", {
            next: { revalidate: 60, tags: ["services"] },
        });

        if (!res.success || !Array.isArray(res.data)) return [];

        return res.data
            .filter((s) => s.status === "active")
            .map(mapService);
    } catch (err) {
        console.error("[getServicesFromApi] failed:", err);
        return [];
    }
}

/** GET single service by slug — with alias / category fallback */
export async function getServiceBySlugFromApi(
    slug: string
): Promise<Service | undefined> {
    const normalized = slug.toLowerCase().trim();

    // 1. Try the direct endpoint first
    try {
        const res = await apiFetch<ServiceApiSingleResponse>(
            `/api/v1/services/${normalized}`,
            { next: { revalidate: 60, tags: ["services", `service-${normalized}`] } }
        );
        if (res.success && res.data) return mapService(res.data);
    } catch (err) {
        const msg = err instanceof Error ? err.message : "";
        // 404 is expected for aliases — silently fall through
        if (!msg.includes("404")) {
            console.error(`[getServiceBySlugFromApi] ${normalized} failed:`, err);
        }
    }

    // 2. Fallback — slug / alias / category fuzzy match
    try {
        const all = await getServicesFromApi();

        // Exact slug
        let found = all.find((s) => s.slug === normalized);
        if (found) return found;

        // Alias match
        found = all.find((s) =>
            s.aliases?.some((a) => a.toLowerCase() === normalized)
        );
        if (found) return found;

        // Category slug match — e.g. "marketing" matches "Digital Marketing"
        found = all.find((s) => {
            const catSlug = (s.category || "")
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-|-$/g, "");
            return catSlug.includes(normalized) || normalized.includes(catSlug);
        });

        return found;
    } catch (err) {
        console.error(`[getServiceBySlugFromApi] fallback failed:`, err);
        return undefined;
    }
}

// import type {
//     ConsultationPayload,
//     ConsultationApiResponse,
//     ConsultationApiData,
//     ConsultationValidationError,
// } from "@/lib/types";

type ConsultationResult =
    | { ok: true; data: ConsultationApiData }
    | {
        ok: false;
        error: string;
        validationErrors: ConsultationValidationError[];
    };

export async function submitConsultation(
    payload: ConsultationPayload
): Promise<ConsultationResult> {
    try {
        const res = await apiFetch<ConsultationApiResponse>(
            "/api/v1/services/consultations",
            {
                method: "POST",
                body: JSON.stringify(payload),
                allowErrorResponse: true,
            }
        );

        if (!res.success) {
            return {
                ok: false,
                error: res.message || "Submission failed",
                validationErrors: res.errorMessages ?? [],
            };
        }

        return { ok: true, data: res.data };
    } catch (err) {
        const msg = err instanceof Error ? err.message : "Network error";
        console.error("[submitConsultation] failed:", msg);
        return { ok: false, error: msg, validationErrors: [] };
    }
}