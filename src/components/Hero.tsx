import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <main className="flex max-w-4xl">
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
    </main>
  );
}

export default Hero;
