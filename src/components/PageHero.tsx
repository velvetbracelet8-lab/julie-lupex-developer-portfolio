import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  crumb: string;
};

export default function PageHero({ eyebrow, title, description, crumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink pt-40 pb-24 sm:pb-28">
      <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
      <div
        className="glow-violet absolute -top-40 right-[-10%] h-[34rem] w-[34rem] rounded-full"
        aria-hidden="true"
      />
      <div
        className="glow-deep absolute bottom-[-30%] left-[-10%] h-[26rem] w-[26rem] rounded-full"
        aria-hidden="true"
      />
      <div className="site-container relative">
        <Reveal variant="left">
          <nav aria-label="Breadcrumb" className="mb-7">
            <ol className="flex items-center gap-1.5 text-sm text-mist">
              <li>
                <Link href="/" className="transition-colors hover:text-violet">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight size={14} />
              </li>
              <li aria-current="page" className="text-violet-2">
                {crumb}
              </li>
            </ol>
          </nav>
          <p className="flex items-center gap-3 font-mono text-[0.78rem] font-medium uppercase tracking-[0.28em] text-violet">
            <span className="inline-block h-px w-8 bg-violet" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.4rem,6vw,4.2rem)] font-bold leading-[1.04] tracking-[-0.02em] text-paper text-balance">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
