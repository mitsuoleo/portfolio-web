import { ArrowDown, ChevronDown, Mail, Maximize2, Minus, Terminal, X } from "lucide-react";
import type { CSSProperties } from "react";
import { profile } from "../data/profile";

const terminalLines = [
  { command: "whoami", output: profile.name },
  { command: "focus --current", output: "Backend | Python | Engenharia de Software" },
  { command: "status", output: "Buscando primeiro estágio em tecnologia" },
  { command: "stack --core", output: "Python, Git, Docker, Java, AWS" },
];

type TerminalLineProps = {
  command: string;
  output: string;
  index: number;
};

function TerminalLine({ command, output, index }: TerminalLineProps) {
  const commandDelay = `${index * 650 + 120}ms`;
  const outputDelay = `${index * 650 + 680}ms`;

  return (
    <div className="grid gap-1 font-mono text-sm leading-6">
      <p className="terminal-line text-accent" style={{ "--delay": commandDelay } as CSSProperties}>
        <span className="text-accent/60">$</span>{" "}
        <span
          className="terminal-type"
          style={{ "--characters": command.length, "--delay": commandDelay } as CSSProperties}
        >
          {command}
        </span>
      </p>
      <p className="terminal-line pl-4 text-ink/80" style={{ "--delay": outputDelay } as CSSProperties}>
        {output}
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section className="px-5 pb-16 pt-28 sm:px-8 lg:px-10 lg:pb-20 lg:pt-32">
      <div className="mx-0 grid max-w-[22rem] gap-10 sm:mx-auto sm:max-w-6xl lg:grid-cols-[0.9fr_1.15fr] lg:items-center">
        <div className="max-w-2xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <p className="border border-accent-muted bg-accent-soft px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {profile.focus}
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Backend + aprendizado</p>
          </div>

          <h1 className="max-w-2xl text-[2.35rem] font-bold leading-[1.04] tracking-normal text-ink sm:text-5xl lg:text-[3.55rem]">
            {profile.firstName}
            <br />
            <span className="text-accent">{profile.lastName}.</span>
          </h1>

          <p className="mt-4 max-w-2xl text-lg font-medium leading-7 text-muted">{profile.headline}</p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted/80">{profile.summary}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projetos"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded bg-accent px-5 py-3 text-sm font-semibold text-paper transition hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Ver projetos <ArrowDown size={18} />
            </a>
            <a
              href="mailto:leonardofukuda9@gmail.com"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded border border-accent-muted px-5 py-3 text-sm font-semibold text-accent transition hover:border-accent hover:bg-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Contato <Mail size={18} />
            </a>
          </div>
        </div>

        <aside className="overflow-hidden border border-accent-muted/70 bg-surface shadow-editorial">
          <div className="flex items-center justify-between border-b border-accent-muted/60 bg-paper px-4 py-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-ink">
              <Terminal size={17} className="text-accent" />
              <span className="font-mono tracking-widest">{profile.brand}</span>
            </div>
            <div className="flex items-center gap-2 text-muted" aria-hidden="true">
              <Minus size={14} strokeWidth={2.2} />
              <Maximize2 size={13} strokeWidth={2.1} />
              <X size={14} strokeWidth={2.2} />
            </div>
          </div>
          <div className="bg-paper p-5 text-ink sm:min-h-[28rem] sm:p-6">
            <div className="mb-6 flex items-center gap-4 border border-line bg-surface/80 p-4">
              <img
                src={profile.avatarUrl}
                alt={`Foto de perfil de ${profile.name}`}
                className="size-14 rounded-full border border-accent-muted object-cover"
                loading="lazy"
              />
              <div className="min-w-0">
                <p className="font-mono text-sm font-semibold text-ink sm:text-base">{profile.name}</p>
                <p className="mt-1 text-xs leading-5 text-muted sm:text-sm">{profile.role}</p>
              </div>
            </div>
            <div className="grid gap-5">
              {terminalLines.map((line, index) => (
                <TerminalLine key={line.command} {...line} index={index} />
              ))}
              <p className="terminal-line font-mono text-sm text-accent" style={{ "--delay": "2850ms" } as CSSProperties}>
                ready<span className="terminal-cursor" />
              </p>
            </div>
            <div className="mt-8 grid gap-3 border-t border-accent-muted/60 pt-5 sm:grid-cols-3">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-accent bg-surface/70 px-4 py-4">
                  <p className="font-mono text-base font-bold leading-6 text-accent sm:text-lg">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-10 flex justify-center">
        <ChevronDown size={20} className="animate-bounce text-muted" aria-hidden="true" />
      </div>
    </section>
  );
}
