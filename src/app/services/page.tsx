
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services — Julie Lupex",
  description:
    "Websites, web apps, e-commerce, APIs, WordPress, and UI/UX — scoped to the work involved.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Julie Lupex",
    description:
      "Websites, web apps, e-commerce, APIs, WordPress, and UI/UX — scoped to the work involved.",
  },
};

const services = [
  {
    number: "01",
    id: "websites",
    title: "Websites",
    challenge:
      "Outdated pages, unclear messaging, slow performance, or weak paths from visitor to enquiry.",
    description:
      "Purpose-built websites designed around your business, audience, content, and the actions you want visitors to take.",
    price: "SCOPED & QUOTED",
    timeline: "2–4 WEEKS*",
    features: [
      "Custom design and development",
      "Business-focused page structure",
      "Contact, booking & lead forms",
      "Performance & SEO foundations",
      "CMS integration when required",
      "Launch support and handover",
    ],
    bestFor: "Service businesses, consultants, clinics, agencies",
  },
  {
    number: "02",
    id: "web-applications",
    title: "Web Applications",
    challenge:
      "Spreadsheets, disconnected tools, and manual workflows that could be handled by one connected system.",
    description:
      "Custom applications, portals, dashboards, and SaaS MVPs built around the workflows your business or users actually need.",
    price: "SCOPED & QUOTED",
    timeline: "4–10 WEEKS*",
    features: [
      "Product UX & interface design",
      "React + TypeScript front end",
      "APIs, databases & integrations",
      "Authentication and user roles",
      "Dashboards connected to real data",
      "Testing and deployment support",
    ],
    bestFor: "SaaS founders, startups, ops-heavy teams",
  },
  {
    number: "03",
    id: "e-commerce",
    title: "E-commerce",
    challenge:
      "Customers struggling to discover products, trust the store, complete checkout, or track orders.",
    description:
      "Online stores built around the complete buying journey — discovery, evaluation, checkout, and order management.",
    price: "SCOPED & QUOTED",
    timeline: "4–8 WEEKS*",
    features: [
      "Conversion-focused product pages",
      "Secure payment integration",
      "Products, orders & inventory flows",
      "Performance optimization",
      "Analytics & tracking setup",
      "CMS for products and content",
    ],
    bestFor: "Brands selling physical or digital products",
  },
  {
    number: "04",
    id: "wordpress",
    title: "WordPress",
    challenge:
      "A website that needs to be easier for your team to manage without unnecessary page-builder complexity.",
    description:
      "Custom WordPress websites built for maintainability, performance, and your team's content workflow.",
    price: "SCOPED & QUOTED",
    timeline: "3–5 WEEKS*",
    features: [
      "Custom theme development",
      "Gutenberg / ACF components",
      "WooCommerce when required",
      "Performance and security setup",
      "Content management guidance",
      "Maintainable implementation",
    ],
    bestFor: "Publishers, blogs, content-heavy brands",
  },
  {
    number: "05",
    id: "backend-api",
    title: "Backend & APIs",
    challenge:
      "A product that needs reliable data, authentication, integrations, or backend logic behind the interface.",
    description:
      "Backend systems and APIs that connect your application to databases, users, payments, third-party services, and the business logic behind the product.",
    price: "SCOPED & QUOTED",
    timeline: "2–8 WEEKS*",
    features: [
      "REST APIs and backend services",
      "Database design and integration",
      "Authentication and authorization",
      "Third-party API integrations",
      "Payments and webhook flows",
      "Deployment and environment setup",
    ],
    bestFor: "Web apps, SaaS products, custom systems",
  },
  {
    number: "06",
    id: "ui-ux",
    title: "UI/UX Design",
    challenge:
      "An idea or product where the user journey is unclear or the interface is difficult to use.",
    description:
      "Interface design that turns complex requirements into practical experiences developers can build.",
    price: "SCOPED & QUOTED",
    timeline: "1–2 WEEKS*",
    features: [
      "Wireframes & user flows",
      "Clickable prototypes",
      "Design systems in Figma",
      "Responsive interface design",
      "Accessibility considerations",
      "Developer-ready handoff",
    ],
    bestFor: "Teams with developers but no designer",
  },
  {
    number: "07",
    id: "care-growth",
    title: "Care & Growth",
    challenge:
      "A website that needs consistent updates, monitoring, fixes, performance work, or continued improvements.",
    description:
      "Ongoing technical support — updates, monitoring, and a plan for what comes next.",
    price: "SCOPED & QUOTED",
    timeline: "ONGOING",
    features: [
      "Updates and maintenance",
      "Backups and monitoring",
      "Small design & content changes",
      "Performance reviews",
      "Technical support",
      "Ongoing improvement planning",
    ],
    bestFor: "Past clients & inherited websites",
  },
];

