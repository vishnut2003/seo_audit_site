import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        foregroundlight: "var(--foreground-light)",
        accent1: "var(--Accent-1)",
        accent2: "var(--Accent-2)",
        accent3: "var(--Accent-3)",
      },
    },
  },
  plugins: [],
} satisfies Config;
