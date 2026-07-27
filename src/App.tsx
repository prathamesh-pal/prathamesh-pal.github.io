import { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom"; // Needed for React + View Transitions
import flowerImg from "./assets/flower.png";
import flowerImg2 from "./assets/flower2.png";

import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ExperienceEducation from "./components/Experience & Education";
import Contacts from "./components/Contacts";

function App() {
  // 1. STATE & REFS
  const [theme, setTheme] = useState("light");

  const imgRef = useRef<HTMLImageElement>(null);

  const STORAGE_KEY = "theme";

  // 2. INITIAL LOAD & SYSTEM PREFERENCES
  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(mediaQuery.matches ? "dark" : "light");
    }

    // Follow system theme if the user hasn't chosen manually
    const handleSystemChange = (event: MediaQueryListEvent) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setTheme(event.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);

    // Cleanup listener on unmount
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, []);

  // 3. APPLY THEME TO DOM
  // Whenever the 'theme' state changes, we update the HTML tag
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // 4. TOGGLE HANDLER (WITH VIEW TRANSITIONS)
  const toggleTheme = async () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    if (!document.startViewTransition) {
      setTheme(nextTheme);
      localStorage.setItem(STORAGE_KEY, nextTheme);
      return;
    }

    const transition = document.startViewTransition(() => {
      // flushSync forces React to synchronously update the DOM. 
      // This is required so the View Transition API can capture the before/after states correctly!
      flushSync(() => {
        setTheme(nextTheme);
      });
    });

    await transition.ready;

    document.documentElement.animate(
      {
        opacity: [0, 1],
      },
      {
        duration: 350,
        easing: "ease",
        pseudoElement: "::view-transition-new(root)",
      }
    );

    localStorage.setItem(STORAGE_KEY, nextTheme);
  };

  // ======================================================
  // RENDER
  // ======================================================
  return (
    <div>
      <div className="toggle-container">
        {/* Replaced addEventListener with React's onClick */}
        <button
          id="modeButton"
          aria-label="Toggle Dark Mode"
          onClick={toggleTheme}
        >
          {theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
        </button>
      </div>
      <Header/>
      <Nav/>
      <About/>
      <Skills/>
      <Projects />
      <ExperienceEducation />
      <Contacts />
      <div className="container">
        {/* FOOTER */}
        <footer>
          <div>© 2026 PRATHAMESH PAL</div>
          <div>Designed by PRATHAMESH</div>
        </footer>
      </div>
      <div className="flower">
        <img src={flowerImg} alt="flowers" draggable={false} />
      </div>
      <div className="flower2">
        <img src={flowerImg2} alt="flowers" draggable={false} />
      </div>
    </div>
  );
}

export default App;