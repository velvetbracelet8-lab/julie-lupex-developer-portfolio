export type BlogBlock =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "list"; items: string[] }
  | { t: "quote"; text: string }
  | { t: "code"; title: string; code: string };

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  blocks: BlogBlock[];
};

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200`;

export const posts: BlogPost[] = [
  {
    slug: "great-websites-start-with-the-user",
    title: "Why Great Websites Start With the User",
    category: "Design Thinking",
    date: "2026-01-14",
    readingTime: "5 min read",
    excerpt:
      "The most elegant code in the world can't save a website that solves the wrong problem. Here's why every build I take on starts with the person on the other side of the screen.",
    image: px(4219134),
    imageAlt:
      "A designer sketching on paper with a pencil — representing user-centered thinking before development begins.",
    blocks: [
      {
        t: "p",
        text: "There's a moment at the start of every project where it's tempting to open a code editor immediately. The idea feels clear, the features feel obvious, and typing feels like progress. But the projects that turn out well almost never start with code. They start with a person — someone trying to buy something, book something, learn something or get something done.",
      },
      {
        t: "p",
        text: "User-centered development isn't a design buzzword. It's a practical engineering discipline: build the wrong thing beautifully and you have still built the wrong thing.",
      },
      { t: "h2", text: "Features are guesses until a user confirms them" },
      {
        t: "p",
        text: "Every feature list is a hypothesis. 'Users will want filters.' 'Users will love a dashboard.' Maybe — but maybe they just want the three most common tasks placed where their thumb already is. When I plan a build, I try to name the single action a visitor came to perform, then protect that action from everything else competing for attention.",
      },
      {
        t: "list",
        items: [
          "What is the visitor trying to accomplish in the first ten seconds?",
          "What would make them trust this page enough to continue?",
          "What is the most likely reason they leave — and can I remove it?",
          "What does a returning user need that a first-time user doesn't?",
        ],
      },
      { t: "h2", text: "Empathy has a technical footprint" },
      {
        t: "p",
        text: "Thinking about users changes real engineering decisions. It means designing for the phone on a slow connection, not just the office monitor. It means form error messages that explain how to fix the problem instead of announcing that the problem exists. It means a focus order that makes sense for someone navigating by keyboard. None of these are decorations — they are correctness, viewed from the user's side.",
      },
      {
        t: "quote",
        text: "A website is finished when the user stops thinking about the website and starts thinking about their own task.",
      },
      { t: "h2", text: "Start small, watch, then build" },
      {
        t: "p",
        text: "The most reliable process I know is humble: define the user's core journey, build that journey well, and let real behavior guide what comes next. Great websites aren't the ones with the most features. They're the ones that feel, to the person using them, like common sense.",
      },
    ],
  },
  {
    slug: "front-end-vs-back-end",
    title: "Front-End vs Back-End: What Really Happens Behind a Website?",
    category: "Web Development",
    date: "2026-01-28",
    readingTime: "6 min read",
    excerpt:
      "You click a button and a page updates. Between those two moments, an entire conversation happens between your browser, a server and a database. Here's the whole story, plainly told.",
    image: px(4164418),
    imageAlt:
      "HTML and JavaScript code in a dark code editor — representing the front-end and back-end of a website.",
    blocks: [
      {
        t: "p",
        text: "Ask someone what a website is and they'll point at the screen. That's fair — the screen is where the website lives for them. But the visible page is only half of the story. Behind every action you take online, two worlds work together: the front end you can see, and the back end you never do.",
      },
      { t: "h2", text: "The front end: everything you can point at" },
      {
        t: "p",
        text: "The front end is the part of the website that runs in your browser. HTML gives the page its structure, CSS gives it style, and JavaScript gives it behavior. When a button changes color as you hover, when a menu slides open, when a form warns you about a missing field before you submit — that's the front end doing its job.",
      },
      { t: "h2", text: "The back end: everything that has to be remembered" },
      {
        t: "p",
        text: "The back end runs on a server — a computer whose job is to respond to requests. It holds the logic that decides what should happen: check this password, calculate this total, save this order. And it talks to the database, which is where information lives permanently. Your browser forgets everything when the tab closes. The database is how a store remembers your cart tomorrow.",
      },
      {
        t: "code",
        title: "A tiny API conversation",
        code: "// Your browser asks:\nGET /api/products/42\n\n// The server checks the database and answers:\n{\n  \"id\": 42,\n  \"name\": \"Handwoven Basket\",\n  \"price\": 2400,\n  \"inStock\": true\n}\n\n// The front end renders that data into the page you see.",
      },
      { t: "h2", text: "APIs: the language between the two" },
      {
        t: "p",
        text: "The front end and back end communicate through an API — an agreed set of requests and responses, usually as structured JSON. The browser asks a precise question ('give me product 42'), the server answers precisely, and the interface turns that answer into something a human enjoys reading. This separation is powerful: the same API can feed a website, a mobile app and a partner's system at once.",
      },
      {
        t: "quote",
        text: "The front end is the conversation. The back end is the memory. The API is the language they share.",
      },
      {
        t: "p",
        text: "Understanding both sides changed how I build. A beautiful interface with a fragile backend is theatre. A robust backend with a hostile interface is a machine nobody operates. The craft is in making the two feel like one continuous experience — which is exactly why I love working across the full stack.",
      },
    ],
  },
  {
    slug: "seven-things-before-finished",
    title: "7 Things I Check Before Calling a Website \"Finished\"",
    category: "Quality",
    date: "2026-02-11",
    readingTime: "5 min read",
    excerpt:
      "\"It works on my machine\" is where websites start, not where they end. This is the checklist standing between a first draft and something I'd put my name on.",
    image: px(8580716),
    imageAlt:
      "A tidy to-do list on a clipboard next to a laptop — representing a pre-launch quality checklist.",
    blocks: [
      {
        t: "p",
        text: "There's a dangerous sentence in web development: 'it's basically done.' Done is a strong word, and I've learned to treat it with suspicion. Before anything I build gets called finished, it has to survive the same seven questions — every time, no exceptions.",
      },
      { t: "h2", text: "1. Does it work on a small phone?" },
      {
        t: "p",
        text: "Not resized once out of curiosity — actually used, thumb and all, on a small screen. Buttons must be tappable, text must not ask to be pinched, and nothing may scroll sideways. Most visitors will meet the site on a phone, so the phone isn't the edge case. It's the main case.",
      },
      { t: "h2", text: "2. Can you use it without a mouse?" },
      {
        t: "p",
        text: "Tab through the whole page. Can you see where you are? Can you open the menu, reach the form, submit it? Keyboard access is the fastest accessibility audit there is, and a site that fails it fails people.",
      },
      { t: "h2", text: "3. How does it behave on a slow connection?" },
      {
        t: "p",
        text: "Throttled networks reveal character. Images should be sized like someone is paying for the data — because someone is. Loading states should keep the page feeling alive while content arrives. A fast site on office Wi-Fi means nothing if it crumbles on a commute.",
      },
      { t: "h2", text: "4. Do the forms fail kindly?" },
      {
        t: "p",
        text: "Every form gets attacked with nonsense before launch: empty submits, half-typed emails, 4,000 characters where four belong. The question isn't whether the form rejects bad input — it's whether it explains, preserves what the user typed, and lets them recover gracefully.",
      },
      {
        t: "list",
        items: [
          "Navigation: does every link go somewhere, and does the active page show itself?",
          "Content: real words everywhere — no lorem ipsum hiding in a footer column.",
          "SEO basics: one clear H1, real titles, descriptions and alt text that means something.",
        ],
      },
      { t: "h2", text: "5–7. The unglamorous three" },
      {
        t: "p",
        text: "Fifth: search engines — semantic HTML, proper headings, meta descriptions that read like an invitation. Sixth: the empty states, because the first thing a new user often sees is nothing at all. Seventh: the click I forgot about — the logo, the social icon, the privacy link in the footer. Small things, but trust is the sum of small things.",
      },
      {
        t: "quote",
        text: "Finished doesn't mean nothing more can be added. It means nothing is left apologizing.",
      },
    ],
  },
  {
    slug: "interfaces-developers-love-building",
    title: "Designing Interfaces Developers Actually Love Building",
    category: "Design Systems",
    date: "2026-02-25",
    readingTime: "5 min read",
    excerpt:
      "The gap between design and development isn't talent — it's translation. Reusable components and honest design systems are how the two sides finally speak the same language.",
    image: px(34212988),
    imageAlt:
      "A workspace showing digital interface sketching on a tablet beside a monitor with code.",
    blocks: [
      {
        t: "p",
        text: "Every developer knows the design that's 'almost done' — a beautiful mockup where every button is slightly different, spacing follows vibes, and the mobile version is 'just make it fit.' Building it becomes archaeology: digging for patterns the design never declared. There's a better way to work, on both sides of the line.",
      },
      { t: "h2", text: "Think in components, not pages" },
      {
        t: "p",
        text: "A page is a temporary arrangement. A component is a permanent decision. When a design is expressed as components — one button, one card, one form field, used consistently — development stops being translation and becomes assembly. The interface gets more consistent for users, and the code gets more maintainable for everyone who touches it later.",
      },
      {
        t: "code",
        title: "One card, many pages",
        code: "// Instead of styling every page from scratch,\n// the design system gives you building blocks:\n\n<ServiceCard\n  title=\"Web Application Development\"\n  focus=\"Complex Web Apps\"\n  description=\"Interactive apps that solve real problems.\"\n/>\n\n// Same component. Same behavior. Everywhere.",
      },
      { t: "h2", text: "Name your decisions" },
      {
        t: "p",
        text: "A design system is mostly a set of agreements written down: these are our spacing steps, this is our gray, this is what an error looks like. Naming decisions turns taste into infrastructure. A developer never has to guess whether it's 14 pixels or 16 — the system answers, and the answer is the same on Thursday as it was on Monday.",
      },
      {
        t: "list",
        items: [
          "A small, deliberate color palette with roles, not just shades.",
          "A spacing scale you could count on one hand.",
          "Typography styles the whole product shares.",
          "Components that handle their own hover, focus and disabled states.",
        ],
      },
      {
        t: "quote",
        text: "Good design systems don't limit creativity. They spend creativity once, so it pays out on every screen.",
      },
      { t: "h2", text: "The collaboration is the product" },
      {
        t: "p",
        text: "Design and development aren't two phases; they're one conversation with two accents. Sitting in both seats, I've felt the friction from each side — and the interface always tells the truth about how well the conversation went. When it's going well, you can feel it: the product looks intentional because it is, all the way down.",
      },
    ],
  },
  {
    slug: "what-makes-a-web-app-feel-fast",
    title: "What Makes a Web Application Feel Fast?",
    category: "Performance",
    date: "2026-03-04",
    readingTime: "6 min read",
    excerpt:
      "Speed is a feeling before it's a number. The apps that feel instant aren't always the ones with the best benchmarks — they're the ones that respect your attention the most.",
    image: px(577210),
    imageAlt:
      "A laptop displaying fast-loading analytics and graphs in a bright workspace.",
    blocks: [
      {
        t: "p",
        text: "Two applications can complete the same task in the same two seconds, yet one feels snappy and the other feels broken. Perceived performance is its own discipline — and it rewards developers who treat the user's attention as the scarcest resource in the system.",
      },
      { t: "h2", text: "Never leave a hollow screen" },
      {
        t: "p",
        text: "A blank white void says 'waiting.' A skeleton layout says 'arriving.' When content is loading, showing the shape of what's coming — grayed-out cards, reserved image space — keeps the mental model intact. The user isn't blocked; they're watching the room being furnished.",
      },
      { t: "h2", text: "Optimism is a feature" },
      {
        t: "p",
        text: "When a user marks a task complete, the interface can update immediately and confirm with the server in the background. This optimistic pattern makes interactions feel instantaneous, because the app believes the user before the network round-trips. Reserve it for actions that are safe to reverse — and always have a graceful 'undo' ready for the rare disagreement with reality.",
      },
      {
        t: "code",
        title: "The honest loading button",
        code: "// A form that talks while it works:\n<button disabled={isPending}>\n  {isPending ? \"Sending your message…\" : \"Start a Conversation\"}\n</button>\n\n// Small copy. Big difference in how long the wait feels.",
      },
      { t: "h2", text: "The physics still matter" },
      {
        t: "p",
        text: "Perception is powerful, but it rides on real engineering. The fundamentals never stopped mattering:",
      },
      {
        t: "list",
        items: [
          "Ship images in modern formats, sized for the screen they're shown on.",
          "Send less JavaScript — every kilobyte is parse time on someone's phone.",
          "Cache what doesn't change; preload what the user will need next.",
          "Keep the database honest: index the queries the app actually runs.",
        ],
      },
      {
        t: "quote",
        text: "Fast isn't what the stopwatch says. Fast is the user never forming the sentence 'why is this taking so long?'",
      },
      {
        t: "p",
        text: "The best performance work is invisible. Nobody writes a review that says 'the loading states were beautifully choreographed' — they just come back, because using the thing never felt like waiting.",
      },
    ],
  },
  {
    slug: "idea-to-deployment-workflow",
    title: "From Idea to Deployment: My Development Workflow",
    category: "Process",
    date: "2026-03-12",
    readingTime: "6 min read",
    excerpt:
      "Every project I take on moves through the same six movements — requirements, structure, design, code, testing and deployment. Here's how the pipeline actually runs.",
    image: px(34212963),
    imageAlt:
      "A developer planning a project with handwritten notes beside a monitor showing code.",
    blocks: [
      {
        t: "p",
        text: "People imagine development as one long stretch of typing. In reality, code is only the middle act. The work that determines whether a project succeeds happens before the editor opens and after the last feature lands. This is the workflow I've settled into — six movements, in order, no skipping.",
      },
      { t: "h2", text: "1. Requirements: shrink the fog" },
      {
        t: "p",
        text: "Every project arrives wrapped in fog: 'I need a website for my business.' The first job is asking questions until the fog lifts. Who is this for? What should they be able to do? What exists already? A project with clear requirements feels shorter before it begins — because the surprises have been moved to the cheap end of the timeline.",
      },
      { t: "h2", text: "2. Structure: decide the skeleton" },
      {
        t: "p",
        text: "Pages, data, flows. What models exist — products, orders, appointments — and how do they relate? What does the URL map look like? Ten decisions here prevent a hundred refactors later. I sketch the schema and the sitemap on paper first; paper argues less than code does.",
      },
      { t: "h2", text: "3. Design: the interface is the argument" },
      {
        t: "p",
        text: "With structure settled, design becomes fast and honest: real content, real constraints, hierarchy built around what the user came to do. This is also where the design system is born — colors, spacing, type and the first components.",
      },
      { t: "h2", text: "4. Development: build in walking slices" },
      {
        t: "p",
        text: "I build in thin, end-to-end slices — a journey that works completely — rather than wide layers of half-finished everything. Each slice is committed, reviewable and demonstrable. Version control isn't just backup; it's the project's memory, and I write commit messages for the future human who'll wonder why.",
      },
      {
        t: "code",
        title: "A slice, not a layer",
        code: "# Walking slice: \"a visitor can buy one product\"\n\n[✓] Product page renders from the database\n[✓] Cart accepts the product\n[✓] Checkout records the order\n[✓] Confirmation email triggers\n\n# Four thin layers that WORK —\n# not four thick layers that almost work.",
      },
      { t: "h2", text: "5. Testing: be your own unfriendly user" },
      {
        t: "p",
        text: "Then I switch sides and try to break what I built: small screens, slow networks, keyboard only, forms filled with chaos. The goal isn't to prove the site works — it's to find where it doesn't, while finding it is still free.",
      },
      { t: "h2", text: "6. Deployment: the beginning, not the end" },
      {
        t: "p",
        text: "Shipping moves the project from 'mine' to 'everyone's.' Automated builds, environment variables handled properly, a rollback path that takes one command. And then the most important step of all: watching real people use the thing, and letting their behavior write the next to-do list.",
      },
      {
        t: "quote",
        text: "A good workflow doesn't slow you down to be careful. It speeds you up by removing the rework.",
      },
    ],
  },
  {
    slug: "responsive-design-is-not-optional",
    title: "Why Responsive Design Is Not Optional",
    category: "Front-End",
    date: "2026-03-19",
    readingTime: "4 min read",
    excerpt:
      "There is no 'main version' of your website anymore. There's the version on a cracked phone screen in the sun — and it's the one most of your visitors will actually meet.",
    image: px(17803335),
    imageAlt:
      "A tablet and smartphone side by side on a desk, representing responsive design across devices.",
    blocks: [
      {
        t: "p",
        text: "Somewhere along the way, the industry picked up a quiet habit: design for the laptop, then squeeze the result onto mobile as a closing chore. It made sense when mobile traffic was a sliver. That era is over. For most sites, the majority of visits happen on a phone — which means the 'mobile version' is the main version, and always was.",
      },
      { t: "h2", text: "You're not designing for a screen size" },
      {
        t: "p",
        text: "Responsive design isn't really about pixels; it's about context. A phone in one hand means a thumb, not a cursor. It means sunlight, a distracted bus ride, a connection that flickers. The same person who browses on a laptop at noon completes the purchase on a phone at midnight. The experience has to follow them, not ask them to come back on a bigger device.",
      },
      { t: "h2", text: "Mobile-first is a decision filter" },
      {
        t: "p",
        text: "Starting mobile-first isn't about technology; it's about honesty. A small screen forces the question every design secretly needs: what actually matters here? If it doesn't fit on the phone, maybe it was never important. Desktop then becomes the easy part — giving the essentials more room to breathe.",
      },
      {
        t: "list",
        items: [
          "Touch targets a real thumb can hit without aiming.",
          "Text large enough to read at arm's length.",
          "Layouts that reflow instead of merely shrinking.",
          "Images that don't cost more data than the page is worth.",
          "No content that only exists on hover.",
        ],
      },
      {
        t: "quote",
        text: "Your website doesn't have a target device. It has a target human — and the human moves.",
      },
      {
        t: "p",
        text: "Responsive design is respect, rendered in CSS. It says: however you arrived — old phone, new tablet, borrowed laptop — you get the whole experience, not a compromise with an apology attached. That's why, on every project I build, it isn't a feature at the end of the list. It's the ground everything else stands on.",
      },
    ],
  },
  {
    slug: "building-digital-products-with-purpose",
    title: "Building Digital Products With Purpose",
    category: "Personal",
    date: "2026-03-26",
    readingTime: "4 min read",
    excerpt:
      "Tools are easy to learn and intentions are easy to announce. What actually shapes a developer's work is the reason underneath it. A personal note on why I build the way I build.",
    image: px(8547397),
    imageAlt:
      "A young African woman in a blazer working intently on her laptop in a modern office.",
    blocks: [
      {
        t: "p",
        text: "Every developer eventually gets asked why they do this. The honest answer, for me, is that software is one of the few crafts where a single careful person can make something that quietly improves thousands of ordinary afternoons. A booking that takes thirty seconds instead of a phone queue. A shop that lets a small business look as serious as it deserves to. That's the work I want my name on.",
      },
      { t: "h2", text: "Purpose is a technical specification" },
      {
        t: "p",
        text: "It sounds soft, but purpose changes engineering. If the point is to make life easier for the person using the product, then accessibility isn't a nice-to-have, performance isn't vanity, and security isn't an afterthought — they're the job description. When a decision is hard, the purpose is the tiebreaker: which option is better for the human on the other side of the glass?",
      },
      {
        t: "quote",
        text: "Good software should not only work. It should make the user's life easier.",
      },
      { t: "h2", text: "The long game" },
      {
        t: "p",
        text: "Web development moves fast — new tools, new frameworks, new everything, forever. I don't chase all of it. I invest in the fundamentals that refuse to expire: how the web actually works, how data should be modeled, how interfaces earn trust, how code stays readable for the person who inherits it. Tools rotate; craft compounds.",
      },
      { t: "h2", text: "What I want to build" },
      {
        t: "p",
        text: "Products with a reason to exist. Stores that respect their shoppers. Applications that treat attention as something to spend carefully. And a body of work that demonstrates, project by project, that thoughtful engineering and beautiful design are the same thing viewed from two directions.",
      },
      {
        t: "p",
        text: "That's the purpose. Everything else — the code, the deployments, the pixels — is just how it gets expressed.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso + "T12:00:00"));
}

export function relatedPosts(current: BlogPost, count = 3): BlogPost[] {
  const sameCategory = posts.filter(
    (p) => p.slug !== current.slug && p.category === current.category
  );
  const others = posts.filter(
    (p) => p.slug !== current.slug && p.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, count);
}
