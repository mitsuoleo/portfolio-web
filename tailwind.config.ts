import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Syne'", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        "accent-deep": "rgb(var(--color-accent-deep) / <alpha-value>)",
        "accent-muted": "rgb(var(--color-accent-muted) / <alpha-value>)",
        "accent-soft": "rgb(var(--color-accent-soft) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "surface-raised": "rgb(var(--color-surface-raised) / <alpha-value>)",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(167, 139, 250, 0.08)",
        editorial: "0 1px 0 rgba(167, 139, 250, 0.06), 0 24px 60px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
} satisfies Config;
