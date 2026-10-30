import Image from "next/image";
import { aboutAside } from "@/data/about";

export function AboutAside() {
  return (
    <aside className="flex w-full flex-col gap-(--space-3) lg:w-[440px] lg:shrink-0">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded lg:aspect-auto lg:h-[590px]">
        <Image
          src={aboutAside.image.src}
          alt={aboutAside.image.alt}
          fill
          sizes="(min-width: 1024px) 440px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex items-start justify-between font-mono">
        <p className="text-[11px] uppercase leading-[1.4] text-accent">{aboutAside.caption}</p>
        <p className="text-[10px] text-muted">{aboutAside.captionNote}</p>
      </div>
      <hr className="border-muted/30" />
      <p className="font-mono text-[11px] leading-[1.65] text-muted">
        {aboutAside.noteLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
    </aside>
  );
}
