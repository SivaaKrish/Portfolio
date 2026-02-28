import { profile } from "@/content/profile";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <p className="text-sm uppercase tracking-[0.2em] text-brand-accent">Portfolio</p>
        <h1 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
          <span className="name-reveal inline-block">{profile.name}</span>
          <span className="role-reveal block">{profile.role}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed md:text-lg">{profile.tagline}</p>
        <p className="mt-3 text-sm uppercase tracking-wide text-black/70">{profile.location}</p>
      </Container>
    </section>
  );
}
