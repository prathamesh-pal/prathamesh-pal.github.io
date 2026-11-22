import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { SECTIONS } from "../content";

type Props = { active: string; theme: string; onToggle: () => void };

export default function Dock({ active, theme, onToggle }: Props) {
  const dock = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const items = useRef<(HTMLLIElement | null)[]>([]);
  const [hover, setHover] = useState<number | null>(null);
  const activeIdx = Math.max(0, SECTIONS.findIndex((s) => s.id === active));
  const target = hover ?? activeIdx;

  // The ink pill glides to whichever item is hovered, focused, or current.
  const place = useCallback(() => {
    const el = items.current[target];
    if (el && list.current) {
      list.current.style.setProperty("--x", `${el.offsetLeft}px`);
      list.current.style.setProperty("--w", `${el.offsetWidth}px`);
    }
  }, [target]);
  useLayoutEffect(place, [place]);
  useEffect(() => {
    window.addEventListener("resize", place);
    document.fonts?.ready.then(place);
    return () => window.removeEventListener("resize", place);
  }, [place]);

  // Reading progress draws along the bottom edge of the dock.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - innerHeight;
      dock.current?.style.setProperty("--p", String(max > 0 ? Math.min(1, scrollY / max) : 0));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    addEventListener("scroll", onScroll, { passive: true });
    return () => { removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  // Items swell slightly toward the pointer, strongest right under it.
  const magnify = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    items.current.forEach((li) => {
      if (!li) return;
      const r = li.getBoundingClientRect();
      const d = Math.abs(e.clientX - (r.left + r.width / 2));
      li.style.setProperty("--s", String(1 + 0.16 * Math.max(0, 1 - d / 80)));
    });
  };
  const rest = () => {
    setHover(null);
    items.current.forEach((li) => li?.style.removeProperty("--s"));
  };

  return (
    <div className="dock" ref={dock}>
      <nav aria-label="Sections">
        <ul ref={list} onPointerMove={magnify} onPointerLeave={rest}>
          <li className="pill" aria-hidden="true" />
          {SECTIONS.map((s, i) => (
            <li key={s.id} ref={(el) => { items.current[i] = el; }} onPointerEnter={(e) => e.pointerType === "mouse" && setHover(i)}>
              <a href={`#${s.id}`} aria-label={s.title} aria-current={s.id === active ? "location" : undefined} onFocus={() => setHover(i)} onBlur={() => setHover(null)}>
                <span>{s.short}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button type="button" className={`theme-btn ${theme}`} onClick={onToggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
        <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
          <g className="sun" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
            <circle cx="8" cy="8" r="2.8" />
            <path d="M8 1.5v1.6M8 12.9v1.6M1.5 8h1.6M12.9 8h1.6M3.4 3.4l1.1 1.1M11.5 11.5l1.1 1.1M3.4 12.6l1.1-1.1M11.5 4.5l1.1-1.1" />
          </g>
          <path className="moon" fill="currentColor" d="M13.2 9.6A5.6 5.6 0 0 1 6.4 2.8a5.6 5.6 0 1 0 6.8 6.8Z" />
        </svg>
      </button>
    </div>
  );
}
