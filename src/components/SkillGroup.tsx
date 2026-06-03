import type { SkillGroup as SkillGroupType } from "../data/skills";
import { getTagColor } from "../lib/tagColor";

type SkillGroupProps = {
  group: SkillGroupType;
};

export function SkillGroup({ group }: SkillGroupProps) {
  const command = group.title.toLowerCase().replace(/\s+/g, "-");

  return (
    <article className="border border-line bg-surface p-5 transition hover:border-accent/40 hover:bg-surface-raised">
      <p className="font-mono text-xs text-accent/60">$ skills --{command}</p>
      <h3 className="mt-3 text-lg font-bold text-ink">{group.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{group.description}</p>
      <div className="mt-5 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className={`inline-flex min-h-8 items-center justify-center border px-3 py-1.5 text-center font-mono text-xs font-medium sm:justify-start ${getTagColor(skill)}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
