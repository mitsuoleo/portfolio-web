export type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";

export function getInitialTheme(): Theme {
  const themeParam = new URLSearchParams(window.location.search).get("theme");
  if (themeParam === "light" || themeParam === "dark") {
    return themeParam;
  }

  const storedTheme = localStorage.getItem(STORAGE_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return "dark";
}

export function applyTheme(theme: Theme): void {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem(STORAGE_KEY, theme);
}

export function toggleTheme(theme: Theme): Theme {
  return theme === "dark" ? "light" : "dark";
}
