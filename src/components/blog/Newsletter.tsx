"use client";
import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to /api/v1/newsletter when ready
    setSubmitted(true);
  };

  return (
    <section className="pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-3xl overflow-hidden p-6 sm:p-10 md:p-14 lg:p-16 text-center shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_55%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center mx-auto mb-4 sm:mb-6 backdrop-blur-xs border border-white/20">
              <Mail className="w-6 h-6" />
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Get new engineering insights in your inbox
            </h3>
            
            <p className="mt-3 text-blue-100 text-xs sm:text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              One practical monthly digest on architecture, performance, and scaling. Zero spam, unsubscribe anytime.
            </p>

            {submitted ? (
              <div className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/15 text-white font-semibold backdrop-blur-xs border border-white/20 text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                <span>Thanks! You&apos;re subscribed to the newsletter.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-2.5 sm:gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-white text-slate-900 text-sm sm:text-base placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-xs"
                />
                <button
                  type="submit"
                  className="px-6 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-white text-blue-700 font-bold text-sm sm:text-base hover:bg-blue-50 transition-all shadow-md hover:-translate-y-0.5 cursor-pointer shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}