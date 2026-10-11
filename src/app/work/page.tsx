import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Lightbulb,
} from "lucide-react";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
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
  problem: string | null;
  approach: string | null;
  live_url: string | null;
  featured: boolean;
  sort_order?: number;
  created_at?: string;
};

type ProjectMedia = {
  id: string;
  project_id: string;
  media_type: "desktop" | "mobile" | "gallery";
  storage_path: string;
  alt_text: string | null;
  caption: string | null;
  sort_order: number;
  created_at: string;
};

type ProjectPreview = {
  url: string;
  alt: string;
  caption: string | null;
};

type ProjectPreviews = {
  desktop: ProjectPreview | null;
  mobile: ProjectPreview | null;
};

const EMPTY_PREVIEWS: ProjectPreviews = {
  desktop: null,
  mobile: null,
};

function ProjectCard({
  project,
  previews,
}: {
  project: PortfolioProject;
  previews: ProjectPreviews;
}) {
  const isComplete = project.project_type === "complete";

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white transition-[border-color,box-shadow] duration-200 hover:border-ink/30 hover:shadow-[0_24px_50px_-24px_rgba(15,13,20,0.25)]">
      <div className="relative border-b border-ink/10 bg-paper-2 p-4 sm:p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
            {isComplete ? "Desktop preview" : "Concept preview"}
          </span>

          <span className="rounded-full border border-ink/10 bg-white px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink/70">
            {isComplete ? "Complete" : "Proposed"}
          </span>
        </div>

        {/* Desktop preview */}
        <div className="hidden md:block">
          <div className="overflow-hidden rounded-xl border border-ink/15 bg-white shadow-sm">
            <div className="flex h-7 items-center gap-1.5 border-b border-ink/10 px-3">
              <span className="h-2 w-2 rounded-full bg-ink/20" />
              <span className="h-2 w-2 rounded-full bg-ink/20" />
              <span className="h-2 w-2 rounded-full bg-ink/20" />

              <span className="ml-2 min-w-0 truncate rounded-md bg-paper px-3 py-1 font-mono text-[9px] text-muted">
                {project.slug}
              </span>
            </div>

            {previews.desktop ? (
              <a
                href={previews.desktop.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open desktop screenshot for ${project.title}`}
                className="block"
              >
                <Image
                  src={previews.desktop.url}
                  alt={previews.desktop.alt}
                  width={1440}
                  height={1000}
                  unoptimized
                  loading="lazy"
                  className="h-auto max-h-[260px] w-full object-cover object-top"
                />
              </a>
            ) : (
              <div className="flex min-h-[190px] items-center justify-center px-5 text-center">
                <div>
                  <BriefcaseBusiness
                    size={25}
                    className="mx-auto text-ink/35"
                    aria-hidden="true"
                  />
                  <p className="mt-3 text-sm font-medium text-ink">
                    Desktop preview coming soon
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted">
                    Add a desktop screenshot in the media manager.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile preview */}
        <div className="md:hidden">
          <div className="mx-auto max-w-[220px] rounded-[1.65rem] border-[5px] border-ink bg-ink p-1.5 shadow-lg">
            <div className="overflow-hidden rounded-[1.15rem] bg-white">
              <div className="flex h-5 items-center justify-center bg-white">
                <span className="h-1 w-10 rounded-full bg-ink/15" />
              </div>

              {previews.mobile ? (
                <a
                  href={previews.mobile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open mobile screenshot for ${project.title}`}
                  className="block"
                >
                  <Image
                    src={previews.mobile.url}
                    alt={previews.mobile.alt}
                    width={390}
                    height={844}
                    unoptimized
                    loading="lazy"
                    className="h-auto max-h-[310px] w-full object-cover object-top"
                  />
                </a>
              ) : (
                <div className="flex min-h-[250px] items-center justify-center px-4 text-center">
                  <div>
                    <BriefcaseBusiness
                      size={23}
                      className="mx-auto text-ink/35"
                      aria-hidden="true"
                    />
                    <p className="mt-3 text-xs font-medium text-ink">
                      Mobile preview coming soon
                    </p>
                    <p className="mt-1 text-[10px] leading-4 text-muted">
                      Add a mobile screenshot in the media manager.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {project.featured && (
          <span className="absolute right-7 top-[3.25rem] rounded-full border border-ink/10 bg-white px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-wider text-ink/70">
            Featured
          </span>
        )}
      </div>

      {/* Project information */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-ink text-white">
            {isComplete ? (
              <BriefcaseBusiness size={17} aria-hidden="true" />
            ) : (
              <Lightbulb size={17} aria-hidden="true" />
            )}
          </span>

          <p className="min-w-0 truncate font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
            {project.category ||
              (isComplete ? "Completed work" : "Project proposal")}
          </p>
        </div>

        <h3 className="mt-5 break-words font-display text-2xl font-semibold tracking-tight text-ink">
          {project.title}
        </h3>

        <p className="mt-2 break-all font-mono text-xs text-muted">
          /work/{project.slug}
        </p>

        {isComplete ? (
          <>
            <p className="mt-3 text-xs font-medium uppercase tracking-wider text-ink/60">
              Project type: Complete project
            </p>

            {project.subtitle && (
              <p className="mt-3 text-sm font-medium leading-6 text-ink/75">
                {project.subtitle}
              </p>
            )}

            {project.summary ? (
              <p className="mt-3 flex-1 whitespace-pre-line text-sm leading-7 text-body">
                {project.summary}
              </p>
            ) : (
              <div className="flex-1" />
            )}
          </>
        ) : (
          <>
            {project.subtitle && (
              <p className="mt-3 text-sm font-medium leading-6 text-ink/75">
                {project.subtitle}
              </p>
            )}

            {project.problem && (
              <div className="mt-5">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                  The challenge
                </p>
                <p className="mt-2 whitespace-pre-line text-sm leading-7 text-body">
                  {project.problem}
                </p>
              </div>
            )}

            {project.approach && (
              <div className="mt-4">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                  The proposed solution
                </p>
                <p className="mt-2 whitespace-pre-line text-sm leading-7 text-body">
                  {project.approach}
                </p>
              </div>
            )}

            {!project.problem && !project.approach ? (
              <p className="mt-4 flex-1 text-sm leading-7 text-body">
                Explore the project concept and its intended digital experience.
              </p>
            ) : (
              <div className="flex-1" />
            )}
          </>
        )}

        {/* Actions */}
        <div className="mt-7 flex flex-col gap-3 border-t border-ink/10 pt-5">
          {project.live_url ? (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full"
            >
              View Live Concept
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="inline-flex min-h-11 cursor-not-allowed items-center justify-center gap-2 rounded-full border border-ink/10 bg-paper-2 px-5 py-3 text-sm font-medium text-muted"
              title="Add a live URL through the admin project editor"
            >
              Live concept coming soon
            </span>
          )}

          <Link
            href={`/work/${project.slug}`}
            prefetch
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors duration-150 hover:border-ink/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            aria-label={`View case study for ${project.title}`}
          >
            View Case Study
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="rounded-3xl border border-dashed border-ink/20 px-6 py-12 text-center sm:px-10">
      <p className="font-display text-xl font-medium text-ink">
        Projects are on the way
      </p>
      <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-body">
        {message}
      </p>
    </div>
  );
}

export default async function WorkPage() {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("projects")
    .select(
      "id, title, slug, subtitle, project_type, category, summary, problem, approach, live_url, featured, sort_order, created_at",
    )
    .eq("published", true)
    .order("featured", { ascending: false })
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  const projects = (data ?? []) as PortfolioProject[];

  const completeProjects = projects.filter(
    (project) => project.project_type === "complete",
  );

  const proposedProjects = projects.filter(
    (project) => project.project_type === "concept",
  );

  const previewsByProject: Record<string, ProjectPreviews> = {};

  for (const project of projects) {
    previewsByProject[project.id] = {
      desktop: null,
      mobile: null,
    };
  }

  if (!error && projects.length > 0) {
    const projectIds = projects.map((project) => project.id);

    const { data: mediaData } = await supabase
      .from("project_media")
      .select(
        "id, project_id, media_type, storage_path, alt_text, caption, sort_order, created_at",
      )
      .in("project_id", projectIds)
      .in("media_type", ["desktop", "mobile"])
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false });

    const mediaRecords = (mediaData ?? []) as ProjectMedia[];

    if (mediaRecords.length > 0) {
      const { data: signedUrls, error: signedUrlsError } =
        await supabase.storage
          .from(BUCKET)
          .createSignedUrls(
            mediaRecords.map((item) => item.storage_path),
            SIGNED_URL_TTL,
          );

      if (!signedUrlsError && signedUrls) {
        const signedMedia = mediaRecords.map((item, index) => {
          const signedData = signedUrls[index];

          const preview: ProjectPreview | null =
            !signedData?.signedUrl || signedData.error
              ? null
              : {
                  url: signedData.signedUrl,
                  alt:
                    item.alt_text ??
                    `${item.media_type} website preview`,
                  caption: item.caption,
                };

          return {
            projectId: item.project_id,
            mediaType: item.media_type,
            preview,
          };
        });

        for (const { projectId, mediaType, preview } of signedMedia) {
          if (!preview) continue;

          const current = previewsByProject[projectId];

          if (!current) continue;

          if (mediaType === "desktop" && !current.desktop) {
            current.desktop = preview;
          }

          if (mediaType === "mobile" && !current.mobile) {
            current.mobile = preview;
          }
        }
      }
    }
  }

  return (
    <main id="main" className="min-h-screen bg-paper text-ink">
      {/* Page introduction */}
      <section className="border-b border-ink/10 bg-paper-2 pb-14 pt-32 sm:pb-20 sm:pt-40">
        <div className="site-container">
          <Reveal>
            <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              Selected work
            </p>

            <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Projects built to solve real problems.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-body sm:text-lg">
              Explore completed projects and proposed digital solutions.
              Each project tells a story about the problem, the approach, and
              the work behind the outcome.
            </p>
          </Reveal>

          <nav
            aria-label="Project categories"
            className="mt-10 flex flex-wrap gap-3"
          >
            <a href="#complete-projects" className="btn btn-primary">
              Complete Projects
              <ArrowDownRight size={16} aria-hidden="true" />
            </a>

            <a
              href="#proposed-projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors duration-150 hover:border-ink/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            >
              Proposed Projects
              <ArrowDownRight size={16} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </section>

      {/* Completed projects */}
      <section
        id="complete-projects"
        className="scroll-mt-24 py-20 sm:py-28"
        aria-labelledby="complete-projects-heading"
      >
        <div className="site-container">
          <Reveal>
            <SectionHeading
              eyebrow="01 / Completed work"
              title="Complete Projects"
              description="Finished websites, applications, and digital products built around real requirements."
            />
          </Reveal>

          {error ? (
            <p
              role="alert"
              className="mt-10 rounded-2xl border border-red-300 bg-red-50 p-5 text-sm leading-7 text-red-900"
            >
              Projects could not be loaded right now. Please try again later.
            </p>
          ) : completeProjects.length > 0 ? (
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {completeProjects.map((project, index) => (
                <Reveal key={project.id} delay={index * 40}>
                  <ProjectCard
                    project={project}
                    previews={previewsByProject[project.id] ?? EMPTY_PREVIEWS}
                  />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-12">
              <EmptyState message="Completed projects will appear here after they are added and published through the admin dashboard." />
            </div>
          )}
        </div>
      </section>

      {/* Proposed projects */}
      <section
        id="proposed-projects"
        className="scroll-mt-24 border-t border-ink/10 bg-paper-2 py-20 sm:py-28"
        aria-labelledby="proposed-projects-heading"
      >
        <div className="site-container">
          <Reveal>
            <SectionHeading
              eyebrow="02 / Ideas in development"
              title="Proposed Projects"
              description="Concepts and proposed solutions that explore opportunities, user needs, and possible digital experiences."
            />
          </Reveal>

          {error ? (
            <p role="alert" className="mt-10 text-sm leading-7 text-body">
              Proposed projects could not be loaded right now.
            </p>
          ) : proposedProjects.length > 0 ? (
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {proposedProjects.map((project, index) => (
                <Reveal key={project.id} delay={index * 40}>
                  <ProjectCard
                    project={project}
                    previews={previewsByProject[project.id] ?? EMPTY_PREVIEWS}
                  />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-12">
              <EmptyState message="Proposed projects will appear here when you publish concepts from the admin dashboard." />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}