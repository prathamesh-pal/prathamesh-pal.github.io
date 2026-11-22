import Resume from "./assets/PrathameshPal_Resume0.3.pdf";

export const SECTIONS = [
  { id: "about", title: "About", short: "About" },
  { id: "skills", title: "Skills", short: "Skills" },
  { id: "projects", title: "Selected work", short: "Work" },
  { id: "experiments", title: "Experiments", short: "Lab" },
  { id: "background", title: "Background", short: "Bio" },
  { id: "contact", title: "Contact", short: "Contact" },
] as const;

export const SKILLS = {
  Languages: ["Python", "JavaScript", "HTML & CSS", "SQL & NoSQL"],
  Frameworks: ["LangChain & FastAPI", "Node.js", "React, Tailwind CSS", "Git"],
};

export type Project = { title: string; type: string; blurb: string; stack: string[]; href?: string };

export const PROJECTS: Project[] = [
  { title: "WorkNest", type: "Job portal", blurb: "A recruiter and job-finder system built with Flask & SQLite.", stack: ["Flask", "SQLite", "Python"] },
  { title: "Finance Sim", type: "Stock trading", blurb: "Real-time stock trading simulator with portfolio tracking.", stack: ["Python", "Flask"] },
  { title: "Auction Hub", type: "Ecommerce", blurb: "Django-based auction system with bidding, comments, and categories.", stack: ["Django", "Python"], href: "https://github.com/prathamesh-pal/Auctions" },
];

export const HUB_URL = "https://prathamesh-pal.github.io/project-hub/";

export const CHANNELS = [
  { name: "GitHub", handle: "prathamesh-pal", href: "https://github.com/prathamesh-pal" },
  { name: "LinkedIn", handle: "in/prathamesh-pal", href: "https://www.linkedin.com/in/prathamesh-pal-10227a240/" },
  { name: "X", handle: "@Prathamesh_Pal_", href: "https://x.com/Prathamesh_Pal_" },
  { name: "Email", handle: "prathameshpal.tech", href: "mailto:prathameshpal.tech@gmail.com" },
  { name: "Resume", handle: "PDF", href: Resume },
];
