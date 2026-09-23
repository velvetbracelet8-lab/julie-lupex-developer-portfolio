"use client";

import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const buildingItems = [
  "responsive websites",
  "powerful web applications",
  "e-commerce experiences",
  "clean, reliable APIs",
  "WordPress solutions",
];

export default function HomeHero() {
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentItem((current) => (current + 1) % buildingItems.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-end overflow-hidden bg-black text-white"
    >
      {/* Hero image */}
      <div className="absolute inset-0">
        <picture className="absolute inset-0 block">
          <source
            media="(max-width: 767px)"
            srcSet="/images/julie-hero-mobile.png"
          />

          <img
            src="/images/julie-hero.png"
            alt="Julie working at her desk"
            className="h-full w-full object-cover object-center"
          />
        </picture>

        {/* Editorial dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Hero content */}
      <div className="container relative z-10 w-full pb-8 pt-28 sm:pb-10 sm:pt-32 md:pb-14 md:pt-40 lg:pb-12">
        {/* Availability */}
        <div className="mb-8 flex items-center gap-3 sm:mb-10 md:mb-12">
          <span
            className="h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]"
            aria-hidden="true"
          />
        </div>

        {/* Main content */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          {/* Main heading */}
          <div className="min-w-0 lg:col-span-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-white/90 sm:mb-5 sm:text-sm md:mb-6">
              Hello, I&apos;m Julie.
            </p>

            <h1 className="max-w-6xl text-[clamp(3rem,9vw,9.5rem)] font-medium leading-[0.86] tracking-[-0.055em]">
              I design{" "}
              <span className="display-font">&amp;</span> build
              <br />
              <span className="display-font">digital</span>{" "}
              experiences.
            </h1>
          </div>

          {/* Supporting statement */}
          <div className="min-w-0 lg:col-span-2 lg:pb-2">
            <p className="max-w-xs text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
              Designing intuitive experiences &amp; building high-performance
              websites.
            </p>
          </div>
        </div>

        {/* Currently building */}
        <div className="mt-10 max-w-full sm:mt-12 md:mt-14">
          <div className="inline-flex max-w-full flex-wrap items-baseline gap-x-2 gap-y-1 rounded-md border border-white/10 bg-black/35 px-3 py-2 backdrop-blur-sm sm:px-4 sm:py-2.5">
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-white/45 sm:text-xs">
              {"// currently building:"}
            </span>

            <span
              key={buildingItems[currentItem]}
              className="font-mono text-[10px] font-semibold text-white sm:text-xs md:text-sm"
            >
              {buildingItems[currentItem]}
            </span>
          </div>
        </div>

        {/* Discipline */}
        <div className="mt-8 flex items-center gap-3 sm:mt-10 md:mt-12">
          <span
            className="h-px w-8 shrink-0 bg-white/40 sm:w-12"
            aria-hidden="true"
          />

          <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/75 sm:text-[10px] sm:tracking-[0.14em] md:text-xs">
            Design → UX → UI → Code → Product
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <ArrowDown
          size={18}
          strokeWidth={1.5}
          className="animate-bounce text-white/80"
        />
      </div>
    </section>
  );
}