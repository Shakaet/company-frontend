interface AuthorCardProps {
  author: string;
  bio?: string;
}

export default function AuthorCard({
  author,
  bio = "NeutrinoByte engineering team writing on cloud architecture, AI solutions, and digital delivery.",
}: AuthorCardProps) {
  const initial = (author || "N").charAt(0).toUpperCase();

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-xs">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center shrink-0 shadow-xs">
          {initial}
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900 leading-tight">
            {author}
          </h4>
          <span className="text-xs text-blue-600 font-semibold">Author</span>
        </div>
      </div>
      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
        {bio}
      </p>
    </div>
  );
}