import Certifications from "./Certifications";

export default function ExperienceEducation() {
  return (
    <section id="background" className="sec" aria-labelledby="bg-h">
      <h2 id="bg-h">Background</h2>
      <div className="cols">
        <div>
          <h3>Experience</h3>
          <ul className="dotted">
            <li>Peer Tutor (Math &amp; Code)</li>
            <li>Freelance Full-Stack Developer</li>
            <li>API Architect</li>
          </ul>
        </div>
        <div>
          <h3>Education</h3>
          <ul className="dotted">
            <li><b>CS50 &amp; Self-Taught Developer</b><br /><span className="muted">Learning by building &amp; exploring</span></li>
          </ul>
          <h3 className="sub">Certifications</h3>
          <Certifications />
        </div>
      </div>
    </section>
  );
}
