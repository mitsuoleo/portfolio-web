# Portfolio SPA Design

## Objetivo

Criar um portfolio web em formato SPA para apresentar perfil profissional, projetos, skills e canais de contato. A experiencia deve transmitir uma mistura de Engenharia de Produto com Minimal Tecnico: clara, objetiva, responsiva, rapida e com conteudo orientado a evidencia de trabalho.

## Publico

O portfolio deve funcionar bem para recrutadores, clientes, lideres tecnicos e pares de engenharia. A primeira tela precisa comunicar rapidamente quem e o profissional, que tipo de problema resolve e onde ver provas concretas do trabalho.

## Direcao Visual

O design sera limpo, tecnico e elegante, evitando aparencia generica de landing page. A interface deve usar bastante espaco em branco, tipografia forte, bordas finas, cards discretos e um acento visual azul/ciano usado com moderacao.

Tema claro:
- Fundo quase branco.
- Texto grafite.
- Bordas cinza frias.
- Azul tecnico para links, foco e destaques.

Tema escuro:
- Fundo carvao.
- Texto claro.
- Bordas discretas.
- Azul/ciano para acentos e estados interativos.

Componentes devem ter raio pequeno, alinhamento preciso e hierarquia visual clara. Cards de projeto devem parecer pequenos estudos de caso, nao apenas vitrines com imagem.

## Stack Tecnica

Usar React, Vite e TypeScript como base da SPA. Essa stack entrega velocidade de desenvolvimento, build leve, boa manutencao e complexidade adequada para um portfolio estatico.

Usar Tailwind CSS para criar tokens visuais, responsividade, tema claro/escuro e consistencia de spacing sem espalhar CSS manual por muitos arquivos.

Usar Lucide React para icones de navegacao, links externos, tema, GitHub, LinkedIn, email e menu mobile.

Usar Framer Motion de forma moderada para transicoes sutis: entrada de secoes, hover de cards e troca de tema. Animacoes nao devem prejudicar performance nem parecer decorativas demais.

O contato inicial sera feito por links diretos: email, LinkedIn e GitHub. WhatsApp pode ser incluido somente se o usuario fornecer esse canal. Formulario funcional fica fora do MVP para evitar backend desnecessario.

Deploy recomendado: Vercel. Alternativa aceitavel: Netlify.

## Estrutura Da Aplicacao

### Layout

A SPA tera um layout principal com header, conteudo em secoes e footer simples. A navegacao usara ancoras internas com scroll suave.

### Header

Header fixo ou sticky discreto, com:
- Nome ou marca pessoal.
- Links para Projetos, Skills e Contato.
- Botao de alternancia claro/escuro.
- Menu compacto no mobile.

### Hero

Primeira tela com:
- Nome.
- Cargo ou posicionamento profissional.
- Frase curta de valor.
- CTAs para ver projetos e entrar em contato.
- Painel lateral com stack principal, foco profissional ou pequenos indicadores.

### Projetos

Secao principal do portfolio. Cada projeto deve ser apresentado como case com:
- Nome.
- Contexto ou problema.
- Solucao implementada.
- Stack usada.
- Resultado ou aprendizado.
- Links para deploy e repositorio. Quando um link nao existir, o card deve omitir a acao correspondente sem deixar espaco visual quebrado.

Os projetos ficarao em dados locais, por exemplo `projects.ts`, para facilitar manutencao sem alterar componentes.

### Skills

Skills organizadas por categoria:
- Frontend.
- UI e design de interface.
- Backend ou ferramentas.
- Produto, colaboracao ou soft skills tecnicas.

Evitar uma nuvem solta de tecnologias. A secao deve mostrar leitura rapida e hierarquia.

### Sobre

Texto curto explicando forma de trabalho, interesses tecnicos e tipo de problema que o profissional gosta de resolver. Essa secao deve reforcar credibilidade sem repetir o hero.

### Contato

Secao direta com links para email, LinkedIn, GitHub e outros canais escolhidos. Deve conter uma chamada clara para conversa profissional.

## Features Do MVP

- SPA responsiva.
- Tema claro/escuro com persistencia em `localStorage`.
- Navegacao por secoes.
- Cards de projetos baseados em dados locais.
- Secao de skills categorizada.
- Links externos com icones.
- Scroll suave.
- Microinteracoes discretas.
- SEO basico com title, description, favicon e Open Graph.
- Acessibilidade basica: contraste, foco visivel, labels e navegacao por teclado.

## Fora Do MVP

- Backend.
- CMS.
- Blog.
- Area administrativa.
- Formulario com envio real.
- Multilingue.
- Filtros avancados de projetos.

Esses itens podem entrar depois, se houver conteudo ou necessidade real.

## Arquitetura De Codigo

Estrutura inicial:

```text
src/
  components/
    Header.tsx
    ThemeToggle.tsx
    Section.tsx
    ProjectCard.tsx
    SkillGroup.tsx
  data/
    projects.ts
    skills.ts
    profile.ts
  sections/
    Hero.tsx
    Projects.tsx
    Skills.tsx
    About.tsx
    Contact.tsx
  lib/
    theme.ts
  App.tsx
  main.tsx
  index.css
```

Componentes devem ser pequenos e bem delimitados. Dados editaveis ficam separados da apresentacao para que projetos e skills possam ser atualizados com facilidade.

## Responsividade

Desktop:
- Hero em duas colunas.
- Projetos em grid.
- Header completo.

Tablet:
- Grid reduzido.
- Espacamentos intermediarios.

Mobile:
- Hero em coluna unica.
- Cards empilhados.
- Menu compacto.
- CTAs com largura adequada e sem overflow.

## Estados E Interacoes

- Hover discreto em cards e links.
- Foco visivel para teclado.
- Botao de tema com icone claro.
- Menu mobile acessivel.
- Ancoras internas sem esconder titulos atras do header.

## Testes E Verificacao

Verificar:
- Build de producao.
- Renderizacao em desktop e mobile.
- Alternancia de tema.
- Links externos.
- Navegacao por ancoras.
- Contraste e foco visivel.
- Ausencia de overflow horizontal.

## Criterios De Aceite

O projeto esta pronto quando:
- A SPA abre na primeira tela com mensagem profissional clara.
- Projetos, skills e contato estao presentes.
- O tema claro/escuro funciona e persiste.
- A experiencia e responsiva em mobile e desktop.
- O build de producao passa.
- O visual segue a direcao Produto + Minimal Tecnico.
