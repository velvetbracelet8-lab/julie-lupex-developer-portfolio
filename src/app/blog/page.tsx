import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { BlogCard } from "@/components/cards";
import { posts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Ideas, Code & Digital Craft",
  description:
    "Thoughts on web development, design, technology and building better digital experiences — written by Julie Lupex, full-stack web developer.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Ideas, Code & Digital Craft",
    description:
      "Thoughts on web development, design, technology and building better digital experiences — by Julie Lupex.",
  },
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <main id="main">
      <PageHero
        eyebrow="The Knowledge Hub"
        title="Ideas, Code & Digital Craft"
        description="Thoughts on web development, design, technology and building better digital experiences."
        crumb="Blog"
      />

      <section className="bg-paper py-24 sm:py-28" aria-label="Blog articles">
        <div className="site-container">
          {/* ---------- Featured article ---------- */}
          <Reveal>
            <article className="card-lift group grid overflow-hidden rounded-[2rem] border border-ink/10 bg-white hover:border-violet/50 lg:grid-cols-2">
              <Link
                href={`/blog/${featured.slug}`}
                className="img-zoom relative block min-h-72 lg:min-h-full"
                tabIndex={-1}
                aria-hidden="true"
              >
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute left-5 top-5 rounded-full bg-violet px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-ink">
                  Featured · {featured.category}
                </span>
              </Link>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <p className="flex items-center gap-2.5 text-sm font-medium text-body/80">
                  <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-body/40" />
                  <Clock size={14} aria-hidden="true" />
                  {featured.readingTime}
                </p>
                <h2 className="mt-4 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-[1.15] tracking-[-0.01em] text-ink">
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="transition-colors group-hover:text-deep"
                  >
                    {featured.title}
                  </Link>
                </h2>
                <p className="mt-4 leading-relaxed text-body">{featured.excerpt}</p>
                <p className="mt-5 text-sm font-medium text-body/70">
                  By <span className="font-semibold text-ink">Julie Lupex</span>
                </p>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="btn btn-dark mt-8 self-start"
                  aria-label={`Read featured article: ${featured.title}`}
                >
                  Read Article
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          </Reveal>

          {/* ---------- Remaining articles ---------- */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 80}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Enjoying the writing? Wait until you see the work."
        text="These articles are how Julie thinks. The portfolio is how she builds. Both lead to the same place — a conversation about your idea."
      />
    </main>
  );
}
