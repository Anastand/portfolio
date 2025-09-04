import { Container } from "@/components/Container";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  // working with the homepage rn
  
  return (
    <Container className="flex items-center justify-center border-2 h-screen">
      <Navbar />
      {/* <Hero /> */}
    </Container>
  );
}
