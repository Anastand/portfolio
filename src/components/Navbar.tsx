"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { GithubIcon, Mail, MenuIcon } from "lucide-react";
import { useState } from "react";

function Navbar({ className }: { className?: string }) {
  const links = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Resume",
      href: "/resume",
    },
  ];
  const [isopen, setIsopen] = useState<boolean>(false);
  return (
    <div className="relative">
      <div
        className={cn(
          "shadow-acternity relative mx-auto mt-4 flex w-full items-center justify-between rounded-4xl bg-white/30 p-4",
          className,
        )}
      >
        <div className="mx-4 flex items-center rounded-4xl px-4 py-1 shadow-md transition duration-200 hover:bg-white/40">
          <Link
            // href="https://github.com/anastand/"
            href="/"
            className="text-sm font-medium text-neutral-700 text-shadow-xs"
          >
            Anastand
          </Link>
        </div>
        <div className="hidden items-center gap-4 text-sm text-neutral-500 md:flex">
          {links.map((link, id) => (
            <Link
              className="transition duration-200 hover:font-medium hover:text-neutral-900 hover:shadow-xs"
              href={link.href}
              key={id}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <button className="shadow-acternity mx-4 flex items-center gap-1 rounded-4xl px-4 py-1 text-sm text-neutral-700 transition duration-200 text-shadow-xs hover:bg-white/40 md:flex">
          <a href="mailto:bhardwaj03aryan@gmail.com">Email</a>
          <Mail size={16} color="#FF637E" />
        </button>
        <button
          onClick={() => {
            setIsopen(!isopen);
          }}
          className="md:hidden"
        >
          <MenuIcon />
        </button>
        {isopen && (
          <div className="shadow-acternity absolute inset-x-0 top-18 mx-auto w-full rounded-4xl bg-white/40 p-2 shadow-blue-200">
            <div className="flex flex-col items-center gap-4 text-sm text-neutral-500">
              {links.map((link, id) => (
                <Link
                  className="font-medium text-neutral-700 text-shadow-md"
                  href={link.href}
                  key={id}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        )}{" "}
      </div>
    </div>
  );
}

export default Navbar;
