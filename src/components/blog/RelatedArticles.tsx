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
  if (posts.length === 0) return null;

  return (
    <section className="mt-20">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 3).map((p, i) => (
          <BlogCard key={p.slug} post={p} index={i} />
        ))}
      </div>
    </section>
  );
}