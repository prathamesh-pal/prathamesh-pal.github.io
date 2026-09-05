import "../App.css";
import Certifications from "./Certifications.tsx";

// Inside your JSX, after the experience/education split-row:
<Certifications />

function ExperienceEducation() {
  return (
    <div className="container">
        <br />
        {/* EXPERIENCE & EDUCATION */}
        <div className="split-row">
          <div className="split-col">
            <b className="uppercase">Experience</b>
            <hr className="divider" />
            <p>• Peer Tutor (Math & Code)</p>
            <br />
            <p>• Freelance Full-Stack Developer</p>
            <br />
            <p>• API Architect</p>
          </div>
          <div className="split-col">
            <b className="uppercase">Education</b>
            <hr className="divider" />
            <p>
              • <b>CS50 & Self-Taught Developer</b>
              <br />
              &nbsp;&nbsp;Learning by building & exploring
            </p>
            <br />
            <Certifications />
          </div>
        </div>
    </div>
  )
}

export default ExperienceEducation