import "../App.css";


function Skills() {
  return (
   <div className="container">
        
        {/* SKILLS */}
        <div id="skills">
          <div className="section-header">01. TECHNICAL SKILLS</div>
          <div className="split-row">
            <div className="split-col">
              <b className="uppercase">Languages</b>
              <hr className="divider" />
              <ul>
                <li>Python</li>
                <li>JavaScript</li>
                <li>HTML & CSS</li>
                <li>SQL & NoSQL</li>
              </ul>
            </div>
            <div className="split-col">
              <b className="uppercase">Frameworks</b>
              <hr className="divider" />
              <ul>
                <li>FastAPI & Django</li>
                <li>Node.js</li>
                <li>React,Tailwind CSS</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </div>
</div>
  )
}

export default Skills