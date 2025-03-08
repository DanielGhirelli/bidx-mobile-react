/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable class-based dark mode
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
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        error: 'var(--color-error)',
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        button: 'var(--button-color)',
        divider: 'var(--divider-color)',
        'bottom-bar-active': 'var(--bottom-bar-active)',
        'bottom-bar-shadow': 'var(--bottom-bar-shadow)',
        'bottom-bar-secondary-shadow': 'var(--bottom-bar-secondary-shadow)',
        'card-background': 'var(--card-background)',
        'card-secondary-background': 'var(--card-secondary-background)',
        'card-disabled-background': 'var(--card-disabled-background)',
        'shimmer-base-color': 'var(--shimmer-base-color)',
        'circular-progress': 'var(--circular-progress)',
        'button-gradient': {
          '1': 'var(--button-gradient-1)',
          '2': 'var(--button-gradient-2)',
          '3': 'var(--button-gradient-3)',
        },
        'button-secondary-gradient': {
          1: 'var(--button-secondary-gradient-1)',
          2: 'var(--button-secondary-gradient-2)',
          3: 'var(--button-secondary-gradient-3)',
        },
      },
    },
  },
  plugins: [],
};
