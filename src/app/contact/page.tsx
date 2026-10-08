
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Julie Lupex",
  description:
    "Tell Julie Lupex about your project or the problem you're trying to solve. Get clarity on the right solution, scope, timeline, and next steps.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Julie Lupex — Start With the Problem",
    description:
      "Describe what you're building or the problem you're trying to solve. Let's work out the right solution, scope, timeline, and next steps.",
  },
};

const nextSteps = [
  {
    number: "01",
    title: "You get a considered reply",
    text: "I'll review what you've shared, identify the important questions, and give you an honest first take.",
  },
  {
    number: "02",
    title: "We clarify the problem",
    text: "We'll discuss your goals, users, technical needs, scope, and whether I'm the right fit for the work.",
  },
  {
    number: "03",
    title: "You get a clear proposal",
    text: "If we're a good fit, you'll receive the agreed scope, deliverables, timeline, milestones, and project investment in writing.",
  },
];

const faqs = [
  {
    question: "How much should I budget?",
    answer:
      "It depends on the scope and requirements. Business websites typically fall within the $2,900–$6,000 range. Custom web applications and e-commerce projects are scoped individually. Before development begins, you'll receive a clear proposal covering the agreed deliverables, timeline, and investment.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most business websites take around 2–4 weeks. Larger websites, e-commerce platforms, and custom applications can take 4–10 weeks or more depending on scope, integrations, content readiness, and feedback. The final proposal will include a project-specific timeline and milestones.",
  },
  {
    question: "Do you work with clients internationally?",
    answer:
      "Yes. I work with clients internationally through a fully remote process. Communication, project management, development, and delivery are handled online, making it easy to collaborate regardless of location.",
  },
  {
    question: "I already have a website. Can you rebuild it?",
    answer:
      "Yes. I can review what you already have, identify what is creating problems for users or the business, and recommend whether a full rebuild or targeted improvements make more sense. If a rebuild is unnecessary, I'll tell you that too.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Post-launch support depends on the project scope. Depending on the engagement, I can help with fixes, updates, monitoring, performance improvements, and ongoing Care & Growth support.",
  },
];

export default function ContactPage() {
  return (
    <main id="main">
      {/* ---------- Hero ---------- */}
      <section className="border-b border-ink/10 bg-paper py-24 sm:py-32 lg:py-40">
        <div className="site-container">
          <Reveal>
            <div className="max-w-5xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Contact
              </p>

              <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-8xl">
                Start with the{" "}
                <span className="text-ink/45">problem.</span>
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-ink/65 sm:text-xl sm:leading-9">
                Tell me what is not working, what you&apos;re building, or
                what you want to improve. You do not need a polished brief —
                just enough context to start a useful conversation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Contact Form ---------- */}
      <section
        className="bg-paper-2 py-24 sm:py-28 lg:py-32"
        aria-labelledby="contact-form-heading"
      >
        <div className="site-container">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="rounded-3xl border border-ink/10 bg-paper p-6 sm:p-8 lg:p-10">
                <div className="mb-8">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    Start here
                  </p>

                  <h2
                    id="contact-form-heading"
                    className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
                  >
                    Tell me what you&apos;re trying to solve.
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-ink/60">
                    Give me the rough version. Share what you&apos;re
                    building, what is getting in the way, or what you want to
                    improve, and I&apos;ll help turn it into something
                    concrete.
                  </p>
                </div>

                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- What Happens Next ---------- */}
      <section
        className="border-t border-ink/10 bg-paper py-24 sm:py-28 lg:py-32"
        aria-labelledby="next-steps-heading"
      >
        <div className="site-container">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <div className="max-w-3xl">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  What happens next
                </p>

                <h2
                  id="next-steps-heading"
                  className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
                >
                  A clear process after you hit send.
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-7 text-ink/60 sm:text-lg sm:leading-8">
                  The first conversation is about understanding the problem,
                  not pushing you into a predefined package.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {nextSteps.map((step, index) => (
                <Reveal key={step.number} delay={index * 90}>
                  <article className="h-full rounded-3xl border border-ink/10 bg-paper-2 p-6 sm:p-7">
                    <span
                      className="font-mono text-xs font-semibold tracking-[0.15em] text-muted"
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>

                    <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-ink/60">
                      {step.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section
        className="border-t border-ink/10 bg-paper py-24 sm:py-28 lg:py-32"
        aria-labelledby="faq-heading"
      >
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Questions, answered
              </p>

              <h2
                id="faq-heading"
                className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
              >
                The things people ask{" "}
                <span className="text-ink/45">before starting.</span>
              </h2>

              <a
                href="mailto:julielupex@gmail.com"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-muted"
              >
                Something else? Ask away
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </Reveal>

            <div className="lg:col-span-8">
              <div className="divide-y divide-ink/10 border-y border-ink/10">
                {faqs.map((faq, index) => (
                  <Reveal key={faq.question} delay={index * 60}>
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left marker:hidden">
                        <span className="text-lg font-semibold tracking-tight text-ink sm:text-xl">
                          {faq.question}
                        </span>

                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/10 text-ink/55 transition-transform duration-300 group-open:rotate-180">
                          <ChevronDown size={17} aria-hidden="true" />
                        </span>
                      </summary>

                      <div className="max-w-2xl pb-7 pr-12 text-sm leading-7 text-ink/60 sm:text-base sm:leading-8">
                        {faq.answer}
                      </div>
                    </details>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

