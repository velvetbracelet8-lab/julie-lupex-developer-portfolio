import type { Metadata } from "next";
import {
  MonitorSmartphone,
  Server,
  Wrench,
  Boxes,
  GitBranch,
  Bug,
  Gauge,
  HeartHandshake,
  FileText,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { skillGroups, toolkitLabels } from "@/lib/data";

export const metadata: Metadata = {
  title: "Skills & Technical Stack — Julie Lupex",
  description:
    "Explore my technical stack and engineering principles: modern front-end architecture, scalable back-end services, database modeling, accessibility, and DevOps.",
  alternates: { canonical: "/skills" },
  openGraph: {
    title: "Skills & Technical Stack — Julie Lupex",
    description:
      "Modern full-stack technical competencies, architectural standards, and core development principles by Julie Lupex.",
  },
};

const groupIcons = [MonitorSmartphone, Server, Wrench, Boxes];

const workingPrinciples = [
  {
    icon: GitBranch,
    title: "Traceable Version Control",
    text: "I treat Git history as living project documentation. Every commit is clean, purposeful, and written so any future developer can trace decisions effortlessly.",
  },
  {
    icon: Bug,
    title: "Root-Cause Diagnostics",
    text: "I don't just patch symptoms. I isolate bugs, fix the underlying architecture, and write regression tests so issues never quietly return.",
  },
  {
    icon: Gauge,
    title: "Strict Performance Budgets",
    text: "Every bundle, image, and database query must justify its footprint. Core Web Vitals and load times are protected by design, not patched after launch.",
  },
  {
    icon: HeartHandshake,
    title: "Accessibility by Default",
    text: "Semantic HTML, keyboard navigation, clear focus states, and WCAG contrast standards. The web was built for everyone, and my code reflects that.",
  },
  {
    icon: FileText,
    title: "Documented Decisions",
    text: "I write clear architectural notes and API schemas explaining the 'why' behind technical choices—because institutional memory shouldn't live in someone's head.",
  },
];

export default function SkillsPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Technical Stack & Capabilities"
        title="The Engineering Behind the Work"
        description="I structure my technical toolkit around what real applications demand: responsive user interfaces, resilient server architectures, scalable data models, and automated deployment pipelines."
        crumb="Skills"
      />

      {/* ---------- Skill Groups Grid ---------- */}
      <section className="bg-paper py-24 sm:py-28" aria-label="Skill groups">
        <div className="site-container grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = groupIcons[i % groupIcons.length];
            return (
              <Reveal key={group.title} delay={(i % 2) * 90}>
                <article className="card-lift h-full rounded-3xl border border-ink/10 bg-white p-8 hover:border-violet/50">
                  <div className="flex items-center justify-between gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-violet">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs tracking-[0.2em] text-body/60">
                      {String(i + 1).padStart(2, "0")} /{" "}
                      {String(group.items.length).padStart(2, "0")} skills
                    </span>
                  </div>
                  <h2 className="mt-6 font-display text-2xl font-bold text-ink">
                    {group.title}
                  </h2>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-body">{group.blurb}</p>
                  <ul className="mt-6 flex flex-wrap gap-2.5" aria-label={`${group.title} skills`}>
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-ink/10 bg-paper px-4 py-2 text-[0.85rem] font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-violet hover:bg-violet hover:text-ink"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---------- Toolkit Philosophy Banner ---------- */}
      <section
        className="relative overflow-hidden border-y border-white/10 bg-ink-2 py-20"
        aria-labelledby="toolkit-heading"
      >
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div className="site-container relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[0.78rem] font-medium uppercase tracking-[0.28em] text-violet">
              Architectural Philosophy
            </p>
            <h2
              id="toolkit-heading"
              className="mt-4 font-display text-[clamp(1.6rem,3.4vw,2.4rem)] font-bold tracking-[-0.02em] text-paper"
            >
              Built on core fundamentals that scale, not hype
            </h2>
            <p className="mt-4 leading-relaxed text-mist">
              Frameworks and libraries rotate constantly, but solid computer science and engineering principles remain unchanged. I choose each project&apos;s stack deliberately—tailoring technology choices strictly to business requirements, performance targets, and long-term maintainability rather than chasing temporary trends.
            </p>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {toolkitLabels.map((label, i) => (
                <li
                  key={label}
                  className="rounded-full border border-violet/30 bg-violet/10 px-5 py-2.5 font-display text-sm font-semibold text-violet-2"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- Principles & Habits ---------- */}
      <section className="bg-paper py-24 sm:py-28" aria-labelledby="principles-heading">
        <div className="site-container">
          <SectionHeading
            eyebrow="Engineering Standards"
            title="Skills are tools. These are my standards."
            description="The architectural disciplines and daily coding habits that guarantee software remains clean, scalable, and resilient long after deployment."
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {workingPrinciples.map((p, i) => (
              <Reveal key={p.title} delay={(i % 5) * 70}>
                <div className="card-lift h-full rounded-3xl border border-ink/10 bg-white p-6 hover:border-violet/50">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-violet">
                    <p.icon size={18} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-[1.02rem] font-bold leading-snug text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Bottom CTA ---------- */}
      <CtaBand
        title="Have a complex technical requirement?"
        text="Tell me about what you're building. I'll provide an honest assessment of the architecture, stack, and approach required to ship it reliably."
      />
    </main>
  );
}