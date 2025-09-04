import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  // working with the homepage rn

  return (
    <div className="mx-auto w-full max-w-4xl px-4 h-screen">
      <Navbar className="" />
      <Hero className="mt-16"/>
    </div>
  );
}
