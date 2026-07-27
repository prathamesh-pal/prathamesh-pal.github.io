import "../App.css";



function Projects() {
  return (
     <div className="container">
        {/* PROJECTS */}
        <div id="projects">
          <div className="section-header">02. SELECTED WORK</div>

          <div className="project-item">
            <div>
              <span className="project-title uppercase">WorkNest</span>{" "}
              <span className="project-sub">JOB PORTAL</span>
            </div>
            <div>
              A recruiter and job-finder system built with <b>Flask & SQLite</b>.
            </div>
          </div>

          <div className="project-item">
            <div>
              <span className="project-title uppercase">Finance Sim</span>{" "}
              <span className="project-sub">STOCK TRADING</span>
            </div>
            <div>
              Real-time stock trading simulator with portfolio tracking.
            </div>
          </div>

          <div className="project-item">
            <div>
              <span className="project-title uppercase">Auction Hub</span>{" "}
              <span className="project-sub">
                ECOMMERCE{" "}
                <a
                  href="https://github.com/prathamesh-pal/Django-BOOKStop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🌐
                </a>
              </span>
            </div>
            <div>
              <b>Django-based</b> auction system with bidding, comments, and categories.
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects