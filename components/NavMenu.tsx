"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Icon } from "@/components/Icon";
import type { NavItem } from "@/data/site";

type NavMenuProps = {
  label: string;
  menu: NonNullable<NavItem["menu"]>;
};

// Chevron toggle and dropdown for a nav tab that has in-page links.
export function NavMenu({ label, menu }: NavMenuProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    // Below sm the menu is positioned against the header (full width); from sm up, under the tab.
    <div ref={rootRef} className="flex sm:relative">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`${open ? "Hide" : "Show"} ${label} sections`}
        onClick={() => setOpen((value) => !value)}
        className="flex items-center"
      >
        <Icon name={open ? "chevron-up" : "chevron-down"} size={12} />
      </button>

      {open && (
        <div
          id={menuId}
          className="absolute inset-x-(--space-3) top-full z-20 mt-(--space-2) flex flex-col gap-(--space-3) rounded border border-muted/30 bg-bg p-(--space-3) shadow-lg sm:inset-x-auto sm:left-1/2 sm:mt-(--space-4) sm:w-[270px] sm:-translate-x-1/2"
        >
          <p className="font-mono text-[11px] uppercase leading-[1.4] text-accent">{menu.heading}</p>
          <ul className="flex flex-col gap-(--space-3)">
            {menu.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex justify-between text-sm text-text hover:text-accent"
                >
                  {item.label}
                  <span aria-hidden="true" className="font-mono text-[13px] text-accent">
                    ↓
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
