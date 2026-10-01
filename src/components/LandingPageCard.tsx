import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { LandingPageConcept } from "@/lib/landing-pages";

type LandingPageCardProps = {
  concept: LandingPageConcept;
};

export default function LandingPageCard({
  concept,
}: LandingPageCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-ink/10 bg-paper">
      <Link
        href={`/landing-pages/${concept.slug}`}
        className="block"
      >
        {/* Visual preview */}
        <div className="relative aspect-[16/10] overflow-hidden bg-ink p-4">
          <div className="h-full overflow-hidden rounded-2xl bg-paper shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
            {/* Browser chrome */}
            <div className="flex items-center gap-1.5 border-b border-ink/10 px-4 py-3">
              <span className="h-2 w-2 rounded-full bg-ink/15" />
              <span className="h-2 w-2 rounded-full bg-ink/15" />
              <span className="h-2 w-2 rounded-full bg-ink/15" />

              <div className="ml-3 h-5 flex-1 rounded-full bg-ink/[0.04]" />
            </div>

            {/* Dental landing page preview */}
            <div className="p-5 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="font-display text-xs font-bold">
                  SmileCare
                </span>

                <span className="h-2 w-12 rounded-full bg-ink/10" />
              </div>

              <div className="mt-8">
                <div className="h-2 w-16 rounded-full bg-violet" />

                <div className="mt-4 space-y-2">
                  <div className="h-5 w-full rounded bg-ink/90" />
                  <div className="h-5 w-[68%] rounded bg-ink/90" />
                </div>

                <div className="mt-4 h-2 w-[82%] rounded bg-ink/10" />
                <div className="mt-2 h-2 w-[58%] rounded bg-ink/10" />

                <div className="mt-6 h-8 w-28 rounded-full bg-ink" />
              </div>

              <div className="mt-8 grid grid-cols-3 gap-2">
                <div className="h-12 rounded-xl bg-paper-2" />
                <div className="h-12 rounded-xl bg-paper-2" />
                <div className="h-12 rounded-xl bg-paper-2" />
              </div>
            </div>
          </div>

          {/* Concept badge */}
          <span className="absolute right-7 top-7 rounded-full bg-paper px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-deep">
            Concept
          </span>
        </div>

        {/* Card information */}
        <div className="p-6 sm:p-7">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-deep">
            {concept.category}
          </p>

          <div className="mt-3 flex items-start justify-between gap-5">
            <h3 className="font-display text-2xl font-bold leading-tight tracking-[-0.03em] text-ink">
              {concept.title}
            </h3>

            <span className="shrink-0 rounded-full border border-ink/10 p-2 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-deep/30">
              <ArrowUpRight
                size={17}
                aria-hidden="true"
              />
            </span>
          </div>

          <p className="mt-4 text-sm leading-6 text-body">
            {concept.description}
          </p>

          <span className="mt-6 inline-flex items-center text-sm font-semibold text-deep">
            View landing page

            <ArrowUpRight
              size={15}
              className="ml-1.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    </article>
  );
}