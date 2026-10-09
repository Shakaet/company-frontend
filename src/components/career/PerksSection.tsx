import { 
  Laptop, 
  Heart, 
  Globe, 
  GraduationCap, 
  TrendingUp, 
  Sun, 
  Coffee, 
  Users,
  LucideIcon
} from "lucide-react";
import { companyPerks } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Laptop,
  Heart,
  Globe,
  GraduationCap,
  TrendingUp,
  Sun,
  Coffee,
  Users,
};

export default function PerksSection() {
  return (
    <section id="perks" className="py-20 bg-slate-50/70 border-b border-slate-100 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3.5 py-1 rounded-full bg-blue-100/70 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Life At Our Company
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Perks Built for Ambitious Creators
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We invest deeply in our people. From top-tier gear and generous wellness programs to continuous learning, we give you everything you need to thrive.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyPerks.map((perk, i) => {
            const Icon = iconMap[perk.icon] || Laptop;
            return (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">
                    {perk.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
