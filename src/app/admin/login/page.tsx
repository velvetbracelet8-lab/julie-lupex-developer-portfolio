
"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, LockKeyhole } from "lucide-react";
import { useRouter } from "next/navigation";

import { createSupabaseBrowserClient } from "@/lib/supabase-browser";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);
    setErrorMessage("");

    const supabase = createSupabaseBrowserClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setIsLoading(false);
      setErrorMessage("Invalid email or password.");
      return;
    }

    router.replace("/admin");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-[var(--paper)] px-6 py-12 text-[var(--ink)]">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-md items-center justify-center">
        <section className="w-full">
          <div className="mb-10">
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--ink)] text-[var(--white)]">
              <LockKeyhole size={18} strokeWidth={1.8} />
            </div>

            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
              Private area
            </p>

            <h1 className="font-display text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              Admin login
            </h1>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--body)]">
              Sign in with an authorized portfolio account to manage projects
              and concepts.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full border border-[var(--border)] bg-[var(--white)] px-4 py-3.5 text-sm text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--mist)] focus:border-[var(--ink)]"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full border border-[var(--border)] bg-[var(--white)] px-4 py-3.5 text-sm text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--mist)] focus:border-[var(--ink)]"
                placeholder="••••••••"
              />
            </div>

            {errorMessage ? (
              <p
                role="alert"
                className="border border-[var(--border)] bg-[var(--paper-2)] px-4 py-3 text-sm text-[var(--body)]"
              >
                {errorMessage}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isLoading}
              className="group inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[var(--ink)] px-6 py-3 text-sm font-medium text-[var(--white)] transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? "Signing in..." : "Sign in"}

              {!isLoading ? (
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              ) : null}
            </button>
          </form>

          <p className="mt-8 text-xs leading-6 text-[var(--muted)]">
            This area is restricted to authorized portfolio administrators.
          </p>
        </section>
      </div>
    </main>
  );
}

