import Image from "next/image";
import { Project } from "@/lib/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-xl overflow-hidden border group">
      <div className="relative h-52">
        <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-500">{project.client}</p>
        <p className="text-sm text-gray-600 mt-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((t) => (
            <span key={t} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}