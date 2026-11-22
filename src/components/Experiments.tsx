import { HUB_URL } from "../content";

export default function ExperimentalWork({ href = HUB_URL }: { href?: string }) {
  return (
    <section id="experiments" className="sec" aria-labelledby="exp-h">
      <h2 id="exp-h">Experiments</h2>
      <a className="hub" href={href} target="_blank" rel="noopener noreferrer">
        <span className="mono subtle">Personal playground · React, TypeScript, CSS · Always evolving</span>
        <span className="hub-title">Project Hub</span>
        <span className="hub-text">A home for little experiments, strange ideas, creative interfaces, and tools built just to see what’s possible.</span>
        <span className="mono accent">Explore the experiments ↗</span>
        <span className="hub-hatch" aria-hidden="true" />
      </a>
    </section>
  );
}
