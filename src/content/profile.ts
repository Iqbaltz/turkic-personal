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
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML & CSS/SCSS"],
  },
  {
    label: "Back end",
    items: ["Node.js & Express", ".NET Core & C#", "Laravel", "REST APIs", "API & Web3 integration"],
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
    summary: "Built and maintained scalable web applications using Next.js, .NET and SQL Server.",
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
    summary: "Developed and maintained client websites using React, Express.js (Node.js) and MongoDB.",
    points: [
      "Partnered with the design team to turn concepts into effective, on-brand websites.",
      "Created reusable components to speed up delivery on future projects.",
      "Made every website fully responsive and mobile-friendly for a seamless user experience.",
    ],
    tags: ["React", "Express.js", "MongoDB"],
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
  },
];

export const books = [
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    note: "Two systems of thought, and the biases that live between them.",
  },
  {
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    note: "Strategy, influence and the long history of power.",
  },
  {
    title: "The Ottomans: A Cultural Legacy",
    author: "Diana Darke",
    note: "The art, architecture and ideas the Ottoman world left behind.",
  },
];
