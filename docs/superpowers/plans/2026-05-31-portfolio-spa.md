# Portfolio SPA Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive React SPA portfolio with projects, skills, contact links, and persistent light/dark theme.

**Architecture:** The app is a static client-side React application. Editable content lives in `src/data`, sections live in `src/sections`, reusable UI lives in `src/components`, and theme persistence lives in `src/lib/theme.ts`.

**Tech Stack:** Vite, React, TypeScript, Tailwind CSS, Lucide React, Framer Motion, Vitest, Testing Library.

---

## File Structure

- Create `package.json`: scripts and dependencies for the SPA.
- Create `index.html`: root HTML, SEO description, theme boot script.
- Create `vite.config.ts`: Vite React config with Vitest.
- Create `tsconfig.json`, `tsconfig.node.json`: TypeScript config.
- Create `tailwind.config.ts`, `postcss.config.js`: Tailwind config.
- Create `src/main.tsx`: React entrypoint.
- Create `src/App.tsx`: page composition.
- Create `src/index.css`: Tailwind imports, global styles, design tokens.
- Create `src/data/profile.ts`: personal profile, hero, links.
- Create `src/data/projects.ts`: project case data.
- Create `src/data/skills.ts`: grouped skills.
- Create `src/lib/theme.ts`: theme storage and DOM helpers.
- Create `src/components/Section.tsx`: reusable section wrapper.
- Create `src/components/ThemeToggle.tsx`: accessible light/dark switch.
- Create `src/components/Header.tsx`: sticky navigation and mobile menu.
- Create `src/components/ProjectCard.tsx`: project case card.
- Create `src/components/SkillGroup.tsx`: skill category display.
- Create `src/sections/Hero.tsx`: first viewport.
- Create `src/sections/Projects.tsx`: project grid.
- Create `src/sections/Skills.tsx`: skills section.
- Create `src/sections/About.tsx`: profile narrative.
- Create `src/sections/Contact.tsx`: contact calls to action.
- Create `src/test/setup.ts`: Testing Library setup.
- Create `src/lib/theme.test.ts`: unit tests for theme helpers.
- Create `src/components/ProjectCard.test.tsx`: card behavior tests.
- Create `src/App.test.tsx`: smoke test for required sections.

## Task 1: Scaffold Tooling And Config

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tsconfig.node.json`
- Create: `tailwind.config.ts`
- Create: `postcss.config.js`
- Create: `src/test/setup.ts`

- [ ] **Step 1: Create package and build tooling**

Create `package.json`:

```json
{
  "name": "portfolio-web",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host 127.0.0.1",
    "build": "tsc -b && vite build",
    "preview": "vite preview --host 127.0.0.1",
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "dependencies": {
    "@vitejs/plugin-react": "^5.0.0",
    "framer-motion": "^12.0.0",
    "lucide-react": "^0.468.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.6.0",
    "@testing-library/react": "^16.0.0",
    "@testing-library/user-event": "^14.5.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "autoprefixer": "^10.4.20",
    "jsdom": "^25.0.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.7.0",
    "vite": "^6.0.0",
    "vitest": "^2.1.0"
  }
}
```

- [ ] **Step 2: Create Vite, TypeScript, Tailwind and test config**

Create `vite.config.ts`:

```ts
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.ts",
  },
});
```

Create `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ES2020"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

Create `tsconfig.node.json`:

```json
{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts", "tailwind.config.ts"]
}
```

Create `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        paper: "#f8fafc",
        accent: "#2563eb",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
```

Create `postcss.config.js`:

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Create `src/test/setup.ts`:

```ts
import "@testing-library/jest-dom/vitest";
```

- [ ] **Step 3: Create root HTML**

Create `index.html`:

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Portfolio web de frontend e produto com projetos, skills e contato profissional."
    />
    <meta property="og:title" content="Portfolio Web" />
    <meta
      property="og:description"
      content="Projetos, skills e contato em uma experiencia tecnica e objetiva."
    />
    <meta property="og:type" content="website" />
    <title>Portfolio Web</title>
    <script>
      const storedTheme = localStorage.getItem("portfolio-theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
        document.documentElement.classList.add("dark");
      }
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 4: Run install**

