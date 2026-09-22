import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main" className="relative flex min-h-screen items-center overflow-hidden bg-ink">
      <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
      <div
        className="glow-violet absolute left-1/2 top-1/2 h-[28rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
        aria-hidden="true"
      />
      <div className="site-container relative py-32 text-center">
        <p className="font-mono text-sm tracking-[0.3em] text-violet">404 — PAGE NOT FOUND</p>
        <h1 className="mx-auto mt-6 max-w-2xl font-display text-[clamp(3.4rem,10vw,7rem)] font-bold leading-none tracking-[-0.03em] text-paper">
          {"<Lost />"}
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-mist">
          This route doesn&apos;t exist — but plenty of good ones do. Head back
          somewhere useful.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn btn-primary">
            <ArrowLeft size={16} aria-hidden="true" />
            Back Home
          </Link>
          <Link href="/portfolio" className="btn btn-ghost-light">
            See the Work
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </main>
  );
}
