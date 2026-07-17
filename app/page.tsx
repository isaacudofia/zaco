import ClosingCta from "@/components/ClosingCta";
import Hero from "@/components/Hero";
import Works from "@/components/Works";

export default function Home() {
  return (
    <>
      <Hero />
      <Works compact />
      <ClosingCta />
    </>
  );
}
