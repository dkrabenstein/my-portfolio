import Link from "next/link";
import { Container } from "@/components/Container";
import { projectDetailCopy, type Project } from "@/data/projects";

type ProjectHeaderProps = {
  project: Project;
  number: string;
};

export function ProjectHeader({ project, number }: ProjectHeaderProps) {
  const facts = [
    { label: "Focus", value: project.focus },
    { label: "Stage", value: project.stage },
  ];

  return (
    <Container className="flex flex-col gap-(--space-4) py-(--space-4)">
      <Link href={projectDetailCopy.backLink.href} className="self-start text-[13px] text-accent hover:underline">
        {projectDetailCopy.backLink.label}
      </Link>
      <div className="flex flex-wrap justify-between gap-(--space-2) font-mono text-[11px] uppercase leading-[1.4] text-accent">
        <p>
          Project journal / {number} / {projectDetailCopy.eyebrowSuffix}
        </p>
        <p>{project.category}</p>
      </div>
      <h1 className="font-heading text-[clamp(3rem,8vw,6.5rem)] font-medium leading-none">{project.title}</h1>
      <p className="max-w-[900px] text-xl leading-[1.55] text-muted">{project.intro}</p>
      <div className="flex flex-col gap-(--space-3) border-t border-muted/30 pt-(--space-3) sm:flex-row sm:gap-(--space-5)">
        <dl className="flex flex-col gap-(--space-3) sm:flex-row sm:gap-(--space-5)">
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-(--space-2) sm:min-w-[200px]">
              <dt className="font-mono text-[11px] uppercase leading-[1.4] text-accent">{fact.label}</dt>
              <dd className="text-sm">{fact.value}</dd>
            </div>
          ))}
        </dl>
        <p className="flex-1 font-mono text-[11px] leading-[1.6] text-muted">
          {projectDetailCopy.factsNoteLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>
    </Container>
  );
}
