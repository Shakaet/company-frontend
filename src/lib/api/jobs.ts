// src/lib/api/jobs.ts
import { apiFetch } from "./client";
import type {
  Job,
  JobApiItem,
  JobApiResponse,
  JobApiSingleResponse,
  JobDepartment,
  JobType,
  JobWorkplaceType,
} from "@/lib/types";

/** "2026-10-22" → "Oct 22, 2026" */
function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

/** ISO timestamp → "Today" | "3 days ago" | "Oct 4, 2026" */
function relativeTime(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days <= 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
  return formatDate(iso);
}

function mapJob(api: JobApiItem): Job {
  return {
    id: api._id,
    title: api.title,
    // Cast — we trust DB to hold valid enum values (you're enforcing this)
    department: api.department as JobDepartment,
    type: api.type as JobType,
    workplaceType: api.workplaceType as JobWorkplaceType,
    location: api.location,
    experience: api.experience,
    salary: api.salary,
    deadline: formatDate(api.deadline),
    postedDate: relativeTime(api.createdAt),
    featured: api.featured,
    urgent: api.urgent,
    description: api.description,
    aboutRole: api.aboutRole,
    responsibilities: api.responsibilities ?? [],
    requirements: api.requirements ?? [],
    niceToHave: api.niceToHave ?? [],
    benefits: api.benefits ?? [],
    techStack: api.techStack ?? [],
  };
}

export async function getJobsFromApi(): Promise<Job[]> {
  try {
    const res = await apiFetch<JobApiResponse>("/api/v1/career/jobs", {
      next: { revalidate: 60, tags: ["jobs"] },
    });

    if (!res.success || !Array.isArray(res.data)) return [];

    return res.data.filter((j) => j.status === "active").map(mapJob);
  } catch (err) {
    console.error("[getJobsFromApi] failed:", err);
    return [];
  }
}

export async function getJobByIdFromApi(id: string): Promise<Job | undefined> {
  try {
    // No single-job endpoint on the backend — filter from the list.
    // Uses the same cached fetch as getJobsFromApi() (tag: "jobs"),
    // so no extra network round trip within the same request.
    const all = await getJobsFromApi();
    return all.find((j) => j.id === id);
  } catch (err) {
    console.error(`[getJobByIdFromApi] ${id} failed:`, err);
    return undefined;
  }
}

export async function getRelatedJobsFromApi(
  currentId: string,
  department?: string
): Promise<Job[]> {
  const all = await getJobsFromApi();
  return all
    .filter(
      (j) =>
        j.id !== currentId &&
        (department ? j.department === department : true)
    )
    .slice(0, 2);
}