import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Figure } from "@/components/Figure";
import { ProjectHeader } from "@/components/projects/ProjectHeader";
import { ProjectOverview } from "@/components/projects/ProjectOverview";
import { ProjectReport } from "@/components/projects/ProjectReport";
import { ProjectSpecs } from "@/components/projects/ProjectSpecs";
import { getProject, projectDetailCopy, projects } from "@/data/projects";
import { site } from "@/data/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: `${project.title} – ${site.name}`, description: project.summary };
}

const pad = (value: number) => String(value).padStart(2, "0");

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const number = pad(projects.indexOf(project) + 1);

  // Number the sections that actually render, so empty projects don't skip numbers.
  let sectionCount = 0;
  const nextLabel = (label: string) => `${pad(++sectionCount)} / ${label}`;
  const overviewLabel = nextLabel(projectDetailCopy.overviewLabel);
  const featuresLabel = project.features.length > 0 ? nextLabel(projectDetailCopy.featuresLabel) : "";
  const skillsLabel = project.skills.length > 0 ? nextLabel(projectDetailCopy.skillsLabel) : "";
  const reportLabel = nextLabel(projectDetailCopy.report.label);

  return (
    <main className="flex-1">
      <ProjectHeader project={project} number={number} />

      <Container>
        <Figure
          {...project.heroImage}
          note={projectDetailCopy.imageryNote}
          heightClassName="aspect-[4/3] sm:aspect-auto sm:h-[550px]"
          sizes="(min-width: 1100px) 1100px, 100vw"
          priority
        />
      </Container>

      <ProjectOverview overview={project.overview} label={overviewLabel} />

      {project.gallery.length > 0 && (
        <Container className="grid gap-(--space-4) sm:grid-cols-2">
          {project.gallery.map((image) => (
            <Figure
              key={image.src}
              {...image}
              heightClassName="aspect-[4/3] sm:aspect-auto sm:h-[355px]"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          ))}
        </Container>
      )}

      {(project.features.length > 0 || project.skills.length > 0) && (
        <ProjectSpecs
          features={project.features}
          skills={project.skills}
          featuresLabel={featuresLabel}
          skillsLabel={skillsLabel}
        />
      )}

      <ProjectReport label={reportLabel} reportHref={project.reportHref} />
    </main>
  );
}
