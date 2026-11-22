import { PROJECTS, type Project } from "../content";

function Row({ p }: { p: Project }) {
  const body = (
    <>
      <span className="p-head">
        <span className={p.href ? "ed" : "p-plain"}><span className="p-title ed-t">{p.title}</span>{p.href && <span className="ed-arrow" aria-hidden="true">↗</span>}</span>
        <span className="mono">{p.type}</span>
      </span>
      <span className="p-blurb">{p.blurb}</span>
      <span className="mono subtle">{p.stack.join(" / ")}</span>
      <span className={`mono ${p.href ? "accent" : "subtle"}`}>{p.href ? "Open repository" : "Case study soon"}</span>
    </>
  );
  return <li>{p.href ? <a className="project" href={p.href} target="_blank" rel="noopener noreferrer">{body}</a> : <div className="project">{body}</div>}</li>;
}

export default function Projects() {
  return (
    <section id="projects" className="sec" aria-labelledby="projects-h">
      <h2 id="projects-h">Selected work</h2>
      <ul className="dotted">{PROJECTS.map((p) => <Row key={p.title} p={p} />)}</ul>
    </section>
  );
}
