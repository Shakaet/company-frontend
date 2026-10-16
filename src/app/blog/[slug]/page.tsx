import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PostHeader from "@/components/blog/PostHeader";
import PostContent from "@/components/blog/PostContent";
import TableOfContents from "@/components/blog/TableOfContents";
import AuthorCard from "@/components/blog/AuthorCard";
import SidebarCTA from "@/components/blog/SidebarCTA";
import ShareButtons from "@/components/blog/ShareButtons";
import RelatedArticles from "@/components/blog/RelatedArticles";
import { getBlogBySlug, getRelatedBlogs } from "@/lib/data";

// Force dynamic since data comes from API
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) return { title: "Article Not Found | NeutrinoByte" };

  return {
    title: `${post.title} | NeutrinoByte Blog`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) notFound();

  const related = await getRelatedBlogs(slug, post.category);
  const readTime = 8; // TODO: compute from content length

  // Table of contents — derive from content headings
  const tocItems = [
    { id: "section-1", label: "Why pods beat ad-hoc hiring", level: 1 as const },
    { id: "section-2", label: "Predictable sprints", level: 1 as const },
    { id: "conclusion", label: "Conclusion", level: 1 as const },
  ];

  return (
    <main className="min-h-screen bg-slate-50/30 pb-20">
      {/* Header + Cover */}
      <section className="max-w-[1000px] mx-auto px-5">
        <PostHeader post={post} readTime={readTime} />

        {/* Cover image — gradient block */}
        <div className="relative w-full aspect-[1200/630] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 shadow-lg">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-2xl sm:text-3xl font-bold">
              Cover Image · 1200×630
            </p>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="max-w-[1000px] mx-auto px-5 mt-12">
        <div className="grid lg:grid-cols-[1fr_205px] gap-8">
          {/* Article */}
          <div>
            <PostContent post={post} />
            <ShareButtons url="" title={post.title} />
          </div>

          {/* Sidebar — fixed 205px on desktop */}
          <aside className="space-y-5 lg:sticky lg:top-28 self-start">
            <TableOfContents items={tocItems} />
            <AuthorCard author={post.author} />
            <SidebarCTA />
          </aside>
        </div>
      </section>

      {/* Related Articles */}
      <section className="max-w-[1000px] mx-auto px-5">
        <RelatedArticles posts={related} />
      </section>
    </main>
  );
}