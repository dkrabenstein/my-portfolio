import { Container } from "@/components/Container";
import { OutlineButtonLink } from "@/components/OutlineButtonLink";
import { PortraitPlaceholder } from "@/components/home/PortraitPlaceholder";
import { aboutIntro } from "@/data/home";

export function AboutIntro() {
  return (
    <section className="py-(--space-5)">
      <Container className="flex flex-col gap-(--space-5) lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col items-start gap-(--space-4)">
          <h2 className="font-heading text-[clamp(2.5rem,5vw,3.75rem)] font-medium leading-[1.04]">
            {aboutIntro.headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="text-lg leading-[1.65]">{aboutIntro.body}</p>
        </div>
        <PortraitPlaceholder />
      </Container>
    </section>
  );
}
