const languages = ["Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS"];
const infra = ["Docker", "Dockerfile", "AWS", "PostgreSQL", "SQLite"];
const tools = ["Git", "GitHub", "pytest", "Vite", "APIs"];

export function getTagColor(item: string): string {
  if (languages.includes(item)) {
    return "border-[#312e81] bg-[#1e1b4b] text-[#a78bfa]";
  }

  if (infra.includes(item)) {
    return "border-[#14532d] bg-[#052e16] text-[#67e8a0]";
  }

  if (tools.includes(item)) {
    return "border-[#831843] bg-[#1a0a14] text-[#f472b6]";
  }

  return "border-line bg-surface text-muted";
}
