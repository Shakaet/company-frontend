import type { BlogPost } from "@/lib/types";

interface PostContentProps {
  post: BlogPost;
}

export default function PostContent({ post }: PostContentProps) {
  if (post.content && post.content.length > 0) {
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
      <div
        className="prose prose-slate max-w-none prose-headings:font-extrabold prose-headings:text-slate-900 prose-a:text-blue-600 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50/50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  return null;
}