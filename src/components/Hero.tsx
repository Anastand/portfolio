import { cn } from "@/lib/utils";
import { GithubIcon, MailIcon, MapPin } from "lucide-react"; // simpler location icon
import Link from "next/link";

function Hero({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "shadow-acternity mx-auto mt-24 flex max-w-2xl flex-col gap-2 rounded-xl border-1 border-[#B8DBFF] p-8 text-center",
        className,
      )}
    >
      {/* Name */}
      <div className="flex w-full items-center justify-between">
        <h1 className="text-6xl font-bold tracking-tight">Aryan Bhardwaj</h1>
        {/* Links / CTAs */}
        <div className="flex gap-4 align-middle">
          <a href="https://github.com/anastand" target="_blank">
            <GithubIcon />
          </a>
          <a href="mailto:bhardwaj03aryan@gmail.com">
            <MailIcon />
          </a>
        </div>
      </div>
      {/* Location */}
      <div className="flex items-center text-neutral-700">
        <MapPin size={14} />
        <p>Delhi, India</p>
      </div>
      {/* Intro */}
      <div className="flex items-start text-xs text-neutral-600">
        <p>
          Full-Stack Developer crafting clean web apps and AI-powered
          experiences.
        </p>
      </div>
    </section>
  );
}

export default Hero;
