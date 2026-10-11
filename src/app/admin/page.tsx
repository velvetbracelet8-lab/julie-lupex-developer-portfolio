import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { redirect } from "next/navigation";

import AdminNavigation from "@/components/admin/AdminNavigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";

export default async function AdminPage() {
const supabase = await createSupabaseServerClient();

const {
data: { user },
} = await supabase.auth.getUser();

if (!user) {
redirect("/admin/login");
}

const { data: adminUser, error } = await supabase
.from("admin_users")
.select("role")
.eq("user_id", user.id)
.maybeSingle();

if (error || !adminUser) {
redirect("/");
}

return ( <main className="min-h-screen bg-[var(--paper)] px-6 py-12 text-[var(--ink)]"> <div className="mx-auto w-full max-w-6xl"> <AdminNavigation role={adminUser.role} />

```
    <header className="border-b border-[var(--border)] pb-8">
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
        Private area
      </p>

      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <h1 className="font-display text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
            Portfolio admin
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--body)]">
            Manage projects, proposal concepts, screenshots and published
            portfolio content.
          </p>
        </div>

        <div className="border border-[var(--border)] bg-[var(--white)] px-4 py-3">
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">
            Access level
          </p>
          <p className="mt-1 text-sm font-medium capitalize">
            {adminUser.role}
          </p>
        </div>
      </div>
    </header>

    <section className="grid gap-px border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
      <AdminCard
        href="/admin/projects"
        title="Complete projects"
        description="Manage projects and published case studies."
      />

      <AdminCard
        href="/admin/media"
        title="Project media"
        description="Organize desktop, mobile and gallery screenshots."
      />

      {adminUser.role === "owner" ? (
        <AdminCard
          href="/admin/administrators"
          title="Administrators"
          description="Manage access for trusted administrators."
        />
      ) : null}
    </section>
  </div>
</main>


);
}

function AdminCard({
href,
title,
description,
}: {
href: string;
title: string;
description: string;
}) {
return ( <Link
   href={href}
   className="group flex min-h-48 flex-col bg-[var(--white)] p-6 transition-colors hover:bg-[var(--paper)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[var(--ink)] sm:p-8"
 > <div className="flex items-start justify-between gap-4"> <p className="font-display text-lg font-medium tracking-[-0.02em]">
{title} </p>


    <ArrowUpRight
      size={18}
      aria-hidden="true"
      className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    />
  </div>

  <p className="mt-3 text-sm leading-6 text-[var(--body)]">
    {description}
  </p>

  <span className="mt-auto pt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
    Open section
  </span>
</Link>


);
}
