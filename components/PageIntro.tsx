import { Container } from "@/components/Container";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
};

// Eyebrow, large page title, and whatever follows it (description, rules, notes).
export function PageIntro({ eyebrow, title, children }: PageIntroProps) {
  return (
    <Container className="flex flex-col gap-(--space-3) pt-(--space-5) pb-(--space-4)">
      <p className="font-mono text-[11px] uppercase leading-[1.4] text-accent">{eyebrow}</p>
      <h1 className="font-heading text-[clamp(3.5rem,8vw,6.5rem)] font-medium leading-none">{title}</h1>
      {children}
    </Container>
  );
}
