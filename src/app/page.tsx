import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import { BGPattern } from "@/components/ui/bg-pattern";

import Workwith from "@/components/Workwith";

export default function Home() {
  // working with the homepage rn

  return (
    // after completing this maybe look for how to make this look cool
    <div className="mx-auto h-screen w-full max-w-4xl p-8">
      <BGPattern variant="dots" mask="fade-center">
        {/* done with this need to add links for different page */}
        <Hero className="" /> {/* done with this */}
        <Workwith className="" /> {/* done with this */}
        <Timeline className="" />
      </BGPattern>
    </div>
  );
}
