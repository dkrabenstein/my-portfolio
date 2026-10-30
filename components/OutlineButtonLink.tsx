import Link from "next/link";
import { Icon } from "@/components/Icon";

type OutlineButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  download?: boolean;
};

// Accent-outlined button with a trailing arrow ("More about me", "Download project report").
export function OutlineButtonLink({ href, children, download }: OutlineButtonLinkProps) {
  const className =
    "inline-flex shrink-0 items-center gap-(--space-3) self-start rounded border border-accent p-(--space-3) text-sm text-accent hover:bg-accent hover:text-bg";

  if (download) {
    return (
      <a href={href} download className={className}>
        {children}
        <Icon name="arrow-up-right" size={18} />
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
      <Icon name="arrow-up-right" size={18} />
    </Link>
  );
}
