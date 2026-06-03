export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    description: "Base de estudos voltada à lógica, regras de negócio e organização de sistemas.",
    skills: ["Python", "Java", "APIs", "Orientação a Objetos", "Estruturas de dados"],
  },
  {
    title: "Frontend de apoio",
    description: "Conhecimento para construir telas simples, testar ideias e integrar experiências web.",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Ferramentas e cloud",
    description: "Ferramentas que apoiam versionamento, ambiente de desenvolvimento e aprendizado em cloud.",
    skills: ["Git", "GitHub", "Docker", "AWS"],
  },
];
