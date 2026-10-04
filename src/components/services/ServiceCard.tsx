import Link from "next/link";
import Image from "next/image";
import {
  Code,
  Smartphone,
  Palette,
  Megaphone,
  Cloud,
  CheckCircle2,
  Sparkles,
  LucideIcon,
} from "lucide-react";
import { Service } from "@/lib/types";

const iconMap: Record<string, LucideIcon> = {
  Code,
  Smartphone,
  Palette,
  Megaphone,
  Cloud,
};

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

export default function ServiceCard({ service, featured }: ServiceCardProps) {
  // If API sends a URL (Cloudinary), render an image.
  // Otherwise, use the Lucide icon map with a fallback.
  const isImageIcon =
    typeof service.icon === "string" && service.icon.startsWith("http");
  const IconComponent = !isImageIcon ? iconMap[service.icon] || Code : null;

  return (
    <div
      className={`group relative bg-white rounded-3xl border transition-all duration-300 flex flex-col justify-between p-6 sm:p-8 hover:-translate-y-1.5 ${
        featured
          ? "border-blue-300 shadow-lg shadow-blue-500/5 ring-1 ring-blue-500/20"
          : "border-slate-200/80 shadow-xs hover:border-blue-300 hover:shadow-xl"
      }`}
    >
      <div>
        {/* Top Badges & Icon */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className="w-13 h-13 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs overflow-hidden p-2">
            {isImageIcon ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={service.icon}
                alt={service.title}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            ) : IconComponent ? (
              <IconComponent className="w-6 h-6" />
            ) : (
              <Code className="w-6 h-6" />
            )}
          </div>

          <div className="flex items-center gap-2">
            {service.badge && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/60">
                <Sparkles className="w-3 h-3 text-blue-600" />
                {service.badge}
              </span>
            )}
            {service.category && (
              <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                {service.category}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          <Link href={`/services/${service.slug}`} className="focus:outline-hidden">
            <span className="absolute inset-0 z-0" />
            {service.title}
          </Link>
        </h3>

        {/* Short Description */}
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          {service.shortDesc}
        </p>

        {/* Features Checklist */}
        {service.features && service.features.length > 0 && (
          <div className="mt-5 pt-5 border-t border-slate-100 space-y-2.5">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Key Capabilities:
            </div>
            {service.features.slice(0, 3).map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span className="leading-snug">{feat}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Chips */}
        {service.techStack && service.techStack.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5 relative z-10">
            {service.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-50 text-slate-600 border border-slate-200/70"
              >
                {tech}
              </span>
            ))}
            {service.techStack.length > 4 && (
              <span className="text-[11px] text-slate-400 font-medium pl-1 self-center">
                +{service.techStack.length - 4}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Bottom Row: Starting price */}
      <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between relative z-10">
        <div>
          {service.pricingStartingAt ? (
            <div>
              <span className="text-[11px] text-slate-400 font-medium block">
                Starting from
              </span>
              <span className="text-base font-extrabold text-slate-900">
                {service.pricingStartingAt}
              </span>
            </div>
          ) : (
            <span className="text-xs text-slate-500 font-medium">Custom Scope</span>
          )}
        </div>
      </div>
    </div>
  );
}