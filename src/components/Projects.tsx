import type { CSSProperties } from "react";
import "../App.css";

type Project = {
  no: string;
  title: string;
  type: string;
  blurb: string;
  stack: string[];
  href?: string;
};

const projects: Project[] = [
  {
    no: "01",
    title: "WorkNest",
    type: "JOB PORTAL",
    blurb: "A recruiter and job-finder system built with Flask & SQLite.",
    stack: ["Flask", "SQLite", "Python"],
  },
  {
    no: "02",
    title: "Finance Sim",
    type: "STOCK TRADING",
    blurb: "Real-time stock trading simulator with portfolio tracking.",
    stack: ["Python", "Flask"], // edit to match your real stack
  },
  {
    no: "03",
    title: "Auction Hub",
    type: "ECOMMERCE",
    blurb: "Django-based auction system with bidding, comments, and categories.",
    stack: ["Django", "Python"],
    href: "https://github.com/prathamesh-pal/Auctions",
  },
];

// each piece flies in from its own direction (--x, --y) with a stagger (--i)
const fly = (i: number, x: string, y: string, r = "0deg") =>
  ({ "--i": i, "--x": x, "--y": y, "--r": r } as CSSProperties);

function HoverCard({ p }: { p: Project }) {
  return (
    <div className="hover-card" aria-hidden="true">
      <div className="hc-part hc-head" style={fly(1, "-40px", "0px")}>
        <span>{p.no}</span>
        <span>{p.type}</span>
      </div>

      <div className="hc-part hc-title" style={fly(2, "0px", "24px", "-2deg")}>
        {p.title}
      </div>

      <p className="hc-part hc-blurb" style={fly(3, "40px", "0px")}>
        {p.blurb}
      </p>

      <div className="hc-tags">
        {p.stack.map((s, k) => (
          <span
            key={s}
            className="hc-part hc-tag"
            style={fly(4 + k, "0px", "20px", "4deg")}
          >
            {s}
          </span>
        ))}
      </div>

      <div
        className="hc-part hc-foot"
        style={fly(4 + p.stack.length, "-30px", "0px")}
      >
        {p.href ? "OPEN REPO ↗" : "CASE STUDY SOON"}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="container">
      <div id="projects">
        <div className="section-header">02. SELECTED WORK</div>

        {projects.map((p) => (
          <div
            key={p.title}
            tabIndex={0}
            className={`project-item${p.href ? " clickable" : ""}`}
            onClick={p.href ? () => window.open(p.href, "_blank") : undefined}
          >
            <div>
              <span className="project-title uppercase">{p.title}</span>{" "}
              <span className="project-sub">{p.type}</span>
            </div>
            <div>{p.blurb}</div>

            <HoverCard p={p} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;