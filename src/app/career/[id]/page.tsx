import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  getJobs,
  getJobById,
  getRelatedJobs
} from "@/lib/data";
import ApplyForm from "@/components/career/ApplyForm";
import ShareJobButton from "@/components/career/ShareJobButton";
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  DollarSign,
  Calendar,
  CheckCircle2,
  Sparkles,
  Zap,
  Mail,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Code
} from "lucide-react";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateStaticParams() {
  const allJobs = await getJobs();
  return allJobs.map((j) => ({ id: j.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const job = await getJobById(id);

  if (!job) {
    return {
      title: "Job Opening Not Found",
    };
  }

  return {
    title: `${job.title} | Careers`,
    description: job.description,
    openGraph: {
      title: `${job.title} (${job.workplaceType})`,
      description: job.description,
    },
  };
}

export default async function JobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = await getJobById(id);

  if (!job) {
    notFound();
  }

  const relatedJobs = await getRelatedJobs(job.id, job.department);

  const getWorkplaceBadgeColor = (type: string) => {
    switch (type) {
      case "Remote":
        return "bg-emerald-50 text-emerald-700 border-emerald-200/60";
      case "Hybrid":
        return "bg-sky-50 text-sky-700 border-sky-200/60";
      default:
        return "bg-indigo-50 text-indigo-700 border-indigo-200/60";
    }
  };

  const getWorkplaceDot = (type: string) => {
    switch (type) {
      case "Remote":
        return "bg-emerald-500";
      case "Hybrid":
        return "bg-sky-500";
      default:
        return "bg-indigo-500";
    }
  };

  return (
    <main className="min-h-screen bg-slate-50/40 pb-24">
      {/* Top Header & Breadcrumbs Banner */}
      <section className="bg-gradient-to-b from-blue-50/80 via-white to-slate-50/30 border-b border-slate-200/70 pt-8 pb-12 sm:pt-10 sm:pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Breadcrumb & Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
              <Link
                href="/career"
                className="inline-flex items-center gap-1.5 font-semibold text-slate-700 hover:text-blue-600 transition"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All Openings</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              <span className="text-slate-400">{job.department}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              <span className="text-slate-900 font-medium truncate max-w-[200px] sm:max-w-none">
                {job.title}
              </span>
            </div>

            {/* Share Job */}
            <ShareJobButton title={job.title} jobId={job.id} />
          </div>

          {/* Job Hero Box */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-xs">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-4">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
                    {job.department}
                  </span>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getWorkplaceBadgeColor(job.workplaceType)}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${getWorkplaceDot(job.workplaceType)}`} />
                    {job.workplaceType}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                    {job.type}
                  </span>
                  {job.urgent && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                      <Zap className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                      Urgent Need
                    </span>
                  )}
                </div>

                {/* Job Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {job.title}
                </h1>

                {/* Meta details strip */}
                <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-slate-600 pt-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{job.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-slate-900">
                    <DollarSign className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Apply before {job.deadline}</span>
                  </div>
                </div>
              </div>

              {/* Quick Action Button */}
              <div className="shrink-0 flex items-center lg:flex-col justify-end gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                <a
                  href="#apply"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 shadow-md hover:shadow-lg shadow-blue-600/20 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-xs text-slate-400">
                  Posted {job.postedDate}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sticky Sidebar */}
      <div className="container mx-auto px-4 max-w-6xl mt-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Job Details & Application Form */}
          <div className="lg:col-span-8 space-y-10">
            {/* About the Role */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-9 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span>About the Role</span>
              </h2>
              <div className="text-slate-600 leading-relaxed space-y-4 text-base">
                <p>
                  {job.aboutRole || job.description}
                </p>
                <p>
                  At Our Company, you will work with modern architectures, automated testing, and CI/CD workflows.
                  We believe in continuous feedback, pragmatic code design, and maintaining high performance benchmarks.
                </p>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-9 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5 flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <span>Key Responsibilities</span>
              </h2>
              <ul className="space-y-3.5">
                {job.responsibilities && job.responsibilities.length > 0 ? (
                  job.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 text-base leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-slate-600">Collaborate with the cross-functional team to ship impactful features.</li>
                )}
              </ul>
            </div>

            {/* Qualifications & Requirements */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-9 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5 flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                <span>What We Look For (Requirements)</span>
              </h2>
              <ul className="space-y-3.5">
                {job.requirements && job.requirements.length > 0 ? (
                  job.requirements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 text-base leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-slate-600">Strong fundamentals and a willingness to learn.</li>
                )}
              </ul>

              {/* Nice to Have Section */}
              {job.niceToHave && job.niceToHave.length > 0 && (
                <div className="mt-8 pt-8 border-t border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 text-indigo-900">
                    <Sparkles className="w-4 h-4 text-indigo-600" />
                    <span>Nice to Have (Bonus Points)</span>
                  </h3>
                  <ul className="space-y-3">
                    {job.niceToHave.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                        <span className="w-2 h-2 rounded-full bg-indigo-400 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Tech Stack */}
            {job.techStack && job.techStack.length > 0 && (
              <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-9 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2.5">
                  <Code className="w-5 h-5 text-blue-600" />
                  <span>Tech Stack & Tools</span>
                </h2>
                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  {job.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-xl text-sm font-semibold bg-slate-50 text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits specific to this role */}
            {job.benefits && job.benefits.length > 0 && (
              <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-9 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5 flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  <span>Perks & What We Offer</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {job.benefits.map((b, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200/70 flex items-start gap-3"
                    >
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                        ✓
                      </span>
                      <span className="text-sm font-medium text-slate-700 leading-snug">
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Application Section */}
            <div id="apply" className="scroll-mt-24">
              <ApplyForm
                jobTitle={job.title}
                jobId={job.id}
                department={job.department}
              />
            </div>
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* Quick Overview Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 pb-4 border-b border-slate-100">
                Job Overview
              </h3>

              <div className="divide-y divide-slate-100 text-sm">
                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-slate-500">Job Reference</span>
                  <span className="font-mono text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                    #{job.id}
                  </span>
                </div>
                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-slate-500">Department</span>
                  <span className="font-semibold text-slate-800">{job.department}</span>
                </div>
                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-slate-500">Employment Type</span>
                  <span className="font-semibold text-slate-800">{job.type}</span>
                </div>
                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-slate-500">Workplace Model</span>
                  <span className="font-semibold text-slate-800">{job.workplaceType}</span>
                </div>
                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-slate-500">Experience</span>
                  <span className="font-semibold text-slate-800">{job.experience}</span>
                </div>
                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-slate-500">Salary</span>
                  <span className="font-bold text-emerald-600">{job.salary}</span>
                </div>
                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-slate-500">Deadline</span>
                  <span className="font-semibold text-slate-800">{job.deadline}</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100">
                <a
                  href="#apply"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 shadow-md shadow-blue-600/20 hover:-translate-y-0.5 transition-all"
                >
                  <span>Apply For This Position</span>
                </a>
              </div>
            </div>

            {/* Recruiter Support Card */}
            <div className="bg-gradient-to-br from-blue-50/70 to-indigo-50/60 rounded-3xl border border-blue-100 p-6 shadow-xs">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
                  HR
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Questions about this role?
                  </h4>
                  <p className="text-xs text-slate-500">
                    Our talent acquisition team is here to help.
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Reach out directly with your questions or portfolio links:
              </p>
              <a
                href={`mailto:careers@yourwebsite.com?subject=Question regarding ${encodeURIComponent(job.title)}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-800 hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>careers@yourwebsite.com</span>
              </a>
            </div>

            {/* Related Openings Card */}
            {relatedJobs.length > 0 && (
              <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-4">
                  Other Openings You May Like
                </h3>
                <div className="space-y-3">
                  {relatedJobs.map((rj) => (
                    <Link
                      key={rj.id}
                      href={`/career/${rj.id}`}
                      className="group block p-3.5 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-semibold text-blue-600">
                          {rj.department}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          {rj.workplaceType}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors mt-1">
                        {rj.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                        {rj.salary}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}