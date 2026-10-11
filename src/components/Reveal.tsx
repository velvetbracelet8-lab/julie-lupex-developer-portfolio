"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
children: ReactNode;
variant?: "up" | "left" | "right" | "scale";
delay?: number;
className?: string;
instant?: boolean;
};

export default function Reveal({
children,
variant = "up",
delay = 0,
className = "",
instant = false,
}: RevealProps) {
const ref = useRef<HTMLDivElement>(null);

useEffect(() => {
const element = ref.current;


if (!element) {
  return;
}

if (instant) {
  element.classList.add("is-visible");
  return;
}

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (
  prefersReducedMotion ||
  typeof IntersectionObserver === "undefined"
) {
  element.classList.add("is-visible");
  return;
}

if (element.classList.contains("is-visible")) {
  return;
}

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  },
  {
    threshold: 0.05,
    rootMargin: "0px 0px 100px 0px",
  },
);

observer.observe(element);

return () => {
  observer.disconnect();
};


}, [instant]);

const variantClass =
variant === "left"
? "reveal-left"
: variant === "right"
? "reveal-right"
: variant === "scale"
? "reveal-scale"
: "";

return (
<div
ref={ref}
className={`reveal ${variantClass} ${
        instant ? "is-visible" : ""
      } ${className}`.trim()}
style={
delay > 0
? { transitionDelay: `${delay}ms` }
: undefined
}
>
{children} </div>
);
}
