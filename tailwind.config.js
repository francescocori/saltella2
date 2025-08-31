/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Background colors
    "bg-brand-dark",
    "bg-brand-darker",
    "bg-brand-green",
    "bg-brand-terracotta",
    "bg-brand-gold",
    "bg-brand-goldDark",
    // Text colors
    "text-brand-dark",
    "text-brand-darker",
    "text-brand-green",
    "text-brand-terracotta",
    "text-brand-gold",
    "text-brand-goldDark",
    "text-custom-text",
    "text-custom-textSecondary",
    // Border colors
    "border-brand-dark",
    "border-brand-darker",
    "border-brand-green",
    "border-brand-terracotta",
    "border-brand-gold",
    "border-brand-goldDark",
    "border-custom-border",
    "border-custom-text",
    "border-custom-textSecondary",
  ],
  theme: {
    extend: {
      colors: {
        // Custom brand colors (non-conflicting with DaisyUI)
        brand: {
          dark: "#0c0e0c", // Main background
          darker: "#1E1E1E", // Section background
          green: "#4A7C59", // Fresh olive green
          terracotta: "#B55239", // Warm roasted red
          gold: "#E6B566", // Golden halloumi
          goldDark: "#C99442", // Hover for golden
        },
        custom: {
          text: "#F5F5F5", // Headings / main text
          textSecondary: "#CCCCCC", // Body text
          border: "#2A2A2A", // Subtle divider
        },
      },
      fontFamily: {
        founders: ["var(--font-founders-grotesk)", "system-ui", "sans-serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // Set light as the default theme
    darkTheme: "light", // Force light theme even in dark mode
    base: true,
    styled: true,
    utils: true,
  },
};
