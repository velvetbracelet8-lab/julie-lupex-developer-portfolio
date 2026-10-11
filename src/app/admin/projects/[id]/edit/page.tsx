
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";

import AdminNavigation from "@/components/admin/AdminNavigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";

type EditProjectPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ error?: string }>;
};

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
  published: boolean;
};

const fieldClass =
  "w-full border border-[var(--border)] bg-[var(--paper)] px-4 py-3 text-sm outline-none focus:border-[var(--ink)]";

const labelClass = "mb-2 block text-sm font-medium";

function normalizeSlug(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getOptionalText(formData: FormData, name: string) {
  const value = String(formData.get(name) ?? "").trim();
  return value || null;
}

function isValidHttpUrl(value: string | null) {
  if (!value) return true;

  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

export default async function EditProjectPage({
  params,
  searchParams,
}: EditProjectPageProps) {
  const { id } = await params;
  const query = await searchParams;

  if (
    !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
      id,
    )
  ) {
    notFound();
  }

  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { data: adminUser, error: adminError } = await supabase
    .from("admin_users")
    .select("role")
    .eq("user_id", user.id)
    .maybeSingle();

  if (adminError || !adminUser) {
    redirect("/");
  }

  const { data, error } = await supabase
    .from("projects")
    .select(
      "id, title, slug, subtitle, project_type, category, summary, project_story, problem, approach, technologies, result, measurable_outcomes, testimonial_quote, testimonial_author, live_url, github_url, featured, published",
    )
    .eq("id", id)
    .maybeSingle();

  if (error) {
    return (
      <main className="min-h-screen bg-[var(--paper)] px-5 py-10 text-[var(--ink)] sm:px-8 sm:py-12">
        <div className="mx-auto w-full max-w-4xl">
          <AdminNavigation role={adminUser.role} />

          <Link
            href="/admin/projects"
            className="inline-flex items-center gap-2 text-sm text-[var(--body)] hover:text-[var(--ink)]"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to projects
          </Link>

          <div
            role="alert"
            className="mt-8 border border-red-300 bg-red-50 p-5 text-sm leading-6 text-red-900"
          >
            The project could not be loaded. Check the database columns,
            permissions, and try again.
          </div>
        </div>
      </main>
    );
  }

  if (!data) {
    notFound();
  }

  const project = data as PortfolioProject;

  async function updateProject(formData: FormData) {
    "use server";

    const serverSupabase = await createSupabaseServerClient();

    const {
      data: { user: currentUser },
    } = await serverSupabase.auth.getUser();

    if (!currentUser) {
      redirect("/admin/login");
    }

    const { data: currentAdmin, error: currentAdminError } =
      await serverSupabase
        .from("admin_users")
        .select("role")
        .eq("user_id", currentUser.id)
        .maybeSingle();

    if (currentAdminError || !currentAdmin) {
      redirect("/");
    }

    const title = String(formData.get("title") ?? "").trim();
    const requestedSlug = String(formData.get("slug") ?? "").trim();
    const projectType = String(formData.get("project_type") ?? "").trim();

    const slug = normalizeSlug(requestedSlug || title);

    if (
      !title ||
      title.length > 160 ||
      !slug ||
      slug.length > 180 ||
      !["complete", "concept"].includes(projectType)
    ) {
      redirect(`/admin/projects/${id}/edit?error=required`);
    }

    const liveUrl = getOptionalText(formData, "live_url");
    const githubUrl = getOptionalText(formData, "github_url");

    if (
      (liveUrl && liveUrl.length > 2000) ||
      (githubUrl && githubUrl.length > 2000) ||
      !isValidHttpUrl(liveUrl) ||
      !isValidHttpUrl(githubUrl)
    ) {
      redirect(`/admin/projects/${id}/edit?error=url_invalid`);
    }

    const optionalText = (name: string, maxLength: number) => {
      const value = getOptionalText(formData, name);

      if (value && value.length > maxLength) {
        return undefined;
      }

      return value;
    };

    const subtitle = optionalText("subtitle", 200);
    const category = optionalText("category", 100);
    const summary = optionalText("summary", 5000);
    const projectStory = optionalText("project_story", 15000);
    const problem = optionalText("problem", 10000);
    const approach = optionalText("approach", 15000);
    const result = optionalText("result", 10000);
    const measurableOutcomes = optionalText("measurable_outcomes", 10000);
    const testimonialQuote = optionalText("testimonial_quote", 5000);
    const testimonialAuthor = optionalText("testimonial_author", 200);
    const technologiesInput = String(
      formData.get("technologies") ?? "",
    ).trim();

    if (
      subtitle === undefined ||
      category === undefined ||
      summary === undefined ||
      projectStory === undefined ||
      problem === undefined ||
      approach === undefined ||
      result === undefined ||
      measurableOutcomes === undefined ||
      testimonialQuote === undefined ||
      testimonialAuthor === undefined ||
      technologiesInput.length > 2000
    ) {
      redirect(`/admin/projects/${id}/edit?error=too_long`);
    }

    const technologies = [
      ...new Set(
        technologiesInput
          .split(",")
          .map((technology) => technology.trim())
          .filter(Boolean),
      ),
    ];

    if (technologies.some((technology) => technology.length > 100)) {
      redirect(`/admin/projects/${id}/edit?error=technology_invalid`);
    }

    const { data: updatedProject, error: updateError } =
      await serverSupabase
        .from("projects")
        .update({
          title,
          slug,
          project_type: projectType,
          subtitle,
          category,
          summary,
          project_story: projectStory,
          problem,
          approach,
          technologies,
          result,
          measurable_outcomes: measurableOutcomes,
          testimonial_quote: testimonialQuote,
          testimonial_author: testimonialAuthor,
          live_url: liveUrl,
          github_url: githubUrl,
          featured: formData.get("featured") === "on",
          published: formData.get("published") === "on",
          updated_at: new Date().toISOString(),
        })
        .eq("id", id)
        .select("id")
        .maybeSingle();

    if (updateError || !updatedProject) {
      const errorCode =
        updateError?.code === "23505" ? "slug_exists" : "save_failed";

      redirect(`/admin/projects/${id}/edit?error=${errorCode}`);
    }

    revalidatePath("/admin");
    revalidatePath("/admin/projects");
    revalidatePath(`/admin/projects/${id}/edit`);
    revalidatePath("/");
    revalidatePath("/work");
    revalidatePath(`/work/${slug}`);

    redirect("/admin/projects");
  }

  const errorMessages: Record<string, string> = {
    required: "Enter a valid title, slug, and project type.",
    slug_exists: "That URL slug is already in use. Choose another one.",
    url_invalid: "Enter valid HTTP or HTTPS URLs for your project links.",
    too_long: "One or more fields exceed the permitted length.",
    technology_invalid:
      "Each technology name must be 100 characters or fewer.",
    save_failed:
      "The project could not be saved. Check your permissions and try again.",
  };

  return (
    <main className="min-h-screen bg-[var(--paper)] px-5 py-10 text-[var(--ink)] sm:px-8 sm:py-12">
      <div className="mx-auto w-full max-w-4xl">
        <AdminNavigation role={adminUser.role} />

        <Link
          href="/admin/projects"
          className="inline-flex items-center gap-2 text-sm text-[var(--body)] transition-colors hover:text-[var(--ink)]"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to projects
        </Link>

        <header className="mt-8 border-b border-[var(--border)] pb-8">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
            Portfolio CMS
          </p>

          <h1 className="font-display text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
            Edit project
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--body)]">
            Edit the project story, challenge, solution, technologies,
            outcomes, testimonial, links, and publication settings.
          </p>
        </header>

        {query.error && errorMessages[query.error] ? (
          <p
            role="alert"
            className="mt-6 border border-red-300 bg-red-50 p-4 text-sm leading-6 text-red-900"
          >
            {errorMessages[query.error]}
          </p>
        ) : null}

        <form action={updateProject} className="mt-8 space-y-8">
          <section className="space-y-5 border border-[var(--border)] bg-[var(--white)] p-5 sm:p-8">
            <h2 className="font-display text-xl font-medium">
              Basic information
            </h2>

            <div>
              <label htmlFor="title" className={labelClass}>
                Project title *
              </label>
              <input
                id="title"
                name="title"
                required
                maxLength={160}
                defaultValue={project.title}
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="slug" className={labelClass}>
                URL slug *
              </label>
              <input
                id="slug"
                name="slug"
                required
                maxLength={180}
                pattern="[A-Za-z0-9 -]+"
                defaultValue={project.slug}
                className={fieldClass}
              />
              <p className="mt-2 text-xs leading-5 text-[var(--muted)]">
                The slug determines the project URL and must be unique.
              </p>
            </div>

            <div>
              <label htmlFor="project_type" className={labelClass}>
                Project type *
              </label>
              <select
                id="project_type"
                name="project_type"
                required
                defaultValue={project.project_type}
                className={fieldClass}
              >
                <option value="complete">Complete Project</option>
                <option value="concept">Concept</option>
              </select>
            </div>

            <div>
              <label htmlFor="category" className={labelClass}>
                Category
              </label>
              <input
                id="category"
                name="category"
                maxLength={100}
                defaultValue={project.category ?? ""}
                placeholder="e.g. Healthcare & Dental"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="subtitle" className={labelClass}>
                Subtitle
              </label>
              <input
                id="subtitle"
                name="subtitle"
                maxLength={200}
                defaultValue={project.subtitle ?? ""}
                placeholder="A short description beneath the title"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="summary" className={labelClass}>
                Project summary
              </label>
              <textarea
                id="summary"
                name="summary"
                rows={4}
                maxLength={5000}
                defaultValue={project.summary ?? ""}
                placeholder="What is this project, and who is it for?"
                className={`${fieldClass} leading-6`}
              />
            </div>

            <div>
              <label htmlFor="project_story" className={labelClass}>
                The story behind the project
              </label>
              <textarea
                id="project_story"
                name="project_story"
                rows={6}
                maxLength={15000}
                defaultValue={project.project_story ?? ""}
                placeholder="Describe the background, purpose, audience, and goals."
                className={`${fieldClass} leading-6`}
              />
            </div>
          </section>

          <section className="space-y-5 border border-[var(--border)] bg-[var(--white)] p-5 sm:p-8">
            <h2 className="font-display text-xl font-medium">
              The client&apos;s challenge
            </h2>

            <div>
              <label htmlFor="problem" className={labelClass}>
                The problem
              </label>
              <textarea
                id="problem"
                name="problem"
                rows={5}
                maxLength={10000}
                defaultValue={project.problem ?? ""}
                placeholder="What challenge or pain point needed to be addressed?"
                className={`${fieldClass} leading-6`}
              />
            </div>
          </section>

          <section className="space-y-5 border border-[var(--border)] bg-[var(--white)] p-5 sm:p-8">
            <h2 className="font-display text-xl font-medium">
              Your solution
            </h2>

            <div>
              <label htmlFor="approach" className={labelClass}>
                Approach and solution
              </label>
              <textarea
                id="approach"
                name="approach"
                rows={6}
                maxLength={15000}
                defaultValue={project.approach ?? ""}
                placeholder="Explain your design decisions, development process, and implementation."
                className={`${fieldClass} leading-6`}
              />
            </div>

            <div>
              <label htmlFor="technologies" className={labelClass}>
                Technologies used
              </label>
              <input
                id="technologies"
                name="technologies"
                maxLength={2000}
                defaultValue={project.technologies?.join(", ") ?? ""}
                placeholder="e.g. Next.js, React, TypeScript, Tailwind CSS"
                className={fieldClass}
              />
              <p className="mt-2 text-xs leading-5 text-[var(--muted)]">
                Separate technologies with commas. Existing technologies
                will be loaded here when editing.
              </p>
            </div>
          </section>

          <section className="space-y-5 border border-[var(--border)] bg-[var(--white)] p-5 sm:p-8">
            <h2 className="font-display text-xl font-medium">
              Results and proof
            </h2>

            <div>
              <label htmlFor="result" className={labelClass}>
                Results and outcomes
              </label>
              <textarea
                id="result"
                name="result"
                rows={4}
                maxLength={10000}
                defaultValue={project.result ?? ""}
                placeholder="Describe the overall outcome and what the project demonstrates."
                className={`${fieldClass} leading-6`}
              />
            </div>

            <div>
              <label htmlFor="measurable_outcomes" className={labelClass}>
                Measurable outcomes and metrics
              </label>
              <textarea
                id="measurable_outcomes"
                name="measurable_outcomes"
                rows={5}
                maxLength={10000}
                defaultValue={project.measurable_outcomes ?? ""}
                placeholder="Enter test metrics, performance scores, verified results, or labelled sample metrics."
                className={`${fieldClass} leading-6`}
              />
            </div>

            <div className="border-t border-[var(--border)] pt-5">
              <h3 className="font-display text-lg font-medium">
                Client testimonial
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--body)]">
                Enter actual client feedback or clearly identified sample
                content for testing the case-study layout.
              </p>
            </div>

            <div>
              <label htmlFor="testimonial_quote" className={labelClass}>
                Testimonial quote
              </label>
              <textarea
                id="testimonial_quote"
                name="testimonial_quote"
                rows={4}
                maxLength={5000}
                defaultValue={project.testimonial_quote ?? ""}
                placeholder="Client quote or illustrative test content"
                className={`${fieldClass} leading-6`}
              />
            </div>

            <div>
              <label htmlFor="testimonial_author" className={labelClass}>
                Client name or attribution
              </label>
              <input
                id="testimonial_author"
                name="testimonial_author"
                maxLength={200}
                defaultValue={project.testimonial_author ?? ""}
                placeholder="e.g. Sample Client — Test Content"
                className={fieldClass}
              />
            </div>
          </section>

          <section className="space-y-5 border border-[var(--border)] bg-[var(--white)] p-5 sm:p-8">
            <h2 className="font-display text-xl font-medium">Project links</h2>

            <div>
              <label htmlFor="live_url" className={labelClass}>
                Live website URL
              </label>
              <input
                id="live_url"
                name="live_url"
                type="url"
                maxLength={2000}
                defaultValue={project.live_url ?? ""}
                placeholder="https://example.com"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="github_url" className={labelClass}>
                GitHub repository URL
              </label>
              <input
                id="github_url"
                name="github_url"
                type="url"
                maxLength={2000}
                defaultValue={project.github_url ?? ""}
                placeholder="https://github.com/username/project"
                className={fieldClass}
              />
            </div>
          </section>

          <section className="border border-[var(--border)] bg-[var(--white)] p-5 sm:p-8">
            <h2 className="font-display text-xl font-medium">Publishing</h2>

            <label className="mt-5 flex items-start gap-3 text-sm leading-6">
              <input
                type="checkbox"
                name="featured"
                defaultChecked={project.featured}
                className="mt-1 h-4 w-4 accent-black"
              />
              <span>
                <span className="font-medium">Feature this project</span>
                <span className="block text-[var(--body)]">
                  Marks the project as featured for the public website.
                </span>
              </span>
            </label>

            <label className="mt-5 flex items-start gap-3 text-sm leading-6">
              <input
                type="checkbox"
                name="published"
                defaultChecked={project.published}
                className="mt-1 h-4 w-4 accent-black"
              />
              <span>
                <span className="font-medium">Publish this project</span>
                <span className="block text-[var(--body)]">
                  Published projects may be displayed publicly. Uncheck to
                  return the project to draft.
                </span>
              </span>
            </label>
          </section>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="bg-[var(--ink)] px-6 py-3 text-sm font-medium text-[var(--white)] transition-opacity hover:opacity-80"
            >
              Save changes
            </button>

            <Link
              href="/admin/projects"
              className="px-4 py-3 text-sm text-[var(--body)] transition-colors hover:text-[var(--ink)]"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

