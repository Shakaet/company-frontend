import type { BlogPost } from "@/lib/types";

interface PostContentProps {
  post: BlogPost;
}

export default function PostContent({ post }: PostContentProps) {
  if (!post.content || post.content.trim().length === 0) return null;

  let headingIndex = 0;
  const content = post.content.replace(
    /<h([1-3])([^>]*)>/gi,
    (fullTag, level: string, attributes: string) => {
      headingIndex += 1;
      if (/\sid=/.test(attributes)) return fullTag;
      return `<h${level}${attributes} id="section-${headingIndex}">`;
    },
  );

  return (
    <article className="w-full min-w-0 overflow-hidden bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-8 md:p-10 shadow-xs">
      <div
        className="blog-content max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}