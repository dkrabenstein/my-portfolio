"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavMenu } from "@/components/NavMenu";
import type { NavItem } from "@/data/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function NavTabs({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Main">
      <ul className="flex items-center gap-(--space-4)">
        {items.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <li key={item.href}>
              <div
                className={`flex flex-col gap-(--space-2) pt-(--space-2) text-sm ${
                  active ? "font-medium text-accent" : "text-text"
                }`}
              >
                <span className="flex items-center gap-(--space-1)">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={active ? undefined : "hover:text-accent"}
                  >
                    {item.label}
                  </Link>
                  {item.menu && <NavMenu label={item.label} menu={item.menu} />}
                </span>
                <span aria-hidden="true" className={`h-0.5 w-full ${active ? "bg-accent" : "bg-transparent"}`} />
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
