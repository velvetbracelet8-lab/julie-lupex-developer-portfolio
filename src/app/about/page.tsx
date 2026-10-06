
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — Julie Lupex | Full-Stack Developer & Designer",
  description:
    "Meet Julie Lupex — a full-stack developer and designer building high-performing websites and digital products with a small, senior team.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Julie Lupex — Full-Stack Developer & Designer",
    description:
      "Designer’s eye, engineer’s brain, one inbox. Learn how Julie works, her development philosophy, process, stack, and the people behind the work.",
  },
};

const stats = [
  { value: "05+", label: "YEARS BUILDING FOR THE WEB" },
  { value: "02", label: "DEVS, ONE DRAMA-FREE TEAM" },
  { value: "24H", label: "MAX REPLY TIME, ALWAYS" },
  { value: "100%", label: "PREVIEWED ON STAGING FIRST" },
];

const philosophy = [
  {
    number: "01",
    title: "Clarity over cleverness",
    text: "If a user has to think, I've failed. Every page gets one job, one message, one obvious next step — and then it gets out of the way.",
  },
  {
    number: "02",
    title: "Speed is respect",
    text: "Every second of load time quietly costs you customers. I treat performance as a design feature, not an afterthought you bolt on later.",
  },
  {
    number: "03",
    title: "Websites are employees",
    text: "Your site should sell, book, qualify and answer — around the clock, without sick days. I build it to work shifts, not to sit pretty.",
  },
];

const process = [
  {
    number: "01",
    title: "Listen first",
    text: "Before a single pixel, I learn how your business actually makes money. The design follows the money — honestly and unashamedly.",
  },
  {
    number: "02",
    title: "Prototype fast",
    text: "You'll see something clickable in week one. Feedback on something real beats opinions about something imagined, every time.",
  },
  {
    number: "03",
    title: "Build in the open",
    text: "A live staging link, visible progress, weekly walkthroughs. You approve every stage — no big reveal, and therefore no big risk.",
  },
  {
    number: "04",
    title: "Measure after launch",
    text: "Analytics wired in from day one. If something underperforms, the data says so — and then we fix it.",
  },
];

const toolbox = [
  {
    title: "Frontend",
    subtitle: "WHERE PIXELS GET OPINIONS",
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
    subtitle: "WHERE THE DATA BEHAVES",
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
    subtitle: "WHERE NOTHING GETS LOST",
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
    subtitle: "WHERE CLIENTS EDIT SAFELY",
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
    subtitle: "WHERE USERS STOP THINKING",
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
    subtitle: "WHERE DEPLOYS STAY BORING",
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

const humanDetails = [
  "Powered by Kenyan coffee",
  "Weekend trail runner",
  "Open-source contributor",
  "Mentors junior devs",
  "Recovering perfectionist",
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
                  I started in web development after seeing firsthand how
                  small businesses could get trapped by bloated quotes,
                  complicated processes and websites that became difficult to
                  maintain after launch. I wanted to build a better way:
                  thoughtful digital products without unnecessary layers
                  between the people who need them and the people building
                  them.
                </p>

                <p className="mt-7 text-lg leading-8 text-body sm:text-xl sm:leading-9">
                  Five years later, that principle still shapes how I work. I
                  work full-stack, which for you means exactly one thing:{" "}
                  <strong className="text-ink">no hand-offs.</strong> The person
                  who designs your product page is the person who optimizes its
                  database queries. Fewer meetings, fewer misunderstandings,
                  faster shipping — and one person who understands the whole
                  system.
                </p>

                <p className="mt-7 text-lg leading-8 text-body sm:text-xl sm:leading-9">
                  On larger builds I team up with Jeremy Muiruri, a backend &amp;
                  QA engineer who finds edge cases the way other people find
                  typos. Together we stay small on purpose — senior hands only,
                  direct communication, and technical decisions made close to
                  the actual work.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-ink/10 bg-white py-8">
        <div className="site-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-ink/10">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 70}>
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
                    THE STUDIO — A SMALL, SENIOR TEAM BUILT FOR BETTER DIGITAL
                    PRODUCTS
                  </p>

                  <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-violet">
                    JULIE LUPEX × JEREMY MUIRURI · DEVELOPMENT &amp; ENGINEERING
                  </p>

                  <p className="mt-4 text-sm leading-7 text-body">
                    Julie leads product direction, interface design and
                    full-stack development. Jeremy brings backend engineering
                    and QA depth to larger builds, helping the team catch
                    technical edge cases before they reach users.
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
              Built in the open,{" "}
              <span className="italic">approved by you</span> at every step.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-body">
              The industry default is: disappear for six weeks, return with
              something you didn&apos;t ask for. Mine is the opposite — you see
              everything as it happens, and nothing ships without your
              sign-off.
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
              What I reach for <span className="italic">daily.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-body sm:text-lg">
              A practical production stack shaped by the needs of the project.
              I choose tools for reliability, maintainability and the problem
              they solve — not because they happen to be fashionable.
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
                  <span className="italic">Not about myself.</span>
                </h2>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-body">
                  You&apos;ll get plain-English updates, honest pushback when an
                  idea will hurt your business, and a developer who answers her
                  own messages. The best websites come from people who log off
                  and live a little — then obsess about kerning at 1am anyway.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {humanDetails.map((detail) => (
                    <span
                      key={detail}
                      className="rounded-full border border-ink/10 bg-white px-3 py-2 text-xs font-medium text-ink/70"
                    >
                      {detail}
                    </span>
                  ))}
                </div>

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
              <span className="italic">Let&apos;s talk — it&apos;s free.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
              Describe what&apos;s broken — or what you&apos;re building — and
              get an honest diagnosis plus a fixed quote within 24 hours. Worst
              case, you leave with a plan. Best case, the problem is gone for
              good.
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
              <span>Fixed quote in writing before work begins</span>
              <span>Final payment only when you approve</span>
              <span>30 days of post-launch fixes, free</span>
              <span>You own all code, content &amp; accounts</span>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

