import Link from "next/link";
import type { BlogPost } from "@/lib/types";

/** Alternate gradients per card */
const GRADIENTS = [
  "from-blue-500 via-blue-600 to-blue-700",
  "from-violet-500 via-purple-600 to-indigo-700",
  "from-blue-700 via-indigo-700 to-blue-900",
  "from-blue-600 via-indigo-600 to-violet-700",
  "from-purple-500 via-indigo-600 to-blue-600",
  "from-sky-500 via-blue-600 to-indigo-600",
];

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const gradient = GRADIENTS[index % GRADIENTS.length];

  return (
    <article className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Gradient thumbnail */}
      <Link
        href={`/blog/${post.slug}`}
        className={`relative aspect-[16/10] bg-gradient-to-br ${gradient} flex items-end p-5 overflow-hidden`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_55%)]" />
        <span className="relative text-white text-xl font-extrabold">
          {post.category}
        </span>
      </Link>

      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        <span className="inline-block w-fit text-[11px] font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 mb-3">
          {post.category}
        </span>

        <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-2 flex-1">
          {post.excerpt}
        </p>

        <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-400 font-medium">
          {post.date} · 6 min read
        </div>
      </div>
    </article>
  );
}