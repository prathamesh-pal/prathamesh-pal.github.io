import { CHANNELS, HUB_URL } from "../content";

export default function Hero() {
  return (
    <section id="about" className="sec hero" aria-labelledby="name">
      <h1 id="name" className="name"><span>Prathamesh Pal</span></h1>
      <p className="role">Full-stack developer &amp; student</p>
      <div className="about-copy">
        <p>I’m Prathamesh Pal, a curious learner who loves exploring how things work in code, math, and life.</p>
        <p>I enjoy building with <b>Python</b> and <b>JavaScript</b>, and I’m driven by a constant desire to understand, create, and improve.</p>
      </div>
      <ul className="reach" aria-label="Get in touch">
        {CHANNELS.map((c) => {
          const ext = c.href.startsWith("http") || c.name === "Resume";
          return (
            <li key={c.name}>
              <a className="ed mono" href={c.href} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                <span className="ed-t">{c.name}</span><span className="ed-arrow" aria-hidden="true">↗</span>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="invite">Explore my <a className="ed" href={HUB_URL} target="_blank" rel="noopener noreferrer"><span className="ed-t">experiments</span><span className="ed-arrow" aria-hidden="true">↗</span></a></p>
    </section>
  );
}
