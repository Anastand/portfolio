import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { projectItems } from "@/lib/data/Project";

export default function Projects({ className }: { className?: string }) {
  return (
    <section className={cn("mx-auto mt-12 max-w-4xl px-4", className)}>
      <h2 className="mb-6 text-2xl font-bold tracking-tight">Projects</h2>

      <BentoGrid className="mx-auto max-w-4xl gap-3 md:auto-rows-[12rem]">
        {projectItems.map((project, i) => (
          <BentoGridItem
            key={project.id}
            title={`${project.title} ${
              project.year ? `(${project.year})` : ""
            }`}
            description={project.description}
            className={cn(
              i % 3 === 0 ? "md:col-span-2" : "md:col-span-1",
              "shadow-acternity rounded-xl border bg-white/30 p-4 ring-1 ring-white/20 backdrop-blur-md",
            )}
            icon={
              <div className="mt-2 flex flex-wrap gap-1">
                {project.tech?.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/70 px-2 py-0.5 text-[10px] font-medium text-blue-700 ring-1 ring-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            }
          />
        ))}
      </BentoGrid>
    </section>
  );
}
