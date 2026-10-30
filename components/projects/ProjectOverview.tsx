import { Container } from "@/components/Container";
import type { Project } from "@/data/projects";

type ProjectOverviewProps = {
  overview: Project["overview"];
  label: string;
};

export function ProjectOverview({ overview, label }: ProjectOverviewProps) {
  return (
    <Container className="flex flex-col gap-(--space-4) py-(--space-5) lg:flex-row lg:gap-(--space-5)">
      <div className="flex flex-col gap-(--space-3) lg:w-[440px] lg:shrink-0">
        <p className="font-mono text-[11px] uppercase leading-[1.4] text-accent">{label}</p>
        <h2 className="font-heading text-[clamp(2.5rem,5vw,3.375rem)] font-medium leading-[1.05]">
          {overview.headingLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
      </div>
      <div className="flex flex-1 flex-col gap-(--space-3)">
        <p className="text-xl leading-[1.6]">{overview.question}</p>
        {overview.paragraphs.map((paragraph) => (
          <p key={paragraph} className="leading-[1.7] text-muted">
            {paragraph}
          </p>
        ))}
      </div>
    </Container>
  );
}
