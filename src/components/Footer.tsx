import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
const year = new Date().getFullYear();

return ( <footer className="relative overflow-hidden border-t border-white/10 bg-ink text-mist">
{/* Desktop footer background */} <div className="absolute inset-0 hidden md:block" aria-hidden="true"> <Image
       src="/images/footer-bg.webp"
       alt=""
       fill
       sizes="100vw"
       quality={75}
       loading="lazy"
       className="object-cover object-center"
     /> </div>

```
  {/* Mobile footer background */}
  <div className="absolute inset-0 md:hidden" aria-hidden="true">
    <Image
      src="/images/footer-bg-mobile.webp"
      alt=""
      fill
      sizes="100vw"
      quality={75}
      loading="lazy"
      className="object-cover object-center"
    />
  </div>

  {/* Dark overlay */}
  <div
    className="absolute inset-0 bg-black/65"
    aria-hidden="true"
  />

  {/* Footer content */}
  <div className="site-container relative z-10 grid gap-12 py-14 sm:gap-14 sm:py-20 lg:grid-cols-[1.4fr_1fr_1.2fr] lg:gap-14">
    {/* Brand */}
    <div className="text-center lg:text-left">
      <Link
        href="/"
        className="group inline-flex items-center gap-3"
        aria-label="Julie Lupex — home"
      >
        {/* JL Developer Badge */}
        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
          {/* Ambient hover glow */}
          <div className="absolute inset-0 rounded-xl bg-violet/30 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />

          {/* Badge container */}
          <span className="relative flex h-full w-full items-center justify-center rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-px shadow-inner transition-all duration-300 group-hover:scale-105 group-hover:border-violet/50">
            <span className="flex h-full w-full items-center justify-center rounded-[11px] bg-ink-3/90 font-mono text-xs font-bold tracking-tight backdrop-blur-md">
              <span className="text-mist/60 transition-colors group-hover:text-violet/70">
                &lt;
              </span>

              <span className="bg-gradient-to-r from-violet to-paper bg-clip-text text-transparent transition-all group-hover:from-violet group-hover:to-violet">
                JL
              </span>

              <span className="text-mist/60 transition-colors group-hover:text-violet/70">
                /&gt;
              </span>
            </span>
          </span>
        </div>

        {/* Wordmark */}
        <span className="text-left leading-none">
          <span className="block font-display text-[0.95rem] font-bold tracking-[0.14em] text-paper">
            JULIE LUPEX
          </span>

          <span className="mt-1 block text-[0.62rem] font-medium tracking-[0.32em] text-mist">
            FULL-STACK ENGINEER
          </span>
        </span>
      </Link>

      <p className="mx-auto mt-6 max-w-sm text-[0.95rem] leading-relaxed lg:mx-0">
        {site.tagline}
      </p>

      <p className="mt-4 font-mono text-xs tracking-[0.18em] text-mint/80">
        {"{ ZERO BLOAT · FAST DELIVERY · MEASURED ROI }"}
      </p>
    </div>

    {/* Navigation */}
    <nav
      aria-label="Footer navigation"
      className="text-center lg:text-left"
    >
      <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-paper">
        Explore
      </h2>

      <ul className="mx-auto mt-6 flex max-w-xs flex-col items-center gap-3.5 lg:mx-0 lg:max-w-none lg:items-start">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[0.95rem] transition-colors hover:text-violet"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>

    {/* Contact */}
    <div className="text-center lg:text-left">
      <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-paper">
        Get in touch
      </h2>

      <ul className="mt-6 space-y-4">
        <li>
          <a
            href={site.emailHref}
            className="group flex items-center justify-center gap-3 text-[0.95rem] transition-colors hover:text-violet lg:justify-start"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 text-violet transition-all duration-300 group-hover:border-violet/50 group-hover:bg-violet/5">
              <Mail size={15} aria-hidden="true" />
            </span>

            <span className="break-all">{site.email}</span>
          </a>
        </li>

        <li>
          <a
            href={site.phoneHref}
            className="group flex items-center justify-center gap-3 text-[0.95rem] transition-colors hover:text-violet lg:justify-start"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 text-violet transition-all duration-300 group-hover:border-violet/50 group-hover:bg-violet/5">
              <Phone size={15} aria-hidden="true" />
            </span>

            {site.phoneDisplay}
          </a>
        </li>
      </ul>

      <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-mist/80 lg:mx-0">
        Currently accepting new client projects. Direct communication,
        focused execution and a 24-hour reply target.
      </p>

      <Link
        href="/contact"
        className="btn btn-primary mt-6 inline-flex"
      >
        Discuss a project
      </Link>
    </div>
  </div>

  {/* Copyright */}
  <div className="relative z-10 border-t border-white/10">
    <div className="site-container flex flex-col items-center justify-between gap-4 py-6 text-center text-sm text-mist/70 sm:flex-row sm:text-left">
      <p>© {year} Julie Lupex. All rights reserved.</p>

      <a
        href="#main"
        className="inline-flex items-center gap-2 transition-colors hover:text-violet"
      >
        Back to top
        <ArrowUp size={14} aria-hidden="true" />
      </a>
    </div>
  </div>
</footer>
);
}
