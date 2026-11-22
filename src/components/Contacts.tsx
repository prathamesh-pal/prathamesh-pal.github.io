import { CHANNELS } from "../content";

export default function Contacts() {
  return (
    <section id="contact" className="sec" aria-labelledby="contact-h">
      <h2 id="contact-h">Contact</h2>
      <p className="lead">Let’s work together.</p>
      <ul className="dotted channels">
        {CHANNELS.map((c) => {
          const ext = c.href.startsWith("http") || c.name === "Resume";
          return (
            <li key={c.name}>
              <a href={c.href} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                <span className="ed"><span className="ed-t c-name">{c.name}</span><span className="ed-arrow" aria-hidden="true">↗</span></span>
                <span className="mono subtle">{c.handle}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <footer className="foot mono subtle">
        <span>© 2026 Prathamesh Pal</span>
        <span>Designed by Prathamesh’s girlfriend</span>
      </footer>
    </section>
  );
}
