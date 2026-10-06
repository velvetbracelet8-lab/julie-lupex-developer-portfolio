"use client";

import Image from "next/image";
import { useState } from "react";
import {
ArrowUpRight,
ChevronLeft,
ChevronRight,
ExternalLink,
} from "lucide-react";

import {
landingPageConcepts,
type LandingPageConcept,
} from "@/lib/landing-pages";

type DentalWebsitePreviewProps = {
concept?: LandingPageConcept;
showBoth?: boolean;
};

export default function DentalWebsitePreview({
concept = landingPageConcepts[0],
showBoth = false,
}: DentalWebsitePreviewProps) {
const [desktopIndex, setDesktopIndex] = useState(0);
const [mobileIndex, setMobileIndex] = useState(0);

const desktopScreenshots = concept.desktopScreenshots;
const mobileScreenshots = concept.mobileScreenshots;

const desktop =
desktopScreenshots[desktopIndex] ?? desktopScreenshots[0];

const mobile = mobileScreenshots[mobileIndex] ?? mobileScreenshots[0];

const previousDesktop = () => {
setDesktopIndex((current) =>
current === 0 ? desktopScreenshots.length - 1 : current - 1,
);
};

const nextDesktop = () => {
setDesktopIndex((current) =>
current === desktopScreenshots.length - 1 ? 0 : current + 1,
);
};

const previousMobile = () => {
setMobileIndex((current) =>
current === 0 ? mobileScreenshots.length - 1 : current - 1,
);
};

const nextMobile = () => {
setMobileIndex((current) =>
current === mobileScreenshots.length - 1 ? 0 : current + 1,
);
};

return (
<div className={showBoth ? "space-y-10" : "space-y-8"}>
{/* Desktop preview */}
<div className={showBoth ? "" : "hidden md:block"}> <div className="mb-3 flex items-end justify-between gap-4"> <div className="min-w-0"> <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3f8f89]">
Desktop preview </p>

```
        <p className="mt-1 text-sm font-medium text-[#10212b]">
          {desktop?.label ?? "Website preview"}
        </p>

        {desktop?.caption && (
          <p className="mt-1 max-w-xl text-xs leading-5 text-[#10212b]/55">
            {desktop.caption}
          </p>
        )}
      </div>

      <a
        href={concept.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden shrink-0 items-center gap-1.5 text-xs font-semibold text-[#3f8f89] transition hover:text-[#10212b] sm:inline-flex"
      >
        View live website
        <ExternalLink size={13} aria-hidden="true" />
      </a>
    </div>

    {desktop ? (
      <>
        <div className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-[#17191c] p-2 shadow-[0_30px_80px_rgba(16,33,43,0.16)] sm:p-3">
          {/* Browser chrome */}
          <div className="flex h-8 items-center gap-1.5 px-2 sm:h-9 sm:px-3">
            <span
              className="h-2 w-2 rounded-full bg-[#ff5f56]/70"
              aria-hidden="true"
            />
            <span
              className="h-2 w-2 rounded-full bg-[#ffbd2e]/70"
              aria-hidden="true"
            />
            <span
              className="h-2 w-2 rounded-full bg-[#27c93f]/70"
              aria-hidden="true"
            />

            <div className="ml-3 flex h-5 flex-1 items-center rounded-md bg-white/[0.08] px-3 sm:h-6">
              <span
                className="mr-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3f8f89]"
                aria-hidden="true"
              />

              <span className="truncate font-mono text-[8px] text-white/35 sm:text-[9px]">
                {concept.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </span>
            </div>
          </div>

          <a
            href={concept.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-[1rem] bg-white"
            aria-label={`Open ${concept.title} live website — ${desktop.label}`}
          >
            <Image
              src={desktop.src}
              alt={`${concept.title} ${desktop.label} website preview`}
              width={1672}
              height={941}
              priority={desktopIndex === 0}
              sizes="(min-width: 1280px) 1100px, (min-width: 768px) 90vw, 100vw"
              className="block h-auto w-full object-cover object-top transition duration-500 group-hover:scale-[1.01]"
            />

            <div className="pointer-events-none absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/45 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="rounded-full bg-black/55 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-white backdrop-blur-md">
                View live website
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#10212b] shadow-lg">
                <ArrowUpRight size={16} aria-hidden="true" />
              </span>
            </div>
          </a>
        </div>

        {desktopScreenshots.length > 1 && (
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              {desktopScreenshots.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setDesktopIndex(index)}
                  aria-label={`Show ${item.label} desktop screenshot`}
                  aria-current={desktopIndex === index}
                  className="flex h-10 min-w-10 items-center justify-center rounded-full"
                >
                  <span
                    className={`h-1.5 rounded-full transition-all ${
                      desktopIndex === index
                        ? "w-8 bg-[#3f8f89]"
                        : "w-1.5 bg-[#10212b]/15 hover:bg-[#10212b]/30"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={previousDesktop}
                aria-label="Previous desktop screenshot"
                className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-[#10212b] transition hover:bg-[#e9f2f0]"
              >
                <ChevronLeft size={16} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={nextDesktop}
                aria-label="Next desktop screenshot"
                className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-[#10212b] transition hover:bg-[#e9f2f0]"
              >
                <ChevronRight size={16} aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </>
    ) : (
      <div className="rounded-[1.5rem] border border-black/10 bg-white/70 p-6 text-sm text-[#10212b]/60">
        No desktop screenshots are available for this concept yet.
      </div>
    )}
  </div>

  {/* Mobile preview */}
  <div
    className={
      showBoth
        ? "rounded-[1.5rem] border border-black/10 bg-white/70 p-5 sm:p-6"
        : "rounded-[1.5rem] border border-black/10 bg-white/70 p-5 sm:p-6 md:hidden"
    }
  >
    <div className="mb-5 flex items-end justify-between gap-4">
      <div className="min-w-0">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3f8f89]">
          Mobile preview
        </p>

        <p className="mt-1 text-sm font-medium text-[#10212b]">
          Responsive experience ·{" "}
          {mobile?.label ?? "Website preview"}
        </p>

        {mobile?.caption && (
          <p className="mt-1 max-w-xl text-xs leading-5 text-[#10212b]/55">
            {mobile.caption}
          </p>
        )}
      </div>

      <a
        href={concept.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden shrink-0 items-center gap-1.5 text-xs font-semibold text-[#3f8f89] transition hover:text-[#10212b] sm:inline-flex"
      >
        View live website
        <ExternalLink size={13} aria-hidden="true" />
      </a>
    </div>

    {mobile ? (
      <>
        <div className="flex justify-center">
          <a
            href={concept.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-[min(72vw,280px)]"
            aria-label={`Open ${concept.title} live website — ${mobile.label}`}
          >
            <div className="rounded-[2.2rem] border-[6px] border-[#17191c] bg-[#17191c] p-1 shadow-[0_25px_60px_rgba(16,33,43,0.18)]">
              <div className="relative overflow-hidden rounded-[1.65rem] bg-white">
                <div
                  className="absolute left-1/2 top-2 z-10 h-2.5 w-14 -translate-x-1/2 rounded-full bg-[#17191c]"
                  aria-hidden="true"
                />

                <Image
                  src={mobile.src}
                  alt={`${concept.title} ${mobile.label} mobile website preview`}
                  width={941}
                  height={1672}
                  priority={mobileIndex === 0}
                  sizes="280px"
                  className="block h-auto w-full object-cover object-top transition duration-500 group-hover:scale-[1.015]"
                />

                <div className="pointer-events-none absolute inset-0 flex items-end justify-center bg-black/25 pb-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-full bg-white px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#10212b] shadow-lg">
                    Open live website
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>

        {mobileScreenshots.length > 1 && (
          <div className="mt-5 flex items-center justify-center gap-1">
            <button
              type="button"
              onClick={previousMobile}
              aria-label="Previous mobile screenshot"
              className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-[#10212b] transition hover:bg-[#e9f2f0]"
            >
              <ChevronLeft size={16} aria-hidden="true" />
            </button>

            <div className="flex items-center gap-0.5">
              {mobileScreenshots.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setMobileIndex(index)}
                  aria-label={`Show ${item.label} mobile screenshot`}
                  aria-current={mobileIndex === index}
                  className="flex h-10 min-w-10 items-center justify-center rounded-full"
                >
                  <span
                    className={`h-1.5 rounded-full transition-all ${
                      mobileIndex === index
                        ? "w-8 bg-[#3f8f89]"
                        : "w-1.5 bg-[#10212b]/15 hover:bg-[#10212b]/30"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={nextMobile}
              aria-label="Next mobile screenshot"
              className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-[#10212b] transition hover:bg-[#e9f2f0]"
            >
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          </div>
        )}
      </>
    ) : (
      <div className="rounded-[1.5rem] border border-black/10 bg-white/70 p-6 text-sm text-[#10212b]/60">
        No mobile screenshots are available for this concept yet.
      </div>
    )}
  </div>
</div>


);
}
