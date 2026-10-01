import type { Metadata } from "next";
import { Mail, Phone, UserRound, MessageSquareText, CalendarCheck, Reply } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Inquiries — Julie Lupex | Full-Stack Web Developer",
  description:
    "Get in touch with Julie Lupex for web engineering, full-stack application development, API integrations, or technical consulting. Let's discuss your project goals.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Julie Lupex — Let's Build Something Great",
    description:
      "Initiate a conversation about your web application, e-commerce platform, or technical architecture.",
  },
};

const nextSteps = [
  {
    icon: MessageSquareText,
    title: "Share your goals & scope",
    text: "A brief summary of your product, target audience, and ideal timeline is all we need to get started.",
  },
  {
    icon: Reply,
    title: "I evaluate & respond directly",
    text: "No sales reps or automated templates. I personally review your requirements and provide initial technical feedback.",
  },
  {
    icon: CalendarCheck,
    title: "We architect the roadmap",
    text: "We align on scope, architecture, and transparent milestones before writing the first line of production code.",
  },
];

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Build Something Exceptional"
        description="Whether you're launching a new product from scratch, modernizing an existing web platform, or seeking full-stack engineering expertise—tell me about your goals and let's map out the right solution."
        crumb="Contact"
      />

      <section className="bg-paper py-24 sm:py-28" aria-label="Contact details and form">
        <div className="site-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* ---------- Contact Details Sidebar ---------- */}
          <div>
            <Reveal>
              <div className="card-lift rounded-3xl border border-ink/10 bg-ink p-8 sm:p-9">
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl border border-violet/40 bg-ink-3 font-display text-lg font-bold text-violet">
                    JL
                  </span>
                  <div>
                    <h2 className="font-display text-xl font-bold text-paper">{site.name}</h2>
                    <p className="text-sm text-mist">{site.role}</p>
                  </div>
                </div>
                <ul className="mt-8 space-y-4">
                  <li>
                    <a
                      href={site.emailHref}
                      className="group flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-violet/50"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet text-ink">
                        <Mail size={17} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-[0.18em] text-mist">
                          Email
                        </span>
                        <span className="block font-medium text-paper transition-colors group-hover:text-violet-2">
                          {site.email}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.phoneHref}
                      className="group flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-violet/50"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet text-ink">
                        <Phone size={17} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-[0.18em] text-mist">
                          Direct Line
                        </span>
                        <span className="block font-medium text-paper transition-colors group-hover:text-violet-2">
                          {site.phoneDisplay}
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
                <p className="mt-7 flex items-center gap-2.5 border-t border-white/10 pt-6 text-sm text-mist">
                  <span className="pulse-dot h-2 w-2 rounded-full bg-mint" aria-hidden="true" />
                  Available for select freelance &amp; contract projects — responding within 24 hours.
                </p>
              </div>
            </Reveal>

            {/* ---------- What Happens Next ---------- */}
            <div className="mt-8 space-y-4">
              {nextSteps.map((s, i) => (
                <Reveal key={s.title} delay={i * 80}>
                  <div className="flex gap-4 rounded-2xl border border-ink/10 bg-white p-5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink text-violet">
                      <s.icon size={17} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-[0.98rem] font-bold text-ink">
                        <span className="mr-1.5 font-mono text-xs text-deep" aria-hidden="true">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {s.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-body">{s.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* ---------- Form Section ---------- */}
          <Reveal variant="right" delay={100}>
            <div className="mb-6 flex items-center gap-3">
              <UserRound size={18} className="text-deep" aria-hidden="true" />
              <h2 className="font-display text-2xl font-bold tracking-[-0.01em] text-ink">
                Tell me about your project
              </h2>
            </div>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}