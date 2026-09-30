import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ServiceProcess() {
  const steps = [
    {
      step: "01",
      title: "Discovery & Blueprint",
      desc: "We analyze your target market, technical requirements, and system architecture to draft a precise scope of work.",
    },
    {
      step: "02",
      title: "UI/UX & Prototyping",
      desc: "Interactive Figma wireframes and clickable prototypes validated with key stakeholders before writing code.",
    },
    {
      step: "03",
      title: "Agile Sprints",
      desc: "Iterative two-week sprints with continuous deployment on staging environments, live demos, and transparent feedback.",
    },
    {
      step: "04",
      title: "QA & Production Launch",
      desc: "Rigorous performance, security, and accessibility testing followed by smooth production deployment and hypercare warranty.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50/70 border-b border-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3.5 py-1 rounded-full bg-blue-100/70 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Agile Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Deliver Predictable Excellence
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our battle-tested product development framework eliminates guesswork, reduces technical debt, and guarantees on-time delivery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div
              key={s.step}
              className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl font-black text-blue-600 mb-4 tracking-tight">
                {s.step}
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-5 border border-slate-200/80 text-center flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
          <span>
            Every client gets direct Slack / WhatsApp communication with lead engineers and weekly progress reports.
          </span>
        </div>
      </div>
    </section>
  );
}
