import { Fragment, useEffect, useState } from "react";
import "./styles.css";
import { SECTIONS } from "./content";
import { useTheme } from "./useTheme";
import Dock from "./components/Dock";
import Header from "./components/Header";
import Water from "./components/Water";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ExperimentalWork from "./components/Experiments";
import ExperienceEducation from "./components/Experience & Education";
import Contacts from "./components/Contacts";

const PAGES = [Hero, Projects, Skills, ExperimentalWork, ExperienceEducation, Contacts];

export default function App() {
  const { theme, toggle } = useTheme();
  const [active, setActive] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTIONS.forEach((s) => { const el = document.getElementById(s.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Water />
      <main className="page">
        <Header />
        {PAGES.map((Page, i) => (
          <Fragment key={i}>
            <Page />
            {i < PAGES.length - 1 && <div className="break" aria-hidden="true" />}
          </Fragment>
        ))}
      </main>
      <Dock active={active} theme={theme} onToggle={toggle} />
    </>
  );
}
