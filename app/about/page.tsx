import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { AboutAside } from "@/components/about/AboutAside";
import { AboutSectionItem } from "@/components/about/AboutSectionItem";
import { aboutIntro, aboutSections } from "@/data/about";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `About – ${site.name}`,
  description: aboutIntro.subtitleLines.join(" "),
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageIntro eyebrow={aboutIntro.eyebrow} title={aboutIntro.title}>
        <p className="max-w-[560px] text-xl leading-[1.55] text-muted">
          {aboutIntro.subtitleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      </PageIntro>

      <Container className="flex flex-col gap-(--space-5) pb-(--space-5) lg:flex-row lg:items-start">
        <AboutAside />
        <div className="flex flex-1 flex-col">
          {aboutSections.map((section, index) => (
            <AboutSectionItem key={section.id} section={section} index={index} />
          ))}
        </div>
      </Container>
    </main>
  );
}
