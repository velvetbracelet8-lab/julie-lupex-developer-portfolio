"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-white/10 bg-ink/90 shadow-[0_10px_40px_-18px_rgba(0,0,0,0.6)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="site-container flex h-[4.5rem] items-center justify-between gap-4"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex min-w-0 shrink-0 items-center gap-3"
          aria-label="Julie Lupex — home"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-violet/40 bg-ink-3 font-display text-sm font-bold tracking-tight text-violet transition-colors duration-300 group-hover:bg-violet group-hover:text-ink">
            {"<JL />"}
          </span>

          <span className="hidden leading-none sm:block">
            <span className="block font-display text-[0.95rem] font-bold tracking-[0.14em] text-paper">
              JULIE LUPEX
            </span>

            <span className="mt-1 block text-[0.62rem] font-medium tracking-[0.32em] text-mist">
              WEB DEVELOPER
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link whitespace-nowrap ${
                  isActive(link.href) ? "active" : ""
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/contact"
            className="btn btn-primary hidden whitespace-nowrap px-5! py-2.5! text-sm! xl:inline-flex"
          >
            Let&apos;s Work Together
            <ArrowRight size={16} aria-hidden="true" />
          </Link>

          {/* Mobile / tablet menu */}
          <button
            type="button"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/15 text-paper transition-colors hover:border-violet hover:text-violet xl:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile / tablet menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden bg-ink/95 backdrop-blur-md transition-[max-height,opacity] duration-500 ease-out xl:hidden ${
          open
            ? "max-h-[34rem] border-b border-white/10 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <ul className="site-container flex flex-col gap-1 py-5">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-lg font-semibold transition-colors ${
                  isActive(link.href)
                    ? "bg-ink-3 text-violet"
                    : "text-paper/85 hover:bg-ink-3 hover:text-paper"
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
                style={{ transitionDelay: `${i * 20}ms` }}
              >
                {link.label}

                {isActive(link.href) && (
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-violet"
                    aria-hidden="true"
                  />
                )}
              </Link>
            </li>
          ))}

          <li className="pt-3">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary w-full"
            >
              Let&apos;s Work Together
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}