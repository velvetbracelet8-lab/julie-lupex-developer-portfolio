import Reveal from "@/components/Reveal";

type SectionHeadingProps = {
id?: string;
eyebrow: string;
title: string;
description?: string;
align?: "left" | "center";
dark?: boolean;
as?: "h1" | "h2" | "h3";
};

export default function SectionHeading({
id,
eyebrow,
title,
description,
align = "left",
dark = false,
as: Heading = "h2",
}: SectionHeadingProps) {
const isCentered = align === "center";

const alignCls = isCentered
? "mx-auto items-center text-center"
: "items-start text-left";

const eyebrowLineClass = dark ? "bg-violet" : "bg-deep";
const eyebrowTextClass = dark ? "text-violet" : "text-deep";
const headingTextClass = dark ? "text-paper" : "text-ink";
const descriptionTextClass = dark ? "text-mist" : "text-body";

return (
<Reveal className={`flex max-w-2xl flex-col gap-4 ${alignCls}`}>
<p
className={`flex items-center gap-3 font-mono text-[0.78rem] font-medium uppercase tracking-[0.28em] ${eyebrowTextClass}`}
>
<span
className={`inline-block h-px w-8 shrink-0 ${eyebrowLineClass}`}
aria-hidden="true"
/>

```
    {eyebrow}

    {isCentered && (
      <span
        className={`inline-block h-px w-8 shrink-0 ${eyebrowLineClass}`}
        aria-hidden="true"
      />
    )}
  </p>

  <Heading
    id={id}
    className={`font-display text-[clamp(1.9rem,4vw,2.9rem)] font-bold leading-[1.15] tracking-[-0.02em] text-balance ${headingTextClass}`}
  >
    {title}
  </Heading>

  {description && (
    <p
      className={`text-[1.05rem] leading-relaxed ${descriptionTextClass} ${
        isCentered ? "mx-auto max-w-xl" : ""
      }`}
    >
      {description}
    </p>
  )}
</Reveal>


);
}
