import type { Metadata } from "next";
import Link from "next/link";
import {
ArrowRight,
ArrowUpRight,
Check,
Code2,
Layers3,
MonitorSmartphone,
ShieldCheck,
Sparkles,
Target,
Users,
} from "lucide-react";
import { notFound } from "next/navigation";

import DentalWebsitePreview from "@/components/DentalWebsitePreview";
import {
getAllConceptSlugs,
getConceptBySlug,
} from "@/lib/landing-pages";

type PageProps = {
params: Promise<{
slug: string;
}>;
};

export function generateStaticParams() {
return getAllConceptSlugs().map((slug) => ({
slug,
}));
}

export async function generateMetadata({
params,
}: PageProps): Promise<Metadata> {
const { slug } = await params;
const concept = getConceptBySlug(slug);

if (!concept) {
return {
title: "Project Not Found",
description: "The requested project could not be found.",
};
}

return {
title: `${concept.title} — Case Study | Julie Lupex`,
description: concept.description,
alternates: {
canonical: `/landing-pages/${concept.slug}`,
},
openGraph: {
title: `${concept.title} — Case Study | Julie Lupex`,
description: concept.description,
url: `/landing-pages/${concept.slug}`,
type: "website",
images: [
{
url: concept.thumbnail,
alt: `${concept.title} project preview`,
},
],
},
twitter: {
card: "summary_large_image",
title: `${concept.title} — Case Study | Julie Lupex`,
description: concept.description,
images: [concept.thumbnail],
},
};
}

