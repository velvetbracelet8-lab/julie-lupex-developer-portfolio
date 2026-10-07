
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — Julie Lupex | Full-Stack Developer & Designer",
  description:
    "Meet Julie Lupex — a full-stack developer and designer building thoughtful websites, web applications, and digital products around real business problems.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Julie Lupex — Full-Stack Developer & Designer",
    description:
      "Learn how Julie approaches product thinking, interface design, full-stack development, and practical digital solutions.",
  },
};

const stats = [
  { value: "01", label: "PROBLEM-FIRST APPROACH" },
  { value: "01", label: "CONNECTED DESIGN + DEVELOPMENT" },
  { value: "01", label: "DIRECT COMMUNICATION" },
  { value: "01", label: "CLEAR PROJECT SCOPE" },
];

const philosophy = [
  {
    number: "01",
    title: "Clarity over cleverness",
    text: "If a user has to work too hard to understand what to do next, the experience needs another pass. I aim for clear content, purposeful interfaces, and obvious paths through the product.",
  },
  {
    number: "02",
    title: "Performance is part of the experience",
    text: "A good interface should not only look right. It should load efficiently, respond quickly, and remain usable across the devices and connections people actually use.",
  },
  {
    number: "03",
    title: "Build for the real world",
    text: "Digital products need to work beyond the design file. I think about maintainability, accessibility, data, integrations, deployment, and the people who will use or manage the system after launch.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand the problem",
    text: "We start with the business goal, the users, the existing system, and the friction that needs to be removed. The solution comes after the problem is understood.",
  },
  {
    number: "02",
    title: "Structure the solution",
    text: "The requirements are turned into a practical information structure, user experience, technical approach, and project scope before development gets too far ahead.",
  },
  {
    number: "03",
    title: "Build and review",
    text: "Development happens in clear stages so the direction can be reviewed as the product takes shape. This keeps technical decisions connected to the original goal.",
  },
  {
    number: "04",
    title: "Launch and improve",
    text: "After launch, the work can continue through maintenance, performance improvements, content changes, and new features as the business evolves.",
  },
];

const toolbox = [
  {
    title: "Frontend",
    subtitle: "WHERE THE EXPERIENCE TAKES SHAPE",
    tools: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "Astro",
    ],
  },
  {
    title: "Backend",
    subtitle: "WHERE THE SYSTEM WORKS",
    tools: [
      "Node.js",
      "Express",
      "REST APIs",
      "GraphQL",
      "Auth & JWT",
      "Stripe",
      "Webhooks",
    ],
  },
  {
    title: "Data & APIs",
    subtitle: "WHERE INFORMATION CONNECTS",
    tools: [
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "MongoDB",
      "Redis",
      "Sanity",
      "Firebase",
    ],
  },
  {
    title: "CMS & E-commerce",
    subtitle: "WHERE CONTENT MEETS COMMERCE",
    tools: [
      "WordPress",
      "WooCommerce",
      "ACF Pro",
      "Gutenberg",
      "Headless CMS",
      "Shopify",
    ],
  },
  {
    title: "Design & UX",
    subtitle: "WHERE USERS FIND THEIR WAY",
    tools: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "Design systems",
      "Accessibility",
      "Motion design",
    ],
  },
  {
    title: "Tools & Ops",
    subtitle: "WHERE PROJECTS SHIP",
    tools: [
      "Git & GitHub",
      "Netlify",
      "Vercel",
      "CI/CD",
      "Docker basics",
      "Analytics",
      "Lighthouse",
    ],
  },
];

