import type { BlogPost } from "@/lib/types";

interface PostContentProps {
  post: BlogPost;
}

export default function PostContent({ post }: PostContentProps) {
  // If post.content contains real HTML, render as-is
  // Otherwise, render a demo article layout matching the screenshot
  if (post.content && post.content.length > 0) {
    return (
      <div
        className="prose prose-slate max-w-none prose-headings:font-extrabold prose-headings:text-slate-900 prose-a:text-blue-600 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50/50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    );
  }

  // Fallback demo content
  return (
    <article className="prose prose-slate max-w-none">
      <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
        Intro paragraph goes here. It sets up the problem and why fast-moving
        teams care about predictable delivery.
      </p>

      <h2 className="mt-10 mb-4 text-2xl sm:text-3xl font-extrabold text-slate-900">
        1. Why pods beat ad-hoc hiring
      </h2>
      <p className="text-slate-600 leading-relaxed text-base">
        Body text for the first section. Short paragraphs, plenty of whitespace
        and clear takeaways.
      </p>

      {/* Pull quote */}
      <blockquote className="my-8 border-l-4 border-blue-500 bg-blue-50/50 py-5 px-6 rounded-r-xl">
        <p className="text-slate-800 italic text-base sm:text-lg font-medium">
          Pull quote or key takeaway highlighted here.
        </p>
      </blockquote>

      <h2 className="mt-10 mb-4 text-2xl sm:text-3xl font-extrabold text-slate-900">
        2. Predictable sprints, zero hidden fees
      </h2>
      <p className="text-slate-600 leading-relaxed text-base">
        Body text for the second section.
      </p>

      <h2 className="mt-10 mb-4 text-2xl sm:text-3xl font-extrabold text-slate-900">
        Conclusion
      </h2>
      <p className="text-slate-600 leading-relaxed text-base">
        Closing paragraph and a call to action.
      </p>
    </article>
  );
}