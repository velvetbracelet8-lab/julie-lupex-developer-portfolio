"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Phone, Terminal, GitBranch, Boxes } from "lucide-react";
import { site } from "@/lib/site";

const rotatingWords = [
  "responsive websites",
  "powerful web applications",
  "e-commerce experiences",
  "clean, reliable APIs",
  "WordPress solutions",
];

export default function HomeHero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;
    const id = window.setInterval(
      () => setWordIndex((i) => (i + 1) % rotatingWords.length),
      2600
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-ink pt-[8.5rem] pb-20 sm:pt-[10rem] lg:pb-28"
      aria-labelledby="hero-heading"
    >
      <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
      <div
        className="glow-violet absolute -right-32 top-24 h-[36rem] w-[36rem] rounded-full"
        aria-hidden="true"
      />
      <div
        className="glow-deep absolute -left-40 bottom-[-20%] h-[28rem] w-[28rem] rounded-full"
        aria-hidden="true"
      />

      <div className="site-container relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <p className="reveal is-visible inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-[0.82rem] font-medium text-paper/90 backdrop-blur-sm">
            <span
              className="pulse-dot h-2 w-2 rounded-full bg-mint"
              aria-hidden="true"
            />
            Available for freelance projects
          </p>

          <h1
            id="hero-heading"
            className="mt-7 font-display text-[clamp(2.6rem,6.4vw,4.6rem)] font-bold leading-[1.03] tracking-[-0.025em] text-paper text-balance"
          >
            I Build Digital Experiences That{" "}
            <span className="words-rotate">Work Beautifully</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
            I&apos;m Julie Lupex, a full-stack web developer creating fast,
            responsive websites, powerful web applications, and digital
            experiences that turn ideas into real products.
          </p>

          <p
            className="mt-5 inline-flex items-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 font-mono text-sm text-violet-2"
            aria-hidden="true"
          >
            {"// currently building: "}
            {rotatingWords[wordIndex]}
            <span className="caret" />
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/portfolio" className="btn btn-primary">
              View My Work
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link href="/contact" className="btn btn-ghost-light">
              Let&apos;s Build Something
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-mist">
            <li>
              <a
                href={site.emailHref}
                className="inline-flex items-center gap-2 transition-colors hover:text-violet"
              >
                <Mail size={15} aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 transition-colors hover:text-violet"
              >
                <Phone size={15} aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="card-lift relative overflow-hidden rounded-[2rem] border border-white/12 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]">
            <Image
              src="/images/hero-workstation.jpg"
              alt="Illustrated developer workstation: a laptop with a dark code editor, floating interface components and violet accent lighting."
              width={1200}
              height={1200}
              priority
              className="h-auto w-full object-cover"
            />
            <div
              className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10"
              aria-hidden="true"
            />
          </div>

          <div
            className="animate-floaty absolute -left-3 top-8 hidden items-center gap-2.5 rounded-2xl border border-white/12 bg-ink-2/90 px-4 py-3 font-mono text-xs text-violet-2 shadow-xl backdrop-blur-md sm:flex"
            style={{ animationDelay: "0.4s" }}
          >
            <Terminal size={15} aria-hidden="true" />
            GET /api/ideas → 200 OK
          </div>
          <div
            className="animate-floaty absolute -right-3 top-1/3 hidden items-center gap-2.5 rounded-2xl border border-white/12 bg-ink-2/90 px-4 py-3 font-mono text-mint shadow-xl backdrop-blur-md sm:flex"
            style={{ animationDelay: "1.4s" }}
          >
            <GitBranch size={15} aria-hidden="true" />
            git push origin main
          </div>
          <div
            className="animate-floaty absolute -bottom-4 left-10 hidden items-center gap-2.5 rounded-2xl border border-white/12 bg-ink-2/90 px-4 py-3 font-mono text-paper/85 shadow-xl backdrop-blur-md sm:flex"
            style={{ animationDelay: "2.2s" }}
          >
            <Boxes size={15} aria-hidden="true" />
            {"<Responsive />"} shipped
          </div>
        </div>
      </div>
    </section>
  );
}