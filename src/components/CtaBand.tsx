
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type CtaBandProps = {
  title: string;
  text: string;
};

export default function CtaBand({ title, text }: CtaBandProps) {
  return (
    <section
      className="relative overflow-hidden bg-ink py-20 text-paper sm:py-24 lg:py-28"
      aria-label="Call to action"
    >
      <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />

      <div
        className="glow-violet absolute left-1/2 top-1/2 h-[24rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
        aria-hidden="true"
      />

      <div className="site-container relative">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.24em] text-violet">
            Let&apos;s work together
          </p>

          <h2 className="mt-5 font-display text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.08] tracking-[-0.03em] text-paper text-balance">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-mist sm:text-lg">
            {text}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn btn-primary">
              Start a Conversation
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>

            <a
              href="mailto:julielupex@gmail.com"
              className="btn btn-ghost-dark border-white/20 text-paper hover:border-white/40 hover:bg-white/10"
            >
              julielupex@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

