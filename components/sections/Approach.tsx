import { Container } from "@/components/ui/Container";

export function Approach() {
  return (
    <section className="py-16">
      <Container>
        <div className="rounded-2xl border border-black/10 bg-white/60 p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">Engineering Approach</p>
          <h2 className="section-title mt-3">How I Think</h2>
          <p className="mt-5 max-w-4xl text-base leading-relaxed md:text-lg">
            I approach software engineering by identifying system layers (UI, API, Database, Infrastructure),
            isolating root causes, and implementing scalable, maintainable solutions.
            <br />
            I prioritize reliability, performance, and clarity over quick fixes.
          </p>
        </div>
      </Container>
    </section>
  );
}
