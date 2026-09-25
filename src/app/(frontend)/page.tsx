import { fetchBanners } from "@/api/banner/banner-api";

const HomePage = async () => {
  const banners = await fetchBanners().catch(() => []);

  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <section className="rounded-3xl bg-slate-950 p-10 text-slate-100">
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">
          Your Technology Partner
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
          Build Fast. Scale Smart. Launch with Confidence.
        </h1>
        <p className="mt-5 max-w-2xl text-slate-300 md:text-lg">
          We design and build modern web platforms, SaaS products, and custom
          software for ambitious businesses.
        </p>
      </section>

      <section className="mt-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Latest Banners (API)</h2>
          <span className="text-sm text-slate-500">
            {banners.length} items fetched
          </span>
        </div>

        {banners.length === 0 ? (
          <div className="rounded-xl border border-dashed p-6 text-slate-500">
            No banner data found.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {banners.map((banner) => (
              <article
                key={banner._id ?? banner.banner_image}
                className="rounded-xl border border-slate-200 p-4"
              >
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Banner
                </p>
                <p className="mt-2 break-all text-sm text-slate-700">
                  {banner.banner_image ?? "No image"}
                </p>
                <p className="mt-3 text-xs text-slate-500">
                  Status: {banner.banner_status ?? "Unknown"}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default HomePage;
