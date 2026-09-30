import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Founder's Message | ITStartup",
  description: "A personal message from the founder of ITStartup.",
};

export default function FounderMessagePage() {
  return (
    <div className="container mx-auto py-20 px-4 max-w-3xl">
      <SectionTitle title="Founder's Message" />
      <div className="mt-10">
        <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-700 text-lg leading-relaxed">
          "We started with a simple belief — great software should feel effortless.
          Every project we take on is a promise to deliver quality and value."
        </blockquote>
      </div>
    </div>
  );
}
