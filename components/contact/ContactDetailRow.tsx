import { Icon } from "@/components/Icon";
import type { ContactDetail } from "@/data/contact";

export function ContactDetailRow({ detail }: { detail: ContactDetail }) {
  const rowClassName = "flex items-center gap-(--space-3) border-t border-muted/30 py-(--space-4)";
  const content = (
    <>
      <span className="w-[110px] shrink-0 font-mono text-[11px] uppercase text-accent">{detail.label}</span>
      <span className={`flex-1 break-all text-[19px] ${detail.isLink ? "text-accent group-hover:underline" : ""}`}>
        {detail.value}
      </span>
      {detail.isLink && <Icon name="arrow-up-right" size={24} className="text-accent" />}
    </>
  );

  return (
    <li>
      {detail.href ? (
        <a
          href={detail.href}
          {...(detail.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={`group ${rowClassName}`}
        >
          {content}
        </a>
      ) : (
        <div className={rowClassName}>{content}</div>
      )}
    </li>
  );
}
