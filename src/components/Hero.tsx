import { cn } from "@/lib/utils";
import { GithubIcon, MailIcon, MapPin } from "lucide-react"; // simpler location icon
import Link from "next/link";

function Hero({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "shadow-acternity mx-auto mt-32 flex max-w-4xl flex-col gap-2 rounded-xl border border-[#b8dcffe1] p-8",
        className,
      )}
    >
      {/* Name */}
      <div className="flex w-full items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight md:text-6xl">
          Aryan Bhardwaj
        </h1>
        {/* Links / CTAs */}
        <div className="flex gap-2 align-middle">
          <button className="shadow-acternity mx-4 hidden items-center rounded-4xl p-4 text-sm text-neutral-700 transition duration-200 text-shadow-xs hover:bg-white/40 md:flex">
            <a href="https://github.com/anastand" target="_blank">
              <GithubIcon size={20} />
            </a>
          </button>
          <button className="shadow-acternity mx-4 hidden items-center rounded-4xl p-4 text-sm text-neutral-700 transition duration-200 text-shadow-xs hover:bg-white/40 md:flex">
            <a href="mailto:bhardwaj03aryan@gmail.com">
              <MailIcon size={20} />
            </a>
          </button>
        </div>
      </div>
      {/* Location */}
      <div className="flex items-center text-neutral-700">
        <MapPin size={14} /> {/* find out how to fix it with resposive size */}
        <p className="text-xs md:text-lg">Delhi, India</p>
      </div>
      {/* Intro */}
      <div className="flex items-start">
        <p className="w-full text-xs tracking-tight text-neutral-500 md:text-lg">
          I&apos;m Full-Stack Web Developer. I have been programming for while. I try to create professional websites.
        </p>
      </div>
    </section>
  );
}

export default Hero;
