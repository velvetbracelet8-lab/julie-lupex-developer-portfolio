import type { Metadata } from "next";
import Image from "next/image";
import {
  Search,
  Users,
  Code2,
  Smartphone,
  FlaskConical,
  Gauge,
  ShieldCheck,
  Rocket,
  MapPin,
  Calendar,
  Coffee,
  ArrowDownRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About Me — Julie Lupex | Full-Stack Web Developer",
  description:
    "I'm Julie Lupex, a full-stack web developer who designs intuitive interfaces, builds resilient backend systems, and ships digital products from concept to deployment.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Julie Lupex — Full-Stack Web Developer",
    description:
      "I build digital products from concept to deployment. Explore my background, development philosophy, and approach to building modern web applications.",
  },
};

/* ─── Data ─── */

const stats = [
  { value: "5+", label: "Years Building for the Web" },
  { value: "40+", label: "Projects Shipped to Production" },
  { value: "12", label: "Countries, Clients Worldwide" },
  { value: "99", label: "Lighthouse Avg. Performance" },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL",
  "Tailwind CSS", "Prisma", "GraphQL", "Docker", "AWS",
  "Figma", "Git",
];

const timeline = [
  {
    year: "2019",
    title: "First line of code",
    text: "Built a static site for a local bakery. Ugly CSS, beautiful feeling.",
  },
  {
    year: "2020",
    title: "Went full-stack",
    text: "Discovered Node.js and databases. Suddenly the entire stack clicked into place.",
  },
  {
    year: "2022",
    title: "First freelance client",
    text: "Shipped an e-commerce platform end-to-end. Learned more in 8 weeks than 2 years of tutorials.",
  },
  {
    year: "2024",
    title: "Remote & worldwide",
    text: "Now collaborating with startups and agencies across 12 countries, building products that scale.",
  },
];

const approach = [
  {
    icon: Search,
    title: "Understand the problem first",
    text: "Before writing any code, I focus on the core objective: what real-world difference should this make?",
    featured: false,
  },
  {
    icon: Users,
    title: "Design for real users",
    text: "Interfaces built around actual human habits — respecting screen size, attention span, and time.",
    featured: false,
  },
  {
    icon: Code2,
    title: "Write maintainable code",
    text: "Clean, documented, and boring in the best way. The next engineer should never need a decoder ring.",
    featured: true,
  },
  {
    icon: Smartphone,
    title: "Responsive by default",
    text: "Every layout feels natural from 320px phones to ultra-wide monitors.",
    featured: false,
  },
  {
    icon: FlaskConical,
    title: "Test rigorously",
    text: "Forms, workflows, and edge cases vetted so there are zero surprises at launch.",
    featured: false,
  },
  {
    icon: Gauge,
    title: "Performance budgets from day one",
    text: "Speed is architecture, not an afterthought. Core Web Vitals are non-negotiable.",
    featured: true,
  },
  {
    icon: ShieldCheck,
    title: "Security & privacy first",
    text: "Robust validation, sensible defaults, and strict respect for user data.",
    featured: false,
  },
  {
    icon: Rocket,
    title: "Ship reliable solutions",
    text: "Automated, monitored, stress-tested production releases. Shipping is the workflow.",
    featured: false,
  },
];

/* ─── Page ─── */

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="About Me"
        title="The person behind the pixels"
        description="I'm a full-lifecycle web developer who takes ideas from the first sketch to clean, high-performing code in production. Here's the story, the stack, and the principles behind every project."
        crumb="About"
      />

      {/* ══════════ INTRO + STATS ══════════ */}
      <section
        className="bg-paper py-24 sm:py-32"
        aria-labelledby="who-heading"
      >
        <div className="site-container grid items-start gap-16 lg:grid-cols-[1fr_1.2fr]">
          {/* Portrait column */}
          <Reveal variant="left" className="relative">
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="overflow-hidden rounded-[2rem] border border-ink/10 shadow-[0_30px_80px_-30px_rgba(15,13,20,0.25)]">
                <Image
                  src="/images/julie-portrait.jpg"
                  alt="Illustrated portrait of Julie Lupex, full-stack web developer"
                  width={900}
                  height={1100}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Floating badge — repositioned to bottom-left for stability */}
              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-ink/10 bg-white px-5 py-3 shadow-lg sm:-bottom-6 sm:-left-6">
                <div className="flex items-center gap-2 text-xs text-body/70">
                  <MapPin size={13} />
                  <span>Remote · Worldwide</span>
                </div>
                <p className="mt-1 font-display text-sm font-bold text-ink">
                  Open to freelance & contract
                </p>
              </div>
            </div>
          </Reveal>

          {/* Bio column */}
          <div>
            <SectionHeading
              eyebrow="Who I Am"
              title="Creative mind, engineer's discipline"
              description="I'm equally at home sketching an interface, structuring a database schema, or tracing a stubborn bug through an API response."
            />

            <Reveal delay={100}>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-body">
                What ties my work together is a simple conviction:{" "}
                <strong className="text-ink">
                  technology should feel like second nature.
                </strong>{" "}
                The best compliment a product can receive is that someone used it
                without ever thinking about the complexity underneath.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-body">
  When I&apos;m not shipping code, you&apos;ll find me experimenting with
  generative art, hiking with too much camera gear, or arguing that
  dark mode is the default human state.
