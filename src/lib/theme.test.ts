import { afterEach, describe, expect, it, vi } from "vitest";
import { applyTheme, getInitialTheme, toggleTheme, type Theme } from "./theme";

describe("theme helpers", () => {
  afterEach(() => {
    localStorage.clear();
    document.documentElement.className = "";
    vi.restoreAllMocks();
  });

  it("uses stored theme first", () => {
    localStorage.setItem("portfolio-theme", "light");
    expect(getInitialTheme()).toBe("light");
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
    applyTheme("dark");
    expect(document.documentElement).toHaveClass("dark");
    expect(localStorage.getItem("portfolio-theme")).toBe("dark");
  });

  it("toggles theme values", () => {
    const next: Theme = toggleTheme("dark");
    expect(next).toBe("light");
  });
});
