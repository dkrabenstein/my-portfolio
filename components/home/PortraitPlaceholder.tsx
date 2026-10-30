import Image from "next/image";
import { aboutIntro } from "@/data/home";

export function PortraitPlaceholder() {
  const { portrait } = aboutIntro;

  return (
    <div className="relative h-[470px] w-full lg:w-[440px] lg:shrink-0">
      <Image
        src={portrait.imageUrl}
        alt={portrait.imageAlt}
        fill
        className="rounded object-cover"
        sizes="(max-width: 1024px) 100vw, 440px"
      />
    </div>
  );
}
