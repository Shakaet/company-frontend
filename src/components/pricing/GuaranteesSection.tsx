// src/components/pricing/GuaranteesSection.tsx
import { ShieldCheck } from "lucide-react";
import type { Guarantee } from "@/lib/types";

interface GuaranteesSectionProps {
  guarantees: Guarantee[];
}

export default function GuaranteesSection({ guarantees }: GuaranteesSectionProps) {
  if (!guarantees || guarantees.length === 0) return null;

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Our Guarantees</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Built on trust, backed by results
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
            Every engagement comes with these commitments — no fine print, no hidden conditions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {guarantees.map((g) => (
            <div
              key={g.id}
              className="group h-full flex flex-col bg-white rounded-2xl border border-slate-200/80 p-6 hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {g.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                {g.label}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {g.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}