import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#742673",
          gold: "#FEEE8C",
          dark: "#000000",
          light: "#FFFFFF",
          text: "var(--brand-text)",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        malayalam: ['var(--font-noto-malayalam)', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(145deg, #2a082b 0%, #110912 100%)',
        'gold-gradient': 'linear-gradient(135deg, #FEEE8C 0%, #D4AF37 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
