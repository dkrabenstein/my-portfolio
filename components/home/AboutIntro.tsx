import { Container } from "@/components/Container";
import { OutlineButtonLink } from "@/components/OutlineButtonLink";
import { PortraitPlaceholder } from "@/components/home/PortraitPlaceholder";
import { aboutIntro } from "@/data/home";

export function AboutIntro() {
  return (
    <section className="py-(--space-5)">
      <Container className="flex flex-col gap-(--space-5) lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col items-start gap-(--space-4)">
          <p className="font-mono text-[11px] uppercase leading-[1.4] text-accent">{aboutIntro.eyebrow}</p>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,3.75rem)] font-medium leading-[1.04]">
            {aboutIntro.headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="text-lg leading-[1.65]">{aboutIntro.body}</p>
          <p className="font-mono text-[11px] leading-normal text-muted">{aboutIntro.note}</p>
          <OutlineButtonLink href={aboutIntro.cta.href}>{aboutIntro.cta.label}</OutlineButtonLink>
        </div>

        <PortraitPlaceholder />
      </Container>
    </section>
  );
}
