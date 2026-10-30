import Link from "next/link";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icon";
import { contactPrompt } from "@/data/projects";

export function ContactPrompt() {
  return (
    <section className="bg-text/5 py-(--space-4)">
      <Container className="flex flex-col gap-(--space-3) sm:flex-row sm:items-center sm:justify-between">
        <h2 className="font-heading text-[36px] font-medium">{contactPrompt.heading}</h2>
        <Link
          href={contactPrompt.cta.href}
          className="flex items-center gap-(--space-4) text-sm text-accent hover:underline"
        >
          {contactPrompt.cta.label}
          <Icon name="arrow-up-right" size={24} />
        </Link>
      </Container>
    </section>
  );
}
