// src/app/projects/page.tsx
import React from "react";
import { cn } from "@/lib/utils";
import { projectItems } from "@/lib/data/Project";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Projects • Aryan Bhardwaj",
  description:
    "Projects by Aryan Bhardwaj — curated list with previews and links.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Projects</h1>
        <p className="mt-2 text-sm text-neutral-600">
          Selected apps and experiments — with live previews and GitHub links.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {projectItems.map((project) => (
          <article
            key={project.id}
            className={cn(
              "shadow-acternity flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:shadow-lg",
            )}
          >
            {/* Embedded demo preview */}
            {project.demo && (
              <div className="relative aspect-video w-full overflow-hidden border-b border-neutral-200">
                <iframe
                  src={project.demo}
                  className="h-full w-full"
                  loading="lazy"
                  sandbox="allow-same-origin allow-scripts allow-popups"
                />
              </div>
            )}

            <div className="flex flex-col gap-3 p-5">
              {/* Title */}
              <h2 className="text-lg font-semibold text-neutral-900">
                {project.title}{" "}
                {project.year && (
                  <span className="ml-1 text-sm font-medium text-neutral-500">
                    ({project.year})
                  </span>
                )}
              </h2>

              {/* Description */}
              <p className="text-sm text-neutral-700">{project.description}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech?.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-blue-700 ring-1 ring-blue-100"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-2 flex gap-3">
                {project.repo && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="rounded-full"
                  >
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button
                    asChild
                    variant="default"
                    size="sm"
                    className="rounded-full bg-blue-600 text-white hover:bg-blue-700"
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
