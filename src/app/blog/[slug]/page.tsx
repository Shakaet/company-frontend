import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogs } from "@/lib/data";
import PostContent from "@/components/blog/PostContent";

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  return { title: post?.title ?? "Blog", description: post?.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) notFound();

  return (
    <div className="container mx-auto py-20 px-4">
      <PostContent post={post} />
    </div>
  );
}