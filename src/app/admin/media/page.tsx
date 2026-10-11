import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { redirect } from "next/navigation";

import AdminNavigation from "@/components/admin/AdminNavigation";
import ProjectMediaManager from "@/components/admin/ProjectMediaManager";
import { createSupabaseServerClient } from "@/lib/supabase-server";

const BUCKET = "portfolio-projects";

type Project = {
id: string;
title: string;
slug: string;
project_type: string;
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

export default async function AdminMediaPage() {
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

const [
{ data: projectData, error: projectsError },
{ data: mediaData, error: mediaError },
] = await Promise.all([
supabase
.from("projects")
.select("id, title, slug, project_type")
.order("title", { ascending: true }),
supabase
.from("project_media")
.select(
"id, project_id, media_type, storage_path, alt_text, caption, sort_order, created_at",
)
.order("sort_order", { ascending: true })
.order("created_at", { ascending: false }),
]);

const projects = (projectData ?? []) as Project[];
const mediaRecords = (mediaData ?? []) as ProjectMedia[];

const media = await Promise.all(
mediaRecords.map(async (item) => {
const { data, error } = await supabase.storage
.from(BUCKET)
.createSignedUrl(item.storage_path, 60 * 60);


  return {
    ...item,
    preview_url: error ? null : data.signedUrl,
  };
}),


);

const loadError = projectsError?.message ?? mediaError?.message ?? null;

return ( <main className="min-h-screen bg-[var(--paper)] px-5 py-10 text-[var(--ink)] sm:px-8 sm:py-12"> <div className="mx-auto w-full max-w-6xl"> <AdminNavigation role={adminUser.role} />


    <Link
      href="/admin"
      className="inline-flex items-center gap-2 text-sm text-[var(--body)] transition-colors hover:text-[var(--ink)]"
    >
      <ArrowLeft size={16} aria-hidden="true" />
      Back to dashboard
    </Link>

    <header className="mt-8 border-b border-[var(--border)] pb-8">
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
        Portfolio CMS
      </p>

      <h1 className="font-display text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
        Project media
      </h1>

      <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--body)]">
        Manage desktop screenshots, mobile previews, and gallery images
        for your portfolio projects.
      </p>
    </header>

    {loadError ? (
      <div
        role="alert"
        className="mt-8 border border-red-300 bg-red-50 p-5 text-sm leading-6 text-red-900"
      >
        <p className="font-semibold">Media could not be loaded.</p>
        <p className="mt-1">{loadError}</p>
        <p className="mt-2">
          Check the project_media table, its RLS policies, and the
          administrator&apos;s access permissions.
        </p>
      </div>
    ) : (
      <ProjectMediaManager projects={projects} media={media} />
    )}
  </div>
</main>


);
}
