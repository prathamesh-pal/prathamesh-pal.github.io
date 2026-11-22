import Datum from "./Datum";

export default function Header() {
  return (
    <header className="top">
      <Datum />
      <a className="hello" href="mailto:prathameshpal.tech@gmail.com">
        <span className="hello-t">Say hello</span>
        <span className="hello-arrow" aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
