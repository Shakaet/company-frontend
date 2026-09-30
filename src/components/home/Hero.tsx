import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-200 rounded-full blur-3xl opacity-30" />

      <div className="relative container-x py-28 text-center">
        <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
          🚀 Trusted by 120+ startups
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          We Build{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Digital Products
          </span>{" "}
          That Scale
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          From web apps to mobile experiences — we help startups ship faster.
        </p>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <Link href="/contact" className="btn-primary">Get Started</Link>
          <Link href="/portfolio" className="btn-outline">View Work</Link>
        </div>
      </div>
    </section>
  );
}