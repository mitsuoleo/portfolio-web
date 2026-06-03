import { Moon } from "lucide-react";
import { useEffect } from "react";
import { applyTheme, getInitialTheme, toggleTheme } from "../lib/theme";

export function ThemeToggle() {
  useEffect(() => {
    getInitialTheme();
    applyTheme();
  }, []);

  function handleToggle() {
    toggleTheme();
    applyTheme();
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="inline-flex size-10 cursor-pointer items-center justify-center border border-line bg-surface text-muted transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label="Tema escuro ativo"
      title="Tema escuro ativo"
    >
      <Moon size={18} />
    </button>
  );
}
