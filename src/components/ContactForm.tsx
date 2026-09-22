
"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const projectTypes = [
  "Website",
  "Web Application",
  "E-commerce",
  "WordPress",
  "UI Development",
  "Backend / API",
  "Full-Stack Development",
  "Other",
];

const budgetRanges = [
  "Not sure yet — let's talk",
  "Small starter budget",
  "Modest business budget",
  "Established product budget",
  "Ongoing / retainer work",
];

type Errors = Partial<
  Record<"name" | "email" | "projectType" | "budget" | "message", string>
>;

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverMessage, setServerMessage] = useState("");

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
      errs.projectType = "Please choose a project type.";
    }

    if (!data.budget) {
      errs.budget = "Please choose a budget range.";
    }

    if (!data.message || data.message.trim().length < 12) {
      errs.message =
        "Tell Julie a little more — a sentence or two about your project is perfect.";
    }

    return errs;
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
      return;
    }

    setStatus("submitting");
    setServerMessage("");

    try {
      const body = new URLSearchParams();

      body.append("form-name", "contact");
      body.append("name", data.name);
      body.append("email", data.email);
      body.append("projectType", data.projectType);
      body.append("budget", data.budget);
      body.append("message", data.message);
      body.append("website", data.website ?? "");

      const res = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });

      if (!res.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setErrors({});
      setStatus("success");
    } catch {
      setServerMessage(
        "The message couldn't be sent right now. Please try again, or email julielupex@gmail.com directly."
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
          Thank you for reaching out — your message has been received and Julie
          will read it personally. Expect a reply at the email address you
          shared.
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
      data-netlify="true"
      data-netlify-honeypot="website"
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
            <p id="name-error" className="mt-2 text-sm text-[#c23247]">
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
            <p id="email-error" className="mt-2 text-sm text-[#c23247]">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="projectType" className="field-label">
            Project Type
          </label>

          <select
            id="projectType"
            name="projectType"
            defaultValue=""
            className={`field-input ${
              errors.projectType ? "field-error" : ""
            }`}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={
              errors.projectType ? "projectType-error" : undefined
            }
          >
            <option value="" disabled>
              What are we building?
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
              className="mt-2 text-sm text-[#c23247]"
            >
              {errors.projectType}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="budget" className="field-label">
            Budget Range
          </label>

          <select
            id="budget"
            name="budget"
            defaultValue=""
            className={`field-input ${errors.budget ? "field-error" : ""}`}
            aria-invalid={Boolean(errors.budget)}
            aria-describedby={errors.budget ? "budget-error" : undefined}
          >
            <option value="" disabled>
              Choose a comfortable range
            </option>

            {budgetRanges.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>

          {errors.budget && (
            <p id="budget-error" className="mt-2 text-sm text-[#c23247]">
              {errors.budget}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="field-label">
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell Julie about your project — what it is, who it's for, and when you'd love to see it live."
            className={`field-input resize-y ${
              errors.message ? "field-error" : ""
            }`}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />

          {errors.message && (
            <p id="message-error" className="mt-2 text-sm text-[#c23247]">
              {errors.message}
            </p>
          )}
        </div>

        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>

          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mt-5 flex items-start gap-2.5 rounded-2xl border border-[#e4b7bd] bg-[#fdf3f4] p-4 text-sm leading-relaxed text-[#a52a39]"
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
              Sending your message…
              <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            </>
          ) : (
            <>
              Start a Conversation
              <ArrowRight size={16} aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