const trustPoints = [
  "Scope, proposal, and milestones agreed before work starts",
  "Post-launch support included based on project scope",
  "You retain full ownership — code, content, and accounts",
];

export default function ServicesPage() {
  return (
    <main id="main">
      {/* ---------- Hero ---------- */}
      <section className="border-b border-ink/10 bg-paper py-24 sm:py-32 lg:py-40">
        <div className="site-container">
          <Reveal>
            <div className="max-w-5xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Services
              </p>

              <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-8xl">
                Solve the problem.
                <br />
                <span className="text-ink/45">Build what lasts.</span>
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-ink/65 sm:text-xl sm:leading-9">
                You do not need to know which technology to choose. Start
                with what is not working, what you need to build, or what you
                want to improve.
              </p>

              <div className="mt-8">
                <a
                  href="#services-heading"
                  className="btn btn-primary inline-flex items-center"
                >
                  See what I build
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
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
          <div className="mb-12 max-w-3xl sm:mb-16">
            <Reveal>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                What I can build
              </p>

              <h2
                id="services-heading"
                className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-5xl"
              >
                Digital work shaped around what you need.
              </h2>

              <p className="mt-5 text-base leading-7 text-ink/65 sm:text-lg sm:leading-8">
                These are the main ways I help. Custom work is scoped around
                the work involved, not forced into a predefined package.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.number} delay={(index % 2) * 90}>
                <article
                  id={service.id}
                  className="group flex h-full scroll-mt-24 flex-col rounded-3xl border border-ink/10 bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink/30 sm:p-9"
                >
                  <div className="flex items-start justify-between gap-6">
                    <span className="font-mono text-xs font-semibold tracking-[0.18em] text-muted">
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

                  <p className="mt-5 max-w-xl text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">
                    {service.challenge}
                  </p>

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
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink"
                            aria-hidden="true"
                          />

                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 border-t border-ink/10 pt-6">
                    <p className="text-sm leading-6 text-ink/55">
                      <span className="font-semibold text-ink">Best for:</span>{" "}
                      {service.bestFor}
                    </p>
                  </div>

                  <div className="mt-auto pt-8">
                    <Link
                      href={`/contact?service=${encodeURIComponent(
                        service.title.toLowerCase(),
                      )}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-all group-hover:gap-3 hover:text-muted"
                    >
                      Start with this
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-center text-xs leading-6 text-ink/45">
            * Timelines are typical estimates. Final timing depends on project
            scope, content readiness, integrations, feedback, and approval
            cycles.
          </p>
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
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Not sure what you need?
              </p>

              <h2
                id="not-sure-heading"
                className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-5xl"
              >
                Start with what&apos;s not working.
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-ink/65 sm:text-lg sm:leading-9">
                I&apos;ll help identify the smallest practical solution — and
                if custom development isn&apos;t the answer, I&apos;ll tell
                you.
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
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Next Step
              </p>

              <h2
                id="next-step-heading"
                className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl"
              >
                Ready to build?
                <br />
                Let&apos;s talk.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-ink/65 sm:text-lg sm:leading-9">
                We can discuss what you need, the right scope, and what
                development should look like before work begins.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="btn btn-primary inline-flex items-center"
                >
                  Start a project
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-5">
              <div className="rounded-3xl border border-ink/10 bg-paper p-7 sm:p-9">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/45">
                  How projects work
                </p>

                <ul className="mt-6 divide-y divide-ink/10">
                  {trustPoints.map((point) => (
                    <li
                      key={point}
                      className="flex gap-4 py-4 text-sm leading-6 text-ink/70 first:pt-0 last:pb-0"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink"
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

