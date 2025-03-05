/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables dark mode via class switching
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
        primary: {
          light: '#13144A',
          dark: "#F2F2F2",
        },
        secondary: {
          light: "#FC6053",
          dark: "#13144A",
        },
        error: {
          light: "#A53428",
          dark: "#E57368",
        },
        background: {
          light: "#FBFBFD",
          dark: "#212121",
        },
        surface: {
          light: "#FBFBFD",
          dark: "#212121",
        },
        textPrimary: {
          light: "#13144A",
          dark: "#E6DFDF",
        },
        textSecondary: {
          light: "#5D6268",
          dark: "#D0CFCF",
        },
        button: {
          light: "#13144A",
          dark: "#424392",
        },
        divider: {
          light: "#E0E1EF",
          dark: "#3D3D3D",
        },
        bottomBarActive: {
          light: "#13144A",
          dark: "#E6DFDF",
        },
        bottomBarShadow: {
          light: "#0000001A",
          dark: "#FFFFFF1A",
        },
        cardBackground: {
          light: "#E7E6EE",
          dark: "#3A393E",
        },
        cardSecondaryBackground: {
          light: "#DEDCE9",
          dark: "#4E4B55",
        },
        cardDisabledBackground: {
          light: "#D3D3D3",
          dark: "#3D3D3D",
        },
        shimmerBaseColor: {
          light: "#CDCDCD",
          dark: "#676767",
        },
        circularProgress: {
          light: "#6550AC",
          dark: "#D09C34",
        },
      },
    },
  },
  plugins: [],
};
