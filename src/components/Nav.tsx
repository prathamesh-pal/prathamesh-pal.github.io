import "../App.css";


function Nav() {
  return (
     <div className="container">
        {/* NAVIGATION */}
        <nav>
          <a href="#about">ABOUT</a> <span>//</span>
          <a href="#skills">SKILLS</a> <span>//</span>
          <a href="#projects">PROJECTS</a> <span>//</span>
          <a href="#contact">CONTACT</a>
        </nav>
    </div>
  )
}

export default Nav