import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Check,
  Clock3,
  HeartPulse,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";

import { landingPageConcepts } from "@/lib/landing-pages";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return landingPageConcepts.map((concept) => ({
    slug: concept.slug,
  }));
}

export default async function LandingPageConcept({ params }: PageProps) {
  const { slug } = await params;

  const concept = landingPageConcepts.find((item) => item.slug === slug);

  if (!concept) {
    return (
      <main className="min-h-screen bg-paper px-6 py-32">
        <div className="site-container">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-deep">
            404
          </p>

          <h1 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-ink sm:text-5xl">
            Landing page concept not found.
          </h1>

          <Link href="/landing-pages" className="btn btn-dark mt-8 inline-flex">
            Back to showcase
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </main>
    );
  }

  const isDental = concept.slug === "dentalcleans";

  return (
    <main id="main" className="bg-[#f7f8f7] text-[#10212b]">
      {/* =========================================================
          PROPOSAL NOTICE
      ========================================================== */}
      <div className="border-b border-[#10212b]/10 bg-[#10212b] px-5 py-3 text-center text-xs leading-5 text-white/65">
        <span className="font-semibold text-[#8fd3cb]">
          Proposed website concept
        </span>{" "}
        · Independent design concept created by Julie Lupex. Not an official
        website of the organization shown.
      </div>

      {/* =========================================================
          NAVIGATION
      ========================================================== */}
      <nav className="sticky top-0 z-50 border-b border-[#10212b]/10 bg-[#f7f8f7]/95 backdrop-blur-md">
        <div className="site-container flex h-[4.5rem] items-center justify-between gap-6">
          <Link
            href="/landing-pages"
            className="font-display text-lg font-bold tracking-[-0.04em]"
          >
            JL<span className="text-[#3f8f89]">.</span>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium text-[#52616a] md:flex">
            <a
              href="#services"
              className="transition-colors hover:text-[#10212b]"
            >
              Services
            </a>

            <a
              href="#process"
              className="transition-colors hover:text-[#10212b]"
            >
              How it works
            </a>

            <a
              href="#faq"
              className="transition-colors hover:text-[#10212b]"
            >
              FAQ
            </a>
          </div>

          <a
            href="#appointment"
            className="inline-flex items-center gap-2 rounded-full bg-[#10212b] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#21404d]"
          >
            {concept.cta}
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>
      </nav>

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#e9f2f0]">
        <div className="absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-[#9edbd4]/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-white/70 blur-3xl" />

        <div className="site-container relative py-20 sm:py-28 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
            {/* Hero copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#3f8f89]/20 bg-white/65 px-4 py-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3f8f89] text-white">
                  <Stethoscope size={13} aria-hidden="true" />
                </span>

                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#356f6a]">
                  Patient-first dental care
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl font-display text-[clamp(3.2rem,7vw,6.8rem)] font-bold leading-[0.9] tracking-[-0.065em] text-[#10212b]">
                Healthy teeth.
                <br />
                <span className="text-[#3f8f89]">Confident smiles.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[#52616a] sm:text-lg sm:leading-9">
                A clearer digital experience designed to help patients
                understand their care options, feel confident about their
                choices, and take the next step without unnecessary friction.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#appointment"
                  className="inline-flex items-center gap-2 rounded-full bg-[#10212b] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#21404d]"
                >
                  {concept.cta}
                  <ArrowRight size={16} aria-hidden="true" />
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border border-[#10212b]/15 bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#10212b] transition-all hover:-translate-y-0.5 hover:bg-white"
                >
                  Explore services
                </a>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs text-[#52616a]">
                <span className="inline-flex items-center gap-2">
                  <Check size={14} className="text-[#3f8f89]" />
                  Clear care information
                </span>

                <span className="inline-flex items-center gap-2">
                  <Check size={14} className="text-[#3f8f89]" />
                  Simple appointment path
                </span>

                <span className="inline-flex items-center gap-2">
                  <Check size={14} className="text-[#3f8f89]" />
                  Patient-focused experience
                </span>
              </div>
            </div>

            {/* Hero visual */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-[34rem]">
                {/* soft visual glow */}
                <div className="absolute -inset-6 rounded-[2.5rem] bg-[#8fcfc8]/30 blur-3xl" />

                <div className="relative overflow-hidden rounded-[2.25rem] border border-[#10212b]/10 bg-white p-3 shadow-[0_30px_80px_rgba(16,33,43,0.16)]">
                  {/* browser chrome */}
                  <div className="flex items-center gap-1.5 border-b border-[#10212b]/8 px-4 py-3">
                    <span className="h-2 w-2 rounded-full bg-[#10212b]/15" />
                    <span className="h-2 w-2 rounded-full bg-[#10212b]/15" />
                    <span className="h-2 w-2 rounded-full bg-[#10212b]/15" />

                    <div className="ml-3 h-5 flex-1 rounded-full bg-[#10212b]/5" />
                  </div>

                  {/* simulated dental website */}
                  <div className="overflow-hidden rounded-b-[1.7rem] bg-[#f7f8f7]">
                    <div className="flex items-center justify-between border-b border-[#10212b]/8 px-5 py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d9efeb] text-[#3f8f89]">
                          <HeartPulse size={15} />
                        </div>

                        <span className="font-display text-sm font-bold">
                          SmileCare
                        </span>
                      </div>

                      <span className="rounded-full bg-[#10212b] px-3 py-1.5 text-[9px] font-semibold text-white">
                        Book visit
                      </span>
                    </div>

                    <div className="p-5 sm:p-7">
                      <div className="rounded-[1.5rem] bg-[#dcefeb] p-5 sm:p-6">
                        <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-[#3f8f89]">
                          Your smile matters
                        </span>

                        <div className="mt-5 space-y-2">
                          <div className="h-7 w-[90%] rounded-lg bg-[#10212b]" />
                          <div className="h-7 w-[66%] rounded-lg bg-[#10212b]" />
                        </div>

                        <div className="mt-5 h-2 w-[80%] rounded-full bg-[#10212b]/10" />
                        <div className="mt-2 h-2 w-[58%] rounded-full bg-[#10212b]/10" />

                        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#10212b] px-4 py-2.5 text-[10px] font-semibold text-white">
                          Book an appointment
                          <ArrowRight size={12} />
                        </div>
                      </div>

                      <div className="mt-5 grid grid-cols-3 gap-3">
                        <div className="rounded-2xl bg-white p-4">
                          <HeartPulse
                            size={17}
                            className="text-[#3f8f89]"
                          />
                          <div className="mt-5 h-2 w-full rounded-full bg-[#10212b]/10" />
                          <div className="mt-2 h-2 w-[65%] rounded-full bg-[#10212b]/6" />
                        </div>

                        <div className="rounded-2xl bg-white p-4">
                          <Stethoscope
                            size={17}
                            className="text-[#3f8f89]"
                          />
                          <div className="mt-5 h-2 w-full rounded-full bg-[#10212b]/10" />
                          <div className="mt-2 h-2 w-[65%] rounded-full bg-[#10212b]/6" />
                        </div>

                        <div className="rounded-2xl bg-white p-4">
                          <Calendar
                            size={17}
                            className="text-[#3f8f89]"
                          />
                          <div className="mt-5 h-2 w-full rounded-full bg-[#10212b]/10" />
                          <div className="mt-2 h-2 w-[65%] rounded-full bg-[#10212b]/6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* floating information card */}
                <div className="absolute -bottom-5 -left-4 rounded-2xl border border-[#10212b]/10 bg-white px-4 py-3.5 shadow-[0_18px_45px_rgba(16,33,43,0.15)] sm:-left-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#d9efeb] text-[#3f8f89]">
                      <Calendar size={17} />
                    </div>

                    <div>
                      <p className="font-display text-sm font-bold text-[#10212b]">
                        Easy appointment booking
                      </p>
                      <p className="text-[10px] text-[#52616a]">
                        Clear from start to finish
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TRUST / POSITIONING
      ========================================================== */}
      <section className="border-b border-[#10212b]/10 bg-white">
        <div className="site-container py-10 sm:py-12">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Built around trust",
                text: "Clear information before patients make a decision.",
              },
              {
                icon: HeartPulse,
                title: "Designed around people",
                text: "A calmer digital experience for patients and families.",
              },
              {
                icon: Calendar,
                title: "Focused on action",
                text: "A straightforward path from questions to appointment.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 sm:border-l sm:border-[#10212b]/10 sm:pl-7 first:sm:border-l-0 first:sm:pl-0"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e9f2f0] text-[#3f8f89]">
                    <Icon size={18} />
                  </div>

                  <div>
                    <h2 className="font-display text-sm font-bold text-[#10212b]">
                      {item.title}
                    </h2>

                    <p className="mt-1 text-xs leading-5 text-[#52616a]">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROBLEM
      ========================================================== */}
      <section className="bg-[#f7f8f7] py-24 sm:py-32">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#3f8f89]">
                The patient experience
              </p>

              <h2 className="mt-5 max-w-xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                Finding dental care should not feel complicated.
              </h2>

              <p className="mt-6 max-w-lg text-base leading-7 text-[#52616a]">
                Patients often arrive with questions before they are ready to
                book. The website should answer those questions clearly,
                without forcing people to search through confusing menus.
              </p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="divide-y divide-[#10212b]/10 border-y border-[#10212b]/10">
                {[
                  "I want to understand what treatment I might need.",
                  "I want to know what the visit will involve.",
                  "I want clear information before contacting the clinic.",
                  "I want an easy way to take the next step.",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-5 py-6 sm:py-7"
                  >
                    <span className="font-mono text-xs font-semibold text-[#3f8f89]">
                      0{index + 1}
                    </span>

                    <p className="max-w-xl font-display text-lg font-semibold leading-7 text-[#10212b] sm:text-xl">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BENEFITS
      ========================================================== */}
      <section className="bg-[#e9f2f0] py-24 sm:py-32">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#3f8f89]">
              What patients get
            </p>

            <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.05em] sm:text-5xl md:text-6xl">
              Less uncertainty.
              <br />
              More confidence.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#52616a]">
              The experience is designed around the information patients need
              before they feel ready to book.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Sparkles,
                title: "Understand your options",
                text: "Services are explained in language that helps patients understand what each type of care is for.",
              },
              {
                icon: HeartPulse,
                title: "Feel more prepared",
                text: "Important information is presented before the appointment rather than hidden behind unnecessary steps.",
              },
              {
                icon: Calendar,
                title: "Know what to do next",
                text: "Clear calls to action make it easier to move from researching care to contacting the clinic.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="border-t border-[#10212b]/15 pt-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#10212b] text-white">
                      <Icon size={18} />
                    </div>

                    <span className="font-mono text-xs font-semibold text-[#3f8f89]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 font-display text-2xl font-bold tracking-[-0.03em] text-[#10212b]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#52616a]">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================== */}
      <section id="services" className="bg-white py-24 sm:py-32">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#3f8f89]">
                Services
              </p>

              <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                The care patients are looking for.
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-[#52616a] lg:col-span-4 lg:col-start-9">
              Proposed service categories can be replaced with the clinic&apos;s
              verified services, descriptions and treatment information before
              launch.
            </p>
          </div>

          <div className="mt-14 divide-y divide-[#10212b]/10 border-y border-[#10212b]/10">
            {concept.services.map((service, index) => (
              <div
                key={service}
                className="group flex items-center justify-between gap-6 py-7 sm:py-8"
              >
                <div className="flex items-start gap-5 sm:gap-8">
                  <span className="pt-1 font-mono text-xs font-semibold text-[#3f8f89]">
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-[#10212b] sm:text-2xl">
                      {service}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-[#52616a]">
                      Clear information about this area of care, who it is for,
                      and what patients should expect.
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-[#52616a] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#3f8f89]"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================== */}
      <section id="process" className="bg-[#10212b] py-24 text-white sm:py-32">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#8fd3cb]">
                How it works
              </p>

              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                A simpler path to care.
              </h2>

              <p className="mt-6 max-w-lg text-base leading-7 text-white/55">
                The proposed journey keeps the patient moving forward without
                overwhelming them with unnecessary choices.
              </p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="divide-y divide-white/10">
                {[
                  {
                    icon: MessageCircle,
                    title: "Tell us what you need",
                    description:
                      "Start with the concern, service or question that brought you to the clinic.",
                  },
                  {
                    icon: Stethoscope,
                    title: "Explore the right care",
                    description:
                      "Understand the relevant service and what to expect before taking the next step.",
                  },
                  {
                    icon: Calendar,
                    title: "Book your appointment",
                    description:
                      "Move directly to the clinic's preferred booking or contact method.",
                  },
                ].map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <article
                      key={step.title}
                      className="flex gap-5 py-7 first:pt-0 last:pb-0 sm:gap-7"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#8fd3cb] text-[#10212b]">
                        <Icon size={18} />
                      </div>

                      <div>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[10px] font-semibold text-[#8fd3cb]">
                            0{index + 1}
                          </span>

                          <h3 className="font-display text-xl font-bold">
                            {step.title}
                          </h3>
                        </div>

                        <p className="mt-3 text-sm leading-7 text-white/55">
                          {step.description}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIAL PLACEHOLDER
      ========================================================== */}
      <section className="bg-[#f7f8f7] py-24 sm:py-32">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-20">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#3f8f89]">
                Patient stories
              </p>

              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.02] tracking-[-0.05em] sm:text-5xl">
                Real experiences belong here.
              </h2>

              <p className="mt-6 text-base leading-7 text-[#52616a]">
                The finished website can introduce genuine patient experiences
                once the clinic supplies and approves the content.
              </p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="rounded-[2rem] border border-dashed border-[#10212b]/20 bg-white p-7 sm:p-9">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e9f2f0] text-[#3f8f89]">
                  <MessageCircle size={18} />
                </div>

                <p className="mt-7 font-display text-2xl font-semibold leading-8 tracking-[-0.025em] text-[#10212b]">
                  “This space can feature a genuine patient story about their
                  experience with the clinic.”
                </p>

                <div className="mt-8 border-t border-[#10212b]/10 pt-5">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#3f8f89]">
                    Client-supplied testimonial
                  </p>

                  <p className="mt-2 text-xs leading-5 text-[#52616a]">
                    Replace with verified patient content before launch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================== */}
      <section id="faq" className="bg-[#e9f2f0] py-24 sm:py-32">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#3f8f89]">
                FAQ
              </p>

              <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
                Answers before you ask.
              </h2>

              <p className="mt-5 text-base leading-7 text-[#52616a]">
                Important information can be surfaced here to help patients
                feel comfortable before contacting the clinic.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="divide-y divide-[#10212b]/10 border-y border-[#10212b]/10">
                {[
                  {
                    question: "How much will my visit cost?",
                    answer:
                      "The finished website should provide the clinic's verified pricing, insurance information and payment options where appropriate.",
                  },
                  {
                    question: "How quickly can I get an appointment?",
                    answer:
                      "Actual availability, emergency appointments and expected wait times should be supplied by the clinic before launch.",
                  },
                  {
                    question: "What if I need to cancel or reschedule?",
                    answer:
                      "The final page should clearly explain the clinic's verified cancellation and rescheduling policy.",
                  },
                  {
                    question: "Do you accept my insurance?",
                    answer:
                      "A verified list of accepted insurance providers and payment methods should be supplied by the clinic.",
                  },
                  {
                    question: "What should I expect at my first visit?",
                    answer:
                      "The clinic can use this section to explain preparation, paperwork, timing and what patients can expect during their first appointment.",
                  },
                  {
                    question: "How is my information handled?",
                    answer:
                      "The final website should link to the clinic's actual privacy policy and explain its verified data-handling practices.",
                  },
                ].map((item) => (
                  <details key={item.question} className="group py-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-bold text-[#10212b] marker:hidden">
                      {item.question}

                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#10212b]/15 text-[#52616a] transition-transform duration-300 group-open:rotate-45">
                        <span className="text-xl font-normal leading-none">
                          +
                        </span>
                      </span>
                    </summary>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[#52616a]">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section id="appointment" className="bg-white py-24 sm:py-32">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[2.25rem] bg-[#10212b] px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div className="absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-[#3f8f89]/25 blur-3xl" />

            <div className="relative max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#8fd3cb]">
                Take the next step
              </p>

              <h2 className="mt-5 font-display text-4xl font-bold leading-[1] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                Your next appointment can start here.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                A focused final call to action gives patients one obvious next
                step while leaving room for questions when they need them.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#8fd3cb] px-6 py-3.5 text-sm font-semibold text-[#10212b] transition-all hover:-translate-y-0.5 hover:bg-[#a9e2dc]"
                >
                  {concept.cta}
                  <ArrowRight size={16} aria-hidden="true" />
                </a>

                <a
                  href="#faq"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
                >
                  Still have questions?
                </a>
              </div>

              <div className="mt-10 grid gap-4 border-t border-white/10 pt-7 sm:grid-cols-3">
                <div className="flex items-start gap-2 text-sm text-white/65">
                  <ShieldCheck
                    size={16}
                    className="mt-0.5 shrink-0 text-[#8fd3cb]"
                  />
                  <span>Clear information before booking</span>
                </div>

                <div className="flex items-start gap-2 text-sm text-white/65">
                  <Clock3
                    size={16}
                    className="mt-0.5 shrink-0 text-[#8fd3cb]"
                  />
                  <span>A simpler path to the next step</span>
                </div>

                <div className="flex items-start gap-2 text-sm text-white/65">
                  <Users
                    size={16}
                    className="mt-0.5 shrink-0 text-[#8fd3cb]"
                  />
                  <span>Designed around patients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CLOSING
      ========================================================== */}
      <section id="contact" className="bg-[#f7f8f7] py-24 sm:py-32">
        <div className="site-container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#3f8f89]">
              Start here
            </p>

            <h2 className="mt-6 font-display text-5xl font-bold leading-[0.92] tracking-[-0.06em] sm:text-6xl md:text-7xl">
              Clear care.
              <br />
              Clear next step.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#52616a]">
              A proposed digital experience designed to make dental care easier
              to understand and easier to act on.
            </p>

            <a
              href="#appointment"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#10212b] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#21404d]"
            >
              {concept.cta}
              <ArrowRight size={16} aria-hidden="true" />
            </a>

            <p className="mt-10 text-xs leading-5 text-[#52616a]/60">
              Proposed design concept by Julie Lupex · Not an official
              {isDental ? " SmileCare Dental Hospital" : " organization"}{" "}
              website. Organization-specific claims, testimonials,
              credentials, contact details, pricing, availability and policies
              should be verified before launch.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}