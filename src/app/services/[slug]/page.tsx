import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services } from "@/lib/data";
import Button from "@/components/ui/Button";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return { title: service?.title ?? "Service", description: service?.shortDesc };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <div className="container mx-auto py-20 px-4 max-w-3xl">
      <h1 className="text-4xl font-bold">{service.title}</h1>
      <p className="mt-4 text-gray-600">{service.description}</p>

      <h2 className="text-xl font-semibold mt-10 mb-3">What's included</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        {service.features.map((f) => <li key={f}>{f}</li>)}
      </ul>

      <div className="mt-10">
        <Button href="/contact">Get a Quote</Button>
      </div>
    </div>
  );
}