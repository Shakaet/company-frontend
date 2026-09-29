import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { jobs } from "@/lib/data";
import ApplyForm from "@/components/career/ApplyForm";

export function generateStaticParams() {
  return jobs.map((j) => ({ id: j.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);
  return { title: job?.title ?? "Job" };
}

export default async function JobPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);
  if (!job) notFound();

  return (
    <div className="container mx-auto py-20 px-4 max-w-3xl">
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="text-gray-500 mt-2">{job.type} · {job.location}</p>
      <p className="mt-6 text-gray-700">{job.description}</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Requirements</h2>
      <ul className="list-disc pl-6 space-y-1 text-gray-700">
        {job.requirements.map((r) => <li key={r}>{r}</li>)}
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-4">Apply Now</h2>
      <ApplyForm jobTitle={job.title} />
    </div>
  );
}