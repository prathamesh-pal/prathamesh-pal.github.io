import "../App.css";
import Resume from "../assets/PrathameshPal_Resume0.3.pdf"

const CHANNELS = [
  { glyph: "in", name: "LinkedIn", handle: "in/prathamesh-pal", href: "https://www.linkedin.com/in/prathamesh-pal-10227a240" },
  { glyph: "X",  name: "X",        handle: "@Prathamesh_Pal_",   href: "https://x.com/Prathamesh_Pal_" },
  { glyph: "GH", name: "GitHub",   handle: "prathamesh-pal", href: "https://github.com/prathamesh-pal" },
  { glyph: "@",  name: "Email",    handle: "prathameshpal.tech", href: "mailto:prathameshpal.tech@gmail.com" },
];

function Nav() {
  return (
    <div className="container">
      {/* NAVIGATION */}
      <nav>
        <a href="#about">ABOUT</a> <span>//</span>
        <a href="#skills">SKILLS</a> <span>//</span>
        <a href="#projects">PROJECTS</a> <span>//</span>
        <span className="nav-contact">
          <a href="#contact" aria-haspopup="true">CONTACT</a>
          <div className="contact-card" role="group" aria-label="Contact channels">
            <div className="cc-top">
              <h2 className="cc-title">LET’S<br />TALK.</h2>
              <span className="cc-hint"><i className="cc-dot" />PICK A CHANNEL</span>
            </div>

            <ul className="cc-grid">
              {CHANNELS.map((c, i) => (
                <li key={c.name} style={{ "--i": i } as React.CSSProperties}>
                  <a className="cc-tile" href={c.href} target="_blank" rel="noopener noreferrer">
                    <span className="cc-glyph" aria-hidden="true">{c.glyph}</span>
                    <span className="cc-arrow" aria-hidden="true">↗</span>
                    <span className="cc-name">{c.name}</span>
                    <span className="cc-handle">{c.handle}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="cc-ticker" aria-hidden="true">
              <div className="cc-ticker-track">
                <span>SAY HELLO ✦ LET’S BUILD SOMETHING ✦ SAY HELLO ✦ LET’S BUILD SOMETHING ✦ </span>
                <span>SAY HELLO ✦ LET’S BUILD SOMETHING ✦ SAY HELLO ✦ LET’S BUILD SOMETHING ✦ </span>
              </div>
            </div>
          </div>
        </span> <span>//</span>

        <a href={Resume} target="_blank" rel="noopener noreferrer" className="nav-resume">
          ⌯⌲ RESUME📜
        </a>
      </nav>
    </div>
  )
}

export default Nav