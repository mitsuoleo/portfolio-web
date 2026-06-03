import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { Project } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

const baseProject: Project = {
  name: "Projeto Teste",
  category: "Produto",
  problem: "Problema claro.",
  solution: "Solução objetiva.",
  result: "Resultado mensurável.",
  stack: ["React", "TypeScript"],
};

describe("ProjectCard", () => {
  it("renders project case content", () => {
    render(<ProjectCard project={baseProject} index={0} />);
    expect(screen.getByRole("heading", { name: "Projeto Teste" })).toBeInTheDocument();
    expect(screen.getByText("Problema claro.")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("omits links that are not provided", () => {
    render(<ProjectCard project={baseProject} index={0} />);
    expect(screen.queryByRole("link", { name: /deploy/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /código/i })).not.toBeInTheDocument();
  });
});
