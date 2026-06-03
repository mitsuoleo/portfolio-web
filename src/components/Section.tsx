import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow?: string;
  index?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, index, title, description, children }: SectionProps) {
  return (
    <section
      id={id}
      className="relative scroll-mt-24 border-t border-accent-muted/70 px-5 py-16 before:absolute before:left-0 before:top-0 before:h-px before:w-full before:bg-gradient-to-r before:from-accent/45 before:via-line before:to-transparent sm:px-8 lg:px-10 lg:py-20"
    >
      <div className="mx-0 max-w-[22rem] sm:mx-auto sm:max-w-6xl">
        <div className="mb-10 grid gap-4 md:grid-cols-[0.42fr_1fr] md:items-start">
          {eyebrow ? (
            <div className="flex items-center gap-3 border-l-2 border-accent pl-4">
              {index ? <span className="font-mono text-xs text-muted">{index}</span> : null}
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{eyebrow}</p>
            </div>
          ) : null}
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-normal text-ink sm:text-4xl">{title}</h2>
            {description ? <p className="mt-4 text-base leading-7 text-muted">{description}</p> : null}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
