import Link from "next/link";
import { Mail, Phone, ArrowUp } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-ink text-mist">
      <div className="site-container grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="group inline-flex items-center gap-3" aria-label="Julie Lupex — home">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-violet/40 bg-ink-3 font-display text-sm font-bold tracking-tight text-violet transition-colors duration-300 group-hover:bg-violet group-hover:text-ink">
              {"<JL />"}
            </span>
            <span className="leading-none">
              <span className="block font-display text-[0.95rem] font-bold tracking-[0.14em] text-paper">
                JULIE LUPEX
              </span>
              <span className="mt-1 block text-[0.62rem] font-medium tracking-[0.32em] text-mist">
                WEB DEVELOPER
              </span>
            </span>
          </Link>
          <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed">
            {site.tagline}
          </p>
          <p className="mt-4 font-mono text-xs tracking-[0.2em] text-violet/80">
            {"{ BUILD · SOLVE · IMPROVE }"}
          </p>
          <p className="mt-7 text-xs tracking-wide text-mist/60">
            GitHub · LinkedIn · X — public profiles coming soon. The fastest way
            to reach Julie is by email or phone.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-paper">
            Explore
          </h2>
          <ul className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3.5 lg:grid-cols-1">
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

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-paper">
            Get in touch
          </h2>
          <ul className="mt-6 space-y-4">
            <li>
              <a
                href={site.emailHref}
                className="group flex items-center gap-3 text-[0.95rem] transition-colors hover:text-violet"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 text-violet transition-colors group-hover:border-violet/50">
                  <Mail size={15} aria-hidden="true" />
                </span>
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="group flex items-center gap-3 text-[0.95rem] transition-colors hover:text-violet"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 text-violet transition-colors group-hover:border-violet/50">
                  <Phone size={15} aria-hidden="true" />
                </span>
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-mist/80">
            Available for freelance projects — websites, web applications,
            e-commerce and WordPress builds.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-container flex flex-col items-center justify-between gap-4 py-6 text-sm text-mist/70 sm:flex-row">
          <p>© {year} Julie Lupex. All rights reserved.</p>
          <a
            href="#top"
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
