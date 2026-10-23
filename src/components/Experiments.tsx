

interface ExperimentalWorkProps {
  href?: string
}

export default function ExperimentalWork({
  href = 'https://prathamesh-pal.github.io/project-hub/',
}: ExperimentalWorkProps) {
  return (
    <section className="experimental-work">
      <div className="experimental-work__heading">
        <span>03.</span>
        <h2>EXPERIMENTAL WORK</h2>
        <span className="experimental-work__status">
          <span className="experimental-work__dot" />
          ALWAYS EVOLVING
        </span>
      </div>

      <a
        className="experimental-work__card"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Explore the project hub"
      >
        <div className="experimental-work__content">
          <div className="experimental-work__meta">
            <span>PERSONAL PLAYGROUND</span>
            <span>REACT · TYPESCRIPT · CSS</span>
          </div>

          <h3>
            Project Hub<span className="experimental-work__period">.</span>
          </h3>

          <p>
            A home for little experiments, strange ideas, creative
            interfaces, and tools built just to see what’s possible.
          </p>

          <span className="experimental-work__cta">
            EXPLORE THE EXPERIMENTS
          </span>
        </div>

        <div className="experimental-work__visual" aria-hidden="true">
          <div className="experimental-work__orbit experimental-work__orbit--outer" />
          <div className="experimental-work__orbit experimental-work__orbit--inner" />
          <span className="experimental-work__symbol">✳</span>
          <span className="experimental-work__visual-label">
            BUILT TO EXPLORE
          </span>
          <span className="experimental-work__arrow">↗</span>
        </div>
      </a>
    </section>
  )
}
