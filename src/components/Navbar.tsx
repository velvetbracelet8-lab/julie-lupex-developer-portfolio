"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

import { navLinks } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuState, setMenuState] = useState({
    open: false,
    pathname,
  });

  const open = menuState.open && menuState.pathname === pathname;
  const isHome = pathname === "/";
  const isSolid = scrolled || open || !isHome;

  const closeMenu = useCallback(() => {
    setMenuState({ open: false, pathname });
  }, [pathname]);

  const toggleMenu = useCallback(() => {
    setMenuState({ open: !open, pathname });
  }, [open, pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    const onResize = () => {
      if (window.innerWidth >= 1024) closeMenu();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open, pathname, closeMenu]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isSolid
          ? "border-b border-white/10 bg-ink/95 shadow-[0_10px_40px_-18px_rgba(0,0,0,0.6)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="site-container flex h-[4.5rem] items-center justify-between gap-4"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex min-w-0 shrink-0 items-center gap-3"
          aria-label="Julie Lupex — home"
        >
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center">
            <span
              className="absolute inset-0 rounded-xl bg-white/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />

            <span className="relative flex h-full w-full items-center justify-center rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-px shadow-inner transition-all duration-300 group-hover:scale-105 group-hover:border-white/40">
              <span className="flex h-full w-full items-center justify-center rounded-[11px] bg-ink-3/90 font-mono text-xs font-bold tracking-tight backdrop-blur-md">
                <span className="text-mist/60 transition-colors group-hover:text-white/80">
                  {"<"}
                </span>
                <span className="bg-gradient-to-r from-white to-paper bg-clip-text text-transparent transition-all group-hover:from-white group-hover:to-white">
                  JL
                </span>
                <span className="text-mist/60 transition-colors group-hover:text-white/80">
                  {" />"}
                </span>
              </span>
            </span>
          </span>

          <span className="hidden leading-none sm:block">
            <span className="block font-display text-[0.95rem] font-bold tracking-[0.14em] text-paper">
              JULIE LUPEX
            </span>
            <span className="mt-1 block text-[0.62rem] font-medium tracking-[0.32em] text-mist">
              FULL-STACK DEVELOPER
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link relative whitespace-nowrap ${
                    active ? "active" : ""
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                  {active && (
                    <span
                      className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/contact"
            className="btn btn-primary hidden whitespace-nowrap px-5! py-2.5! text-sm! lg:inline-flex"
          >
            Start a project
            <ArrowRight size={16} aria-hidden="true" />
          </Link>

          <button
            type="button"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/20 bg-black/40 text-white transition-colors hover:border-white/50 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden"
            onClick={toggleMenu}
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

      <div
        id="mobile-menu"
        aria-hidden={!open}
        inert={!open}
        className={`overflow-hidden border-white/10 bg-[#08090b] transition-all duration-300 ease-out lg:hidden ${
          open
            ? "max-h-[34rem] translate-y-0 border-b opacity-100"
            : "pointer-events-none max-h-0 -translate-y-3 opacity-0"
        }`}
      >
        <ul className="site-container flex flex-col gap-1 py-5">
          {navLinks.map((link, index) => {
            const active = isActive(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-lg font-semibold transition-colors ${
                    active
                      ? "bg-white/10 !text-white"
                      : "!text-white hover:bg-white/10 hover:!text-white"
                  }`}
                  aria-current={active ? "page" : undefined}
                  style={{ transitionDelay: `${index * 20}ms` }}
                >
                  {link.label}
                  {active && (
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-white"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            );
          })}

          <li className="pt-3">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="btn btn-primary flex w-full items-center justify-center gap-2 !text-white"
            >
              Start a project
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}