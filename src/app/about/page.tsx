import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Search,
  Users,
  Code2,
  Smartphone,
  FlaskConical,
  Gauge,
  ShieldCheck,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Julie Lupex — Web Developer",
  description:
    "Meet Julie Lupex: a full-stack web developer who designs interfaces, builds backend systems and APIs, and ships digital products from concept to deployment.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Julie Lupex — Web Developer",
    description:
      "Meet Julie Lupex: a full-stack web developer who designs interfaces, builds backend systems and APIs, and ships digital products from concept to deployment.",
  },
};

const doing = [
  "Designs clean, responsive interfaces that feel intuitive on every device",
  "Develops websites and web applications end to end",
  "Builds backend systems, REST APIs and business logic",
  "Integrates and models databases that keep products honest",
  "Improves performance so experiences feel instant",
  "Helps digital products move from concept to deployment",
];

const approach = [
  {
    icon: Search,
    title: "Understand the problem first",
    text: "Before any code, the real question: what is this supposed to change for the person using it?",
  },
  {
    icon: Users,
    title: "Design for real users",
    text: "Interfaces built around actual humans — their devices, their attention, their patience.",
  },
  {
    icon: Code2,
    title: "Write maintainable code",
    text: "Code that the next developer can read is worth more than code that merely runs.",
  },
  {
    icon: Smartphone,
    title: "Build responsive experiences",
    text: "Every screen earns its place on the smallest phone and the widest monitor alike.",
  },
  {
    icon: FlaskConical,
    title: "Test functionality",
    text: "Forms, flows and edge cases exercised until the surprises are gone.",
  },
  {
    icon: Gauge,
    title: "Optimize performance",
    text: "Speed budgets respected from day one — not patched in at the end.",
  },
  {
    icon: ShieldCheck,
    title: "Maintain security",
    text: "Careful validation, sensible defaults and healthy respect for user data.",
  },
  {
    icon: Rocket,
    title: "Deploy reliable solutions",
    text: "Shipping is part of the job: configured, monitored and reversible releases.",
  },
];

