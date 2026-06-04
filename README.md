# mitsuo.dev

Sou Leonardo Mitsuo Fukuda, estudante de Análise e Desenvolvimento de Sistemas com foco em desenvolvimento backend, Python e fundamentos de engenharia de software.

Construí este portfólio como uma SPA responsiva para apresentar meu perfil profissional, meus projetos, minhas habilidades e meus canais de contato em uma interface com estética técnica inspirada em terminal/CLI.

## Objetivo

Este portfólio tem dois objetivos principais:

- apresentar minha trajetória, projetos e stack de forma clara para recrutadores e pessoas de tecnologia;
- demonstrar cuidado com organização de código, componentização, responsividade, testes e decisões visuais consistentes.

## Stack utilizada

- React: construção da interface por componentes.
- TypeScript: tipagem dos dados, props e estrutura dos componentes.
- Vite: ambiente de desenvolvimento e build rápido.
- Tailwind CSS: sistema visual, responsividade e tokens de tema.
- Lucide React: ícones da interface.
- Vitest + Testing Library: testes unitários e de renderização.

## Como o projeto foi pensado

A direção visual mistura engenharia de produto com minimalismo técnico. A interface usa tema escuro, grid sutil, acentos em violeta e elementos inspirados em terminal para reforçar uma identidade ligada a backend, CLI e engenharia de software.

As principais seções são:

- Hero: apresentação principal com headline, resumo e um card em formato de janela de terminal.
- Projetos: cards com problema, solução, resultado, stack e links de código.
- Habilidades: agrupamento por Backend, Frontend de apoio e Ferramentas/cloud.
- Sobre: resumo da trajetória e objetivos profissionais.
- Contato: links diretos para email, GitHub e LinkedIn.

## Estrutura

```txt
src/
  components/     Componentes reutilizáveis
  data/           Conteúdo do perfil, projetos e skills
  lib/            Helpers de tema e tags
  sections/       Seções principais da página
  test/           Configuração dos testes
```

O conteúdo principal fica separado em `src/data`, o que facilita atualizar textos, projetos e habilidades sem mexer na estrutura visual da aplicação.

## Como rodar localmente

```bash
npm install
npm run dev
```

Para gerar build de produção:

```bash
npm run build
```

Para rodar os testes:

```bash
npm test
```

## O que este projeto demonstra

- Componentização em React com TypeScript.
- Organização de dados separada da camada visual.
- Interface responsiva para desktop e mobile.
- Uso de tema visual consistente com Tailwind.
- Testes para componentes e helpers.
- Atenção a hierarquia visual, contraste, espaçamento e legibilidade.

## Links

- GitHub: [github.com/mitsuoleo](https://github.com/mitsuoleo)
- LinkedIn: [linkedin.com/in/leonardofukuda](https://www.linkedin.com/in/leonardofukuda/)
- Email: [leonardofukuda9@gmail.com](mailto:leonardofukuda9@gmail.com)
