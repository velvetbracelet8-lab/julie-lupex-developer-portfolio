
import type { Metadata } from "next";

import PageHero from "@/components/PageHero";
import LandingPageCard from "@/components/LandingPageCard";
import Reveal from "@/components/Reveal";
import { landingPageConcepts } from "@/lib/landing-pages";

export const metadata: Metadata = {
  title: "Web Solutions & Landing Pages",
  description:
    "Explore responsive websites and digital product concepts built by Julie Lupex to solve user problems, communicate value clearly and support business goals.",
  alternates: {
    canonical: "/landing-pages",
  },
  openGraph: {
    title: "Web Solutions & Landing Pages | Julie Lupex",
    description:
      "Explore responsive websites and digital product concepts built by Julie Lupex to solve user problems, communicate value clearly and support business goals.",
    url: "/landing-pages",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Solutions & Landing Pages | Julie Lupex",
    description:
      "Explore responsive websites and digital product concepts built by Julie Lupex to solve user problems, communicate value clearly and support business goals.",
  },
};

export default function LandingPagesPage() {
  return (
    <main id="main">
      <PageHero
        crumb="Landing Pages"
        eyebrow="Web Solutions"
        title="Engineered for clarity, speed and action."
        description="Explore responsive websites and digital experiences designed to solve real communication problems, reduce user friction and give businesses a clearer path from visitor to customer."
      />

      <section
        className="border-t border-ink/10 py-20 md:py-28"
        aria-labelledby="solutions-heading"
      >
        <div className="site-container">
          <Reveal>
            <div className="mb-10 max-w-3xl md:mb-12">
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-violet">
                  Selected concepts
                </p>

                <span className="rounded-full border border-ink/10 bg-ink/[0.03] px-3 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-body/65">
                  Portfolio proposals
                </span>
              </div>

              <h2
                id="solutions-heading"
                className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] text-ink md:text-4xl"
              >
                Digital experiences built around the problem.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-body">
                These projects demonstrate how I approach a digital problem
                from structure and user experience through responsive
                implementation and production-minded engineering.
              </p>

              <div className="mt-6 max-w-2xl rounded-2xl border border-ink/10 bg-ink/[0.025] p-5">
                <p className="text-sm leading-6 text-body">
                  <span className="font-semibold text-ink">
                    About these projects.
                  </span>{" "}
                  The work shown here includes concepts and proposals created
                  to demonstrate possible digital directions. They are not
                  presented as commissioned client projects unless explicitly
                  stated.
                </p>
              </div>
            </div>
          </Reveal>

          {landingPageConcepts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2">
              {landingPageConcepts.map((concept, index) => (
                <Reveal key={concept.slug} delay={index * 90}>
                  <LandingPageCard concept={concept} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-ink/10 bg-ink/[0.02] p-8 text-center">
              <p className="text-sm leading-6 text-body">
                More project concepts are currently being prepared.
              </p>
            </div>
          )}
        </div>
      </section>

      <section
        className="border-t border-ink/10 bg-ink/[0.025] py-20 md:py-24"
        aria-labelledby="approach-heading"
      >
        <div className="site-container">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-12 md:items-end md:gap-16">
              <div className="md:col-span-7">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-violet">
                  Development approach
                </p>

                <h2
                  id="approach-heading"
                  className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight tracking-[-0.04em] text-ink md:text-5xl"
                >
                  Start with the problem. Build around the outcome.
                </h2>
              </div>

              <p className="max-w-xl text-base leading-7 text-body md:col-span-5">
                Good implementation is more than making a page look polished.
                The goal is to create a responsive, maintainable experience
                that gives users a clear path to the action the product needs
                them to take.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Understand",
                text: "Identify the audience, business goal, user friction and constraints before choosing the solution.",
              },
              {
                number: "02",
                title: "Structure",
                text: "Turn the problem into a clear information architecture, interaction flow and responsive interface.",
              },
              {
                number: "03",
                title: "Engineer",
                text: "Implement the experience with modern web technologies and a focus on performance, maintainability and usability.",
              },
            ].map((item) => (
              <Reveal key={item.number}>
                <article className="h-full border-t border-ink/15 pt-6">
                  <span className="font-mono text-xs font-semibold text-violet">
                    {item.number}
                  </span>

                  <h3 className="mt-5 font-display text-xl font-bold tracking-[-0.02em] text-ink">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-body">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

