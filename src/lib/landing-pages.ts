export type LandingPageConcept = {
  slug: string;
  title: string;
  category: string;
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
  featured?: boolean;
};

export const landingPageConcepts: LandingPageConcept[] = [
  {
    slug: "dentalcleans",
    title: "SmileCare Dental Hospital",
    category: "Healthcare",
    audience: "Individuals and families looking for accessible, professional dental care",
    description:
      "A proposed dental website experience focused on helping patients understand their care options, build confidence and book an appointment with less friction.",
    eyebrow: "Dental Care · Patient Conversion",
    heroTitle: "Healthy teeth. Confident smiles.",
    heroDescription:
      "A clearer digital experience designed to help patients quickly understand the care available to them and take the next step with confidence.",
    benefits: [
      "Understand your dental care options quickly",
      "Find the right service without searching through confusing menus",
      "Know what to expect before booking an appointment",
    ],
    services: [
      "General dental care",
      "Preventive and routine care",
      "Restorative treatments",
      "Cosmetic dental services",
    ],
    trustPoints: [
      "Clear information before you book",
      "Patient-focused service presentation",
      "Simple paths to contact the dental team",
      "A professional digital experience built around reassurance",
    ],
    steps: [
      "Tell us what you need",
      "Choose the right dental service",
      "Book a convenient appointment",
    ],
    cta: "Book an appointment",
    featured: true,
  },
];