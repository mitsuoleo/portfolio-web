import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Header } from "./Header";

describe("Header", () => {
  it("opens the mobile menu", async () => {
    const user = userEvent.setup();
    render(<Header />);

    await user.click(screen.getByRole("button", { name: "Abrir menu" }));

    expect(within(document.querySelector("#mobile-menu")!).getByRole("link", { name: "Sobre" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Abrir menu" })).toHaveAttribute("aria-expanded", "true");
  });

  it("toggles and persists the light theme", async () => {
    const user = userEvent.setup();
    render(<Header />);

    await user.click(screen.getByRole("button", { name: "Ativar tema claro" }));

    expect(document.documentElement).not.toHaveClass("dark");
    expect(localStorage.getItem("portfolio-theme")).toBe("light");
  });
});