export default function AboutPage() {
  return (
    <main id="main">
      {/* HERO / STORY */}
      <section className="bg-paper py-24 sm:py-32 lg:py-40">
        <div className="site-container">
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-violet">
              01 Story
            </p>

            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-ink sm:text-6xl md:text-7xl lg:text-8xl">
              Hey, I&apos;m Julie.
              <br />
              <span className="text-violet">Designer&apos;s eye,</span>
              <br />
              engineer&apos;s brain,{" "}
              <span className="italic">one inbox.</span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-12 grid gap-8 border-t border-ink/10 pt-10 lg:grid-cols-12">
              <div className="lg:col-span-8 lg:col-start-5">
                <p className="text-lg leading-8 text-body sm:text-xl sm:leading-9">
                  I started in web development after seeing how easily small
                  businesses can get trapped by bloated quotes, complicated
                  processes, and websites that become difficult to maintain
                  after launch. I wanted to build a better way: thoughtful
                  digital products without unnecessary layers between the
                  people who need them and the people building them.
                </p>

                <p className="mt-7 text-lg leading-8 text-body sm:text-xl sm:leading-9">
                  I work across design and development, which means I can think
                  about the interface and the underlying system together. From
                  responsive websites and user experiences to APIs, databases,
                  authentication, and deployment, I focus on how the pieces
                  work as one product.
                </p>

                <p className="mt-7 text-lg leading-8 text-body sm:text-xl sm:leading-9">
                  On larger builds I can also collaborate with Jeremy Muiruri on
                  backend engineering and QA. Keeping the working team small
                  allows technical conversations to stay close to the actual
                  product and keeps communication direct.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* APPROACH SNAPSHOT */}
      <section className="border-y border-ink/10 bg-white py-8">
        <div className="site-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-ink/10">
            {stats.map((stat, index) => (
              <Reveal key={`${stat.label}-${index}`} delay={index * 70}>
                <div
                  className={`px-5 py-5 text-center sm:px-8 ${
                    index > 1 ? "border-t border-ink/10 lg:border-t-0" : ""
                  }`}
                >
                  <p className="text-3xl font-semibold tracking-tight text-violet sm:text-4xl">
                    {stat.value}
                  </p>

                  <p className="mt-2 font-mono text-[11px] font-semibold uppercase leading-4 tracking-[0.14em] text-body/60">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PEOPLE / STUDIO */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal variant="left">
              <div className="group overflow-hidden rounded-[2rem] border border-ink/10 bg-white">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/julie-founder.png"
                    alt="Julie Lupex — Founder, Full-Stack Developer and Designer"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    priority
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl font-semibold tracking-tight text-ink">
                    Julie Lupex
                  </h2>

                  <p className="mt-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-body/60">
                    FOUNDER, FULL-STACK DEV &amp; DESIGNER
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="group overflow-hidden rounded-[2rem] border border-ink/10 bg-white">
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
                  <p className="font-mono text-[11px] font-semibold uppercase leading-5 tracking-[0.14em] text-body/60">
                    THE STUDIO — A SMALL DEVELOPMENT COLLABORATION
                  </p>

                  <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-violet">
                    JULIE LUPEX × JEREMY MUIRURI · DEVELOPMENT &amp; ENGINEERING
                  </p>

                  <p className="mt-4 text-sm leading-7 text-body">
                    Julie leads product direction, interface design, and
                    full-stack development. Jeremy contributes backend
                    engineering and QA support on larger builds, helping
                    strengthen the technical side of the work.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PHILOSOPHY */}
      <section
        className="border-t border-ink/10 bg-white py-24 sm:py-32"
        aria-labelledby="philosophy-heading"
      >
        <div className="site-container">
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-violet">
              02 Development philosophy
            </p>

            <h2
              id="philosophy-heading"
              className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl"
            >
              Three rules I <span className="italic">don&apos;t break.</span>
            </h2>
          </Reveal>

          <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
            {philosophy.map((item, index) => (
              <Reveal key={item.number} delay={index * 90}>
                <article className="grid gap-5 py-9 sm:grid-cols-[80px_1fr] sm:gap-8">
                  <p className="font-mono text-xs font-semibold text-violet">
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
        className="bg-paper py-24 sm:py-32"
        aria-labelledby="process-heading"
      >
        <div className="site-container">
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-violet">
              03 How I approach projects
            </p>

            <h2
              id="process-heading"
              className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl"
            >
              Built with visibility,{" "}
              <span className="italic">not surprises.</span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-body">
              The goal is to keep the work understandable as it develops. You
              should know what is being built, why it is being built, and what
              decisions still need to be made.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-2">
            {process.map((item, index) => (
              <Reveal key={item.number} delay={index * 80}>
                <article className="h-full bg-white p-7 sm:p-9">
                  <p className="font-mono text-xs font-semibold text-violet">
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
        className="border-t border-ink/10 bg-white py-24 sm:py-32"
        aria-labelledby="toolbox-heading"
      >
        <div className="site-container">
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-violet">
              04 The toolbox
            </p>

            <h2
              id="toolbox-heading"
              className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl"
            >
              Technologies I work with.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-body sm:text-lg">
              A practical production stack shaped by the needs of the project.
              I choose technologies for reliability, maintainability, and the
              problem they solve — not simply because they are fashionable.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {toolbox.map((group, index) => (
              <Reveal key={group.title} delay={(index % 3) * 70}>
                <article className="h-full rounded-3xl border border-ink/10 bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet/40 hover:shadow-lg">
                  <h3 className="text-xl font-semibold tracking-tight text-ink">
                    {group.title}
                  </h3>

                  <p className="mt-2 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-violet">
                    {group.subtitle}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-ink/10 bg-white px-3 py-1.5 text-xs font-medium text-ink/75"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HUMAN PART */}
      <section
        className="bg-paper py-24 sm:py-32"
        aria-labelledby="human-heading"
      >
        <div className="site-container">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal variant="left">
              <div className="overflow-hidden rounded-[2rem] border border-ink/10 bg-white">
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
                  WHERE THE WORK TAKES SHAPE — ARCHITECTURE BEFORE IMPLEMENTATION
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-violet">
                  05 The human part
                </p>

                <h2
                  id="human-heading"
                  className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl"
                >
                  Serious about the work.{" "}
                  <span className="italic">Easy to work with.</span>
                </h2>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-body">
                  You&apos;ll get clear updates, honest feedback when an idea
                  needs reconsidering, and direct communication throughout the
                  project. Good development is not just about writing code — it
                  is about making decisions together and keeping the product
                  moving in the right direction.
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
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-violet">
              06 Next step
            </p>

            <h2
              id="next-step-heading"
              className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Have a problem worth solving?{" "}
              <span className="italic">Let&apos;s talk.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
              Describe what&apos;s not working, what you&apos;re building, or
              what you want to improve. We can discuss the problem, the
              possible solution, and the right scope before development begins.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet/90"
              >
                Start a project
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>

              <a
                href={site.emailHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/30"
              >
                {site.email}
              </a>
            </div>

            <div className="mt-12 grid gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:grid-cols-2 lg:grid-cols-4">
              <span>Clear scope before development begins</span>
              <span>Milestones agreed before work starts</span>
              <span>Post-launch support based on project scope</span>
              <span>You retain ownership of your website and content</span>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

