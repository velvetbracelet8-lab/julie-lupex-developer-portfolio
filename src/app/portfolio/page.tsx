import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio — Concept Projects & Case Studies",
  description:
    "Explore Julie Lupex's portfolio of original concept projects: e-commerce experiences, web applications, dashboards, WordPress builds, APIs and deployment infrastructure.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio — Concept Projects & Case Studies",
    description:
      "Explore Julie Lupex's portfolio of original concept projects across e-commerce, web applications, WordPress and DevOps.",
  },
};

export default function PortfolioPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Portfolio"
        title="Concept Projects, Engineered for Real"
        description="Eight original builds across e-commerce, web applications, dashboards, WordPress, APIs and infrastructure — each one designed and engineered with the discipline of a commercial product."
        crumb="Portfolio"
      />

      <section className="bg-paper py-24 sm:py-28" aria-label="Project portfolio">
        <div className="site-container">
          <Reveal>
            <div className="mb-10 flex items-start gap-3.5 rounded-2xl border border-violet/30 bg-violet/[0.07] p-5">
              <Sparkles size={19} className="mt-0.5 shrink-0 text-deep" aria-hidden="true" />
              <p className="text-[0.95rem] leading-relaxed text-body">
                <strong className="font-semibold text-ink">A note on honesty:</strong>{" "}
                every project here is an original{" "}
                <strong className="font-semibold text-ink">concept project</strong> —
                conceived, designed and engineered by Julie to demonstrate how she
                thinks and builds. No invented clients, no borrowed case studies.
                Each one opens with the full process, from problem to deployment.
              </p>
            </div>
          </Reveal>
          <PortfolioGrid />
        </div>
      </section>

      <CtaBand
        title="Your project could be the first real name here."
        text="These concepts show the standard. If you have a product in mind, let's build the one that isn't a concept at all."
      />
    </main>
  );
}
