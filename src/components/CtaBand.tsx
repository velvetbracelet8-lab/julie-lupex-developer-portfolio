import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

type CtaBandProps = {
  title?: string;
  text?: string;
};

export default function CtaBand({
  title = "Let’s turn your idea into something people can use.",
  text = "Tell Julie what you’re working on — a website, a store, an app, or just the outline of an idea — and let’s explore what can be built.",
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-ink" aria-labelledby="cta-heading">
      <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
      <div
        className="glow-violet absolute left-1/2 top-1/2 h-[30rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
        aria-hidden="true"
      />
      <div className="site-container relative py-24 sm:py-28">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="font-mono text-[0.78rem] font-medium uppercase tracking-[0.28em] text-violet">
            From interface to infrastructure
          </p>
          <h2
            id="cta-heading"
            className="mt-5 font-display text-[clamp(1.9rem,4.5vw,3.1rem)] font-bold leading-[1.1] tracking-[-0.02em] text-paper text-balance"
          >
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-mist">{text}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn btn-primary">
              Start a Conversation
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <a href={site.emailHref} className="btn btn-ghost-light">
              <Mail size={16} aria-hidden="true" />
              {site.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
