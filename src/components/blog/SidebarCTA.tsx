import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface SidebarCTAProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function SidebarCTA({
  title = "Need a dedicated engineering pod?",
  description = "Ship your MVP or scale your web & mobile platforms with senior engineers. 2-week risk-free trial.",
  ctaText = "Contact Us",
  ctaHref = "/contact",
}: SidebarCTAProps) {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-5 sm:p-6 overflow-hidden shadow-md">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_60%)] pointer-events-none" />
      <div className="relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold mb-3 backdrop-blur-xs border border-white/20">
          <Sparkles className="w-3.5 h-3.5 text-blue-200" />
          <span>Work With Us</span>
        </div>

        <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug">
          {title}
        </h3>
        {/* <p className="mt-2 text-xs sm:text-sm text-blue-100 leading-relaxed">
          {description}
        </p> */}
        <Link
          href={ctaHref}
          className="mt-5 inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-xl bg-white text-blue-700 font-bold text-xs sm:text-sm hover:bg-blue-50 transition-all shadow-sm hover:-translate-y-0.5"
        >
          <span>{ctaText}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}