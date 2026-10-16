import Link from "next/link";

interface SidebarCTAProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function SidebarCTA({
  title = "Need a dedicated pod?",
  description = "2-week risk-free trial. Cancel anytime.",
  ctaText = "Contact Us",
  ctaHref = "/contact",
}: SidebarCTAProps) {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-2xl p-6 overflow-hidden shadow-lg">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
      <div className="relative">
        <h3 className="text-lg font-extrabold text-white leading-snug">
          {title}
        </h3>
        <p className="mt-2 text-sm text-blue-100 leading-relaxed">
          {description}
        </p>
        <Link
          href={ctaHref}
          className="mt-5 inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 transition-colors shadow-sm"
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
}