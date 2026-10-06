
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import HomeHero from "@/components/HomeHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import DentalWebsitePreview from "@/components/DentalWebsitePreview";
import TeamSection from "@/components/TeamSection";
import { BlogCard } from "@/components/cards";
import { posts } from "@/lib/blog";

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
            {/* Section label */}
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[var(--violet)]">
              Meet Julie
            </p>

            {/* Heading */}
            <h2
              id="about-preview-heading"
              className="mx-auto max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Hi, I&apos;m Julie Lupex.
            </h2>

            {/* Introduction */}
            <div className="mx-auto mt-10 max-w-3xl space-y-6 text-base leading-8 text-[var(--body)] sm:text-lg sm:leading-9">
              <p>
                I am a full-stack developer who helps businesses turn
                high-value ideas into fast, high-converting digital products.
                I bridge the gap between complex software engineering and
                high-end design to create digital experiences that are built
                to perform.
              </p>

              <p>
                From intuitive interfaces and responsive websites to APIs,
                databases, and scalable application architecture, I focus on
                solving the technical problems that get in the way of growth.
                The goal is simple: make your product easier to use, faster to
                operate, and more effective at turning visitors into customers.
              </p>

              <p>
                Good technology should remove friction, not create more of it.
                I build digital systems that give businesses a clearer path
                from idea to launch—and from launch to measurable results.
              </p>
            </div>

            {/* Status */}
            <div className="mx-auto mt-14 max-w-4xl border-y border-[var(--border)] py-8">
              <div className="flex flex-col items-center justify-center gap-5 text-sm leading-7 text-[var(--body)] md:flex-row md:gap-8">
                <span className="inline-flex items-center gap-3">
                  <span
                    className="relative flex h-2.5 w-2.5 shrink-0"
                    aria-hidden="true"
                  >
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
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
                Full-Stack Development • UI/UX Prototyping • Scalable
                Architecture
              </p>
            </div>

            {/* CTA */}
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

      {/* ---------- Landing Page Showcase ---------- */}
      <section
        className="bg-paper-2 py-24 sm:py-28"
        aria-label="Landing Page Showcase"
      >
        <div className="site-container">
          <div className="mb-12">
            <SectionHeading
              eyebrow="Landing Page Showcase"
              title="Designed to Convert. Built to Scale."
              description="If your website is slow, confusing, or failing to capture leads, you are losing opportunities. I build conversion-focused digital experiences engineered to answer customer questions quickly and drive meaningful action."
            />
          </div>

          <Reveal delay={120}>
            <div className="grid items-center gap-10 rounded-3xl border border-ink/10 bg-paper p-6 sm:p-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <div className="space-y-6">
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#3f8f89]">
                      Healthcare Website
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#10212b] sm:text-4xl">
                      DentalCleans
                    </h2>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-[#10212b]/65">
                      Solving patient acquisition friction. This healthcare
                      website concept replaces confusing information and
                      outdated booking flows with a clear, responsive experience
                      that helps patients understand services, build trust, and
                      take the next step from any device.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-black/8 bg-black/[0.025] px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-[#10212b]/55">
                      Responsive
                    </span>

                    <span className="rounded-full border border-black/8 bg-black/[0.025] px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-[#10212b]/55">
                      Desktop + Mobile
                    </span>

                    <span className="rounded-full border border-black/8 bg-black/[0.025] px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-[#10212b]/55">
                      Healthcare
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/landing-pages/dentalcleans"
                      className="inline-flex items-center gap-2 rounded-full bg-[#10212b] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#3f8f89]"
                    >
                      View landing page
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </Link>

                    <a
                      href="https://dentalcleans.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#10212b] transition hover:-translate-y-0.5 hover:border-[#3f8f89] hover:text-[#3f8f89]"
                    >
                      View reference website
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

          {/* Explore button */}
          <div className="mt-10 flex justify-center">
            <Reveal delay={280}>
              <Link href="/landing-pages" className="btn btn-ghost-dark">
                Explore Concepts
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Reveal>
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
              description="Notes from the workbench — on users, interfaces, performance and building things that matter."
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

