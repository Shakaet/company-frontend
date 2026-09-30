import { 
  Zap, 
  Users, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Lock
} from "lucide-react";

export default function WhyChooseUs() {
  const advantages = [
    {
      icon: Zap,
      badge: "High Velocity",
      title: "Rapid Sprint Delivery",
      desc: "We ship working code in 2-week agile sprints. You receive clickable staging demos every cycle with zero guesswork.",
      perks: ["Bi-weekly working releases", "Daily async standup updates"],
    },
    {
      icon: Users,
      badge: "Senior Pods",
      title: "Senior-Only Engineers",
      desc: "Work directly with top-tier fullstack engineers and product designers. No junior handovers, no layers of red tape.",
      perks: ["Direct Slack / WhatsApp channel", "Direct CTO & architect advisory"],
    },
    {
      icon: Lock,
      badge: "Zero Lock-In",
      title: "100% IP & Code Ownership",
      desc: "All source code, Docker configs, and design tokens belong to you from day one under clear intellectual property transfer.",
      perks: ["Full GitHub / GitLab repository", "Clean, documented TypeScript"],
    },
    {
      icon: Layers,
      badge: "Production Ready",
      title: "Scalable Architecture",
      desc: "Built to effortlessly handle surges from hundreds to millions of users with 99.9% uptime and automated CI/CD.",
      perks: ["Automated testing & linting", "30-day post-launch warranty"],
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50/60 relative overflow-hidden border-b border-slate-100">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-24 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none absolute -bottom-24 left-1/4 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>The ITStartup Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why High-Growth Companies Partner With Us
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            We eliminate the friction of traditional agencies. Enjoy transparent velocity, enterprise-grade engineering, and flawless execution.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon & Badge Row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Micro Perks List */}
                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
                  {item.perks.map((perk, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}