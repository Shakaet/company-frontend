import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founder's Message | ITStartup",
  description: "A personal message from the founder of ITStartup on vision, journey and the future.",
};

export default function FounderMessagePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 px-4 text-center">
        <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
          Founder&apos;s Message
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          A Word From{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Our Founder
          </span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          The story, the struggle and the vision that drives everything we do.
        </p>
      </section>

      {/* Message */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">

          {/* Avatar + name */}
          <div className="flex flex-col items-center mb-12">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-3xl font-extrabold shadow-lg shadow-blue-200">
              RU
            </div>
            <h2 className="mt-4 text-xl font-bold text-gray-900">Rahim Uddin</h2>
            <p className="text-sm text-blue-600 font-medium">Founder & CEO, ITStartup</p>
          </div>

          {/* Letter */}
          <article className="prose prose-lg prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
            <p>
              Dear friends, clients and future partners,
            </p>
            <p>
              When I started ITStartup back in 2017, I had one simple belief — <strong>great
              software should feel effortless.</strong> Not just to use, but to build. I watched
              too many brilliant ideas fail — not because the ideas were wrong, but because the
              execution was broken.
            </p>
            <p>
              We started with just four people in a small office, taking on projects others said
              were too ambitious. We stayed up late, solved hard problems and shipped products
              we were genuinely proud of. Those early clients still work with us today — and that
              tells you everything about our values.
            </p>
            <p>
              Today, we are a team of 35+ talented designers, engineers and strategists across
              multiple disciplines. We have delivered over 250 projects, served clients in 18+
              countries and maintained a 99.9% uptime across every system we manage.
            </p>
            <p>
              But the numbers are not what I am most proud of. I am proud of the relationships.
              The startup that raised its Series A after we built their MVP. The e-commerce brand
              that doubled revenue after we redesigned their platform. The hospital system that
              now serves patients more efficiently because of our software.
            </p>
            <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-600 my-8">
              &ldquo;Every project we take on is a promise — a promise to deliver quality,
              to communicate honestly, and to build something that truly lasts.&rdquo;
            </blockquote>
            <p>
              As we grow, one thing will never change: our commitment to doing the right thing
              for every client, every time. We do not chase volume. We chase excellence.
            </p>
            <p>
              If you are here, you are considering trusting us with something important to you.
              We do not take that lightly. I personally stand behind every proposal we make,
              every line of code we write and every design we ship.
            </p>
            <p>
              Let&apos;s build something great together.
            </p>
            <p className="font-semibold text-gray-900 mt-8">
              Warm regards,<br />
              <span className="text-blue-600 text-xl">Rahim Uddin</span><br />
              <span className="text-sm text-gray-500 font-normal">Founder & CEO, ITStartup</span>
            </p>
          </article>

          {/* Signature divider */}
          <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Want to talk directly?</p>
              <a
                href="mailto:rahim@itstartup.com"
                className="text-blue-600 font-semibold hover:underline text-sm"
              >
                rahim@itstartup.com
              </a>
            </div>
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200 text-sm"
            >
              Start a Conversation →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
