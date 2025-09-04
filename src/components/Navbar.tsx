"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
function Navbar({ className }: { className?: String }) {
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
      title: "Contact Me",
      href: "/contact",
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
        {/* add github icon here <svg> */}
        <Link
          href="https://github.com/anastand/"
          className="mx-4 text-sm font-medium text-neutral-700"
        >
          Anastand
        </Link>
        <div className="hidden items-center gap-4 text-sm text-neutral-500 md:flex">
          {links.map((link, id) => (
            <Link
              className="hover:font-medium hover:text-neutral-900"
              href={link.href}
              key={id}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <button className="mx-4 hidden items-center text-sm font-medium text-neutral-700 md:flex">
          <a href="mailto:bhardwaj03aryan@gmail.com">Email</a>
        </button>
        {/* add email icon here <svg> */}
        <button
          onClick={() => {
            setIsopen(!isopen);
          }}
          className="md:hidden"
        >
          <MenuIcon />
        </button>
        {isopen && (
          <div className="shadow-acternity absolute right-1 top-16 rounded-4xl bg-white/30 mx-auto w-[30%]  ">
            <div className="flex flex-col items-center gap-4 text-sm text-neutral-500">
              {links.map((link, id) => (
                <Link
                  className="font-medium text-neutral-600"
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
