import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Gauge,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import HomeHero from "@/components/HomeHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { ServiceCard, ProjectCard, BlogCard } from "@/components/cards";
import { services, skillGroups, projects } from "@/lib/data";
import { posts } from "@/lib/blog";

const stats = [
  { value: "10+", label: "Development Areas" },
  { value: "Web", label: "Design + Development" },
  { value: "Full-Stack", label: "End-to-End Solutions" },
  { value: "100%", label: "Problem-Solving Mindset" },
];

const marqueeItems = [
  "Clean Code",
  "Responsive Design",
  "Web Applications",
  "APIs",
  "E-commerce",
  "WordPress",
  "Performance",
  "Security",
  "Deployment",
  "Accessibility",
];

const pillars = [
  {
    icon: Code2,
    title: "Maintainable code",
    text: "Code written to be read, extended and trusted — by future teammates and future Julie.",
  },
  {
    icon: Gauge,
    title: "Performance by default",
    text: "Fast isn't a phase at the end. It's a constraint respected from the first component.",
  },
  {
    icon: ShieldCheck,
    title: "Security as a habit",
    text: "Sensible defaults, careful input handling and respect for the people behind the data.",
  },
  {
    icon: Rocket,
    title: "Deployment-ready",
    text: "Products that leave the laptop — configured, tested and ready for real users.",
  },
];

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const latestPosts = posts.slice(0, 3);

  return (
    <main id="main">
      <HomeHero />

      {/* ---------- Intro / About preview ---------- */}
      <section className="bg-paper py-24 sm:py-28" aria-labelledby="intro-heading">
        <div className="site-container">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal variant="left" className="relative">
              <div className="img-zoom relative overflow-hidden rounded-[2rem] border border-ink/10">
                <Image
                  src="https://images.pexels.com/photos/1181212/pexels-photo-1181212.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="A professional woman developer working on her laptop in a modern office."
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="card-lift absolute -bottom-6 right-4 max-w-[15rem] rounded-2xl border border-ink/10 bg-white p-5 shadow-[0_20px_50px_-20px_rgba(15,13,20,0.3)] sm:right-8">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-deep">
                  Current focus
                </p>
                <p className="mt-2 font-display text-[0.95rem] font-bold leading-snug text-ink">
                  Full-stack builds that move from concept to deployment.
                </p>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="flex items-center gap-3 font-mono text-[0.78rem] font-medium uppercase tracking-[0.28em] text-deep">
                  <span className="inline-block h-px w-8 bg-deep" aria-hidden="true" />
                  Hello, I&apos;m Julie
                </p>
                <h2
                  id="intro-heading"
                  className="mt-4 font-display text-[clamp(1.9rem,4vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.02em] text-ink text-balance"
                >
                  Turning Ideas Into Digital Products
                </h2>
                <p className="mt-5 text-[1.05rem] leading-relaxed text-body">
                  Julie Lupex is a versatile web developer with a passion for
                  transforming ideas into intuitive, functional, and reliable
                  digital experiences. From polished front-end interfaces to
                  powerful backend systems and APIs, she approaches every
                  project with equal attention to design, performance, and
                  functionality.
                </p>
              </Reveal>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {pillars.map((p, i) => (
                  <Reveal key={p.title} delay={i * 90}>
                    <div className="flex gap-3.5">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink text-violet">
                        <p.icon size={17} aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-display text-[0.95rem] font-bold text-ink">
                          {p.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-body">{p.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={140}>
                <Link href="/about" className="btn btn-dark mt-9">
                  More About Julie
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </Reveal>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} variant="scale">
                <div className="card-lift h-full rounded-3xl border border-ink/10 bg-white p-6 text-center sm:p-8">
                  <p className="font-display text-[clamp(1.7rem,3vw,2.4rem)] font-bold tracking-[-0.02em] text-ink">
                    {s.value}
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-body">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Marquee ---------- */}
      <div
        className="overflow-hidden border-y border-ink/10 bg-violet py-4"
        aria-hidden="true"
      >
        <div className="marquee-track gap-0">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
              {marqueeItems.map((item) => (
                <span
                  key={`${dup}-${item}`}
                  className="flex items-center font-display text-sm font-bold uppercase tracking-[0.22em] text-ink"
                >
                  <span className="px-6">{item}</span>
                  <span className="text-ink/50">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ---------- Services preview ---------- */}
      <section className="relative overflow-hidden bg-ink-2 py-24 sm:py-28" aria-labelledby="services-heading">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div
          className="glow-deep absolute -right-40 top-0 h-[30rem] w-[30rem] rounded-full"
          aria-hidden="true"
        />
        <div className="site-container relative">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="What I Do"
              title="From the first line of code to the final deployment"
              description="Ten disciplines, one developer. Julie works across the entire lifecycle of a digital product — interface, logic, data and launch."
              dark
            />
            <Reveal delay={120}>
              <Link href="/services" className="btn btn-ghost-light">
                All Services
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, i) => (
              <Reveal key={service.title} delay={(i % 3) * 90}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Skills preview ---------- */}
      <section className="bg-paper py-24 sm:py-28" aria-labelledby="skills-heading">
        <div className="site-container grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Capabilities"
              title="A toolkit shaped around the whole product"
              description="Skills grouped the way real projects group them: what the user sees, what the server remembers, and the practices that keep both healthy."
            />
            <Reveal delay={140}>
              <Link href="/skills" className="btn btn-ghost-dark mt-8">
                Explore All Skills
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={(i % 2) * 90}>
                <div className="card-lift h-full rounded-3xl border border-ink/10 bg-white p-7">
                  <h3 className="font-display text-lg font-bold text-ink">
                    <span className="mr-2 text-deep" aria-hidden="true">
                      {"//"}
                    </span>
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{group.blurb}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-ink/10 bg-paper px-3.5 py-1.5 text-[0.8rem] font-medium text-body transition-colors hover:border-violet/50 hover:text-ink"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Portfolio preview ---------- */}
      <section className="bg-paper-2 py-24 sm:py-28" aria-labelledby="work-heading">
        <div className="site-container">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="Selected Work"
              title="Concept projects, built like real ones"
              description="A portfolio of original concept projects — each designed and engineered with the same discipline as a commercial build."
            />
            <Reveal delay={120}>
              <Link href="/portfolio" className="btn btn-ghost-dark">
                Full Portfolio
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 90}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Philosophy ---------- */}
      <section className="bg-paper py-24 sm:py-28" aria-labelledby="philosophy-heading">
        <div className="site-container">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-[0.78rem] font-medium uppercase tracking-[0.28em] text-deep">
              Developer Philosophy
            </p>
            <blockquote
              id="philosophy-heading"
              className="mt-6 font-display text-[clamp(1.7rem,4.2vw,3rem)] font-bold leading-[1.18] tracking-[-0.02em] text-ink text-balance"
            >
              “Good software should not only work. It should{" "}
              <span className="text-deep">make the user&apos;s life easier</span>.”
            </blockquote>
            <p className="mt-6 text-lg text-body">
              — Julie Lupex, Full-Stack Web Developer
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Blog preview ---------- */}
      <section className="border-t border-ink/10 bg-paper py-24 sm:py-28" aria-labelledby="blog-heading">
        <div className="site-container">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="The Knowledge Hub"
              title="Ideas, code & digital craft"
              description="Notes from the workbench — on users, interfaces, performance and building things that matter."
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
          <Reveal className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 font-display text-sm font-bold text-deep transition-colors hover:text-electric"
            >
              Prefer seeing to reading? Explore the portfolio
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
