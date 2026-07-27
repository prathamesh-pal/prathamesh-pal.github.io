import "../App.css";

function Header() {
  return (
     <div className="container">
        {/* HEADER */}
        <header>
          <div>
            <h1 className="uppercase">Prathamesh Pal</h1>
            <span style={{ fontSize: "0.9rem" }}>
              FULL-STACK DEVELOPER & STUDENT
            </span>
          </div>
          <div className="bold">[ 2026 ]</div>
        </header>
    </div>
  )
}

export default Header