Run: `npm install`

Expected: dependencies install and `package-lock.json` is created.

## Task 2: Theme Helpers And Data

**Files:**
- Create: `src/lib/theme.ts`
- Create: `src/lib/theme.test.ts`
- Create: `src/data/profile.ts`
- Create: `src/data/projects.ts`
- Create: `src/data/skills.ts`

- [ ] **Step 1: Write theme tests**

Create `src/lib/theme.test.ts`:

```ts
import { afterEach, describe, expect, it, vi } from "vitest";
import { applyTheme, getInitialTheme, toggleTheme, type Theme } from "./theme";

describe("theme helpers", () => {
  afterEach(() => {
    localStorage.clear();
    document.documentElement.className = "";
    vi.restoreAllMocks();
  });

  it("uses stored theme first", () => {
    localStorage.setItem("portfolio-theme", "dark");
    expect(getInitialTheme()).toBe("dark");
  });

  it("falls back to system preference", () => {
    vi.spyOn(window, "matchMedia").mockReturnValue({
      matches: true,
      media: "(prefers-color-scheme: dark)",
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });
    expect(getInitialTheme()).toBe("dark");
  });

  it("applies dark class and persists the value", () => {
    applyTheme("dark");
    expect(document.documentElement).toHaveClass("dark");
    expect(localStorage.getItem("portfolio-theme")).toBe("dark");
  });

  it("toggles theme values", () => {
    const next: Theme = toggleTheme("light");
    expect(next).toBe("dark");
  });
});
```

- [ ] **Step 2: Implement theme helpers**

Create `src/lib/theme.ts`:

```ts
export type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";

export function getInitialTheme(): Theme {
  const storedTheme = localStorage.getItem(STORAGE_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function applyTheme(theme: Theme): void {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem(STORAGE_KEY, theme);
}

export function toggleTheme(theme: Theme): Theme {
  return theme === "dark" ? "light" : "dark";
}
```

- [ ] **Step 3: Create editable content data**

Create `src/data/profile.ts`:

```ts
import { Github, Linkedin, Mail } from "lucide-react";

export const profile = {
  name: "Seu Nome",
  brand: "SeuNome.dev",
  role: "Frontend Engineer",
  focus: "Frontend / Produto / Interfaces",
  headline: "Construo experiencias web claras, rapidas e orientadas a resultado.",
  summary:
    "Desenvolvedor focado em transformar necessidades de produto em interfaces acessiveis, performaticas e faceis de manter.",
  location: "Brasil",
  stats: [
    { value: "8+", label: "projetos entregues" },
    { value: "React", label: "stack principal" },
    { value: "UX", label: "decisoes guiadas por uso" },
  ],
  links: [
    { label: "Email", href: "mailto:seuemail@exemplo.com", icon: Mail },
    { label: "GitHub", href: "https://github.com/seu-usuario", icon: Github },
    { label: "LinkedIn", href: "https://linkedin.com/in/seu-usuario", icon: Linkedin },
  ],
};
```

Create `src/data/projects.ts`:

