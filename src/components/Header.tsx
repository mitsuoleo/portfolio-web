import { Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "../data/profile";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Projetos", href: "#projetos" },
  { label: "Habilidades", href: "#skills" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-xl">
      <div className="mx-0 flex h-16 max-w-[22rem] items-center justify-between px-5 sm:mx-auto sm:max-w-6xl sm:px-8 lg:px-10">
        <a
          href="#"
          className="group inline-flex cursor-pointer items-center gap-3 text-sm font-bold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span className="grid size-7 place-items-center border border-accent-muted bg-surface text-[0.68rem] leading-none text-accent transition group-hover:bg-accent group-hover:text-paper">
            LM
          </span>
          <span className="font-mono tracking-widest">{profile.brand}</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-10 cursor-pointer items-center justify-center border border-line bg-surface text-muted transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
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
        <nav
          id="mobile-menu"
          className="border-t border-line bg-paper px-5 py-4 md:hidden"
        >
          <div className="mx-auto grid max-w-6xl gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-2 py-2 text-sm font-medium text-muted hover:bg-surface-raised hover:text-accent"
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
