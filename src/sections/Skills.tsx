import { Section } from "../components/Section";
import { SkillGroup } from "../components/SkillGroup";
import { skillGroups } from "../data/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Base técnica"
      index="02"
      title="Habilidades"
      description="Tecnologias e práticas que sustentam meus estudos atuais em backend, ferramentas de engenharia e desenvolvimento web."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {skillGroups.map((group) => (
          <SkillGroup key={group.title} group={group} />
        ))}
      </div>
    </Section>
  );
}
