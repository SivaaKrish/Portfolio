import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Approach } from "@/components/sections/Approach";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const revalidate = 3600;

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
