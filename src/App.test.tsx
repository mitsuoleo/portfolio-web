import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders the main portfolio sections", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /leonardo mitsuo fukuda/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /projetos/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /habilidades/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /contato/i })).toBeInTheDocument();
  });
});
