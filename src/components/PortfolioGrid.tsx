"use client";

import { useState } from "react";
import { projects, projectFilters, projectMatchesFilter } from "@/lib/data";
import { ProjectCard } from "@/components/cards";

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All");

  const visible = projects.filter((p) => projectMatchesFilter(p, filter));

  return (
    <div>
      <div
        className="flex flex-wrap items-center gap-2.5"
        role="group"
        aria-label="Filter projects by category"
      >
        {projectFilters.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={active}
              className={`rounded-full border px-4.5 py-2 font-display text-sm font-semibold transition-all duration-300 ${
                active
                  ? "border-ink bg-ink text-paper shadow-[0_10px_24px_-12px_rgba(15,13,20,0.5)]"
                  : "border-ink/15 bg-white text-body hover:border-violet/60 hover:text-ink"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>
      <p className="mt-5 text-sm text-body/80" aria-live="polite">
        Showing {visible.length} of {projects.length} concept projects
        {filter !== "All" ? ` in ${filter}` : ""}.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
