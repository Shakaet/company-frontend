import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import type { BlogPost } from "@/lib/types";

interface FeaturedPostProps {
  post: BlogPost;
  categoryLabel?: string;
}

export default function FeaturedPost({ post, categoryLabel }: FeaturedPostProps) {
  const readTime = post.readTime ?? 8;

  return (
    <article className="group bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-200 transition-all duration-300">
      <div className="grid md:grid-cols-12 gap-0">
        {/* Cover / Visual Banner */}
        <Link
          href={`/blog/${post.slug}`}
          className="relative md:col-span-6 lg:col-span-7 aspect-[16/10] sm:aspect-[16/9] md:aspect-auto md:min-h-[360px] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 overflow-hidden block"
        >
          {post.cover ? (
            <img
              src={post.cover}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_60%)]" />
              <span className="relative text-white/90 text-xs font-bold uppercase tracking-wider mb-2">
                Featured Article
              </span>
              <h3 className="relative text-white text-xl sm:text-2xl font-bold leading-snug line-clamp-2">
                {post.title}
              </h3>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent md:hidden" />
          <span className="absolute top-4 left-4 md:hidden inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-600 text-white shadow-sm">
            Featured
          </span>
        </Link>

        {/* Content */}
        <div className="md:col-span-6 lg:col-span-5 p-5 sm:p-7 md:p-8 lg:p-10 flex flex-col justify-between">
          <div>
            <div className="hidden md:flex items-center gap-2 mb-3">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                Featured
              </span>
              <span className="text-xs font-semibold text-slate-500">
                · {categoryLabel || post.category}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100">
            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-slate-500 font-medium mb-5">
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-blue-600" />
                <span className="font-semibold text-slate-800 truncate max-w-[140px] sm:max-w-none">
                  {post.author}
                </span>
              </div>
              <span className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{post.date}</span>
              </div>
              <span className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{readTime} min read</span>
              </div>
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-fit px-5 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-700 shadow-md shadow-blue-600/20 hover:-translate-y-0.5 transition-all"
            >
              <span>Read Full Article</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}