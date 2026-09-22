export type Service = {
  title: string;
  focus: string;
  description: string;
  icon:
    | "monitor"
    | "server"
    | "layers"
    | "pen"
    | "component"
    | "app"
    | "cloud"
    | "braces"
    | "bag"
    | "globe";
};

export const services: Service[] = [
  {
    title: "Front-End Developer",
    focus: "User Interface",
    description:
      "Creating responsive, accessible and interactive interfaces that make websites feel intuitive and polished.",
    icon: "monitor",
  },
  {
    title: "Back-End Developer",
    focus: "Servers & APIs",
    description:
      "Building reliable backend systems, business logic, databases and APIs that power modern applications.",
    icon: "server",
  },
  {
    title: "Full-Stack Developer",
    focus: "Front + Back End",
    description:
      "Connecting beautiful interfaces with powerful backend systems to create complete digital products.",
    icon: "layers",
  },
  {
    title: "Web Designer",
    focus: "Visual Design / UI",
    description:
      "Designing clean, modern and conversion-focused interfaces with attention to typography, hierarchy and usability.",
    icon: "pen",
  },
  {
    title: "UI Developer",
    focus: "Interfaces & Components",
    description:
      "Building reusable UI components and consistent design systems for scalable digital products.",
    icon: "component",
  },
  {
    title: "Web Application Developer",
    focus: "Complex Web Apps",
    description:
      "Developing interactive applications that solve business and user problems.",
    icon: "app",
  },
  {
    title: "DevOps Engineer",
    focus: "Deployment & Infrastructure",
    description:
      "Helping applications move from development to production through deployment, hosting, automation and infrastructure practices.",
    icon: "cloud",
  },
  {
    title: "Software Engineer",
    focus: "Software Systems",
    description:
      "Applying software engineering principles to build maintainable, scalable and reliable solutions.",
    icon: "braces",
  },
  {
    title: "E-commerce Developer",
    focus: "Online Stores",
    description:
      "Creating e-commerce experiences that make product discovery, checkout and online selling easier.",
    icon: "bag",
  },
  {
    title: "WordPress Developer",
    focus: "WordPress Websites",
    description:
      "Building customized, responsive and maintainable WordPress websites for individuals and businesses.",
    icon: "globe",
  },
];

export type SkillGroup = {
  title: string;
  blurb: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Front-End",
    blurb: "Interfaces that respond beautifully to every screen and every user.",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "UI Development",
      "Animations",
      "Accessibility",
    ],
  },
  {
    title: "Back-End",
    blurb: "The logic, data and APIs that make interfaces actually do something.",
    items: [
      "REST APIs",
      "Server-side Development",
      "Authentication",
      "Databases",
      "API Integration",
      "Business Logic",
    ],
  },
  {
    title: "Development",
    blurb: "The habits and tools that keep code clean, testable and easy to evolve.",
    items: [
      "Git",
      "GitHub",
      "Debugging",
      "Testing",
      "Performance Optimization",
      "Component Architecture",
    ],
  },
  {
    title: "Platforms",
    blurb: "Taking products from a local machine to people who need them.",
    items: [
      "WordPress",
      "E-commerce",
      "Web Hosting",
      "Deployment",
      "Cloud Infrastructure",
    ],
  },
];

