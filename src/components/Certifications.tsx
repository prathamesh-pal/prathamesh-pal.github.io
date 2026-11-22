import { useEffect, useRef, useState } from "react";
import cs50xImg from "../assets/CS50x.png";
import cs50pImg from "../assets/CS50P.png";

type Cert = { title: string; issuer: string; year: string; img: string };
const certs: Cert[] = [
  { title: "CS50x", issuer: "Harvard University", year: "2025", img: cs50xImg },
  { title: "CS50P", issuer: "Harvard University", year: "2025", img: cs50pImg },
];

export default function Certifications() {
  const [selected, setSelected] = useState<Cert | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (selected && !d.open) d.showModal();
    if (!selected && d.open) d.close();
  }, [selected]);

  return (
    <>
      <ul className="dotted certs">
        {certs.map((c) => (
          <li key={c.title}>
            <button type="button" onClick={() => setSelected(c)}>
              <span><b>{c.title}</b> <span className="muted">{c.issuer}, {c.year}</span></span>
              <span className="view mono">View</span>
            </button>
          </li>
        ))}
      </ul>
      <dialog ref={dialog} className="lightbox" onClose={() => setSelected(null)} onClick={(e) => { if (e.target === e.currentTarget) setSelected(null); }} aria-label={selected ? `${selected.title} certificate` : "Certificate"}>
        {selected && (
          <div className="lightbox-inner">
            <img src={selected.img} alt={`${selected.title} certificate, ${selected.issuer}`} />
            <button type="button" className="close" onClick={() => setSelected(null)}>Close</button>
          </div>
        )}
      </dialog>
    </>
  );
}
