import type { Tone } from "@/lib/palette";

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
    text: "Leading development of a Budget Plan app used across the company",
    place: "PT Tower Bersama Infrastructure",
  },
  education: {
    school: "Politeknik Negeri Medan",
    degree: "Computer Engineering",
    years: "2018 to 2021",
  },
};

export const values = [
  {
    title: "Open collaboration",
    body: "I prioritize client collaboration and keep communication open from the first sketch to launch day.",
    icon: "tulip",
    tone: "rose",
  },
  {
    title: "Flexible across time zones",
    body: "Based in Jakarta (UTC+7) and very flexible with time zone communication.",
    icon: "compass",
    tone: "turq",
  },
  {
    title: "Always improving",
    body: "I constantly try to improve, picking up new tools and better habits one day at a time.",
    icon: "steps",
    tone: "sage",
  },
] as const satisfies ReadonlyArray<{
  title: string;
  body: string;
  icon: "tulip" | "compass" | "steps";
  tone: Tone;
}>;

export type StackGroup = {
  label: string;
  tone: Tone;
  pattern: PatternKind;
  items: string[];
};

export type PatternKind = "star" | "lattice" | "cintemani" | "tulip";

export const stack: StackGroup[] = [
  {
    label: "Front end",
    tone: "turq",
    pattern: "star",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML, CSS & JS"],
  },
  {
    label: "Back end",
    tone: "cobalt",
    pattern: "lattice",
    items: ["Node.js & Express", ".NET & C#", "Laravel", "REST APIs"],
  },
  {
    label: "Data",
    tone: "sage",
    pattern: "cintemani",
    items: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB"],
  },
  {
    label: "Content",
    tone: "rose",
    pattern: "tulip",
    items: ["Payload CMS", "Sanity"],
  },
  {
    label: "Cloud & tools",
    tone: "khaki",
    pattern: "star",
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
    role: "Software Engineer",
    company: "PT Tower Bersama Infrastructure",
    current: true,
    summary:
      "Building internal web applications, and currently leading development of a Budget Plan app used across the company.",
    points: [],
    tags: [],
  },
  {
    period: "Nov 2023 → Mar 2026",
    role: "Fullstack Developer",
    company: "PT Lion Superindo",
    summary:
      "Built and maintained scalable internal enterprise applications with Next.js, .NET and SQL Server.",
    points: [
      "Developed internal systems including a Store Expansion ERP, HR Performance Management and Self-Service Cashier.",
      "Implemented dashboards, email notifications, role-based access control and multi-stage workflows.",
      "Optimized the React codebase with custom hooks and reusable HTTP service layers.",
      "Delivered reporting features with Excel and PDF export.",
    ],
    tags: ["Next.js", ".NET", "SQL Server", "React"],
  },
  {
    period: "Apr 2022 → Jul 2023",
    role: "Front End Developer",
    company: "STRT Button",
    summary:
      "Developed and maintained responsive, user-friendly web applications for clients at a Web3 company.",
    points: [
      "Worked closely with the design, front-end and back-end teams to ship polished interfaces.",
      "Built with React, Next.js, TypeScript and Tailwind CSS, following industry coding standards.",
      "Maintained Git-based version control for smooth collaboration across the team.",
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Web3"],
  },
  {
    period: "Mar 2021 → Feb 2022",
    role: "Front End Developer",
    company: "Mejakreatif",
    summary: "Developed and maintained client websites alongside the design team.",
    points: [
      "Collaborated with designers to turn concepts into effective websites.",
      "Created reusable components to speed up future projects.",
      "Made every site fully responsive and mobile-friendly.",
    ],
    tags: ["React", "Express.js", "MongoDB"],
  },
  {
    period: "Mar 2021 → Feb 2022",
    role: "Freelance Web Developer",
    company: "Fiverr",
    summary:
      "Led the development of a web app for a client, from initial concept to deployment.",
    points: [],
    tags: [],
  },
];

export type Project = {
  no: string;
  name: string;
  kind: string;
  description: string;
  tech: string[];
  url: string;
  host: string;
  tone: Tone;
  pattern: PatternKind;
  mark: string;
};

export const projects: Project[] = [
  {
    no: "01",
    name: "Foundasi",
    kind: "IT solutions agency",
    description:
      "An agency site for a studio that blends design and technology to drive business growth.",
    tech: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Payload", "PostgreSQL"],
    url: "https://www.foundasi.com/en",
    host: "foundasi.com",
    tone: "turq",
    pattern: "star",
    mark: "Fd",
  },
  {
    no: "02",
    name: "Founda POS",
    kind: "Cashier app",
    description:
      "A simple, efficient point-of-sale app for cashiers to manage sales, track inventory and generate reports.",
    tech: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Laravel", "MySQL"],
    url: "https://founda-pos.vercel.app/",
    host: "founda-pos.vercel.app",
    tone: "cobalt",
    pattern: "lattice",
    mark: "Po",
  },
  {
    no: "03",
    name: "Azhar Maksum",
    kind: "Accounting services",
    description:
      "Accurate, transparent and accountable financial planning for businesses across Indonesia.",
    tech: ["React", "Tailwind CSS", "TypeScript", "Sanity"],
    url: "https://kja-azhar-maksum.vercel.app/en",
    host: "kja-azhar-maksum.vercel.app",
    tone: "sage",
    pattern: "cintemani",
    mark: "AM",
  },
  {
    no: "04",
    name: "SBS Cosmetics",
    kind: "Cosmetics manufacturer",
    description:
      "A company site for PT. SBS, a cosmetics factory founded in 2013 that provides high-standard manufacturing services.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    url: "https://sbs-cosmetics.com/en",
    host: "sbs-cosmetics.com",
    tone: "rose",
    pattern: "tulip",
    mark: "SBS",
  },
];

export const books = [
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    note: "Two systems of thought, and the biases that live between them.",
    tone: "cobalt",
    height: 44,
    width: 14,
  },
  {
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    note: "Strategy, influence and the long history of power.",
    tone: "rose",
    height: 40,
    width: 16,
  },
  {
    title: "The Ottomans: A Cultural Legacy",
    author: "Diana Darke",
    note: "The art, architecture and ideas the Ottoman world left behind.",
    tone: "turq",
    height: 47,
    width: 13,
  },
] as const satisfies ReadonlyArray<{
  title: string;
  author: string;
  note: string;
  tone: Tone;
  height: number;
  width: number;
}>;
