import { Sparkles, ShieldCheck, Zap, Lock, Clock } from "lucide-react";

export default function PricingHero() {
  const guarantees = [
    { icon: Lock, label: "100% IP Rights", desc: "Full code ownership from day one" },
    { icon: Zap, label: "2-Week Risk-Free Trial", desc: "Satisfaction guaranteed or refund" },
    { icon: ShieldCheck, label: "Senior Engineers", desc: "Top 3% vetted talent exclusively" },
    { icon: Clock, label: "Cancel Anytime", desc: "No restrictive annual lock-in" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-indigo-50/30 to-white pt-20 pb-16 md:pt-28 md:pb-24 border-b border-slate-100">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-400/15 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-48 right-12 w-64 h-64 bg-indigo-400/10 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/60 text-blue-700 text-xs md:text-sm font-semibold mb-6 shadow-xs">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>Predictable Sprints · Zero Hidden Fees</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
          Predictable Pricing for{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
            Fast-Moving Teams
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Scale your software development with dedicated engineering pods. Transparent monthly sprints, complete code ownership, and zero bureaucracy.
        </p>

        {/* Guarantees Row */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-xs border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-xs hover:border-blue-200 transition-all text-left flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 leading-tight">
                    {item.label}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-1 leading-snug">
                    {item.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
