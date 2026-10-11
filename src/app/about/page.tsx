
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — Julie Lupex",
  description:
    "Julie Lupex — full-stack developer who designs, builds, and ships. Based remotely, available worldwide.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Julie Lupex",
    description:
      "Julie Lupex — full-stack developer who designs, builds, and ships digital products.",
  },
};

const philosophy = [
  {
    number: "01",
    title: "Clarity over cleverness",
    text: "Interfaces should make the next step obvious. If users have to work too hard to understand what to do, the experience needs another pass.",
  },
  {
    number: "02",
    title: "Performance is part of the experience",
    text: "A good product should look right, load quickly, respond well, and remain usable across real devices and connections.",
  },
  {
    number: "03",
    title: "Build for what happens next",
    text: "The work should remain maintainable after launch — including the code, integrations, content, deployment, and people managing the system.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    text: "We define the business goal, users, existing system, and what needs to change.",
  },
  {
    number: "02",
    title: "Structure",
    text: "Requirements become the UX, technical approach, scope, and milestones before development begins.",
  },
  {
    number: "03",
    title: "Build",
    text: "Development happens in clear stages so progress and important decisions stay visible.",
  },
  {
    number: "04",
    title: "Launch & improve",
    text: "After launch, the product can continue to evolve through maintenance, performance work, content changes, and new features.",
  },
];

const toolbox = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "REST APIs",
  "PostgreSQL",
  "Supabase",
  "WordPress",
  "WooCommerce",
  "Shopify",
  "Figma",
  "Git & GitHub",
  "Vercel",
  "Netlify",
];

export default function AboutPage() {
  return (
    <main id="main">
      {/* HERO */}
      <section className="bg-paper py-24 sm:py-32 lg:py-40">
        <div className="site-container">
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink">
              About
            </p>

            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-ink sm:text-6xl md:text-7xl lg:text-8xl">
              I&apos;m Julie Lupex.
              <br />
              <span className="text-ink/45">
                I design, build, and ship
              </span>
              <br />
              digital products.
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-12 grid gap-8 border-t border-ink/10 pt-10 lg:grid-cols-12">
              <div className="lg:col-span-8 lg:col-start-5">
                <p className="text-lg leading-8 text-body sm:text-xl sm:leading-9">
                  I&apos;m a full-stack web developer focused on turning
                  business needs, technical challenges, and product ideas into
                  practical digital solutions.
                </p>

                <p className="mt-7 text-lg leading-8 text-body sm:text-xl sm:leading-9">
                  My work connects product thinking, interface design, and
                  software development — from responsive websites and web
                  applications to APIs, databases, and deployment.
                </p>

                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-body/60">
                  <span>Available for freelance projects</span>
                  <span>Working remotely · Worldwide</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PEOPLE / STUDIO */}
      <section className="border-y border-ink/10 bg-white py-24 sm:py-32">
        <div className="site-container">
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink">
              The studio
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Small team. Direct communication.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-body">
              Most projects are led and built directly by Julie. For larger
              builds, additional engineering support can be brought in where
              it adds value.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <Reveal variant="left">
              <div className="group overflow-hidden rounded-[2rem] border border-ink/10 bg-paper">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/julie-founder.png"
                    alt="Julie Lupex — Founder and Full-Stack Web Developer"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    priority
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-semibold tracking-tight text-ink">
                    Julie Lupex
                  </h3>

                  <p className="mt-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-body/60">
                    FOUNDER · FULL-STACK WEB DEVELOPER
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="group overflow-hidden rounded-[2rem] border border-ink/10 bg-paper">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/about/julie-jeremy.jpg"
                    alt="Julie Lupex and Jeremy Muiruri collaborating on a web project"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-semibold tracking-tight text-ink">
                    Julie × Jeremy
                  </h3>

                  <p className="mt-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-body/60">
                    DEVELOPMENT &amp; ENGINEERING
                  </p>

                  <p className="mt-4 text-sm leading-7 text-body">
                    Julie leads product direction, interface design, and
                    full-stack development. Jeremy contributes backend
                    engineering and QA on larger builds.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section
        className="bg-paper py-24 sm:py-32"
        aria-labelledby="philosophy-heading"
      >
        <div className="site-container">
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink">
              How I work
            </p>

            <h2
              id="philosophy-heading"
              className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl"
            >
              Three things I{" "}
              <span className="italic">care about.</span>
            </h2>
          </Reveal>

          <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
            {philosophy.map((item, index) => (
              <Reveal key={item.number} delay={index * 90}>
                <article className="grid gap-5 py-9 sm:grid-cols-[80px_1fr] sm:gap-8">
                  <p className="font-mono text-xs font-semibold text-ink">
                    {item.number}
                  </p>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-3xl text-base leading-7 text-body sm:text-lg sm:leading-8">
                      {item.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        className="border-t border-ink/10 bg-white py-24 sm:py-32"
        aria-labelledby="process-heading"
      >
        <div className="site-container">
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink">
              Process
            </p>

            <h2
              id="process-heading"
              className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl"
            >
              Clear stages.{" "}
              <span className="italic">No surprises.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-body">
              The goal is simple: you should know what is being built, why it
              is being built, and what happens next.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-2">
            {process.map((item, index) => (
              <Reveal key={item.number} delay={index * 80}>
                <article className="h-full bg-paper p-7 sm:p-9">
                  <p className="font-mono text-xs font-semibold text-ink">
                    {item.number}
                  </p>

                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-body">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLBOX */}
      <section
        className="bg-paper py-20 sm:py-28"
        aria-labelledby="toolbox-heading"
      >
        <div className="site-container">
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink">
              Under the hood
            </p>

            <h2
              id="toolbox-heading"
              className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl"
            >
              The technology supports the solution.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-body sm:text-lg">
              The stack changes with the product, existing systems, and what
              needs to happen after launch.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 flex flex-wrap gap-2">
              {toolbox.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-ink/10 bg-white px-3.5 py-2 text-xs font-medium text-ink/75"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WORKING STYLE */}
      <section className="border-t border-ink/10 bg-white py-24 sm:py-32">
        <div className="site-container">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal variant="left">
              <div className="overflow-hidden rounded-[2rem] border border-ink/10 bg-paper">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/about/architecture-diagram.png"
                    alt="Software architecture diagram showing how a digital system is structured"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <p className="border-t border-ink/10 px-6 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.13em] text-body/60">
                  ARCHITECTURE BEFORE IMPLEMENTATION
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink">
                  Working together
                </p>

                <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                  Serious about the work.{" "}
                  <span className="italic">Easy to work with.</span>
                </h2>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-body">
                  You&apos;ll get clear updates, direct communication, and
                  honest feedback when something needs reconsidering.
                </p>

                <Link
                  href="/contact"
                  className="btn btn-primary mt-9 inline-flex items-center"
                >
                  Work with me
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="bg-ink py-24 sm:py-32"
        aria-labelledby="next-step-heading"
      >
        <div className="site-container">
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Next step
            </p>

            <h2
              id="next-step-heading"
              className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Have something to build?{" "}
              <span className="italic">Let&apos;s talk.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
              Tell me what you&apos;re building, what is not working, or what
              you want to improve. We can define the right scope from there.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-white/90"
            >
              Start a project
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>

            <div className="mt-12 grid gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:grid-cols-2 lg:grid-cols-3">
              <span>Clear scope and milestones</span>
              <span>Post-launch support available</span>
              <span>You own the code and content</span>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

