
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft, Clock, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import ShareButtons from "@/components/ShareButtons";
import { BlogCard } from "@/components/cards";
import {
  getPost,
  posts,
  formatDate,
  relatedPosts,
  type BlogBlock,
} from "@/lib/blog";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return {};

  return {
    title: `${post.title} — Julie Lupex`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [site.name],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 627,
          alt: post.imageAlt,
        },
      ],
    },
  };
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.t) {
    case "h2":
      return <h2>{block.text}</h2>;

    case "p":
      return <p>{block.text}</p>;

    case "list":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item.slice(0, 48)}>{item}</li>
          ))}
        </ul>
      );

    case "quote":
      return <blockquote>{block.text}</blockquote>;

    case "code":
      return (
        <figure className="code-block">
          <figcaption className="code-head">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span className="ml-3 font-mono text-xs text-white/50">
              {block.title}
            </span>
          </figcaption>

          <pre>
            <code>{block.code}</code>
          </pre>
        </figure>
      );
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const related = relatedPosts(post, 3);

  return (
    <main id="main">
      {/* ---------- ARTICLE HEADER ---------- */}
      <section className="relative overflow-hidden bg-[#f5f3ee] pt-36 pb-16 sm:pt-40 sm:pb-20">
        {/* Subtle editorial grid */}
        <div className="absolute inset-0 opacity-40" aria-hidden="true">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(23,33,38,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(23,33,38,0.035) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        {/* Soft teal glow */}
        <div
          className="absolute -right-40 -top-32 h-[32rem] w-[32rem] rounded-full bg-[#79b8b2]/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="site-container relative">
          <Reveal variant="left" className="max-w-4xl">
            {/* BREADCRUMB */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#172126]/45">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-[#397c78]"
                  >
                    Home
                  </Link>
                </li>

                <li aria-hidden="true">
                  <ChevronRight size={14} />
                </li>

                <li>
                  <Link
                    href="/blog"
                    className="transition-colors hover:text-[#397c78]"
                  >
                    Blog
                  </Link>
                </li>

                <li aria-hidden="true">
                  <ChevronRight size={14} />
                </li>

                <li
                  aria-current="page"
                  className="max-w-52 truncate text-[#397c78] sm:max-w-none"
                >
                  {post.title}
                </li>
              </ol>
            </nav>

            {/* CATEGORY + META */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#397c78]/20 bg-[#397c78]/10 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#397c78]">
                {post.category}
              </span>

              <span className="inline-flex items-center gap-2 text-sm text-[#172126]/55">
                <Clock size={14} aria-hidden="true" />
                {post.readingTime}
              </span>

              <span
                aria-hidden="true"
                className="h-1 w-1 rounded-full bg-[#397c78]/40"
              />

              <time
                dateTime={post.date}
                className="text-sm text-[#172126]/55"
              >
                {formatDate(post.date)}
              </time>
            </div>

            {/* TITLE */}
            <h1 className="mt-7 max-w-4xl text-[clamp(2.3rem,6vw,4.8rem)] font-semibold leading-[1.03] tracking-[-0.045em] text-[#172126] text-balance">
              {post.title}
            </h1>

            {/* EXCERPT */}
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#172126]/60 sm:text-xl sm:leading-9">
              {post.excerpt}
            </p>

            {/* AUTHOR */}
            <div className="mt-9 flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-[#397c78]/25 bg-white font-display text-sm font-bold text-[#397c78] shadow-sm">
                JL
              </span>

              <div>
                <p className="text-sm font-semibold text-[#172126]">
                  {site.name}
                </p>

                <p className="mt-0.5 text-sm text-[#172126]/45">
                  {site.shortRole}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- FEATURED IMAGE ---------- */}
      <section
        className="bg-[#172126] pb-20 sm:pb-24"
        aria-label={`${post.title} featured image`}
      >
        <div className="site-container">
          <Reveal
            variant="scale"
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#202d31] shadow-[0_30px_80px_rgba(0,0,0,0.22)]"
          >
            <Image
              src={post.image}
              alt={post.imageAlt}
              width={1600}
              height={840}
              priority
              className="h-auto w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* ---------- ARTICLE BODY ---------- */}
      <article className="bg-[#f5f3ee] py-20 sm:py-28">
        <div className="site-container">
          <Reveal className="article-body mx-auto max-w-[46rem]">
            {post.blocks.map((block, i) => (
              <Block key={`${block.t}-${i}`} block={block} />
            ))}
          </Reveal>

          {/* SHARE */}
          <Reveal className="mx-auto mt-14 max-w-[46rem] border-t border-[#172126]/10 pt-8">
            <ShareButtons slug={post.slug} title={post.title} />
          </Reveal>

          {/* AUTHOR BIO */}
          <Reveal className="mx-auto mt-10 max-w-[46rem]">
            <div className="rounded-[1.75rem] border border-[#172126]/10 bg-white p-7 shadow-[0_12px_40px_rgba(23,33,38,0.05)] sm:p-8">
              <div className="flex items-start gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#172126] font-display text-lg font-bold text-[#79b8b2]">
                  JL
                </span>

                <div>
                  <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#397c78]">
                    Written by
                  </p>

                  <h2 className="mt-1 text-lg font-semibold tracking-tight text-[#172126]">
                    {site.name}
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-[#172126]/65">
                    I&apos;m a full-stack web developer building
                    high-performance web applications, resilient backend
                    systems, and clean user interfaces with purpose.{" "}
                    <Link
                      href="/about"
                      className="font-semibold text-[#397c78] underline-offset-4 transition-colors hover:text-[#172126] hover:underline"
                    >
                      Read more about my background and approach →
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </article>

      {/* ---------- RELATED ARTICLES ---------- */}
      <section
        className="border-t border-[#172126]/10 bg-[#eeece6] py-20 sm:py-24"
        aria-labelledby="related-heading"
      >
        <div className="site-container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#397c78]">
                  Keep reading
                </p>

                <h2
                  id="related-heading"
                  className="mt-3 text-[clamp(1.8rem,3.5vw,2.7rem)] font-semibold tracking-[-0.035em] text-[#172126]"
                >
                  More ideas from the workbench.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#397c78] transition-colors hover:text-[#172126]"
              >
                <ArrowLeft size={15} aria-hidden="true" />
                All articles
              </Link>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <BlogCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PROBLEM-SOLVING CTA ---------- */}
      <section
        className="bg-[#172126] py-24 sm:py-28"
        aria-labelledby="article-cta-heading"
      >
        <div className="site-container">
          <Reveal>
            <div className="max-w-4xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#79b8b2]">
                Have a problem to solve?
              </p>

              <h2
                id="article-cta-heading"
                className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
              >
                Let&apos;s turn the problem into a better digital product.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
                Whether you&apos;re improving an existing website, building a
                new application, or figuring out where to start, the first
                step is understanding the real problem.
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
                  <ChevronRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

