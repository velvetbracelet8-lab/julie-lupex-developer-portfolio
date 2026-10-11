
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Users } from "lucide-react";
import { redirect } from "next/navigation";

import AdminNavigation from "@/components/admin/AdminNavigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

export default async function AdministratorsPage() {
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

  if (adminError || adminUser?.role !== "owner") {
    redirect("/admin");
  }

  const { data: administrators, error: administratorsError } =
    await supabase
      .from("admin_users")
      .select("user_id, role, created_at")
      .order("created_at", { ascending: true });

  return (
    <main className="min-h-screen bg-[var(--paper)] px-6 py-12 text-[var(--ink)]">
      <div className="mx-auto w-full max-w-6xl">
        <AdminNavigation role={adminUser.role} />

        <Link
          href="/admin"
          className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--body)] transition hover:text-[var(--ink)]"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to admin
        </Link>

        <header className="border-b border-[var(--border)] pb-8">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
            Access control
          </p>

          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <h1 className="font-display text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                Administrators
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--body)]">
                Manage trusted administrator access to your portfolio.
                Only the portfolio owner can access this section.
              </p>
            </div>

            <div className="flex items-center gap-3 border border-[var(--border)] bg-[var(--white)] px-4 py-3">
              <ShieldCheck
                size={20}
                aria-hidden="true"
                className="text-[var(--muted)]"
              />
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">
                  Your access
                </p>
                <p className="mt-1 text-sm font-medium">Owner</p>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="font-display text-xl font-medium">
                Trusted administrators
              </h2>
              <p className="mt-2 text-sm text-[var(--body)]">
                Review the accounts currently authorized to manage this
                portfolio.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm text-[var(--muted)]">
              <Users size={17} aria-hidden="true" />
              {administrators?.length ?? 0}{" "}
              {(administrators?.length ?? 0) === 1
                ? "administrator"
                : "administrators"}
            </div>
          </div>

          {administratorsError ? (
            <div
              role="alert"
              className="mt-6 border border-red-500/30 bg-red-500/5 p-5 text-sm text-red-700"
            >
              Unable to load administrator records. Check the Supabase
              permissions and try again.
            </div>
          ) : (
            <div className="mt-6 overflow-hidden border border-[var(--border)] bg-[var(--white)]">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-b border-[var(--border)] px-5 py-4 sm:px-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                  Account
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                  Role
                </p>
              </div>

              {administrators?.length ? (
                administrators.map((administrator) => (
                  <div
                    key={administrator.user_id}
                    className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-[var(--border)] px-5 py-5 last:border-b-0 sm:px-6"
                  >
                    <div className="min-w-0">
                      <p className="break-all text-sm font-medium">
                        {administrator.user_id === user.id
                          ? "Your account"
                          : "Administrator account"}
                      </p>

                      <p className="mt-1 break-all font-mono text-xs text-[var(--muted)]">
                        {administrator.user_id}
                      </p>

                      <p className="mt-2 text-xs text-[var(--muted)]">
                        Added{" "}
                        {new Date(
                          administrator.created_at,
                        ).toLocaleDateString("en", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          timeZone: "UTC",
                        })}
                      </p>
                    </div>

                    <span className="inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium capitalize">
                      {administrator.role}
                    </span>
                  </div>
                ))
              ) : (
                <p className="p-6 text-sm text-[var(--body)]">
                  No administrator records were found.
                </p>
              )}
            </div>
          )}

          <p className="mt-5 max-w-2xl text-xs leading-6 text-[var(--muted)]">
            Account identifiers are displayed because the database does not
            currently contain a public profile table with administrator
            names or email addresses.
          </p>
        </section>
      </div>
    </main>
  );
}

