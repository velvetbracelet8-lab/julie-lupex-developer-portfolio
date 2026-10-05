import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Selected Works & Case Studies — Julie Lupex",
  description:
    "Explore production-grade web applications, custom platforms, high-conversion e-commerce builds, and resilient API architectures engineered by Julie Lupex.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Selected Works & Case Studies — Julie Lupex",
    description:
      "A curated collection of web applications, custom software platforms, and digital experiences engineered for performance and scale.",
  },
};

export default function PortfolioPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Selected Works"
        title="Engineered for Performance & Scale"
        description="A curated collection of full-stack web applications, custom platforms, e-commerce architectures, and API integrations—each built with clean code, rigorous performance standards, and user-centric UX."
        crumb="Portfolio"
      />

      {/* ---------- Portfolio Showcase ---------- */}
      <section className="bg-paper py-24 sm:py-28" aria-label="Project portfolio">
        <div className="site-container">
          <Reveal>
            <div className="mb-10 flex items-start gap-3.5 rounded-2xl border border-violet/30 bg-violet/[0.07] p-5">
              <Sparkles size={19} className="mt-0.5 shrink-0 text-deep" aria-hidden="true" />
              <p className="text-[0.95rem] leading-relaxed text-body">
                <strong className="font-semibold text-ink">Engineering Standard:</strong>{" "}
                Every project featured below reflects complete, end-to-end execution—from 
                initial problem discovery and UI design to modular full-stack architecture 
                and automated deployment. Click into any case study to explore the technical 
                challenges, architecture decisions, and performance outcomes.
              </p>
            </div>
          </Reveal>

          {/* Grid of Projects */}
          <PortfolioGrid />
        </div>
      </section>

      {/* ---------- Bottom CTA ---------- */}
      <CtaBand
        title="Have a complex project that needs to be built right?"
        text="Whether you're starting from a blank canvas or scaling an existing system, let's architect a solution that meets your exact performance, usability, and business goals."
      />
    </main>
  );
}