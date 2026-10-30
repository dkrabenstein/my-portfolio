import Link from "next/link";
import { Icon } from "@/components/Icon";
import { NavTabs } from "@/components/NavTabs";
import { site, socialLinks } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="relative border-b border-muted/30 px-(--space-3) py-(--space-3) sm:px-(--space-4) lg:px-(--space-5) lg:py-(--space-4)">
      <div className="flex flex-col gap-(--space-3) lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="text-lg font-medium lg:w-60">
          {site.name}
        </Link>

        <NavTabs items={site.nav} />

        <div className="flex flex-wrap items-center gap-(--space-3) text-[13px] text-accent">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {link.label} ↗
            </a>
          ))}
          <a
            href={site.resumeHref}
            download
            className="flex items-center gap-(--space-2) rounded border border-muted/30 px-(--space-3) py-(--space-2) hover:border-accent"
          >
            Download resume
            <Icon name="download" size={15} />
          </a>
        </div>
      </div>
    </header>
  );
}
