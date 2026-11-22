import { useCallback, useState } from "react";
import { flushSync } from "react-dom";

type Theme = "light" | "dark";
const KEY = "theme";

const read = (): Theme => {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch { /* storage unavailable */ }
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(read);

  const apply = useCallback((next: Theme) => {
    flushSync(() => setTheme(next));
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem(KEY, next); } catch { /* ignore */ }
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    if (document.startViewTransition) document.startViewTransition(() => apply(next));
    else apply(next);
  }, [theme, apply]);

  return { theme, toggle };
}
