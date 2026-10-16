import type { BlogPost } from "@/lib/types";
import BlogCard from "./BlogCard";

interface RelatedArticlesProps {
  posts: BlogPost[];
  title?: string;
}

export default function RelatedArticles({
  posts,
  title = "Related Articles",
}: RelatedArticlesProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="mt-12 sm:mt-16 md:mt-20 pt-10 sm:pt-12 border-t border-slate-200/80">
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          {title}
        </h2>
        <span className="text-xs sm:text-sm text-slate-500 font-medium hidden xs:inline">
          Hand-picked for you
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
        {posts.slice(0, 3).map((p, i) => (
          <BlogCard key={p.slug} post={p} index={i} />
        ))}
      </div>
    </section>
  );
}