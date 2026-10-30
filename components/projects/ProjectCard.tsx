import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group flex flex-col gap-(--space-3)">
      <div className="relative h-[330px] w-full overflow-hidden rounded">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <p className="font-mono text-[11px] uppercase leading-[1.4] text-accent">{project.disciplines.join(" / ")}</p>
      <h2 className="font-heading text-4xl font-medium sm:text-[44px] leading-[1.05] group-hover:text-accent">{project.title}</h2>
      <p className="leading-[1.6] text-muted">{project.summary}</p>
      <span className="mt-auto flex items-center justify-between border-b border-muted/30 pt-(--space-2) pb-(--space-3) text-sm text-accent">
        View project
        <Icon name="arrow-up-right" size={24} />
      </span>
    </Link>
  );
}
