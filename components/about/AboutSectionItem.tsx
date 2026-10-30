import type { AboutSection } from "@/data/about";
import { AboutEntryItem } from "@/components/about/AboutEntryItem";

type AboutSectionItemProps = {
  section: AboutSection;
  index: number;
};

function SectionContent({ section }: { section: AboutSection }) {
  switch (section.kind) {
    case "entries":
      return (
        <div className="flex flex-col gap-(--space-4)">
          {section.entries.map((entry) => (
            <AboutEntryItem key={`${entry.title}-${entry.dates}`} entry={entry} />
          ))}
        </div>
      );
    case "groups":
      return (
        <dl className="flex flex-col gap-(--space-3)">
          {section.groups.map((group) => (
            <div key={group.label} className="flex flex-col gap-(--space-1)">
              <dt className="font-mono text-[11px] uppercase text-accent">{group.label}</dt>
              <dd className="text-[15px] leading-[1.7] text-muted">{group.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      );
    case "list":
      return (
        <ul className="flex flex-wrap gap-(--space-2)">
          {section.items.map((item) => (
            <li
              key={item}
              className="rounded border border-muted/30 px-(--space-3) py-(--space-1) text-[15px] text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      );
  }
}

export function AboutSectionItem({ section, index }: AboutSectionItemProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="flex scroll-mt-(--space-4) flex-col gap-(--space-3) border-t border-muted/30 pt-(--space-3) pb-(--space-4)"
    >
      <div className="flex items-baseline gap-(--space-3)">
        <h2 id={`${section.id}-heading`} className="font-heading text-[38px] font-medium leading-none">
          {section.title}
        </h2>
      </div>
      <SectionContent section={section} />
    </section>
  );
}
