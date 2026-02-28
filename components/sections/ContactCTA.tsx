import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";

export function ContactCTA() {
  return (
    <section className="pb-20 pt-8">
      <Container>
        <div className="rounded-2xl border border-black/10 bg-brand-ink px-8 py-10 text-brand-bg md:px-10">
          <h2 className="font-display text-3xl md:text-5xl">Let&apos;s Build Something Scalable.</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-brand-bg/85 md:text-lg">
            Open to backend engineering roles, API integration-focused positions, and international remote
            opportunities.
            <br />
            Interested in building scalable systems for global products.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-brand-accent px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Email Me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-brand-bg/40 px-5 py-2 text-sm font-semibold text-brand-bg transition hover:bg-brand-bg hover:text-brand-ink"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
