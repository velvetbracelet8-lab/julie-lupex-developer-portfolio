
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import HomeHero from "@/components/HomeHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import DentalWebsitePreview from "@/components/DentalWebsitePreview";
import TeamSection from "@/components/TeamSection";
import { BlogCard } from "@/components/cards";
import { posts } from "@/lib/blog";

const solutions = [
  {
    number: "01",
    title: "Websites",
    text: "Fast, responsive websites built to communicate clearly, guide visitors, and support business goals.",
    href: "/services#websites",
  },
  {
    number: "02",
    title: "Web Applications",
    text: "Custom systems that replace manual workflows, connect information, and make complex processes easier to manage.",
    href: "/services#web-applications",
  },
  {
    number: "03",
    title: "E-commerce",
    text: "Customer-focused shopping experiences designed around product discovery, trust, checkout, and growth.",
    href: "/services#e-commerce",
  },
  {
    number: "04",
    title: "APIs & Backend",
    text: "Reliable backend systems, APIs, databases, and integrations that give digital products a solid foundation.",
    href: "/services#backend-api",
  },
];

export default function HomePage() {
  const latestPosts = posts.slice(0, 3);

  return (
    <main id="main">
      <HomeHero />

      {/* ---------- Intro / About preview ---------- */}
      <section
        id="about"
        className="border-t border-[var(--border)] bg-[var(--paper)] py-24 md:py-32 lg:py-40"
        aria-labelledby="about-preview-heading"
      >
        <div className="site-container">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-white">
              Meet Julie
            </p>

            <h2
              id="about-preview-heading"
              className="mx-auto max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              I build digital solutions around real problems.
            </h2>

            <div className="mx-auto mt-10 max-w-3xl space-y-6 text-base leading-8 text-[var(--body)] sm:text-lg sm:leading-9">
              <p>
                I&apos;m Julie Lupex, a full-stack developer focused on turning
                business problems, technical challenges, and ideas into
                practical digital products.
              </p>

              <p>
                I work across the full stack — from responsive interfaces and
                user journeys to APIs, databases, integrations, and the
                application logic behind them.
              </p>

              <p>
                The goal is not to use technology for its own sake. It is to
                remove friction, improve the experience for users, and build
                something that makes the business easier to run or grow.
              </p>
            </div>

            <div className="mx-auto mt-14 max-w-4xl border-y border-[var(--border)] py-8">
              <div className="flex flex-col items-center justify-center gap-5 text-sm leading-7 text-[var(--body)] md:flex-row md:gap-8">
                <span className="inline-flex items-center gap-3">
                  <span
                    className="relative flex h-2.5 w-2.5 shrink-0"
                    aria-hidden="true"
                  >
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ink" />
                  </span>

                  <span>
                    <span className="font-medium text-[var(--ink)]">
                      Available
                    </span>{" "}
                    for freelance projects &amp; contract roles
                  </span>
                </span>

                <span className="hidden h-5 w-px bg-[var(--border)] md:block" />

                <span>
                  <span className="font-medium text-[var(--ink)]">
                    Location
                  </span>{" "}
                  Remote / Worldwide
                </span>
              </div>

              <p className="mt-5 text-sm leading-7 text-[var(--body)]">
                <span className="font-medium text-[var(--ink)]">
                  Core Focus
                </span>{" "}
                Websites • Web Applications • APIs • E-commerce
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/about"
                className="btn btn-primary inline-flex items-center"
              >
                More About Julie
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Solutions ---------- */}
      <section
        className="border-t border-ink/10 bg-paper py-24 sm:py-28"
        aria-labelledby="solutions-heading"
      >
        <div className="site-container">
          <div className="grid gap-12 md:grid-cols-12 md:items-end md:gap-16">
            <Reveal className="md:col-span-7">
              <SectionHeading
                eyebrow="What I build"
                title="The right solution starts with the problem."
                description="You do not need to know which technology to choose. Start by explaining what is not working, what you want to build, or what you want to improve."
              />
            </Reveal>

            <Reveal delay={120} className="md:col-span-5">
              <div className="border-t border-ink/15 pt-5">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Problem → Solution
                </p>

                <p className="mt-3 text-sm leading-6 text-[var(--body)]">
                  I help turn unclear requirements into a practical technical
                  direction, then build the product around that direction.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution, index) => (
              <Reveal key={solution.number} delay={index * 70}>
                <Link
                  href={solution.href}
                  className="group flex h-full flex-col border-t border-ink/15 pt-6 transition-colors duration-300 hover:border-ink"
                >
                  <span className="font-mono text-xs font-semibold text-muted">
                    {solution.number}
                  </span>

                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-[var(--ink)]">
                    {solution.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-[var(--body)]">
                    {solution.text}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-all duration-300 group-hover:gap-3">
                    Explore
                    <ArrowRight size={15} aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Problem-solving showcase ---------- */}
      <section
        className="bg-paper-2 py-24 sm:py-28"
        aria-labelledby="work-showcase-heading"
      >
        <div className="site-container">
          <div className="mb-12">
            <SectionHeading
              eyebrow="Featured Concept"
              title="See the problem-solving approach in practice."
              description="A closer look at how structure, user experience, responsive implementation, and technical thinking come together in a real interface concept."
            />
          </div>

          <Reveal delay={120}>
            <div className="grid items-center gap-10 rounded-3xl border border-ink/10 bg-paper p-6 sm:p-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <div className="space-y-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink">
                        Healthcare Website
                      </p>

                      <span className="rounded-full border border-black/8 bg-black/[0.025] px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-ink/55">
                        Concept
                      </span>
                    </div>

                    <h2
                      id="work-showcase-heading"
                      className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
                    >
                      DentalCleans
                    </h2>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-ink/65">
                      A healthcare website concept designed to make dental
                      services easier to understand, establish trust quickly,
                      and give prospective patients a clearer route to booking.
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/45">
                      Problem
                    </p>

                    <p className="mt-2 text-sm leading-6 text-ink/65">
                      Patients need to understand services, feel confident in
                      the practice, and know what to do next. When that
                      information is fragmented or difficult to navigate,
                      important actions can become harder to find.
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/45">
                      Approach
                    </p>

                    <p className="mt-2 text-sm leading-6 text-ink/65">
                      The concept uses clearer content hierarchy, focused
                      service discovery, visible calls to action, and
                      responsive layouts so the same journey remains usable
                      across desktop and mobile.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-black/8 bg-black/[0.025] px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-ink/55">
                      Responsive
                    </span>

                    <span className="rounded-full border border-black/8 bg-black/[0.025] px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-ink/55">
                      Desktop + Mobile
                    </span>

                    <span className="rounded-full border border-black/8 bg-black/[0.025] px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-ink/55">
                      Healthcare
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/landing-pages/dentalcleans"
                      className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-ink"
                    >
                      View project
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </Link>

                    <a
                      href="https://dentalcleans.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-ink hover:text-ink"
                    >
                      View live concept
                      <ExternalLink size={16} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <DentalWebsitePreview />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- How I solve problems ---------- */}
      <section
        className="border-t border-ink/10 bg-paper py-24 sm:py-28"
        aria-labelledby="approach-heading"
      >
        <div className="site-container">
          <div className="grid gap-12 md:grid-cols-12 md:items-end md:gap-16">
            <Reveal className="md:col-span-7">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  How I approach the work
                </p>

                <h2
                  id="approach-heading"
                  className="mt-4 max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-5xl"
                >
                  Start with the problem. Build around the outcome.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={120} className="md:col-span-5">
              <p className="max-w-xl text-base leading-7 text-[var(--body)]">
                Good development starts before the first line of code. I focus
                on understanding what is not working, what users need, and
                which solution makes the most sense for the business.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Understand",
                text: "Identify the users, business goal, technical constraints, and friction that needs to be removed.",
              },
              {
                number: "02",
                title: "Design the solution",
                text: "Turn the problem into a clear structure, user experience, and technical approach before development begins.",
              },
              {
                number: "03",
                title: "Build & improve",
                text: "Develop the solution with modern technologies, test the experience, and refine it around real-world use.",
              },
            ].map((item) => (
              <Reveal key={item.number}>
                <article className="h-full border-t border-ink/15 pt-6">
                  <span className="font-mono text-xs font-semibold text-white">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-[var(--ink)]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--body)]">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Team ---------- */}
      <TeamSection />

      {/* ---------- Blog preview ---------- */}
      <section
        className="border-t border-ink/10 bg-paper py-24 sm:py-28"
        aria-label="Blog preview"
      >
        <div className="site-container">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="The Knowledge Hub"
              title="Ideas, code & digital craft"
              description="Notes from the workbench on users, interfaces, performance, development, and building useful digital products."
            />

            <Reveal delay={120}>
              <Link href="/blog" className="btn btn-ghost-dark">
                All Articles
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 90}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

