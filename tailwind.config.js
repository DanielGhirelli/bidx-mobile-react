/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'source-sans': ["SourceSans3-Regular", "sans-serif"],
        'source-sans-bold': ["SourceSans3-Bold", "sans-serif"],
        'source-sans-extrabold': ["SourceSans3-ExtraBold", "sans-serif"],
        'source-sans-extralight': ["SourceSans3-ExtraLight", "sans-serif"],
        'source-sans-italic': ["SourceSans3-Italic", "sans-serif"],
        'source-sans-light': ["SourceSans3-Light", "sans-serif"],
        'source-sans-medium': ["SourceSans3-Medium", "sans-serif"],
        'source-sans-semibold': ["SourceSans3-SemiBold", "sans-serif"],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        error: "var(--color-error)",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        link: "var(--color-link)",
        divider: "var(--color-divider)",
        "button-background": "var(--color-button-background)",
        "button-border": "var(--color-button-border)",
        "button-inactive": "var(--color-button-inactive)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-placeholder": "var(--color-text-placeholder)",
        "text-hover": "var(--color-text-hover)",
        "card-background": "var(--color-card-background)",
        "card-secondary-background": "var(--color-card-secondary-background)",
        "card-disabled-background": "var(--color-card-disabled-background)",
        "circular-progress": "var(--color-circular-progress)",
      },
    },
  },
  plugins: [],
};
