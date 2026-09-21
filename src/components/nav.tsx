"use client";

import { useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { Monogram } from "@/components/ornaments";

const links = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#journey", label: "Journey" },
  { href: "#works", label: "Works" },
  { href: "#library", label: "Library" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setSolid(y > 160));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        solid || open
          ? "bg-sand-100/85 shadow-[0_1px_0_rgba(173,154,114,0.35)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        <a href="#top" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Monogram className="h-10 w-10 transition-transform duration-700 group-hover:rotate-45" />
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            M. Iqbal
          </span>
        </a>

        <ul className="hidden items-center gap-1 rounded-full border border-khaki-400/50 bg-sand-50/70 p-1 backdrop-blur lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-full px-4 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:bg-turq-100 hover:text-turq-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="group hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-sand-50 transition-colors hover:bg-turq-700 lg:inline-flex"
        >
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-turq-300 transition-transform group-hover:scale-150" />
          Let’s have tea
        </a>

        <button
          type="button"
          className="inline-flex h-10 items-center gap-2 rounded-full border border-khaki-400/70 bg-sand-50/80 px-4 text-sm font-semibold text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-0.5 w-4 rounded bg-ink transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-4 rounded bg-ink transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
            />
          </span>
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-khaki-400/40 px-5 pb-6 pt-2 lg:hidden">
          <ul className="grid gap-1">
            {[...links, { href: "#contact", label: "Contact" }].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 font-display text-2xl text-ink hover:bg-turq-100"
                >
                  {link.label}
                  <span aria-hidden className="text-base text-khaki-500">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
