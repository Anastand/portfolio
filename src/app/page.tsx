import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Porjects";
import Timeline from "@/components/Timeline";

import Workwith from "@/components/Workwith";

export default function Home() {
  // working with the homepage rn

  return (
    // after completing this maybe look for how to make this look cool
    <div className="mx-auto w-full max-w-4xl p-8">
      {/* done with this need to add links for different page */}
      <Hero className="" /> {/* done with this */}
      <Workwith className="" /> {/* done with this */}
      <Timeline className="" />
      <Projects />
      {/* <Footer /> */}
    </div>
  );
}
