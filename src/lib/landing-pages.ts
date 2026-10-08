export type ScreenshotItem = {
src: string;
label: string;
caption?: string;
};

export type LandingPageConcept = {
slug: string;
title: string;
category: string;
tagline: string;
audience: string;
description: string;
eyebrow: string;
heroTitle: string;
heroDescription: string;
benefits: string[];
services: string[];
trustPoints: string[];
steps: string[];
cta: string;

/** Portfolio project metadata */
liveUrl: string;
thumbnail: string;
techStack: string[];
problem: string;
solution: string;
desktopScreenshots: ScreenshotItem[];
mobileScreenshots: ScreenshotItem[];

featured?: boolean;
};

export const landingPageConcepts: LandingPageConcept[] = [
{
slug: "dentalcleans",
title: "DentalCleans",
category: "Healthcare Website",
tagline: "A clearer digital experience for modern dental care.",
audience:
"Dental practices that need a clearer digital experience for prospective and existing patients",


description:
  "A responsive healthcare website concept focused on clearer service discovery, accessible content and a simpler path from browsing to appointment enquiry across desktop and mobile.",

eyebrow: "Healthcare UX · Responsive Design",

heroTitle: "A clearer digital experience for modern dental care.",

heroDescription:
  "A responsive website concept designed to organize healthcare information clearly, guide visitors through available services and make the next step easier to understand.",

benefits: [
  "Make dental services easier to understand",
  "Give visitors clearer paths through the website",
  "Present the experience consistently across desktop and mobile",
],

services: [
  "General dental care",
  "Preventive and routine care",
  "Restorative treatments",
  "Cosmetic dental services",
],

trustPoints: [
  "Clear and accessible service information",
  "Patient-focused content structure",
  "Responsive desktop and mobile experience",
  "Simple paths toward appointment enquiries",
],

steps: [
  "Explore the available services",
  "Understand the relevant care options",
  "Move toward an appointment enquiry",
],

cta: "Book an appointment",

liveUrl: "https://dentalcleans.netlify.app/",

thumbnail:
  "/images/landing-pages/dentalcleans/dental-desktop-01-home.png",

techStack: [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Netlify",
],

problem:
  "Healthcare websites can become difficult to navigate when important services, treatment information and appointment actions are buried beneath complex content structures. DentalCleans explores a clearer way to organize that information around the visitor's next decision.",

solution:
  "The concept uses a responsive, mobile-first interface with clear service groupings, focused content sections and visible paths toward appointment enquiries. Desktop and mobile layouts are treated as connected experiences rather than separate designs.",

desktopScreenshots: [
  {
    src: "/images/landing-pages/dentalcleans/dental-desktop-01-home.png",
    label: "Homepage",
    caption:
      "A focused homepage that introduces the practice and guides visitors toward key services and actions.",
  },
  {
    src: "/images/landing-pages/dentalcleans/dental-desktop-02-about.png",
    label: "About",
    caption:
      "A structured about page designed to communicate the practice clearly and build visitor confidence.",
  },
  {
    src: "/images/landing-pages/dentalcleans/dental-desktop-03-services.png",
    label: "Services",
    caption:
      "A service-focused layout that makes treatment information easier to scan and explore.",
  },
],

mobileScreenshots: [
  {
    src: "/images/landing-pages/dentalcleans/dental-mobile-01-home.png",
    label: "Mobile Homepage",
    caption:
      "The homepage adapted for a narrow mobile viewport with a clear content hierarchy.",
  },
  {
    src: "/images/landing-pages/dentalcleans/dental-mobile-02-about.png",
    label: "Mobile About",
    caption:
      "The about experience remains readable and structured on smaller screens.",
  },
  {
    src: "/images/landing-pages/dentalcleans/dental-mobile-05-appointment.png",
    label: "Mobile Appointment",
    caption:
      "A focused mobile appointment experience that keeps the next action easy to identify.",
  },
],

featured: true,


},
];

export function getConceptBySlug(
slug: string,
): LandingPageConcept | undefined {
return landingPageConcepts.find((concept) => concept.slug === slug);
}

export function getAllConceptSlugs(): string[] {
return landingPageConcepts.map((concept) => concept.slug);
}