```ts
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
    name: "Dashboard de Operacoes",
    category: "Produto SaaS",
    problem: "Times precisavam acompanhar indicadores espalhados em planilhas e ferramentas diferentes.",
    solution: "Criei uma interface centralizada com cards de status, filtros rapidos e leitura responsiva.",
    result: "Reduziu friccao na rotina e tornou decisoes operacionais mais rapidas.",
    stack: ["React", "TypeScript", "Tailwind", "Charts"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/seu-usuario/dashboard",
  },
  {
    name: "Landing Tecnica",
    category: "Frontend",
    problem: "Um servico precisava explicar valor tecnico sem parecer uma pagina promocional generica.",
    solution: "Desenhei uma SPA objetiva com hierarquia forte, secoes curtas e provas visuais do produto.",
    result: "Melhorou clareza da oferta e facilitou conversas comerciais.",
    stack: ["Vite", "React", "Framer Motion"],
    demoUrl: "https://example.com",
  },
  {
    name: "Sistema de Componentes",
    category: "Design System",
    problem: "A interface crescia com inconsistencias de botoes, cards, formularios e estados.",
    solution: "Organizei tokens, componentes reutilizaveis e documentacao de uso para o time.",
    result: "Acelerou novas telas e reduziu retrabalho visual.",
    stack: ["React", "Storybook", "CSS", "A11y"],
    repoUrl: "https://github.com/seu-usuario/design-system",
  },
];
```

Create `src/data/skills.ts`:

```ts
export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Interfaces modernas, responsivas e bem estruturadas.",
    skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "HTML semantico", "Acessibilidade"],
  },
  {
    title: "Produto e UI",
    description: "Decisoes visuais conectadas a clareza, fluxo e objetivo.",
    skills: ["Design responsivo", "UX writing", "Prototipacao", "Sistemas visuais"],
  },
  {
    title: "Ferramentas",
    description: "Base tecnica para entregar, testar e evoluir projetos.",
    skills: ["Git", "Vercel", "Vitest", "Testing Library", "APIs REST"],
  },
];
```

- [ ] **Step 4: Run theme tests**

Run: `npm test -- src/lib/theme.test.ts`

Expected: all theme tests pass.

## Task 3: Base App, Styling And Sections

**Files:**
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/index.css`
- Create: `src/components/Section.tsx`
- Create: `src/sections/Hero.tsx`
- Create: `src/sections/About.tsx`
- Create: `src/App.test.tsx`

- [ ] **Step 1: Write app smoke test**

Create `src/App.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders the main portfolio sections", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /construo experiencias web/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /projetos/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /skills/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /contato/i })).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Create global styles and app shell**

Create `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: light;
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: #f8fafc;
  color: #172033;
}

:root.dark {
  color-scheme: dark;
  background: #0c111d;
  color: #e5edf7;
}

html {
  scroll-behavior: smooth;
}

body {
  min-width: 320px;
  min-height: 100vh;
  margin: 0;
  background:
    radial-gradient(circle at top left, rgba(37, 99, 235, 0.08), transparent 30rem),
    #f8fafc;
}

.dark body {
  background:
    radial-gradient(circle at top left, rgba(34, 211, 238, 0.08), transparent 30rem),
    #0c111d;
}

* {
  box-sizing: border-box;
}

:focus-visible {
  outline: 3px solid #60a5fa;
  outline-offset: 3px;
}
```

Create `src/main.tsx`:

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

Create `src/App.tsx`:

```tsx
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen text-ink antialiased dark:text-slate-100">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
    </div>
  );
}
```

- [ ] **Step 3: Create section wrapper**

Create `src/components/Section.tsx`:

