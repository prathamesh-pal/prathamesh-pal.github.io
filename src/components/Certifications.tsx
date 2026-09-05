import { useState } from "react";
import cs50xImg  from "../assets/CS50x.png";
import cs50pImg  from "../assets/CS50P.png";


type Cert = {
  title: string;
  issuer: string;
  year: string;
  img: string;
};

const certs: Cert[] = [
  {
    title: "CS50x:",
    issuer: "Harvard University",
    year: "2025",
    img: cs50xImg , // put your cert images in public/assets/
  },
  {
    title: "CS50P:",
    issuer: "Harvard University",
    year: "2025",
    img: cs50pImg,
  },
];

function Certifications() {
  const [selected, setSelected] = useState<Cert | null>(null);

  return (
    <div className="cert-section">
      <div className="certification">• Certification </div>

      <div className="cert-grid">
        {certs.map((cert) => (
          <div
            key={cert.title}
            className="cert-item"
            onClick={() => setSelected(cert)}
          >
            <span className="cert-title">{cert.title}</span>
            <span className="cert-meta">{cert.issuer} · {cert.year}</span>
            <span className="cert-cta">[ VIEW ]</span>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelected(null)}>✕</button>
            <img src={selected.img} alt={selected.title} />
            <p>{selected.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certifications;