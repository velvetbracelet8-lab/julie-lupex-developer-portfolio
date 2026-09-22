import type { Metadata } from "next";
import { Ear, PenTool, Hammer, Rocket } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { ServiceCard } from "@/components/cards";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services — What Julie Builds",
  description:
    "Front-end, back-end, full-stack, e-commerce, WordPress, UI development and DevOps — web development services by Julie Lupex, from first line of code to final deployment.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — What Julie Builds",
    description:
      "Front-end, back-end, full-stack, e-commerce, WordPress, UI development and DevOps — web development services by Julie Lupex.",
  },
};

const engagement = [
  {
    icon: Ear,
    step: "01",
    title: "Listen",
    text: "Every engagement starts with the problem, not the technology. What should exist that doesn't yet?",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Define",
    text: "Scope, structure and a clear plan — what gets built, in what order, and how success will be judged.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Build",
    text: "Working slices delivered in sequence, reviewed together, tested along the way — never one long silence.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch",
    text: "Deployment, handover and documentation — so what's built keeps working long after launch day.",
  },
];

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Services"
        title="What I Build"
        description="From the first line of code to the final deployment, I build digital products with purpose."
        crumb="Services"
      />

      <section className="bg-paper py-24 sm:py-28" aria-label="All services">
        <div className="site-container">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={(i % 3) * 80}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-t border-ink/10 bg-paper-2 py-24 sm:py-28"
        aria-labelledby="engagement-heading"
      >
        <div className="site-container">
          <SectionHeading
            eyebrow="How It Works"
            title="A calm, predictable process"
            description="No mystery, no black box. Every project — from a single WordPress site to a full web application — moves through the same transparent rhythm."
            align="center"
          />
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {engagement.map((e, i) => (
              <Reveal key={e.step} delay={i * 80}>
                <li className="card-lift relative h-full rounded-3xl border border-ink/10 bg-white p-7 hover:border-violet/50">
                  <span
                    className="absolute right-6 top-5 font-display text-3xl font-bold text-ink/[0.07]"
                    aria-hidden="true"
                  >
                    {e.step}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-violet">
                    <e.icon size={18} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{e.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-10 text-center">
            <p className="mx-auto max-w-xl text-[0.95rem] leading-relaxed text-body">
              Not sure which service your idea needs? That&apos;s normal — most
              projects touch several. Describe the idea and Julie will map it to
              the right mix.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Have something to build? Let's scope it together."
        text="Whether it's a store, an application, a WordPress site or an API — the first conversation simply maps the idea to a plan."
      />
    </main>
  );
}
