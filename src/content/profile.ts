export const profile = {
  name: "Muhammad Iqbal",
  firstName: "Iqbal",
  role: "Software Engineer",
  location: "Jakarta, Indonesia",
  timezone: "UTC+7",
  tagline: "Living, learning, leveling up, one day at a time.",
  email: "mhdiqbaltan@gmail.com",
  whatsapp: {
    display: "+62 822 7307 7430",
    href: "https://wa.me/6282273077430",
  },
  cv: "/cv/Muhammad-Iqbal-CV.pdf",
  now: {
    text: "Developing the revenue and billing system",
    place: "PT Tower Bersama Group",
  },
  education: {
    school: "Politeknik Negeri Medan",
    degree: "Diploma in Computer Engineering",
    years: "2018 to 2021",
  },
};

export const values = [
  {
    title: "Open collaboration",
    body: "I prioritize client collaboration and keep communication open from the first sketch to launch day.",
  },
  {
    title: "Flexible across time zones",
    body: "Based in Jakarta (UTC+7) and very flexible with time zone communication.",
  },
  {
    title: "Always improving",
    body: "I constantly try to improve, picking up new tools and better habits one day at a time.",
  },
];

export type StackGroup = {
  label: string;
  items: string[];
};

export const stack: StackGroup[] = [
  {
    label: "Front end",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML & CSS/SCSS",
    ],
  },
  {
    label: "Back end",
    items: [
      "Node.js & Express",
      ".NET Core & C#",
      "Laravel",
      "REST APIs",
      "API & Web3 integration",
    ],
  },
  {
    label: "Data",
    items: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    label: "Content",
    items: ["Payload CMS", "Sanity"],
  },
  {
    label: "Cloud & tools",
    items: ["Docker", "Cloudinary", "Appwrite", "Stream", "Hostinger"],
  },
];

export type Job = {
  period: string;
  role: string;
  company: string;
  current?: boolean;
  summary: string;
  points: string[];
  tags: string[];
};

export const experience: Job[] = [
  {
    period: "Mar 2026 → Now",
    role: "Fullstack Developer",
    company: "PT Tower Bersama Group",
    current: true,
    summary:
      "Developing and maintaining a Revenue (Accounts Receivable) system that handles billing logic and automated billing period generation for the company’s tower-leasing operations.",
    points: [
      "Designed and implemented billing period generation for both bulk and single-record processing, using SQL Server stored procedures and table-valued parameters.",
      "Built end-to-end features across the stack, with backend services, data models and database views in .NET, C# and SQL Server.",
    ],
    tags: [".NET", "C#", "SQL Server"],
  },
  {
    period: "Nov 2023 → Dec 2025",
    role: "Fullstack Developer",
    company: "PT Lion Superindo",
    summary:
      "Built and maintained scalable web applications using Next.js, .NET and SQL Server.",
    points: [
      "Developed internal enterprise applications, including a Store Expansion ERP, an HR Performance Management system and Self-Service Cashier systems.",
      "Implemented interactive dashboards, automated email notifications, role-based access control and multi-stage approval workflows.",
      "Optimized the React codebase with custom hooks and reusable HTTP service layers to improve maintainability and consistency.",
      "Delivered reporting features with Excel and PDF export.",
    ],
    tags: ["Next.js", ".NET", "SQL Server", "React"],
  },
  {
    period: "Apr 2022 → Jul 2023",
    role: "Frontend Developer",
    company: "STRT Button",
    summary:
      "Developed and maintained responsive, user-friendly web applications for clients at a Web3 company.",
    points: [
      "Collaborated closely with the design, frontend and backend teams to ship cohesive, polished products.",
      "Built interfaces with React, Next.js, TypeScript and Tailwind CSS, following industry best practices and coding standards.",
      "Managed version control with Git for smooth collaboration across the development team.",
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Web3"],
  },
  {
    period: "Mar 2021 → Feb 2022",
    role: "Web Developer",
    company: "Mejakreatif (Fiverr)",
    summary:
      "Developed and maintained client websites using React, Express.js (Node.js) and MongoDB.",
    points: [
      "Partnered with the design team to turn concepts into effective, on-brand websites.",
      "Created reusable components to speed up delivery on future projects.",
      "Made every website fully responsive and mobile-friendly for a seamless user experience.",
    ],
    tags: ["React", "Express.js", "MongoDB"],
  },
];

export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
  /** Photos are shown whole on a dark mat rather than cropped to the frame like screenshots. */
  fit?: "contain";
};

export type Project = {
  slug: string;
  name: string;
  /** The formal name, when the project goes by an acronym. */
  fullName?: string;
  kind: string;
  /** Set while the work is still under way. */
  status?: string;
  /** One line for the card on the landing page. */
  summary: string;
  /** The longer story, told on the project's own page. */
  about: string[];
  features: string[];
  tech: string[];
  /** Left out for internal systems that aren't public. */
  url?: string;
  host?: string;
  images: ProjectImage[];
};

