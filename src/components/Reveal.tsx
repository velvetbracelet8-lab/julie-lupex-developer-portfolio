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
const el = ref.current;
if (!el || instant || el.classList.contains("is-visible")) {
return;
}


const prefersReduced = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (prefersReduced || !("IntersectionObserver" in window)) {
  el.classList.add("is-visible");
  return;
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.05,
    rootMargin: "0px",
  },
);

observer.observe(el);

return () => observer.disconnect();


}, [instant]);

const variantClass =
variant === "left"
? "reveal-left"
: variant === "right"
? "reveal-right"
: variant === "scale"
? "reveal-scale"
: "";

const visibilityClass = instant ? "is-visible" : "";

return (
<div
ref={ref}
className={`reveal ${variantClass} ${visibilityClass} ${className}`}
style={delay ? { transitionDelay: `${delay}ms` } : undefined}
>
{children} </div>
);
}
