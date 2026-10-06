
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — Julie Lupex",
  description:
    "Custom websites, web applications, e-commerce, WordPress, UI/UX design, and ongoing web care engineered to solve business problems.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Julie Lupex",
    description:
      "Design and development services for websites, applications, e-commerce, WordPress, UI/UX, and ongoing growth — focused on solving real business problems.",
  },
};

const services = [
  {
    number: "01",
    title: "Websites",
    description:
      "High-speed marketing engines engineered to turn lost traffic into qualified inquiries and sales.",
    price: "FROM $1,400",
    timeline: "2–4 WEEKS",
    features: [
      "Custom design — never a template",
      "Up to ~8 hand-built pages",
      "Contact, booking & lead forms",
      "Speed & SEO foundations baked in",
      "A CMS so you can edit anything",
      "Launch included + 30-day support",
    ],
    bestFor: "Service businesses, consultants, clinics, agencies",
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Custom software, portals and SaaS MVPs built to automate manual operations and scale with your users.",
    price: "SCOPED & QUOTED",
    timeline: "6–10 WEEKS",
    features: [
      "Product UX & interface design",
      "React + TypeScript front end",
      "Node.js APIs & databases",
      "Auth, roles & permissions",
      "Dashboards wired to real data",
      "Automated tests on core flows",
    ],
    bestFor: "SaaS founders, startups, ops-heavy teams",
  },
  {
    number: "03",
    title: "E-commerce",
    description:
      "Frictionless storefronts engineered to reduce cart abandonment and make more value from every visitor.",
    price: "FROM $3,500",
    timeline: "4–8 WEEKS",
    features: [
      "Conversion-first product pages",
      "One-page Stripe checkout",
      "Inventory, orders & email flows",
      "Sub-2-second loads on 4G",
      "Analytics & funnel tracking",
      "CMS for products & campaigns",
    ],
    bestFor: "Brands selling 1–500 products",
  },
  {
    number: "04",
    title: "WordPress",
    description:
      "Fast, custom-coded WordPress sites that give your team an easier editor without plugin and page-builder bloat.",
    price: "FROM $1,800",
    timeline: "3–5 WEEKS",
    features: [
      "Custom theme built from scratch",
      "Bespoke Gutenberg / ACF blocks",
      "WooCommerce when you need it",
      "Speed-tuned, backed up, secured",
      "Editor training for your team",
      "Zero page-builder dependency",
    ],
    bestFor: "Publishers, blogs, content-heavy brands",
  },
  {
    number: "05",
    title: "UI/UX Design",
    description:
      "Clear, conversion-aware interface design that removes friction for users and gives developers a system they can actually build.",
    price: "FROM $900",
    timeline: "1–2 WEEKS",
    features: [
      "Wireframes & clickable prototype",
      "Design system in Figma",
      "Responsive, accessible components",
      "Usability pass on real devices",
      "Developer-ready handoff",
      "Or I build it myself end-to-end",
    ],
    bestFor: "Teams with developers but no designer",
  },
  {
    number: "06",
    title: "Care & Growth",
    description:
      "Ongoing technical care that keeps your website fast, secure, measurable and ready for the next business change.",
    price: "FROM $120/MO",
    timeline: "CANCEL ANYTIME",
    features: [
      "Updates, backups & monitoring",
      "Small design & content tweaks",
      "Monthly performance report",
      "Priority support queue",
      "Uptime & security watch",
      "Cancel anytime — no lock-in",
    ],
    bestFor: "Past clients & inherited sites",
  },
];

const trustPoints = [
  "Fixed quote in writing before work begins",
  "Final payment only when you approve",
  "30 days of post-launch fixes, free",
  "You own all code, content & accounts",
];

