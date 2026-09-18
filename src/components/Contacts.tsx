import "../App.css";


function Contacts() {
  return (
    <div className="container">
        {/* CONTACT */}
        <div id="contact" className="contact-box">
          <h2 className="uppercase" style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Let's Work Together
          </h2>
          <div className="contact-links">
            <a href="mailto:prathameshpal.tech@gmail.com">[ SEND EMAIL ]</a>
            <a href="https://github.com/prathamesh-pal" target="_blank" rel="noopener noreferrer">[ GITHUB ]</a>
            <a href="https://www.linkedin.com/in/prathamesh-pal-10227a240/" target="_blank" rel="noopener noreferrer">[ LINKEDIN ]</a>
            <a href="https://x.com/Prathamesh_Pal_" target="_blank" rel="noopener noreferrer">[ TWITTER ]</a>
          </div>
        </div>
    </div>
  )
}

export default Contacts