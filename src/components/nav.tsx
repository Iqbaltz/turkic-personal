"use client";

import { useState } from "react";
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

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-khaki-400/35 bg-sand-50/90 backdrop-blur-md">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Monogram className="h-9 w-9" />
          <span className="font-display text-xl font-semibold tracking-tight text-ink">M. Iqbal</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-ink-soft transition-colors hover:text-turq-700">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border border-ink px-5 py-2 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-sand-50 lg:inline-flex"
        >
          Contact
        </a>

        <button
          type="button"
          className="inline-flex h-10 items-center gap-2 rounded-full border border-khaki-400/70 px-4 text-sm font-semibold text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden className="relative block h-3 w-4">
            <span className={`absolute left-0 top-0 h-0.5 w-4 rounded bg-ink ${open ? "translate-y-[5px] rotate-45" : ""}`} />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-4 rounded bg-ink ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
            />
          </span>
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-khaki-400/35 px-5 pb-6 pt-2 lg:hidden">
          <ul className="grid">
            {[...links, { href: "#contact", label: "Contact" }].map((link) => (
              <li key={link.href} className="border-b border-khaki-400/25 last:border-0">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3.5 font-display text-2xl text-ink hover:text-turq-700"
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
