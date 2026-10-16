import type { Metadata } from "next";
import BlogPageClient from "@/components/blog/BlogPageClient";
import { getBlogs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides on software development, engineering pods, AI and product delivery from the NeutrinoByte team.",
  openGraph: {
    title: "Blog",
    description:
      "Guides on software development, engineering pods, AI and product delivery from the NeutrinoByte team.",
  },
};

export default async function BlogPage() {
  const initialBlogs = await getBlogs();
  return <BlogPageClient initialBlogs={initialBlogs} />;
}