import { cn } from "@/lib/utils";
import { GithubIcon, Mail, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer({ className }: { className?: string }) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "mx-auto mt-16 max-w-4xl rounded-t-2xl border border-neutral-200 bg-white/90 p-6 shadow-acternity backdrop-blur-sm",
        className
      )}
    >
      {/* Top Row */}
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        {/* Branding */}
        <p className="text-sm font-medium text-neutral-700">
          © {year} Aryan Bhardwaj · All rights reserved
        </p>

        {/* Links */}
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/anastand"
            target="_blank"
            className="text-neutral-600 transition hover:text-neutral-900"
          >
            <GithubIcon size={18} />
          </Link>
          <a
            href="mailto:bhardwaj03aryan@gmail.com"
            className="text-neutral-600 transition hover:text-neutral-900"
          >
            <Mail size={18} />
          </a>
          <Link
            href="https://linkedin.com/in/"
            target="_blank"
            className="text-neutral-600 transition hover:text-neutral-900"
          >
            <Linkedin size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
