import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color_primary: "var(--color-primary)",
        color_secondary: "var(--color-secondary)",
        color_green: "var(--color-green)",
        color_gray: "var(--color-gray)",
        color_orange: "var(--color-orange)",
        color_blue: "var(--color-blue)",
      },
      fontSize: {
        large_title: "var(--font-size-large-title)", // ~48px
        medium_title: "var(--font-size-medium-title)", // ~32px
        text: "var(--font-size-text)", // ~16px
        small_text: "var(--font-size-small-text)", // ~14px
      },
      fontFamily: {
        font_family_primary: "var(--font-family-primary)",
        font_family_secondary: "var(--font-family-secondary)",
      }
    },
  },
  plugins: [],
} satisfies Config;


