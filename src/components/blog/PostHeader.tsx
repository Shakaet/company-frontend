import type { BlogPost } from "@/lib/types";

interface PostHeaderProps {
  post: BlogPost;
  readTime?: number;
}

export default function PostHeader({ post, readTime = 8 }: PostHeaderProps) {
  // Split title for gradient effect — last word(s) get the gradient
  const words = post.title.split(" ");
  const midpoint = Math.ceil(words.length / 2);
  const firstHalf = words.slice(0, midpoint).join(" ");
  const secondHalf = words.slice(midpoint).join(" ");

  // Author avatar initial
  const initial = post.author.charAt(0).toUpperCase();

  return (
    <header className="text-center max-w-4xl mx-auto pt-10 pb-10">
      {/* Category pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-6">
        {post.category}
      </div>

      {/* Title with gradient on second half */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
        {firstHalf}{" "}
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {secondHalf}
        </span>
      </h1>

      {/* Author row */}
      <div className="mt-7 flex items-center justify-center gap-3 text-sm text-slate-500">
        <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shadow-sm">
          {initial}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-900">{post.author}</span>
          <span className="text-slate-300">·</span>
          <span>{post.date}</span>
          <span className="text-slate-300">·</span>
          <span>{readTime} min read</span>
        </div>
      </div>
    </header>
  );
}