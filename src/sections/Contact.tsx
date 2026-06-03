import { ArrowUpRight } from "lucide-react";
import { Section } from "../components/Section";
import { profile } from "../data/profile";

export function Contact() {
  return (
    <Section
      id="contato"
      eyebrow="Contato"
      index="04"
      title="Contato"
      description="Vamos conversar? Se algum projeto, vaga ou colaboração fizer sentido, estes são os melhores canais para contato profissional."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {profile.links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              className="group flex cursor-pointer items-center justify-between rounded border border-line bg-surface p-5 text-ink transition hover:-translate-y-0.5 hover:border-accent/40 hover:bg-surface-raised hover:text-accent hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
      <footer className="mt-14 flex flex-col gap-4 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>Feito com React e TypeScript.</span>
        <span className="font-mono text-xs tracking-widest text-accent/60">
          © {new Date().getFullYear()} {profile.brand}
        </span>
      </footer>
    </Section>
  );
}
