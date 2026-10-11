
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Clock, ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { BlogCard } from "@/components/cards";
import { posts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Web Development & Digital Product Insights | Julie Lupex",
  description:
    "Practical insights on web development, UX, performance, architecture, and digital products from Julie Lupex.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Julie Lupex",
    description:
      "Practical insights on web development, UX, performance, architecture, and digital products.",
  },
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <main id="main">
      {/* HERO */}
      <section
        className="relative overflow-hidden bg-ink pt-36 pb-20 sm:pt-40 sm:pb-24"
        aria-labelledby="blog-heading"
      >
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div
          className="absolute -right-40 -top-32 h-[34rem] w-[34rem] rounded-full bg-white/5 blur-3xl"
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
                    className="transition-colors hover:text-white"
                  >
                    Home
                  </Link>
                </li>

                <li aria-hidden="true">
                  <ChevronRight size={14} />
                </li>

                <li aria-current="page" className="text-white/80">
                  Blog
                </li>
              </ol>
            </nav>

            {/* EYEBROW */}
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-mist">
              Blog
            </p>

            {/* TITLE */}
            <h1
              id="blog-heading"
              className="mt-5 max-w-4xl text-[clamp(2.7rem,6vw,5.2rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-white text-balance"
            >
              Practical thinking for better digital products.
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 sm:text-xl sm:leading-9">
              Notes on web development, UX, performance, architecture, and
              building digital products that work.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ARTICLES */}
      <section
        className="bg-paper py-24 sm:py-28"
        aria-label="Blog articles"
      >
        <div className="site-container">
          {/* SECTION INTRO */}
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Featured
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
                Start with an idea.
              </h2>
            </div>
          </Reveal>

          {/* FEATURED ARTICLE */}
          <Reveal>
            <article className="group overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-[0_20px_60px_rgba(8,8,8,0.06)]">
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

                  <span className="absolute left-6 top-6 rounded-full border border-white/20 bg-ink/85 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                    Featured · {featured.category}
                  </span>
                </Link>

                <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                  <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-muted">
                    <time dateTime={featured.date}>
                      {formatDate(featured.date)}
                    </time>

                    <span
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full bg-ink/20"
                    />

                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={14} aria-hidden="true" />
                      {featured.readingTime}
                    </span>
                  </div>

                  <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-ink sm:text-4xl">
                    <Link
                      href={`/blog/${featured.slug}`}
                      className="transition-colors hover:text-muted"
                    >
                      {featured.title}
                    </Link>
                  </h2>

                  <p className="mt-5 max-w-xl text-base leading-7 text-body sm:text-lg sm:leading-8">
                    {featured.excerpt}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/blog/${featured.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/5"
                      aria-label={`Read featured article: ${featured.title}`}
                    >
                      Read the article
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>

                    <span className="text-sm text-muted">
                      By{" "}
                      <span className="font-semibold text-ink/75">
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
              <div className="flex flex-wrap items-end justify-between gap-6 border-b border-ink/10 pb-6">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    Latest
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                    More articles
                  </h2>
                </div>
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

      {/* CTA */}
      <section
        className="bg-ink py-24 sm:py-28"
        aria-labelledby="blog-cta-heading"
      >
        <div className="site-container">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-mist">
                Have something to build?
              </p>

              <h2
                id="blog-cta-heading"
                className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
              >
                Let&apos;s talk about it.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
                Tell me what you&apos;re building, what isn&apos;t working, or
                what you want to improve.
              </p>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-paper"
              >
                Start a project
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}