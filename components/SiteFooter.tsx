import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-muted/30 px-(--space-3) py-(--space-4) sm:px-(--space-4) lg:px-(--space-5)">
      <div className="flex flex-col gap-(--space-2) sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm">{site.name}</p>
        <p className="font-mono text-[11px] uppercase leading-[1.4] text-accent">{site.footerTagline}</p>
        <p className="font-mono text-[11px] text-muted">{site.location}</p>
      </div>
    </footer>
  );
}
