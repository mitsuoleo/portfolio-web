import { afterEach, describe, expect, it, vi } from "vitest";
import { applyTheme, getInitialTheme, toggleTheme, type Theme } from "./theme";

describe("theme helpers", () => {
  afterEach(() => {
    localStorage.clear();
    document.documentElement.className = "";
    vi.restoreAllMocks();
  });

  it("ignores a stored light theme", () => {
    localStorage.setItem("portfolio-theme", "light");
    expect(getInitialTheme()).toBe("dark");
  });

  it("defaults to dark when no theme was stored", () => {
    vi.spyOn(window, "matchMedia").mockReturnValue({
      matches: true,
      media: "(prefers-color-scheme: dark)",
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });
    expect(getInitialTheme()).toBe("dark");
  });

  it("applies dark class and persists the value", () => {
    applyTheme();
    expect(document.documentElement).toHaveClass("dark");
    expect(localStorage.getItem("portfolio-theme")).toBe("dark");
  });

  it("keeps the dark theme when toggled", () => {
    const next: Theme = toggleTheme();
    expect(next).toBe("dark");
  });
});
