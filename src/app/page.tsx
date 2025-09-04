import { Container } from "@/components/Container";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white via-blue-300 to-white ">
      <Container>
        <main>
          <Hero />
        </main>
      </Container>
    </div>
  );
}