const shots = (folder: string) => (file: string) =>
  `/images/portfolios/${folder}/${file}`;
const happyslim = shots("happyslim");
const jonson = shots("jonson");
const kombur = shots("komburai");
const tkm = shots("tkm");

export const projects: Project[] = [
  {
    slug: "happyslim",
    name: "HappySlim",
    kind: "Simple e-commerce",
    status: "In progress",
    summary:
      "A storefront for an Indonesian herbal-supplement brand, with orders sent straight to WhatsApp.",
    about: [
      "HappySlim.id sells herbal diet supplements and a facial serum through WhatsApp, Shopee and Tokopedia. This site gives the brand a home of its own: it tells the brand’s story, shows the full range and turns a visitor into an order, without a checkout to run.",
      "Instead of a cart and a payment gateway, each product page has a variant and quantity picker that writes the order message for the shopper and opens it in WhatsApp, the same chat where the shop already answers questions and offers free diet consultations. The pages follow the brand’s Figma design.",
    ],
    features: [
      "A catalogue with category filters for the slimming range and facial care",
      "Product pages with photo galleries, specifications, composition and a price range",
      "A variant and quantity picker that writes a ready-made WhatsApp order",
      "Brand story, testimonials and an FAQ",
      "Links to the official Shopee and Tokopedia stores",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    url: "https://happyslim-lp.vercel.app/",
    host: "happyslim-lp.vercel.app",
    images: [
      {
        src: happyslim("product.png"),
        alt: "HappySlimax product page with photos, price range, variant picker and an order-on-WhatsApp button",
        caption: "Product page with the WhatsApp order flow",
      },
      {
        src: happyslim("about.png"),
        alt: "HappySlim about page with lifestyle photos, brand values and product highlights",
        caption: "About page",
      },
      {
        src: happyslim("figma.png"),
        alt: "The HappySlim Figma file with the home, about, testimonials and catalogue pages side by side",
        caption: "The Figma design the site is built from",
      },
      {
        src: happyslim("home.png"),
        alt: "HappySlim home page, headed “Pilihan yang Terinspirasi dari Alam, untuk Perjalanan Hidup yang Lebih Sehat”",
        caption: "Home page",
      },
    ],
  },
  {
    slug: "jonson",
    name: "JONSON",
    fullName: "Journal of North Sumatera Ophthalmology Nexus",
    kind: "Medical journal",
    summary:
      "A branded website for a peer-reviewed, open-access ophthalmology journal, built on top of OJS.",
    about: [
      "JONSON publishes original research, reviews, case reports and clinical studies in eye care, in English and Indonesian. Like most academic journals it runs on Open Journal Systems (OJS), which handles submissions and peer review well, but whose public pages look much like any other OJS journal.",
      "So the public site is a separate Next.js front end in the journal’s own design. On the server it reads issues, articles and journal settings from the OJS REST API and streams published PDFs through its own URLs, while OJS stays the editorial back office for submissions and review.",
      "Sign-in and registration live on the branded site too. They drive the OJS forms behind the scenes and hand the browser a real OJS session, so authors and editors move between the two without signing in twice.",
    ],
    features: [
      "Home, issue archive, issue contents and article pages, served from the OJS REST API",
      "Article search with ranking and paging",
      "Published PDFs streamed from OJS through the site’s own URLs",
      "Branded sign-in and registration on top of OJS accounts",
      "Submission guide, policies, publication ethics and editorial board pages",
      "Designed in Figma for desktop, tablet and mobile, and reviewed with the team",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Open Journal Systems",
      "PHP",
    ],
    url: "https://northsumateraophthalmology.com/",
    host: "northsumateraophthalmology.com",
    images: [
      {
        src: jonson("home.png"),
        alt: "JONSON home page, headed “Journal of North Sumatera Ophthalmology Nexus” beside a close-up of an eye",
        caption: "Home page",
      },
      {
        src: jonson("about.png"),
        alt: "About the Journal page with the journal’s description, a submit button and a 3D cover of the journal",
        caption: "About the journal",
      },
      {
        src: jonson("live-site.jpeg"),
        alt: "Photo of a laptop showing the JONSON home page in a browser",
        caption: "The finished site in the browser",
        fit: "contain",
      },
      {
        src: jonson("design-review-zoom.jpeg"),
        alt: "Zoom call with the team, reviewing the JONSON Figma design across desktop, tablet and mobile",
        caption: "Reviewing the Figma design with the team",
        fit: "contain",
      },
      {
        src: jonson("design-review-meet.jpeg"),
        alt: "Photo of a laptop on a Google Meet call, with the JONSON design open in Figma",
        caption: "An evening design review over Google Meet",
        fit: "contain",
      },
    ],
  },
  {
    slug: "kombur-ai",
    name: "Kombur AI",
    kind: "AI dictation app",
    summary:
      "Voice dictation for Windows: speak in Indonesian or English, and tidy text appears wherever you type.",
    about: [
      "Kombur turns speech into clean text on Windows. Put the cursor in any text field, press Ctrl+Shift+D and talk, in Indonesian, English or a mix of both. Kombur drops the filler words, fixes the punctuation and pastes the result in place, whether that’s Gmail, Slack, WhatsApp or Notion.",
      "Behind it sits a small monorepo: a Tauri desktop app that records and pastes, a Hono API on Cloudflare Workers that checks the session and the weekly word quota before running Whisper on Workers AI, Supabase for accounts and synced history, and a Next.js site served from Cloudflare.",
      "Privacy is built in. Text history can stay on the device or last only for the session, original audio sits in a private R2 bucket, and neither audio nor transcripts are written to the operational logs.",
    ],
    features: [
      "A global shortcut with tap-to-toggle or hold-to-talk, and a floating recording pill",
      "AI clean-up of fillers and punctuation, with the original transcript kept",
      "Indonesian, English, auto-detect, or both in one sentence",
      "A personal dictionary for names and jargon, plus reusable snippets",
      "Guided onboarding that tests the microphone and lets you practise the shortcut",
      "A free tier of 2,500 words a week, metered on the server",
    ],
    tech: [
      "Tauri",
      "React",
      "TypeScript",
      "Hono",
      "Cloudflare Workers AI",
      "Supabase",
      "Next.js",
    ],
    url: "https://komburai.com/",
    host: "komburai.com",
    images: [
      {
        src: kombur("home.png"),
        alt: "Kombur AI home page, headed “Bicara saja. Kombur yang mengetik.” beside a dictation demo in Gmail",
        caption: "Home page",
      },
      {
        src: kombur("features.png"),
        alt: "Kombur AI features: AI clean-up, a personal dictionary, two languages, custom shortcuts and privacy controls",
        caption: "Features, from AI clean-up to privacy controls",
      },
      {
        src: kombur("overview.png"),
        alt: "The Kombur AI landing page zoomed out, showing the hero, usage stats, supported apps and how it works",
        caption: "The landing page at a glance",
      },
    ],
  },
  {
    slug: "tkm-project",
    name: "TKM Project",
    fullName: "Project management ERP for PT Technology Karya Mandiri",
    kind: "Project management ERP",
    summary:
      "An internal ERP that runs a network contractor’s projects, from cost budget to field progress.",
    about: [
      "PT Technology Karya Mandiri builds fibre-to-the-home networks, outside-plant fibre and EV-charging stations. TKM Project is the system its teams use to run that work: hundreds of projects across many locations, each with its own budget, work orders, subcontractors and foremen.",
      "A project moves from its bill of quantities (BoQ) and cost budget (RAB) to work orders (SPK), purchase requests and orders, and weekly field progress measured in homepasses. Each document has its own approval chain, run by a shared approval service, and every action is written to an audit log.",
      "Management gets live dashboards for contract value, revenue against budget and actual spend, margins by client and progress against homepass targets, with Excel and PDF exports for reporting.",
    ],
    features: [
      "Project locations and clusters, set on Google Maps",
      "BoQ, cost budgets (RAB), amendments and time extensions",
      "Work orders (SPK), purchase requests and purchase orders",
      "Multi-level approvals for every document, with a personal approval queue",
      "Weekly progress cut-offs for billing, with S-curves and Gantt charts",
      "Excel and PDF exports, and an audit log of every action",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js & Express",
      "MariaDB",
    ],
    images: [
      {
        src: tkm("dashboard.png"),
        alt: "TKM Project dashboard with totals for projects, contract value, work orders, progress, margin and homepass",
        caption: "Dashboard",
      },
      {
        src: tkm("rab.png"),
        alt: "Cost budget (RAB) overview with BoQ revenue, actual spend, field progress and a breakdown by client",
        caption: "Cost budget (RAB) overview",
      },
      {
        src: tkm("login.png"),
        alt: "TKM Project sign-in page beside a slideshow of FTTH, outside-plant fibre and EV-charging projects",
        caption: "Sign-in page",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const books = [
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    note: "Two systems of thought, and the biases that live between them.",
    cover: "/books/thinkingfastslow.webp",
  },
  {
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    note: "Strategy, influence and the long history of power.",
    cover: "/books/48lawpower.jpg",
  },
  {
    title: "The Ottomans: A Cultural Legacy",
    author: "Diana Darke",
    note: "The art, architecture and ideas the Ottoman world left behind.",
    cover: "/books/ottoman.jpg",
  },
];