</p>
            </Reveal>

            {/* Stats strip */}
            <Reveal delay={260}>
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-ink/10 bg-white px-4 py-5 text-center"
                  >
                    <p className="font-display text-2xl font-bold text-violet">
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-body/70">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════ TECH STACK MARQUEE ══════════ */}
      <section
        className="border-y border-ink/10 bg-ink py-6"
        aria-label="Technologies I work with"
      >
        <div className="flex animate-marquee gap-8 whitespace-nowrap">
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="font-mono text-sm uppercase tracking-[0.15em] text-white/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* ══════════ JOURNEY TIMELINE ══════════ */}
      <section
        className="bg-white py-24 sm:py-32"
        aria-labelledby="journey-heading"
      >
        <div className="site-container">
          <SectionHeading
            eyebrow="My Journey"
            title="How I got here"
            description="A few milestones that shaped the developer I am today."
            align="center"
          />

          <div className="relative mx-auto mt-16 max-w-2xl">
            {/* Vertical line */}
            <div className="absolute left-[23px] top-2 bottom-2 w-px bg-ink/10 sm:left-1/2 sm:-translate-x-px" />

            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 100}>
                <div
                  className={`relative flex gap-6 pb-12 last:pb-0 sm:gap-10 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-violet bg-white sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                    <span className="font-mono text-xs font-bold text-violet">
                      {item.year.slice(2)}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 rounded-2xl border border-ink/10 bg-paper p-5 sm:w-[calc(50%-2.5rem)] ${
                      i % 2 === 0 ? "sm:text-right" : "sm:text-left"
                    }`}
                  >
                    <p className="font-mono text-xs uppercase tracking-widest text-violet">
                      {item.year}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-bold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-body">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ APPROACH — BENTO GRID ══════════ */}
      <section
        className="border-t border-ink/10 bg-paper py-24 sm:py-32"
        aria-labelledby="approach-heading"
      >
        <div className="site-container">
          <SectionHeading
            eyebrow="My Approach"
            title="Eight principles, every project"
            description="These aren't aspirational posters on a wall. They're the actual checklist I run through on every build."
            align="center"
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            {approach.map((a, i) => (
              <Reveal
                key={a.title}
                delay={(i % 4) * 70}
                className={
                  a.featured
                    ? "sm:col-span-2 lg:col-span-2"
                    : ""
                }
              >
                <div
                  className={`group card-lift h-full rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    a.featured
                      ? "border-violet/30 bg-gradient-to-br from-violet/5 to-transparent"
                      : "border-ink/10 bg-white hover:border-violet/40"
                  }`}
                >
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-xl transition-colors duration-300 ${
                      a.featured
                        ? "bg-violet text-white"
                        : "bg-ink text-violet group-hover:bg-violet group-hover:text-white"
                    }`}
                  >
                    <a.icon size={18} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-[1.05rem] font-bold leading-snug text-ink">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {a.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ PULL QUOTE ══════════ */}
      <section className="bg-ink py-24 sm:py-32" aria-label="Development philosophy">
        <Reveal>
          <div className="site-container max-w-3xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-violet">
              My Philosophy
            </p>
            <blockquote className="mt-6 font-display text-2xl font-bold leading-snug text-white sm:text-4xl sm:leading-tight">
  &quot;The best code is the code your users never notice — because
  everything just{" "}
  <span className="text-violet">works.</span>&quot;
</blockquote>
            <p className="mt-6 text-sm text-white/50">
              — Julie Lupex, probably while debugging at 2 AM
            </p>
          </div>
        </Reveal>
      </section>

      {/* ══════════ CTA ══════════ */}
      <CtaBand
        title="Enough about me — let's talk about your project."
        text="Whether you need a full build, a rescue mission, or just a second pair of eyes on your architecture, I'd love to hear what you're working on."
      />
    </main>
  );
}