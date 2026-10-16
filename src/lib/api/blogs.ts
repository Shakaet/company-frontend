import { apiFetch } from "./client";
import type { BlogPost } from "@/lib/types";

type BlogApiItem = Omit<BlogPost, "id" | "category"> & {
  _id: string;
  status: "active" | "inactive";
  category: string | { _id: string; name: string; slug: string };
};

type BlogApiResponse = {
  success: boolean;
  data?: BlogApiItem[] | BlogApiItem | null;
};

function mapBlog(post: BlogApiItem): BlogPost {
  return {
    id: post._id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    cover: post.cover ?? "",
    author: post.author,
    authorBio: post.authorBio,
    date: post.date,
    category:
      typeof post.category === "string"
        ? post.category
        : post.category?.name ?? "Uncategorized",
    readTime: post.readTime,
    featured: post.featured,
  };
}

export async function getBlogsFromApi(): Promise<BlogPost[]> {
  try {
    const response = await apiFetch<BlogApiResponse>("/api/v1/blog/posts", {
      next: { revalidate: 60, tags: ["blogs"] },
    });
    if (!response.success || !Array.isArray(response.data)) return [];
    return response.data.map(mapBlog);
  } catch (error) {
    console.error("[getBlogsFromApi] failed:", error);
    return [];
  }
}

export async function getBlogBySlugFromApi(slug: string): Promise<BlogPost | undefined> {
  try {
    const response = await apiFetch<BlogApiResponse>(
      `/api/v1/blog/posts/${encodeURIComponent(slug)}`,
      { next: { revalidate: 60, tags: ["blogs", `blog-${slug}`] } },
    );
    if (!response.success || !response.data || Array.isArray(response.data)) return undefined;
    return mapBlog(response.data);
  } catch (error) {
    console.error(`[getBlogBySlugFromApi] ${slug} failed:`, error);
    return undefined;
  }
}

export async function getRelatedBlogsFromApi(
  currentSlug: string,
  category?: string,
): Promise<BlogPost[]> {
  const all = await getBlogsFromApi();
  const sameCategory = all.filter(
    (post) => post.slug !== currentSlug && (!category || post.category === category),
  );
  return [...sameCategory, ...all.filter((post) => post.slug !== currentSlug && post.category !== category)]
    .slice(0, 3);
}
