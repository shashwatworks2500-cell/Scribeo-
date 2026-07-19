"use client";

import { AnimatePresence, m, type Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { NavItem } from "@/types";
import { cn } from "@/lib/utils/cn";
import { buttonStyles } from "@/components/interactive";
import { useReducedMotionContext } from "@/components/motion/MotionProvider";
import { DURATION, EASE } from "@/lib/motion/tokens";
import { NavLink } from "./NavLink";

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const PANEL_CLASS = "fixed inset-0 z-50 overflow-y-auto bg-bg-primary px-6 py-6";

const panelVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.standard,
      ease: EASE.standard,
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: DURATION.standard, ease: EASE.standard },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.standard, ease: EASE.outExpo },
  },
};

type MobileMenuProps = {
  items: readonly NavItem[];
  className?: string;
};

/** Accessible mobile navigation: dialog semantics, Escape to close, scroll
 *  lock, focus trap, focus restore, and Lenis opt-out (data-lenis-prevent).
 *  Elegant fade/slide + staggered links via Framer; fully static under
 *  reduced motion. */
export function MobileMenu({ items, className }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotionContext();

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusables = Array.from(
        panel.querySelectorAll<HTMLElement>(FOCUSABLE),
      );
      if (focusables.length === 0) return;
      const first = focusables[0]!;
      const last = focusables[focusables.length - 1]!;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [open]);

  const links = items.map((item) => {
    const link = (
      <NavLink
        href={item.href}
        className="text-h4"
        onClick={() => setOpen(false)}
      >
        {item.label}
      </NavLink>
    );
    return reduced ? (
      <div key={item.href}>{link}</div>
    ) : (
      <m.div key={item.href} variants={itemVariants}>
        {link}
      </m.div>
    );
  });

  const panelInner = (
    <>
      <div className="flex justify-end">
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={cn(buttonStyles("icon"), "size-11")}
        >
          <X aria-hidden="true" />
        </button>
      </div>
      <nav aria-label="Mobile" className="mt-8 flex flex-col gap-6">
        {links}
      </nav>
    </>
  );

  const panelA11y = {
    id: "mobile-menu-panel",
    tabIndex: -1,
    role: "dialog",
    "aria-modal": true,
    "aria-label": "Menu",
    "data-lenis-prevent": "",
  } as const;

  return (
    <div className={className}>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        onClick={() => setOpen(true)}
        className={cn(buttonStyles("icon"), "size-11")}
      >
        <Menu aria-hidden="true" />
      </button>

      {reduced ? (
        open ? (
          <div ref={panelRef} className={PANEL_CLASS} {...panelA11y}>
            {panelInner}
          </div>
        ) : null
      ) : (
        <AnimatePresence>
          {open ? (
            <m.div
              ref={panelRef}
              className={PANEL_CLASS}
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              {...panelA11y}
            >
              {panelInner}
            </m.div>
          ) : null}
        </AnimatePresence>
      )}
    </div>
  );
}
