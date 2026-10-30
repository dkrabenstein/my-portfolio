import type { AboutSection } from "@/data/about";

type AboutSectionItemProps = {
  section: AboutSection;
  index: number;
};

export function AboutSectionItem({ section, index }: AboutSectionItemProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="flex scroll-mt-(--space-4) flex-col gap-(--space-3) border-t border-muted/30 pt-(--space-3) pb-(--space-4)"
    >
      <div className="flex items-baseline gap-(--space-3)">
        <span aria-hidden="true" className="font-mono text-[11px] text-accent">
          {number}
        </span>
        <h2 id={`${section.id}-heading`} className="font-heading text-[38px] font-medium leading-none">
          {section.title}
        </h2>
      </div>
      {section.meta && <p className="text-sm font-medium text-accent">{section.meta}</p>}
      <p className="text-[15px] leading-[1.7] text-muted">{section.body}</p>
    </section>
  );
}
