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
  title: "Skills — Front-End, Back-End & Platforms",
  description:
    "Julie Lupex's web development skills: HTML5, CSS3, JavaScript, responsive design, REST APIs, databases, testing, performance, WordPress, e-commerce and deployment.",
  alternates: { canonical: "/skills" },
  openGraph: {
    title: "Skills — Front-End, Back-End & Platforms",
    description:
      "Julie Lupex's web development skills across front-end, back-end, development practice and platforms.",
  },
};

const groupIcons = [MonitorSmartphone, Server, Wrench, Boxes];

const workingPrinciples = [
  {
    icon: GitBranch,
    title: "Versioned everything",
    text: "Git history treated as the project's memory — every change traceable, every message written for a future reader.",
  },
  {
    icon: Bug,
    title: "Debugging as a craft",
    text: "Reproduce, isolate, understand, fix, and leave a test behind so the bug can never return quietly.",
  },
  {
    icon: Gauge,
    title: "Performance budgets",
    text: "Every image, script and query justifies its cost. Speed is protected deliberately, not recovered later.",
  },
  {
    icon: HeartHandshake,
    title: "Accessibility by default",
    text: "Semantics, contrast, focus states and keyboard paths — the web was built for everyone, so products are too.",
  },
  {
    icon: FileText,
    title: "Written-down decisions",
    text: "Lightweight documentation that explains why things are the way they are — because memory doesn't scale.",
  },
];

export default function SkillsPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Skills"
        title="The Craft Behind the Work"
        description="Skills grouped the way real projects group them — the interface users touch, the systems that remember, the practices that keep code healthy, and the platforms that take products live."
        crumb="Skills"
      />

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

      <section
        className="relative overflow-hidden border-y border-white/10 bg-ink-2 py-20"
        aria-labelledby="toolkit-heading"
      >
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div className="site-container relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[0.78rem] font-medium uppercase tracking-[0.28em] text-violet">
              The Toolkit, Simply Put
            </p>
            <h2
              id="toolkit-heading"
              className="mt-4 font-display text-[clamp(1.6rem,3.4vw,2.4rem)] font-bold tracking-[-0.02em] text-paper"
            >
              Built on fundamentals that don&apos;t expire
            </h2>
            <p className="mt-4 leading-relaxed text-mist">
              Tools and frameworks rotate; the underlying craft stays. Julie
              chooses each project&apos;s stack deliberately — around the
              product&apos;s needs, the team&apos;s context and the
              project&apos;s future — rather than chasing whatever is trending.
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

      <section className="bg-paper py-24 sm:py-28" aria-labelledby="principles-heading">
        <div className="site-container">
          <SectionHeading
            eyebrow="Ways of Working"
            title="Skills are tools. These are the habits."
            description="The practices that determine whether a project stays healthy six months after launch."
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

      <CtaBand
        title="The right skills, pointed at your problem."
        text="Tell Julie what you're trying to build — she'll tell you honestly which of these skills it calls for, and how far they can take it."
      />
    </main>
  );
}
