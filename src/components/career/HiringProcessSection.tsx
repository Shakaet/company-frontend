import { CheckCircle2, Clock } from "lucide-react";
import { hiringSteps } from "@/lib/data";

export default function HiringProcessSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3.5 py-1 rounded-full bg-blue-100/70 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Simple & Transparent
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our 4-Step Hiring Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We respect your time. No endless interview rounds or ghosting — here's how we find and onboard top talent.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {hiringSteps.map((step, idx) => (
            <div
              key={step.step}
              className="relative bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 hover:bg-white hover:shadow-lg hover:border-blue-200 transition-all duration-300"
            >
              {/* Step number badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black text-blue-600/90 tracking-tight">
                  {step.step}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                  <Clock className="w-3 h-3 text-blue-600" />
                  {step.duration}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom guarantee strip */}
        <div className="mt-12 bg-blue-50/60 rounded-2xl p-4 sm:p-5 border border-blue-100 text-center flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-blue-900 font-medium">
          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
          <span>
            Every application is read by a real human engineer or hiring manager. No automated bot rejection.
          </span>
        </div>
      </div>
    </section>
  );
}
