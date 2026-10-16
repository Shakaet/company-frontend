import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ChevronRight, ListOrdered } from "lucide-react";
import PostHeader from "@/components/blog/PostHeader";
import PostContent from "@/components/blog/PostContent";
import TableOfContents from "@/components/blog/TableOfContents";
import AuthorCard from "@/components/blog/AuthorCard";
import SidebarCTA from "@/components/blog/SidebarCTA";
import ShareButtons from "@/components/blog/ShareButtons";
import RelatedArticles from "@/components/blog/RelatedArticles";
import Newsletter from "@/components/blog/Newsletter";
import { getBlogBySlug, getRelatedBlogs } from "@/lib/data";

// Force dynamic since data comes from API
export const dynamic = "force-dynamic";
export const revalidate = 0;

function getTocItems(content: string) {
  const headings = [...content.matchAll(/<h([1-3])[^>]*>(.*?)<\/h\1>/gi)];
  return headings.map((heading, index) => ({
    id: `section-${index + 1}`,
    label: heading[2].replace(/<[^>]+>/g, "").trim(),
    level: (Number(heading[1]) === 1 ? 1 : 2) as 1 | 2,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | NeutrinoByte`,
      description: post.excerpt,
      images: post.cover ? [{ url: post.cover }] : undefined,
    },
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
  const readTime =
    post.readTime ??
    Math.max(
      1,
      Math.ceil(
        post.content
          .replace(/<[^>]+>/g, " ")
          .trim()
          .split(/\s+/).length / 200
      )
    );

  const tocItems = getTocItems(post.content);

  return (
    <main className="min-h-screen bg-slate-50/40 pb-16 sm:pb-24">
      {/* Top Breadcrumb Navigation */}
      <section className="bg-gradient-to-b from-blue-50/80 via-white to-slate-50/30 border-b border-slate-200/70 pt-6 pb-6 sm:pt-8 sm:pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-slate-500">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 font-semibold text-slate-700 hover:text-blue-600 transition"
              >
                <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>All Articles</span>
              </Link>
              <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-300" />
              <span className="text-slate-400 truncate max-w-[120px] sm:max-w-none">
                {post.category}
              </span>
              <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-300 hidden xs:inline" />
              <span className="text-slate-900 font-medium truncate max-w-[140px] sm:max-w-[280px] md:max-w-[360px] hidden xs:inline">
                {post.title}
              </span>
            </div>

            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition"
            >
              <span>Explore More Insights</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Header + Cover */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl pt-4 sm:pt-6">
        <PostHeader post={post} readTime={readTime} />

        {/* Cover image container */}
        <div className="relative w-full min-h-[220px] sm:min-h-[320px] max-h-[min(70vh,42rem)] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 shadow-md sm:shadow-xl">
          {post.cover ? (
            <img
              src={post.cover}
              alt={post.title}
              className="block w-full h-auto max-h-[min(70vh,42rem)] object-contain mx-auto"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_60%)]" />
              <span className="relative text-white/80 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
                {post.category}
              </span>
              <p className="relative text-white text-xl sm:text-3xl md:text-4xl font-extrabold max-w-2xl px-4 leading-tight">
                {post.title}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Content + Sidebar Layout */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mt-8 sm:mt-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Main Article Column */}
          <div className="lg:col-span-8 w-full min-w-0 space-y-8">
            {/* Mobile Table of Contents Callout (collapsible details on small screens) */}
            {tocItems.length > 0 && (
              <div className="block lg:hidden bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-xs">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-sm text-slate-900 select-none">
                    <span className="flex items-center gap-2">
                      <ListOrdered className="w-4 h-4 text-blue-600" />
                      <span>Table of Contents ({tocItems.length})</span>
                    </span>
                    <span className="text-blue-600 text-xs font-semibold group-open:rotate-180 transition-transform duration-200">
                      ▼
                    </span>
                  </summary>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <ol className="space-y-2 text-xs sm:text-sm text-slate-600">
                      {tocItems.map((item, i) => (
                        <li
                          key={item.id}
                          className={item.level === 2 ? "pl-3 border-l border-slate-100" : ""}
                        >
                          <a
                            href={`#${item.id}`}
                            className="hover:text-blue-600 transition flex items-start gap-2 py-0.5"
                          >
                            <span className="text-slate-400 font-semibold shrink-0">
                              {i + 1}.
                            </span>
                            <span className="break-words line-clamp-2">{item.label}</span>
                          </a>
                        </li>
                      ))}
                    </ol>
                  </div>
                </details>
              </div>
            )}

            {/* Main Rich Content */}
            <PostContent post={post} />

            {/* Social Share Strip */}
            <ShareButtons
              slug={post.slug}
              url={`https://www.neutrinobyte.com/blog/${post.slug}`}
              title={post.title}
            />

            {/* Mobile Author Card (shown below article on mobile) */}
            <div className="block lg:hidden pt-4">
              <AuthorCard author={post.author} bio={post.authorBio} />
            </div>
          </div>

          {/* Desktop Sticky Sidebar */}
          <aside className="lg:col-span-4 w-full space-y-6 lg:sticky lg:top-28 self-start">
            <div className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </div>

            <div className="hidden lg:block">
              <AuthorCard author={post.author} bio={post.authorBio} />
            </div>

            <SidebarCTA />
          </aside>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <RelatedArticles posts={related} />
        </section>
      )}

      {/* Newsletter */}
      {/* <Newsletter /> */}
    </main>
  );
}