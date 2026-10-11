
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import AdminNavigation from "@/components/admin/AdminNavigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";

type FormPageProps = {
  searchParams: Promise<{ error?: string }>;
};

const fieldClass =
  "w-full border border-[var(--border)] bg-[var(--paper)] px-4 py-3 text-sm outline-none focus:border-[var(--ink)]";

const labelClass = "mb-2 block text-sm font-medium";

export default async function NewProjectPage({
  searchParams,
}: FormPageProps) {
  const params = await searchParams;

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

  async function createProject(formData: FormData) {
    "use server";

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

    const title = String(formData.get("title") ?? "").trim();
    const requestedSlug = String(formData.get("slug") ?? "").trim();
    const projectType = String(formData.get("project_type") ?? "").trim();

    const slug = (requestedSlug || title)
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    if (!title || !slug || !["complete", "concept"].includes(projectType)) {
      redirect("/admin/projects/new?error=required");
    }

    const optionalText = (name: string) => {
      const value = String(formData.get(name) ?? "").trim();
      return value || null;
    };

    const technologies = [
      ...new Set(
        String(formData.get("technologies") ?? "")
          .split(",")
          .map((technology) => technology.trim())
          .filter(Boolean),
      ),
    ];

    const { error } = await supabase.from("projects").insert({
      title,
      slug,
      project_type: projectType,
      subtitle: optionalText("subtitle"),
      category: optionalText("category"),
      summary: optionalText("summary"),
      project_story: optionalText("project_story"),
      problem: optionalText("problem"),
      approach: optionalText("approach"),
      technologies,
      result: optionalText("result"),
      measurable_outcomes: optionalText("measurable_outcomes"),
      testimonial_quote: optionalText("testimonial_quote"),
      testimonial_author: optionalText("testimonial_author"),
      live_url: optionalText("live_url"),
      github_url: optionalText("github_url"),
      featured: formData.get("featured") === "on",
      published: false,
    });

    if (error) {
      const message =
        error.code === "23505" ? "slug_exists" : "save_failed";

      redirect(`/admin/projects/new?error=${message}`);
    }

    revalidatePath("/admin/projects");
    revalidatePath("/work");
    revalidatePath("/");

    redirect("/admin/projects");
  }

  const errorMessages: Record<string, string> = {
    required: "Enter a title and a valid project type.",
    slug_exists: "That project slug already exists. Choose another one.",
    save_failed:
      "The project could not be saved. Please check the database columns, permissions, and try again.",
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
            Create a project
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--body)]">
            Build a complete portfolio case study with its story, technical
            details, results, and supporting client feedback. New projects
            are saved as drafts.
          </p>
        </header>

        {params.error && errorMessages[params.error] ? (
          <p
            role="alert"
            className="mt-6 border border-red-300 bg-red-50 p-4 text-sm leading-6 text-red-900"
          >
            {errorMessages[params.error]}
          </p>
        ) : null}

        <form action={createProject} className="mt-8 space-y-8">
          <section className="space-y-5 border border-[var(--border)] bg-[var(--white)] p-5 sm:p-8">
            <div>
              <h2 className="font-display text-xl font-medium">
                Basic information
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--body)]">
                Introduce the project and explain what it is.
              </p>
            </div>

            <div>
              <label htmlFor="title" className={labelClass}>
                Project title *
              </label>
              <input
                id="title"
                name="title"
                required
                maxLength={160}
                placeholder="e.g. DentalCleans"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="slug" className={labelClass}>
                URL slug
              </label>
              <input
                id="slug"
                name="slug"
                maxLength={180}
                pattern="[A-Za-z0-9 -]+"
                placeholder="Leave blank to generate from the title"
                className={fieldClass}
              />
              <p className="mt-2 text-xs leading-5 text-[var(--muted)]">
                Example: dentalcleans. The slug must be unique.
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
                defaultValue="complete"
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
                placeholder="A short, compelling line beneath the title"
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
                placeholder="What is this project, who is it for, and what does it do?"
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
                placeholder="Explain the background, purpose, audience, and goals of the project."
                className={`${fieldClass} leading-6`}
              />
              <p className="mt-2 text-xs text-[var(--muted)]">
                Give visitors context before presenting the problem and
                solution.
              </p>
            </div>
          </section>

          <section className="space-y-5 border border-[var(--border)] bg-[var(--white)] p-5 sm:p-8">
            <div>
              <h2 className="font-display text-xl font-medium">
                The challenge
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--body)]">
                Explain the problem this project was designed to address.
              </p>
            </div>

            <div>
              <label htmlFor="problem" className={labelClass}>
                The client&apos;s challenge
              </label>
              <textarea
                id="problem"
                name="problem"
                rows={5}
                maxLength={10000}
                placeholder="What pain points, usability issues, or business needs needed attention?"
                className={`${fieldClass} leading-6`}
              />
            </div>
          </section>

          <section className="space-y-5 border border-[var(--border)] bg-[var(--white)] p-5 sm:p-8">
            <div>
              <h2 className="font-display text-xl font-medium">
                Your solution
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--body)]">
                Describe the design decisions, implementation, and technical
                choices behind the work.
              </p>
            </div>

            <div>
              <label htmlFor="approach" className={labelClass}>
                Approach and solution
              </label>
              <textarea
                id="approach"
                name="approach"
                rows={6}
                maxLength={15000}
                placeholder="Explain how you approached the challenge and what you built to address it."
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
                placeholder="e.g. Next.js, React, TypeScript, Tailwind CSS, Supabase"
                className={fieldClass}
              />
              <p className="mt-2 text-xs leading-5 text-[var(--muted)]">
                Separate technologies with commas. Each item will be stored
                individually for display as a technology tag.
              </p>
            </div>
          </section>

          <section className="space-y-5 border border-[var(--border)] bg-[var(--white)] p-5 sm:p-8">
            <div>
              <h2 className="font-display text-xl font-medium">
                Results and proof
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--body)]">
                Show what the project delivered and provide evidence where
                available.
              </p>
            </div>

            <div>
              <label htmlFor="result" className={labelClass}>
                Results and outcomes
              </label>
              <textarea
                id="result"
                name="result"
                rows={4}
                maxLength={10000}
                placeholder="Summarize the overall outcome or what the completed project demonstrates."
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
                placeholder="e.g. Lighthouse scores, load time, accessibility findings, completed deliverables, or other test results."
                className={`${fieldClass} leading-6`}
              />
              <p className="mt-2 text-xs leading-5 text-[var(--muted)]">
                For testing, you can use clearly labelled sample metrics.
                Replace them with verified measurements before presenting
                them as real project results.
              </p>
            </div>

            <div className="border-t border-[var(--border)] pt-5">
              <h3 className="font-display text-lg font-medium">
                Client testimonial
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--body)]">
                Preview how client feedback will appear in a project case
                study. Test content can be entered here and replaced later.
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
                placeholder="Enter a real testimonial or clearly labelled sample text for layout testing."
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
                placeholder="e.g. Sample Client — Test Content"
                className={fieldClass}
              />
            </div>
          </section>

          <section className="space-y-5 border border-[var(--border)] bg-[var(--white)] p-5 sm:p-8">
            <h2 className="font-display text-xl font-medium">
              Project links
            </h2>

            <div>
              <label htmlFor="live_url" className={labelClass}>
                Live website URL
              </label>
              <input
                id="live_url"
                name="live_url"
                type="url"
                maxLength={2000}
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
                placeholder="https://github.com/username/project"
                className={fieldClass}
              />
            </div>
          </section>

          <section className="border border-[var(--border)] bg-[var(--white)] p-5 sm:p-8">
            <h2 className="font-display text-xl font-medium">
              Publishing
            </h2>

            <label className="mt-5 flex items-start gap-3 text-sm leading-6">
              <input
                type="checkbox"
                name="featured"
                className="mt-1 h-4 w-4 accent-black"
              />
              <span>
                <span className="font-medium">Feature this project</span>
                <span className="block text-[var(--body)]">
                  Marks this project as featured in the database.
                </span>
              </span>
            </label>

            <p className="mt-5 border-t border-[var(--border)] pt-5 text-sm leading-6 text-[var(--body)]">
              Publication status: <strong>Draft</strong>. Projects created
              here are not published automatically.
            </p>
          </section>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="bg-[var(--ink)] px-6 py-3 text-sm font-medium text-[var(--white)] transition-opacity hover:opacity-80"
            >
              Save project as draft
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

