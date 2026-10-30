import Image from "next/image";

type FigureProps = {
  src: string;
  alt: string;
  caption: string;
  note?: string;
  heightClassName: string;
  sizes: string;
  priority?: boolean;
};

export function Figure({ src, alt, caption, note, heightClassName, sizes, priority }: FigureProps) {
  return (
    <figure className="flex flex-col gap-(--space-2)">
      <div className={`relative w-full overflow-hidden rounded ${heightClassName}`}>
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
      </div>
      <figcaption className="flex flex-wrap items-start justify-between gap-(--space-2) font-mono">
        <span className="text-[11px] uppercase leading-[1.4] text-accent">{caption}</span>
        {note && <span className="text-[10px] text-muted">{note}</span>}
      </figcaption>
    </figure>
  );
}
