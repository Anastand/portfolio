import { cn } from "@/lib/utils";
import React from "react";
import { projectItems } from "@/lib/data/Project";

export default function Projects({ className }: { className?: string }) {
  return (
    <section className={cn("mx-auto mt-12 max-w-4xl px-4", className)}>
      <h1 className="mb-6 text-2xl font-bold tracking-tight md:text-4xl">
        Projects
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {projectItems.map((project) => (
          <div
            key={project.id}
            className={cn(
              // glass but opaque white
              "shadow-acternity rounded-2xl border border-neutral-200 bg-white/90 p-6 backdrop-blur-sm",
              "transition hover:scale-[1.01] hover:shadow-lg",
            )}
          >
            {/* Title + Year */}
            <h2 className="text-lg font-semibold text-neutral-900">
              {project.title}{" "}
              {project.year && (
                <span className="text-sm text-neutral-500">
                  ({project.year})
                </span>
              )}
            </h2>

            {/* Description */}
            <p className="mt-2 text-sm text-neutral-700">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech?.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-4 flex gap-4 text-sm">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 hover:underline"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
