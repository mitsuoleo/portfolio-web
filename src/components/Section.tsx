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
      className="scroll-mt-24 px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
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
            <h2 className="max-w-3xl text-3xl font-bold tracking-normal text-ink [text-wrap:balance] sm:text-4xl">
              {title}
            </h2>
            <div className="mt-3 h-px w-20 bg-gradient-to-r from-accent-muted/80 to-transparent" aria-hidden="true" />
            {description ? <p className="mt-4 text-base leading-7 text-muted">{description}</p> : null}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
