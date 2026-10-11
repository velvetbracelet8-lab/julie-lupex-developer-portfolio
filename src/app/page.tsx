
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BriefcaseBusiness } from "lucide-react";

import HomeHero from "@/components/HomeHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { BlogCard } from "@/components/cards";
import { posts } from "@/lib/blog";
import { createSupabaseServerClient } from "@/lib/supabase-server";

const solutions = [
  {
    number: "01",
    title: "Websites",
    text: "Fast, responsive websites built to communicate clearly, guide visitors, and support business goals.",
    href: "/services#websites",
  },
  {
    number: "02",
    title: "Web Applications",
    text: "Custom systems that replace manual workflows, connect information, and make complex processes easier to manage.",
    href: "/services#web-applications",
  },
];

type FeaturedProject = {
  id: string;
  title: string;
  slug: string;
  subtitle: string | null;
  project_type: string;
  category: string | null;
  summary: string | null;
};

export default async function HomePage() {
  const latestPosts = posts.slice(0, 3);
  const supabase = await createSupabaseServerClient();

  const { data: projectData } = await supabase
    .from("projects")
    .select("id, title, slug, subtitle, project_type, category, summary")
    .eq("published", true)
    .eq("featured", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false })
    .limit(3);

  const featuredProjects = (projectData ?? []) as FeaturedProject[];

  return (
    <main id="main">
      <HomeHero />

      {/* Intro / About preview */}
      <section
        id="about"
        className="border-t border-[var(--border)] bg-[var(--paper)] py-24 md:py-32 lg:py-40"
        aria-labelledby="about-preview-heading"
      >
        <div className="site-container">
          <div className="mx-auto max-w-5xl text-center">
            <Reveal>
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[var(--ink)]">
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
                  I&apos;m Julie Lupex, a full-stack developer focused on
                  turning business needs, technical challenges, and ideas into
                  practical digital products.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="mx-auto mt-14 max-w-4xl border-y border-[var(--border)] py-8">
                <div className="flex flex-col items-center justify-center gap-5 text-sm leading-7 text-[var(--body)] md:flex-row md:gap-8">
                  <span className="inline-flex items-center gap-3">
                    <span
                      className="relative flex h-2.5 w-2.5 shrink-0"
                      aria-hidden="true"
                    >
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink opacity-60" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ink" />
                    </span>

                    <span>
                      <span className="font-medium text-[var(--ink)]">
                        Available
                      </span>{" "}
                      for freelance projects
                    </span>
                  </span>

                  <span className="hidden h-5 w-px bg-[var(--border)] md:block" />

                  <span>
                    <span className="font-medium text-[var(--ink)]">
                      Working remotely
                    </span>{" "}
                    · Available worldwide
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-10">
                <Link
                  href="/about"
                  className="btn btn-primary inline-flex items-center"
                >
                  More About Julie
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What I Build */}
      <section
        id="solutions"
        className="border-t border-ink/10 bg-paper py-24 sm:py-28"
        aria-labelledby="solutions-heading"
      >
        <div className="site-container">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="What I build"
                title="Digital solutions built around the problem."
                description="You do not need to know which technology to choose."
              />
            </Reveal>

            <Reveal delay={120}>
              <Link
                href="/services"
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-muted"
              >
                View all services
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {solutions.map((solution, index) => (
              <Reveal key={solution.number} delay={index * 90}>
                <Link
                  href={solution.href}
                  className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-paper-2 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink/30 sm:p-9"
                >
                  <span className="font-mono text-xs font-semibold tracking-[0.18em] text-muted">
                    {solution.number}
                  </span>

                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                    {solution.title}
                  </h3>

                  <p className="mt-3 max-w-xl flex-1 text-sm leading-6 text-ink/65 sm:text-base sm:leading-7">
                    {solution.text}
                  </p>

                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-all duration-300 group-hover:gap-3">
                    Explore
                    <ArrowRight size={15} aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects from Supabase */}
      <section
        id="featured-work"
        className="border-t border-ink/10 bg-paper-2 py-24 sm:py-28"
        aria-labelledby="featured-work-heading"
      >
        <div className="site-container">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Selected work"
                title="Projects built with purpose."
                description="Explore completed work and proposed solutions, each shaped around a clear problem and a thoughtful approach."
              />
            </Reveal>

            <Reveal delay={100}>
              <Link
                href="/work"
                className="inline-flex w-fit shrink-0 items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-muted"
              >
                All projects
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          {featuredProjects.length > 0 ? (
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <Reveal key={project.id} delay={index * 80}>
                  <article className="flex h-full flex-col rounded-3xl border border-ink/10 bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink/30 hover:shadow-[0_24px_50px_-24px_rgba(15,13,20,0.2)] sm:p-8">
                    <div className="flex items-center justify-between gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-white">
                        <BriefcaseBusiness size={20} aria-hidden="true" />
                      </span>

                      <span className="rounded-full border border-ink/10 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-ink/65">
                        {project.project_type === "complete"
                          ? "Completed"
                          : "Proposed"}
                      </span>
                    </div>

                    <p className="mt-7 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                      {project.category || "Digital project"}
                    </p>

                    <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
                      {project.title}
                    </h3>

                    {project.subtitle && (
                      <p className="mt-2 text-sm font-medium leading-6 text-ink/75">
                        {project.subtitle}
                      </p>
                    )}

                    {project.summary && (
                      <p className="mt-4 flex-1 text-sm leading-7 text-body">
                        {project.summary}
                      </p>
                    )}

                    <Link
                      href={`/work/${project.slug}`}
                      className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-ink transition-all hover:gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                    >
                      View case study
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-3xl border border-dashed border-ink/20 px-6 py-12 text-center sm:px-10">
              <p
                id="featured-work-heading"
                className="font-display text-xl font-medium text-ink"
              >
                Your projects will appear here
              </p>

              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-body">
                Publish projects through the admin dashboard and mark them as
                featured to display them on the homepage.
              </p>

              <Link
                href="/work"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:gap-3"
              >
                Explore projects
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Blog preview */}
      <section
        id="blog-preview"
        className="border-t border-ink/10 bg-paper py-24 sm:py-28"
        aria-labelledby="blog-preview-heading"
      >
        <div className="site-container">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <Reveal>
              <div id="blog-preview-heading">
                <SectionHeading
                  eyebrow="The Knowledge Hub"
                  title="Ideas, code & digital craft"
                  description="Notes on users, interfaces, performance, and building useful digital products."
                />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <Link href="/blog" className="btn btn-ghost-dark">
                All Articles
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 90}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

