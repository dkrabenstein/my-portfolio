import type { AboutEntry } from "@/data/about";

type AboutEntryItemProps = {
  entry: AboutEntry;
};

export function AboutEntryItem({ entry }: AboutEntryItemProps) {
  return (
    <article className="flex flex-col gap-(--space-2)">
      <div className="flex flex-col gap-(--space-1) sm:flex-row sm:items-baseline sm:justify-between sm:gap-(--space-3)">
        <h3 className="font-heading text-xl font-bold leading-snug">{entry.title}</h3>
        <p className="shrink-0 font-mono text-[11px] uppercase text-muted">{entry.dates}</p>
      </div>
      <p className="text-sm font-medium text-accent">
        {entry.organization} · {entry.location}
      </p>
      <ul className="flex list-disc flex-col gap-(--space-1) pl-(--space-3) text-[15px] leading-[1.7] text-muted marker:text-accent">
        {entry.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}
