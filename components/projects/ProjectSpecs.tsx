import { Container } from "@/components/Container";
import { projectDetailCopy, type Project } from "@/data/projects";

type ProjectSpecsProps = {
  features: Project["features"];
  skills: Project["skills"];
  featuresLabel: string;
  skillsLabel: string;
};

export function ProjectSpecs({ features, skills, featuresLabel, skillsLabel }: ProjectSpecsProps) {
  return (
    <Container className="flex flex-col gap-(--space-5) py-(--space-5) lg:flex-row">
      {features.length > 0 && (
        <section className="flex flex-col gap-(--space-3) lg:basis-2/3">
          <hr className="border-muted/30" />
          <h2 className="font-mono text-[11px] uppercase leading-[1.4] text-accent">{featuresLabel}</h2>
          <ul className="flex flex-col gap-(--space-3)">
            {features.map((feature) => (
              <li key={feature.title} className="flex gap-(--space-3)">
                <span aria-hidden="true" className="text-lg text-accent">
                  •
                </span>
                <div className="flex flex-col gap-(--space-2)">
                  <h3 className="text-[17px] font-medium">{feature.title}</h3>
                  <p className="text-[15px] leading-[1.6] text-muted">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {skills.length > 0 && (
        <section className="flex flex-1 flex-col gap-(--space-3)">
          <hr className="border-muted/30" />
          <p className="font-mono text-[11px] uppercase leading-[1.4] text-accent">{skillsLabel}</p>
          <h2 className="font-heading text-[40px] font-medium">{projectDetailCopy.skillsHeading}</h2>
          <ul className="flex flex-wrap gap-(--space-2)">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded border border-muted/30 px-(--space-3) py-(--space-2) font-mono text-[11px] text-accent"
              >
                {skill}
              </li>
            ))}
          </ul>
          <p className="font-mono text-[11px] leading-[1.6] text-muted">
            {projectDetailCopy.skillsNoteLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </section>
      )}
    </Container>
  );
}
