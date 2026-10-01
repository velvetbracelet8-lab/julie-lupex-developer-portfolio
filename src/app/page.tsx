import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import HomeHero from "@/components/HomeHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import LandingPageCard from "@/components/LandingPageCard";
import { landingPageConcepts } from "@/lib/landing-pages";
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
      >
        <div className="container">
          <div className="mx-auto max-w-5xl text-center">
            {/* Section label */}
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[var(--violet)]">
              Meet Julie 
            </p>

            {/* Heading */}
            <h2 className="mx-auto max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m Julie Lupex.
            </h2>

            {/* Introduction */}
            <div className="mx-auto mt-10 max-w-3xl space-y-6 text-base leading-8 text-[var(--body)] sm:text-lg sm:leading-9">
              <p>
                I am a full-stack web developer who builds products across their
                entire lifecycle—from the initial interface concept to scalable,
                production-ready systems.
              </p>

              <p>
                I thrive in the space where design meets logic. Whether I&apos;m
                designing intuitive UI components, structuring efficient database
                schemas, or diagnosing deep API interactions, my goal remains the
                same: to build software that works so effortlessly it feels
                invisible.
              </p>

              <p>
                I believe the highest compliment a digital product can receive is
                that it solved a user&apos;s problem without friction.
              </p>
            </div>

            {/* Status */}
            <div className="mx-auto mt-12 max-w-4xl border-y border-[var(--border)] py-6">
              <div className="flex flex-col items-center justify-center gap-4 text-sm text-[var(--body)] md:flex-row md:gap-8">
                <span>
                  <span className="mr-2">🟢</span>
                  <span className="font-medium text-[var(--ink)]">
                    Available
                  </span>{" "}
                  for freelance projects &amp; contract roles
                </span>

                <span className="hidden h-4 w-px bg-[var(--border)] md:block" />

                <span>
                  <span className="font-medium text-[var(--ink)]">
                    Location
                  </span>{" "}
                  Remote / Worldwide
                </span>
              </div>

              <p className="mt-4 text-sm text-[var(--body)]">
                <span className="font-medium text-[var(--ink)]">
                  Core Focus
                </span>{" "}
                Full-Stack Development • UI/UX Prototyping • Scalable Architecture
              </p>
            </div>

            {/* CTA */}
            <div className="mt-9">
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
        aria-labelledby="landing-pages-heading"
      >
        <div className="site-container">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="Landing Page Showcase"
              title="See what your idea could become."
              description="Conversion-focused landing pages designed around the questions your customers need answered before they take action."
            />

            <Reveal delay={120}>
              <Link href="/landing-pages" className="btn btn-ghost-dark">
                Explore Concepts
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {landingPageConcepts
              .filter((concept) => concept.featured)
              .map((concept, i) => (
                <Reveal key={concept.slug} delay={i * 90}>
                  <LandingPageCard concept={concept} />
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      {/* ---------- Blog preview ---------- */}
      <section className="border-t border-ink/10 bg-paper py-24 sm:py-28" aria-labelledby="blog-heading">
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
          <Reveal className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 font-display text-sm font-bold text-deep transition-colors hover:text-electric"
            >
              Prefer seeing to reading? Explore the portfolio
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}