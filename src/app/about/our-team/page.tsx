import type { Metadata } from "next";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { getTeamMembers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Team | ITStartup",
  description: "Meet the passionate team behind ITStartup's digital products.",
};

export default async function OurTeamPage() {
  const team = await getTeamMembers();

  return (
    <main className="min-h-screen bg-slate-50/40 pb-24">
      {/* ── Page Hero Header (matching other pages) ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-indigo-50/40 to-white pt-20 pb-16 md:pt-28 md:pb-24 border-b border-slate-100">
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-blue-400/15 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute top-40 right-10 w-72 h-72 bg-indigo-400/10 rounded-full blur-2xl" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/60 text-blue-700 text-xs md:text-sm font-semibold mb-6 shadow-xs backdrop-blur-xs">
            <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
            <span>Leadership & Core Team</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Team
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            The passionate people who make it happen. Meet the core minds crafting high-performance digital products.
          </p>
        </div>
      </section>

      {/* ── Team Members (Big Cards with Big Images) ── */}
      <section className="py-16 sm:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {team.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              {team.map((m) => (
                <div
                  key={m.id}
                  className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center"
                >
                  {/* Big Image Container */}
                  <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden mb-6 bg-slate-100 shadow-xs">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {m.name}
                  </h3>
                  <p className="text-base font-semibold text-blue-600 mt-1.5">
                    {m.role}
                  </p>

                  {/* Bio (optional — shows if API provides it) */}
                  {m.bio && (
                    <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                      {m.bio}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-4 bg-white rounded-3xl border border-dashed border-slate-200 max-w-lg mx-auto">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                No team members yet
              </h3>
              <p className="text-sm text-slate-500">
                Check back soon — our team page is being updated.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}