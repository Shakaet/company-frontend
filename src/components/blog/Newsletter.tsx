"use client";
import { useState } from "react";

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
    <section className="pt-16 sm:pt-20 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-3xl overflow-hidden p-10 sm:p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_55%)]" />
          <div className="relative">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Get new articles in your inbox
            </h3>
            <p className="mt-3 text-blue-100 text-sm sm:text-base">
              One practical email a month. No spam.
            </p>

            {submitted ? (
              <p className="mt-8 text-white font-semibold">
                ✅ Thanks! You&apos;re on the list.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 px-5 py-3 rounded-xl bg-white text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-white/30"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors cursor-pointer"
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