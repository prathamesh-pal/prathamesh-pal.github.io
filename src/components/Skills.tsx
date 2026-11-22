import { SKILLS } from "../content";

export default function Skills() {
  return (
    <section id="skills" className="sec" aria-labelledby="skills-h">
      <h2 id="skills-h">Skills</h2>
      <div className="cols">
        {Object.entries(SKILLS).map(([group, items]) => (
          <div key={group}>
            <h3>{group}</h3>
            <ul className="dotted">{items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}
