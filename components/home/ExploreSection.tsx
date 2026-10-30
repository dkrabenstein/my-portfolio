import { Container } from "@/components/Container";
import { PageLinkCard } from "@/components/home/PageLinkCard";
import { explore } from "@/data/home";

export function ExploreSection() {
  return (
    <section className="pb-(--space-5)">
      <Container className="flex flex-col gap-(--space-4)">
        <hr className="border-muted/30" />
        <div className="flex flex-wrap items-end justify-between gap-(--space-3)">
          <h2 className="font-heading text-[clamp(2.25rem,4.5vw,3.5rem)] font-medium">{explore.heading}</h2>
          <p className="font-mono text-[11px] uppercase leading-[1.4] text-accent">{explore.eyebrow}</p>
        </div>
        <div className="grid gap-(--space-4) sm:grid-cols-2 lg:grid-cols-3">
          {explore.links.map((link) => (
            <PageLinkCard key={link.href} link={link} />
          ))}
        </div>
      </Container>
    </section>
  );
}
