import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import ShareButtons from "@/components/ShareButtons";
import CtaBand from "@/components/CtaBand";
import { BlogCard } from "@/components/cards";
import { getPost, posts, formatDate, relatedPosts, type BlogBlock } from "@/lib/blog";
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
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [site.name],
      images: [{ url: post.image, width: 1200, height: 627, alt: post.imageAlt }],
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
            <span className="ml-3 font-mono text-xs text-mist">{block.title}</span>
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
      {/* ---------- Article header ---------- */}
      <section className="relative overflow-hidden bg-ink pt-40 pb-16 sm:pb-20">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div
          className="glow-violet absolute -right-40 top-10 h-[30rem] w-[30rem] rounded-full"
          aria-hidden="true"
        />
        <div className="site-container relative">
          <Reveal variant="left" className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-7">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-mist">
                <li>
                  <Link href="/" className="transition-colors hover:text-violet">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight size={14} />
                </li>
                <li>
                  <Link href="/blog" className="transition-colors hover:text-violet">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight size={14} />
                </li>
                <li aria-current="page" className="max-w-52 truncate text-violet-2 sm:max-w-none">
                  {post.title}
                </li>
              </ol>
            </nav>
            <p className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-violet px-4 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-ink">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-mist">
                <Clock size={14} aria-hidden="true" />
                {post.readingTime}
              </span>
            </p>
            <h1 className="mt-6 font-display text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.02em] text-paper text-balance">
              {post.title}
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-violet/40 bg-ink-3 font-display text-sm font-bold text-violet">
                JL
              </span>
              <div>
                <p className="font-display text-sm font-bold text-paper">{site.name}</p>
                <p className="text-sm text-mist">
                  <time dateTime={post.date}>{formatDate(post.date)}</time> · {site.shortRole}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Featured image ---------- */}
      <section className="bg-ink pb-20" aria-hidden="true">
        <div className="site-container">
          <Reveal variant="scale" className="img-zoom overflow-hidden rounded-[2rem] border border-white/10">
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

      {/* ---------- Article body ---------- */}
      <article className="bg-paper py-20 sm:py-24">
        <div className="site-container">
          <Reveal className="article-body mx-auto max-w-[44rem]">
            {post.blocks.map((block, i) => (
              <Block key={`${block.t}-${i}`} block={block} />
            ))}
          </Reveal>

          <Reveal className="mx-auto mt-12 max-w-[44rem] border-t border-ink/10 pt-8">
            <ShareButtons slug={post.slug} title={post.title} />
          </Reveal>

          <Reveal className="mx-auto mt-10 max-w-[44rem]">
            <div className="flex items-start gap-5 rounded-3xl border border-ink/10 bg-white p-7">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ink font-display text-lg font-bold text-violet">
                JL
              </span>
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-deep">
                  Written by
                </p>
                <h2 className="mt-1 font-display text-lg font-bold text-ink">{site.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  Full-stack web developer building websites, applications,
                  APIs and digital products with purpose.{" "}
                  <Link href="/about" className="font-semibold text-deep underline-offset-4 hover:underline">
                    More about Julie
                  </Link>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </article>

      {/* ---------- Related ---------- */}
      <section className="border-t border-ink/10 bg-paper-2 py-20 sm:py-24" aria-labelledby="related-heading">
        <div className="site-container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <h2
                id="related-heading"
                className="font-display text-[clamp(1.6rem,3.4vw,2.3rem)] font-bold tracking-[-0.02em] text-ink"
              >
                Keep reading
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-display text-sm font-bold text-deep transition-colors hover:text-electric"
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

      <CtaBand />
    </main>
  );
}
