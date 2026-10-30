import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import type { PageLink } from "@/data/home";

export function PageLinkCard({ link }: { link: PageLink }) {
  return (
    <Link href={link.href} className="group flex flex-col gap-(--space-3)">
      <div className="relative h-[250px] w-full overflow-hidden rounded">
        <Image
          src={link.image.src}
          alt={link.image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center justify-between text-accent">
        <p className="font-mono text-[11px] uppercase leading-[1.4]">{link.eyebrow}</p>
        <Icon name="arrow-up-right" size={24} />
      </div>
      <h3 className="font-heading text-[2.5rem] font-medium leading-none group-hover:text-accent">{link.title}</h3>
      <p className="text-sm leading-[1.6] text-muted">{link.summary}</p>
    </Link>
  );
}
