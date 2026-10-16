import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/types";

interface FeaturedPostProps {
  post: BlogPost;
  categoryLabel?: string;
}

export default function FeaturedPost({ post, categoryLabel }: FeaturedPostProps) {
  return (
    <article className="group bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Gradient image block */}
        <Link
          href={`/blog/${post.slug}`}
          className="relative aspect-[4/3] md:aspect-auto md:min-h-[380px] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 flex items-end p-7 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
          <h3 className="relative text-white text-2xl sm:text-3xl font-bold leading-tight">
            Featured: {post.title}
          </h3>
        </Link>

        {/* Content */}
        <div className="p-7 sm:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">
              Featured
            </span>
            <span className="text-xs font-semibold text-slate-500">
              · {categoryLabel || post.category}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>

          <p className="mt-4 text-slate-600 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>

          <div className="mt-5 text-xs text-slate-500 font-medium">
            By <span className="text-slate-700 font-semibold">{post.author}</span>{" "}
            · {post.date} · 8 min read
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 shadow-md shadow-blue-600/20 hover:-translate-y-0.5 transition-all w-fit"
          >
            Read Article
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}