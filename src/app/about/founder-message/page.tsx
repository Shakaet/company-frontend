import type { Metadata } from "next";
import Image from "next/image";
import { Sparkles, Quote, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Founder's Message | ITStartup",
  description:
    "A personal message from Rahim Uddin, Founder & CEO of ITStartup, on our vision, engineering principles, and client commitments.",
  openGraph: {
    title: "Founder's Message | ITStartup",
    description:
      "Read our founder's letter about why we started ITStartup and our dedication to building world-class software products.",
  },
};

export default function FounderMessagePage() {
  const commitments = [
    "100% intellectual property & source code ownership from day one",
    "Senior-only engineering squads with zero junior handovers",
    "Transparent bi-weekly sprint deliverables with working staging links",
    "Sub-second load times and production-ready scalable architecture",
    "Direct communication channels without layers of red tape",
  ];

  return (
    <main className="min-h-screen bg-slate-50/40 pb-24">
      {/* ── Page Hero Header (matching other pages) ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-indigo-50/40 to-white pt-20 pb-16 md:pt-28 md:pb-24 border-b border-slate-100">
        {/* Ambient background glows */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-blue-400/15 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute top-40 right-10 w-72 h-72 bg-indigo-400/10 rounded-full blur-2xl" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/60 text-blue-700 text-xs md:text-sm font-semibold mb-6 shadow-xs backdrop-blur-xs">
            <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
            <span>Leadership Perspective · Vision & Philosophy</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            A Letter From Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Founder & CEO
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Why we started ITStartup, the engineering ethos that guides our culture, and our relentless commitment to building products that scale.
          </p>
        </div>
      </section>

      {/* ── Main Message & Founder Profile Section ── */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">
            
            {/* Left Column: Founder Profile Card (Sticky on Large Screens) */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300">
                {/* Portrait Image */}
                <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden mb-6 bg-slate-100 shadow-inner">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                    alt="Rahim Uddin - Founder & CEO"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-slate-800 shadow-sm">
                      Founder & CEO
                    </span>
                  </div>
                </div>

                {/* Founder Info */}
                <h3 className="text-2xl font-bold text-slate-900">
                  Rahim Uddin
                </h3>
                <p className="text-sm font-semibold text-blue-600 mt-0.5">
                  Founder & Chief Executive Officer
                </p>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Passionate software architect with over a decade of experience helping startups and enterprise leaders design and ship mission-critical digital platforms.
                </p>

                {/* Quick Impact Stats */}
                <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-xl bg-slate-50">
                    <div className="text-base font-extrabold text-slate-900">250+</div>
                    <div className="text-[10px] text-slate-500 font-medium">Shipped</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50">
                    <div className="text-base font-extrabold text-slate-900">18+</div>
                    <div className="text-[10px] text-slate-500 font-medium">Countries</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50">
                    <div className="text-base font-extrabold text-slate-900">99.4%</div>
                    <div className="text-[10px] text-slate-500 font-medium">CSAT</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Founder's Personal Letter */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs space-y-8">
              
              {/* Highlight Quote */}
              <div className="relative pl-6 sm:pl-8 border-l-4 border-blue-600 py-1">
                <Quote className="absolute -top-3 -left-3 w-8 h-8 text-blue-200 fill-blue-100" />
                <p className="text-lg sm:text-xl font-medium text-slate-800 italic leading-relaxed">
                  "We started with a simple belief — great software should feel effortless. Every project we take on is a promise to deliver uncompromised quality, velocity, and enduring business value."
                </p>
              </div>

              {/* Letter Content */}
              <div className="space-y-5 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  When we founded <strong>ITStartup</strong> in 2017, the digital agency landscape was broken. 
                  Ambitious entrepreneurs with world-changing ideas were constantly struggling with bloated code, 
                  missed deadlines, endless communication layers, and junior handovers.
                </p>

                <p>
                  We knew there was a fundamentally better way. By stripping away agency bureaucracy and assembling 
                  autonomous pods of senior fullstack engineers, product designers, and cloud architects, we created 
                  an environment where high-speed execution meets rock-solid engineering.
                </p>

                <h3 className="text-xl font-bold text-slate-900 pt-3">
                  Engineering Principles We Live By
                </h3>

                <p>
                  We do not believe in disposable minimum viable products or quick shortcuts. When you build with us, 
                  every line of TypeScript, every database migration, and every pixel in Figma is treated as an asset 
                  designed to scale gracefully to millions of users.
                </p>

                <p>
                  More importantly, we view our relationship as a true technical partnership. We challenge assumptions, 
                  proactively identify architectural bottlenecks, and align every sprint with your core business metrics.
                </p>
              </div>

              {/* Commitments Checklist */}
              <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/70 space-y-3">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Our Uncompromising Commitments to You:
                </h4>
                {commitments.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Sign-off */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-serif italic text-2xl font-bold text-slate-900">
                    Rahim Uddin
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-1">
                    Founder & CEO · ITStartup
                  </div>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                  IT
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