export default async function LandingPageConcept({
params,
}: PageProps) {
const { slug } = await params;
const concept = getConceptBySlug(slug);

if (!concept) {
notFound();
}

return ( <main id="main" className="bg-[#f7f8f7] text-[#10212b]">
{/* =========================================================
HERO
========================================================== */} <section className="relative overflow-hidden bg-[#e9f2f0]"> <div
       className="absolute -right-48 -top-48 h-[34rem] w-[34rem] rounded-full bg-[#9edbd4]/35 blur-3xl"
       aria-hidden="true"
     />

```
    <div
      className="absolute -bottom-56 -left-48 h-[30rem] w-[30rem] rounded-full bg-white/80 blur-3xl"
      aria-hidden="true"
    />

    <div className="site-container relative py-14 sm:py-18 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Hero copy */}
        <div className="relative z-10 lg:col-span-4">
          <div className="flex items-center gap-3">
            <span
              className="h-px w-8 bg-[#3f8f89]"
              aria-hidden="true"
            />

            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3f8f89]">
              {concept.eyebrow}
            </span>
          </div>

          <h1 className="mt-6 max-w-md font-display text-5xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[4.4rem]">
            {concept.heroTitle}
          </h1>

          <p className="mt-6 max-w-md text-base leading-7 text-[#52616a] sm:text-lg sm:leading-8">
            {concept.heroDescription}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {concept.techStack.slice(0, 4).map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-[#10212b]/10 bg-white/70 px-3.5 py-2 text-[11px] font-semibold text-[#52616a]"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3 text-xs font-semibold text-[#10212b]/55">
            <div className="flex -space-x-2" aria-hidden="true">
              <span className="h-7 w-7 rounded-full border-2 border-[#e9f2f0] bg-[#c6dfda]" />
              <span className="h-7 w-7 rounded-full border-2 border-[#8fcfc8] bg-[#8fcfc8]" />
              <span className="h-7 w-7 rounded-full border-2 border-[#10212b] bg-[#10212b]" />
            </div>

            <span>Designed around the real user journey</span>
          </div>
        </div>

        {/* Project visual */}
        <div className="relative lg:col-span-8">
          <DentalWebsitePreview concept={concept} showBoth />

          {/* Concept disclosure */}
          <div className="mt-4 rounded-2xl border border-[#10212b]/10 bg-white/70 px-5 py-4">
            <p className="text-xs leading-5 text-[#52616a]">
              <span className="font-semibold text-[#10212b]">
                Concept & proposal
              </span>{" "}
              — This landing page is a concept created to demonstrate a
              possible digital direction. It is not presented as a
              commissioned client project or final production website.
            </p>
          </div>
        </div>
      </div>

      {/* Hero metadata */}
      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#10212b]/10 pt-5 sm:mt-16">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-[#52616a]/60">
            {concept.title}
          </span>

          <span className="text-[10px] font-medium text-[#52616a]/60">
            {concept.category}
          </span>
        </div>

        <a
          href={concept.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-[#3f8f89] transition hover:text-[#10212b]"
        >
          View live website
          <ExternalLinkIcon />
        </a>
      </div>
    </div>
  </section>

  {/* =========================================================
      PROJECT SNAPSHOT
  ========================================================== */}
  <section className="border-b border-[#10212b]/10 bg-white">
    <div className="site-container py-9 sm:py-11">
      <div className="grid gap-8 sm:grid-cols-3 sm:gap-0">
        {[
          {
            icon: Target,
            title: "Audience",
            text: concept.audience,
          },
          {
            icon: Layers3,
            title: "Project focus",
            text: concept.category,
          },
          {
            icon: Code2,
            title: "Technology",
            text: concept.techStack.join(" · "),
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-start gap-4 sm:border-l sm:border-[#10212b]/10 sm:px-7 first:sm:border-l-0 first:sm:pl-0 last:sm:pr-0"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e9f2f0] text-[#3f8f89]">
                <Icon size={18} aria-hidden="true" />
              </div>

              <div>
                <h2 className="font-display text-sm font-bold text-[#10212b]">
                  {item.title}
                </h2>

                <p className="mt-1 max-w-xs text-xs leading-5 text-[#52616a]">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  {/* =========================================================
      PROBLEM
  ========================================================== */}
  <section className="bg-[#f7f8f7] py-20 sm:py-24 lg:py-28">
    <div className="site-container">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#3f8f89]">
            The challenge
          </p>

          <h2 className="mt-5 max-w-xl font-display text-4xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-5xl md:text-[3.8rem]">
            Start with the problem.
          </h2>

          <p className="mt-6 max-w-lg text-base leading-7 text-[#52616a]">
            Strong digital products begin by identifying the friction
            between what users need and what the existing experience
            makes possible.
          </p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="border-y border-[#10212b]/10 py-7 sm:py-8">
            <p className="font-display text-2xl font-semibold leading-9 tracking-[-0.025em] text-[#10212b] sm:text-3xl sm:leading-10">
              {concept.problem}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {concept.trustPoints.slice(0, 4).map((point, index) => (
              <div
                key={point}
                className="flex gap-3 rounded-2xl border border-[#10212b]/10 bg-white p-5"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e9f2f0] font-mono text-[10px] font-bold text-[#3f8f89]">
                  0{index + 1}
                </span>

                <p className="text-sm leading-6 text-[#52616a]">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* =========================================================
      SOLUTION
  ========================================================== */}
  <section className="bg-[#e9f2f0] py-20 sm:py-24 lg:py-28">
    <div className="site-container">
      <div className="max-w-3xl">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#3f8f89]">
          The solution
        </p>

        <h2 className="mt-5 font-display text-4xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-5xl md:text-[3.8rem]">
          Design and engineering working together.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#52616a]">
          {concept.solution}
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-14">
        {concept.benefits.map((benefit, index) => (
          <article
            key={benefit}
            className="border-t border-[#10212b]/15 pt-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#10212b] text-white">
                <Sparkles size={18} aria-hidden="true" />
              </div>

              <span className="font-mono text-xs font-semibold text-[#3f8f89]">
                0{index + 1}
              </span>
            </div>

            <h3 className="mt-6 font-display text-2xl font-bold tracking-[-0.03em] text-[#10212b]">
              {benefit}
            </h3>
          </article>
        ))}
      </div>
    </div>
  </section>

  {/* =========================================================
      SERVICES / SCOPE
  ========================================================== */}
  <section
    id="services"
    className="bg-white py-20 sm:py-24 lg:py-28"
  >
    <div className="site-container">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#3f8f89]">
            Project scope
          </p>

          <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-5xl md:text-[3.8rem]">
            What the experience needs to communicate.
          </h2>
        </div>

        <p className="max-w-md text-base leading-7 text-[#52616a] lg:col-span-4 lg:col-start-9">
          The structure is shaped around the services, information and
          decisions that matter most to the intended audience.
        </p>
      </div>

      <div className="mt-12 divide-y divide-[#10212b]/10 border-y border-[#10212b]/10 lg:mt-14">
        {concept.services.map((service, index) => (
          <div
            key={service}
            className="group flex items-center justify-between gap-6 py-6 sm:py-7"
          >
            <div className="flex items-start gap-5 sm:gap-8">
              <span className="pt-1 font-mono text-xs font-semibold text-[#3f8f89]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-[#10212b] sm:text-2xl">
                {service}
              </h3>
            </div>

            <ArrowUpRight
              size={20}
              className="shrink-0 text-[#52616a] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#3f8f89]"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* =========================================================
      PROCESS
  ========================================================== */}
  <section
    id="process"
    className="bg-[#10212b] py-20 text-white sm:py-24 lg:py-28"
  >
    <div className="site-container">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#8fd3cb]">
            User journey
          </p>

          <h2 className="mt-5 font-display text-4xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-5xl md:text-[3.8rem]">
            A clear path from intent to action.
          </h2>

          <p className="mt-6 max-w-lg text-base leading-7 text-white/55">
            Every step removes unnecessary friction and gives the user
            enough context to make the next decision confidently.
          </p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="divide-y divide-white/10">
            {concept.steps.map((step, index) => (
              <article
                key={step}
                className="flex gap-5 py-6 first:pt-0 last:pb-0 sm:gap-7 sm:py-7"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#8fd3cb] text-[#10212b]">
                  <span className="font-mono text-xs font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold">
                    {step}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    A focused stage in the experience, keeping the user
                    oriented and moving toward the intended outcome.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* =========================================================
      TECHNOLOGY
  ========================================================== */}
  <section className="bg-[#f7f8f7] py-20 sm:py-24 lg:py-28">
    <div className="site-container">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#3f8f89]">
            Engineering
          </p>

          <h2 className="mt-5 font-display text-4xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-5xl">
            A practical production stack.
          </h2>

          <p className="mt-6 text-base leading-7 text-[#52616a]">
            Technology choices are selected around the requirements of
            the experience, maintainability and the problem the product
            needs to solve.
          </p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="grid gap-3 sm:grid-cols-2">
            {concept.techStack.map((technology) => (
              <div
                key={technology}
                className="flex items-center gap-3 rounded-2xl border border-[#10212b]/10 bg-white p-5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e9f2f0] text-[#3f8f89]">
                  <Code2 size={16} aria-hidden="true" />
                </div>

                <span className="font-display text-sm font-bold text-[#10212b]">
                  {technology}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* =========================================================
      PROOF / TRUST
  ========================================================== */}
  <section className="bg-white py-20 sm:py-24 lg:py-28">
    <div className="site-container">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#3f8f89]">
            What this build demonstrates
          </p>

          <h2 className="mt-5 font-display text-4xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-5xl">
            The details that make a digital product feel considered.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {concept.trustPoints.map((point) => (
            <div
              key={point}
              className="flex items-start gap-4 rounded-2xl border border-[#10212b]/10 bg-[#f7f8f7] p-5 sm:p-6"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e9f2f0] text-[#3f8f89]">
                <Check size={16} aria-hidden="true" />
              </div>

              <p className="text-sm leading-6 text-[#52616a]">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* =========================================================
      FINAL CTA
  ========================================================== */}
  <section id="contact" className="bg-[#f7f8f7] py-20 sm:py-28">
    <div className="site-container">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#10212b] px-6 py-10 text-white sm:rounded-[2.25rem] sm:px-12 sm:py-14 lg:px-16 lg:py-18">
        <div
          className="absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-[#3f8f89]/25 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#8fd3cb]">
            Build something better
          </p>

          <h2 className="mt-5 font-display text-4xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-5xl md:text-[3.8rem]">
            Have a business problem that needs a better digital solution?
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            Bring the problem, the constraints and the outcome you need.
            We can scope the right website, application or digital system
            around it.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact?service=website"
              className="inline-flex items-center gap-2 rounded-full bg-[#8fd3cb] px-6 py-3.5 text-sm font-semibold text-[#10212b] transition-all hover:-translate-y-0.5 hover:bg-[#a9e2dc]"
            >
              Discuss a similar project
              <ArrowRight size={16} aria-hidden="true" />
            </Link>

            <a
              href={concept.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              View live project
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-9 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
            <div className="flex items-start gap-2 text-sm text-white/65">
              <ShieldCheck
                size={16}
                className="mt-0.5 shrink-0 text-[#8fd3cb]"
                aria-hidden="true"
              />
              <span>Clear ownership and direct communication</span>
            </div>

            <div className="flex items-start gap-2 text-sm text-white/65">
              <MonitorSmartphone
                size={16}
                className="mt-0.5 shrink-0 text-[#8fd3cb]"
                aria-hidden="true"
              />
              <span>Responsive experiences across devices</span>
            </div>

            <div className="flex items-start gap-2 text-sm text-white/65">
              <Users
                size={16}
                className="mt-0.5 shrink-0 text-[#8fd3cb]"
                aria-hidden="true"
              />
              <span>Designed around the people using the product</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* =========================================================
      CLOSING
  ========================================================== */}
  <section className="bg-[#f7f8f7] pb-20 sm:pb-28">
    <div className="site-container">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#e9f2f0] text-[#3f8f89]">
          <Sparkles size={20} aria-hidden="true" />
        </div>

        <p className="mt-6 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3f8f89]">
          {concept.title}
        </p>

        <h2 className="mt-4 font-display text-4xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-5xl md:text-6xl">
          Good digital products
          <br />
          make the next step clearer.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#52616a] sm:text-lg sm:leading-8">
          {concept.description}
        </p>

        <div className="mx-auto mt-8 h-px w-16 bg-[#3f8f89]/40" />
      </div>
    </div>
  </section>
</main>


);
}

function ExternalLinkIcon() {
return <ArrowUpRight size={13} aria-hidden="true" />;
}
