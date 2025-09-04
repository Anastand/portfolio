import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { BGPattern } from "@/components/ui/bg-pattern";

import Workwith from "@/components/Workwith";

export default function Home() {
  // working with the homepage rn

  return (
    <div className="mx-auto h-screen w-full max-w-4xl p-8">
      <BGPattern variant="dots" mask="fade-center">
        <Navbar className="max-w-4xl px-8" />{" "}
        {/* done with this need to add links for different page */}
        <Hero className="" />
        <Workwith className="" />
      </BGPattern>
    </div>
  );
}