const journey = [
  {
    phase: "Foundations",
    title: "Learning how the web actually works",
    text: "HTML, CSS and JavaScript — not as syntax to memorize, but as the medium itself. Understanding what browsers do, what the network costs, and why semantics matter before any framework enters the room.",
    areas: "HTML5 · CSS3 · JavaScript",
  },
  {
    phase: "Interfaces",
    title: "Making experiences people enjoy",
    text: "Responsive design, accessibility and UI development. Learning that a beautiful interface is one people don't have to think about — and that polish lives in states: hover, focus, loading, empty and error.",
    areas: "Responsive Design · Accessibility · UI Development · Animations",
  },
  {
    phase: "Logic & Data",
    title: "Giving interfaces a memory",
    text: "Server-side development, REST APIs, authentication and databases. The shift from pages that look right to products that do right — where business logic lives and data stays consistent.",
    areas: "REST APIs · Databases · Authentication · Business Logic",
  },
  {
    phase: "Full-Stack",
    title: "Connecting both halves into one product",
    text: "Designing the front end and the back end as one continuous experience — from a pixel on the screen to a row in a database, with the API contract holding it all together.",
    areas: "Component Architecture · API Integration · Testing · Debugging",
  },
  {
    phase: "Delivery",
    title: "Shipping work that survives the real world",
    text: "Performance optimization, hosting, deployment and cloud infrastructure. Because a product that never leaves the laptop never helped anyone — and shipping calmly is a skill of its own.",
    areas: "Performance · Deployment · Cloud Infrastructure · Git & GitHub",
  },
];

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="About"
        title="About Julie"
        description="A modern developer working across the entire lifecycle of the web — from the first sketch of an interface to the moment a product goes live."
        crumb="About"
      />

      {/* ---------- Who I Am ---------- */}
      <section className="bg-paper py-24 sm:py-28" aria-labelledby="who-heading">
        <div className="site-container grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal variant="left" className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-[2rem] border border-ink/10">
              <Image
                src="/images/julie-portrait.jpg"
                alt="Illustrated portrait representing Julie Lupex, a confident web developer, with violet accent lighting."
                width={900}
                height={1100}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
            <p className="mt-3 text-center text-xs tracking-wide text-body/70">
              Illustrated portrait representing Julie — artwork, not a photograph.
            </p>
            <div className="card-lift absolute -right-3 top-8 hidden rounded-2xl border border-ink/10 bg-white p-4 shadow-[0_20px_50px_-20px_rgba(15,13,20,0.3)] sm:block lg:-right-6">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-deep">
                Julie Lupex
              </p>
              <p className="mt-1 font-display text-sm font-bold text-ink">
                Full-Stack Web Developer
              </p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Who I Am"
              title="A creative mind with an engineer's discipline"
              description="Julie is a creative and technically minded web developer who enjoys solving real-world problems through technology. She is equally at home sketching an interface, designing a database schema, or tracing a stubborn bug through an API response."
            />
            <Reveal delay={120}>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-body">
                What ties it together is a simple conviction: technology should
                feel like help. The best compliment a product can receive is
                that someone used it without ever having to think about it —
                and building products that earn that compliment is the work
                Julie loves most.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-body">
                <span className="rounded-full border border-ink/10 bg-white px-4 py-2 font-medium">
                  Based online · working with ideas everywhere
                </span>
                <span className="rounded-full border border-violet/40 bg-violet/10 px-4 py-2 font-medium text-deep">
                  Open to freelance projects
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- What I Do ---------- */}
      <section className="border-t border-ink/10 bg-paper-2 py-24 sm:py-28" aria-labelledby="doing-heading">
        <div className="site-container grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="What I Do"
              title="One developer, the whole journey"
              description="Most products need more than one kind of developer. Julie's work spans the full distance a digital product travels — which means fewer handoffs and a more coherent result."
            />
            <Reveal delay={140}>
              <Link href="/services" className="btn btn-dark mt-8">
                See All Services
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <ul className="grid gap-4">
            {doing.map((item, i) => (
              <Reveal key={item} delay={i * 60}>
                <li className="card-lift flex items-start gap-3.5 rounded-2xl border border-ink/10 bg-white p-5">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-deep"
                    aria-hidden="true"
                  />
                  <span className="text-[0.98rem] leading-relaxed text-ink">{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- My Approach ---------- */}
      <section className="bg-paper py-24 sm:py-28" aria-labelledby="approach-heading">
        <div className="site-container">
          <SectionHeading
            eyebrow="My Approach"
            title="How every project gets built"
            description="Eight habits that show up in every build — regardless of size, budget or deadline."
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((a, i) => (
              <Reveal key={a.title} delay={(i % 4) * 80}>
                <div className="card-lift h-full rounded-3xl border border-ink/10 bg-white p-6 hover:border-violet/50">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-violet">
                    <a.icon size={18} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-[1.05rem] font-bold leading-snug text-ink">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Skills journey ---------- */}
      <section className="border-t border-ink/10 bg-paper-2 py-24 sm:py-28" aria-labelledby="journey-heading">
        <div className="site-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="The Journey"
              title="How the craft evolved"
              description="Not a résumé of job titles — a map of focus areas, each one building on the last, from foundations to full-stack delivery."
            />
            <Reveal delay={140}>
              <Link href="/skills" className="btn btn-ghost-dark mt-8">
                View Skills in Detail
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <ol className="space-y-8">
            {journey.map((j, i) => (
              <li key={j.phase} className="timeline-item">
                <span className="timeline-dot" aria-hidden="true" />
                <Reveal delay={i * 60}>
                  <div className="card-lift rounded-3xl border border-ink/10 bg-white p-7">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.24em] text-deep">
                        Phase {String(i + 1).padStart(2, "0")} — {j.phase}
                      </p>
                    </div>
                    <h3 className="mt-2.5 font-display text-xl font-bold text-ink">{j.title}</h3>
                    <p className="mt-2.5 text-[0.95rem] leading-relaxed text-body">{j.text}</p>
                    <p className="mt-4 font-mono text-xs tracking-wide text-body/70">{j.areas}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Philosophy ---------- */}
      <section className="relative overflow-hidden bg-ink py-24 sm:py-28" aria-labelledby="philosophy-heading">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div
          className="glow-violet absolute left-1/2 top-1/2 h-[26rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
          aria-hidden="true"
        />
        <div className="site-container relative">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-[0.78rem] font-medium uppercase tracking-[0.28em] text-violet">
              Developer Philosophy
            </p>
            <blockquote
              id="philosophy-heading"
              className="mt-6 font-display text-[clamp(1.7rem,4.2vw,3.1rem)] font-bold leading-[1.18] tracking-[-0.02em] text-paper text-balance"
            >
              “Good software should not only work. It should{" "}
              <span className="text-violet">make the user&apos;s life easier</span>.”
            </blockquote>
            <p className="mt-6 text-lg text-mist">
              — Julie Lupex · {site.shortRole}
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Like the way Julie thinks? You'll like the way she builds."
        text="Share the idea you're sitting on — the conversation is free, and the possibilities usually aren't what you expected."
      />
    </main>
  );
}
