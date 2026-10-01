import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink text-mist">
      {/* Desktop footer background */}
      <div
        className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block"
        style={{ backgroundImage: "url('/images/footer-bg.webp')" }}
        aria-hidden="true"
      />

      {/* Mobile footer background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: "url('/images/footer-bg-mobile.webp')" }}
        aria-hidden="true"
      />

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
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-violet/40 bg-ink-3 font-display text-sm font-bold tracking-tight text-violet transition-colors duration-300 group-hover:bg-violet group-hover:text-ink">
              {"<JL />"}
            </span>

            <span className="text-left leading-none">
              <span className="block font-display text-[0.95rem] font-bold tracking-[0.14em] text-paper">
                JULIE LUPEX
              </span>

              <span className="mt-1 block text-[0.62rem] font-medium tracking-[0.32em] text-mist">
                WEB DEVELOPER
              </span>
            </span>
          </Link>

          <p className="mx-auto mt-6 max-w-sm text-[0.95rem] leading-relaxed lg:mx-0">
            {site.tagline}
          </p>

          <p className="mt-4 font-mono text-xs tracking-[0.2em] text-violet/80">
            {"{ BUILD · SOLVE · IMPROVE }"}
          </p>

          
        </div>

        {/* Navigation */}
        <nav aria-label="Footer navigation" className="text-center lg:text-left">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-paper">
            Explore
          </h2>

          <ul className="mx-auto mt-6 grid max-w-xs grid-cols-2 gap-x-8 gap-y-3.5 lg:mx-0 lg:max-w-none lg:grid-cols-1">
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
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 text-violet transition-colors group-hover:border-violet/50">
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
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 text-violet transition-colors group-hover:border-violet/50">
                  <Phone size={15} aria-hidden="true" />
                </span>

                {site.phoneDisplay}
              </a>
            </li>
          </ul>

          <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-mist/80 lg:mx-0">
            Available for freelance projects — websites, web applications,
            e-commerce and WordPress builds.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 border-t border-white/10">
        <div className="site-container flex flex-col items-center justify-center gap-4 py-6 text-center text-sm text-mist/70">
          <p>© {year} Julie Lupex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}