import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  // working with the homepage rn

  return (
    <div className="mx-auto h-screen w-full max-w-4xl px-4">
      <Navbar /> {/* done with this need to add links for different page */}
      <Hero className="" />
    </div>
  );
}
