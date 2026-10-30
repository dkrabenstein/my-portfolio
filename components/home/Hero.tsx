import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { hero } from "@/data/home";

export function Hero() {
  return (
    <section className="relative flex min-h-[520px] flex-col justify-between overflow-hidden bg-bg px-(--space-3) py-(--space-4) sm:px-(--space-4) lg:h-[650px] lg:px-(--space-5)">
      <Image src={hero.image.src} alt={hero.image.alt} fill priority sizes="100vw" className="object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-bg/55 via-bg/15 via-40% to-bg/85" />

      <div className="relative flex flex-wrap justify-between gap-(--space-2) font-mono text-[11px] uppercase leading-[1.4]">
        {hero.markers.map((marker) => (
          <p key={marker}>{marker}</p>
        ))}
      </div>

      <div className="relative flex flex-col gap-(--space-4)">
        <h1 className="font-heading text-[clamp(3rem,9vw,8.5rem)] font-medium leading-none">{hero.title}</h1>
        <div className="flex flex-col gap-(--space-3) border-t border-text/40 pt-(--space-3) sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg">{hero.tagline}</p>
          <Link href={hero.cta.href} className="flex items-center gap-(--space-4) text-sm hover:text-accent">
            {hero.cta.label}
            <Icon name="arrow-up-right" size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
}
