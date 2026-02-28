import { projects } from "@/content/projects";
import { Container } from "@/components/ui/Container";

export function Projects() {
  return (
    <section className="py-16">
      <Container>
        <h2 className="section-title">Featured Work</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-black/10 bg-white/70 p-6 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <h3 className="font-display text-2xl">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{project.description}</p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-black/80">
                {project.impact.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs uppercase tracking-wider text-black/60">{project.tech.join(" · ")}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
