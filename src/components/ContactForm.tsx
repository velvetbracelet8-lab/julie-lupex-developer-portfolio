
"use client";

import { useEffect, useState, type FormEvent } from "react";

import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";

import { site } from "@/lib/site";

const projectTypes = [
  "Landing Page",
  "Website",
  "Web Application",
  "E-commerce",
  "Existing Website",
  "UI / Frontend Development",
  "Backend / API",
  "Full-Stack Development",
  "Custom Digital Solution",
  "Not Sure Yet",
];

type Errors = Partial<
  Record<"name" | "email" | "projectType" | "message", string>
>;

type Status = "idle" | "submitting" | "success" | "error";

const serviceToProjectType: Record<string, string> = {
  website: "Website",
  "web applications": "Web Application",
  "web application": "Web Application",
  "e-commerce": "E-commerce",
  ecommerce: "E-commerce",
  "landing page": "Landing Page",
  "landing pages": "Landing Page",
  "ui/ux": "UI / Frontend Development",
  "ui development": "UI / Frontend Development",
  "ui / frontend development": "UI / Frontend Development",
  "frontend development": "UI / Frontend Development",
  "backend / api": "Backend / API",
  "backend/api": "Backend / API",
  "backend": "Backend / API",
  "full-stack development": "Full-Stack Development",
  "full stack development": "Full-Stack Development",
};

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverMessage, setServerMessage] = useState("");
  const [projectType, setProjectType] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service")?.trim().toLowerCase();

    if (!service) {
      return;
    }

    const matchedProjectType = serviceToProjectType[service];

    if (matchedProjectType) {
      setProjectType(matchedProjectType);
    }
  }, []);

  function validate(data: Record<string, string>): Errors {
    const errs: Errors = {};

    if (!data.name || data.name.trim().length < 2) {
      errs.name =
        "Please share your name so Julie knows who she's talking to.";
    }

    if (
      !data.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)
    ) {
      errs.email =
        "Please enter a valid email address so Julie can reply.";
    }

    if (!data.projectType) {
      errs.projectType = "Please choose what you're looking to build.";
    }

    if (!data.message || data.message.trim().length < 12) {
      errs.message =
        "Tell Julie a little more — a sentence or two about the problem is perfect.";
    }

    return errs;
  }

  function focusFirstError(errs: Errors) {
    const firstError = Object.keys(errs)[0];

    if (!firstError) {
      return;
    }

    window.requestAnimationFrame(() => {
      document.getElementById(firstError)?.focus();
    });
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;

    const errs = validate(data);

    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      setStatus("idle");
      focusFirstError(errs);
      return;
    }

    setStatus("submitting");
    setServerMessage("");

    try {
      const res = await fetch("/contact-form.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          "form-name": "contact",
          name: data.name,
          email: data.email,
          projectType: data.projectType,
          message: data.message,
          "bot-field": data["bot-field"] ?? "",
        }).toString(),
      });

      if (!res.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setProjectType("");
      setErrors({});
      setStatus("success");
    } catch {
      setServerMessage(
        `The message couldn't be sent right now. Please try again, or email ${site.email} directly.`,
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex h-full flex-col items-center justify-center rounded-3xl border border-violet/30 bg-white p-10 text-center"
        role="status"
        aria-live="polite"
      >
        <span className="grid h-16 w-16 place-items-center rounded-full bg-violet/15 text-deep">
          <CheckCircle2 size={30} aria-hidden="true" />
        </span>

        <h3 className="mt-6 font-display text-2xl font-bold text-ink">
          Message received.
        </h3>

        <p className="mt-3 max-w-sm leading-relaxed text-body">
          Thank you for reaching out — your project brief has been received
          and Julie will read it personally. Expect a reply at the email
          address you shared.
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn btn-ghost-dark mt-8"
        >
          Send another message
          <ArrowRight size={16} aria-hidden="true" />
        </button>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-ink/10 bg-white p-7 shadow-[0_28px_70px_-32px_rgba(15,13,20,0.28)] sm:p-9"
    >
      <input type="hidden" name="form-name" value="contact" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className={`field-input ${errors.name ? "field-error" : ""}`}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />

          {errors.name && (
            <p id="name-error" className="mt-2 text-sm text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="field-label">
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={`field-input ${errors.email ? "field-error" : ""}`}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />

          {errors.email && (
            <p id="email-error" className="mt-2 text-sm text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="projectType" className="field-label">
            What are you looking to build?
          </label>

          <select
            id="projectType"
            name="projectType"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className={`field-input ${
              errors.projectType ? "field-error" : ""
            }`}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={
              errors.projectType ? "projectType-error" : undefined
            }
          >
            <option value="" disabled>
              Choose a project type
            </option>

            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          {errors.projectType && (
            <p
              id="projectType-error"
              className="mt-2 text-sm text-red-600"
            >
              {errors.projectType}
            </p>
          )}

          <p className="mt-2 text-xs leading-relaxed text-body/65">
            Not sure what you need? That&apos;s okay — describe your goal
            below and Julie can help determine the right approach.
          </p>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="field-label">
            What&apos;s the problem?
          </label>

          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="What is the main problem holding your business back right now? For example: the current site is slow, checkout drops off, or you need an MVP to pitch investors."
            className={`field-input resize-y ${
              errors.message ? "field-error" : ""
            }`}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />

          {errors.message && (
            <p id="message-error" className="mt-2 text-sm text-red-600">
              {errors.message}
            </p>
          )}
        </div>

        <div className="hidden" aria-hidden="true">
          <label htmlFor="bot-field">Do not fill this field</label>

          <input
            id="bot-field"
            name="bot-field"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mt-5 flex items-start gap-2.5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm leading-relaxed text-red-700"
        >
          <AlertCircle
            size={17}
            className="mt-0.5 shrink-0"
            aria-hidden="true"
          />

          {serverMessage}
        </p>
      )}

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-xs leading-relaxed text-body/70">
          Your message is sent securely through the contact form and read
          personally by Julie. No newsletters, no spam — just a reply.
        </p>

        <button
          type="submit"
          className="btn btn-dark"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <>
              Sending your project brief...
              <Loader2
                size={16}
                className="animate-spin"
                aria-hidden="true"
              />
            </>
          ) : (
            <>
              Send Project Brief
              <ArrowRight size={16} aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