```tsx
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-2xl">
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent dark:text-cyan-300">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-bold tracking-normal text-slate-950 dark:text-white sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Create Hero and About**

Create `src/sections/Hero.tsx`:

```tsx
import { ArrowDown, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";

export function Hero() {
  return (
    <section className="px-5 pb-16 pt-28 sm:px-8 lg:px-10 lg:pt-32">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent dark:text-cyan-300">
            {profile.focus}
          </p>
          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-normal text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projetos"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200"
            >
              Ver projetos <ArrowDown size={18} />
            </a>
            <a
              href="mailto:seuemail@exemplo.com"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-100 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
            >
              Contato <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="border border-slate-200 bg-white/80 p-5 shadow-soft backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
        >
          <p className="text-sm font-semibold text-slate-950 dark:text-white">{profile.brand}</p>
          <div className="mt-5 grid gap-3">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-accent bg-slate-50 p-4 dark:border-cyan-300 dark:bg-slate-950/60">
                <p className="text-2xl font-black text-slate-950 dark:text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
```

Create `src/sections/About.tsx`:

```tsx
import { Section } from "../components/Section";

export function About() {
  return (
    <Section
      id="sobre"
      eyebrow="Perfil"
      title="Trabalho na intersecao entre engenharia, clareza e produto."
      description="Gosto de construir interfaces que reduzem ruido: boas decisoes de estado, componentes previsiveis, copy direta e performance suficiente para a experiencia parecer natural."
    >
      <div className="grid gap-4 text-base leading-8 text-slate-600 dark:text-slate-300 md:grid-cols-2">
        <p>
          Minha forma de trabalho combina leitura de problema, prototipacao rapida e implementacao cuidadosa.
          O objetivo e entregar telas que sejam bonitas o bastante para gerar confianca e simples o bastante
          para continuar evoluindo.
        </p>
        <p>
          Valorizo acessibilidade, responsividade, organizacao de codigo e comunicacao clara com times de
          produto, design e engenharia.
        </p>
      </div>
    </Section>
  );
}
```

- [ ] **Step 5: Run smoke test**

Run: `npm test -- src/App.test.tsx`

Expected: test passes after Tasks 4 and 5 add remaining sections.

## Task 4: Header And Theme Toggle

**Files:**
- Create: `src/components/ThemeToggle.tsx`
- Create: `src/components/Header.tsx`

- [ ] **Step 1: Create theme toggle**

Create `src/components/ThemeToggle.tsx`:

```tsx
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { applyTheme, getInitialTheme, toggleTheme, type Theme } from "../lib/theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  function handleToggle() {
    const nextTheme = toggleTheme(theme);
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }

  const isDark = theme === "dark";
  const Icon = isDark ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="inline-flex size-10 items-center justify-center rounded-md border border-slate-300 text-slate-700 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      title={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
    >
      <Icon size={18} />
    </button>
  );
}
```

- [ ] **Step 2: Create responsive header**

Create `src/components/Header.tsx`:

```tsx
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "../data/profile";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Projetos", href: "#projetos" },
  { label: "Skills", href: "#skills" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-paper/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#" className="text-sm font-black text-slate-950 dark:text-white">
          {profile.brand}
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegacao principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-accent dark:text-slate-300 dark:hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md border border-slate-300 text-slate-700 md:hidden dark:border-slate-700 dark:text-slate-200"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Abrir menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav id="mobile-menu" className="border-t border-slate-200 bg-paper px-5 py-4 md:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto grid max-w-6xl gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
```

- [ ] **Step 3: Run tests**

Run: `npm test`

Expected: theme tests pass. App smoke test passes after all imported sections exist.

## Task 5: Projects, Skills And Contact

**Files:**
- Create: `src/components/ProjectCard.tsx`
- Create: `src/components/ProjectCard.test.tsx`
- Create: `src/components/SkillGroup.tsx`
- Create: `src/sections/Projects.tsx`
- Create: `src/sections/Skills.tsx`
- Create: `src/sections/Contact.tsx`

- [ ] **Step 1: Write project card tests**

Create `src/components/ProjectCard.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "../data/projects";

const baseProject: Project = {
  name: "Projeto Teste",
  category: "Produto",
  problem: "Problema claro.",
  solution: "Solucao objetiva.",
  result: "Resultado mensuravel.",
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
    expect(screen.queryByRole("link", { name: /codigo/i })).not.toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Create project card**

Create `src/components/ProjectCard.tsx`:

```tsx
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="flex h-full flex-col border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-accent hover:shadow-soft dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-cyan-300"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent dark:text-cyan-300">
        {project.category}
      </p>
      <h3 className="mt-3 text-xl font-bold text-slate-950 dark:text-white">{project.name}</h3>

      <div className="mt-5 grid gap-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
        <div>
          <p className="font-semibold text-slate-950 dark:text-white">Problema</p>
          <p>{project.problem}</p>
        </div>
        <div>
          <p className="font-semibold text-slate-950 dark:text-white">Solucao</p>
          <p>{project.solution}</p>
        </div>
        <div>
          <p className="font-semibold text-slate-950 dark:text-white">Resultado</p>
          <p>{project.result}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            {item}
          </span>
        ))}
      </div>

      {project.demoUrl || project.repoUrl ? (
        <div className="mt-6 flex flex-wrap gap-3 pt-2">
          {project.demoUrl ? (
            <a className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline dark:text-cyan-300" href={project.demoUrl} target="_blank" rel="noreferrer">
              Deploy <ExternalLink size={16} />
            </a>
          ) : null}
          {project.repoUrl ? (
            <a className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-accent dark:text-slate-200 dark:hover:text-cyan-300" href={project.repoUrl} target="_blank" rel="noreferrer">
              Codigo <Github size={16} />
            </a>
          ) : null}
        </div>
      ) : null}
    </motion.article>
  );
}
```

- [ ] **Step 3: Create skills display**

Create `src/components/SkillGroup.tsx`:

```tsx
import type { SkillGroup as SkillGroupType } from "../data/skills";

type SkillGroupProps = {
  group: SkillGroupType;
};

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <article className="border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/70">
      <h3 className="text-lg font-bold text-slate-950 dark:text-white">{group.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{group.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span key={skill} className="rounded-md border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200">
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
```

- [ ] **Step 4: Create remaining sections**

Create `src/sections/Projects.tsx`:

```tsx
import { Section } from "../components/Section";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <Section
      id="projetos"
      eyebrow="Cases"
      title="Projetos"
      description="Alguns trabalhos organizados pelo problema, solucao e resultado para mostrar raciocinio de produto alem da interface."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
```

Create `src/sections/Skills.tsx`:

```tsx
import { Section } from "../components/Section";
import { SkillGroup } from "../components/SkillGroup";
import { skillGroups } from "../data/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Stack"
      title="Skills"
      description="Tecnologias e praticas agrupadas por uso real, para leitura rapida sem virar uma lista solta."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {skillGroups.map((group) => (
          <SkillGroup key={group.title} group={group} />
        ))}
      </div>
    </Section>
  );
}
```

Create `src/sections/Contact.tsx`:

```tsx
import { ArrowUpRight } from "lucide-react";
import { Section } from "../components/Section";
import { profile } from "../data/profile";

export function Contact() {
  return (
    <Section
      id="contato"
      eyebrow="Contato"
      title="Vamos conversar?"
      description="Se algum projeto, vaga ou colaboracao fizer sentido, estes sao os melhores canais para contato profissional."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {profile.links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center justify-between border border-slate-200 bg-white p-5 text-slate-800 transition hover:border-accent hover:text-accent dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span className="flex items-center gap-3 font-semibold">
                <Icon size={18} />
                {link.label}
              </span>
              <ArrowUpRight size={18} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          );
        })}
      </div>
      <footer className="mt-14 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        Feito com React, TypeScript e atencao aos detalhes.
      </footer>
    </Section>
  );
}
```

- [ ] **Step 5: Run component tests**

Run: `npm test`

Expected: all tests pass.

## Task 6: Verification And Browser QA

**Files:**
- Modify: any files needed for issues found during QA.

- [ ] **Step 1: Build production bundle**

Run: `npm run build`

Expected: TypeScript and Vite build pass.

- [ ] **Step 2: Start dev server**

Run: `npm run dev`

Expected: Vite serves the app, usually at `http://127.0.0.1:5173/`.

- [ ] **Step 3: Browser QA**

Open the local URL and verify:
- Desktop layout has two-column hero and project grid.
- Mobile width has stacked hero, stacked cards, and usable menu.
- Theme toggle changes the visual theme and persists after reload.
- Header links scroll to the right sections.
- There is no horizontal overflow.
- Text does not overlap buttons or cards.

- [ ] **Step 4: Final test run**

Run: `npm test`

Expected: all tests pass.

Run: `npm run build`

Expected: production build passes.
