import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
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
  const readTime = post.readTime ?? 6;

  return (
    <article className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      {/* Thumbnail */}
      <Link
        href={`/blog/${post.slug}`}
        className={`relative aspect-[16/10] bg-gradient-to-br ${gradient} overflow-hidden block`}
      >
        {post.cover ? (
          <img
            src={post.cover}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-contain bg-slate-100"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-end p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_55%)]" />
            <span className="relative text-white text-base sm:text-lg font-extrabold truncate">
              {post.category}
            </span>
          </div>
        )}
      </Link>

      <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="inline-block w-fit text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 mb-3">
            {post.category}
          </span>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
        </div>

        <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-1.5 truncate">
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <Clock className="w-3.5 h-3.5" />
            <span>{readTime} min read</span>
          </div>
        </div>
      </div>
    </article>
  );
}