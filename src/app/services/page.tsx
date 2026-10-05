import type { Metadata } from "next";
import { Compass, Layers, Terminal, Rocket } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { ServiceCard } from "@/components/cards";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services & Engineering Solutions — Julie Lupex",
  description:
    "Full-stack development, front-end architecture, API design, and web applications engineered for performance, security, and long-term maintainability.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services & Engineering Solutions — Julie Lupex",
    description:
      "End-to-end web engineering from architecture to deployment. Explore how I build scalable, high-performance digital products.",
  },
};

const engagement = [
  {
    icon: Compass,
    step: "01",
    title: "Discover & Deconstruct",
    text: "Every project starts with the problem, not the code. I analyze your business objectives, target audience, and technical constraints to establish clear goals.",
  },
  {
    icon: Layers,
    step: "02",
    title: "Architect & Blueprint",
    text: "I map data flows, choose the right tech stack, and design user-centric interfaces. You get a clear, transparent scope with zero technical ambiguity.",
  },
  {
    icon: Terminal,
    step: "03",
    title: "Engineer & Validate",
    text: "I build modular, maintainable code delivered in measurable milestones. Continuous testing and progress check-ins ensure no surprises along the way.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Deploy & Optimize",
    text: "Production release with strict speed budgets, security checks, and automated pipelines—backed by thorough documentation so your system runs effortlessly.",
  },
];

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Services & Capabilities"
        title="What I Build & Solve"
        description="I turn complex product ideas into resilient, production-ready web applications. Every system I build is engineered for high performance, intuitive UX, and clean scalability."
        crumb="Services"
      />

      {/* ---------- Services Grid ---------- */}
      <section className="bg-paper py-24 sm:py-28" aria-label="Engineering services">
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

      {/* ---------- Process / Methodology ---------- */}
      <section
        className="border-t border-ink/10 bg-paper-2 py-24 sm:py-28"
        aria-labelledby="engagement-heading"
      >
        <div className="site-container">
          <SectionHeading
            eyebrow="My Process"
            title="A structured, predictable engineering workflow"
            description="No guesswork or black-box development. I follow a transparent, iterative process engineered to deliver high-quality software on schedule."
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
              Uncertain about the exact stack or architecture your product requires?
              Bring your objective to the table, and I will recommend the most cost-effective and scalable path forward.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Bottom CTA ---------- */}
      <CtaBand
        title="Have a technical challenge or a product to launch?"
        text="Let's review your requirements and turn your vision into an actionable, production-ready roadmap. No fluff, just practical engineering."
      />
    </main>
  );
}