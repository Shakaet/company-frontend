interface AuthorCardProps {
  author: string;
  bio?: string;
}

export default function AuthorCard({
  author,
  bio = "NeutrinoByte engineering team writing on delivery, AI and product.",
}: AuthorCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
      <h3 className="text-sm font-bold text-slate-900 mb-3">
        About the author
      </h3>
      <p className="text-sm text-slate-600 leading-relaxed">{bio}</p>
      <p className="mt-3 text-xs font-semibold text-blue-600">— {author}</p>
    </div>
  );
}