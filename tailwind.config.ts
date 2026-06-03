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
        ink: {
          DEFAULT: "#111827",
          dark: "#f1f5f9",
        },
        paper: {
          DEFAULT: "#f7f7f2",
          dark: "#0d0f1a",
        },
        accent: {
          DEFAULT: "#7c3aed",
          dark: "#a78bfa",
          muted: "#312e81",
          soft: "#ede9fe",
        },
        line: {
          DEFAULT: "#d9d9d2",
          dark: "#1e2535",
        },
        muted: {
          DEFAULT: "#5f6673",
          dark: "#94a3b8",
        },
        surface: {
          DEFAULT: "#fffffb",
          dark: "#131825",
          raised: "#1a2035",
        },
      },
      boxShadow: {
        soft: "0 18px 50px rgba(167, 139, 250, 0.08)",
        editorial: "0 1px 0 rgba(167, 139, 250, 0.06), 0 24px 60px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
} satisfies Config;
