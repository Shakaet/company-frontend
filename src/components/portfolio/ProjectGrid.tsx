"use client";
import { useState } from "react";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import CategoryFilter, { Category } from "./CategoryFilter";

export default function ProjectGrid() {
  const [active, setActive] = useState<Category>("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <CategoryFilter active={active} onChange={setActive} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </>
  );
}