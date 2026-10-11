
"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";

export type ProjectScreenshot = {
  id: string;
  url: string;
  alt: string;
  caption: string | null;
};

type Props = {
  desktopImages: ProjectScreenshot[];
  mobileImages: ProjectScreenshot[];
};

function ScreenshotCarousel({
  images,
  type,
}: {
  images: ProjectScreenshot[];
  type: "desktop" | "mobile";
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = type === "mobile";
  const current = images[activeIndex];

  function previous() {
    setActiveIndex((index) => (index - 1 + images.length) % images.length);
  }

  function next() {
    setActiveIndex((index) => (index + 1) % images.length);
  }

  return (
    <article className="min-w-0">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
            {isMobile ? "Mobile experience" : "Desktop experience"}
          </p>
          <h3 className="mt-1 font-display text-xl font-medium">
            {isMobile ? "Phone preview" : "Desktop preview"}
          </h3>
        </div>

        <span className="rounded-full border border-ink/10 px-3 py-1 text-xs text-body">
          {images.length} {images.length === 1 ? "screenshot" : "screenshots"}
        </span>
      </div>

      <div
        className={
          isMobile
            ? "mx-auto max-w-[320px] rounded-[2rem] border-[6px] border-ink bg-ink p-2 shadow-xl"
            : "overflow-hidden rounded-2xl border border-ink/15 bg-white shadow-lg"
        }
      >
        <div
          className={
            isMobile
              ? "overflow-hidden rounded-[1.35rem] bg-paper"
              : "overflow-hidden rounded-xl bg-paper"
          }
        >
          {current ? (
            <a
              href={current.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open full-size screenshot: ${current.alt}`}
            >
              <Image
                src={current.url}
                alt={current.alt}
                width={isMobile ? 390 : 1440}
                height={isMobile ? 844 : 1000}
                unoptimized
                priority={activeIndex === 0}
                className={
                  isMobile
                    ? "h-auto max-h-[680px] w-full object-contain object-top"
                    : "h-auto max-h-[620px] w-full object-contain object-top"
                }
              />
            </a>
          ) : (
            <div className="flex min-h-[300px] items-center justify-center p-6 text-center text-sm text-body">
              No screenshots have been uploaded for this view yet.
            </div>
          )}
        </div>
      </div>

      {current?.caption ? (
        <p className="mt-3 text-sm leading-6 text-body">{current.caption}</p>
      ) : null}

      {images.length > 0 ? (
        <>
          <div className="mt-5 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={previous}
              disabled={images.length < 2}
              aria-label={`Previous ${type} screenshot`}
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2.5 text-sm font-medium transition hover:border-ink/40 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={16} aria-hidden="true" />
              Previous
            </button>

            <span
              className="font-mono text-xs text-muted"
              aria-live="polite"
            >
              {activeIndex + 1} / {images.length}
            </span>

            <button
              type="button"
              onClick={next}
              disabled={images.length < 2}
              aria-label={`Next ${type} screenshot`}
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2.5 text-sm font-medium transition hover:border-ink/40 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          </div>

          {images.length > 1 ? (
            <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  type="button"
                  key={image.id}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${type} screenshot ${index + 1}`}
                  aria-pressed={activeIndex === index}
                  className={`h-2.5 w-2.5 shrink-0 rounded-full transition ${
                    activeIndex === index
                      ? "bg-ink"
                      : "bg-ink/25 hover:bg-ink/50"
                  }`}
                />
              ))}
            </div>
          ) : null}
        </>
      ) : null}
    </article>
  );
}

export default function ProjectScreenshotGallery({
  desktopImages,
  mobileImages,
}: Props) {
  const [showAll, setShowAll] = useState(false);

  const allImages = [
    ...desktopImages.map((image) => ({ ...image, type: "Desktop" })),
    ...mobileImages.map((image) => ({ ...image, type: "Mobile" })),
  ];

  return (
    <>
      <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(260px,0.7fr)] lg:gap-12">
        <ScreenshotCarousel images={desktopImages} type="desktop" />
        <ScreenshotCarousel images={mobileImages} type="mobile" />
      </div>

      {allImages.length > 0 ? (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-ink/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          >
            <Images size={17} aria-hidden="true" />
            View all screenshots ({allImages.length})
          </button>
        </div>
      ) : null}

      {showAll ? (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="All project screenshots"
        >
          <div className="mx-auto max-w-7xl">
            <div className="sticky top-0 z-10 mb-6 flex items-center justify-between gap-4 border-b border-white/15 bg-black/90 py-4 text-white">
              <div>
                <h2 className="font-display text-2xl font-medium">
                  All screenshots
                </h2>
                <p className="mt-1 text-sm text-white/65">
                  {allImages.length} images · Desktop and mobile
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowAll(false)}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2.5 text-sm hover:bg-white/10"
              >
                <X size={17} aria-hidden="true" />
                Close
              </button>
            </div>

            <div className="grid items-start gap-6 md:grid-cols-2">
              {allImages.map((image) => (
                <figure
                  key={`${image.type}-${image.id}`}
                  className="overflow-hidden rounded-xl border border-white/15 bg-white"
                >
                  <a
                    href={image.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open full-size ${image.type.toLowerCase()} screenshot`}
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      width={image.type === "Mobile" ? 390 : 1440}
                      height={image.type === "Mobile" ? 844 : 1000}
                      unoptimized
                      className="h-auto max-h-[75vh] w-full object-contain object-top"
                    />
                  </a>
                </figure>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}