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
        primary: {
          DEFAULT: '#13144A',
          dark: "#F2F2F2",
        },
        secondary: {
          DEFAULT: "#FC6053",
          dark: "#13144A",
        },
        error: {
          DEFAULT: "#A53428",
          dark: "#E57368",
        },
        background: {
          DEFAULT: "#FBFBFD",
          dark: "#212121",
        },
        surface: {
          DEFAULT: "#FBFBFD",
          dark: "#212121",
        },
        'text-primary': {
          DEFAULT: "#13144A",
          dark: "#E6DFDF",
        },
        'text-secondary': {
          DEFAULT: "#5D6268",
          dark: "#D0CFCF",
        },
        button: {
          DEFAULT: "#13144A",
          dark: "#424392",
        },
        divider: {
          DEFAULT: "#E0E1EF",
          dark: "#3D3D3D",
        },
        'bottom-bar-active': {
          DEFAULT: "#13144A",
          dark: "#E6DFDF",
        },
        'bottom-bar-shadow': {
          DEFAULT: "#0000001A",
          dark: "#FFFFFF1A",
        },
        'card-background': {
          DEFAULT: "#E7E6EE",
          dark: "#3A393E",
        },
        'card-secondary-background': {
          DEFAULT: "#DEDCE9",
          dark: "#4E4B55",
        },
        'card-disabled-background': {
          DEFAULT: "#D3D3D3",
          dark: "#3D3D3D",
        },
        'shimmer-base-color': {
          DEFAULT: "#CDCDCD",
          dark: "#676767",
        },
        'circular-progress': {
          DEFAULT: "#6550AC",
          dark: "#D09C34",
        },
      },
    },
  },
  plugins: [],
};
