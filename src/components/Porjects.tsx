import { cn } from "@/lib/utils";
import React from "react";
import { projectItems } from "@/lib/data/Project";

export default function Projects({ className }: { className?: string }) {
  return (
    <section className={cn("mx-auto mt-12 max-w-4xl px-4", className)}>
      <h1 className="mb-6 text-2xl font-bold tracking-tight md:text-4xl">
        Projects
      </h1>

      <div className="grid gap-4 md:grid-cols-2">
        {projectItems.map((project) => (
          <div
            key={project.id}
            className="shadow-acternity rounded-xl border border-white/20 bg-amber-300 p-4 dark:border-neutral-800 dark:bg-neutral-900/40"
          >
            {/* Title + Year */}
            <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
              {project.title}{" "}
              {project.year && (
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  ({project.year})
                </span>
              )}
            </h2>

            {/* Description */}
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-3 flex flex-wrap gap-1">
              {project.tech?.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/70 px-2 py-0.5 text-[10px] font-medium text-blue-700 ring-1 ring-white/60 dark:bg-neutral-800 dark:text-blue-300 dark:ring-neutral-700"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-3 flex gap-3 text-sm">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
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
