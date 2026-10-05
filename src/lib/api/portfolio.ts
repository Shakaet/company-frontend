// src/lib/api/portfolio.ts
import { apiFetch } from "./client";
import type {
  Highlight,
  HighlightApiItem,
  HighlightApiResponse,
} from "@/lib/types";

import type { Category, CategoryApiItem, CategoryApiResponse } from "@/lib/types";

import type {
  Project,
  ProjectApiItem,
  ProjectApiResponse,
} from "@/lib/types";

function mapHighlight(api: HighlightApiItem): Highlight {
  return {
    id: api._id,
    value: api.value,
    label: api.label,
  };
}

export async function getHighlightsFromApi(): Promise<Highlight[]> {
  try {
    const res = await apiFetch<HighlightApiResponse>(
      "/api/v1/portfolio/highlights",
      { next: { revalidate: 60, tags: ["portfolio", "highlights"] } }
    );

    if (!res.success || !Array.isArray(res.data)) return [];

    return res.data
      .filter((h) => h.status === "active")
      .map(mapHighlight);
  } catch (err) {
    console.error("[getHighlightsFromApi] failed:", err);
    return [];
  }
}



function mapCategory(api: CategoryApiItem): Category {
  return {
    id: api._id,
    name: api.name,
    value: api.value,
  };
}

export async function getCategoriesFromApi(): Promise<Category[]> {
  try {
    const res = await apiFetch<CategoryApiResponse>(
      "/api/v1/portfolio/categories",
      { next: { revalidate: 60, tags: ["portfolio", "categories"] } }
    );

    if (!res.success || !Array.isArray(res.data)) return [];

    return res.data
      .filter((c) => c.status === "active")
      .map(mapCategory);
  } catch (err) {
    console.error("[getCategoriesFromApi] failed:", err);
    return [];
  }
}

function mapProject(api: ProjectApiItem): Project {
  const categoryValue =
    typeof api.category === "object" && api.category
      ? api.category.value
      : String(api.category || "web");

  const categoryLabel =
    typeof api.category === "object" && api.category?.name
      ? api.category.name
      : categoryValue;

  return {
    id: api._id,
    title: api.title,
    slug: undefined,
    category: categoryValue as Project["category"],
    categoryLabel,
    image: api.image,
    client: api.client,
    year: api.year,
    description: api.description,
    liveUrl: api.liveUrl || undefined,
    tags: Array.isArray(api.tags) ? api.tags : [],
    metrics: undefined,
    featured: api.featured,
  };
}

export async function getProjectsFromApi(): Promise<Project[]> {
  try {
    const res = await apiFetch<ProjectApiResponse>(
      "/api/v1/portfolio/projects",
      { next: { revalidate: 60, tags: ["portfolio", "projects"] } }
    );

    if (!res.success || !Array.isArray(res.data)) return [];

    return res.data
      .filter((p) => p.status === "active")
      .map(mapProject);
  } catch (err) {
    console.error("[getProjectsFromApi] failed:", err);
    return [];
  }
}