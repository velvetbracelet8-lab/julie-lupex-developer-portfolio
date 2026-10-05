import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Target,
  Lightbulb,
  Compass,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { getProject, projects } from "@/lib/data";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.category} Case Study | Julie Lupex`,
    description: project.description,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      title: `${project.title} — Engineering Case Study by Julie Lupex`,
      description: project.description,
      images: [{ url: project.image, width: 1200, height: 627, alt: project.imageAlt }],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];
  const prev = projects[(idx - 1 + projects.length) % projects.length];

  return (
    <main id="main">
      {/* ---------- Header ---------- */}
      <section className="relative overflow-hidden bg-ink pt-40 pb-16 sm:pb-20">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div
          className="glow-violet absolute -right-40 top-10 h-[30rem] w-[30rem] rounded-full"
          aria-hidden="true"
        />
        <div className="site-container relative">
          <Reveal variant="left">
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
                  <Link href="/portfolio" className="transition-colors hover:text-violet">
                    Portfolio
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight size={14} />
                </li>
                <li aria-current="page" className="text-violet-2">
                  {project.title}
                </li>
              </ol>
            </nav>
            <p className="flex items-center gap-3 font-mono text-[0.78rem] font-medium uppercase tracking-[0.28em] text-violet">
              <span className="inline-block h-px w-8 bg-violet" aria-hidden="true" />
              Case Study {project.index}
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.3rem,5.5vw,4rem)] font-bold leading-[1.04] tracking-[-0.02em] text-paper text-balance">
              {project.title}
            </h1>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-violet px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.16em] text-ink">
                Featured Case Study
              </span>
              <span className="rounded-full border border-white/15 px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-paper/80">
                {project.category}
              </span>
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[0.75rem] font-medium tracking-wide text-mist"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Hero Image ---------- */}
      <section className="bg-ink pb-20">
        <div className="site-container">
          <Reveal variant="scale" className="img-zoom overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={1600}
              height={840}
              priority
              className="h-auto w-full object-cover"
            />
          </Reveal>
          <p className="mt-4 text-center text-xs tracking-wide text-mist/70">
            Production UI preview and architecture breakdown for {project.title} — engineered by {site.name}
          </p>
        </div>
      </section>

      {/* ---------- Overview ---------- */}
      <section className="bg-paper py-24 sm:py-28" aria-labelledby="overview-heading">
        <div className="site-container">
          <Reveal>
            <div className="max-w-3xl">
              <p className="flex items-center gap-3 font-mono text-[0.78rem] font-medium uppercase tracking-[0.28em] text-deep">
                <span className="inline-block h-px w-8 bg-deep" aria-hidden="true" />
                Problem & Solution Overview
              </p>
              <h2
                id="overview-heading"
                className="mt-4 font-display text-[clamp(1.7rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em] text-ink text-balance"
              >
                {project.intro}
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="card-lift h-full rounded-3xl border border-ink/10 bg-white p-8">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-violet">
                  <Target size={18} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">The Challenge</h3>
                <p className="mt-3 leading-relaxed text-body">{project.problem}</p>
              </div>
            </Reveal>
            <Reveal delay={110}>
              <div className="card-lift h-full rounded-3xl border border-ink/10 bg-white p-8">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-violet">
                  <Lightbulb size={18} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">The Technical Solution</h3>
                <p className="mt-3 leading-relaxed text-body">{project.solution}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Features / Scope ---------- */}
      <section className="border-t border-ink/10 bg-paper-2 py-24 sm:py-28" aria-labelledby="features-heading">
        <div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="System Scope"
              title="Key Features & Technical Capabilities"
              description="A breakdown of the core modules and functional capabilities engineered for this deployment."
            />
          </div>
          <ul className="grid gap-4">
            {project.features.map((feature, i) => (
              <Reveal key={feature} delay={i * 50}>
                <li className="card-lift flex items-start gap-3.5 rounded-2xl border border-ink/10 bg-white p-5">
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-deep" aria-hidden="true" />
                  <span className="text-[0.98rem] leading-relaxed text-ink">{feature}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Engineering Process ---------- */}
      <section className="relative overflow-hidden bg-ink py-24 sm:py-28" aria-labelledby="process-heading">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div
          className="glow-deep absolute -left-40 top-20 h-[26rem] w-[26rem] rounded-full"
          aria-hidden="true"
        />
        <div className="site-container relative">
          <SectionHeading
            eyebrow="Engineering Roadmap"
            title="How it was engineered"
            description="The systematic process I followed to take this product from initial discovery and schema design to high-availability deployment."
            dark
          />
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {project.process.map((step, i) => (
              <Reveal key={step.step} delay={(i % 3) * 80}>
                <li className="card-lift h-full rounded-3xl border border-white/10 bg-ink-2/80 p-7 backdrop-blur-sm hover:border-violet/40">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-violet">{step.step}</span>
                    <span className="h-px flex-1 bg-white/10" aria-hidden="true" />
                    <Compass size={15} className="text-violet/60" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-paper">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{step.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Outcomes ---------- */}
      <section className="bg-paper py-24 sm:py-28" aria-labelledby="outcomes-heading">
        <div className="site-container">
          <SectionHeading
            eyebrow="Outcomes & Benchmarks"
            title="Architectural & Usability Deliverables"
            description="Measurable impacts, performance benchmarks, and software standards achieved through this build."
            align="center"
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.outcomes.map((outcome, i) => (
              <Reveal key={outcome} delay={i * 70} variant="scale">
                <div className="card-lift flex h-full items-center justify-center rounded-3xl border border-ink/10 bg-white p-7 text-center hover:border-violet/50">
                  <p className="font-display text-[1.05rem] font-bold leading-snug text-ink">
                    {outcome}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ---------- Prev / Next ---------- */}
          <nav
            className="mt-20 grid gap-4 border-t border-ink/10 pt-12 sm:grid-cols-2"
            aria-label="More case studies"
          >
            <Reveal>
              <Link
                href={`/portfolio/${prev.slug}`}
                className="card-lift group flex h-full flex-col gap-2 rounded-3xl border border-ink/10 bg-white p-7 hover:border-violet/50"
              >
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-body/70">
                  <ArrowLeft size={14} aria-hidden="true" /> Previous Project
                </span>
                <span className="font-display text-xl font-bold text-ink transition-colors group-hover:text-deep">
                  {prev.title}
                </span>
              </Link>
            </Reveal>
            <Reveal delay={90}>
              <Link
                href={`/portfolio/${next.slug}`}
                className="card-lift group flex h-full flex-col items-end gap-2 rounded-3xl border border-ink/10 bg-white p-7 text-right hover:border-violet/50"
              >
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-body/70">
                  Next Project <ArrowRight size={14} aria-hidden="true" />
                </span>
                <span className="font-display text-xl font-bold text-ink transition-colors group-hover:text-deep">
                  {next.title}
                </span>
              </Link>
            </Reveal>
          </nav>
        </div>
      </section>

      {/* ---------- Bottom CTA ---------- */}
      <CtaBand
        title="Ready to engineer a solution for your application?"
        text="Let's examine your requirements, choose the right architecture, and build a high-performance web experience tailored to your users."
      />
    </main>
  );
}