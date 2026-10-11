
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Plus } from "lucide-react";
import { redirect } from "next/navigation";

import AdminNavigation from "@/components/admin/AdminNavigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";

type PortfolioProject = {
  id: string;
  title: string;
  slug: string;
  project_type: string;
  category: string | null;
  published: boolean;
  featured: boolean;
  updated_at: string;
};

export default async function AdminProjectsPage() {
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
      "id, title, slug, project_type, category, published, featured, updated_at",
    )
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  const projects = (data ?? []) as PortfolioProject[];

  return (
    <main className="min-h-screen bg-[var(--paper)] px-5 py-10 text-[var(--ink)] sm:px-8 sm:py-12">
      <div className="mx-auto w-full max-w-6xl">
        <AdminNavigation role={adminUser.role} />

        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-sm text-[var(--body)] transition-colors hover:text-[var(--ink)]"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to dashboard
        </Link>

        <header className="mt-8 flex flex-col justify-between gap-6 border-b border-[var(--border)] pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
              Portfolio CMS
            </p>

            <h1 className="font-display text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              Manage projects
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--body)]">
              Manage complete projects and proposed concepts, edit case
              studies, and control publication status.
            </p>
          </div>

          <Link
            href="/admin/projects/new"
            prefetch
            className="btn btn-primary inline-flex w-fit items-center gap-2"
          >
            <Plus size={16} aria-hidden="true" />
            Add project
          </Link>
        </header>

        {error ? (
          <div
            role="alert"
            className="mt-8 border border-red-300 bg-red-50 p-5 text-sm leading-6 text-red-900"
          >
            <p className="font-semibold">Projects could not be loaded.</p>
            <p className="mt-1">{error.message}</p>
            <p className="mt-2">
              Check the Supabase table permissions and column names before
              continuing.
            </p>
          </div>
        ) : (
          <section className="mt-8">
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-sm text-[var(--body)]">
                {projects.length}{" "}
                {projects.length === 1 ? "project" : "projects"}
              </p>

              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                Supabase records
              </p>
            </div>

            {projects.length === 0 ? (
              <div className="border border-[var(--border)] bg-[var(--white)] px-6 py-12 text-center sm:px-10">
                <h2 className="font-display text-2xl font-medium">
                  No projects found
                </h2>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[var(--body)]">
                  Your project database is empty, or no records are visible
                  to this account. Existing static portfolio projects have
                  not been imported into Supabase.
                </p>

                <Link
                  href="/admin/projects/new"
                  prefetch
                  className="btn btn-primary mx-auto mt-6 inline-flex items-center gap-2"
                >
                  Create your first project
                  <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </div>
            ) : (
              <div className="overflow-hidden border border-[var(--border)] bg-[var(--white)]">
                <div className="hidden grid-cols-[minmax(0,1fr)_130px_120px_100px] gap-4 border-b border-[var(--border)] px-6 py-4 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] md:grid">
                  <span>Project</span>
                  <span>Type</span>
                  <span>Status</span>
                  <span>Featured</span>
                </div>

                <div className="divide-y divide-[var(--border)]">
                  {projects.map((project) => (
                    <article
                      key={project.id}
                      className="grid gap-4 px-5 py-5 transition-colors hover:bg-[var(--paper)] sm:px-6 md:grid-cols-[minmax(0,1fr)_130px_120px_100px] md:items-center"
                    >
                      <div className="min-w-0">
                        <h2 className="break-words font-medium">
                          <Link
                            href={`/admin/projects/${project.id}/edit`}
                            className="inline-flex items-center gap-2 transition-colors hover:underline"
                          >
                            {project.title}
                            <ArrowUpRight
                              size={14}
                              aria-hidden="true"
                              className="shrink-0"
                            />
                          </Link>
                        </h2>

                        <p className="mt-1 break-all font-mono text-xs text-[var(--muted)]">
                          /{project.slug}
                        </p>

                        {project.category ? (
                          <p className="mt-2 text-xs text-[var(--body)] md:hidden">
                            {project.category}
                          </p>
                        ) : null}

                        <Link
                          href={`/work/${project.slug}`}
                          target="_blank"
                          rel="noreferrer"
                          prefetch={false}
                          className="mt-2 inline-flex items-center gap-1 text-xs text-[var(--body)] underline-offset-4 hover:underline"
                        >
                          View public page
                          <ArrowUpRight size={12} aria-hidden="true" />
                        </Link>
                      </div>

                      <div>
                        <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--muted)] md:hidden">
                          Type
                        </p>
                        <span className="text-sm">
                          {project.project_type === "complete"
                            ? "Complete"
                            : project.project_type === "concept"
                              ? "Proposed concept"
                              : project.project_type}
                        </span>
                      </div>

                      <div>
                        <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--muted)] md:hidden">
                          Publication
                        </p>
                        <span
                          className={`inline-flex border px-2.5 py-1 text-xs ${
                            project.published
                              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                              : "border-[var(--border)] bg-[var(--paper)] text-[var(--body)]"
                          }`}
                        >
                          {project.published ? "Published" : "Draft"}
                        </span>
                      </div>

                      <div>
                        <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--muted)] md:hidden">
                          Featured
                        </p>
                        <span className="text-sm">
                          {project.featured ? "Yes" : "No"}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
}