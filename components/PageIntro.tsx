import Image from "next/image";
import { Container } from "@/components/Container";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  background?: { src: string; alt: string };
  children?: React.ReactNode;
};

function IntroHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col gap-(--space-3)">
      <p className="font-mono text-[11px] uppercase leading-[1.4] text-accent">{eyebrow}</p>
      <h1 className="font-heading text-[clamp(3.5rem,8vw,6.5rem)] font-medium leading-none">{title}</h1>
    </div>
  );
}

// Eyebrow, large page title, and whatever follows it (description, rules, notes).
// With a background photo, the photo shows uncropped above the text on small screens; from lg up the
// text sits along the bottom of the photo (title left, children right) so the top half stays clear.
export function PageIntro({ eyebrow, title, background, children }: PageIntroProps) {
  if (!background) {
    return (
      <Container className="flex flex-col gap-(--space-3) pt-(--space-5) pb-(--space-4)">
        <IntroHeading eyebrow={eyebrow} title={title} />
        {children}
      </Container>
    );
  }

  return (
    <div className="relative mb-(--space-4)">
      <div className="relative aspect-[3/2] w-full overflow-hidden lg:aspect-auto lg:h-[min(50vw,720px)]">
        <Image
          src={background.src}
          alt={background.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_20%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-bg via-bg/40 via-35% to-transparent lg:via-bg/60 lg:via-45%"
        />
      </div>
      <Container className="relative flex flex-col gap-(--space-3) pt-(--space-3) lg:absolute lg:inset-x-0 lg:bottom-0 lg:flex-row lg:items-end lg:justify-between lg:gap-(--space-4) lg:pb-(--space-4)">
        <div className="lg:shrink-0">
          <IntroHeading eyebrow={eyebrow} title={title} />
        </div>
        {children && <div className="lg:min-w-0 lg:text-right">{children}</div>}
      </Container>
    </div>
  );
}
