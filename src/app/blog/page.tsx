 
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Clock, ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { BlogCard } from "@/components/cards";
import { posts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Insights — Web Development, UX & Digital Strategy | Julie Lupex",
  description:
    "Practical insights on web development, user experience, performance, architecture, and digital strategy — written to help businesses build better digital products.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Insights — Web Development, UX & Digital Strategy | Julie Lupex",
    description:
      "Practical perspectives on building faster websites, better user experiences, and reliable digital products.",
  },
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <main id="main">
      {/* HERO */}
      <section
        className="relative overflow-hidden bg-[#172126] pt-36 pb-20 sm:pt-40 sm:pb-24"
        aria-labelledby="blog-heading"
      >
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-30" aria-hidden="true">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(121,184,178,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(121,184,178,0.08) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        {/* Soft teal glow */}
        <div
          className="absolute -right-40 -top-32 h-[34rem] w-[34rem] rounded-full bg-[#397c78]/25 blur-3xl"
          aria-hidden="true"
        />

        <div
          className="absolute -bottom-40 -left-40 h-[26rem] w-[26rem] rounded-full bg-[#79b8b2]/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="site-container relative">
          <Reveal variant="left" className="max-w-4xl">
            {/* BREADCRUMB */}
            <nav aria-label="Breadcrumb" className="mb-9">
              <ol className="flex items-center gap-1.5 text-sm text-white/45">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-[#79b8b2]"
                  >
                    Home
                  </Link>
                </li>

                <li aria-hidden="true">
                  <ChevronRight size={14} />
                </li>

                <li aria-current="page" className="text-[#79b8b2]">
                  Blog
                </li>
              </ol>
            </nav>

            {/* EYEBROW */}
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#79b8b2]">
              Insights &amp; Problem Solving
            </p>

            {/* TITLE */}
            <h1
              id="blog-heading"
              className="mt-5 max-w-4xl text-[clamp(2.7rem,6vw,5.2rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-white text-balance"
            >
              Better digital products start with better thinking.
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 sm:text-xl sm:leading-9">
              Practical ideas on web development, UX, performance,
              architecture and digital strategy — written to help you
              understand the problem before you invest in the solution.
            </p>

            {/* ACCENT LINE */}
            <div className="mt-9 flex items-center gap-3">
              <span className="h-px w-12 bg-[#79b8b2]" />
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-white/35">
                The Julie Lupex workbench
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED + ARTICLES */}
      <section
        className="bg-[#f5f3ee] py-24 sm:py-28"
        aria-label="Blog articles"
      >
        <div className="site-container">
          {/* SECTION INTRO */}
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#397c78]">
                From the workbench
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#172126] sm:text-4xl">
                Ideas that solve real problems.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-[#172126]/65 sm:text-lg">
                No recycled developer jargon. Just practical thinking from
                real projects — what goes wrong, why it matters, and how to
                approach it properly.
              </p>
            </div>
          </Reveal>

          {/* FEATURED ARTICLE */}
          <Reveal>
            <article className="group overflow-hidden rounded-[2rem] border border-[#172126]/10 bg-white shadow-[0_20px_60px_rgba(23,33,38,0.06)]">
              <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
                <Link
                  href={`/blog/${featured.slug}`}
                  className="img-zoom relative block min-h-[340px] overflow-hidden lg:min-h-[520px]"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                  <span className="absolute left-6 top-6 rounded-full border border-white/20 bg-[#172126]/85 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                    Featured · {featured.category}
                  </span>
                </Link>

                <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                  <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-[#172126]/55">
                    <time dateTime={featured.date}>
                      {formatDate(featured.date)}
                    </time>

                    <span
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full bg-[#397c78]/50"
                    />

                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={14} aria-hidden="true" />
                      {featured.readingTime}
                    </span>
                  </div>

                  <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#172126] sm:text-4xl">
                    <Link
                      href={`/blog/${featured.slug}`}
                      className="transition-colors hover:text-[#397c78]"
                    >
                      {featured.title}
                    </Link>
                  </h2>

                  <p className="mt-5 max-w-xl text-base leading-7 text-[#172126]/65 sm:text-lg sm:leading-8">
                    {featured.excerpt}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/blog/${featured.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-[#172126] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#397c78]"
                      aria-label={`Read featured article: ${featured.title}`}
                    >
                      Read the article
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>

                    <span className="text-sm text-[#172126]/50">
                      By{" "}
                      <span className="font-semibold text-[#172126]/75">
                        Julie Lupex
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* ARTICLE GRID */}
          <div className="mt-20">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[#172126]/10 pb-6">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#397c78]">
                    Latest thinking
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#172126] sm:text-3xl">
                    More from the workbench
                  </h2>
                </div>

                <p className="max-w-md text-sm leading-6 text-[#172126]/55">
                  Practical lessons on building websites and applications that
                  are easier to use, faster to load, and simpler to maintain.
                </p>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) * 80}>
                  <BlogCard post={post} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM-SOLVING CTA */}
      <section
        className="bg-[#172126] py-24 sm:py-28"
        aria-labelledby="blog-cta-heading"
      >
        <div className="site-container">
          <Reveal>
            <div className="max-w-4xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#79b8b2]">
                Have a problem to solve?
              </p>

              <h2
                id="blog-cta-heading"
                className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
              >
                Your next digital project deserves more than just good code.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
                Whether your website is underperforming, your application needs
                a better foundation, or you&apos;re starting from scratch,
                let&apos;s identify the real problem and build the right
                solution.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#79b8b2] px-6 py-3.5 text-sm font-semibold text-[#172126] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  Discuss a project
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30"
                >
                  Explore services
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

