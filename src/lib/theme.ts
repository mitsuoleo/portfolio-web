export type Theme = "dark";

const STORAGE_KEY = "portfolio-theme";

export function getInitialTheme(): Theme {
  return "dark";
}

export function applyTheme(): void {
  document.documentElement.classList.add("dark");
  localStorage.setItem(STORAGE_KEY, "dark");
}

export function toggleTheme(): Theme {
  return "dark";
}
