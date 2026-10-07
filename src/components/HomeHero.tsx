
"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const buildingItems = [
  "high-converting web applications",
  "frictionless e-commerce systems",
  "scalable API architectures",
  "blazing-fast custom platforms",
  "automated client portals",
];

export default function HomeHero() {
  const [currentItem, setCurrentItem] = useState(0);
  const [isTickerVisible, setIsTickerVisible] = useState(true);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIsTickerVisible(false);

      window.setTimeout(() => {
        setCurrentItem((current) => (current + 1) % buildingItems.length);
        setIsTickerVisible(true);
      }, 180);
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
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
        </picture>

        {/* Editorial dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Hero content */}
      <div className="site-container relative z-10 w-full pb-8 pt-28 sm:pb-10 sm:pt-32 md:pb-14 md:pt-40 lg:pb-12">
        {/* Availability */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-black/40 px-3.5 py-1.5 backdrop-blur-sm">
            <span
              className="pulse-dot h-2 w-2 shrink-0 rounded-full bg-white"
              aria-hidden="true"
            />

            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-white/80 sm:text-xs">
              Available for projects
            </span>
          </div>
        </div>

        {/* Main content */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          {/* Main heading */}
          <div className="min-w-0 lg:col-span-8">
            <h1 className="max-w-5xl text-[clamp(2.15rem,8.5vw,7rem)] font-semibold leading-[0.92] tracking-[-0.045em] sm:text-[clamp(2.75rem,6.5vw,7rem)]">
              Business problems,
              <br />
              <span className="font-medium italic">solved</span> with design
              <br />
              <span className="font-medium">&amp; clean code.</span>
            </h1>
          </div>

          {/* Supporting statement */}
          <div className="min-w-0 lg:col-span-4 lg:pb-2">
            <p className="max-w-md text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
              Helping founders and businesses remove technical friction,
              build scalable digital products, and create better experiences
              for their customers.
            </p>
          </div>
        </div>

        {/* Solutions I build */}
        <div className="mt-10 max-w-full sm:mt-12 md:mt-14">
          <div className="inline-flex max-w-full flex-wrap items-baseline gap-x-2 gap-y-1 rounded-md border border-white/10 bg-black/35 px-3 py-2 backdrop-blur-sm sm:px-4 sm:py-2.5">
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-white/45 sm:text-xs">
              {"// solutions I build:"}
            </span>

            <span
              className={`font-mono text-[10px] font-semibold text-white transition-all duration-200 sm:text-xs md:text-sm ${
                isTickerVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-1 opacity-0"
              }`}
            >
              {buildingItems[currentItem]}
            </span>
          </div>
        </div>

        {/* Primary actions */}
        <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white/90"
          >
            Discuss a problem
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/5"
          >
            Explore solutions
          </Link>
        </div>

        {/* Discipline */}
        <div className="mt-8 flex items-center gap-3 sm:mt-10 md:mt-12">
          <span
            className="h-px w-8 shrink-0 bg-white/40 sm:w-12"
            aria-hidden="true"
          />

          <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/75 sm:text-[10px] sm:tracking-[0.14em] md:text-xs">
            Discovery → Architecture → Build → Launch
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 rounded-full p-2 transition hover:bg-white/10 md:block"
      >
        <ArrowDown
          size={18}
          strokeWidth={1.5}
          className="animate-bounce text-white/80"
          aria-hidden="true"
        />
      </a>
    </section>
  );
}

