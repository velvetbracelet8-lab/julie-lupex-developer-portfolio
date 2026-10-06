import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const team = [
{
name: "Julie Lupex",
role: "FOUNDER · FULL-STACK DEVELOPER & DESIGNER",
timezone: "GMT+3",
image: "/images/julie-lupex.png",
bio: "Designs it, codes it, ships it. Believes a website should be a business asset that works shifts — not a brochure that collects dust.",
},
{
name: "Jeremy Muiruri",
role: "BACKEND & QA ENGINEER",
timezone: "GMT+3",
image: "/images/jeremy-muiruri.png",
bio: "APIs, databases and tests. He breaks things in staging so your users never meet a bug in production — the calmest pessimist you'll ever hire.",
},
];

export default function TeamSection() {
return ( <section
   className="border-t border-ink/10 bg-paper py-24 sm:py-28 lg:py-32"
   aria-labelledby="team-heading"
 > <div className="site-container"> <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
{/* Intro */} <div className="lg:col-span-5"> <Reveal> <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--violet)]">
The team </p>

```
          <h2
            id="team-heading"
            className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl"
          >
            Small team.
            <br />
            Big problems welcome.
          </h2>

          <p className="mt-6 max-w-lg text-base leading-7 text-ink/65 sm:text-lg sm:leading-8">
            Every project has direct founder accountability from discovery
            through launch. On larger full-stack builds, Jeremy Muiruri
            brings backend engineering and QA depth to the team, helping
            catch technical edge cases before they reach users.
          </p>

          <div className="mt-8 border-t border-ink/10 pt-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-ink/55">
              Remote-first · Same time zone · Same Slack · Zero telephone
              game
            </p>
          </div>

          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-all duration-300 hover:gap-3 hover:text-[var(--violet)]"
          >
            More about how we work
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </Reveal>
      </div>

      {/* Team members */}
      <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
        {team.map((member, index) => (
          <Reveal key={member.name} delay={index * 100}>
            <article className="group overflow-hidden rounded-3xl border border-ink/10 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--violet)]/40 hover:shadow-[0_20px_50px_rgba(16,33,43,0.08)] sm:p-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-paper-2">
                <Image
                  src={member.image}
                  alt={`${member.name} portrait`}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>

              <div className="px-1 pb-1 pt-5 sm:px-1 sm:pt-6">
                <h3 className="text-2xl font-semibold tracking-tight text-ink">
                  {member.name}
                </h3>

                <p className="mt-2 font-mono text-xs font-semibold uppercase tracking-wider text-ink/60">
                  {member.role}
                </p>

                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-paper px-2.5 py-1.5">
                  <span
                    className="pulse-dot h-1.5 w-1.5 shrink-0 rounded-full bg-mint"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[11px] font-medium tracking-wide text-ink/65">
                    {member.timezone} · Working timezone
                  </span>
                </div>

                <p className="mt-5 text-sm leading-6 text-ink/65">
                  {member.bio}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </div>
</section>
);
}
