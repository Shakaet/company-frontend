// src/lib/api/about.ts
import { apiFetch } from "./client";
import type {
    CompanyDetails,
    CompanyApiItem,
    CompanyApiResponse,
} from "@/lib/types";

function mapCompany(api: CompanyApiItem): CompanyDetails {
    return {
        stats: (api.stats ?? []).map((s) => ({
            value: s.value,
            label: s.label,
        })),
        story: api.story ?? [],
        values: (api.values ?? []).map((v) => ({
            icon: v.icon,
            title: v.title,
            desc: v.desc,
        })),
        updatedAt: api.updatedAt,
    };
}

export async function getCompanyFromApi(): Promise<CompanyDetails | null> {
    try {
        const res = await apiFetch<CompanyApiResponse>("/api/v1/about/company", {
            next: { revalidate: 60, tags: ["about", "company"] },
        });

        if (!res.success || !res.data) return null;
        return mapCompany(res.data);
    } catch (err) {
        console.error("[getCompanyFromApi] failed:", err);
        return null;
    }
}

import type {
    TeamMember,
    TeamMemberApiItem,
    TeamApiResponse,
} from "@/lib/types";

function mapTeamMember(api: TeamMemberApiItem): TeamMember {
    // Build socials, dropping empty strings
    const socials: TeamMember["socials"] = {};
    if (api.socialLinks?.linkedin) socials.linkedin = api.socialLinks.linkedin;
    if (api.socialLinks?.github) socials.github = api.socialLinks.github;
    if (api.socialLinks?.twitter) socials.twitter = api.socialLinks.twitter;

    return {
        id: api._id,
        name: api.name,
        role: api.role,
        department: "Team",         // API doesn't return this
        image: api.image,
        bio: api.bio,
        expertise: [],              // API doesn't return this
        socials: Object.keys(socials).length > 0 ? socials : undefined,
    };
}

export async function getTeamFromApi(): Promise<TeamMember[]> {
    try {
        const res = await apiFetch<TeamApiResponse>("/api/v1/about/team", {
            next: { revalidate: 60, tags: ["about", "team"] },
        });

        if (!res.success || !Array.isArray(res.data)) return [];

        return res.data
            .filter((m) => m.status === "active")
            .map(mapTeamMember);
    } catch (err) {
        console.error("[getTeamFromApi] failed:", err);
        return [];
    }
}

import type {
    FounderMessage,
    FounderApiItem,
    FounderApiResponse,
} from "@/lib/types";

function mapFounder(api: FounderApiItem): FounderMessage {
    return {
        image: api.image,
        name: api.name,
        role: api.role,
        shortDesc: api.shortDesc,
        highlightQuote: api.highlightQuote || "",
        paragraphs: api.paragraphs ?? [],
        commitments: (api.commitments ?? []).map((c) =>
            typeof c === "string" ? c : c?.title ?? c?.desc ?? ""
        ).filter(Boolean),
        stats: (api.stats ?? []).map((s) => ({
            value: s.value,
            label: s.label,
        })),
        message: api.message || "",
        updatedAt: api.updatedAt,
    };
}

export async function getFounderMessageFromApi(): Promise<FounderMessage | null> {
    try {
        const res = await apiFetch<FounderApiResponse>(
            "/api/v1/about/founder-message",
            { next: { revalidate: 60, tags: ["about", "founder"] } }
        );

        if (!res.success || !res.data) return null;
        return mapFounder(res.data);
    } catch (err) {
        console.error("[getFounderMessageFromApi] failed:", err);
        return null;
    }
}

