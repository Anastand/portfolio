import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

function Hero({ className }: { className?: string }) {
  return (
    <div className={cn("flex max-w-4xl mt-8", className)}>
      <Image
        src="/Person Vector Icon.svg"
        alt="Aryan's profile photo"
        width={200}
        height={200}
        priority
        className="shadow-shadow border-border rounded-full border-2"
      />
      <section>
        <main>
          <h1>Name</h1>
          <p>tagline</p>
          <a href="/work">about page</a>
        </main>
      </section>
    </div>
  );
}

export default Hero;