export default function ServicesPage() {
  return (
    <main id="main">
      {/* ---------- Hero ---------- */}
      <section className="border-b border-ink/10 bg-paper py-24 sm:py-32 lg:py-40">
        <div className="site-container">
          <Reveal>
            <div className="max-w-5xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--violet)]">
                Services
              </p>

              <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-8xl">
                Solve the problem.
                <br />
                <span className="text-ink/45">Build what lasts.</span>
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-ink/65 sm:text-xl sm:leading-9">
                Everything below is design-plus-build: strategy, interface and
                code from the same pair of hands. The goal is not to sell you
                more software — it&apos;s to solve the right problem, launch
                it properly and leave you with something you can build on.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section
        className="bg-paper-2 py-24 sm:py-28 lg:py-32"
        aria-labelledby="services-heading"
      >
        <div className="site-container">
          <h2 id="services-heading" className="sr-only">
            Services
          </h2>

          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.number} delay={(index % 2) * 90}>
                <article className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-violet/40 sm:p-9">
                  <div className="flex items-start justify-between gap-6">
                    <span className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--violet)]">
                      {service.number}
                    </span>

                    <div className="text-right">
                      <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-ink">
                        {service.price}
                      </p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/45">
                        {service.timeline}
                      </p>
                    </div>
                  </div>

                  <h3 className="mt-7 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-base leading-7 text-ink/65 sm:text-lg sm:leading-8">
                    {service.description}
                  </p>

                  <div className="mt-8 border-t border-ink/10 pt-7">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/45">
                      What you get
                    </p>

                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-3 text-sm leading-6 text-ink/70"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--violet)]"
                            aria-hidden="true"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 border-t border-ink/10 pt-6">
                    <p className="text-sm leading-6 text-ink/55">
                      <span className="font-semibold text-ink">
                        Best for:
                      </span>{" "}
                      {service.bestFor}
                    </p>
                  </div>

                  <div className="mt-auto pt-8">
                    <Link
                      href={`/contact?service=${encodeURIComponent(
                        service.title.toLowerCase(),
                      )}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-all group-hover:gap-3 hover:text-[var(--violet)]"
                    >
                      Start with this
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Not Sure ---------- */}
      <section
        className="border-t border-ink/10 bg-paper py-24 sm:py-28"
        aria-labelledby="not-sure-heading"
      >
        <div className="site-container">
          <Reveal>
            <div className="mx-auto max-w-4xl rounded-3xl border border-ink/10 bg-paper-2 p-8 sm:p-12 lg:p-16">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--violet)]">
                Not sure which one?
              </p>

              <h2
                id="not-sure-heading"
                className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-5xl"
              >
                Tell me the problem, not the service.
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-ink/65 sm:text-lg sm:leading-9">
                I&apos;ll recommend the smallest thing that solves it — and if
                the honest answer is &quot;you don&apos;t need a developer for
                this,&quot; I&apos;ll tell you that too, plus what to use
                instead.
              </p>

              <Link
                href="/contact"
                className="btn btn-primary mt-8 inline-flex items-center"
              >
                Describe your problem
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section
        className="border-t border-ink/10 bg-paper-2 py-24 sm:py-28 lg:py-32"
        aria-labelledby="next-step-heading"
      >
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--violet)]">
                07 // Next Step
              </p>

              <h2
                id="next-step-heading"
                className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl"
              >
                Have a problem worth solving?
                <br />
                Let&apos;s talk — it&apos;s free.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-ink/65 sm:text-lg sm:leading-9">
                Describe what&apos;s broken — or what you&apos;re building —
                and get an honest diagnosis plus a fixed quote within 24 hours.
                Worst case, you leave with a plan. Best case, the problem is
                gone for good.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn btn-primary inline-flex items-center"
                >
                  Start a project
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>

                <a
                  href={site.emailHref}
                  className="btn btn-ghost-dark inline-flex items-center"
                >
                  {site.email}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-5">
              <div className="rounded-3xl border border-ink/10 bg-paper p-7 sm:p-9">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/45">
                  The deal
                </p>

                <ul className="mt-6 divide-y divide-ink/10">
                  {trustPoints.map((point) => (
                    <li
                      key={point}
                      className="flex gap-4 py-4 text-sm leading-6 text-ink/70 first:pt-0 last:pb-0"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--violet)]"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}

