"use client";

import { useState } from "react";
import { Link2, Check, Share2 } from "lucide-react";
import { site } from "@/lib/site";

type ShareButtonsProps = {
  slug: string;
  title: string;
};

export default function ShareButtons({ slug, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const url = `${site.url}/blog/${slug}`;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.prompt("Copy this link:", url);
    }
  }

  async function nativeShare() {
    if (typeof navigator.share === "function") {
      try {
        await navigator.share({ title, text: `${title} — by Julie Lupex`, url });
      } catch {
        // Share sheet dismissed — do nothing.
      }
    } else {
      await copyLink();
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="font-display text-sm font-bold text-ink">Share</span>
      <button
        type="button"
        onClick={copyLink}
        className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-semibold text-body transition-all hover:border-violet/60 hover:text-ink"
        aria-label={copied ? "Link copied" : "Copy article link"}
      >
        {copied ? (
          <Check size={15} className="text-deep" aria-hidden="true" />
        ) : (
          <Link2 size={15} aria-hidden="true" />
        )}
        {copied ? "Copied" : "Copy link"}
      </button>
      <button
        type="button"
        onClick={nativeShare}
        className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-semibold text-body transition-all hover:border-violet/60 hover:text-ink"
        aria-label="Share this article"
      >
        <Share2 size={15} aria-hidden="true" />
        Share article
      </button>
    </div>
  );
}
