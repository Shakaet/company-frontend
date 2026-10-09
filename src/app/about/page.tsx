import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { teamMembers } from "@/lib/data";

export default function AboutPage() {
  const topTeam = teamMembers.slice(0, 3);

  return (
    <div className="container mx-auto py-20 px-4 max-w-6xl">
      <SectionTitle title="About Our Company" subtitle="We are a team of passionate builders." />
      <p className="max-w-3xl mx-auto text-gray-600 text-center text-base sm:text-lg leading-relaxed">
        Founded in 2026, NeutrinoByte has helped over 10+ businesses launch scalable digital products.
        We combine user experience design, distributed cloud engineering, and growth strategy under one roof.
      </p>

      {/* Team Preview Section */}
      <div className="mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Core Leadership</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Our Team</h2>
          </div>
          <Link
            href="/about/our-team"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition"
          >
            <span>View All Team Members</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {topTeam.map((m) => (
            <div
              key={m.id}
              className="group bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-72 rounded-2xl overflow-hidden mb-4 bg-slate-100">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/95 text-slate-800 shadow-sm">
                      {m.department}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {m.name}
                </h3>
                <p className="text-xs font-semibold text-blue-600 mt-0.5">{m.role}</p>
                <p className="text-xs text-slate-600 mt-2 line-clamp-2">{m.bio}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1">
                {m.expertise.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-medium bg-slate-50 text-slate-600 border border-slate-200 px-2 py-0.5 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Founder's Message Section */}
      <div className="mt-24 max-w-3xl mx-auto bg-gradient-to-br from-blue-50/70 to-indigo-50/40 p-8 sm:p-10 rounded-3xl border border-blue-100">
        <SectionTitle title="Founder's Message" />
        <blockquote className="mt-4 border-l-4 border-blue-600 pl-6 italic text-slate-700 text-base sm:text-lg leading-relaxed">
          "We started with a simple belief — great software should feel effortless.
          Every project we take on is a promise to deliver uncompromised quality, speed, and real enterprise value."
        </blockquote>
        <div className="mt-4 pl-6 text-sm font-bold text-slate-900">— Rahim Uddin, Founder & CEO</div>
      </div>
    </div>
  );
}