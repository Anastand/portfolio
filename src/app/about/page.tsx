// src/app/about/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "About • Aryan Bhardwaj",
  description:
    "About Aryan Bhardwaj — Full-Stack Web Developer focused on minimal, fast, accessible websites.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <article className="shadow-acternity rounded-2xl border border-neutral-200 bg-white p-8">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight">About Me</h1>
          <p className="mt-2 text-sm text-neutral-600">
            Full-Stack Developer · Minimalist · Problem Solver
          </p>
        </header>

        <section className="space-y-6 text-sm leading-relaxed text-neutral-700">
          <p>
            Hi, I’m <strong>Aryan Bhardwaj</strong>, a developer who builds
            fast, accessible, and minimalist web apps. I care about speed,
            clarity, and usability more than flashy extras.
          </p>

          <p>
            My focus areas include <strong>performance</strong>,
            <strong> accessibility</strong>, <strong>SEO</strong>, and
            <strong> clean design</strong>. I enjoy making things lightweight
            without sacrificing functionality.
          </p>

          <p>
            I’ve worked on small React apps and larger Next.js projects —
            including the skeleton for{" "}
            <a
              href="https://skynetdev.space"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              SkynetDev.space
            </a>
            .
          </p>

          <p>
            My toolkit: Next.js, React, TypeScript, Tailwind, Node, Express,
            GraphQL, MongoDB, PostgreSQL, and Prisma.
          </p>

          <p>
            Let’s connect:{" "}
            <a
              href="mailto:bhardwaj03aryan@gmail.com"
              className="text-blue-600 hover:underline"
            >
              bhardwaj03aryan@gmail.com
            </a>
          </p>
        </section>

        <footer className="mt-8 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Aryan Bhardwaj ·{" "}
          <Link href="/" className="hover:text-neutral-800 hover:underline">
            Back to home
          </Link>
        </footer>
      </article>
    </main>
  );
}
