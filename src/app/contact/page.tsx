import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Julie Lupex",
  description:
    "Tell Julie Lupex about your project or the problem you're trying to solve. Get an honest reply, a clear plan, timeline, and fixed price.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Julie Lupex — Tell Me About Your Project",
    description:
      "Describe what you're building or the problem you're stuck with and get an honest reply, plan, timeline, and fixed price.",
  },
};

const nextSteps = [
  {
    number: "01",
    title: "You hear back within 24h",
    text: "A real reply from me — questions, first thoughts, honest take.",
  },
  {
    number: "02",
    title: "Free 30-min discovery call",
    text: "We walk through goals, scope and whether we're a fit.",
  },
  {
    number: "03",
    title: "Fixed quote, in writing",
    text: "Price, timeline and milestones. Yours to keep either way.",
  },
];

const faqs = [
  {
    question: "How much should I budget?",
    answer:
      "Every project begins with a clear, fixed proposal outlining the agreed scope, deliverables, and investment before development begins. Once approved, your quoted price remains fixed throughout the project.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most business websites take 2–4 weeks, while larger websites, e-commerce platforms, and custom applications may take 4–10 weeks depending on the scope. Before development begins, you’ll receive a clear timeline with the key deliverables and milestones, so you know what’s being built and when to expect it."},

  {
    question: "Do you work with clients internationally?",
    answer:
      "Yes. I work with clients internationally. Communication, project management, development, and delivery are handled online, making it easy to collaborate regardless of location.",
  },
  {
    question: "I already have a website. Can you rebuild it?",
    answer:
      "Absolutely. I can audit what you already have, identify what is hurting performance or conversions, and rebuild the parts that need improvement. If a full rebuild isn't necessary, I'll tell you that too.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every project includes 30 days of free post-launch fixes. After that, you can manage the site yourself or continue with ongoing Care & Growth support for updates, monitoring, backups, performance improvements and small changes.",
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
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--violet)]">
                Contact
              </p>

              <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-8xl">
                Tell me about{" "}
                <span className="text-ink/45">your project.</span>
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-ink/65 sm:text-xl sm:leading-9">
                Two minutes of your time, one honest reply. Describe what
                you&apos;re building — or the problem you&apos;re stuck with —
                and I&apos;ll come back with a plan, a timeline and a fixed
                price.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Contact Form + What Happens Next ---------- */}
      <section
        className="bg-paper-2 py-24 sm:py-28 lg:py-32"
        aria-labelledby="contact-form-heading"
      >
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* ---------- What Happens Next ---------- */}
            <div className="lg:col-span-5">
              <Reveal>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--violet)]">
                  What happens next
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  No mystery after you hit send.
                </h2>
              </Reveal>

              <div className="mt-10 space-y-4">
                {nextSteps.map((step, index) => (
                  <Reveal key={step.number} delay={index * 90}>
                    <article className="rounded-3xl border border-ink/10 bg-paper p-6 sm:p-7">
                      <div className="flex gap-5">
                        <span
                          className="font-mono text-xs font-semibold tracking-[0.15em] text-[var(--violet)]"
                          aria-hidden="true"
                        >
                          {step.number}
                        </span>

                        <div>
                          <h3 className="text-lg font-semibold tracking-tight text-ink">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-ink/60">
                            {step.text}
                          </p>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* ---------- Form ---------- */}
            <Reveal
              variant="right"
              delay={100}
              className="lg:col-span-7"
            >
              <div className="rounded-3xl border border-ink/10 bg-paper p-6 sm:p-8 lg:p-10">
                <div className="mb-8">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--violet)]">
                    Start here
                  </p>

                  <h2
                    id="contact-form-heading"
                    className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
                  >
                    Tell me about your project.
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-ink/60">
                    No polished brief required. Give me the rough version and
                    I&apos;ll help turn it into something concrete.
                  </p>
                </div>

                <ContactForm />
              </div>
            </Reveal>
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
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--violet)]">
                03Questions, answered
              </p>

              <h2
                id="faq-heading"
                className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
              >
                The things everyone asks{" "}
                <span className="text-ink/45">before they hire me.</span>
              </h2>

              <a
                href="mailto:hello@julielupex.dev"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-[var(--violet)]"
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
                          <ChevronDown
                            size={17}
                            aria-hidden="true"
                          />
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

      {/* ---------- Final CTA ---------- */}
      <section
        className="border-t border-ink/10 bg-paper-2 py-24 sm:py-28 lg:py-32"
        aria-labelledby="next-step-heading"
      >
        <div className="site-container">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-8">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--violet)]">
                  04Next step
                </p>

                <h2
                  id="next-step-heading"
                  className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl"
                >
                  Have a problem worth solving?
                  <br />
                  Let&apos;s talk — it&apos;s free.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-ink/65 sm:text-lg sm:leading-9">
                  Describe what&apos;s broken — or what you&apos;re building —
                  and get an honest diagnosis plus a fixed quote within 24
                  hours. Worst case, you leave with a plan. Best case, the
                  problem is gone for good.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="btn btn-primary inline-flex items-center"
                  >
                    Start a project
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>

                  <a
                    href="mailto:hello@julielupex.dev"
                    className="btn btn-ghost-dark inline-flex items-center"
                  >
                    hello@julielupex.dev
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="rounded-3xl border border-ink/10 bg-paper p-7 sm:p-9">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/45">
                    What you can expect
                  </p>

                  <ul className="mt-6 space-y-4">
                    <li className="flex gap-3 text-sm leading-6 text-ink/70">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--violet)]"
                        aria-hidden="true"
                      />
                      Fixed quote in writing before work begins
                    </li>
                    <li className="flex gap-3 text-sm leading-6 text-ink/70">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--violet)]"
                        aria-hidden="true"
                      />
                      Final payment only when you approve
                    </li>
                    <li className="flex gap-3 text-sm leading-6 text-ink/70">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--violet)]"
                        aria-hidden="true"
                      />
                      30 days of post-launch fixes, free
                    </li>
                    <li className="flex gap-3 text-sm leading-6 text-ink/70">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--violet)]"
                        aria-hidden="true"
                      />
                      You own all code, content &amp; accounts
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}