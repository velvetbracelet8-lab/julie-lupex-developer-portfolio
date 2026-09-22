import Reveal from "@/components/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignCls}`}>
      <p
        className={`flex items-center gap-3 font-mono text-[0.78rem] font-medium tracking-[0.28em] uppercase ${
          dark ? "text-violet" : "text-deep"
        }`}
      >
        <span
          className={`inline-block h-px w-8 ${dark ? "bg-violet" : "bg-deep"}`}
          aria-hidden="true"
        />
        {eyebrow}
      </p>
      <h2
        className={`font-display text-[clamp(1.9rem,4vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.02em] text-balance ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-[1.05rem] leading-relaxed ${
            dark ? "text-mist" : "text-body"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
