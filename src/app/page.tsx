import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import HomeHero from "@/components/HomeHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import DentalWebsitePreview from "@/components/DentalWebsitePreview";
import TeamSection from "@/components/TeamSection";
import { BlogCard } from "@/components/cards";
import { posts } from "@/lib/blog";

export default function HomePage() {
const latestPosts = posts.slice(0, 3);

return ( <main id="main"> <HomeHero />

```
  {/* ---------- Intro / About preview ---------- */}
  <section
    id="about"
    className="border-t border-[var(--border)] bg-[var(--paper)] py-24 md:py-32 lg:py-40"
    aria-labelledby="about-preview-heading"
  >
    <div className="site-container">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[var(--violet)]">
          Meet Julie
        </p>

        <h2
          id="about-preview-heading"
          className="mx-auto max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          I build digital solutions around real problems.
        </h2>

        <div className="mx-auto mt-10 max-w-3xl space-y-6 text-base leading-8 text-[var(--body)] sm:text-lg sm:leading-9">
          <p>
            I&apos;m Julie Lupex, a full-stack developer helping businesses
            turn ideas, technical challenges, and opportunities for
            improvement into practical digital products.
          </p>

          <p>
            From responsive websites and intuitive interfaces to APIs,
            databases, and custom web applications, I focus on understanding
            the problem first and then building the right solution around
            it.
          </p>

          <p>
            The goal is simple: reduce friction, make technology easier to
            use, and create digital experiences that help a business move
            forward.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl border-y border-[var(--border)] py-8">
          <div className="flex flex-col items-center justify-center gap-5 text-sm leading-7 text-[var(--body)] md:flex-row md:gap-8">
            <span className="inline-flex items-center gap-3">
              <span
                className="relative flex h-2.5 w-2.5 shrink-0"
                aria-hidden="true"
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>

              <span>
                <span className="font-medium text-[var(--ink)]">
                  Available
                </span>{" "}
                for freelance projects &amp; contract roles
              </span>
            </span>

            <span className="hidden h-5 w-px bg-[var(--border)] md:block" />

            <span>
              <span className="font-medium text-[var(--ink)]">
                Location
              </span>{" "}
              Remote / Worldwide
            </span>
          </div>

          <p className="mt-5 text-sm leading-7 text-[var(--body)]">
            <span className="font-medium text-[var(--ink)]">
              Core Focus
            </span>{" "}
            Full-Stack Development • Web Applications • UI/UX • Digital
            Solutions
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/about"
            className="btn btn-primary inline-flex items-center"
          >
            More About Julie
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  </section>

  {/* ---------- Problem-solving showcase ---------- */}
  <section
    className="bg-paper-2 py-24 sm:py-28"
    aria-labelledby="work-showcase-heading"
  >
    <div className="site-container">
      <div className="mb-12">
        <SectionHeading
          eyebrow="Selected Work"
          title="See how I turn problems into digital solutions."
          description="A closer look at how I approach structure, user experience, responsive implementation, and technical execution."
        />
      </div>

      <Reveal delay={120}>
        <div className="grid items-center gap-10 rounded-3xl border border-ink/10 bg-paper p-6 sm:p-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#3f8f89]">
                    Healthcare Website
                  </p>

                  <span className="rounded-full border border-black/8 bg-black/[0.025] px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-[#10212b]/55">
                    Concept
                  </span>
                </div>

                <h2
                  id="work-showcase-heading"
                  className="mt-3 text-3xl font-semibold tracking-tight text-[#10212b] sm:text-4xl"
                >
                  DentalCleans
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-7 text-[#10212b]/65">
                  A healthcare website concept focused on making services
                  easier to understand, improving navigation, and giving
                  patients a clearer path toward an appointment.
                </p>
              </div>

              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#10212b]/45">
                  Problem
                </p>

                <p className="mt-2 text-sm leading-6 text-[#10212b]/65">
                  Important healthcare information can become difficult to
                  find when services, trust-building content, and booking
                  actions are not organized around the visitor&apos;s needs.
                </p>
              </div>

              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#10212b]/45">
                  Approach
                </p>

                <p className="mt-2 text-sm leading-6 text-[#10212b]/65">
                  The concept reorganizes the experience around clear
                  content hierarchy, responsive layouts, service discovery,
                  and visible next steps across desktop and mobile.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-black/8 bg-black/[0.025] px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-[#10212b]/55">
                  Responsive
                </span>

                <span className="rounded-full border border-black/8 bg-black/[0.025] px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-[#10212b]/55">
                  Desktop + Mobile
                </span>

                <span className="rounded-full border border-black/8 bg-black/[0.025] px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-[#10212b]/55">
                  Healthcare
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/landing-pages/dentalcleans"
                  className="inline-flex items-center gap-2 rounded-full bg-[#10212b] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#3f8f89]"
                >
                  View case study
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>

                <a
                  href="https://dentalcleans.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#10212b] transition hover:-translate-y-0.5 hover:border-[#3f8f89] hover:text-[#3f8f89]"
                >
                  View live concept
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <DentalWebsitePreview />
          </div>
        </div>
      </Reveal>

      <div className="mt-10 flex justify-center">
        <Reveal delay={280}>
          <Link href="/landing-pages" className="btn btn-ghost-dark">
            Explore More Concepts
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </div>
  </section>

  {/* ---------- How I solve problems ---------- */}
  <section
    className="border-t border-ink/10 bg-paper py-24 sm:py-28"
    aria-labelledby="approach-heading"
  >
    <div className="site-container">
      <div className="grid gap-12 md:grid-cols-12 md:items-end md:gap-16">
        <Reveal className="md:col-span-7">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[var(--violet)]">
              How I approach the work
            </p>

            <h2
              id="approach-heading"
              className="mt-4 max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-5xl"
            >
              Start with the problem. Build around the outcome.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={120} className="md:col-span-5">
          <p className="max-w-xl text-base leading-7 text-[var(--body)]">
            Good development starts before the first line of code. I focus
            on understanding what is not working, what users need, and
            which solution makes the most sense for the business.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {[
          {
            number: "01",
            title: "Understand",
            text: "Identify the users, business goal, technical constraints, and friction that needs to be removed.",
          },
          {
            number: "02",
            title: "Design the solution",
            text: "Turn the problem into a clear structure, user experience, and technical approach before development begins.",
          },
          {
            number: "03",
            title: "Build & improve",
            text: "Develop the solution with modern technologies, test the experience, and refine it around real-world use.",
          },
        ].map((item) => (
          <Reveal key={item.number}>
            <article className="h-full border-t border-ink/15 pt-6">
              <span className="font-mono text-xs font-semibold text-[var(--violet)]">
                {item.number}
              </span>

              <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-[var(--ink)]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--body)]">
                {item.text}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>

  {/* ---------- Team ---------- */}
  <TeamSection />

  {/* ---------- Blog preview ---------- */}
  <section
    className="border-t border-ink/10 bg-paper py-24 sm:py-28"
    aria-label="Blog preview"
  >
    <div className="site-container">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading
          eyebrow="The Knowledge Hub"
          title="Ideas, code & digital craft"
          description="Notes from the workbench on users, interfaces, performance, development, and building useful digital products."
        />

        <Reveal delay={120}>
          <Link href="/blog" className="btn btn-ghost-dark">
            All Articles
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {latestPosts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 90}>
            <BlogCard post={post} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
</main>


);
}
