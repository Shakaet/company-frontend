import Link from "next/link";
import { Mail, Sparkles, Send, ArrowRight } from "lucide-react";

export default function TalentPoolCard() {
  return (
    <section id="talent-pool" className="py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 sm:p-12 md:p-16 text-white shadow-2xl">
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-blue-300 text-xs font-semibold mb-6 border border-white/10 backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>General Talent Network</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Don’t See the Exact Role You’re Looking For?
            </h2>

            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              We’re always eager to meet high-caliber designers, engineers, product managers, and marketers. 
              Send us your CV and portfolio — when a matching opening comes up, you'll be the first we call.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="mailto:careers@itstartup.com?subject=General Application / Talent Network Inquiry"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Drop Your Resume (careers@itstartup.com)</span>
              </a>

              <a
                href="#open-positions"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 transition-all duration-200"
              >
                <span>Browse Listed Roles</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
