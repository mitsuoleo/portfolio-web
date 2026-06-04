const languages = ["Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS"];
const infra = ["Docker", "Dockerfile", "AWS", "PostgreSQL", "SQLite"];
const tools = ["Git", "GitHub", "pytest", "Vite", "APIs"];

export function getTagColor(item: string): string {
  if (languages.includes(item)) {
    return "border-accent-muted/50 bg-accent-soft text-accent";
  }

  if (infra.includes(item)) {
    return "border-emerald-600/30 bg-emerald-50 text-emerald-700 dark:border-emerald-500/35 dark:bg-emerald-950/50 dark:text-emerald-300";
  }

  if (tools.includes(item)) {
    return "border-rose-500/30 bg-rose-50 text-rose-700 dark:border-rose-500/35 dark:bg-rose-950/40 dark:text-rose-300";
  }

  return "border-line bg-surface text-muted";
}
