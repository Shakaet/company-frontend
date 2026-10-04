import type { Metadata } from "next";
import Image from "next/image";
import { Quote, Sparkles, CheckCircle2 } from "lucide-react";
import { getFounderMessage } from "@/lib/data";

export const metadata: Metadata = {
  title: "Founder Message | ITStartup",
  description: "A message from the founders of ITStartup.",
};

export default async function FounderMessagePage() {
  const founder = await getFounderMessage();

  // Fallback if API is down
  const name = founder?.name || "The ITStartup Team";
  const role = founder?.role || "Founders";
  const image = founder?.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80";
  const shortDesc = founder?.shortDesc || "";
  const highlightQuote = founder?.highlightQuote || "";
  const paragraphs = founder?.paragraphs ?? [];
  const commitments = founder?.commitments ?? [];
  const stats = founder?.stats ?? [];

  return (
    <main className="min-h-screen bg-slate-50/40 pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-indigo-50/40 to-white pt-20 pb-16 md:pt-28 md:pb-24 border-b border-slate-100">
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-blue-400/15 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/60 text-blue-700 text-xs md:text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>From the Founders</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Founder's{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Message
            </span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            {/* Image + name + role */}
            <div className="md:col-span-1 text-center md:sticky md:top-24">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 shadow-md mb-5">
                <Image
                  src={image}
                  alt={name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-bold text-slate-900">{name}</h2>
              <p className="text-sm font-semibold text-blue-600 mt-1">{role}</p>
              {shortDesc && (
                <p className="text-xs text-slate-500 mt-2">{shortDesc}</p>
              )}
            </div>

            {/* Message content */}
            <div className="md:col-span-2 space-y-8">
              {/* Highlight quote */}
              {highlightQuote && (
                <div className="relative bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-9 shadow-sm">
                  <Quote className="w-8 h-8 text-blue-200 mb-4" />
                  <p className="text-xl sm:text-2xl font-bold text-slate-900 italic leading-relaxed">
                    "{highlightQuote}"
                  </p>
                </div>
              )}

              {/* Paragraphs */}
              {paragraphs.length > 0 ? (
                <div className="space-y-5 text-slate-600 leading-relaxed text-base sm:text-lg">
                  {paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              ) : (
                <div className="text-slate-600 leading-relaxed text-base">
                  <p>{founder?.message || "Our message is coming soon."}</p>
                </div>
              )}

              {/* Commitments */}
              {commitments.length > 0 && (
                <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">
                    Our Commitments
                  </h3>
                  <ul className="space-y-3">
                    {commitments.map((c, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                        <span className="text-sm sm:text-base">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Stats */}
              {stats.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {stats.map((s, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200/80 p-5 text-center shadow-xs"
                    >
                      <p className="text-2xl font-extrabold text-blue-600">
                        {s.value}
                      </p>
                      <p className="text-xs text-slate-500 font-medium mt-1">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}