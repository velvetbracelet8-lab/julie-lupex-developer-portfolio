"use client";

import { Check, Link2, Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

type ShareButtonsProps = {
slug?: string;
title: string;
basePath?: string;
url?: string;
};

export default function ShareButtons({
slug,
title,
basePath = "/blog",
url,
}: ShareButtonsProps) {
const [copied, setCopied] = useState(false);
const [canNativeShare, setCanNativeShare] = useState(false);

useEffect(() => {
setCanNativeShare(typeof navigator.share === "function");
}, []);

const normalizedSiteUrl = site.url.endsWith("/")
? site.url.slice(0, -1)
: site.url;

const normalizedBasePath = basePath.startsWith("/")
? basePath
: `/${basePath}`;

const cleanBasePath = normalizedBasePath.endsWith("/")
? normalizedBasePath.slice(0, -1)
: normalizedBasePath;

const shareUrl =
url ||
`${normalizedSiteUrl}${cleanBasePath}/${encodeURIComponent(slug ?? "")}`;

const encodedUrl = encodeURIComponent(shareUrl);
const encodedTitle = encodeURIComponent(title);

async function copyLink() {
try {
await navigator.clipboard.writeText(shareUrl);
setCopied(true);


  window.setTimeout(() => {
    setCopied(false);
  }, 2200);
} catch {
  window.prompt("Copy this link:", shareUrl);
}


}

async function nativeShare() {
if (!canNativeShare) {
return;
}


try {
  await navigator.share({
    title,
    text: `${title} — by Julie Lupex`,
    url: shareUrl,
  });
} catch {
  // Share sheet dismissed or unavailable.
}


}

return ( <div className="flex flex-wrap items-center gap-3"> <span className="font-display text-sm font-bold text-ink">
Share this blueprint </span>

```
  <button
    type="button"
    onClick={copyLink}
    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
      copied
        ? "border-mint bg-mint/10 text-ink"
        : "border-ink/15 bg-white text-body hover:border-violet/60 hover:text-ink"
    }`}
    aria-label={copied ? "Link copied" : "Copy article link"}
  >
    {copied ? (
      <Check size={15} aria-hidden="true" />
    ) : (
      <Link2 size={15} aria-hidden="true" />
    )}
    {copied ? "Copied" : "Copy link"}
  </button>

  {canNativeShare && (
    <button
      type="button"
      onClick={nativeShare}
      className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-semibold text-body transition-all hover:border-violet/60 hover:text-ink"
      aria-label="Share this article"
    >
      <Share2 size={15} aria-hidden="true" />
      Share article
    </button>
  )}

  <a
    href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-semibold text-body transition-all hover:border-violet/60 hover:text-ink"
    aria-label="Share on X"
  >
    <span
      className="text-sm font-bold leading-none"
      aria-hidden="true"
    >
      X
    </span>
    X
  </a>
</div>


);
}
