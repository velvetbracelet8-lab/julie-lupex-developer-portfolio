import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";

type BreadcrumbItem = {
label: string;
href?: string;
};

type PageHeroProps = {
eyebrow: string;
title: string;
description: string;
crumb?: string;
breadcrumbs?: BreadcrumbItem[];
};

export default function PageHero({
eyebrow,
title,
description,
crumb,
breadcrumbs,
}: PageHeroProps) {
const items: BreadcrumbItem[] = breadcrumbs ?? [
...(crumb ? [{ label: crumb }] : []),
];

return ( <section className="relative overflow-hidden bg-ink pb-20 pt-28 text-paper sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40"> <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />

```
  <div
    className="glow-violet absolute -right-[30%] -top-40 h-[28rem] w-[28rem] rounded-full opacity-70 sm:-right-[10%] sm:h-[34rem] sm:w-[34rem] sm:opacity-100"
    aria-hidden="true"
  />

  <div
    className="glow-deep absolute bottom-[-30%] left-[-10%] h-[26rem] w-[26rem] rounded-full"
    aria-hidden="true"
  />

  <div className="site-container relative">
    <Reveal variant="left">
      {items.length > 0 && (
        <nav aria-label="Breadcrumb" className="mb-7">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-mist">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-violet hover:underline hover:underline-offset-4"
              >
                Home
              </Link>
            </li>

            {items.map((item, index) => (
              <li
                key={`${item.label}-${index}`}
                className="flex items-center gap-1.5"
              >
                <ChevronRight
                  size={14}
                  aria-hidden="true"
                  className="shrink-0 text-mist/50"
                />

                {item.href ? (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-violet hover:underline hover:underline-offset-4"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current="page"
                    className="text-violet-2"
                  >
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      <p className="flex items-center gap-3 font-mono text-[0.78rem] font-medium uppercase tracking-[0.28em] text-violet">
        <span
          className="inline-block h-px w-8 bg-violet"
          aria-hidden="true"
        />
        {eyebrow}
      </p>

      <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.4rem,6vw,4.2rem)] font-bold leading-[1.1] tracking-[-0.02em] text-paper text-balance">
        {title}
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
        {description}
      </p>
    </Reveal>
  </div>
</section>


);
}
