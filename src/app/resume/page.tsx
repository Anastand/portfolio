// src/app/resume/page.tsx
import React from "react";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Resume — Aryan Bhardwaj",
  description: "Resume page — coming soon",
};

export default function ResumePage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-4xl items-center justify-center px-4 py-16">
      <div
        className={cn(
          "shadow-acternity flex flex-col items-center justify-center gap-4 rounded-2xl border border-neutral-200 bg-white/90 p-12 backdrop-blur-sm",
        )}
      >
        {/* Heading */}
        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-800">
          Resume
        </h1>

        {/* Coming Soon Text */}
        <p className="text-lg font-medium text-neutral-600">
          🚀 Coming Soon...
        </p>

        {/* Subtext */}
        <p className="max-w-md text-center text-sm text-neutral-500">
          I’m polishing up my resume right now. Check back shortly — you’ll be
          able to view and download it here.
        </p>

        {/* Placeholder button */}
        <button
          disabled
          className="mt-4 cursor-not-allowed rounded-full bg-neutral-200 px-6 py-2 text-sm font-medium text-neutral-500 shadow-inner"
        >
          PDF not yet available
        </button>
      </div>
    </main>
  );
}
