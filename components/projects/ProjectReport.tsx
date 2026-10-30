import { Container } from "@/components/Container";
import { OutlineButtonLink } from "@/components/OutlineButtonLink";
import { projectDetailCopy } from "@/data/projects";

type ProjectReportProps = {
  label: string;
  reportHref?: string;
};

export function ProjectReport({ label, reportHref }: ProjectReportProps) {
  const { report } = projectDetailCopy;

  return (
    <section className="bg-text/5 py-(--space-4)">
      <Container className="flex flex-col gap-(--space-4) sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-(--space-2)">
          <p className="font-mono text-[11px] uppercase leading-[1.4] text-accent">{label}</p>
          <h2 className="font-heading text-[clamp(2.25rem,4vw,2.75rem)] font-medium">{report.heading}</h2>
          <p className="text-sm text-muted">{report.note}</p>
        </div>
        {/* Hidden until a report PDF exists, so the button never links to a missing file. */}
        {reportHref && (
          <OutlineButtonLink href={reportHref} download>
            {report.cta}
          </OutlineButtonLink>
        )}
      </Container>
    </section>
  );
}