export const toolkitLabels = [
  "Modern JavaScript",
  "Front-End",
  "APIs",
  "Databases",
  "WordPress",
  "Deployment",
];

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  intro: string;
  problem: string;
  solution: string;
  features: string[];
  process: { step: string; title: string; text: string }[];
  outcomes: string[];
};

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200`;

export const projects: Project[] = [
  {
    slug: "kijani-market",
    index: "01",
    title: "Kijani Market",
    category: "E-commerce / Full-Stack",
    description:
      "An e-commerce concept for a modern African marketplace — a responsive online store focused on product discovery, shopping and streamlined checkout.",
    tags: ["E-commerce", "Full-Stack", "UI Design", "Databases"],
    image: px(6214362),
    imageAlt:
      "Smartphone showing an online shop next to a credit card and a paper bag — concept imagery for the Kijani Market e-commerce project.",
    intro:
      "Kijani Market is a full-stack e-commerce concept that imagines how a modern African marketplace could feel: warm, fast and effortless to shop on, from a bright product grid to a checkout that never gets in the way.",
    problem:
      "Small businesses need a simple way to present and sell products online. Many existing options feel generic, crowded or heavy on slower connections — and for sellers, the effort of setting up a store often outweighs the benefit.",
    solution:
      "A responsive e-commerce experience designed around product discovery and simple purchasing. Clean category structures, generous product imagery, and a checkout flow reduced to the essentials — wrapped in a visual language that feels crafted rather than templated.",
    features: [
      "Responsive product catalog with category and search-driven discovery",
      "Product detail pages with clear pricing, imagery and availability states",
      "Cart and streamlined checkout flow with minimal form friction",
      "Database-backed product, order and inventory model",
      "REST API layer separating the storefront from business logic",
      "Mobile-first layouts designed for slower connections",
    ],
    process: [
      {
        step: "01",
        title: "Research",
        text: "Studied how people actually browse and buy on mobile marketplaces — what makes them trust a store, and where they abandon a purchase.",
      },
      {
        step: "02",
        title: "Structure",
        text: "Mapped the information architecture: catalogs, product pages, cart, checkout and the data model behind products and orders.",
      },
      {
        step: "03",
        title: "Interface",
        text: "Designed a warm, editorial storefront — strong typography, confident spacing and product photography given room to breathe.",
      },
      {
        step: "04",
        title: "Development",
        text: "Built the responsive front end, the API layer and the database schema, keeping components reusable from the start.",
      },
      {
        step: "05",
        title: "Testing",
        text: "Walked the full buying journey across devices and network conditions, checking forms, edge cases and empty states.",
      },
      {
        step: "06",
        title: "Deployment",
        text: "Prepared a production-ready build with environment configuration and a deployment path that can scale with a growing catalog.",
      },
    ],
    outcomes: [
      "Cleaner navigation from landing page to product",
      "Responsive experience across phone, tablet and desktop",
      "Streamlined shopping flow with fewer steps to purchase",
      "Scalable architecture ready for more sellers and categories",
    ],
  },
  {
    slug: "afyaconnect",
    index: "02",
    title: "AfyaConnect",
    category: "Web Application",
    description:
      "A healthcare appointment web application concept — a clean interface for connecting users with healthcare services and managing appointments.",
    tags: ["Web Application", "UI Development", "APIs", "Authentication"],
    image: px(4266931),
    imageAlt:
      "A healthcare provider holding a tablet while consulting a patient — concept imagery for the AfyaConnect appointment application.",
    intro:
      "AfyaConnect is a web application concept that explores how booking healthcare could feel calmer: find a service, choose a time, and arrive with everything confirmed — no phone queues, no uncertainty.",
    problem:
      "Booking a healthcare appointment is often needlessly hard. Information lives in different places, availability is opaque, and reminders depend on memory. For users already dealing with a health concern, friction in the booking experience is the last thing they need.",
    solution:
      "A clean, reassuring appointment experience: searchable services, clear practitioner information, a simple date-and-time flow, and a personal dashboard where upcoming and past appointments stay organized. The interface prioritizes legibility, calm color and obvious next steps.",
    features: [
      "Service and practitioner discovery with clear availability states",
      "Guided appointment booking flow with confirmation summary",
      "Personal dashboard for upcoming and past appointments",
      "Authentication concept with secure session handling",
      "Accessible forms with helpful validation and error copy",
      "Notification-ready structure for reminders and updates",
    ],
    process: [
      {
        step: "01",
        title: "Research",
        text: "Looked at real booking journeys and identified the moments where users hesitate: unclear pricing, confusing times, and missing confirmation.",
      },
      {
        step: "02",
        title: "Structure",
        text: "Defined the core entities — services, practitioners, slots and appointments — and the screens each user type would need.",
      },
      {
        step: "03",
        title: "Interface",
        text: "Designed a calm, high-legibility UI with obvious primary actions and generous touch targets for mobile users.",
      },
      {
        step: "04",
        title: "Development",
        text: "Implemented the booking flow as a series of small, testable steps with a clear API contract behind each one.",
      },
      {
        step: "05",
        title: "Testing",
        text: "Tested form validation, authentication states and the full booking journey, including cancellations and rescheduling.",
      },
      {
        step: "06",
        title: "Deployment",
        text: "Outlined a deployment setup with environment separation and database migrations ready for a production rollout.",
      },
    ],
    outcomes: [
      "A booking flow that reads clearly from start to confirmation",
      "Consistent appointment states users can trust",
      "Accessible, mobile-friendly forms throughout",
      "Architecture ready for reminders and messaging features",
    ],
  },
  {
    slug: "nia-finance",
    index: "03",
    title: "Nia Finance",
    category: "UI / Web Application",
    description:
      "A personal finance dashboard concept for tracking spending, financial goals and personal insights — designed to make numbers feel readable.",
    tags: ["Dashboard UI", "Data Visualization", "Web Application", "Design System"],
    image: px(38375326),
    imageAlt:
      "A dark desk setup displaying financial charts on multiple screens — concept imagery for the Nia Finance dashboard project.",
    intro:
      "Nia Finance is a dashboard concept built around one belief: people engage with their money when the interface stops shouting. It turns spending, saving and goals into a calm, glanceable picture.",
    problem:
      "Finance tools often overwhelm: dense tables, competing charts and jargon at every turn. The result is that people check in rarely and leave without real insight.",
    solution:
      "A dashboard organized by questions rather than features — 'Where did my money go?', 'Am I on track?', 'What changed this month?' — with a restrained visual system, clear hierarchy and charts that answer one thing at a time.",
    features: [
      "Overview dashboard with income, spending and savings summaries",
      "Category breakdowns with friendly, human-readable labels",
      "Goal tracking with progress states and projections",
      "Reusable chart and stat-card component system",
      "Dark, low-glare interface designed for daily check-ins",
    ],
    process: [
      { step: "01", title: "Research", text: "Identified the questions people actually ask of their money and let those questions drive the layout." },
      { step: "02", title: "Structure", text: "Defined the component hierarchy: summary cards, primary chart, breakdowns and goal panels." },
      { step: "03", title: "Interface", text: "Built a restrained dark UI with a single accent color guiding the eye to what changed." },
      { step: "04", title: "Development", text: "Implemented a component-driven front end with mock data shaped like a real API response." },
      { step: "05", title: "Testing", text: "Checked readability, tab order and chart legibility across screen sizes and zoom levels." },
      { step: "06", title: "Deployment", text: "Packaged the concept as a static-ready build that could connect to a live data source later." },
    ],
    outcomes: [
      "Numbers that read clearly at a glance",
      "A component system that scales to new widgets",
      "Consistent dark-theme visual language",
      "Structure ready for real API data",
    ],
  },
  {
    slug: "studioflow",
    index: "04",
    title: "StudioFlow",
    category: "Full-Stack",
    description:
      "A creative agency management platform concept — one place to manage clients, projects, tasks and communication without the tool sprawl.",
    tags: ["Full-Stack", "Web Application", "Databases", "Business Logic"],
    image: px(7675029),
    imageAlt:
      "A creative team collaborating around a computer in a studio — concept imagery for the StudioFlow agency platform project.",
    intro:
      "StudioFlow imagines the operating system of a small creative studio: clients, projects, tasks and conversations moving through one clear pipeline instead of five disconnected tools.",
    problem:
      "Small studios run on scattered spreadsheets, chat threads and memory. Work slips between the cracks — not because the team is careless, but because the system makes it easy to lose track.",
    solution:
      "A single, structured workspace concept: a client pipeline, project boards with honest statuses, and a task model that makes ownership and deadlines obvious. Full-stack by design, with the data model driving the interface.",
    features: [
      "Client directory with project history and contact context",
      "Project boards with clear status states from inquiry to delivery",
      "Task model with owners, deadlines and priority flags",
      "Role-aware views for team members and studio leads",
      "Relational data model connecting clients, projects and tasks",
    ],
    process: [
      { step: "01", title: "Research", text: "Mapped a typical studio week and listed every place work gets tracked — then designed to unify them." },
      { step: "02", title: "Structure", text: "Designed the schema first: clients, projects, tasks and activity, with the UI derived from it." },
      { step: "03", title: "Interface", text: "Created dense-but-calm screens that show more signal and less chrome." },
      { step: "04", title: "Development", text: "Built the application around a clean API layer so the interface stays a thin, honest view of the data." },
      { step: "05", title: "Testing", text: "Exercised the workflow end to end: new inquiry, scoped project, delivered work." },
      { step: "06", title: "Deployment", text: "Planned a hosted database and staged deployment suitable for a small team's daily use." },
    ],
    outcomes: [
      "One source of truth for clients and projects",
      "Statuses that reflect reality, not optimism",
      "A data model that supports future reporting",
      "Fewer tools to check before starting the day",
    ],
  },
  {
    slug: "lupex-commerce",
    index: "05",
    title: "Lupex Commerce",
    category: "E-commerce",
    description:
      "A modern online-store experience concept — editorial product pages, confident typography and a checkout that respects the shopper's time.",
    tags: ["E-commerce", "Web Design", "Front-End", "Performance"],
    image: px(5076525),
    imageAlt:
      "A person using a smartphone to shop for clothing online — concept imagery for the Lupex Commerce storefront project.",
    intro:
      "Lupex Commerce is a storefront concept exploring what happens when an online shop is treated like a well-designed magazine: product-first, typographically confident and quick to buy from.",
    problem:
      "Many online stores bury their products under pop-ups, clutter and slow pages. Shoppers who would happily buy give up because the experience fights them at every step.",
    solution:
      "A store concept stripped back to what converts: strong imagery, honest pricing, visible variants and a checkout that never asks for the same information twice.",
    features: [
      "Editorial product pages with prominent imagery and clear variants",
      "Persistent mini-cart with instant feedback",
      "Short, single-column checkout concept",
      "Performance-first image strategy for fast product browsing",
      "Design language flexible enough to rebrand per store",
    ],
    process: [
      { step: "01", title: "Research", text: "Reviewed high-converting storefronts and catalogued the patterns that reduce hesitation." },
      { step: "02", title: "Structure", text: "Defined the shopping flow: home, category, product, cart, checkout — and nothing else." },
      { step: "03", title: "Interface", text: "Designed a minimal, brandable theme with typography doing the heavy lifting." },
      { step: "04", title: "Development", text: "Built the storefront front end with a component library reusable across store themes." },
      { step: "05", title: "Testing", text: "Tested the purchase flow on small screens, slow networks and keyboard-only navigation." },
      { step: "06", title: "Deployment", text: "Prepared the concept for hosted storefront deployment with environment-based configuration." },
    ],
    outcomes: [
      "A store that feels designed, not assembled",
      "Fast browsing even on modest connections",
      "Checkout reduced to the essentials",
      "A theme system ready for real catalogs",
    ],
  },
  {
    slug: "wordpress-business-hub",
    index: "06",
    title: "WordPress Business Hub",
    category: "WordPress / Web Design",
    description:
      "A professional business website concept built on WordPress — a maintainable, responsive site a business can actually update itself.",
    tags: ["WordPress", "Web Design", "Responsive", "Content"],
    image: px(7181184),
    imageAlt:
      "A laptop on a wooden desk displaying a business website — concept imagery for the WordPress Business Hub project.",
    intro:
      "WordPress Business Hub is a concept for the classic small-business problem: a site that looks credible on day one and stays easy to update on day three hundred.",
    problem:
      "Business sites often end up in one of two traps: a rigid template that looks like everyone else's, or a custom build nobody dares to touch. Both quietly go out of date.",
    solution:
      "A WordPress design system concept: reusable content blocks for services, team, testimonials and contact — so the business edits content, never layout.",
    features: [
      "Custom page structure with reusable content sections",
      "Responsive theme styling with strong typographic hierarchy",
      "Editor-friendly blocks for services, FAQs and calls to action",
      "Contact and quote-request flows connected to forms",
      "Performance and security hardening checklist included in the concept",
    ],
    process: [
      { step: "01", title: "Research", text: "Identified what a business site must answer in ten seconds: what, for whom, why you, and how to reach you." },
      { step: "02", title: "Structure", text: "Mapped pages and block types around those answers — home, services, about, contact." },
      { step: "03", title: "Interface", text: "Designed a confident, neutral visual system that adapts to any brand palette." },
      { step: "04", title: "Development", text: "Built the theme concept with clean templates and disciplined use of plugins." },
      { step: "05", title: "Testing", text: "Checked editing flows, responsive behavior and form delivery end to end." },
      { step: "06", title: "Deployment", text: "Documented hosting, backup and update practices for long-term maintainability." },
    ],
    outcomes: [
      "A site the business can update without fear",
      "Consistent design across every new page",
      "Fast, responsive pages out of the box",
      "Maintainable foundation with clear documentation",
    ],
  },
  {
    slug: "api-analytics",
    index: "07",
    title: "API Analytics",
    category: "Backend / API",
    description:
      "A developer-focused analytics dashboard concept — turning raw request logs into a readable picture of API health and usage.",
    tags: ["Backend", "REST APIs", "Data Modeling", "Dashboard"],
    image: px(10816120),
    imageAlt:
      "Programming code in a dark theme on a computer screen — concept imagery for the API Analytics project.",
    intro:
      "API Analytics is a backend-oriented concept: collect request data, model it well, and present it back as a dashboard developers actually want to open.",
    problem:
      "APIs fail quietly. Without visibility into latency, error rates and usage patterns, teams learn about problems from their users — the worst possible monitoring system.",
    solution:
      "An analytics pipeline concept: a clean ingestion API, a schema built for time-series queries, and a dashboard that puts error spikes and slow endpoints front and center.",
    features: [
      "REST ingestion API for request and event data",
      "Query model optimized for time-windowed aggregates",
      "Dashboard with latency, error-rate and volume views",
      "Endpoint-level drilldowns for debugging",
      "Authentication concept for scoped API keys",
    ],
    process: [
      { step: "01", title: "Research", text: "Listed the five questions an on-call developer asks first and designed around answering them fast." },
      { step: "02", title: "Structure", text: "Designed the event schema and index strategy before any UI work began." },
      { step: "03", title: "Interface", text: "Built a utilitarian dashboard: dense information, zero decoration." },
      { step: "04", title: "Development", text: "Implemented ingestion, aggregation queries and the dashboard against realistic test data." },
      { step: "05", title: "Testing", text: "Load-shaped the ingestion path and verified aggregates against raw fixtures." },
      { step: "06", title: "Deployment", text: "Outlined a containerized deployment with a managed database and scheduled rollups." },
    ],
    outcomes: [
      "API health visible in seconds, not support tickets",
      "A schema that stays fast as data grows",
      "Clear separation between ingestion and presentation",
      "A foundation for alerting and retention policies",
    ],
  },
  {
    slug: "deployment-lab",
    index: "08",
    title: "Deployment Lab",
    category: "DevOps",
    description:
      "A technical infrastructure and deployment showcase concept — the unglamorous, essential work of shipping reliably, made visible.",
    tags: ["DevOps", "Deployment", "Cloud", "Automation"],
    image: px(5480781),
    imageAlt:
      "Server racks inside a data center — concept imagery for the Deployment Lab infrastructure project.",
    intro:
      "Deployment Lab is a showcase concept for the part of web development nobody screenshots: pipelines, environments, rollbacks and the calm that comes from shipping without fear.",
    problem:
      "For many projects, deployment is a manual ritual — copy files, cross fingers, watch the logs. Every manual step is a future mistake waiting for a tired Friday afternoon.",
    solution:
      "A documented deployment pipeline concept: build, test and release stages automated end to end, with environment parity between staging and production and a rollback path that takes one command.",
    features: [
      "Automated build-and-test pipeline concept for web projects",
      "Staging and production environments with matching configuration",
      "Zero-downtime release strategy with instant rollback",
      "Health checks and status endpoints for every service",
      "Infrastructure notes written for humans, not just machines",
    ],
    process: [
      { step: "01", title: "Research", text: "Catalogued the manual steps in a typical deployment and ranked them by risk." },
      { step: "02", title: "Structure", text: "Designed the pipeline stages: install, build, test, package, release." },
      { step: "03", title: "Interface", text: "Defined the human interface: clear logs, meaningful status and readable failure messages." },
      { step: "04", title: "Development", text: "Automated the pipeline and environment configuration end to end." },
      { step: "05", title: "Testing", text: "Practiced failures deliberately: bad builds, rolled-back releases and rehearsed recovery drills." },
      { step: "06", title: "Deployment", text: "Shipped the pipeline itself, then used it to deploy the demo application." },
    ],
    outcomes: [
      "Releases that are boring — in the best way",
      "Every step reproducible and versioned",
      "Fear removed from Friday deployments",
      "A template reusable across future projects",
    ],
  },
];

export const projectFilters = [
  "All",
  "E-commerce",
  "Web Application",
  "Full-Stack",
  "WordPress",
  "Backend / API",
  "DevOps",
];

export function projectMatchesFilter(p: Project, filter: string): boolean {
  if (filter === "All") return true;
  return p.category.includes(filter);
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
