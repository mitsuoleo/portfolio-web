import { ProjectCard } from "../components/ProjectCard";
import { Section } from "../components/Section";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <Section
      id="projetos"
      eyebrow="Trabalhos"
      index="01"
      title="Projetos"
      description="Projetos públicos usados para consolidar fundamentos, praticar código e mostrar evolução técnica de forma objetiva."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
