import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function Hero() {
  return (
    <main className="felx max-w-4xl">
        <Image
          src="/Person Vector Icon.svg"
          alt="Aryan's profile photo"
          width={200}
          height={200}
          className="rounded-full border-2 border-border shadow-shadow"
        />
      <section>
        <main>
          <h1>Name</h1>
          <p>tagline</p>
          <a href="/work">about page</a>
          <Button variant={`custom`}>Button</Button>
        </main>
      </section>
    </main>
  );
}

export default Hero;
