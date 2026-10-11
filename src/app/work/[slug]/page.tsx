
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Globe2,
  Lightbulb,
} from "lucide-react";

import Reveal from "@/components/Reveal";
import ProjectScreenshotGallery from "@/components/work/ProjectScreenshotGallery";
import { createSupabaseServerClient } from "@/lib/supabase-server";

const BUCKET = "portfolio-projects";
const SIGNED_URL_TTL = 60 * 60;

type PortfolioProject = {
  id: string;
  title: string;
  slug: string;
  subtitle: string | null;
  project_type: string;
  category: string | null;
  summary: string | null;
  project_story: string | null;
  problem: string | null;
  approach: string | null;
  technologies: string[] | null;
  result: string | null;
  measurable_outcomes: string | null;
  testimonial_quote: string | null;
  testimonial_author: string | null;
  live_url: string | null;
  github_url: string | null;
  featured: boolean;
};

type ProjectMedia = {
  id: string;
  media_type: "desktop" | "mobile" | "gallery";
  storage_path: string;
  alt_text: string | null;
  caption: string | null;
  sort_order: number;
  created_at: string;
};

type PreviewImage = {
  id: string;
  url: string;
  alt: string;
  caption: string | null;
};

function CaseStudySection({
  number,
  title,
  content,
}: {
  number: string;
  title: string;
  content: string;
}) {
  return (
    <section className="grid gap-4 border-t border-ink/10 py-8 sm:grid-cols-[100px_1fr] sm:gap-8 sm:py-10">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-muted">
        {number}
      </p>

      <div>
        <h2 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
          {title}
        </h2>

        <p className="mt-4 whitespace-pre-line text-sm leading-8 text-body sm:text-base">
          {content}
        </p>
      </div>
    </section>
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("projects")
    .select(
      "id, title, slug, subtitle, project_type, category, summary, project_story, problem, approach, technologies, result, measurable_outcomes, testimonial_quote, testimonial_author, live_url, github_url, featured",
    )
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (error || !data) {
    notFound();
  }

  const project = data as PortfolioProject;
  const isComplete = project.project_type === "complete";

  const { data: mediaData, error: mediaError } = await supabase
    .from("project_media")
    .select(
      "id, media_type, storage_path, alt_text, caption, sort_order, created_at",
    )
    .eq("project_id", project.id)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  const mediaRecords = (mediaData ?? []) as ProjectMedia[];

  const previews = await Promise.all(
    mediaRecords.map(async (item) => {
      const { data: signedData, error: signedError } = await supabase.storage
        .from(BUCKET)
        .createSignedUrl(item.storage_path, SIGNED_URL_TTL);

      return {
        item,
        preview:
          signedError || !signedData
            ? null
            : {
                id: item.id,
                url: signedData.signedUrl,
                alt:
                  item.alt_text ??
                  `${project.title} ${item.media_type} website preview`,
                caption: item.caption,
              },
      };
    }),
  );

  const desktopPreviews = previews
    .filter(({ item }) => item.media_type === "desktop")
    .map(({ preview }) => preview)
    .filter((preview): preview is PreviewImage => preview !== null);

  const mobilePreviews = previews
    .filter(({ item }) => item.media_type === "mobile")
    .map(({ preview }) => preview)
    .filter((preview): preview is PreviewImage => preview !== null);

  const galleryPreviews = previews
    .filter(({ item }) => item.media_type === "gallery")
    .map(({ preview }) => preview)
    .filter((preview): preview is PreviewImage => preview !== null);

  return (
    <main id="main" className="min-h-screen bg-paper text-ink">
      <section className="border-b border-ink/10 bg-paper-2 pb-16 pt-32 sm:pb-24 sm:pt-40">
        <div className="site-container">
          <Reveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink/70 transition hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Back to projects
            </Link>

            <div className="mt-12 flex flex-wrap items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-white">
                {isComplete ? (
                  <BriefcaseBusiness size={20} aria-hidden="true" />
                ) : (
                  <Lightbulb size={20} aria-hidden="true" />
                )}
              </span>

              <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                {isComplete ? "Complete project" : "Proposed project"}
              </span>

              {project.category ? (
                <>
                  <span className="text-ink/30" aria-hidden="true">
                    /
                  </span>
                  <span className="text-sm text-body">{project.category}</span>
                </>
              ) : null}

              {project.featured ? (
                <span className="rounded-full border border-ink/15 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-ink/70">
                  Featured
                </span>
              ) : null}
            </div>

            <h1 className="mt-7 max-w-5xl font-display text-5xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>

            {project.subtitle ? (
              <p className="mt-5 max-w-3xl text-lg font-medium leading-8 text-ink/75 sm:text-xl">
                {project.subtitle}
              </p>
            ) : null}

            {project.summary ? (
              <p className="mt-6 max-w-3xl text-base leading-8 text-body sm:text-lg">
                {project.summary}
              </p>
            ) : null}

            <div className="mt-9 flex flex-wrap gap-3">
              {project.live_url ? (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Globe2 size={16} aria-hidden="true" />
                  View Live Concept
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ) : null}

              {project.github_url ? (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-ink/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                >
                  <Code2 size={17} aria-hidden="true" />
                  View Source Code
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ) : null}
            </div>

            <p className="mt-5 text-xs text-muted">
              URL slug: <span className="font-mono">{project.slug}</span>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="site-container">
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Project previews
            </p>

            <h2 className="mt-4 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
              One project. Two screen sizes.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-body sm:text-base">
              Explore the complete desktop and mobile experience. Browse each
              screenshot or open the full collection to see every view.
            </p>
          </Reveal>

          {mediaError ? (
            <p className="mt-8 border border-ink/10 p-5 text-sm text-body">
              Project screenshots are temporarily unavailable.
            </p>
          ) : (
            <ProjectScreenshotGallery
              desktopImages={desktopPreviews}
              mobileImages={mobilePreviews}
            />
          )}
        </div>
      </section>

      {project.project_story ? (
        <section className="border-t border-ink/10 py-16 sm:py-20">
          <div className="site-container grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <Reveal>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Project story
              </p>
              <h2 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
                The context behind the work.
              </h2>
            </Reveal>

            <p className="whitespace-pre-line text-base leading-8 text-body">
              {project.project_story}
            </p>
          </div>
        </section>
      ) : null}

      <section className="border-t border-ink/10 py-16 sm:py-24">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
            <Reveal>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Case study
              </p>
              <h2 className="mt-4 max-w-md font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                The thinking behind the work.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-body">
                {isComplete
                  ? "Explore the challenge, design decisions, and outcomes of this project."
                  : "Explore the challenge, proposed solution, and intended outcomes of this concept."}
              </p>
            </Reveal>

            <div>
              {project.problem ? (
                <CaseStudySection
                  number="01 / Challenge"
                  title="The challenge"
                  content={project.problem}
                />
              ) : null}

              {project.approach ? (
                <CaseStudySection
                  number="02 / Solution"
                  title="The solution"
                  content={project.approach}
                />
              ) : null}

              {project.result ? (
                <CaseStudySection
                  number="03 / Outcome"
                  title={isComplete ? "The outcome" : "Expected outcome"}
                  content={project.result}
                />
              ) : null}

              {project.measurable_outcomes ? (
                <CaseStudySection
                  number="04 / Evidence"
                  title={
                    isComplete ? "Measurable outcomes" : "Intended outcomes"
                  }
                  content={project.measurable_outcomes}
                />
              ) : null}

              {!project.problem &&
              !project.approach &&
              !project.result &&
              !project.measurable_outcomes ? (
                <div className="rounded-3xl border border-dashed border-ink/20 p-8 sm:p-10">
                  <h3 className="font-display text-xl font-medium">
                    More project details coming soon
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-body">
                    The full case study will appear here when its details are
                    added through the admin dashboard.
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {project.technologies?.length ? (
        <section className="border-t border-ink/10 bg-paper-2 py-14 sm:py-20">
          <div className="site-container">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Technology
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight">
              Tools behind the build.
            </h2>

            <div className="mt-7 flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-medium"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {galleryPreviews.length ? (
        <section className="border-t border-ink/10 py-16 sm:py-24">
          <div className="site-container">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              More views
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              Inside the experience.
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {galleryPreviews.map((image) => (
                <figure
                  key={image.id}
                  className="overflow-hidden rounded-2xl border border-ink/10 bg-white"
                >
                  <a
                    href={image.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open full-size screenshot: ${image.alt}`}
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      width={1200}
                      height={900}
                      unoptimized
                      className="h-auto max-h-[600px] w-full object-contain"
                    />
                  </a>

                  {image.caption ? (
                    <figcaption className="p-4 text-sm text-body">
                      {image.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {project.testimonial_quote ? (
        <section className="border-t border-ink/10 bg-paper-2 py-16 sm:py-20">
          <div className="site-container max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Client perspective
            </p>
            <blockquote className="mt-6 font-display text-2xl leading-relaxed tracking-tight sm:text-3xl">
              “{project.testimonial_quote}”
            </blockquote>

            {project.testimonial_author ? (
              <p className="mt-6 text-sm font-semibold text-body">
                {project.testimonial_author}
              </p>
            ) : null}
          </div>
        </section>
      ) : null}

      <section className="border-t border-ink/10 bg-paper-2 py-12 sm:py-16">
        <div className="site-container flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
              More work
            </p>
            <h2 className="mt-2 font-display text-2xl font-medium tracking-tight">
              Explore other projects.
            </h2>
          </div>

          <Link
            href="/work"
            prefetch
            className="inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-semibold transition hover:border-ink/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          >
            All projects
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}