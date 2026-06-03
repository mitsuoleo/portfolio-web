import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../data/projects";
import { getTagColor } from "../lib/tagColor";

type ProjectCardProps = {
  project: Project;
  index: number;
};

function toSlug(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}

function getCategoryBorder(category: string): string {
  if (category.includes("Backend")) {
    return "border-t-[#a78bfa]";
  }

  if (category.includes("Web")) {
    return "border-t-[#67e8a0]";
  }

  return "border-t-accent";
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const caseNumber = String(index + 1).padStart(2, "0");
  const slug = toSlug(project.name);
  const borderColor = getCategoryBorder(project.category);

  return (
    <article
      className={`group flex h-full flex-col border border-line border-t-2 ${borderColor} bg-surface p-5 transition hover:-translate-y-1 hover:border-accent/40 hover:bg-surface-raised hover:shadow-editorial`}
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      <div className="flex items-start justify-between gap-4 font-mono">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          {project.category}
        </p>
        <span className="text-xs text-muted transition-colors duration-200 group-hover:text-accent">
          {caseNumber}
        </span>
      </div>

      <p className="mt-5 font-mono text-xs text-accent/60">$ open ./projects/{slug}</p>
      <h3 className="mt-3 text-xl font-bold text-ink">{project.name}</h3>

      <div className="mt-5 grid gap-4 text-sm leading-6 text-muted">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            Problema
          </p>
          <p className="mt-1">{project.problem}</p>
        </div>
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            Solução
          </p>
          <p className="mt-1">{project.solution}</p>
        </div>
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            Resultado
          </p>
          <p className="mt-1">{project.result}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className={`border px-2.5 py-1 font-mono text-xs font-medium ${getTagColor(item)}`}
          >
            {item}
          </span>
        ))}
      </div>

      {project.demoUrl || project.repoUrl ? (
        <div className="mt-6 flex flex-wrap gap-3 border-t border-line pt-4">
          {project.demoUrl ? (
            <a
              className="inline-flex cursor-pointer items-center gap-2 rounded text-sm font-semibold text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Deploy <ExternalLink size={16} />
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              className="inline-flex cursor-pointer items-center gap-2 rounded text-sm font-semibold text-muted hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Código <Github size={16} />
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
