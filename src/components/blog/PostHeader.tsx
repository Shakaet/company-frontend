import type { BlogPost } from "@/lib/types";
import { Calendar, Clock, Sparkles } from "lucide-react";

interface PostHeaderProps {
  post: BlogPost;
  readTime?: number;
}

export default function PostHeader({ post, readTime = 8 }: PostHeaderProps) {
  // Split title for subtle gradient accent on second half
  const words = (post.title || "").split(" ");
  const midpoint = Math.max(1, Math.ceil(words.length / 2));
  const firstHalf = words.slice(0, midpoint).join(" ");
  const secondHalf = words.slice(midpoint).join(" ");

  // Author avatar initial
  const initial = (post.author || "N").charAt(0).toUpperCase();

  return (
    <header className="text-center max-w-4xl mx-auto pt-6 pb-6 sm:pt-8 sm:pb-8 md:pt-12 md:pb-10 px-2 sm:px-0">
      {/* Category pill */}
      <div className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 text-blue-700 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-2xs">
        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
        <span>{post.category}</span>
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.2] sm:leading-[1.18] break-words">
        {firstHalf}{" "}
        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
          {secondHalf}
        </span>
      </h1>

      {/* Author & metadata row */}
      <div className="mt-5 sm:mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs sm:text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center shadow-xs">
            {initial}
          </div>
          <span className="font-bold text-slate-900">{post.author}</span>
        </div>

        <span className="text-slate-300 hidden sm:inline">·</span>

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
    </header>
  );
}