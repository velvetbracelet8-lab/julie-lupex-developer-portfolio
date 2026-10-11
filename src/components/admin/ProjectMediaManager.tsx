
"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ImagePlus,
  LoaderCircle,
  Trash2,
  Upload,
} from "lucide-react";

import { createSupabaseBrowserClient } from "@/lib/supabase-browser";

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
  preview_url: string | null;
};

type Props = {
  projects: Project[];
  media: ProjectMedia[];
};

const BUCKET = "portfolio-projects";
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_TYPES = ["image/webp", "image/png"];

function validateFile(file: File): string | null {
  if (!ALLOWED_TYPES.includes(file.type)) {
    return `${file.name}: only PNG and WebP images are allowed.`;
  }

  if (file.size === 0) {
    return `${file.name}: the file is empty.`;
  }

  if (file.size > MAX_FILE_SIZE) {
    return `${file.name}: the file exceeds the 10 MiB limit.`;
  }

  return null;
}

function sanitizeFileName(name: string): string {
  return name
    .normalize("NFKD")
    .replace(/[^a-zA-Z0-9._-]/g, "-")
    .replace(/-+/g, "-")
    .slice(-180);
}

export default function ProjectMediaManager({
  projects,
  media,
}: Props) {
  const router = useRouter();
  const fileInput = useRef<HTMLInputElement>(null);

  const [projectId, setProjectId] = useState(projects[0]?.id ?? "");
  const [mediaType, setMediaType] = useState<
    "desktop" | "mobile" | "gallery"
  >("desktop");
  const [altText, setAltText] = useState("");
  const [caption, setCaption] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [uploadProgress, setUploadProgress] = useState("");

  const selectedProject = projects.find(
    (project) => project.id === projectId,
  );

  async function handleUpload(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    setMessage("");
    setErrorMessage("");
    setUploadProgress("");

    if (!projectId) {
      setErrorMessage("Select a project before uploading.");
      return;
    }

    if (files.length === 0) {
      setErrorMessage("Choose one or more images to upload.");
      return;
    }

    const validationErrors = files
      .map(validateFile)
      .filter((error): error is string => error !== null);

    if (validationErrors.length > 0) {
      setErrorMessage(validationErrors.join("\n"));
      return;
    }

    const supabase = createSupabaseBrowserClient();
    const total = files.length;
    let uploadedCount = 0;
    const failures: string[] = [];

    setBusy(true);

    try {
      for (let index = 0; index < files.length; index += 1) {
        const file = files[index];

        setUploadProgress(
          `Uploading image ${index + 1} of ${total}: ${file.name}`,
        );

        const safeName = sanitizeFileName(file.name);
        const storagePath =
          `${projectId}/${mediaType}/${crypto.randomUUID()}-${safeName}`;

        let storageUploaded = false;

        try {
          const { error: uploadError } = await supabase.storage
            .from(BUCKET)
            .upload(storagePath, file, {
              contentType: file.type,
              upsert: false,
            });

          if (uploadError) {
            throw new Error(uploadError.message);
          }

          storageUploaded = true;

          const { error: insertError } = await supabase
            .from("project_media")
            .insert({
              project_id: projectId,
              media_type: mediaType,
              storage_path: storagePath,
              alt_text: altText.trim() || null,
              caption: caption.trim() || null,
            });

          if (insertError) {
            let cleanupNote = "";

            const { error: cleanupError } = await supabase.storage
              .from(BUCKET)
              .remove([storagePath]);

            if (cleanupError) {
              cleanupNote =
                ` Storage cleanup also failed: ${cleanupError.message}`;
            }

            throw new Error(`${insertError.message}.${cleanupNote}`);
          }

          uploadedCount += 1;
        } catch (error) {
          const reason =
            error instanceof Error
              ? error.message
              : "Unknown upload error.";

          failures.push(`${file.name}: ${reason}`);

          // If the upload itself failed, no storage cleanup is needed.
          // If a later step failed, the insert-error branch above attempts it.
          void storageUploaded;
        }
      }

      if (uploadedCount > 0) {
        setFiles([]);
        setAltText("");
        setCaption("");

        if (fileInput.current) {
          fileInput.current.value = "";
        }

        setMessage(
          `${uploadedCount} of ${total} ${total === 1 ? "image" : "images"} uploaded successfully.`,
        );

        router.refresh();
      }

      if (failures.length > 0) {
        setErrorMessage(
          `${failures.length} ${failures.length === 1 ? "image failed" : "images failed"}:\n${failures.join("\n")}`,
        );
      }

      if (uploadedCount === 0 && failures.length === 0) {
        setErrorMessage("No images were uploaded.");
      }
    } finally {
      setBusy(false);
      setUploadProgress("");
    }
  }

  async function handleDelete(item: ProjectMedia) {
    const confirmed = window.confirm(
      "Delete this image permanently? This cannot be undone.",
    );

    if (!confirmed) return;

    setErrorMessage("");
    setMessage("");
    setDeletingId(item.id);

    const supabase = createSupabaseBrowserClient();

    try {
      const { error: storageError } = await supabase.storage
        .from(BUCKET)
        .remove([item.storage_path]);

      if (storageError) {
        throw new Error(storageError.message);
      }

      const { error: rowError } = await supabase
        .from("project_media")
        .delete()
        .eq("id", item.id);

      if (rowError) {
        throw new Error(
          `The file was removed, but its media record could not be deleted: ${rowError.message}`,
        );
      }

      setMessage("Image deleted.");
      router.refresh();
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "The image could not be deleted.",
      );
    } finally {
      setDeletingId(null);
    }
  }

  const projectMedia = media.filter(
    (item) => item.project_id === projectId,
  );

  return (
    <div className="mt-8 space-y-10">
      <section className="border border-[var(--border)] bg-[var(--white)] p-5 sm:p-8">
        <div className="flex items-start gap-3">
          <div className="border border-[var(--border)] p-3">
            <ImagePlus size={20} aria-hidden="true" />
          </div>

          <div>
            <h2 className="font-display text-2xl font-medium">
              Upload project media
            </h2>
            <p className="mt-2 text-sm leading-6 text-[var(--body)]">
              Add desktop previews, mobile screenshots, and gallery images
              to an existing project. Select multiple images to upload them
              in one batch.
            </p>
          </div>
        </div>

        {projects.length === 0 ? (
          <p className="mt-6 text-sm text-[var(--body)]">
            Create a project before adding media.
          </p>
        ) : (
          <form onSubmit={handleUpload} className="mt-7 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium">
                Project
                <select
                  value={projectId}
                  onChange={(event) => setProjectId(event.target.value)}
                  disabled={busy}
                  className="mt-2 block w-full border border-[var(--border)] bg-[var(--white)] px-3 py-3 text-sm"
                  required
                >
                  {projects.map((project) => (
                    <option key={project.id} value={project.id}>
                      {project.title} (
                      {project.project_type === "concept"
                        ? "Concept"
                        : "Complete"}
                      )
                    </option>
                  ))}
                </select>
              </label>

              <label className="block text-sm font-medium">
                Image category
                <select
                  value={mediaType}
                  onChange={(event) =>
                    setMediaType(
                      event.target.value as
                        | "desktop"
                        | "mobile"
                        | "gallery",
                    )
                  }
                  disabled={busy}
                  className="mt-2 block w-full border border-[var(--border)] bg-[var(--white)] px-3 py-3 text-sm"
                >
                  <option value="desktop">Desktop screenshot</option>
                  <option value="mobile">Mobile screenshot</option>
                  <option value="gallery">Gallery image</option>
                </select>
              </label>
            </div>

            <label className="block text-sm font-medium">
              Image files
              <input
                ref={fileInput}
                type="file"
                accept="image/png,image/webp"
                multiple
                onChange={(event) =>
                  setFiles(Array.from(event.target.files ?? []))
                }
                disabled={busy}
                className="mt-2 block w-full border border-[var(--border)] bg-[var(--white)] p-3 text-sm file:mr-4 file:border-0 file:bg-[var(--paper)] file:px-3 file:py-2"
                required
              />
              <span className="mt-2 block text-xs leading-5 text-[var(--muted)]">
                Select multiple PNG or WebP images. Maximum 10 MiB per
                image.
              </span>
            </label>

            {files.length > 0 ? (
              <div className="border border-[var(--border)] p-4">
                <p className="text-sm font-medium">
                  {files.length} {files.length === 1 ? "image" : "images"} selected
                </p>
                <ul className="mt-3 space-y-2">
                  {files.map((file) => (
                    <li
                      key={`${file.name}-${file.size}-${file.lastModified}`}
                      className="flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--body)]"
                    >
                      <span className="break-all">{file.name}</span>
                      <span className="shrink-0 text-[var(--muted)]">
                        {(file.size / (1024 * 1024)).toFixed(2)} MiB
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <label className="block text-sm font-medium">
              Alternative text
              <input
                value={altText}
                onChange={(event) => setAltText(event.target.value)}
                maxLength={300}
                disabled={busy}
                placeholder="Describe what the screenshots show"
                className="mt-2 block w-full border border-[var(--border)] bg-[var(--white)] px-3 py-3 text-sm"
              />
              <span className="mt-1 block text-xs font-normal text-[var(--muted)]">
                Applied to every image in this batch.
              </span>
            </label>

            <label className="block text-sm font-medium">
              Caption (optional)
              <input
                value={caption}
                onChange={(event) => setCaption(event.target.value)}
                maxLength={500}
                disabled={busy}
                placeholder="e.g. Desktop homepage — full-page design"
                className="mt-2 block w-full border border-[var(--border)] bg-[var(--white)] px-3 py-3 text-sm"
              />
              <span className="mt-1 block text-xs font-normal text-[var(--muted)]">
                Applied to every image in this batch.
              </span>
            </label>

            {uploadProgress ? (
              <p role="status" className="text-sm text-[var(--body)]">
                <LoaderCircle
                  size={15}
                  className="mr-2 inline animate-spin"
                  aria-hidden="true"
                />
                {uploadProgress}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={busy || files.length === 0 || !projectId}
              className="inline-flex items-center justify-center gap-2 bg-[var(--ink)] px-5 py-3 text-sm font-medium text-[var(--white)] transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {busy ? (
                <LoaderCircle
                  size={16}
                  className="animate-spin"
                  aria-hidden="true"
                />
              ) : (
                <Upload size={16} aria-hidden="true" />
              )}
              {busy
                ? "Uploading images..."
                : `Upload ${files.length || ""} ${files.length === 1 ? "image" : "images"}`}
            </button>
          </form>
        )}
      </section>

      {message ? (
        <p
          role="status"
          className="whitespace-pre-line border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900"
        >
          {message}
        </p>
      ) : null}

      {errorMessage ? (
        <p
          role="alert"
          className="whitespace-pre-line border border-red-300 bg-red-50 p-4 text-sm text-red-900"
        >
          {errorMessage}
        </p>
      ) : null}

      <section>
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
              Media library
            </p>
            <h2 className="mt-2 font-display text-2xl font-medium">
              Project screenshots
            </h2>
          </div>

          <p className="text-sm text-[var(--body)]">
            {projectMedia.length}{" "}
            {projectMedia.length === 1 ? "image" : "images"}
            {selectedProject ? ` · ${selectedProject.title}` : ""}
          </p>
        </div>

        {projectMedia.length === 0 ? (
          <div className="mt-5 border border-[var(--border)] bg-[var(--white)] px-6 py-12 text-center">
            <p className="text-sm text-[var(--body)]">
              No media has been added to this project yet.
            </p>
          </div>
        ) : (
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projectMedia.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden border border-[var(--border)] bg-[var(--white)]"
              >
                <div className="aspect-[4/3] bg-[var(--paper)]">
                  {item.preview_url ? (
                    // Signed URLs are generated by the server for authorized admins.
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.preview_url}
                      alt={item.alt_text ?? ""}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-[var(--muted)]">
                      Preview unavailable
                    </div>
                  )}
                </div>

                <div className="space-y-3 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="border border-[var(--border)] px-2 py-1 font-mono text-[10px] uppercase tracking-wider">
                      {item.media_type}
                    </span>

                    <span className="text-xs text-[var(--muted)]">
                      Order {item.sort_order}
                    </span>
                  </div>

                  {item.caption ? (
                    <p className="text-sm font-medium">{item.caption}</p>
                  ) : null}

                  {item.alt_text ? (
                    <p className="text-xs leading-5 text-[var(--body)]">
                      {item.alt_text}
                    </p>
                  ) : null}

                  <button
                    type="button"
                    onClick={() => void handleDelete(item)}
                    disabled={busy || deletingId === item.id}
                    className="inline-flex items-center gap-2 text-sm text-red-700 hover:underline disabled:opacity-50"
                  >
                    {deletingId === item.id ? (
                      <LoaderCircle
                        size={15}
                        className="animate-spin"
                        aria-hidden="true"
                      />
                    ) : (
                      <Trash2 size={15} aria-hidden="true" />
                    )}
                    Delete image
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}