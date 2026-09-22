import type { Metadata } from "next";
import { Mail, Phone, UserRound, MessageSquareText, CalendarCheck, Reply } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Let's Build Something Great",
  description:
    "Start a conversation with Julie Lupex about your website, web application, e-commerce, WordPress or full-stack project. Email julielupex@gmail.com or call 0797 843 007.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Julie Lupex — Let's Build Something Great",
    description:
      "Start a conversation with Julie Lupex about your website, web application, e-commerce, WordPress or full-stack project.",
  },
};

const nextSteps = [
  {
    icon: MessageSquareText,
    title: "You share the idea",
    text: "A few sentences are plenty — what it is, who it's for, and when you'd love it live.",
  },
  {
    icon: Reply,
    title: "Julie replies personally",
    text: "No autoresponders pretending to be people. You get a real reply with real first thoughts.",
  },
  {
    icon: CalendarCheck,
    title: "We map the build",
    text: "Scope, timeline and a plan you understand — then the building starts, in the open.",
  },
];

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Contact"
        title="Let's Build Something Great"
        description="Have an idea, a website that needs rebuilding, or a digital product you've been thinking about? Tell Julie what you're working on and let's explore what can be built."
        crumb="Contact"
      />

      <section className="bg-paper py-24 sm:py-28" aria-label="Contact details and form">
        <div className="site-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
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
                          Phone
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
                  Available for freelance projects — usually replies within a day or two.
                </p>
              </div>
            </Reveal>

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
