import "../App.css";
import Resume from "../assets/PrathameshPal_Resume0.3.pdf"


function Nav() {
  return (
    <div className="container">
      {/* NAVIGATION */}
      <nav>
        <a href="#about">ABOUT</a> <span>//</span>
        <a href="#skills">SKILLS</a> <span>//</span>
        <a href="#projects">PROJECTS</a> <span>//</span>
        <a href="#contact">CONTACT</a><span>//</span>

        <a href={Resume} target="_blank" rel="noopener noreferrer" className="nav-resume">
          RESUME ↗
        </a>
      </nav>
    </div>
  )
}

export default Nav