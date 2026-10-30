import type { Metadata } from "next";
import { ContactPrompt } from "@/components/ContactPrompt";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects, projectsIntro } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Projects – ${site.name}`,
  description: projectsIntro.descriptionLines.join(" "),
};

export default function ProjectsPage() {
  return (
    <main className="flex-1">
      <PageIntro title={projectsIntro.title}>
        <p className="max-w-[660px] text-lg leading-[1.6] text-muted">
          {projectsIntro.descriptionLines.map((line) => (
            <span key={line} className="sm:block">
              {line}{" "}
            </span>
          ))}
        </p>
        <hr className="border-muted/30" />
      </PageIntro>

      <Container className="grid gap-x-(--space-4) gap-y-(--space-5) pt-(--space-4) pb-(--space-5) sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </Container>

      <ContactPrompt />
    </main>
  );
}
