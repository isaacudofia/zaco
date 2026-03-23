import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Works />
      <Services />
      <Experience />
      <Contact />
      {/* You can add your project grid below this later */}
    </main>
  );
}