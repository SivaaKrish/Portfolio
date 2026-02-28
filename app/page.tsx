import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Approach } from "@/components/sections/Approach";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { portfolioRevalidateSeconds } from "@/lib/cache";

export const revalidate = portfolioRevalidateSeconds;

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Projects />
      <Approach />
      <ContactCTA />
    </main>
  );
}
