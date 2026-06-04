import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { applyTheme, getInitialTheme, toggleTheme, type Theme } from "../lib/theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  function handleToggle() {
    const nextTheme = toggleTheme(theme);
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }

  const isDark = theme === "dark";
  const Icon = isDark ? Sun : Moon;
  const label = isDark ? "Ativar tema claro" : "Ativar tema escuro";

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="inline-flex size-10 cursor-pointer items-center justify-center border border-line bg-surface text-muted transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={label}
      title={label}
    >
      <Icon size={18} />
    </button>
  );
}
