import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Figure } from "@/components/Figure";
import { ContactDetailRow } from "@/components/contact/ContactDetailRow";
import { contactDetails, contactImage, contactIntro, contactNoteLines } from "@/data/contact";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Contact – ${site.name}`,
  description: contactIntro.body,
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <Container className="flex flex-col gap-(--space-5) py-(--space-5) lg:flex-row lg:items-start">
        <div className="flex flex-1 flex-col gap-(--space-4)">
          <h1 className="font-heading text-[clamp(3.5rem,8vw,6.5rem)] font-medium leading-[1.02]">
            {contactIntro.title}
          </h1>
          <p className="text-[clamp(1.125rem,2vw,1.375rem)] leading-[1.6] text-muted">{contactIntro.body}</p>
          <ul className="flex flex-col pt-(--space-3)">
            {contactDetails.map((detail) => (
              <ContactDetailRow key={detail.label} detail={detail} />
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-[440px] lg:shrink-0">
          <Figure
            {...contactImage}
            heightClassName="aspect-[3/4] lg:aspect-auto lg:h-[620px]"
            sizes="(min-width: 1024px) 440px, 100vw"
          />
        </div>
      </Container>
    </main>
  );
}
