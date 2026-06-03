export type Project = {
  name: string;
  category: string;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
  demoUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    name: "Sistema Bancário",
    category: "Backend / Python",
    problem: "Desafio prático da trilha de Python da DIO, com foco em simular operações bancárias e consolidar fundamentos da linguagem.",
    solution: "Implementei regras de depósito, saque, extrato e controle de fluxo usando Python, organizando a lógica para evoluir o exercício de forma incremental.",
    result: "O projeto reforçou fundamentos de programação, leitura de requisitos, validação de regras e construção de uma solução funcional para terminal.",
    stack: ["Python", "HTML", "CSS", "JavaScript", "Dockerfile", "AWS", "PostgreSQL"],
    repoUrl: "https://github.com/mitsuoleo/desafio-sistema-bancario",
  },
  {
    name: "Controle Financeiro",
    category: "Web / Em evolução",
    problem: "Projeto pessoal para praticar desenvolvimento web enquanto exploro organização financeira e novas áreas do ecossistema frontend.",
    solution: "Estruturei uma aplicação web inicial para registrar e visualizar informações financeiras, usando JavaScript como base principal.",
    result: "Serve como laboratório de aprendizado para evoluir funcionalidades, organizar código e conectar frontend com futuras regras de negócio.",
    stack: ["JavaScript", "HTML", "CSS"],
    repoUrl: "https://github.com/mitsuoleo/controle-financeiro",
  },
];
