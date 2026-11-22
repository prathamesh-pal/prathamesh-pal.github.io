import { SECTIONS } from "../content";
import Datum from "./Datum";

type Props = { active: string; theme: string; onToggle: () => void };

export default function Rail({ active, theme, onToggle }: Props) {
  const index = SECTIONS.findIndex((s) => s.id === active) + 1;
  return (
    <aside className="rail">
      <Datum className="rail-datum" />
      <nav aria-label="Sections">
        <ol>
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} aria-label={s.title} aria-current={s.id === active ? "location" : undefined}>
                <span className="zone">{s.zone}</span>
                <span className="zone-name">{s.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <div className="titleblock">
        <dl>
          <div><dt>Drawn by</dt><dd>Prathamesh Pal</dd></div>
          <div><dt>Sheet</dt><dd>{index} of {SECTIONS.length}</dd></div>
          <div><dt>Revision</dt><dd>2026</dd></div>
        </dl>
        <button type="button" className="theme-btn" onClick={onToggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </aside>
  );
}
